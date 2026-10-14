import { useEffect, useState } from 'react'
import { waitForImage } from '../utils/animationReady.js'

export default function useRosterCycle(count, active, rosterRef) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!active || count === 0) return

    const controller = new AbortController()
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const images = [...(rosterRef.current?.querySelectorAll('img') || [])]
    let readyIndexes = []
    let timer

    function syncCycle() {
      clearInterval(timer)
      if (controller.signal.aborted || document.hidden || motion.matches || readyIndexes.length < 2) return
      timer = setInterval(() => {
        if (controller.signal.aborted || document.hidden || motion.matches) return
        setIndex((current) => readyIndexes[(readyIndexes.indexOf(current) + 1) % readyIndexes.length])
      }, 2500)
    }

    Promise.all(images.map((image) => waitForImage(image, controller.signal))).then(() => {
      if (controller.signal.aborted) return
      readyIndexes = images.flatMap((image, position) => image.naturalWidth > 0 ? [position] : [])
      if (readyIndexes.length) {
        setIndex((current) => readyIndexes.includes(current) ? current : readyIndexes[0])
      }
      syncCycle()
    })

    document.addEventListener('visibilitychange', syncCycle)
    motion.addEventListener('change', syncCycle)
    return () => {
      controller.abort()
      clearInterval(timer)
      document.removeEventListener('visibilitychange', syncCycle)
      motion.removeEventListener('change', syncCycle)
    }
  }, [active, count, rosterRef])

  return index
}
