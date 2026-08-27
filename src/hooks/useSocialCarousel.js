import { useEffect, useRef, useState } from 'react'

// Centered-peek infinite carousel: active card scales up and centers,
// side cards are dimmed/scaled down, with clones front and back for
// seamless looping. Mirrors the original danes.js social slider.
export default function useSocialCarousel(trackRef, wrapperRef, total) {
  const currentIndexRef = useRef(total)
  const isAnimatingRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const allCardsRef = useRef([])

  useEffect(() => {
    const track = trackRef.current
    const wrapper = wrapperRef.current
    if (!track || !wrapper || total === 0) return

    const originalCards = Array.from(track.querySelectorAll('.social-card'))

    // Clone for infinite loop
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      track.appendChild(clone)
    })
    originalCards
      .slice()
      .reverse()
      .forEach((card) => {
        const clone = card.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        track.prepend(clone)
      })

    const allCards = Array.from(track.querySelectorAll('.social-card'))
    allCardsRef.current = allCards
    currentIndexRef.current = total

    const getTransformValue = (index) => {
      const cardWidth = allCards[0]?.offsetWidth ?? 0
      const gap = parseFloat(window.getComputedStyle(track).gap) || 20
      const step = cardWidth + gap
      const wrapperWidth = wrapper.offsetWidth
      const centerOffset = wrapperWidth / 2 - cardWidth / 2
      return -(index * step) + centerOffset
    }

    const syncFocus = (activeRealIdx) => {
      allCards.forEach((card, idx) => {
        card.dataset.active = String(idx % total === activeRealIdx)
      })
      setActiveIndex(activeRealIdx)
    }

    track.style.transition = 'none'
    track.style.transform = `translateX(${getTransformValue(currentIndexRef.current)}px)`
    syncFocus(0)

    // Click-to-select on any card
    const clickHandlers = allCards.map((card, idx) => {
      const handler = () => {
        if (currentIndexRef.current !== idx) slideTo(idx)
      }
      card.addEventListener('click', handler)
      return handler
    })

    function slideTo(index) {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      currentIndexRef.current = index
      track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
      track.style.transform = `translateX(${getTransformValue(index)}px)`

      let realIndex = (index - total) % total
      if (realIndex < 0) realIndex += total
      syncFocus(realIndex)

      setTimeout(() => {
        let jump = false
        if (currentIndexRef.current < total) {
          currentIndexRef.current += total
          jump = true
        } else if (currentIndexRef.current >= total * 2) {
          currentIndexRef.current -= total
          jump = true
        }
        if (jump) {
          track.style.transition = 'none'
          track.style.transform = `translateX(${getTransformValue(currentIndexRef.current)}px)`
          // force reflow
          // eslint-disable-next-line no-unused-expressions
          track.offsetHeight
        }
        isAnimatingRef.current = false
      }, 400)
    }

    track._socialSlideTo = slideTo
    track._socialCurrentIndexRef = currentIndexRef

    const onResize = () => {
      track.style.transition = 'none'
      track.style.transform = `translateX(${getTransformValue(currentIndexRef.current)}px)`
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      allCards.forEach((card, idx) => card.removeEventListener('click', clickHandlers[idx]))
      track.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackRef, wrapperRef, total])

  function goNext() {
    const track = trackRef.current
    if (track?._socialSlideTo) track._socialSlideTo(track._socialCurrentIndexRef.current + 1)
  }
  function goPrev() {
    const track = trackRef.current
    if (track?._socialSlideTo) track._socialSlideTo(track._socialCurrentIndexRef.current - 1)
  }
  function goToDot(i) {
    const track = trackRef.current
    if (track?._socialSlideTo) track._socialSlideTo(i + total)
  }

  return { activeIndex, goNext, goPrev, goToDot }
}
