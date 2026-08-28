import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const ASSET_ROOT = '/assets/images/photography/case-study'
const DARK_SECTIONS = ['.photography-hero', '.photography-gallery']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

function Photo({ src, alt, className = '' }) {
  return (
    <img
      src={`${ASSET_ROOT}/${src}`}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`block h-auto w-full object-cover shadow-[12px_14px_10px_rgba(0,0,0,0.24)] ${className}`}
    />
  )
}

function Caption({ heading, name, children, color = '#FFFFFF' }) {
  return (
    <div className="mt-[2.5vw] text-center max-[900px]:mt-8" style={{ color }}>
      <h2 className="text-[clamp(12px,0.68vw,13px)] font-semibold uppercase tracking-[0.32em] max-[900px]:text-sm">
        {heading}
      </h2>
      <h3 className="mt-[1.65vw] text-[clamp(13px,0.78vw,15px)] font-semibold leading-none max-[900px]:mt-6 max-[900px]:text-base">
        {name}
      </h3>
      <p className="mx-auto mt-1 max-w-[720px] text-[clamp(11px,0.67vw,13px)] leading-[1.35] max-[900px]:mt-2 max-[900px]:max-w-xl max-[900px]:text-sm">
        {children}
      </p>
    </div>
  )
}

export default function PhotographyPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#262626] font-questrial text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} />

      <main>
        <header className="photography-hero relative h-[65.68vw] max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-svh max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-36">
          <div
            className={`absolute left-1/2 top-[32.2%] w-full -translate-x-1/2 text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          >
            <p className="text-[clamp(11px,0.82vw,16px)] uppercase tracking-[0.03em]">
              <span className="font-serif font-black">SONY.</span>{' '}
              <span className="font-bahnschrift font-semibold">ZV-E10</span>
            </p>
            <h1 className="mt-[0.6vw] font-bahnschrift text-[clamp(52px,4.35vw,84px)] font-black italic uppercase leading-none tracking-[0.01em] [text-shadow:0_9px_5px_rgba(55,66,0,0.38)] max-[900px]:mt-3 max-[900px]:text-[clamp(46px,13vw,76px)]">
              Photography
            </h1>
          </div>

          <p
            className={`absolute left-1/2 top-[50.5%] w-[48%] -translate-x-1/2 text-center text-[clamp(9px,0.67vw,13px)] leading-[1.45] text-white/95 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`}
            data-reveal
          >
            A cinematic photography series captured using the <strong className="font-semibold">Sony ZV-E10</strong>, exploring real-world moments through light, mood, and composition.
            <br />
            Each frame is guided by a storytelling-driven approach that focuses on atmosphere and visual emotion.
          </p>

          <div className="absolute inset-x-0 bottom-[7.5%] px-[8vw] max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-auto max-[900px]:w-full max-[900px]:px-0 max-[900px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[900px]:w-full ${REVEAL}`}
              dataReveal
              projectLine1="Sony ZV-E10 Series"
              projectLine2="Photography"
              scope={['Photography', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Lightroom']}
              contactRole="Graphic Artist"
            />
          </div>
        </header>

        <section className="photography-gallery relative h-[173.07vw] bg-[#262626] max-[900px]:h-auto max-[900px]:space-y-28 max-[900px]:px-5 max-[900px]:py-24">
          <article
            className={`absolute inset-x-0 top-[9.48vw] flex flex-col items-center max-[900px]:relative max-[900px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <img
              src={`${ASSET_ROOT}/jo-malone-logo.webp`}
              alt="Jo Malone London"
              loading="lazy"
              decoding="async"
              className="mb-[1.38vw] h-auto w-[10.7vw] brightness-0 invert max-[900px]:mb-10 max-[900px]:w-[180px]"
            />
            <div className="grid w-[63.28%] grid-cols-[1fr_2.253fr_1fr] items-stretch gap-[0.84vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
              <Photo src="product-left.webp" alt="Jo Malone Wood Sage and Sea Salt bottle on a dark surface" />
              <Photo src="product-center.webp" alt="Jo Malone Wood Sage and Sea Salt bottle surrounded by green leaves" />
              <Photo src="product-right.webp" alt="Jo Malone Wood Sage and Sea Salt bottle with greenery" />
            </div>
            <Caption heading="Product Photography" name="Wood Sage & Sea Salt">
              Exploring product storytelling through light, texture, and composition.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[52.29vw] flex flex-col items-center max-[900px]:relative max-[900px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[58.8%] grid-cols-2 gap-[1.41vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
              <Photo src="food-left.webp" alt="Turon served beside condensed milk" />
              <Photo src="food-right.webp" alt="A plate of freshly cooked turon" />
            </div>
            <Caption heading="Food Photography" name="Turon" color="#F99526">
              Sweetness that transcends generations. A love letter to the merienda.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[87.55vw] flex flex-col items-center max-[900px]:relative max-[900px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[49.4%] grid-cols-[1fr_1fr_0.97fr] items-stretch gap-[0.62vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-2 max-[900px]:gap-4">
              <Photo src="street-tower.webp" alt="Our Lady of the Atonement Cathedral bell tower in Baguio City" />
              <Photo src="street-lamp.webp" alt="Decorative street lamp against a blue sky" />
              <div className="grid grid-rows-2 gap-[0.6vw] max-[900px]:col-span-2 max-[900px]:grid-cols-2 max-[900px]:grid-rows-1 max-[900px]:gap-4">
                <Photo src="street-eagle.webp" alt="Eagle sculpture outside the cathedral" className="h-full" />
                <Photo src="street-bird.webp" alt="Bird sculpture photographed from below" className="h-full" />
              </div>
            </div>
            <Caption heading="Street Photography" name="Sound of Saints" color="#2F88D5">
              The tower tells us when, the lamp shows us where.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[125.36vw] flex flex-col items-center max-[900px]:relative max-[900px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[66.88%] grid-cols-4 gap-[0.61vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-2 max-[900px]:gap-4">
              <Photo src="portrait-one.webp" alt="Outdoor full-body portrait in a teal jacket" />
              <Photo src="portrait-two.webp" alt="Outdoor waist-up portrait in a teal jacket" />
              <Photo src="portrait-three.webp" alt="Outdoor portrait wearing a white shirt" />
              <Photo src="portrait-four.webp" alt="Outdoor portrait wearing denim overalls" />
            </div>
            <Caption heading="Portrait Photography" name="DR.K" color="#85A760">
              Capturing personality and emotion through natural light and candid expression.
              <br />
              No updates required. just pure, unadulterated chaotic energy from minute one.
            </Caption>
          </article>
        </section>
      </main>
    </div>
  )
}
