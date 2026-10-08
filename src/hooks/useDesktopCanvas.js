import { useLayoutEffect, useRef, useState } from 'react'

const TABLET_LANDSCAPE = '(min-width: 768px) and (max-width: 1366px) and (min-height: 600px) and (orientation: landscape) and (any-pointer: coarse)'

export default function useDesktopCanvas(width, height) {
  const stageRef = useRef(null)
  const [scale, setScale] = useState(null)

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const landscape = window.matchMedia(TABLET_LANDSCAPE)
    function update() {
      setScale(landscape.matches
        ? Math.min(stage.clientWidth / width, stage.clientHeight / height)
        : null)
    }

    const observer = new ResizeObserver(update)
    observer.observe(stage)
    landscape.addEventListener('change', update)
    update()

    return () => {
      observer.disconnect()
      landscape.removeEventListener('change', update)
    }
  }, [width, height])

  return {
    stageRef,
    isScaled: scale !== null,
    canvasStyle: scale === null ? undefined : {
      '--project-design-width': `${width}px`,
      '--project-design-height': `${height}px`,
      '--project-vw': `${width / 100}px`,
      '--project-vh': `${height / 100}px`,
      '--project-svh': `${height / 100}px`,
      '--project-canvas-scale': scale,
    },
  }
}
