import { DESKTOP_ARTWORK } from '../../hooks/useDesktopCanvas.js'
import ResponsiveImage from '../../components/ResponsiveImage.jsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import CaseStudyDescription from '../../components/CaseStudyDescription.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.source-hero', '.source-brand-dark-nav', '.source-social-dark-nav']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const SOCIAL_POSTS = [
  { src: '/assets/images/source/source-social-01-pulsar.jpg', alt: 'Pulsar X2V2 gaming mouse campaign' },
  { src: '/assets/images/source/source-social-02-hyperx.jpg', alt: 'HyperX QuadCast microphone campaign' },
  { src: '/assets/images/source/source-social-03-msi.jpg', alt: 'MSI Optix gaming monitor campaign' },
  { src: '/assets/images/source/source-social-04-ttracing.jpg', alt: 'TTRacing gaming chair campaign' },
  { src: '/assets/images/source/source-social-05-steelseries.jpg', alt: 'SteelSeries Arctis Nova 5 campaign' },
  { src: '/assets/images/source/source-social-06-acer.jpg', alt: 'Acer Predator Helios Neo 16 campaign' },
  { src: '/assets/images/source/source-social-07-rtx.jpg', alt: 'ROG Strix RTX 5070 campaign' },
  { src: '/assets/images/source/source-social-08-razer.jpg', alt: 'Razer Huntsman Mini campaign' },
  { src: '/assets/images/source/source-social-09-kingston.jpg', alt: 'Kingston Fury Beast campaign' },
]

const MINI_LOGOS = [1, 2, 3, 4].map((number) => ({
  src: `/assets/images/source/source-mini-logo-${number}.jpg`,
  alt: `Source mini logo ${number}`,
}))

function ArrowIcon({ direction }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  )
}

