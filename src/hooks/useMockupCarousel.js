import { useCallback, useLayoutEffect, useRef } from 'react'

// Keep the selected card aligned as the track changes between one, two and
// four visible cards. Copies at either end preserve the existing looping.
export default function useMockupCarousel(trackRef, count) {
  const moveRef = useRef(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track || count === 0) return

    const originals = Array.from(track.querySelectorAll('.mockup-card'))
    const total = originals.length
    if (!total) return
    const clone = card => {
      const copy = card.cloneNode(true)
      copy.setAttribute('aria-hidden', 'true')
      return copy
    }
    const copies = [...originals.map(clone), ...originals.map(clone)]
    track.prepend(...copies.slice(0, total))
    track.append(...copies.slice(total))
    const cards = Array.from(track.querySelectorAll('.mockup-card'))
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let index = total
    let moving = false
    let dragging = false
    let settleTimer
    let resizeFrame

    // Use actual positions; multiplying rounded card widths accumulates drift.
    const position = i => cards[i].offsetLeft - cards[0].offsetLeft
    const realIndex = i => total + ((i % total) + total) % total
    const jump = i => {
      index = i
      track.scrollTo({ left: position(i), behavior: 'instant' })
    }

    function settle() {
      window.clearTimeout(settleTimer)
      if (dragging) return
      const left = track.scrollLeft
      let nearest = index
      cards.forEach((card, i) => {
        if (Math.abs(position(i) - left) < Math.abs(position(nearest) - left)) nearest = i
      })
      index = nearest
      const central = realIndex(index)
      if (central !== index) jump(central)
      moving = false
    }

    function scheduleSettle() {
      window.clearTimeout(settleTimer)
      // Fallback for browsers without scrollend; waits until scrolling stops.
      settleTimer = window.setTimeout(settle, 160)
    }

    moveRef.current = direction => {
      if (moving || dragging) return
      // Normalize before moving so either direction always has a full copy.
      index = realIndex(index)
      moving = true
      index += direction
      track.scrollTo({ left: position(index), behavior: motion.matches ? 'instant' : 'smooth' })
      scheduleSettle()
    }

    function onResize() {
      window.clearTimeout(settleTimer)
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        moving = false
        jump(realIndex(index))
      })
    }
    const onPointerDown = () => { dragging = true; window.clearTimeout(settleTimer) }
    const onPointerUp = () => { if (dragging) { dragging = false; scheduleSettle() } }

    jump(total)
    track.addEventListener('scroll', scheduleSettle, { passive: true })
    track.addEventListener('scrollend', settle)
    track.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    window.addEventListener('pointercancel', onPointerUp, { passive: true })
    window.addEventListener('resize', onResize)
    const observer = new ResizeObserver(onResize)
    observer.observe(track)
    observer.observe(originals[0])

    return () => {
      window.clearTimeout(settleTimer)
      window.cancelAnimationFrame(resizeFrame)
      observer.disconnect()
      track.removeEventListener('scroll', scheduleSettle)
      track.removeEventListener('scrollend', settle)
      track.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
      window.removeEventListener('resize', onResize)
      copies.forEach(card => card.remove())
      moveRef.current = null
    }
  }, [trackRef, count])

  const goNext = useCallback(() => moveRef.current?.(1), [])
  const goPrev = useCallback(() => moveRef.current?.(-1), [])
  return { goNext, goPrev }
}
