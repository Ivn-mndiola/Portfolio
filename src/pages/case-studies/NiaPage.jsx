import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const DARK_SECTIONS = ['.nia-hero', '.nia-gateway-dark', '.nia-terminal-section']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'
const TEAL = '#48C1B0'

const COPY_BLOCK =
  'absolute z-10 text-left text-[#48C1B0] [&_h2]:mb-4 [&_h2]:font-montserrat [&_h2]:text-[clamp(18px,1.35vw,26px)] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_p]:text-[clamp(10px,0.78vw,15px)] [&_p]:font-light [&_p]:leading-[1.45]'

function TimelineRail({ color = TEAL, markers = [] }) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-[13.17%] top-0 z-[4]">
      <span className="absolute bottom-0 left-0 top-0 w-[2px] -translate-x-1/2" style={{ backgroundColor: color }} />
      {markers.map(({ top, tone = 'teal' }) => {
        const asset = tone === 'white'
          ? 'NIA-WHT-ARROW.svg'
          : tone === 'dark'
            ? 'NIA-BLACK-ARROW.svg'
            : 'NIA-ARROW.svg'

        return (
          <img
            key={`${top}-${tone}`}
            src={`/assets/images/nia/${asset}`}
            alt=""
            className="absolute left-0 h-auto w-[20px] -translate-x-1/2"
            style={{ top }}
          />
        )
      })}
    </div>
  )
}

function Feature({ title, label, children }) {
  return (
    <div className="mb-[clamp(28px,2.6vw,50px)] flex items-start gap-4">
      <img src="/assets/images/nia/NIA-ARROW.svg" alt="" className="mt-1 h-auto w-5 shrink-0" />
      <div>
        <h3 className="font-montserrat text-[clamp(17px,1.15vw,22px)] font-medium leading-none text-[#48C1B0]">{title}</h3>
        <span className="mb-2 mt-1.5 block text-[clamp(8px,0.58vw,11px)] font-bold uppercase tracking-[0.15em] text-[#48C1B0]/55">{label}</span>
        <p className="max-w-[430px] text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45] text-[#48C1B0]">{children}</p>
      </div>
    </div>
  )
}

function GlassSign({ src, alt }) {
  return (
    <div className="rounded-[18px] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08))] p-[clamp(8px,0.8vw,15px)] shadow-[0_16px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <img src={src} alt={alt} className="block h-auto w-full rounded-[10px]" />
    </div>
  )
}

function TypographySpecimen({ name, fontClassName, badges, sizeClassName }) {
  return (
    <div className="flex h-[clamp(70px,5.4vw,104px)] items-center justify-between gap-5 overflow-hidden rounded-[18px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.07))] px-[clamp(18px,1.45vw,28px)] shadow-[0_14px_28px_rgba(0,0,0,0.13)] backdrop-blur-xl">
      <span className={`min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-normal leading-none text-white ${fontClassName} ${sizeClassName}`}>{name}</span>
      <span className="flex shrink-0 flex-col gap-1">
        {badges.map((badge) => (
          <span key={badge} className="rounded bg-[#48C1B0] px-2.5 py-1 text-center text-[clamp(7px,0.48vw,9px)] font-bold tracking-[0.04em] text-white">
            {badge}
          </span>
        ))}
      </span>
    </div>
  )
}