export default function SourcePage() {
  const [currentPost, setCurrentPost] = useState(0)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [carouselVisible, setCarouselVisible] = useState(false)
  const [previousPost, setPreviousPost] = useState(null)
  const carouselRef = useRef(null)

  useScrollReveal([currentPost])

  const goPrevious = useCallback(() => {
    setPreviousPost(currentPost)
    setCurrentPost((currentPost - 1 + SOCIAL_POSTS.length) % SOCIAL_POSTS.length)
  }, [currentPost])

  const goNext = useCallback(() => {
    setPreviousPost(currentPost)
    setCurrentPost((currentPost + 1) % SOCIAL_POSTS.length)
  }, [currentPost])

  useEffect(() => {
    function onKeyDown(event) {
      if (document.querySelector('.site-nav[data-menu-open="true"]') || event.target.closest('input, textarea, select')) return
      if (event.key === 'ArrowLeft') goPrevious()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrevious])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setCarouselVisible(entry.isIntersecting))
    if (carouselRef.current) observer.observe(carouselRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setPreviousPost(null), 500)
    return () => window.clearTimeout(timer)
  }, [currentPost])

  useEffect(() => {
    if (carouselPaused || !carouselVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => { if (!document.hidden) goNext() }, 6000)
    return () => window.clearInterval(timer)
  }, [carouselPaused, carouselVisible, goNext])

  return (
    <div className="source-case-page questrial-regular relative min-h-screen overflow-x-hidden bg-[#233F91] text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="blue" />

      <picture aria-hidden="true">
          <source media={DESKTOP_ARTWORK} srcSet="/assets/images/source/source-bg-main-1920.webp 1920w, /assets/images/source/source-bg-main-3840.webp 3840w" sizes="100vw" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-auto w-full select-none min-[1201px]:block"
       width="3840" height="7776" />
        </picture>

      <main className="relative z-10">
        <section className="source-hero relative h-[65.7vw] bg-transparent max-[1201px]:flex max-[1201px]:h-auto max-[1201px]:min-h-svh max-[1201px]:flex-col max-[1201px]:items-center max-[1201px]:bg-[linear-gradient(145deg,#98A8D0_0%,#24428F_55%,#020710_100%)] max-[1201px]:px-6 max-[1201px]:pb-12 max-[1201px]:pt-36">
          <ResponsiveImage loading="eager" fetchPriority="high"
            src="/assets/images/source/SOURCE-PROJ.png"
            alt="Source"
            className={`absolute left-1/2 top-[18.5%] w-[30vw] -translate-x-1/2 object-contain drop-shadow-[0_14px_14px_rgba(0,0,0,0.25)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-full max-[1201px]:max-w-[430px] max-[1201px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />

          <CaseStudyDescription variant="intro" className={`absolute left-1/2 top-[48%] w-[44vw] max-w-[800px] -translate-x-1/2 text-center text-white/95 max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:mt-8 max-[1201px]:w-full max-[1201px]:max-w-2xl max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            SOURCE is a Baguio City based hub for premium PC parts, components, and peripherals, dedicated to helping gamers, creators, and PC enthusiasts build high-performance systems with confidence. Offering authentic hardware, expert guidance, and competitive pricing, SOURCE provides everything from powerful GPUs and high-speed memory to ergonomic accessories and immersive gaming gear, making it a trusted destination for elevating your computing experience from the heart of the Cordilleras.
          </CaseStudyDescription>

          <div className="absolute inset-x-0 bottom-[7.8%] px-[8vw] max-[1201px]:relative max-[1201px]:inset-auto max-[1201px]:mt-auto max-[1201px]:w-full max-[1201px]:px-0 max-[1201px]:pt-16">
            <CaseStudyMeta
              fontClassName="font-ui-questrial"
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[1201px]:w-full ${REVEAL}`}
              dataReveal
              projectLine1="Visuals and Brand Identity"
              projectLine2="for Source 2026"
              scope={['Logo', 'Socials', 'Layout Design', 'Marketing Design', 'Brand Identity']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
            />
          </div>
        </section>

        <section className="source-brand-layout relative h-[81vw] bg-transparent max-[1201px]:h-auto max-[1201px]:space-y-6 max-[1201px]:bg-[linear-gradient(180deg,#244394_0%,#6F86B8_40%,#FFFFFF_85%,#244394_100%)] max-[1201px]:px-5 max-[1201px]:pb-0 max-[1201px]:pt-16">
          <div className="source-brand-dark-nav pointer-events-none absolute inset-x-0 top-0 h-[58%] max-[1201px]:h-[52%]" aria-hidden="true" />

          <div className={`absolute left-[18.35%] top-[9.3%] flex h-[21.5%] w-[39.2%] items-center justify-center rounded-[4vw] border border-white/30 bg-white/[0.12] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:h-auto max-[1201px]:w-full max-[1201px]:rounded-[32px] max-[1201px]:px-8 max-[1201px]:py-12 ${REVEAL}`} data-reveal>
            <ResponsiveImage src="/assets/images/source/SOURCE-PROJ.png" alt="Source main logo" className="w-[58%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] max-[1201px]:w-full max-[1201px]:max-w-[360px]" />
            <span className="absolute bottom-[10%] right-[8%] text-[clamp(7px,0.62vw,12px)] text-white/90">Main Logo</span>
          </div>

          <div className={`absolute left-[18.35%] top-[32.53%] flex h-[21.5%] w-[39.2%] items-center justify-center gap-[1.8vw] rounded-[4vw] border border-white/30 bg-white/[0.12] px-[3vw] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:h-auto max-[1201px]:w-full max-[1201px]:flex-wrap max-[1201px]:gap-4 max-[1201px]:rounded-[32px] max-[1201px]:px-5 max-[1201px]:py-10 ${REVEAL}`} data-reveal>
            <span className="absolute right-[8%] top-[11%] text-[clamp(7px,0.62vw,12px)] text-white/90">ICONS</span>
            {MINI_LOGOS.map((logo) => (
              <div key={logo.src} className="flex aspect-square w-[18%] items-center justify-center rounded-[1.5vw] border border-white/40 bg-white/15 p-[0.8vw] shadow-[0_8px_20px_rgba(8,23,70,0.15)] max-[1201px]:w-[calc(50%_-_0.5rem)] max-[1201px]:max-w-[120px] max-[1201px]:rounded-2xl max-[1201px]:p-2">
                <ResponsiveImage src={logo.src} alt={logo.alt} className="h-full w-full rounded-[1vw] object-cover max-[1201px]:rounded-xl" />
              </div>
            ))}
          </div>

          <div className={`absolute left-[58.65%] top-[9.3%] flex h-[44.73%] w-[23.16%] flex-col rounded-[4vw] border border-white/30 bg-white/[0.12] px-[3.66%] pb-0 pt-[5.35%] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:h-auto max-[1201px]:w-full max-[1201px]:rounded-[32px] max-[1201px]:px-8 max-[1201px]:py-10 ${REVEAL}`} data-reveal>
            <div className="mb-[3.9vw] text-center max-[1201px]:mb-10">
              <p className="font-bahnschrift text-[clamp(22px,1.98vw,38px)] font-normal leading-none">Bahnschrift</p>
              <span className="case-study-label text-[clamp(7px,0.63vw,12px)] uppercase">Logo Typography</span>
              <p className="mt-[1vw] font-questrial text-[clamp(22px,2.09vw,40px)] leading-none max-[1201px]:mt-5">Questrial</p>
              <span className="font-questrial text-[clamp(7px,0.63vw,12px)] uppercase">Secondary Font</span>
            </div>
            <ResponsiveImage
              src="/assets/images/source/source-color.svg"
              alt="Source color palette: 1E3A8A, 0F172A, 3A3A3A, and FFFFFF"
              className="block h-auto w-full"
            />
          </div>

          <div className={`absolute left-[22%] top-[66%] w-[29%] text-center text-[#244394] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-full max-[1201px]:py-12 ${REVEAL}`} data-reveal>
            <h2 className="text-[clamp(34px,4.3vw,82px)] font-bold tracking-[-0.05em] [text-shadow:0_4px_7px_rgba(36,67,148,0.28)]">Hello, Baguio!</h2>
            <p className="mt-[2vw] text-[clamp(10px,1vw,19px)] max-[1201px]:mt-8">Ready to level up?</p>
            <CaseStudyDescription className="mx-auto mt-[1vw] max-w-[28vw] max-[1201px]:mt-3 max-[1201px]:max-w-sm">Discover premium PC hardware,<br />gaming peripherals, and expert support at SOURCE.</CaseStudyDescription>
          </div>

          <ResponsiveImage
            src="/assets/images/source/source-character-cutout.png"
            alt="Source team member"
            className={`absolute bottom-0 left-[49.5%] z-10 w-[24.5%] max-[1201px]:relative max-[1201px]:bottom-auto max-[1201px]:left-auto max-[1201px]:mx-auto max-[1201px]:block max-[1201px]:w-full max-[1201px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <ResponsiveImage src="/assets/images/source/source-blue-logo.png" alt="Source" className={`absolute bottom-[2.1%] left-[38%] z-20 w-[9%] max-[1201px]:relative max-[1201px]:bottom-auto max-[1201px]:left-auto max-[1201px]:mx-auto max-[1201px]:mb-8 max-[1201px]:w-[130px] ${REVEAL}`} data-reveal />
        </section>

        <section className="source-social-layout relative h-[55.77vw] bg-transparent max-[1201px]:h-auto max-[1201px]:space-y-10 max-[1201px]:bg-[linear-gradient(180deg,#EEF2FA_0%,#244394_42%,#244394_100%)] max-[1201px]:px-5 max-[1201px]:py-16">
          <div className="source-social-dark-nav pointer-events-none absolute inset-x-0 bottom-0 h-[79%]" aria-hidden="true" />

          <div className="source-social-content absolute left-1/2 top-[5%] flex -translate-x-1/2 items-center gap-[clamp(24px,2.7vw,38px)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-full max-[1201px]:translate-x-0 max-[1201px]:flex-col max-[1201px]:gap-10">
            <div
              className={`source-liquid-glass flex w-[39vw] max-w-[560px] shrink-0 flex-col items-center rounded-[clamp(32px,4.1vw,58px)] px-[clamp(32px,2.9vw,42px)] py-[clamp(38px,3.5vw,50px)] max-[1201px]:w-full max-[1201px]:max-w-none max-[1201px]:rounded-[32px] max-[1201px]:p-6 ${REVEAL}`}
              data-reveal
              ref={carouselRef}
              onFocus={() => setCarouselPaused(true)}
              onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setCarouselPaused(false) }}
              onMouseEnter={() => setCarouselPaused(true)}
              onMouseLeave={() => setCarouselPaused(false)}
            >
              <div className="relative aspect-[1177/1377] w-full" aria-live="polite">
                <div className="absolute inset-0 overflow-hidden bg-[#0F172A] shadow-[0_12px_25px_rgba(0,0,0,0.25)]">
                  {SOCIAL_POSTS.map((post, index) => (index === currentPost || index === previousPost) && (
                    <ResponsiveImage
                      key={post.src}
                      src={post.src}
                      alt={post.alt}
                      aria-hidden={index !== currentPost}
                      className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                        index === currentPost ? 'source-post-active scale-100 opacity-100' : 'pointer-events-none scale-[1.015] opacity-0'
                      }`}
                    />
                  ))}
                </div>

                <button type="button" onClick={goPrevious} aria-label="Previous social media design" className="absolute left-0 top-1/2 z-10 flex h-[clamp(36px,2.6vw,40px)] w-[clamp(36px,2.6vw,40px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#25304B]/75 text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:scale-105 hover:bg-[#16213C]/90 max-[1201px]:left-2 max-[1201px]:h-10 max-[1201px]:w-10 max-[1201px]:translate-x-0">
                  <ArrowIcon direction="left" />
                </button>
                <button type="button" onClick={goNext} aria-label="Next social media design" className="absolute right-0 top-1/2 z-10 flex h-[clamp(36px,2.6vw,40px)] w-[clamp(36px,2.6vw,40px)] translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#25304B]/75 text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:scale-105 hover:bg-[#16213C]/90 max-[1201px]:right-2 max-[1201px]:h-10 max-[1201px]:w-10 max-[1201px]:translate-x-0">
                  <ArrowIcon direction="right" />
                </button>
              </div>

              <div className="mt-[clamp(24px,2.1vw,30px)] flex w-full items-center gap-[clamp(10px,0.9vw,13px)]">
                <div className="h-1 flex-1 rounded-full bg-white/70" />
                <span className="min-w-[3.3ch] text-center text-[clamp(12px,0.98vw,14px)] font-bold">{currentPost + 1}/9</span>
                <div className="h-1 flex-1 rounded-full bg-white/70" />
              </div>
            </div>

            <div className={`source-liquid-glass flex min-h-[clamp(270px,21.45vw,310px)] w-[33vw] max-w-[480px] shrink-0 flex-col items-center justify-center rounded-[clamp(26px,1.98vw,31px)] px-[clamp(33px,3.08vw,46px)] py-8 text-center max-[1201px]:h-auto max-[1201px]:w-full max-[1201px]:max-w-none max-[1201px]:rounded-[26px] max-[1201px]:px-6 max-[1201px]:py-12 ${REVEAL}`} data-reveal>
              <ResponsiveImage src="/assets/images/source/source-main.png" alt="Source" className="mb-[clamp(9px,0.83vw,12px)] w-[13%] max-[1201px]:mb-2 max-[1201px]:w-[56px]" />
              <h2 className="case-study-title whitespace-nowrap text-[clamp(42px,4.29vw,62px)] leading-none tracking-[-0.055em] max-[1201px]:text-[clamp(36px,7vw,62px)]">Social Media</h2>
              <p className="mt-[clamp(10px,0.99vw,14px)] font-questrial text-[clamp(12px,1.08vw,15px)] leading-none max-[1201px]:mt-3 max-[1201px]:text-sm">Marketing Design</p>
              <CaseStudyDescription className="mt-[clamp(15px,1.65vw,23px)] text-white/95 max-[1201px]:mt-6">
                A 9-post social media campaign for a tech peripherals brand, designed to highlight products and support customer engagement and purchase conversion through clear and consistent visual communication.
              </CaseStudyDescription>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
