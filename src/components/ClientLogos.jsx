const LOGOS = [
  { src: '/assets/images/danes/danes-icon.png', alt: 'DS', className: 'h-[60px]' },
  { src: '/assets/images/danes/danes-main.png', alt: 'DANES MAIN', className: 'h-10' },
  { src: '/assets/images/nia/nia-icon.png', alt: 'NIA', className: 'h-[33px]' },
  { src: '/assets/images/nia/nia-main.png', alt: 'NIA MAIN', className: 'h-[33px]' },
  { src: '/assets/images/gamedev/game-dev-icon.png', alt: 'GAME DEV', className: 'h-10' },
  { src: '/assets/images/gamedev/game-main.png', alt: 'ATLAS', className: 'h-10' },
  { src: '/assets/images/source/source-icon.png', alt: 'SOURCE', className: 'h-[45px]' },
  { src: '/assets/images/source/source-main.png', alt: 'SOURCE', className: 'h-[45px]' },
]

export default function ClientLogos({ visible }) {
  // Duplicate the logo set for a seamless marquee loop
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <footer
      className={`pointer-events-none absolute bottom-10 left-1/2 z-10 w-[60vw] max-w-[900px] -translate-x-1/2 overflow-hidden transition-opacity duration-[1500ms] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] max-md:bottom-5 max-md:w-[90vw] ${visible ? 'opacity-50' : 'opacity-0'}`}
    >
      <div className="flex w-max animate-marquee items-center">
        {doubled.map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className={`mx-[35px] w-auto shrink-0 object-contain brightness-0 invert max-md:mx-5 max-md:scale-[0.8] ${logo.className}`}
          />
        ))}
      </div>
    </footer>
  )
}
