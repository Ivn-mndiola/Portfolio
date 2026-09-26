import { useLayoutEffect } from 'react'

// Layout offsets ignore the reveal transform and keep arrows beside headings.
function headingPosition(heading, section) {
  let node = heading
  let top = 0
  while (node && node !== section) {
    top += node.offsetTop
    node = node.offsetParent
  }
  const style = window.getComputedStyle(heading)
  const lineHeight = parseFloat(style.lineHeight) || (parseFloat(style.fontSize) || 16) * 1.2
  return top + lineHeight / 2
}

export default function useNiaScroll(pageRef) {
  useLayoutEffect(() => {
    const page = pageRef.current
    if (!page) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const reveals = [...page.querySelectorAll('.nia-reveal')]
    const revealSet = new Set(reveals)
    const decoding = new Set()
    const tracks = [...page.querySelectorAll('.nia-timeline')].map(element => ({
      element,
      section: element.parentElement,
      headings: [...element.querySelectorAll('[data-nia-target]')].map(marker =>
        page.querySelector(`[data-nia-anchor="${marker.dataset.niaTarget}"]`)),
    }))
    let frame = null
    let disposed = false
    let revealObserver

    function alignArrows() {
      frame = null
      if (disposed) return

      // Read all geometry before writing styles. This runs on layout changes,
      // never on every scroll frame.
      const positions = tracks.map(track => track.headings.map(heading =>
        heading ? headingPosition(heading, track.section) : null))
      tracks.forEach((track, index) => {
        positions[index].forEach((top, markerIndex) => {
          if (top !== null) track.element.style.setProperty(`--nia-stop-${markerIndex}`, `${top}px`)
        })
      })
    }

    function measure() {
      if (!disposed && frame === null) frame = window.requestAnimationFrame(alignArrows)
    }

    function reveal(element) {
      if (disposed || element.dataset.niaReveal !== 'pending' || decoding.has(element)) return
      decoding.add(element)
      revealObserver.unobserve(element)
      const images = element.matches('img') ? [element] : [...element.querySelectorAll('img')]
      const start = () => {
        decoding.delete(element)
        if (disposed || !element.isConnected || element.dataset.niaReveal !== 'pending') return
        element.dataset.niaReveal = motion.matches ? 'done' : 'running'
      }
      // Decode large artwork before animating so a late image load doesn't
      // make the entrance appear to start a second time.
      if (images.length) {
        Promise.allSettled(images.map(image => image.decode ? image.decode() : Promise.resolve())).then(start)
      } else {
        start()
      }
    }

    function onAnimationEnd(event) {
      if (event.animationName === 'nia-reveal-in' && revealSet.has(event.target)) {
        event.target.dataset.niaReveal = 'done'
      }
    }

    function configureMotion() {
      revealObserver?.disconnect()
      if (motion.matches || !('IntersectionObserver' in window)) {
        reveals.forEach(element => { element.dataset.niaReveal = 'done' })
        return
      }
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target) })
      }, { rootMargin: '0px 0px -48px 0px', threshold: 0 })

      // Content already on screen stays visible. States survive effect setup,
      // resizing and reverse scroll, so an item can only enter once.
      const initialStates = reveals.map(element => element.dataset.niaReveal ||
        (element.getBoundingClientRect().top < window.innerHeight ? 'done' : 'pending'))
      reveals.forEach((element, index) => {
        element.dataset.niaReveal = initialStates[index]
        if (initialStates[index] === 'pending') revealObserver.observe(element)
      })
    }

    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(measure) : null
    resizeObserver?.observe(page)
    tracks.forEach(track => track.headings.forEach(heading => { if (heading) resizeObserver?.observe(heading) }))
    window.addEventListener('resize', measure)
    page.addEventListener('load', measure, true)
    page.addEventListener('animationend', onAnimationEnd)
    motion.addEventListener('change', configureMotion)
    document.fonts?.ready.then(measure)
    configureMotion()
    measure()

    return () => {
      disposed = true
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
      page.removeEventListener('load', measure, true)
      page.removeEventListener('animationend', onAnimationEnd)
      motion.removeEventListener('change', configureMotion)
      revealObserver?.disconnect()
      resizeObserver?.disconnect()
      decoding.clear()
    }
  }, [pageRef])
}
