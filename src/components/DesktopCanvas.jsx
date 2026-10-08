import { createContext, useContext, useLayoutEffect } from 'react'
import useDesktopCanvas from '../hooks/useDesktopCanvas.js'
import './DesktopCanvas.css'

const CanvasContext = createContext(false)
export const useCanvasMode = () => useContext(CanvasContext)

export function pageScrollToTop() {
  const scroll = document.querySelector('[data-site-canvas="true"] .desktop-canvas-scroll')
  if (scroll) scroll.scrollTo(0, 0)
  else window.scrollTo(0, 0)
}

export function lockPageScroll() {
  const targets = [document.body, document.documentElement,
    document.querySelector('[data-site-canvas="true"] .desktop-canvas-scroll')].filter(Boolean)
  const previous = targets.map((element) => element.style.overflow)
  targets.forEach((element) => { element.style.overflow = 'hidden' })
  return () => targets.forEach((element, index) => { element.style.overflow = previous[index] })
}

export default function DesktopCanvas({ children }) {
  const { isScaled, canvasStyle } = useDesktopCanvas()

  useLayoutEffect(() => {
    if (!isScaled) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => { document.body.style.overflow = previous }
  }, [isScaled])

  return (
    <CanvasContext.Provider value={isScaled}>
      <div className="desktop-canvas-stage" data-site-canvas={isScaled} style={canvasStyle}>
        <div className="desktop-canvas-viewport">
          <div className="desktop-canvas-scroll">{children}</div>
          <div id="desktop-canvas-overlays" />
        </div>
      </div>
    </CanvasContext.Provider>
  )
}
