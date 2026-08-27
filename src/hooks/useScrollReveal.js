import { useEffect } from 'react'

// Adds/removes a 'visible' class on every [data-reveal] element in the
// document as it scrolls into view. Mirrors the original vanilla-JS
// revealOnScroll behavior (100px trigger offset from viewport bottom).
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const reveals = document.querySelectorAll('[data-reveal]')

    function revealOnScroll() {
      const windowHeight = window.innerHeight
      const elementVisible = 100
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        if (elementTop < windowHeight - elementVisible) {
          el.dataset.revealed = 'true'
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()

    return () => window.removeEventListener('scroll', revealOnScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
