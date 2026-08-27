import { useEffect, useRef } from 'react'

// Infinite-loop horizontal scroll carousel: clones the track's cards front
// and back, then jumps invisibly when the scroll crosses into clone territory.
export default function useMockupCarousel(trackRef, count) {
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track || count === 0) return

    const originalCards = Array.from(track.querySelectorAll('.mockup-card'))
    const totalOriginal = originalCards.length

    // Clone at the end
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      track.appendChild(clone)
    })
    // Clone at the start (reversed so order reads correctly)
    originalCards
      .slice()
      .reverse()
      .forEach((card) => {
        const clone = card.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        track.prepend(clone)
      })

    const getScrollAmount = () => {
      const card = track.querySelector('.mockup-card')
      if (card) {
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0
        return card.offsetWidth + gap
      }
      return 300
    }

    const jumpToRealStart = () => {
      track.scrollLeft = getScrollAmount() * totalOriginal
    }
    jumpToRealStart()

    const handleLoopReset = () => {
      const amount = getScrollAmount()
      const totalWidth = amount * totalOriginal
      const cloneStart = amount * totalOriginal
      const cloneEnd = amount * totalOriginal * 2

      if (track.scrollLeft >= cloneEnd) {
        track.scrollLeft = cloneStart
      }
      if (track.scrollLeft < totalWidth * 0.5 - amount) {
        track.scrollLeft = cloneEnd - amount
      }
    }

    track._mockupGetScrollAmount = getScrollAmount
    track._mockupHandleLoopReset = handleLoopReset
    track._mockupIsScrollingRef = isScrollingRef

    return () => {
      // Remove clones on cleanup (StrictMode / unmount safety)
      track.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove())
    }
  }, [trackRef, count])

  function goNext() {
    const track = trackRef.current
    if (!track || isScrollingRef.current) return
    isScrollingRef.current = true
    track.scrollBy({ left: track._mockupGetScrollAmount(), behavior: 'smooth' })
    setTimeout(() => {
      track._mockupHandleLoopReset()
      isScrollingRef.current = false
    }, 400)
  }

  function goPrev() {
    const track = trackRef.current
    if (!track || isScrollingRef.current) return
    isScrollingRef.current = true
    track.scrollBy({ left: -track._mockupGetScrollAmount(), behavior: 'smooth' })
    setTimeout(() => {
      track._mockupHandleLoopReset()
      isScrollingRef.current = false
    }, 400)
  }

  return { goNext, goPrev }
}
