import { useLayoutEffect, useState } from 'react'
import { DESKTOP_WIDTH } from '../data/desktopDesign.js'

export const TABLET_LANDSCAPE = '(min-width: 768px) and (max-width: 1440px) and (min-height: 500px) and (orientation: landscape) and (any-pointer: coarse)'
export const DESKTOP_ARTWORK = `(min-width: 1201px), ${TABLET_LANDSCAPE}`

function measureCanvas() {
  if (!window.matchMedia(TABLET_LANDSCAPE).matches) return null
  const width = document.documentElement.clientWidth
  // Safari's visible height changes when its toolbars expand or collapse.
  // Leave the composition's scale alone during browser pinch zoom.
  const viewport = window.visualViewport
  const height = viewport && Math.abs(viewport.scale - 1) < 0.01
    ? viewport.height
    : window.innerHeight
  const scale = width / DESKTOP_WIDTH
  return { scale, height: height / scale, viewportHeight: height }
}

export default function useDesktopCanvas() {
  const [canvas, setCanvas] = useState(measureCanvas)

  useLayoutEffect(() => {
    const landscape = window.matchMedia(TABLET_LANDSCAPE)
    function update() {
      const next = measureCanvas()
      setCanvas((previous) => previous?.scale === next?.scale && previous?.viewportHeight === next?.viewportHeight ? previous : next)
    }
    window.addEventListener('resize', update)
    window.visualViewport?.addEventListener('resize', update)
    landscape.addEventListener('change', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('resize', update)
      landscape.removeEventListener('change', update)
    }
  }, [])

  return {
    isScaled: canvas !== null,
    canvasStyle: canvas === null ? undefined : {
      '--canvas-width': `${DESKTOP_WIDTH}px`,
      '--canvas-height': `${canvas.height}px`,
      '--canvas-physical-height': `${canvas.viewportHeight}px`,
      '--canvas-scale': canvas.scale,
      '--canvas-vw': `${DESKTOP_WIDTH / 100}px`,
      '--canvas-vh': `${canvas.height / 100}px`,
      '--canvas-svh': `${canvas.height / 100}px`,
      '--canvas-dvh': `${canvas.height / 100}px`,
      '--canvas-lvh': `${canvas.height / 100}px`,
      '--canvas-vmin': `${Math.min(DESKTOP_WIDTH, canvas.height) / 100}px`,
      '--canvas-vmax': `${Math.max(DESKTOP_WIDTH, canvas.height) / 100}px`,
    },
  }
}
