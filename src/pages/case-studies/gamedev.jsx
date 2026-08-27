import { useEffect } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'

const MOCKUPS = Array.from({ length: 9 }, (_, index) => ({
  n: index + 1,
  src: `/assets/images/gamedev/F${index + 1}.jpg`,
}))

const FADE =
  'fade-in translate-y-9 opacity-0 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

function SectionDivider({ children, id }) {
  return (
    <div className={`${FADE} mx-auto mb-6 mt-[7.5rem] flex w-full max-w-[1060px] flex-col items-center px-5`} id={id}>
      <img src="/assets/images/gamedev/PINE-TREE.svg" alt="Tree" className="mb-3 h-auto w-5 opacity-100 [filter:drop-shadow(0_4px_10px_rgba(0,0,0,0.5))]" />
      <div className="flex w-full items-center gap-7 before:h-0.5 before:flex-1 before:rounded-[20px] before:border before:border-white/40 before:bg-white/10 before:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] after:h-0.5 after:flex-1 after:rounded-[20px] after:border after:border-white/40 after:bg-white/10 after:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <span className="whitespace-nowrap text-2xl font-black uppercase text-white max-md:text-[15px]">{children}</span>
      </div>
    </div>
  )
}

function IdentityCard({ label, image, alt, children }) {
  return (
    <div className="relative flex flex-col items-center bg-transparent px-8 py-10 text-center transition-transform duration-300">
      <div className="mb-10 rounded-[40px] border border-white/15 bg-black/25 px-9 py-3 text-base font-extrabold text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)]">{label}</div>
      <div className="mb-8 flex h-[180px] items-center justify-center">
        <img src={image} alt={alt} className="max-h-[250px] object-contain [filter:drop-shadow(0_12px_24px_rgba(0,0,0,0.3))]" />
      </div>
      <p className="max-w-[260px] text-[15px] font-light leading-normal text-white/95">{children}</p>
    </div>
  )
}

