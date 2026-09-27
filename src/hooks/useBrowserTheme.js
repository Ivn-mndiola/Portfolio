import { useLayoutEffect } from 'react'

// The HTML/body canvas covers newer Safari versions; theme-color also serves
// older Safari and other mobile browsers. Update together before React paints.
export default function useBrowserTheme(color) {
  useLayoutEffect(() => {
    // ProjectsPage owns the color while its carousel is mounted.
    if (!color) return

    const root = document.documentElement
    const property = '--browser-theme-color'
    const previousColor = root.style.getPropertyValue(property)
    const previousPriority = root.style.getPropertyPriority(property)
    let meta = document.querySelector('meta[name="theme-color"]')
    const createdMeta = !meta

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }

    const previousMetaColor = meta.getAttribute('content')
    root.style.setProperty(property, color)
    meta.setAttribute('content', color)

    return () => {
      if (previousColor) root.style.setProperty(property, previousColor, previousPriority)
      else root.style.removeProperty(property)

      if (createdMeta) meta.remove()
      else if (previousMetaColor === null) meta.removeAttribute('content')
      else meta.setAttribute('content', previousMetaColor)
    }
  }, [color])
}
