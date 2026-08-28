import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.illustration-hero', '.illustration-dark-nav']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const PANAGBENGA_DESCRIPTION = 'The Panagbenga Festival is a month-long annual flower festival held in Baguio City, Philippines, throughout February, celebrating the city\'s blooming season and resilience following the 1990 earthquake. Known for grand flower-decorated floats and street dancing, it is a premier Philippine festival highlighting local culture, tourism, and community spirit.'

const CASCANDY_DESCRIPTION = 'A commissioned fan art illustration created for a Valorant enthusiast, inspired by Sentinels and a conceptual collaboration with Supreme. The piece blends esports energy with streetwear aesthetics, focusing on strong visual identity and stylized composition.'

const VERTO_DESCRIPTION = 'A sticker pack collection inspired by Filipino street food culture, designed in two visual versions. The project explores playful illustration and simplified vector forms to capture the personality, warmth, and familiarity of iconic local street food elements, creating a cohesive and expressive sticker set.'

export default function IllustrationPage() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-questrial text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="orange" />

      <main className="illustration-case-main">
        <section className="illustration-hero relative h-[65.63vw] max-[900px]:flex max-[900px]:min-h-svh max-[900px]:h-auto max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-36">
          <div className={`absolute left-1/2 top-[32.2%] w-full -translate-x-1/2 text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <p className="text-[clamp(11px,0.8vw,16px)] font-semibold uppercase tracking-[0.04em]">Digital Art</p>
            <h1 className="mt-[0.45vw] font-bahnschrift text-[clamp(52px,4.75vw,92px)] font-black italic uppercase leading-none tracking-[0.015em] [text-shadow:0_8px_3px_rgba(120,63,0,0.22)] max-[900px]:mt-3 max-[900px]:text-[clamp(44px,13vw,72px)]">
              Illustrations
            </h1>
          </div>

          <p className={`absolute left-1/2 top-[50.5%] w-[48%] -translate-x-1/2 text-center text-[clamp(9px,0.64vw,13px)] leading-[1.45] text-white/95 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            A collection of vector, digital-based illustrations exploring storytelling, character design, and conceptual expression. Each work is crafted with a focus on clean forms, composition, and visual clarity, reflecting a minimalist approach to digital illustration.
          </p>

          <div className="absolute inset-x-0 bottom-[7.4%] px-[8vw] max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-auto max-[900px]:w-full max-[900px]:px-0 max-[900px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[900px]:w-full ${REVEAL}`}
              dataReveal
              projectLine1="Digital Art"
              projectLine2="Illustrations"
              scope={['Illustration', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Fresco']}
            />
          </div>
        </section>

        <section className="illustration-panagbenga relative h-[44.4vw] overflow-hidden text-[#5d3a07] max-[900px]:flex max-[900px]:h-auto max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-5 max-[900px]:pb-14 max-[900px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[48%]" aria-hidden="true" />
          <img
            src="/assets/images/illustration/panagbenga-showcase.png"
            alt="Panagbenga Festival digital illustration and mockups"
            className={`absolute left-1/2 top-[15.5%] w-[64.2%] -translate-x-1/2 object-contain drop-shadow-[0_12px_12px_rgba(84,43,0,0.2)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:max-w-[860px] max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />
          <p className={`absolute bottom-[6.6%] left-1/2 w-[45%] -translate-x-1/2 text-center text-[clamp(9px,0.62vw,12px)] leading-[1.35] text-white max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mt-8 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            {PANAGBENGA_DESCRIPTION}
          </p>
        </section>

        <section className="illustration-cascandy relative h-[44.4vw] overflow-hidden text-[#5b0010] max-[900px]:flex max-[900px]:h-auto max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-5 max-[900px]:pb-14 max-[900px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[48%]" aria-hidden="true" />
          <img
            src="/assets/images/illustration/cascandy-showcase.png"
            alt="Cascandy Valorant and Supreme commissioned fan art"
            className={`absolute left-[52.2%] top-[14.1%] w-[66.6%] -translate-x-1/2 object-contain drop-shadow-[0_12px_12px_rgba(76,0,8,0.18)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:max-w-[900px] max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />
          <p className={`absolute bottom-[6.8%] left-1/2 w-[51%] -translate-x-1/2 text-center text-[clamp(9px,0.62vw,12px)] leading-[1.35] text-white max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mt-8 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            {CASCANDY_DESCRIPTION}
          </p>
        </section>

        <section className="illustration-verto relative h-[44.4vw] overflow-hidden text-white max-[900px]:flex max-[900px]:h-auto max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-5 max-[900px]:pb-32 max-[900px]:pt-16">
          <div className="illustration-dark-nav pointer-events-none absolute inset-x-0 bottom-0 top-[38%]" aria-hidden="true" />
          <img
            src="/assets/images/illustration/verto-catalog.png"
            alt="Verto street food merchandise catalog"
            className={`absolute left-[18.3%] top-[14.7%] w-[19.5%] object-contain drop-shadow-[8px_10px_5px_rgba(0,0,0,0.32)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-[72%] max-[900px]:max-w-[390px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute inset-0 max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-12 max-[900px]:flex max-[900px]:w-full max-[900px]:max-w-[560px] max-[900px]:items-start max-[900px]:justify-between ${REVEAL}`} data-reveal>
            <img src="/assets/images/illustration/verto-logo.png" alt="Verto merchandise catalog" className="absolute left-[60.5%] top-[16%] w-[10.5%] object-contain drop-shadow-[0_6px_3px_rgba(0,0,0,0.25)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-[47%]" />
            <img src="/assets/images/illustration/street-food-edition.png" alt="Street Food Edition" className="absolute left-[84%] top-[24.1%] w-[6.3%] object-contain drop-shadow-[0_6px_3px_rgba(0,0,0,0.2)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-3 max-[900px]:w-[30%]" />
          </div>

          <div className={`absolute left-[39.2%] top-[36.8%] w-[51.7%] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full ${REVEAL}`} data-reveal>
            <img src="/assets/images/illustration/verto-stickers-v1.png" alt="Verto street food sticker pack version one" className="block h-auto w-full object-contain" />
            <img src="/assets/images/illustration/verto-kwek-v1.png" alt="Kwek-kwek sticker version one" className="absolute left-[-1.5%] top-[4%] z-[2] w-[13.5%] object-contain drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]" />
          </div>

          <div className={`absolute left-[39.2%] top-[51.9%] w-[51.7%] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-4 max-[900px]:w-full ${REVEAL}`} data-reveal>
            <img src="/assets/images/illustration/verto-stickers-v2.png" alt="Verto street food sticker pack version two" className="block h-auto w-full object-contain" />
            <img src="/assets/images/illustration/verto-kwek-v2.png" alt="Kwek-kwek sticker version two" className="absolute left-[-1.5%] top-[-2%] z-[2] w-[13.5%] object-contain drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]" />
          </div>

          <p className={`absolute bottom-[23%] left-[64.6%] w-[37%] -translate-x-1/2 text-center text-[clamp(9px,0.62vw,12px)] leading-[1.35] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mt-9 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            {VERTO_DESCRIPTION}
          </p>
        </section>
      </main>
    </div>
  )
}
