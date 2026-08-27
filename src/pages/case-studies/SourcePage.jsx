import { useCallback, useEffect, useState } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
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

  useScrollReveal([currentPost])

  const goPrevious = useCallback(() => {
    setCurrentPost((current) => (current - 1 + SOCIAL_POSTS.length) % SOCIAL_POSTS.length)
  }, [])

  const goNext = useCallback(() => {
    setCurrentPost((current) => (current + 1) % SOCIAL_POSTS.length)
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'ArrowLeft') goPrevious()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrevious])

  useEffect(() => {
    if (carouselPaused) return undefined
    const timer = window.setInterval(goNext, 6000)
    return () => window.clearInterval(timer)
  }, [carouselPaused, goNext])

  return (
    <div className="questrial-regular relative min-h-screen overflow-x-hidden bg-[#233F91] text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="blue" />

      <img
        src="/assets/images/source/source-bg-main.png"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-auto w-full select-none min-[901px]:block"
      />

      <main className="relative z-10">
        <section className="source-hero relative h-[65.7vw] bg-transparent max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-svh max-[900px]:flex-col max-[900px]:items-center max-[900px]:bg-[linear-gradient(145deg,#98A8D0_0%,#24428F_55%,#020710_100%)] max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-36">
          <img
            src="/assets/images/source/SOURCE-PROJ.png"
            alt="Source"
            className={`absolute left-1/2 top-[18.5%] w-[30vw] -translate-x-1/2 object-contain drop-shadow-[0_14px_14px_rgba(0,0,0,0.25)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:max-w-[430px] max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />

          <p className={`absolute left-1/2 top-[50.7%] w-[44vw] max-w-[800px] -translate-x-1/2 text-center font-normal text-[13px] leading-[1.8] text-white/95 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-8 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            SOURCE is a Baguio City based hub for premium PC parts, components, and peripherals, dedicated to helping gamers, creators, and PC enthusiasts build high-performance systems with confidence. Offering authentic hardware, expert guidance, and competitive pricing, SOURCE provides everything from powerful GPUs and high-speed memory to ergonomic accessories and immersive gaming gear, making it a trusted destination for elevating your computing experience from the heart of the Cordilleras.
          </p>

          <div className="absolute inset-x-0 bottom-[7.8%] px-[8vw] max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-auto max-[900px]:w-full max-[900px]:px-0 max-[900px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[900px]:w-full ${REVEAL}`}
              dataReveal
              fontClassName="font-questrial"
              projectLine1="Visuals and Brand Identity"
              projectLine2="for Source 2026"
              scope={['Logo', 'Socials', 'Layout Design', 'Marketing Design', 'Brand Identity']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
            />
          </div>
        </section>

        <section className="relative h-[81vw] bg-transparent max-[900px]:h-auto max-[900px]:space-y-6 max-[900px]:bg-[linear-gradient(180deg,#244394_0%,#6F86B8_40%,#FFFFFF_85%,#244394_100%)] max-[900px]:px-5 max-[900px]:pb-0 max-[900px]:pt-16">
          <div className="source-brand-dark-nav pointer-events-none absolute inset-x-0 top-0 h-[58%] max-[900px]:h-[52%]" aria-hidden="true" />

          <div className={`absolute left-[18.35%] top-[9.3%] flex h-[21.5%] w-[39.2%] items-center justify-center rounded-[4vw] border border-white/30 bg-white/[0.12] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:h-auto max-[900px]:w-full max-[900px]:rounded-[32px] max-[900px]:px-8 max-[900px]:py-12 ${REVEAL}`} data-reveal>
            <img src="/assets/images/source/SOURCE-PROJ.png" alt="Source main logo" className="w-[58%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] max-[900px]:w-full max-[900px]:max-w-[360px]" />
            <span className="absolute bottom-[10%] right-[8%] text-[clamp(7px,0.62vw,12px)] text-white/90">Main Logo</span>
          </div>

          <div className={`absolute left-[18.35%] top-[32.53%] flex h-[21.5%] w-[39.2%] items-center justify-center gap-[1.8vw] rounded-[4vw] border border-white/30 bg-white/[0.12] px-[3vw] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:h-auto max-[900px]:w-full max-[900px]:flex-wrap max-[900px]:gap-4 max-[900px]:rounded-[32px] max-[900px]:px-5 max-[900px]:py-10 ${REVEAL}`} data-reveal>
            <span className="absolute right-[8%] top-[11%] text-[clamp(7px,0.62vw,12px)] text-white/90">ICONS</span>
            {MINI_LOGOS.map((logo) => (
              <div key={logo.src} className="flex aspect-square w-[18%] items-center justify-center rounded-[1.5vw] border border-white/40 bg-white/15 p-[0.8vw] shadow-[0_8px_20px_rgba(8,23,70,0.15)] max-[900px]:w-[calc(50%-0.5rem)] max-[900px]:max-w-[120px] max-[900px]:rounded-2xl max-[900px]:p-2">
                <img src={logo.src} alt={logo.alt} className="h-full w-full rounded-[1vw] object-cover max-[900px]:rounded-xl" />
              </div>
            ))}
          </div>

          <div className={`absolute left-[58.65%] top-[9.3%] flex h-[44.73%] w-[23.16%] flex-col rounded-[4vw] border border-white/30 bg-white/[0.12] px-[3.66%] pb-0 pt-[5.35%] shadow-[0_18px_40px_rgba(8,23,70,0.16)] backdrop-blur-xl max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:h-auto max-[900px]:w-full max-[900px]:rounded-[32px] max-[900px]:px-8 max-[900px]:py-10 ${REVEAL}`} data-reveal>
            <div className="mb-[3.9vw] text-center max-[900px]:mb-10">
              <p className="font-bahnschrift text-[clamp(22px,1.98vw,38px)] font-semibold leading-none">Bahnschrift</p>
              <span className="font-questrial text-[clamp(7px,0.63vw,12px)] uppercase">Logo Typography</span>
              <p className="mt-[1vw] font-questrial text-[clamp(22px,2.09vw,40px)] leading-none max-[900px]:mt-5">Questrial</p>
              <span className="font-questrial text-[clamp(7px,0.63vw,12px)] uppercase">Secondary Font</span>
            </div>
            <img
              src="/assets/images/source/source-color.svg"
              alt="Source color palette: 1E3A8A, 0F172A, 3A3A3A, and FFFFFF"
              className="block h-auto w-full"
            />
          </div>

          <div className={`absolute left-[22%] top-[66%] w-[29%] text-center text-[#244394] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:py-12 ${REVEAL}`} data-reveal>
            <h2 className="text-[clamp(34px,4.3vw,82px)] font-bold tracking-[-0.05em] [text-shadow:0_4px_7px_rgba(36,67,148,0.28)]">Hello, Baguio!</h2>
            <p className="mt-[2vw] text-[clamp(10px,1vw,19px)] max-[900px]:mt-8">Ready to level up?</p>
            <p className="mx-auto mt-[1vw] max-w-[28vw] text-[clamp(7px,0.75vw,14px)] leading-[1.35] max-[900px]:mt-3 max-[900px]:max-w-sm max-[900px]:text-sm">Discover premium PC hardware,<br />gaming peripherals, and expert support at SOURCE.</p>
          </div>

          <img
            src="/assets/images/source/source-character-cutout.png"
            alt="Source team member"
            className={`absolute bottom-0 left-[49.5%] z-10 w-[24.5%] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mx-auto max-[900px]:block max-[900px]:w-full max-[900px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <img src="/assets/images/source/source-blue-logo.png" alt="Source" className={`absolute bottom-[2.1%] left-[38%] z-20 w-[9%] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mx-auto max-[900px]:mb-8 max-[900px]:w-[130px] ${REVEAL}`} data-reveal />
        </section>

        <section className="relative h-[55.77vw] bg-transparent max-[900px]:h-auto max-[900px]:space-y-10 max-[900px]:bg-[linear-gradient(180deg,#EEF2FA_0%,#244394_42%,#244394_100%)] max-[900px]:px-5 max-[900px]:py-16">
          <div className="source-social-dark-nav pointer-events-none absolute inset-x-0 bottom-0 h-[79%]" aria-hidden="true" />

          <div className="absolute left-1/2 top-[5%] flex -translate-x-1/2 items-center gap-[clamp(24px,2.7vw,38px)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:flex-col max-[900px]:gap-10">
            <div
              className={`source-liquid-glass flex w-[39vw] max-w-[560px] shrink-0 flex-col items-center rounded-[clamp(32px,4.1vw,58px)] px-[clamp(32px,2.9vw,42px)] py-[clamp(38px,3.5vw,50px)] max-[900px]:w-full max-[900px]:max-w-none max-[900px]:rounded-[32px] max-[900px]:p-6 ${REVEAL}`}
              data-reveal
              onMouseEnter={() => setCarouselPaused(true)}
              onMouseLeave={() => setCarouselPaused(false)}
            >
              <div className="relative aspect-[1177/1377] w-full" aria-live="polite">
                <div className="absolute inset-0 overflow-hidden bg-[#0F172A] shadow-[0_12px_25px_rgba(0,0,0,0.25)]">
                  {SOCIAL_POSTS.map((post, index) => (
                    <img
                      key={post.src}
                      src={post.src}
                      alt={post.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                        index === currentPost ? 'scale-100 opacity-100' : 'pointer-events-none scale-[1.015] opacity-0'
                      }`}
                    />
                  ))}
                </div>

                <button type="button" onClick={goPrevious} aria-label="Previous social media design" className="absolute left-0 top-1/2 z-10 flex h-[clamp(36px,2.6vw,40px)] w-[clamp(36px,2.6vw,40px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#25304B]/75 text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:scale-105 hover:bg-[#16213C]/90 max-[900px]:left-2 max-[900px]:h-10 max-[900px]:w-10 max-[900px]:translate-x-0">
                  <ArrowIcon direction="left" />
                </button>
                <button type="button" onClick={goNext} aria-label="Next social media design" className="absolute right-0 top-1/2 z-10 flex h-[clamp(36px,2.6vw,40px)] w-[clamp(36px,2.6vw,40px)] translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[#25304B]/75 text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:scale-105 hover:bg-[#16213C]/90 max-[900px]:right-2 max-[900px]:h-10 max-[900px]:w-10 max-[900px]:translate-x-0">
                  <ArrowIcon direction="right" />
                </button>
              </div>

              <div className="mt-[clamp(24px,2.1vw,30px)] flex w-full items-center gap-[clamp(10px,0.9vw,13px)]">
                <div className="h-1 flex-1 rounded-full bg-white/70" />
                <span className="min-w-[3.3ch] text-center text-[clamp(12px,0.98vw,14px)] font-bold">{currentPost + 1}/9</span>
                <div className="h-1 flex-1 rounded-full bg-white/70" />
              </div>
            </div>

            <div className={`source-liquid-glass flex h-[clamp(245px,19.5vw,282px)] w-[30vw] max-w-[435px] shrink-0 flex-col items-center justify-center rounded-[clamp(24px,1.8vw,28px)] px-[clamp(30px,2.8vw,42px)] text-center max-[900px]:h-auto max-[900px]:w-full max-[900px]:max-w-none max-[900px]:rounded-[26px] max-[900px]:px-6 max-[900px]:py-12 ${REVEAL}`} data-reveal>
              <img src="/assets/images/source/source-main.png" alt="Source" className="mb-[clamp(8px,0.75vw,11px)] w-[13%] max-[900px]:mb-2 max-[900px]:w-[52px]" />
              <h2 className="whitespace-nowrap font-bahnschrift text-[clamp(38px,3.9vw,56px)] font-bold leading-none tracking-[-0.055em]">Social Media</h2>
              <p className="mt-[clamp(9px,0.9vw,13px)] font-questrial text-[clamp(11px,0.98vw,14px)] leading-none max-[900px]:mt-3 max-[900px]:text-sm">Marketing Design</p>
              <p className="mt-[clamp(14px,1.5vw,21px)] font-questrial text-[clamp(9px,0.77vw,11px)] leading-[1.12] text-white/95 max-[900px]:mt-6 max-[900px]:text-[12px]">
                A 9-post social media campaign for a<br />
                tech peripherals brand, designed to<br />
                highlight products and support customer<br />
                engagement and purchase conversion<br />
                through clear and consistent<br />
                visual communication.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
