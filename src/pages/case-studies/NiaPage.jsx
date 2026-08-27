import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'

const DARK_SECTIONS = ['.hero-section', '.gateway-dark-zone', '.nia-dark-section', '.bg-terminal-mockup']

const TIMELINE =
  "relative isolate ml-[12vw] mr-auto max-w-[1100px] pl-[60px] [--timeline-color:#E6E8E9] before:pointer-events-none before:absolute before:left-[-1.5px] before:top-0 before:w-[3px] before:rounded-b-full before:bg-[var(--timeline-color)] before:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-[-1.5px] after:w-[3px] after:bg-[var(--timeline-color)] after:content-[''] max-[900px]:ml-[5vw] max-[900px]:mr-[5vw] max-[900px]:pl-8"
const TIMELINE_ITEM =
  "relative grid grid-cols-[1fr_1.2fr] gap-[50px] pb-[120px] before:pointer-events-none before:absolute before:bottom-2 before:left-[-61.5px] before:top-[30px] before:w-[3px] before:rounded-full before:bg-[var(--timeline-color)] before:content-[''] last:before:bottom-0 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[900px]:before:left-[-33.5px] max-[600px]:pb-20"
const LEFT_COLUMN =
  '[&_h3]:mb-3 [&_h3]:font-montserrat [&_h3]:text-[26px] [&_h3]:font-medium [&_p]:mb-[15px] [&_p]:text-[15px] [&_p]:font-light [&_p]:leading-relaxed'
const WAYFINDING_CARD =
  'rounded-[18px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)] p-3.5 shadow-[0_15px_25px_rgba(0,0,0,0.15)] backdrop-blur-xl'

function Marker({ tone = 'teal' }) {
  const markerAsset = {
    teal: 'NIA-ARROW.svg',
    white: 'NIA-WHT-ARROW.svg',
    dark: 'NIA-BLACK-ARROW.svg',
  }[tone]

  return (
    <img
      src={`/assets/images/nia/${markerAsset}`}
      alt="Marker"
      className="absolute -left-[60px] top-0.5 z-10 h-auto w-[22px] -translate-x-1/2 max-[900px]:-left-8"
    />
  )
}

function WayfindingCard({ src, alt }) {
  return (
    <div className={WAYFINDING_CARD}>
      <img src={src} alt={alt} className="block h-auto w-full overflow-hidden rounded-[10px]" />
    </div>
  )
}

function Feature({ title, label, children }) {
  return (
    <div className="mb-10 flex items-start gap-[15px]">
      <img src="/assets/images/nia/NIA-ARROW.svg" alt="" className="mt-0.5 h-[22px] w-[22px]" />
      <div>
        <h4 className="font-montserrat text-[22px] font-medium leading-none text-[#48C1B0]">{title}</h4>
        <span className="mb-2.5 mt-[5px] block text-[11px] font-bold uppercase tracking-[0.15em] text-[#48C1B0]/50">{label}</span>
        <p className="m-0 text-[15px] font-light text-[#48C1B0]/95">{children}</p>
      </div>
    </div>
  )
}

