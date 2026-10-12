import { useEffect, useRef, useState } from 'react'
import { waitForImage } from '../utils/animationReady.js'
import './ClientLogos.css'

const LOGOS = [
  { src: '/assets/images/danes/danes-icon.png', alt: 'DS', width: 100, height: 109, className: 'h-[60px]' },
  { src: '/assets/images/danes/danes-main.png', alt: 'DANES MAIN', width: 166, height: 76, className: 'h-10' },
  { src: '/assets/images/dbfortri/dbfortri-logo-black-vector.svg', alt: 'dbfortri', width: 700, height: 285, className: 'h-[60px]' },
  { src: '/assets/images/nia/nia-icon.png', alt: 'NIA', width: 72, height: 54, className: 'h-[33px]' },
  { src: '/assets/images/nia/nia-main.png', alt: 'NIA MAIN', width: 202, height: 56, className: 'h-[33px]' },
  { src: '/assets/images/gamedev/game-dev-icon.png', alt: 'GAME DEV', width: 174, height: 170, className: 'h-10' },
  { src: '/assets/images/gamedev/game-main.png', alt: 'ATLAS', width: 276, height: 80, className: 'h-10' },
  { src: '/assets/images/source/source-icon.png', alt: 'SOURCE', width: 28, height: 80, className: 'h-[45px]' },
  { src: '/assets/images/source/source-main.png', alt: 'SOURCE', width: 146, height: 80, className: 'h-[45px]' },
]

export default function ClientLogos({ visible }) {
  const viewportRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    // Start at the beginning of a complete row, including on a first visit.
    Promise.all([...viewportRef.current.querySelectorAll('img')]
      .map((image) => waitForImage(image, controller.signal))).then(() => {
      if (!controller.signal.aborted) setReady(true)
    })
    return () => controller.abort()
  }, [])

  return (
    <footer
      data-logos-ready={ready}
      className={`home-client-logos pointer-events-none absolute inset-x-0 bottom-10 z-10 mx-auto isolate h-[72px] w-[60vw] max-w-[900px] transition-opacity duration-[1500ms] motion-reduce:transition-none max-md:bottom-5 max-md:w-[90vw] ${visible && ready ? 'opacity-75' : 'opacity-0'}`}
    >
      <div ref={viewportRef} className="home-logo-viewport h-full w-full">
        <div
          className="home-logo-track flex h-full w-max animate-marquee items-center"
          style={{ animationPlayState: ready ? 'running' : 'paused' }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="home-logo-group flex h-full shrink-0 items-center" aria-hidden={copy === 1 || undefined}>
              {LOGOS.map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={copy === 0 ? logo.alt : ''}
                  width={logo.width}
                  height={logo.height}
                  loading="eager"
                  decoding="async"
                  className={`mx-[35px] block w-auto max-w-none shrink-0 object-contain brightness-0 invert max-md:mx-5 max-md:scale-[0.8] ${logo.className}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
