import { useEffect } from 'react'

// Observe each reveal once, without measuring every element on every scroll.
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => { element.dataset.revealed = 'true' })
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.dataset.revealed = 'true'
          observer.unobserve(target)
        }
      })
    }, { rootMargin: '0px 0px -100px 0px' })
    elements.forEach((element) => {
      if (element.dataset.revealed !== 'true') observer.observe(element)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
