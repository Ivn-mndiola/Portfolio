import { useEffect, useState } from 'react'
import { waitForImage, waitForVisiblePage } from '../utils/animationReady.js'

// Reproduces the original staged reveal timing:
// fade-in logos @100ms, delay-1 items @300ms, delay-2 @900ms, delay-3 @1600ms
export default function useHeroAnimation(portraitRef) {
  const [visible, setVisible] = useState({
    fade: false,
    delay1: false,
    delay2: false,
    delay3: false,
  })

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) {
      setVisible({ fade: true, delay1: true, delay2: true, delay3: true })
      return
    }
    const controller = new AbortController()
    const timers = []
    const imageReady = waitForImage(portraitRef.current?.querySelector('img'), controller.signal)
    const pageReady = Promise.all([
      document.fonts?.ready,
      waitForVisiblePage(controller.signal),
    ]).then(() => {
      if (controller.signal.aborted) return null
      const startedAt = performance.now()
      for (const [key, delay] of [['fade', 100], ['delay1', 300], ['delay3', 1600]]) {
        timers.push(setTimeout(() => setVisible((value) => ({ ...value, [key]: true })), delay))
      }
      return startedAt
    })
    Promise.all([pageReady, imageReady]).then(([startedAt]) => {
      if (startedAt === null || controller.signal.aborted) return
      waitForVisiblePage(controller.signal).then(() => {
        if (controller.signal.aborted) return
        timers.push(setTimeout(() => setVisible((value) => ({ ...value, delay2: true })),
          Math.max(0, 900 - (performance.now() - startedAt))))
      })
    })
    function onMotionChange() {
      if (!motion.matches) return
      controller.abort()
      timers.forEach(clearTimeout)
      setVisible({ fade: true, delay1: true, delay2: true, delay3: true })
    }
    motion.addEventListener('change', onMotionChange)
    return () => {
      controller.abort()
      timers.forEach(clearTimeout)
      motion.removeEventListener('change', onMotionChange)
    }
  }, [portraitRef])

  return visible
}
