import { useRef } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import useMockupCarousel from '../../hooks/useMockupCarousel.js'
import useSocialCarousel from '../../hooks/useSocialCarousel.js'

const MOCKUPS = Array.from({ length: 10 }, (_, i) => ({
  n: i + 1,
  src: `/assets/images/danes/MOCKUP-${i + 1}.jpg`,
}))

const SOCIAL_POSTS = Array.from({ length: 6 }, (_, i) => ({
  n: i + 1,
  src: `/assets/images/danes/SOCIAL-MEDIA-${i + 1}.jpg`,
}))

const DARK_SECTIONS = ['.cs-hero', '.mockup-slider-section', '.social-carousel-section']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'
const SECTION = 'flex flex-col items-center px-[8vw] py-[100px] text-center'
const HEADING = 'mb-[60px] font-urbanist text-[32px] font-extrabold uppercase tracking-[0.05em] text-[#FC044C]'
const ROUND_BUTTON = 'flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all duration-200 hover:scale-105 hover:border-[#FC044C] hover:bg-[#FC044C]'

export default function DanesPage() {
  useScrollReveal()

  const mockupTrackRef = useRef(null)
  const { goNext: mockupNext, goPrev: mockupPrev } = useMockupCarousel(mockupTrackRef, MOCKUPS.length)

  const socialTrackRef = useRef(null)
  const socialWrapperRef = useRef(null)
  const { activeIndex, goNext: socialNext, goPrev: socialPrev, goToDot } = useSocialCarousel(
    socialTrackRef,
    socialWrapperRef,
    SOCIAL_POSTS.length
  )

  return (
    <div className="overflow-x-hidden bg-white font-inter text-[#23252A]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} />

      <header className="cs-hero relative flex min-h-[80vh] flex-col items-center bg-[linear-gradient(180deg,#630521_0%,#1a0209_100%)] px-[8vw] pb-[60px] pt-[180px] text-center text-white">
        <img
          src="/assets/images/danes/DANES-PROJECT-LOGO.png"
          alt="Danes Esports"
          className={`mb-10 w-full max-w-[500px] [filter:drop-shadow(0_15px_30px_rgba(0,0,0,0.5))] ${REVEAL}`}
          data-reveal
        />
        <p className={`mb-20 max-w-[800px] text-[13px] leading-[1.8] text-white/80 [&_strong]:font-bold [&_strong]:text-white ${REVEAL}`} data-reveal>
          <strong>DANES Esports</strong> is a modern competitive gaming organization built
          on <strong>discipline, precision, and fearless execution.</strong> In an industry
          crowded with aggressive mascots and chaotic visuals, the goal was to design a
          brand identity that feels <strong>sharp, controlled, and instantly recognizable.</strong>
          <br />
          <br />
          The concept <strong>&ldquo;Cut Through the Meta&rdquo;</strong> became the
          foundation of the identity&mdash;a mindset of <strong>breaking trends</strong> rather
          than following them. The visual system uses angular cuts, bold typography, and
          high-contrast color to communicate <strong>speed, focus, and confidence.</strong>
          <br />
          <br />
          A custom wordmark paired with a flexible <strong>DS monogram</strong> ensures
          strong recognition across digital platforms, apparel, and gaming peripherals. The
          result is a clean yet aggressive brand system designed to perform at every scale.
        </p>

        <CaseStudyMeta
          className={`mb-10 mt-auto w-[calc(100%_-_8vw)] max-w-[1560px] ${REVEAL}`}
          dataReveal
          projectLine1="Esports Visuals and Brand Identity"
          projectLine2="for Danes Esports 2025"
          scope={['Logo', 'Brand Identity', 'Socials', 'Layout Design', 'Mockups']}
          programs={['Figma', 'Adobe Photoshop', 'Adobe Illustrator']}
        />
      </header>

      <section className={`${SECTION} pb-0`}>
        <p className={`mb-10 max-w-[900px] text-base leading-relaxed [&_strong]:font-bold [&_strong]:text-[#FC044C] ${REVEAL}`} data-reveal>
          <strong>We are,</strong> a modern esports organization blending Sharp discipline,
          precision, and fearlessness with contemporary gaming culture.
        </p>
        <img
          src="/assets/images/danes/DANES-FULL-ROSTER.png"
          alt="Cut Through the Meta Roster Banner"
          className={`block h-auto w-screen max-w-none ${REVEAL}`}
          data-reveal
        />
      </section>

      <section className={SECTION}>
        <h2 className={`${HEADING} ${REVEAL}`} data-reveal>
          Brand Values
        </h2>
        <div className={`grid w-full max-w-[1200px] grid-cols-4 gap-10 text-left max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 ${REVEAL}`} data-reveal>
          <div className="[&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#FC044C] [&_p]:text-sm [&_p]:leading-relaxed [&_strong]:font-bold">
            <h3>Resilience</h3>
            <p>
              unshakable <strong>focus</strong> under pressure.
            </p>
          </div>
          <div className="[&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#FC044C] [&_p]:text-sm [&_p]:leading-relaxed [&_strong]:font-bold">
            <h3>Unity</h3>
            <p>
              strength through <strong>coordinated</strong> teamwork.
            </p>
          </div>
          <div className="[&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#FC044C] [&_p]:text-sm [&_p]:leading-relaxed [&_strong]:font-bold">
            <h3>Precision</h3>
            <p>
              exacting gameplay and <strong>communication</strong>.
            </p>
          </div>
          <div className="[&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#FC044C] [&_p]:text-sm [&_p]:leading-relaxed [&_strong]:font-bold">
            <h3>Honor</h3>
            <p>
              compete hard. <strong>win clean</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className={SECTION}>
        <h2 className={`${HEADING} ${REVEAL}`} data-reveal>
          Team Logo
        </h2>
        <div className={`flex items-end justify-center gap-20 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-10 ${REVEAL}`} data-reveal>
          <div className="flex flex-col items-center">
            <img src="/assets/images/danes/RED-DANES-1.png" alt="Main Logo" className="mb-5 h-auto max-w-[250px]" />
            <span className="text-sm font-bold uppercase tracking-[0.05em] text-[#FC044C]">Main Logo</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/images/danes/RED-DANES-2.png" alt="Icon Logo" className="mb-5 h-auto max-w-[250px]" />
            <span className="text-sm font-bold uppercase tracking-[0.05em] text-[#FC044C]">Icon Logo</span>
          </div>
        </div>

        <div className={`mx-auto mb-6 mt-10 flex w-full max-w-[1080px] items-center justify-center gap-7 max-[900px]:max-w-[90%] max-[900px]:gap-2.5 max-[600px]:flex-col max-[600px]:gap-1.5 ${REVEAL}`} data-reveal>
          <div className="h-1.5 flex-1 -translate-y-0.5 rounded-[10px] bg-[#FC044C] shadow-[0_4px_8px_rgba(0,0,0,0.22)] max-[600px]:h-[3px] max-[600px]:w-full max-[600px]:flex-none" />
          <div className="flex flex-col items-center px-1">
            <div className="mb-[7px] h-[11px] w-[76px] rounded-r-full bg-[#FC044C] [clip-path:polygon(0_0,100%_0,100%_100%,25%_100%)]" />
            <div className="font-urbanist text-[22px] font-extrabold leading-none tracking-[0.05em] text-[#FC044C] max-[900px]:text-lg">HOT MAGENTA RED</div>
            <div className="mt-[5px] font-urbanist text-[15px] font-normal tracking-[0.08em] text-[#FC044C] max-[900px]:text-sm">FC044C</div>
          </div>
          <div className="h-1.5 flex-1 -translate-y-0.5 rounded-[10px] bg-[#FC044C] shadow-[0_4px_8px_rgba(0,0,0,0.22)] max-[600px]:h-[3px] max-[600px]:w-full max-[600px]:flex-none" />
        </div>

        <p className={`mx-auto max-w-[720px] text-sm leading-[1.65] [&_strong]:font-bold [&_strong]:text-[#FC044C] ${REVEAL}`} data-reveal>
          Represents <strong>intensity, precision, and modern energy.</strong> It
          signals <strong>sharp</strong> decision-making, high competitiveness, and
          a <strong>bold</strong>, tech-driven identity. This color stands out as a
          powerful accent: <strong>fast, fearless,</strong> and{' '}
          <strong>unmistakably aggressive.</strong>
        </p>
      </section>

      <section className={`${SECTION} w-full pb-10`}>
        <h2 className={`mb-10 font-urbanist text-[42px] font-extrabold uppercase tracking-[0.05em] text-[#FC044C] ${REVEAL}`} data-reveal>
          TEAM COLOR AND TYPOGRAPHY
        </h2>

        <div className={`mx-auto flex w-full max-w-[1000px] justify-center shadow-[0_8px_24px_rgba(0,0,0,0.1)] max-[900px]:flex-wrap ${REVEAL}`} data-reveal>
          <div className="flex flex-1 flex-col max-[900px]:mb-6 max-[900px]:min-w-[50%]">
            <div className="mb-3 font-urbanist text-xl font-extrabold uppercase tracking-[0.06em] text-[#BBBBBF]">
              MISTED SILVER
            </div>
            <div className="relative flex h-[120px] flex-col items-center justify-center bg-[#BBBBBF] text-white">
              <div className="mb-3.5 h-2 w-11 rounded-r-full bg-white [clip-path:polygon(0_0,100%_0,100%_100%,25%_100%)]" />
              <span className="font-gill text-[34px] font-normal tracking-[0.03em]">BBBBBF</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col max-[900px]:mb-6 max-[900px]:min-w-[50%]">
            <div className="mb-3 font-urbanist text-xl font-extrabold uppercase tracking-[0.06em] text-[#FC044C]">
              HOT MAGENTA RED
            </div>
            <div className="relative flex h-[120px] flex-col items-center justify-center bg-[#FC044C] text-white">
              <div className="mb-3.5 h-2 w-11 rounded-r-full bg-white [clip-path:polygon(0_0,100%_0,100%_100%,25%_100%)]" />
              <span className="font-gill text-[34px] font-normal tracking-[0.03em]">FC044C</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col max-[900px]:mb-6 max-[900px]:min-w-[50%]">
            <div className="mb-3 font-urbanist text-xl font-extrabold uppercase tracking-[0.06em] text-[#23252A]">
              DANES BLACK
            </div>
            <div className="relative flex h-[120px] flex-col items-center justify-center bg-[#23252A] text-white">
              <div className="mb-3.5 h-2 w-11 rounded-r-full bg-white [clip-path:polygon(0_0,100%_0,100%_100%,25%_100%)]" />
              <span className="font-gill text-[34px] font-normal tracking-[0.03em]">23252A</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col max-[900px]:mb-6 max-[900px]:min-w-[50%]">
            <div className="mb-3 font-urbanist text-xl font-extrabold uppercase tracking-[0.06em] text-[#FC044C]">
              FROSTED PEARL
            </div>
            <div className="relative flex h-[120px] flex-col items-center justify-center bg-[#EDEDED] text-[#FC044C]">
              <div className="mb-3.5 h-2 w-11 rounded-r-full bg-[#FC044C] [clip-path:polygon(0_0,100%_0,100%_100%,25%_100%)]" />
              <span className="font-gill text-[34px] font-normal tracking-[0.03em]">EDEDED</span>
            </div>
          </div>
        </div>
      </section>

      <div className={`mb-[60px] flex w-screen max-w-none flex-col gap-2 ${REVEAL}`} data-reveal>
        <div className="flex w-full items-center justify-center bg-[#FC044C] py-2.5 text-center">
          <span className="font-gill text-[64px] font-normal leading-none tracking-[0.02em] text-white max-[900px]:text-[40px]">Gill Sans MT Condensed</span>
        </div>
        <div className="flex w-full items-center justify-center bg-[#FC044C] py-3.5 text-center">
          <span className="font-urbanist text-[72px] font-extrabold leading-none tracking-[0.02em] text-white max-[900px]:text-5xl">Urbanist</span>
        </div>
      </div>

      <section className={`${SECTION} pt-0`}>
        <p className={`max-w-[800px] text-sm leading-relaxed [&_strong]:text-[#FC044C] ${REVEAL}`} data-reveal>
          <strong>Gill Sans MT Condensed</strong> and <strong>Urbanist</strong> form
          a <strong>clean, modern</strong> typographic system. Gill Sans
          adds <strong>energy and focus</strong>, while Urbanist
          provides <strong>clarity and balance</strong>, creating
          a <strong>professional, readable</strong>, and{' '}
          <strong>contemporary hierarchy</strong>.
        </p>
      </section>

      <section className={SECTION}>
        <h2 className={`${HEADING} ${REVEAL}`} data-reveal>
          Logo Studies
        </h2>
        <img
          src="/assets/images/danes/LOGO-STUDIES.png"
          alt="Logo Studies Breakdown"
          className={`block h-auto w-screen max-w-none ${REVEAL}`}
          data-reveal
        />
      </section>

      <section className={SECTION}>
        <h2 className={`${HEADING} ${REVEAL}`} data-reveal>
          Team Uniform
        </h2>
        <img
          src="/assets/images/danes/TEAM-UNIFORM.png"
          alt="Team Uniforms"
          className={`block h-auto w-screen max-w-none ${REVEAL}`}
          data-reveal
        />

        <p className={`mt-8 max-w-[800px] text-center text-[11px] uppercase leading-relaxed tracking-[0.05em] text-[#FC044C] [&_strong]:font-bold ${REVEAL}`} data-reveal>
          <strong>DISCLAIMER:</strong>
          <br />
          The logos displayed in this portfolio are used solely for educational and
          personal portfolio purposes.
          <br />
          These logos remain the intellectual property of their respective owners,
          <br />
          and their inclusion does not imply any sponsorship, endorsement, or official
          affiliation with the brands.
        </p>
      </section>

      <section className="mockup-slider-section flex w-screen max-w-none flex-col items-start bg-[#23252A] px-[8vw] py-[100px]">
        <div className={`mb-10 flex w-full items-center justify-between max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-5 ${REVEAL}`} data-reveal>
          <h2 className="font-urbanist text-[42px] font-extrabold uppercase tracking-[0.02em] text-white">Mockups</h2>

          <div className="flex gap-4">
            <button className={ROUND_BUTTON} aria-label="Previous" onClick={mockupPrev}>
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className={ROUND_BUTTON} aria-label="Next" onClick={mockupNext}>
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`w-full overflow-hidden ${REVEAL}`} data-reveal>
          <div className="mockup-track flex gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={mockupTrackRef}>
            {MOCKUPS.map((m) => (
              <div className="mockup-card flex aspect-[4/5] min-w-[280px] basis-[calc(25%_-_18px)] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-2 max-[900px]:basis-[calc(50%_-_12px)] max-[600px]:basis-[85%]" key={m.n}>
                <img src={m.src} alt={`Mockup ${m.n}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="social-carousel-section flex w-screen max-w-none flex-col items-center overflow-hidden bg-[#23252A] pb-20 pt-[100px]">
        <div className={`relative mb-10 flex w-full items-center justify-center px-[8vw] ${REVEAL}`} data-reveal>
          <h2 className={`${HEADING} mb-0`}>Social Media</h2>
          <div className="absolute right-[8vw] flex gap-3.5">
            <button className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-white/25 bg-white/[0.08] text-white backdrop-blur-lg transition duration-200 hover:scale-[1.06] hover:border-[#FC044C] hover:bg-[#FC044C]" aria-label="Previous" onClick={socialPrev}>
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-white/25 bg-white/[0.08] text-white backdrop-blur-lg transition duration-200 hover:scale-[1.06] hover:border-[#FC044C] hover:bg-[#FC044C]" aria-label="Next" onClick={socialNext}>
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`relative mx-auto flex w-full max-w-[100vw] items-center justify-center ${REVEAL}`} data-reveal>
          <div className="relative w-full overflow-hidden py-[30px]" ref={socialWrapperRef}>
            <div className="social-track flex items-center gap-7 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform max-[600px]:gap-4" ref={socialTrackRef}>
              {SOCIAL_POSTS.map((post) => (
                <div
                  className="social-card block w-[440px] basis-[440px] shrink-0 scale-[0.82] cursor-pointer overflow-hidden rounded-[10px] opacity-[0.22] [filter:brightness(0.25)] transition-[transform,opacity,filter,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] data-[active=true]:scale-100 data-[active=true]:cursor-default data-[active=true]:opacity-100 data-[active=true]:[filter:brightness(1)] data-[active=true]:shadow-[0_0_45px_rgba(252,4,76,0.18),0_25px_50px_rgba(0,0,0,0.85)] max-[600px]:w-[280px] max-[600px]:basis-[280px]"
                  key={post.n}
                  data-active="false"
                >
                  <img src={post.src} alt={`Post ${post.n}`} className="block h-auto w-full rounded-[10px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2.5">
          {SOCIAL_POSTS.map((post, i) => (
            <div
              key={post.n}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${i === activeIndex ? 'scale-[1.3] bg-[#FC044C]' : 'bg-white/25'}`}
              onClick={() => goToDot(i)}
              role="button"
              tabIndex={0}
              aria-label={`Show social post ${post.n}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') goToDot(i)
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