export default function NiaPage() {
  useScrollReveal()

  return (
    <div className="overflow-x-hidden bg-white font-inter text-[#333333]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="teal" />

      <header
        className="nia-hero relative flex min-h-[65.82vw] flex-col items-center overflow-hidden px-[8vw] pb-[60px] pt-[11.85vw] text-center text-white"
        style={{
          background:
            'radial-gradient(ellipse 58% 42% at 50% -4%, rgba(204,229,225,0.88) 0%, rgba(123,203,193,0.72) 42%, transparent 74%), linear-gradient(180deg, #52C2B3 0%, #43B9AA 42%, #005248 100%)',
        }}
      >
        <img
          src="/assets/images/nia/NIA-NAME-LOGO.svg"
          alt="New Ilocos Airport"
          className={`mb-[5.95vw] h-auto w-[20.78vw] shrink-0 ${REVEAL}`}
          data-reveal
        />

        <p
          className={`mb-20 w-[44vw] shrink-0 text-center text-[clamp(9px,0.68vw,13px)] leading-[1.45] text-white/95 [&_strong]:font-bold [&_strong]:text-white ${REVEAL}`}
          data-reveal
        >
          <strong>NEW ILOCOS AIRPORT</strong> is a branding and wayfinding concept for a contemporary regional gateway,
          designed to enhance the passenger experience through clarity, movement, and seamless navigation. Built on
          principles of efficiency and connectivity, the visual identity combines a structured information system with a
          modern design language that reflects the airport&rsquo;s role as a key transportation hub while reinforcing a strong
          sense of regional character and place.
        </p>

        {/* Match the Danes metadata container and let the hero grow with its rows. */}
        <CaseStudyMeta
          className={`mb-10 mt-auto w-[calc(100%_-_8vw)] max-w-[1560px] ${REVEAL}`}
          dataReveal
          projectLine1="Conceptual Project"
          projectLine2="for New Ilocos Airport 2026"
          scope={['Logo', 'Brand Identity', 'Layout Design', 'Mockups']}
          programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
        />
      </header>

      <section
        className="nia-gateway-dark relative h-[33.49vw] overflow-hidden text-center"
        style={{
          background:
            'linear-gradient(180deg, #48C1B0 0%, #48C1B0 49%, rgba(72,193,176,0.72) 60%, rgba(255,255,255,0.9) 82%, #FFFFFF 100%)',
        }}
      >
        <h1
          className={`absolute left-1/2 top-[16.5%] z-[3] -translate-x-1/2 whitespace-nowrap font-montserrat text-[clamp(32px,4.15vw,80px)] font-bold leading-none text-white [text-shadow:0_5px_18px_rgba(0,0,0,0.08)] ${REVEAL}`}
          data-reveal
        >
          A Gateway to the North
        </h1>
        <img
          src="/assets/images/nia/NIA-AIRPLANE.svg"
          alt="Airplane approaching New Ilocos Airport"
          className={`absolute left-1/2 top-[36%] z-[2] h-auto w-[62%] -translate-x-1/2 ${REVEAL}`}
          data-reveal
        />
      </section>

      <section className="relative h-[119.4vw] overflow-hidden bg-white">
        <TimelineRail markers={[{ top: '1.8%' }, { top: '29.1%' }, { top: '47.2%' }, { top: '69.5%' }]} />

        <article className={`${COPY_BLOCK} left-[18.45%] top-[2.5%] w-[34%] ${REVEAL}`} data-reveal>
          <h2>Branding &amp; Wayfinding Concept</h2>
          <p className="!font-normal">
            Project: New Ilocos Airport<br />
            Scope: Brand Identity &amp; Wayfinding<br />
            Type: Concept Project
          </p>
          <p className="!mt-[clamp(26px,2.3vw,44px)]">
            A modern airport identity designed to emphasize clarity,<br />
            movement, and regional connection through a structured visual system.
          </p>
        </article>

        <div className={`absolute left-[60.5%] top-[12.6%] z-10 w-[31%] ${REVEAL}`} data-reveal>
          <Feature title="Clarity" label="Precision">High-contrast, bold strokes and generous spacing.</Feature>
          <Feature title="Flow" label="Movement">The curve rhythm that connects the three letters.</Feature>
          <Feature title="Efficiency" label="Connectivity">The use of mirrored modules&mdash;N and A share the same geometry.</Feature>
        </div>

        <article className={`${COPY_BLOCK} left-[18.45%] top-[28.7%] w-[34%] ${REVEAL}`} data-reveal>
          <h2>Brand Idea</h2>
          <p>A contemporary regional gateway<br />built on clarity, flow, and efficiency.</p>
          <p className="!mt-[clamp(24px,2.1vw,40px)] !font-normal">
            Keywords: Movement, Connectivity, Precision and Calm efficiency
          </p>
        </article>

        <article className={`${COPY_BLOCK} left-[18.45%] top-[47%] w-[31%] ${REVEAL}`} data-reveal>
          <h2>Logo System</h2>
          <p>
            The NIA symbol represents pathways and motion,<br />
            designed to scale across signage, digital interfaces,<br />
            and large environments.
          </p>
        </article>

        <img
          src="/assets/images/nia/NIA-LOGO-SYSTEM.svg"
          alt="New Ilocos Airport logo system"
          className={`absolute left-[54.2%] top-[41.7%] z-[6] h-auto w-[38.1%] ${REVEAL}`}
          data-reveal
        />

        <article className={`${COPY_BLOCK} left-[18.45%] top-[69.2%] w-[35%] ${REVEAL}`} data-reveal>
          <h2>Logo Construction</h2>
          <p>
            Built on a modular grid to ensure balance,<br />
            consistency, and reliability across all applications.
          </p>
        </article>

        <h2
          className={`absolute left-[55%] top-[78.1%] z-10 -translate-x-1/2 font-montserrat text-[clamp(18px,1.25vw,24px)] font-medium text-[#48C1B0] ${REVEAL}`}
          data-reveal
        >
          Logo Concept
        </h2>
        <img
          src="/assets/images/nia/NIA-LOGO-CONCEPT.svg"
          alt="NIA logo construction concepts"
          className={`absolute left-[19.5%] top-[82.1%] z-[6] h-auto w-[61.5%] ${REVEAL}`}
          data-reveal
        />
      </section>

      <section className="nia-dark-section relative h-[64.2vw] overflow-hidden bg-[#969696] text-white">
        <TimelineRail color="#FFFFFF" markers={[{ top: '8.1%', tone: 'white' }, { top: '62.4%', tone: 'white' }]} />

        <article className={`absolute left-[18.45%] top-[7.5%] z-10 w-[35.6%] ${REVEAL}`} data-reveal>
          <h2 className="mb-[clamp(22px,1.7vw,32px)] font-montserrat text-[clamp(18px,1.35vw,26px)] font-medium text-white">Color &amp; Typography</h2>
          <div className="flex flex-col gap-[clamp(12px,0.9vw,18px)]">
            <TypographySpecimen
              name="Sansation"
              fontClassName="font-questrial"
              sizeClassName="text-[clamp(42px,3.9vw,75px)]"
              badges={['REGULAR', 'BOLD']}
            />
            <TypographySpecimen
              name="Bahnschrift"
              fontClassName="font-bahnschrift"
              sizeClassName="text-[clamp(38px,3.25vw,62px)]"
              badges={['REGULAR', 'BOLD', 'CONDENSED']}
            />
          </div>
        </article>

        <img
          src="/assets/images/nia/NIA-COLORS.svg"
          alt="New Ilocos Airport colors"
          className={`absolute left-[55.2%] top-[7.1%] z-[6] h-auto w-[37.4%] ${REVEAL}`}
          data-reveal
        />

        <article className={`absolute left-[18.45%] top-[61.8%] z-10 w-[32%] text-white ${REVEAL}`} data-reveal>
          <h2 className="mb-4 font-montserrat text-[clamp(18px,1.35vw,26px)] font-medium">Wayfinding System</h2>
          <p className="mb-2 text-[clamp(10px,0.78vw,15px)] font-light">Wayfinding Principles</p>
          <ul className="mb-4 list-disc pl-5 text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45]">
            <li>High contrast</li>
            <li>Minimal wording</li>
            <li>Clear hierarchy</li>
            <li>Consistent placement</li>
          </ul>
          <p className="text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45]">Designed to improve passenger flow and reduce confusion.</p>
        </article>

        <div className={`absolute left-[54.6%] top-[64.5%] z-[6] flex w-[37.2%] flex-col gap-[clamp(15px,1.15vw,22px)] ${REVEAL}`} data-reveal>
          <GlassSign src="/assets/images/nia/NIA-SIGN-DEPART1.svg" alt="NIA directional signage" />
          <GlassSign src="/assets/images/nia/NIA-SIGN-DEPART2.svg" alt="NIA departures signage" />
        </div>
      </section>

      <section className="nia-terminal-section relative h-[84.3vw] overflow-hidden text-white">
        <img
          src="/assets/images/nia/NIA-TERMINAL.png"
          alt="New Ilocos Airport terminal and wayfinding system"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <TimelineRail color="#FFFFFF" markers={[{ top: '14.5%', tone: 'white' }, { top: '63.4%', tone: 'dark' }]} />

        <article className={`absolute left-[18.45%] top-[14%] z-10 w-[31%] ${REVEAL}`} data-reveal>
          <h2 className="mb-4 font-montserrat text-[clamp(18px,1.35vw,26px)] font-medium leading-[1.15] text-white">
            Mockup |<br />Wayfinding Signage
          </h2>
          <p className="text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45] text-white">Directional and gate information system</p>
        </article>

        <div className={`absolute left-[18.45%] top-[31.2%] z-[8] flex w-[29.4%] flex-col gap-[clamp(18px,1.3vw,25px)] ${REVEAL}`} data-reveal>
          <GlassSign src="/assets/images/nia/NIA-GATE1.svg" alt="NIA gate M1 sign" />
          <GlassSign src="/assets/images/nia/NIA-EXIT.svg" alt="NIA exit R3 sign" />
        </div>

        <article className={`absolute left-[18.45%] top-[63%] z-10 w-[32%] text-[#111111] ${REVEAL}`} data-reveal>
          <h2 className="mb-4 font-montserrat text-[clamp(18px,1.35vw,26px)] font-medium leading-[1.15]">
            Mockup |<br />Terminal Environmental Graphics
          </h2>
          <p className="text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45]">Large-scale identity applications</p>
        </article>
      </section>

      <section className="relative h-[105.8vw] overflow-hidden bg-[#EDF1EF] text-[#48C1B0]">
        <div
          aria-hidden="true"
          className="absolute -inset-[4%] scale-110 bg-[url('/assets/images/nia/NIA-TERMINAL.png')] bg-cover bg-[center_78%] bg-no-repeat opacity-[0.22] blur-[24px] saturate-50"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-white/62" />
        <div className="absolute left-[13.17%] top-0 z-[4] h-[42%] w-[2px] -translate-x-1/2 bg-[#48C1B0]" />
        <img src="/assets/images/nia/NIA-ARROW.svg" alt="" className="absolute left-[13.17%] top-[15.2%] z-[7] h-auto w-5 -translate-x-1/2" />

        <img
          src="/assets/images/nia/NIA-ID.svg"
          alt="New Ilocos Airport staff identification and lanyard"
          className={`absolute left-[22.5%] top-[-7.8%] z-[5] h-auto w-[56%] max-w-none ${REVEAL}`}
          data-reveal
        />

        <article className={`absolute left-[18.45%] top-[14.4%] z-[8] w-[31%] ${REVEAL}`} data-reveal>
          <img src="/assets/images/nia/NIA-ID-LOGO.svg" alt="New Ilocos Airport" className="mb-[clamp(30px,3vw,58px)] h-auto w-[clamp(125px,10.2vw,195px)]" />
          <h2 className="mb-4 font-montserrat text-[clamp(18px,1.35vw,26px)] font-medium leading-[1.15]">
            Mockup |<br />Staff Identification System
          </h2>
          <p className="text-[clamp(10px,0.78vw,15px)] font-light leading-[1.45]">Operational and security credentials</p>
        </article>

        <img
          src="/assets/images/nia/NIA-FOOTER.svg"
          alt="New Ilocos Airport — A Gateway to the North"
          className={`absolute left-1/2 top-[68.3%] z-[7] h-auto w-[12.2%] -translate-x-1/2 ${REVEAL}`}
          data-reveal
        />
        <span className="absolute bottom-[8.2%] left-1/2 z-[7] -translate-x-1/2 font-bahnschrift text-[clamp(9px,0.72vw,14px)] font-bold">2026</span>
      </section>
    </div>
  )
}
