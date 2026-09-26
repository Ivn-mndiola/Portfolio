import { useEffect } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'

const MOCKUPS = Array.from({ length: 9 }, (_, index) => ({
  n: index + 1,
  src: `/assets/images/gamedev/F${index + 1}.jpg`,
}))

const FADE =
  'fade-in translate-y-9 opacity-0 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

// Reuse each mark's original silhouette with the same ink as the page type.
function BrandMark({ src, alt = '', className = '' }) {
  const mask = `url("${src}") center / contain no-repeat`
  return (
    <span
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`block shrink-0 bg-current ${className}`}
      style={{ WebkitMask: mask, mask, maskMode: 'alpha' }}
    />
  )
}

function SectionDivider({ children, id }) {
  return (
    <div className={`${FADE} mx-auto mb-6 mt-[7.5rem] flex w-full max-w-[1060px] flex-col items-center px-5`} id={id}>
      <BrandMark src="/assets/images/gamedev/PINE-TREE.svg" className="mb-3 aspect-[576.47/925.73] w-5" />
      <div className="flex w-full items-center gap-7 before:h-px before:flex-1 before:bg-[#FDFDFD]/50 after:h-px after:flex-1 after:bg-[#FDFDFD]/50">
        <span className="whitespace-nowrap text-2xl font-medium uppercase tracking-normal max-md:text-[15px]">{children}</span>
      </div>
    </div>
  )
}

function IdentityCard({ label, image, alt, children }) {
  return (
    <div className="gamedev-identity-card min-w-0 relative flex flex-col items-center bg-transparent px-8 py-10 text-center transition-transform duration-300">
      <div className="mb-10 rounded-[40px] border border-white/15 bg-black/25 px-9 py-3 text-base font-semibold tracking-normal shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)]">{label}</div>
      <div className="mb-8 flex h-[180px] w-full items-center justify-center">
        <BrandMark src={image} alt={alt} className="aspect-square w-full max-w-[250px]" />
      </div>
      <p className="max-w-[260px] text-[15px] font-light leading-normal tracking-normal">{children}</p>
    </div>
  )
}

const PALETTE = [
  { name: 'LIDEM', meaning: 'shadow', hex: '#101010', dark: false },
  { name: 'RABII', meaning: 'night', hex: '#2D2A4A', dark: false },
  { name: 'ANGIN', meaning: 'wind', hex: '#FAF3E0', dark: true },
  { name: 'ULAP', meaning: 'cloud', hex: '#6B64B0', dark: false },
]

