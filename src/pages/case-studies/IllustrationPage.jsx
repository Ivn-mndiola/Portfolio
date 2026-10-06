import ResponsiveImage from '../../components/ResponsiveImage.jsx'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import CaseStudyDescription from '../../components/CaseStudyDescription.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.illustration-hero', '.illustration-dark-nav']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const PANAGBENGA_DESCRIPTION = 'The Panagbenga Festival is a month-long annual flower festival held in Baguio City, Philippines, throughout February, celebrating the city\'s blooming season and resilience following the 1990 earthquake. Known for grand flower-decorated floats and street dancing, it is a premier Philippine festival highlighting local culture, tourism, and community spirit.'

const CASCANDY_DESCRIPTION = 'A commissioned fan art illustration created for a Valorant enthusiast, inspired by Sentinels and a conceptual collaboration with Supreme. The piece blends esports energy with streetwear aesthetics, focusing on strong visual identity and stylized composition.'

const VERTO_DESCRIPTION = 'A sticker pack collection inspired by Filipino street food culture, designed in two visual versions. The project explores playful illustration and simplified vector forms to capture the personality, warmth, and familiarity of iconic local street food elements, creating a cohesive and expressive sticker set.'

export default function IllustrationPage() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-urbanist text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="orange" />

      <main className="illustration-case-main">
        <section className="illustration-hero relative h-[65.63vw] max-[1201px]:flex max-[1201px]:min-h-svh max-[1201px]:h-auto max-[1201px]:flex-col max-[1201px]:items-center max-[1201px]:px-6 max-[1201px]:pb-12 max-[1201px]:pt-36">
          <div className={`absolute left-1/2 top-[32.2%] w-full -translate-x-1/2 text-center max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            <p className="case-study-label text-[clamp(11px,0.8vw,16px)] uppercase tracking-[0.04em]">Digital Art</p>
            <h1 className="mt-[0.45vw] case-study-title text-[clamp(52px,4.75vw,92px)] not-italic uppercase leading-none tracking-[0.015em] [text-shadow:0_8px_3px_rgba(120,63,0,0.22)] max-[1201px]:mt-3 max-[1201px]:text-[clamp(44px,13vw,72px)]">
              Illustrations
            </h1>
          </div>

          <CaseStudyDescription variant="intro" className={`absolute left-1/2 top-[50.5%] w-[48%] -translate-x-1/2 text-center text-white/95 max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:mt-10 max-[1201px]:w-full max-[1201px]:max-w-2xl max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            A collection of vector, digital-based illustrations exploring storytelling, character design, and conceptual expression. Each work is crafted with a focus on clean forms, composition, and visual clarity, reflecting a minimalist approach to digital illustration.
          </CaseStudyDescription>

          <div className="absolute inset-x-0 bottom-[7.4%] px-[8vw] max-[1201px]:relative max-[1201px]:inset-auto max-[1201px]:mt-auto max-[1201px]:w-full max-[1201px]:px-0 max-[1201px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[1201px]:w-full ${REVEAL}`}
              dataReveal
              projectLine1="Digital Art"
              projectLine2="Illustrations"
              scope={['Illustration', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Fresco']}
            />
          </div>
        </section>

        <section className="illustration-panagbenga relative flex min-h-[44.4vw] flex-col items-center overflow-hidden pb-[3vw] pt-[6.88vw] text-[#5d3a07] max-[1201px]:flex max-[1201px]:h-auto max-[1201px]:flex-col max-[1201px]:items-center max-[1201px]:px-5 max-[1201px]:pb-14 max-[1201px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[48%]" aria-hidden="true" />
          <ResponsiveImage
            src="/assets/images/illustration/panagbenga-showcase.png"
            alt="Panagbenga Festival digital illustration and mockups"
            className={`relative w-[64.2%] object-contain drop-shadow-[0_12px_12px_rgba(84,43,0,0.2)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-full max-[1201px]:max-w-[860px] max-[1201px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />
          <CaseStudyDescription className={`relative mt-8 w-[45%] text-center text-white max-[1201px]:relative max-[1201px]:bottom-auto max-[1201px]:left-auto max-[1201px]:mt-8 max-[1201px]:w-full max-[1201px]:max-w-2xl max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            {PANAGBENGA_DESCRIPTION}
          </CaseStudyDescription>
        </section>

        <section className="illustration-cascandy relative flex min-h-[44.4vw] flex-col items-center overflow-hidden pb-[3vw] pt-[6.26vw] text-[#5b0010] max-[1201px]:flex max-[1201px]:h-auto max-[1201px]:flex-col max-[1201px]:items-center max-[1201px]:px-5 max-[1201px]:pb-14 max-[1201px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[48%]" aria-hidden="true" />
          <ResponsiveImage
            src="/assets/images/illustration/cascandy-showcase.png"
            alt="Cascandy Valorant and Supreme commissioned fan art"
            className={`relative w-[66.6%] translate-x-[2.2vw] object-contain drop-shadow-[0_12px_12px_rgba(76,0,8,0.18)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-full max-[1201px]:max-w-[900px] max-[1201px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />
          <CaseStudyDescription className={`relative mt-8 w-[51%] text-center text-white max-[1201px]:relative max-[1201px]:bottom-auto max-[1201px]:left-auto max-[1201px]:mt-8 max-[1201px]:w-full max-[1201px]:max-w-2xl max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            {CASCANDY_DESCRIPTION}
          </CaseStudyDescription>
        </section>

        <section className="illustration-verto relative h-[44.4vw] min-[1201px]:min-h-[680px] overflow-hidden text-white max-[1201px]:flex max-[1201px]:h-auto max-[1201px]:flex-col max-[1201px]:items-center max-[1201px]:px-5 max-[1201px]:pb-32 max-[1201px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[38%]" aria-hidden="true" />
          <ResponsiveImage
            src="/assets/images/illustration/verto-catalog.png"
            alt="Verto street food merchandise catalog"
            className={`absolute left-[18.3%] top-[14.7%] w-[19.5%] object-contain drop-shadow-[8px_10px_5px_rgba(0,0,0,0.32)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-[72%] max-[1201px]:max-w-[390px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute inset-0 max-[1201px]:relative max-[1201px]:inset-auto max-[1201px]:mt-12 max-[1201px]:flex max-[1201px]:w-full max-[1201px]:max-w-[560px] max-[1201px]:items-start max-[1201px]:justify-between ${REVEAL}`} data-reveal>
            <ResponsiveImage src="/assets/images/illustration/verto-logo.png" alt="Verto merchandise catalog" className="absolute left-[60.5%] top-[16%] w-[10.5%] object-contain drop-shadow-[0_6px_3px_rgba(0,0,0,0.25)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:w-[47%]" />
            <ResponsiveImage src="/assets/images/illustration/street-food-edition.png" alt="Street Food Edition" className="absolute left-[84%] top-[24.1%] w-[6.3%] object-contain drop-shadow-[0_6px_3px_rgba(0,0,0,0.2)] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:mt-3 max-[1201px]:w-[30%]" />
          </div>

          <div className={`verto-sticker-row absolute left-[39.2%] top-[36.8%] w-[51.7%] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:mt-10 max-[1201px]:w-full ${REVEAL}`} data-reveal tabIndex={0} role="region" aria-label="Verto sticker pack version one; scroll horizontally to see the complete sheet">
            <ResponsiveImage src="/assets/images/illustration/verto-stickers-v1.png" alt="Verto street food sticker pack version one" width="3960" height="496" className="block h-auto w-full object-contain" />
          </div>

          <div className={`verto-sticker-row absolute left-[39.2%] top-[51.9%] w-[51.7%] max-[1201px]:relative max-[1201px]:left-auto max-[1201px]:top-auto max-[1201px]:mt-4 max-[1201px]:w-full ${REVEAL}`} data-reveal tabIndex={0} role="region" aria-label="Verto sticker pack version two; scroll horizontally to see the complete sheet">
            <ResponsiveImage src="/assets/images/illustration/verto-stickers-v2.png" alt="Verto street food sticker pack version two" width="3960" height="610" className="block h-auto w-full object-contain" />
          </div>

          <p className="verto-scroll-hint hidden max-[700px]:block mt-3 text-xs text-white/70">Swipe each sticker sheet to see the full collection.</p>

          <CaseStudyDescription className={`absolute top-[calc(51.9%_+_7.97vw_+_32px)] left-[64.6%] w-[51.7%] -translate-x-1/2 text-center max-[1201px]:relative max-[1201px]:top-auto max-[1201px]:left-auto max-[1201px]:mt-9 max-[1201px]:w-full max-[1201px]:max-w-2xl max-[1201px]:translate-x-0 ${REVEAL}`} data-reveal>
            {VERTO_DESCRIPTION}
          </CaseStudyDescription>
        </section>
      </main>
    </div>
  )
}
