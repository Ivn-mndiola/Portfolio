import { useCallback, useEffect, useRef, useState } from 'react'

export const TRANSITION_MS = 650

export default function useSlider(total, initialCurrent = 0) {
  const [current, setCurrent] = useState(initialCurrent)
  const [previous, setPrevious] = useState(null)
  const isAnimatingRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const goTo = useCallback(
    (next) => {
      if (isAnimatingRef.current || next === current) return
      isAnimatingRef.current = true
      setPrevious(current)
      setCurrent(next)
      timerRef.current = setTimeout(() => {
        isAnimatingRef.current = false
        setPrevious(null)
      }, TRANSITION_MS)
    },
    [current]
  )

  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo])
  const goNext = useCallback(() => goTo((current + 1) % total), [current, total, goTo])

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e) {
      if (document.querySelector('.site-nav[data-menu-open="true"]')) return
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  // Touch swipe
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let canSwipe = false
    function onTouchStart(e) {
      touchStartX = e.changedTouches[0].clientX
      touchStartY = e.changedTouches[0].clientY
      canSwipe = Boolean(e.target.closest('.projects-viewport')) && !document.querySelector('.site-nav[data-menu-open="true"]')
    }
    function onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - touchStartX
      const dy = e.changedTouches[0].clientY - touchStartY
      if (canSwipe && Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
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

  return { current, previous, goTo, goPrev, goNext }
}
