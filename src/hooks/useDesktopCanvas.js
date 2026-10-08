import { useLayoutEffect, useState } from 'react'
import { DESKTOP_WIDTH, DESKTOP_HEIGHT } from '../data/desktopDesign.js'

export const TABLET_LANDSCAPE = '(min-width: 768px) and (max-width: 1366px) and (min-height: 600px) and (orientation: landscape) and (any-pointer: coarse)'
export const DESKTOP_ARTWORK = `(min-width: 1201px), ${TABLET_LANDSCAPE}`

function measureCanvas() {
  if (!window.matchMedia(TABLET_LANDSCAPE).matches) return null
  const width = document.documentElement.clientWidth
  // Use the layout viewport, which follows Safari's toolbar without reacting
  // to pinch zoom or a keyboard's smaller visual viewport.
  const height = window.innerHeight
  const scale = Math.min(width / DESKTOP_WIDTH, height / DESKTOP_HEIGHT)
  return { scale, viewportHeight: height }
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
    landscape.addEventListener('change', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
      landscape.removeEventListener('change', update)
    }
  }, [])

  return {
    isScaled: canvas !== null,
    canvasStyle: canvas === null ? undefined : {
      '--canvas-width': `${DESKTOP_WIDTH}px`,
      '--canvas-height': `${DESKTOP_HEIGHT}px`,
      '--canvas-physical-height': `${canvas.viewportHeight}px`,
      '--canvas-scale': canvas.scale,
      '--canvas-vw': `${DESKTOP_WIDTH / 100}px`,
      '--canvas-vh': `${DESKTOP_HEIGHT / 100}px`,
      '--canvas-svh': `${DESKTOP_HEIGHT / 100}px`,
      '--canvas-dvh': `${DESKTOP_HEIGHT / 100}px`,
      '--canvas-lvh': `${DESKTOP_HEIGHT / 100}px`,
      '--canvas-vmin': `${Math.min(DESKTOP_WIDTH, DESKTOP_HEIGHT) / 100}px`,
      '--canvas-vmax': `${Math.max(DESKTOP_WIDTH, DESKTOP_HEIGHT) / 100}px`,
    },
  }
}
