import { useCallback, useEffect, useRef, useState } from 'react'

const TRANSITION_MS = 650

export default function useSlider(total) {
  const [current, setCurrent] = useState(0)
  const isAnimatingRef = useRef(false)

  const goTo = useCallback(
    (next) => {
      if (isAnimatingRef.current || next === current) return
      isAnimatingRef.current = true
      setCurrent(next)
      setTimeout(() => {
        isAnimatingRef.current = false
      }, TRANSITION_MS)
    },
    [current]
  )

  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo])
  const goNext = useCallback(() => goTo((current + 1) % total), [current, total, goTo])

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  // Touch swipe
  useEffect(() => {
    let touchStartX = 0
    function onTouchStart(e) {
      touchStartX = e.changedTouches[0].clientX
    }
    function onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - touchStartX
      if (Math.abs(dx) > 48) {
        dx < 0 ? goNext() : goPrev()
      }
    }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goPrev])

  return { current, goTo, goPrev, goNext }
}