export default function NiaPage() {
  return (
    <div className="overflow-x-hidden bg-white font-karla text-[#333333]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="teal" />

      <header className="hero-section bg-[linear-gradient(180deg,#48C1B0_0%,#168475_60%,#001512_100%)] px-[8vw] pb-[50px] pt-[180px] text-center text-white">
        <div className="mx-auto flex max-w-[900px] flex-col items-center">
          <img src="/assets/images/nia/NIA-NAME-LOGO.svg" alt="New Ilocos Airport Logo" className="mb-[91px] w-full max-w-[400px]" />
          <p className="mb-[60px] text-[15px] leading-[1.8] text-white/95 [&_strong]:font-bold">
            NEW ILOCOS AIRPORT is a <strong>branding</strong> and <strong>wayfinding concept</strong> for a contemporary regional gateway,
            designed to <strong>enhance</strong> the passenger experience through <strong>clarity, movement</strong>, and <strong>seamless navigation</strong>.
            Built on <strong>principles of efficiency</strong> and <strong>connectivity</strong>, the visual identity combines a structured
            information system with a modern design language that reflects the airport&rsquo;s role as a key transportation hub while reinforcing a strong
            sense of regional character and place.
          </p>
        </div>

        <CaseStudyMeta
          className="mx-auto w-[calc(100%_-_8vw)] max-w-[1560px]"
          projectLine1="Conceptual Project"
          projectLine2="for New Ilocos Airport 2026"
          scope={['Logo', 'Brand Identity', 'Layout Design', 'Mockups']}
          programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
        />
      </header>

      <section className="relative bg-[linear-gradient(180deg,#48C1B0_0%,#48C1B0_30%,#FFFFFF_85%)] pt-[60px] text-center">
        <div aria-hidden="true" className="gateway-dark-zone pointer-events-none absolute inset-x-0 top-0 h-[58%]" />
        <h2 className="relative z-[2] mb-[50px] font-montserrat text-[clamp(3rem,6vw,5rem)] font-bold text-white [text-shadow:0_4px_15px_rgba(0,0,0,0.1)]">A Gateway to the North</h2>
        <img src="/assets/images/nia/NIA-AIRPLANE.svg" alt="Airplane" className="relative z-[2] mx-auto w-full max-w-[900px]" />
      </section>

      <section className="bg-white">
        <div className={`${TIMELINE} pb-[60px] pt-[60px] before:h-[52px] after:h-[60px]`}>
          <div className={TIMELINE_ITEM}>
            <Marker />
            <div className={`${LEFT_COLUMN} [&_h3]:text-[#48C1B0] [&_p]:text-[#48C1B0]/95`}>
              <h3>Branding &amp; Wayfinding Concept</h3>
              <p className="!text-lg">Project: New Ilocos Airport<br />Scope: Brand Identity &amp; Wayfinding<br />Type: Concept Project</p>
              <p className="!mt-[45px]">A modern airport identity designed to emphasize clarity,<br />movement, and regional connection through a structured visual system.</p>
            </div>
            <div className="mt-[215px] max-[900px]:mt-0">
              <Feature title="Clarity" label="Precision">High-contrast, bold strokes and generous spacing.</Feature>
              <Feature title="Flow" label="Movement">The curve rhythm that connects the three letters.</Feature>
              <Feature title="Efficiency" label="Connectivity">The use of mirrored modules (N and A share the same geometry).</Feature>
            </div>
          </div>

          <div className={TIMELINE_ITEM}>
            <Marker />
            <div className={`${LEFT_COLUMN} [&_h3]:text-[#48C1B0] [&_p]:text-[#48C1B0]/95`}>
              <h3>Brand Idea</h3>
              <p>A contemporary regional gateway<br />built on clarity, flow, and efficiency.</p>
              <p className="!mt-[45px] !text-lg">Keywords: Movement, Connectivity, Precision and Calm efficiency</p>
            </div>
            <div />
          </div>

          <div className={TIMELINE_ITEM}>
            <Marker />
            <div className={`${LEFT_COLUMN} [&_h3]:text-[#48C1B0] [&_p]:text-[#48C1B0]/95`}>
              <h3>Logo System</h3>
              <p>The NIA symbol represents pathways and motion,<br />designed to scale across signage, digital interfaces,<br />and large environments.</p>
            </div>
            <img src="/assets/images/nia/NIA-LOGO-SYSTEM.svg" alt="Logo System" className="h-auto w-[125%] max-[900px]:w-full" />
          </div>

          <div className={`${TIMELINE_ITEM} pb-[100px]`}>
            <Marker />
            <div className={`${LEFT_COLUMN} [&_h3]:text-[#48C1B0] [&_p]:text-[#48C1B0]/95`}>
              <h3>Logo Construction</h3>
              <p>Built on a modular grid to ensure balance,<br />consistency, and reliability across all applications.</p>
            </div>
            <div />
            <div className="col-span-full mt-[100px] flex w-full flex-col items-center text-center">
              <h3 className="mb-[50px] font-montserrat text-2xl font-semibold text-[#48C1B0]">Logo Concept</h3>
              <img src="/assets/images/nia/NIA-LOGO-CONCEPT.svg" alt="Logo Concept Grid" className="h-auto w-full max-w-[900px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="nia-dark-section bg-[#8A8B8F] text-white">
        <div className={`${TIMELINE} [--timeline-color:white] pb-[60px] pt-[60px] before:h-[52px] after:h-[60px]`}>
          <div className={TIMELINE_ITEM}>
            <Marker tone="white" />
            <div className={`${LEFT_COLUMN} [&_h3]:text-white [&_p]:text-white/95`}>
              <h3>Color &amp; Typography</h3>
              <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-center justify-between gap-5 overflow-hidden rounded-[18px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)] px-7 py-[18px] shadow-[0_15px_25px_rgba(0,0,0,0.15)] backdrop-blur-[18px]">
                  <h2 className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-questrial text-[75px] font-normal leading-none text-white max-[600px]:text-4xl">Sansation</h2>
                  <div className="flex shrink-0 flex-col items-stretch justify-center gap-1">
                    <span className="rounded bg-[#48C1B0] px-3 py-1 text-center font-questrial text-[10px] font-bold tracking-[0.03em] text-white">REGULAR</span>
                    <span className="rounded bg-[#48C1B0] px-3 py-1 text-center font-questrial text-[10px] font-bold tracking-[0.03em] text-white">BOLD</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 overflow-hidden rounded-[18px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)] px-7 py-[18px] shadow-[0_15px_25px_rgba(0,0,0,0.15)] backdrop-blur-[18px]">
                  <h2 className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-bahnschrift text-[62px] font-normal leading-none text-white max-[600px]:text-4xl">Bahnschrift</h2>
                  <div className="flex shrink-0 flex-col items-stretch justify-center gap-1">
                    {['REGULAR', 'BOLD', 'CONDENSED'].map((badge) => <span className="rounded bg-[#48C1B0] px-3 py-1 text-center font-bahnschrift text-[10px] font-bold tracking-[0.03em] text-white" key={badge}>{badge}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <img src="/assets/images/nia/NIA-COLORS.svg" alt="Color Palette: Finn White, Charcoal, Raven White, Nia Teal" className="mx-auto block h-auto w-[130%] max-w-none max-[900px]:w-full" />
          </div>

          <div className={`${TIMELINE_ITEM} pb-[100px]`}>
            <Marker tone="white" />
            <div className={`${LEFT_COLUMN} [&_h3]:text-white [&_p]:text-white/95`}>
              <h3>Wayfinding System</h3>
              <p>Wayfinding Principles</p>
              <ul className="mb-[15px] list-disc pl-5 text-[15px] font-light leading-[1.8] text-white/90">
                <li>High contrast</li><li>Minimal wording</li><li>Clear hierarchy</li><li>Consistent placement</li>
              </ul>
              <p>Designed to improve passenger flow and reduce confusion.</p>
            </div>
            <div className="flex w-[125%] flex-col gap-5 max-[900px]:w-full">
              <WayfindingCard src="/assets/images/nia/NIA-SIGN-DEPART1.svg" alt="Wayfinding Signage — Gate M1 and Exit R3" />
              <WayfindingCard src="/assets/images/nia/NIA-SIGN-DEPART2.svg" alt="Wayfinding Signage — Gate M1 and Exit R3" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-terminal-mockup bg-[url('/assets/images/nia/NIA-TERMINAL.jpg')] bg-cover bg-top bg-no-repeat">
        <div className={`${TIMELINE} [--timeline-color:white] pb-[350px] pt-[150px] before:h-[142px] after:h-[350px]`}>
          <div className={`${TIMELINE_ITEM} pt-[60px]`}>
            <Marker tone="white" />
            <div className={`${LEFT_COLUMN} text-white`}>
              <h3 className="!mt-[200px] !text-white">Mockup |<br />Wayfinding Signage</h3>
              <p className="!text-white">Directional and gate information system</p>
              <div className="mt-[100px] flex w-full max-w-[480px] flex-col gap-5">
                <WayfindingCard src="/assets/images/nia/NIA-GATE1.svg" alt="Wayfinding Signage — Gate M1" />
                <WayfindingCard src="/assets/images/nia/NIA-EXIT.svg" alt="Wayfinding Signage — Exit R3" />
              </div>
            </div>
            <div />
          </div>
          <div className={`${TIMELINE_ITEM} mt-[250px] pb-[100px]`}>
            <Marker tone="dark" />
            <div className={LEFT_COLUMN}>
              <h3>Mockup |<br />Terminal Environmental Graphics</h3>
              <p>Large-scale identity applications</p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-[1150px] overflow-visible bg-white max-[900px]:min-h-0">
        <div className="absolute left-[12vw] top-0 z-[2] h-[392px] w-[3px] rounded-b-full bg-[#48C1B0] max-[900px]:left-[5vw]" />
        <div className="absolute bottom-0 left-[12vw] top-[428px] z-[2] w-[3px] rounded-t-full bg-[#48C1B0] max-[900px]:left-[5vw]" />

        <img
          src="/assets/images/nia/NIA-ARROW.svg"
          alt="Marker"
          className="absolute left-[12vw] top-[400px] z-[6] h-auto w-[22px] -translate-x-1/2 max-[900px]:left-[5vw]"
        />

        <div className="absolute left-[calc(12vw_+_100px)] top-[220px] z-[5] w-[650px] max-[1200px]:left-[calc(12vw_+_70px)] max-[1200px]:w-[500px] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-auto max-[900px]:pb-10 max-[900px]:pl-[calc(5vw_+_40px)] max-[900px]:pr-6 max-[900px]:pt-32">
          <img
            src="/assets/images/nia/NIA-ID-LOGO.svg"
            alt="New Ilocos Airport"
            className="mb-[58px] w-[195px] max-[600px]:mb-10 max-[600px]:w-[150px]"
          />
          <h3 className="mb-6 font-montserrat text-[36px] font-semibold leading-[1.12] tracking-[-0.3px] text-[#48C1B0] max-[1200px]:text-[32px] max-[600px]:text-[28px]">
            Mockup |<br />Staff Identification System
          </h3>
          <p className="m-0 text-[22px] font-light text-[#48C1B0] max-[1200px]:text-lg max-[600px]:text-sm">Operational and security credentials</p>
        </div>

        <img
          src="/assets/images/nia/NIA-ID.svg"
          alt="Staff ID Card Mockup"
          className="pointer-events-none absolute left-[12vw] top-[-220px] z-[3] h-auto w-[min(1298px,88vw)] max-w-none max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:block max-[900px]:w-full max-[900px]:max-w-[700px]"
        />
      </section>

      <footer className="relative min-h-svh overflow-hidden bg-[#EDF1EF] text-center text-[#48C1B0]">
        <div
          aria-hidden="true"
          className="absolute -inset-8 scale-110 bg-[url('/assets/images/nia/NIA-TERMINAL.jpg')] bg-cover bg-[center_58%] bg-no-repeat opacity-[0.32] blur-[22px] saturate-50"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-white/55" />
        <img
          src="/assets/images/nia/NIA-FOOTER.svg"
          alt="New Ilocos Airport — A Gateway to the North"
          className="absolute left-1/2 top-[20%] z-[2] h-auto w-[clamp(145px,16vw,205px)] -translate-x-1/2"
        />
        <span className="absolute bottom-[16%] left-1/2 z-[2] -translate-x-1/2 font-bahnschrift text-sm font-bold">2026</span>
      </footer>
    </div>
  )
}