export default function GameDev() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Philippine Game Dev Experience | Iverson Mendiola'
    window.scrollTo(0, 0)

    const fadeElements = document.querySelectorAll('.gamedev-case-study .fade-in')
    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.revealed = 'true'
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    )

    fadeElements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="gamedev-case-study min-h-screen overflow-x-hidden bg-[#141126] [background-image:url('/assets/images/gamedev/BG-PHGDE.jpg'),url('/assets/images/gamedev/GAME-DEV-BG.jpg')] bg-cover bg-bottom bg-no-repeat font-montserrat tracking-normal text-[#FDFDFD]">
      <Nav active="/projects" darkSectionSelectors={['.gamedev-case-study']} />

      <main className="flex w-full flex-col items-center">
        <header className={`${FADE} flex min-h-screen w-full flex-col justify-between px-[8vw] pb-[60px] pt-[140px] max-md:px-5 max-md:pb-10 max-md:pt-[120px]`} id="hero">
          <div className="my-auto flex w-full flex-col items-center">
            <div className="mb-6"><BrandMark src="/assets/images/gamedev/game-dev-icon.png" alt="Philippine Game Dev icon" className="aspect-[174/170] w-[52px]" /></div>
            <h1 className="w-full text-center">
              <BrandMark src="/assets/images/gamedev/GAME-DEV-PROJECT.png" alt="Philippine Game Dev Experience" className="mx-auto aspect-[1589/477] w-full max-w-[620px]" />
            </h1>
            <div className="mt-10 flex flex-col items-center">
              <h4 className="mb-4 text-center text-base font-bold tracking-normal">Level Up Your Future in Game Development</h4>
              <p className="w-full max-w-[1200px] text-center text-[15px] font-normal leading-relaxed">
                Explore the world of game development in the Philippines through an interactive visual career guide designed for aspiring developers in
                <br className="max-lg:hidden" /> Baguio City. Discover career paths, industry insights, essential skills, and opportunities to help you start your journey in the game industry.
              </p>
            </div>
          </div>

          <CaseStudyMeta
            className="mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-md:mt-20"
            projectLine1="Visuals and Brand Identity"
            projectLine2="for Philippine Game Dev Experience 2025"
            scope={['Logo', 'Brand Identity', 'Layout Design', 'Mockups']}
            programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
          />
        </header>

        <section className={`${FADE} relative z-[2] mt-0 w-full overflow-visible px-8 pb-40 pt-64 text-center max-md:mt-0 max-md:px-6 max-md:py-32`} id="journey">
          <div className="relative z-[2]">
            <h2 className="mb-8 flex flex-col items-center gap-2 font-karla">
              <span className="text-[50px] font-bold leading-none tracking-[-0.04em]">Your</span>
              <span className="block text-[clamp(72px,14vw,200px)] font-normal leading-none tracking-[-0.03em] [font-family:Arial,Helvetica,sans-serif] max-md:text-[4.8rem] max-[480px]:text-[3.6rem]">Journey</span>
            </h2>
            <div className="inline-block cursor-pointer rounded-full border border-white/35 bg-transparent px-11 py-3.5 font-karla text-[30px] font-bold tracking-normal transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-white/10">Starts Here!</div>
          </div>
          <img src="/assets/images/gamedev/pinecone.png" alt="Pinecone" className="pointer-events-none absolute right-[-1%] top-[-10%] z-10 w-[420px] opacity-[0.92] [filter:drop-shadow(0_30px_50px_rgba(0,0,0,0.6))] max-lg:w-[300px] max-md:hidden" />
        </section>

        <SectionDivider id="purpose">BRAND PURPOSE</SectionDivider>
        <section className={`${FADE} px-5 text-center`}>
          <p className="text-base font-light leading-[1.8]">To empower aspiring game developers in Baguio City with accessible, visually engaging,<br className="max-lg:hidden" /> and career-relevant information about the Philippine game development industry.</p>
        </section>

        <SectionDivider>VISUAL IDENTITY | LOGO</SectionDivider>
        <section className={`${FADE} flex w-full max-w-[1200px] flex-col items-center px-10`}>
          <div className="mb-24 grid w-full max-w-[960px] grid-cols-3 max-lg:grid-cols-1 max-md:gap-6">
            <IdentityCard label="CONTROLLER" image="/assets/images/gamedev/ICON-CONTROLLER.png" alt="Controller Shape">Represents the heart of gaming</IdentityCard>
            <IdentityCard label="STAR" image="/assets/images/gamedev/ICON-STAR.png" alt="Star Shape">Symbolizes Filipino identity<br />and serves as a guide.</IdentityCard>
            <IdentityCard label="GAME | DEV" image="/assets/images/gamedev/ICON-GAME-DEV.png" alt="Combined Shape">Symbolizes how users interact<br />with games mirroring<br />how developers<br />shape player experiences.</IdentityCard>
          </div>
          <div className="grid w-full max-w-[900px] grid-cols-2 items-center pt-20 max-md:grid-cols-1 max-md:gap-10">
            <div className="flex flex-col items-center px-10">
              <p className="mb-7 text-xl font-medium tracking-normal">MAIN LOGO</p>
              <BrandMark src="/assets/images/gamedev/GAME-DEV-PROJECT.png" alt="Main Logo" className="h-[100px] w-[333px] max-w-full" />
            </div>
            <div className="flex flex-col items-center px-10">
              <p className="mb-7 text-xl font-medium tracking-normal">ICON | SECONDARY</p>
              <BrandMark src="/assets/images/gamedev/game-dev-icon.png" alt="Secondary Icon" className="h-[100px] w-[102.35px]" />
            </div>
          </div>
        </section>

        <SectionDivider>TYPOGRAPHY</SectionDivider>
        <section className={`${FADE} mx-auto grid w-full max-w-[1060px] grid-cols-2 gap-20 px-5 text-center max-lg:grid-cols-1`}>
          <div><p className="mb-6 text-[25px] font-normal tracking-normal">PRIMARY</p><h2 className="font-montserrat text-[clamp(48px,4.1vw,78px)] font-medium tracking-[-0.04em]">Montserrat</h2></div>
          <div><p className="mb-6 text-[25px] font-normal tracking-normal">SECONDARY</p><h2 className="font-karla text-[clamp(48px,4.1vw,78px)] font-normal tracking-[-0.04em]">Karla</h2></div>
        </section>

        <SectionDivider>BRAND PALETTE</SectionDivider>
        <section className={`${FADE} grid w-full max-w-[1060px] grid-cols-4 gap-3 px-5 max-lg:grid-cols-2 max-lg:gap-5 max-[480px]:gap-3.5`}>
          {PALETTE.map((swatch) => (
            <div className="text-center" key={swatch.name}>
              <div className="mb-6 flex aspect-[2/1] w-full items-center justify-center rounded-[999px_0_999px_0] transition-transform duration-300 hover:scale-[1.04]" style={{ backgroundColor: swatch.hex }}>
                <span className={`flex items-center gap-1.5 text-sm font-normal tracking-normal ${swatch.dark ? 'text-[#2D2A4A]' : 'text-[#FDFDFD]'}`}>
                  <BrandMark src="/assets/images/gamedev/PINE-TREE.svg" className="aspect-[576.47/925.73] w-3" /> {swatch.hex.slice(1)}
                </span>
              </div>
              <p className="text-sm font-normal tracking-normal">{swatch.name}<span className="mt-0.5 block text-[11px] font-normal tracking-normal">{swatch.meaning}</span></p>
            </div>
          ))}
        </section>

        <SectionDivider>MOCKUPS</SectionDivider>
        <section className={`${FADE} mb-32 w-full max-w-[1060px] px-5`}>
          <div className="grid grid-cols-3 gap-1.5 border border-white/[0.08] bg-[#1E1A38] max-md:grid-cols-2 max-md:gap-1 max-[480px]:grid-cols-1">
            {MOCKUPS.map((mockup) => (
              <div className="aspect-square overflow-hidden bg-[#141126]" key={mockup.n}>
                <img src={mockup.src} alt={`Mockup ${mockup.n}`} loading="lazy" className="block h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.06]" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex h-[260px] w-full items-end justify-center bg-transparent pb-10">
        <div className="flex w-full max-w-[1100px] items-center justify-between px-10 max-md:max-w-[2000px] max-md:px-[6vw]">
          <BrandMark src="/assets/images/gamedev/game-main.png" alt="Game Dev Logo" className="h-[38px] w-[131.1px]" />
          <div className="flex flex-col items-center gap-1.5">
            <BrandMark src="/assets/images/gamedev/PINE-TREE.svg" alt="Pine Icon" className="aspect-[576.47/925.73] w-[25px]" />
            <p className="text-[13px] font-medium tracking-normal">2025</p>
          </div>
          <BrandMark src="/assets/images/gamedev/game-dev-icon.png" alt="Secondary Icon" className="h-[46px] w-[47.08px]" />
        </div>
      </footer>
    </div>
  )
}
