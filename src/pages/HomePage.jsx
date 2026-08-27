import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import useHeroAnimation from '../hooks/useHeroAnimation.js'

function reveal(isVisible, hiddenTransform = 'translate-y-10') {
  return `transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
    isVisible ? 'translate-y-0 scale-100 opacity-100' : `${hiddenTransform} opacity-0`
  }`
}

export default function HomePage() {
  const anim = useHeroAnimation()
  const navigate = useNavigate()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function handleCtaClick(e) {
    e.preventDefault()
    navigate('/projects')
  }

  return (
    <div className="relative h-screen overflow-hidden bg-[#071030] text-white">
      <div className="absolute inset-0 bg-[url('/assets/images/HOME-HERO-BG.jpg')] bg-cover bg-center" />
      <Nav active="/" />

      <section className="relative flex h-screen items-center justify-center overflow-hidden" id="hero">
        <div className="absolute top-1/2 z-[1] w-full -translate-y-1/2 text-center max-md:top-[40%] max-md:flex max-md:flex-col max-md:items-center">
          <p className={`absolute left-[27%] top-[-15px] font-questrial text-[25px] font-semibold tracking-[0.02em] max-md:static max-md:mb-2.5 ${reveal(anim.delay1)}`}>Hello, I'm</p>
          <h1 className={`m-0 font-oswald text-[clamp(100px,25vw,300px)] font-bold italic uppercase leading-[0.9] tracking-[-0.01em] [text-shadow:0_10px_30px_rgba(0,0,0,0.5)] ${reveal(anim.delay1, 'translate-y-5 scale-90')}`}>IVERSON</h1>
          <p className={`absolute bottom-[-40px] right-[23%] whitespace-nowrap font-questrial text-[25px] font-semibold tracking-[0.02em] max-md:static max-md:mt-2.5 ${reveal(anim.delay1)}`}>Creative Designer</p>
        </div>

        <div className={`pointer-events-none absolute bottom-[-15vh] z-[2] flex h-[95vh] justify-center ${reveal(anim.delay2, 'translate-y-[120px]')}`}>
          <img
            src="/assets/images/iver.png"
            alt="Iverson Mendiola"
            className="h-full origin-bottom scale-[1.15] object-cover [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.7))] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
          />
        </div>

        <div className={`absolute bottom-1/4 z-[3] ${reveal(anim.delay3)}`}>
          <a
            href="/projects"
            className="inline-block rounded-[3px] border-[1.5px] border-white/60 bg-black/40 px-[45px] py-[15px] text-[15px] font-semibold tracking-[0.15em] text-white no-underline backdrop-blur-[10px] transition duration-300 hover:border-white hover:bg-white hover:text-[#071030]"
            onClick={handleCtaClick}
          >
            VIEW PROJECTS
          </a>
        </div>
      </section>

      <ClientLogos visible={anim.fade} />
    </div>
  )
}
