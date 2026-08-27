import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.artlantis-hero']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const SHARKY_COLORS = ['#2B82B8', '#1B78B5', '#C8E1E6', '#B8C7D7', '#FFA512']
const CHARLY_COLORS = ['#A876B9', '#7B4C9A', '#562174', '#E18A00', '#FFC300']

function Palette({ colors, label }) {
  return (
    <div className="mb-[2vw] flex justify-center gap-[0.8vw] max-[900px]:mb-6 max-[900px]:gap-2" aria-label={label}>
      {colors.map((color) => (
        <span
          key={color}
          className="block h-[1.2vw] w-[2.15vw] min-h-3 min-w-6 max-[900px]:h-5 max-[900px]:w-10"
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
    <div className="relative min-h-screen overflow-x-hidden bg-white font-questrial text-[#0877B7]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="blue" />

      <main className="relative min-[901px]:h-[240.52vw]">
        <img
          src="/assets/images/artlantis/artlantis-page-bg.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-auto w-full select-none min-[901px]:block"
        />

        <section className="artlantis-hero relative z-10 h-[65.55vw] text-white max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-svh max-[900px]:flex-col max-[900px]:items-center max-[900px]:bg-[linear-gradient(rgba(0,88,155,0.12),rgba(0,102,173,0.32)),url('/assets/images/artlantis/ARTLANTIS-BG.jpg')] max-[900px]:bg-cover max-[900px]:bg-center max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-36">
          <p className={`absolute left-1/2 top-[18.4%] -translate-x-1/2 whitespace-nowrap text-[clamp(10px,0.9vw,17px)] uppercase tracking-[0.08em] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:translate-x-0 max-[900px]:text-xs ${REVEAL}`} data-reveal>
            Conceptual Character Design
          </p>

          <img
            src="/assets/images/artlantis/ARTLANTIS-PROJ.png"
            alt="Artlantis Duo"
            className={`absolute left-1/2 top-[23.2%] w-[39%] -translate-x-1/2 object-contain drop-shadow-[0_9px_8px_rgba(0,49,97,0.2)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-5 max-[900px]:w-full max-[900px]:max-w-[560px] max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />

          <p className={`absolute left-1/2 top-[50.5%] w-[45%] -translate-x-1/2 text-center text-[clamp(9px,0.67vw,13px)] leading-[1.45] text-white/95 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            Two product-inspired characters form the Artlantis Duo: Sharky, a bold pencil sharpener, and Charly, a curious pencil fish. Their contrasting personalities turn everyday creative tools into a playful underwater story built around color, humor, friendship, and character-driven design.
          </p>

          <div className="absolute inset-x-0 bottom-[7.5%] px-[8vw] max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-auto max-[900px]:w-full max-[900px]:px-0 max-[900px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[900px]:w-full ${REVEAL}`}
              dataReveal
              fontClassName="font-questrial"
              projectLine1="Conceptual Character Design"
              projectLine2="Artlantis Duo"
              scope={['Illustration', 'Socials', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
            />
          </div>
        </section>

        <section className="relative z-10 h-[174.97vw] max-[900px]:h-auto max-[900px]:bg-white max-[900px]:px-5 max-[900px]:py-20">
          <div className={`absolute left-1/2 top-[4.2%] w-[45%] -translate-x-1/2 text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <h2 className="text-[clamp(24px,1.65vw,32px)] font-bold">Introduction</h2>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[900px]:mt-5 max-[900px]:text-sm">
              During his internship as an Artist, Graphic Artist, and Illustrator, Iverson Mendiola was entrusted with developing Charly and Sharky—a playful underwater character duo that later became official mascots. As one of his earliest character-design projects, the experience created an opportunity to explore illustration, visual storytelling, and character development within a professional creative environment.
            </p>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[900px]:mt-4 max-[900px]:text-sm">
              Guided by experimental sketches and iterative refinement, the initial concepts became memorable characters with distinct identities and values. Seeing the project evolve from sketches into recognized mascots became an important milestone in his creative journey.
            </p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-duo-poster.jpg"
            alt="Artlantis Duo character poster"
            className={`absolute left-[23.35%] top-[16.3%] w-[26.1%] shadow-[0_16px_18px_rgba(0,49,75,0.35)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-16 max-[900px]:w-full max-[900px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[60.2%] top-[19.2%] w-[25%] text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full ${REVEAL}`} data-reveal>
            <img src="/assets/images/artlantis/ARTLANTIS-PROJ.png" alt="Artlantis Duo" className="mx-auto mb-[2.2vw] w-[33%] max-[900px]:mb-8 max-[900px]:w-[150px]" />
            <h2 className="text-[clamp(20px,1.45vw,28px)] font-bold">About Their Dynamic</h2>
            <p className="mt-[2vw] text-[clamp(9px,0.7vw,13px)] font-semibold leading-[1.45] max-[900px]:mt-7 max-[900px]:text-sm">Sharky sees Charly as prey.<br />Charly sees Sharky as a friend.</p>
            <p className="mt-[1.2vw] text-[clamp(9px,0.7vw,13px)] leading-[1.4] max-[900px]:mt-4 max-[900px]:text-sm">
              This creates a lighthearted chase dynamic where tension and comedy collide. Sharky tries to be intimidating, while Charly calmly treats him like a new companion. Their encounters reveal a playful loop of misunderstanding in the ocean depths.
            </p>
            <p className="mt-[3.2vw] text-[clamp(8px,0.65vw,12px)] italic max-[900px]:mt-8 max-[900px]:text-xs">“One thinks it’s hunting season. The other thinks it’s friendship time.”</p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-sharky-poster.jpg"
            alt="Sharky character poster"
            className={`absolute left-[23.35%] top-[40.9%] w-[26.1%] shadow-[0_14px_16px_rgba(20,54,74,0.25)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-20 max-[900px]:w-full max-[900px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[61.2%] top-[43.3%] w-[24%] text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full ${REVEAL}`} data-reveal>
            <Palette colors={SHARKY_COLORS} label="Sharky color palette" />
            <p className="text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[900px]:text-sm">
              Sharky is a sleek, fast-moving shark who acts as a sharpener with confidence and playful dominance. Though he calls himself “The King of the Ocean,” he is more of a mischievous hunter than a true threat. His favorite pastime is chasing Charly.
            </p>
            <p className="mt-[1.1vw] text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[900px]:mt-4 max-[900px]:text-sm">
              Deep ocean blues and sharp orange accents emphasize his fins and motion, giving him a bold, energetic presence even when he is still.
            </p>
          </div>

          <img
            src="/assets/images/artlantis/artlantis-charly-poster.jpg"
            alt="Charly character poster"
            className={`absolute left-[23.35%] top-[61.35%] w-[26.1%] shadow-[0_14px_16px_rgba(83,46,102,0.24)] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-20 max-[900px]:w-full max-[900px]:max-w-[430px] ${REVEAL}`}
            data-reveal
          />

          <div className={`absolute left-[61.2%] top-[64.9%] w-[24%] text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full ${REVEAL}`} data-reveal>
            <Palette colors={CHARLY_COLORS} label="Charly color palette" />
            <p className="text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[900px]:text-sm">
              Charly is a tiny, curious pencil fish who explores the ocean with endless optimism. She believes every creature she meets is kind, making her fearless in the most innocent and adorable way. Even danger feels like friendship to her.
            </p>
            <p className="mt-[1.1vw] text-[clamp(9px,0.7vw,13px)] leading-[1.42] max-[900px]:mt-4 max-[900px]:text-sm">
              Soft purple forms and bright yellow accents give her a cheerful, glowing appearance that stands out against the underwater world.
            </p>
          </div>

          <div className={`absolute left-1/2 top-[84.5%] flex w-[28%] -translate-x-1/2 flex-col items-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-24 max-[900px]:w-full max-[900px]:max-w-[520px] max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <img src="/assets/images/artlantis/artlantis-duo-cutout.png" alt="Sharky and Charly" className="w-full drop-shadow-[0_12px_8px_rgba(0,0,0,0.18)]" />
            <img src="/assets/images/artlantis/ARTLANTIS-PROJ.png" alt="Artlantis Duo" className="mt-[3vw] w-[27%] max-[900px]:mt-10 max-[900px]:w-[140px]" />
          </div>
        </section>
      </main>
    </div>
  )
}
