import { Link } from 'react-router-dom'

export default function Slide({ slide, isActive, rosterIndex }) {
  const hasTextTitle = Boolean(slide.titleText)
  const backgroundAsset = slide.bgSet
    ? `image-set(url('${slide.bgSet.oneX}') 1x, url('${slide.bgSet.twoX}') 2x)`
    : `url('${slide.bg}')`

  return (
    <div
      className={`absolute inset-0 z-[1] flex items-center justify-center transition-[opacity,visibility] duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] [backface-visibility:hidden] ${
        isActive ? 'visible z-[2] opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className="absolute inset-0 -z-[1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: slide.bgOverlay ? `${slide.bgOverlay}, ${backgroundAsset}` : backgroundAsset }}
      />

      <div className="flex h-full w-full max-w-[1500px] items-center justify-between px-[8vw]">
        <div className="z-[3] mt-[100px] grid h-[70vh] w-full max-w-[680px] grid-rows-[1.2fr_auto_0.8fr] items-center justify-items-center gap-6">
          <div className="row-start-1 flex h-full w-full flex-col items-center justify-end self-end">
            {slide.smallIcon && (
              <img
                src={slide.smallIcon}
                alt=""
                className="mb-8 h-auto w-[75px] brightness-0 invert"
              />
            )}
            {slide.titleGraphic && (
              <img
                src={slide.titleGraphic}
                alt={`${slide.id} title`}
                className={`h-auto max-h-[200px] w-full object-contain [filter:drop-shadow(0_15px_35px_rgba(0,0,0,0.65))] ${
                  slide.id === 'gamedev' ? 'max-w-[540px]' : slide.id === 'dbfortri' ? 'max-w-[620px]' : 'max-w-[520px]'
                }`}
              />
            )}
            {slide.titleTagline && (
              <p className="mt-1 w-full max-w-[620px] pr-[1%] text-right text-[clamp(10px,0.78vw,15px)] font-medium uppercase tracking-[0.04em] text-white/85">
                {slide.titleTagline}
              </p>
            )}
            {hasTextTitle && (
              <>
                <span className="mb-[-4px] font-inter text-[13px] font-bold uppercase tracking-[0.2em] text-white/90">
                  {slide.titleText.subtitle}
                </span>
                <h2 className="m-0 translate-x-2 font-oswald text-[85px] font-bold italic uppercase leading-none tracking-[0.02em] text-white [filter:drop-shadow(0_15px_35px_rgba(0,0,0,0.65))]">
                  {slide.titleText.title}
                </h2>
              </>
            )}
          </div>

          <Link
            to={slide.cta.href}
            className="row-start-2 m-0 inline-block rounded border-[1.5px] border-white/30 bg-white/[0.06] px-14 py-4 text-[13px] font-bold tracking-[0.24em] text-white no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] motion-reduce:transition-none"
          >
            {slide.cta.label}
          </Link>

          <div className="row-start-3 flex h-full w-full flex-col items-center justify-start self-start">
            <p className={`mt-[90px] max-w-[580px] text-center text-sm leading-[1.75] text-white/65 [&_strong]:font-semibold [&_strong]:text-white ${slide.id === 'danes' ? 'whitespace-nowrap' : ''}`}>
              {slide.description}
            </p>
          </div>
        </div>

        {slide.visualRight && !slide.visualRight.wrapClass && (
          <div className="relative z-[2] flex h-[80vh] w-1/2 items-center justify-end">
            <img
              src={slide.visualRight.src}
              alt={slide.visualRight.alt}
              className="max-h-[88vh] w-[200%] max-w-[620px] translate-x-[120px] rotate-[-12deg] scale-[1.02] object-contain [filter:drop-shadow(-20px_30px_45px_rgba(0,0,0,0.65))] transition-[transform,filter] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />
          </div>
        )}

        {slide.visualRight && slide.visualRight.wrapClass && (
          <div className="relative z-[2] flex h-[80vh] w-1/2 items-center justify-end">
            <div>
              <img
                src={slide.visualRight.src}
                alt={slide.visualRight.alt}
                className="max-h-[76vh] max-w-full object-contain [filter:drop-shadow(0_20px_50px_rgba(0,0,0,0.7))]"
              />
            </div>
          </div>
        )}

        {slide.roster && (
          <div className="pointer-events-none absolute inset-0 z-[2] h-screen w-screen">
            {slide.roster.map((face, i) => (
              <img
                key={face.key}
                src={face.src}
                alt={face.alt}
                className={`absolute bottom-[-1vh] right-0 h-[98vh] w-auto max-w-none object-contain object-right-bottom [backface-visibility:hidden] [filter:drop-shadow(0_25px_60px_rgba(0,0,0,0.95))] transition-[opacity,visibility] duration-[850ms] ease-in-out motion-reduce:transition-none ${
                  i === rosterIndex ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