const PALETTE = [
  { name: 'LIDEM', meaning: 'shadow', hex: '#121212', color: '#121212', dark: false },
  { name: 'RABII', meaning: 'night', hex: '#2D274B', color: '#2D274B', dark: false },
  { name: 'ANGIN', meaning: 'wind', hex: '#EFE4D3', color: '#EFE4D3', dark: true },
  { name: 'ULAP', meaning: 'cloud', hex: '#8C80B3', color: '#8C80B3', dark: false },
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
    <div className="gamedev-case-study min-h-screen overflow-x-hidden bg-[#141126] [background-image:url('/assets/images/gamedev/BG-PHGDE.jpg'),url('/assets/images/gamedev/GAME-DEV-BG.jpg')] bg-cover bg-bottom bg-no-repeat font-montserrat text-white">
      <Nav active="/projects" darkSectionSelectors={['.gamedev-case-study']} />

      <main className="flex w-full flex-col items-center">
        <header className={`${FADE} flex min-h-screen w-full flex-col justify-between px-[8vw] pb-[60px] pt-[140px] max-md:px-5 max-md:pb-10 max-md:pt-[120px]`} id="hero">
          <div className="my-auto flex w-full flex-col items-center">
            <div className="mb-6"><img src="/assets/images/gamedev/game-dev-icon.png" alt="Philippine Game Dev icon" className="h-auto w-[52px]" /></div>
            <h1 className="w-full text-center">
              <img src="/assets/images/gamedev/GAME-DEV-PROJECT.png" alt="Philippine Game Dev Experience" className="mx-auto h-auto w-full max-w-[620px]" />
            </h1>
            <div className="mt-10 flex flex-col items-center">
              <h4 className="mb-4 text-base font-bold tracking-[0.5px]">Level Up Your Future in Game Development</h4>
              <p className="w-full max-w-[1200px] text-center text-[15px] font-normal leading-relaxed text-white/90">
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

        <section className={`${FADE} relative z-[2] mt-0 w-full overflow-visible px-8 pb-40 pt-64 text-center max-md:-mt-[100px] max-md:px-6 max-md:py-32`} id="journey">
          <div className="relative z-[2]">
            <h2 className="mb-8 font-karla text-[50px] font-bold leading-[1.1] tracking-[-0.05em]">
              Your<span className="-mt-[15px] block text-[200px] font-semibold tracking-[-2px] text-[#EFE4D3] max-md:text-[4.8rem] max-[480px]:text-[3.6rem]">Journey</span>
            </h2>
            <div className="inline-block cursor-pointer rounded-full border border-white/35 bg-transparent px-11 py-3.5 font-karla text-[30px] font-bold tracking-[0.5px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-white/10">Starts Here!</div>
          </div>
          <img src="/assets/images/gamedev/pinecone.png" alt="Pinecone" className="pointer-events-none absolute right-[-1%] top-[-10%] z-10 w-[420px] opacity-[0.92] [filter:drop-shadow(0_30px_50px_rgba(0,0,0,0.6))] max-lg:w-[300px] max-md:hidden" />
        </section>

        <SectionDivider id="purpose">BRAND PURPOSE</SectionDivider>
        <section className={`${FADE} px-5 text-center`}>
          <p className="text-base font-light leading-[1.8] text-white/90">To empower aspiring game developers in Baguio City with accessible, visually engaging,<br className="max-lg:hidden" /> and career-relevant information about the Philippine game development industry.</p>
        </section>

        <SectionDivider>VISUAL IDENTITY | LOGO</SectionDivider>
        <section className={`${FADE} flex w-full max-w-[1200px] flex-col items-center px-10`}>
          <div className="mb-24 grid w-full max-w-[960px] grid-cols-3 max-md:grid-cols-1 max-md:gap-6">
            <IdentityCard label="CONTROLLER" image="/assets/images/gamedev/ICON-CONTROLLER.png" alt="Controller Shape">Represents the heart of gaming</IdentityCard>
            <IdentityCard label="STAR" image="/assets/images/gamedev/ICON-STAR.png" alt="Star Shape">Symbolizes Filipino identity<br />and serves as a guide.</IdentityCard>
            <IdentityCard label="GAME | DEV" image="/assets/images/gamedev/ICON-GAME-DEV.png" alt="Combined Shape">Symbolizes how users interact<br />with games mirroring<br />how developers<br />shape player experiences.</IdentityCard>
          </div>
          <div className="grid w-full max-w-[900px] grid-cols-2 items-center pt-20 max-md:grid-cols-1 max-md:gap-10">
            <div className="flex flex-col items-center px-10">
              <p className="mb-7 text-xl font-semibold tracking-[3px] text-[#A39EBA]">MAIN LOGO</p>
              <img src="/assets/images/gamedev/GAME-DEV-PROJECT.png" alt="Main Logo" className="h-[100px] w-auto" />
            </div>
            <div className="flex flex-col items-center px-10">
              <p className="mb-7 text-xl font-semibold tracking-[3px] text-[#A39EBA]">ICON | SECONDARY</p>
              <img src="/assets/images/gamedev/game-dev-icon.png" alt="Secondary Icon" className="h-[100px] w-auto" />
            </div>
          </div>
        </section>

        <SectionDivider>TYPOGRAPHY</SectionDivider>
        <section className={`${FADE} mx-auto grid w-full max-w-[900px] grid-cols-2 gap-[120px] px-5 text-center max-lg:grid-cols-1`}>
          <div><p className="mb-6 text-[25px] font-light tracking-[2px]">PRIMARY</p><h2 className="font-montserrat text-[5.5rem] font-bold tracking-[-1.5px] text-[#EFE4D3] max-md:text-6xl">Montserrat</h2></div>
          <div><p className="mb-6 text-[25px] font-light tracking-[2px]">SECONDARY</p><h2 className="font-karla text-[5.5rem] font-normal tracking-[-1.5px] text-[#EFE4D3] max-md:text-6xl">Karla</h2></div>
        </section>

        <SectionDivider>BRAND PALETTE</SectionDivider>
        <section className={`${FADE} grid w-full max-w-[960px] grid-cols-4 gap-6 px-5 max-lg:grid-cols-2 max-lg:gap-5 max-[480px]:gap-3.5`}>
          {PALETTE.map((swatch) => (
            <div className="text-center" key={swatch.name}>
              <div className="mb-6 flex aspect-[2.2/1] w-full items-center justify-center rounded-[90px_0_90px_0] shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.04]" style={{ backgroundColor: swatch.color }}>
                <span className={`flex items-center gap-2.5 text-lg font-bold ${swatch.dark ? 'text-[#121212]' : 'text-[#EFE4D3]'}`}>
                  <img src="/assets/images/gamedev/PINE-TREE.svg" alt="" className={`h-auto w-4 ${swatch.dark ? '[filter:brightness(0)_invert(14%)_sepia(23%)_saturate(2250%)_hue-rotate(218deg)_brightness(97%)_contrast(93%)]' : ''}`} /> {swatch.hex}
                </span>
              </div>
              <p className="text-sm font-bold tracking-[1px]">{swatch.name}<span className="mt-0.5 block text-[11px] font-light text-[#A39EBA]">{swatch.meaning}</span></p>
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
          <img src="/assets/images/gamedev/game-main.png" alt="Game Dev Logo" className="h-[38px]" />
          <div className="flex flex-col items-center gap-1.5">
            <img src="/assets/images/gamedev/PINE-TREE.svg" alt="Pine Icon" className="h-auto w-[25px] opacity-90" />
            <p className="text-[13px] font-bold tracking-[3px]">2025</p>
          </div>
          <img src="/assets/images/gamedev/game-dev-icon.png" alt="Secondary Icon" className="h-[46px]" />
        </div>
      </footer>
    </div>
  )
}
