import { useEffect } from 'react'

// Toggles a `.nav-red` class on the <nav> element while its vertical
// center overlaps designated dark-background sections (hero, mockups, social).
// Only meant to run on pages that want this behavior — always cleans up
// the class on unmount so it never leaks onto other routes' nav.
export default function useNavColorToggle(darkSectionSelectors = []) {
  useEffect(() => {
    const nav = document.querySelector('nav')

    function onScroll() {
      if (!nav) return

      const sections = darkSectionSelectors
        .flatMap((sel) => Array.from(document.querySelectorAll(sel)))
        .filter(Boolean)

      const navRect = nav.getBoundingClientRect()
      const navCenter = navRect.top + navRect.height / 2

      let isOverDark = false
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (navCenter >= rect.top && navCenter <= rect.bottom) {
          isOverDark = true
        }
      })

      nav.classList.toggle('nav-red', !isOverDark)
    }

    document.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      document.removeEventListener('scroll', onScroll)
      // Always reset — otherwise the class sticks around on the shared
      // <nav> DOM node when navigating to a page that doesn't use this hook.
      if (nav) nav.classList.remove('nav-red')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
