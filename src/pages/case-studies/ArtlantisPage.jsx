import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.artlantis-hero']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const SHARKY_COLORS = ['#2B82B8', '#1B78B5', '#C8E1E6', '#B8C7D7', '#FFA512']
// Colors sampled from the solid swatches in the supplied Artlantis reference.
const CHARLY_COLORS = ['#A67CBB', '#80559A', '#492066', '#D1810E', '#EDC10A']
const CHARLY_TEXT = CHARLY_COLORS[1]

function Palette({ colors, label }) {
  return (
    <div className="mb-[2vw] flex justify-center gap-[0.8vw] max-[1200px]:mb-6 max-[1200px]:gap-2" aria-label={label}>
      {colors.map((color) => (
        <span
          key={color}
          className="block h-[1.2vw] w-[2.15vw] min-h-3 min-w-6 max-[1200px]:h-5 max-[1200px]:w-10"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>
  )
}

export default function ArtlantisPage() {
  useScrollReveal()

  return (
    <div className="artlantis-case-page relative min-h-screen overflow-x-hidden bg-white font-questrial text-[#0877B7]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="blue" />

      <main className="relative min-[1201px]:h-[240.52vw]">
        <img
          src="/assets/images/artlantis/artlantis-page-bg.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-auto w-full select-none min-[1201px]:block"
        />

        <section className="artlantis-hero relative z-10 h-[65.55vw] text-white max-[1200px]:flex max-[1200px]:h-auto max-[1200px]:min-h-svh max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:bg-[linear-gradient(rgba(0,88,155,0.12),rgba(0,102,173,0.32)),url('/assets/images/artlantis/ARTLANTIS-BG.jpg')] max-[1200px]:bg-cover max-[1200px]:bg-center max-[1200px]:px-6 max-[1200px]:pb-12 max-[1200px]:pt-36">
          <p className={`absolute left-1/2 top-[18.4%] -translate-x-1/2 whitespace-nowrap text-[clamp(10px,0.9vw,17px)] uppercase tracking-[0.08em] max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:translate-x-0 max-[1200px]:text-xs ${REVEAL}`} data-reveal>
            Conceptual Character Design
          </p>

          <img
            src="/assets/images/artlantis/ARTLANTIS-PROJ.png"
            alt="Artlantis Duo"
            className={`absolute left-1/2 top-[23.2%] w-[39%] -translate-x-1/2 object-contain drop-shadow-[0_9px_8px_rgba(0,49,97,0.2)] max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-5 max-[1200px]:w-full max-[1200px]:max-w-[560px] max-[1200px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />

          <p className={`absolute left-1/2 top-[50.5%] w-[45%] -translate-x-1/2 text-center text-[clamp(9px,0.67vw,13px)] leading-[1.45] text-white/95 max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-10 max-[1200px]:w-full max-[1200px]:max-w-2xl max-[1200px]:translate-x-0 max-[1200px]:text-sm ${REVEAL}`} data-reveal>
            Two product-inspired characters form the Artlantis Duo: Sharky, a bold pencil sharpener, and Charly, a curious pencil fish. Their contrasting personalities turn everyday creative tools into a playful underwater story built around color, humor, friendship, and character-driven design.
          </p>

          <div className="absolute inset-x-0 bottom-[7.5%] px-[8vw] max-[1200px]:relative max-[1200px]:inset-auto max-[1200px]:mt-auto max-[1200px]:w-full max-[1200px]:px-0 max-[1200px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[1200px]:w-full ${REVEAL}`}
              dataReveal
              fontClassName="font-questrial"
              projectLine1="Conceptual Character Design"
              projectLine2="Artlantis Duo"
              scope={['Illustration', 'Socials', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
            />
          </div>
        </section>

        <section className="relative z-10 h-[174.97vw] max-[1200px]:h-auto max-[1200px]:bg-white max-[1200px]:px-5 max-[1200px]:py-20">
          {/* The first diagonal panel is separate from the exported background. */}
          <div aria-hidden="true" className="pointer-events-none absolute left-0 top-[13.75%] h-[23.6%] w-[49.45%] drop-shadow-[0_0.5vw_0.3vw_rgba(0,0,0,0.3)] max-[1200px]:hidden">
            <div className="h-full w-full bg-[linear-gradient(90deg,#026DA2_0%,#01C4EF_48%,#24E0FF_100%)] [clip-path:polygon(0_0,100%_10.5%,100%_89.5%,0_100%)]" />
          </div>
          <div className={`absolute left-1/2 top-[4.2%] w-[45%] -translate-x-1/2 text-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:w-full max-[1200px]:translate-x-0 ${REVEAL}`} data-reveal>
            <h2 className="text-[clamp(24px,1.65vw,32px)] font-bold">Introduction</h2>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[1200px]:mt-5 max-[1200px]:text-sm">
              During his internship as an Artist, Graphic Artist, and Illustrator, Iverson Mendiola was entrusted with developing Charly and Sharky—a playful underwater character duo that later became official mascots. As one of his earliest character-design projects, the experience created an opportunity to explore illustration, visual storytelling, and character development within a professional creative environment.
            </p>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[1200px]:mt-4 max-[1200px]:text-sm">
              Guided by experimental sketches and iterative refinement, the initial concepts became memorable characters with distinct identities and values. Seeing the project evolve from sketches into recognized mascots became an important milestone in his creative journey.
            </p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-duo-poster.jpg"
            alt="Artlantis Duo character poster"
            className={`absolute left-[23.35%] top-[16.3%] w-[26.1%] shadow-[-3.6vw_2vw_1vw_-0.4vw_rgba(30,35,40,0.48),0_0.4vw_0.6vw_rgba(0,49,75,0.25)] max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mx-auto max-[1200px]:mt-16 max-[1200px]:w-full max-[1200px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[60.2%] top-[19.2%] w-[25%] text-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-10 max-[1200px]:w-full ${REVEAL}`} data-reveal>
            <img src="/assets/images/artlantis/ARTLANTIS-PROJ.png" alt="Artlantis Duo" className="mx-auto mb-[2.2vw] w-[33%] max-[1200px]:mb-8 max-[1200px]:w-[150px]" />
            <h2 className="text-[clamp(20px,1.45vw,28px)] font-bold">About Their Dynamic</h2>
            <p className="mt-[2vw] text-[clamp(9px,0.7vw,13px)] font-semibold leading-[1.45] max-[1200px]:mt-7 max-[1200px]:text-sm">Sharky sees Charly as prey.<br />Charly sees Sharky as a friend.</p>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[1200px]:mt-4 max-[1200px]:text-sm">
              This creates a lighthearted chase dynamic where tension and comedy collide. Sharky tries to be intimidating, while Charly calmly treats him like a new companion. Their encounters reveal a playful loop of misunderstanding in the ocean depths.
            </p>
            <p className="mt-[3.2vw] text-[clamp(8px,0.65vw,12px)] font-normal not-italic text-[#0C69AE] max-[1200px]:mt-8 max-[1200px]:text-xs">“One thinks it’s hunting season. <span style={{ color: CHARLY_TEXT }}>The other thinks it’s friendship time.”</span></p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-sharky-poster.jpg"
            alt="Sharky character poster"
            className={`absolute left-[23.35%] top-[40.9%] w-[26.1%] shadow-[0_14px_16px_rgba(20,54,74,0.25)] max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mx-auto max-[1200px]:mt-20 max-[1200px]:w-full max-[1200px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[61.2%] top-[43.3%] w-[24%] text-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-10 max-[1200px]:w-full ${REVEAL}`} data-reveal>
            <Palette colors={SHARKY_COLORS} label="Sharky color palette" />
            <p className="text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[1200px]:text-sm">
              Sharky is a sleek, fast-moving shark who acts as a sharpener with confidence and playful dominance. Though he calls himself “The King of the Ocean,” he is more of a mischievous hunter than a true threat. His favorite pastime is chasing Charly.
            </p>
            <p className="mt-[1.1vw] text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[1200px]:mt-4 max-[1200px]:text-sm">
              Deep ocean blues and sharp orange accents emphasize his fins and motion, giving him a bold, energetic presence even when he is still.
            </p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-charly-poster.jpg"
            alt="Charly character poster"
            className={`absolute left-[23.35%] top-[61.35%] w-[26.1%] shadow-[0_14px_16px_rgba(83,46,102,0.24)] max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mx-auto max-[1200px]:mt-20 max-[1200px]:w-full max-[1200px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[61.2%] top-[64.9%] w-[24%] text-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-10 max-[1200px]:w-full ${REVEAL}`} style={{ color: CHARLY_TEXT }} data-reveal>
            <Palette colors={CHARLY_COLORS} label="Charly color palette" />
            <p className="text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[1200px]:text-sm">
              Charly is a tiny, curious pencil fish who explores the ocean with endless optimism. She believes every creature she meets is kind, making her fearless in the most innocent and adorable way. Even danger feels like friendship to her.
            </p>
            <p className="mt-[1.1vw] text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[1200px]:mt-4 max-[1200px]:text-sm">
              Soft purple forms and bright yellow accents give her a cheerful, glowing appearance that stands out against the underwater world.
            </p>
          </div>

          <div className={`absolute left-1/2 top-[84.5%] flex w-[28%] -translate-x-1/2 flex-col items-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mx-auto max-[1200px]:mt-24 max-[1200px]:w-full max-[1200px]:max-w-[520px] max-[1200px]:translate-x-0 ${REVEAL}`} data-reveal>
            <div className="relative isolate w-full">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <span className="absolute bottom-[11%] left-[1%] h-[4%] w-[22%] -rotate-12 rounded-[50%] bg-black/25 blur-[clamp(3px,0.35vw,7px)]" />
                <span className="absolute bottom-[-2%] left-[13%] h-[13%] w-[42%] rounded-[50%] bg-black/30 blur-[clamp(3px,0.35vw,7px)]" />
                <span className="absolute bottom-[4%] right-[-2%] h-[12%] w-[58%] rounded-[50%] bg-black/30 blur-[clamp(3px,0.35vw,7px)]" />
              </div>
              <img src="/assets/images/artlantis/artlantis-duo-cutout.png" alt="Sharky and Charly" className="relative z-10 w-full" />
            </div>
            <img src="/assets/images/artlantis/ARTLANTIS-PROJ.png" alt="Artlantis Duo" className="mt-[3vw] w-[27%] max-[1200px]:mt-10 max-[1200px]:w-[140px]" />
          </div>
        </section>
      </main>
    </div>
  )
}
