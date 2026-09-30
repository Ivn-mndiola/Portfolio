import Nav from '../../components/Nav.jsx'
import { Photo, Lightbox, Caption, PhotoTriptych, usePhotoViewer } from '../../components/PhotoGallery.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import CaseStudyDescription from '../../components/CaseStudyDescription.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const ASSET_ROOT = '/assets/images/photography/case-study'
const DARK_SECTIONS = ['.photography-hero', '.photography-gallery']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const PHOTOS = [
  { src: 'product-left.webp', alt: 'Jo Malone Wood Sage and Sea Salt bottle on a dark surface', category: 'Product Photography', title: 'Wood Sage & Sea Salt', accent: '#FFFFFF' },
  { src: 'product-center.webp', alt: 'Jo Malone Wood Sage and Sea Salt bottle surrounded by green leaves', category: 'Product Photography', title: 'Wood Sage & Sea Salt', accent: '#FFFFFF' },
  { src: 'product-right.webp', alt: 'Jo Malone Wood Sage and Sea Salt bottle with greenery', category: 'Product Photography', title: 'Wood Sage & Sea Salt', accent: '#FFFFFF' },
  { src: 'food-left.webp', alt: 'Turon served beside condensed milk', category: 'Food Photography', title: 'Turon', accent: '#F99526' },
  { src: 'food-right.webp', alt: 'A plate of freshly cooked turon', category: 'Food Photography', title: 'Turon', accent: '#F99526' },
  { src: 'street-tower.webp', alt: 'Our Lady of the Atonement Cathedral bell tower in Baguio City', category: 'Street Photography', title: 'Sound of Saints', accent: '#2F88D5' },
  { src: 'street-lamp.webp', alt: 'Decorative street lamp against a blue sky', category: 'Street Photography', title: 'Sound of Saints', accent: '#2F88D5' },
  { src: 'street-eagle.webp', alt: 'Eagle sculpture outside the cathedral', category: 'Street Photography', title: 'Sound of Saints', accent: '#2F88D5' },
  { src: 'street-bird.webp', alt: 'Bird sculpture photographed from below', category: 'Street Photography', title: 'Sound of Saints', accent: '#2F88D5' },
  { src: 'portrait-one.webp', alt: 'Outdoor full-body portrait in a teal jacket', category: 'Portrait Photography', title: 'DR.K', accent: '#85A760' },
  { src: 'portrait-two.webp', alt: 'Outdoor waist-up portrait in a teal jacket', category: 'Portrait Photography', title: 'DR.K', accent: '#85A760' },
  { src: 'portrait-three.webp', alt: 'Outdoor portrait wearing a white shirt', category: 'Portrait Photography', title: 'DR.K', accent: '#85A760' },
  { src: 'portrait-four.webp', alt: 'Outdoor portrait wearing denim overalls', category: 'Portrait Photography', title: 'DR.K', accent: '#85A760' },
].map((photo) => ({ ...photo, src: `${ASSET_ROOT}/${photo.src}` }))

export default function PhotographyPage() {
  useScrollReveal()
  const viewer = usePhotoViewer(PHOTOS.length)
  const openLightbox = viewer.open

  return (
    <div className="photography-case-page min-h-screen overflow-x-hidden bg-[#262626] font-questrial text-white">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} />

      <main>
        <header className="photography-hero relative h-[65.68vw] max-[1200px]:flex max-[1200px]:h-auto max-[1200px]:min-h-svh max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:px-6 max-[1200px]:pb-12 max-[1200px]:pt-36">
          <div
            className={`absolute left-1/2 top-[32.2%] w-full -translate-x-1/2 text-center max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:translate-x-0 ${REVEAL}`}
            data-reveal
          >
            <p className="text-[clamp(11px,0.82vw,16px)] uppercase tracking-[0.03em]">
              <span className="font-serif font-black">SONY.</span>{' '}
              <span className="font-bahnschrift font-semibold">ZV-E10</span>
            </p>
            <h1 className="mt-[0.6vw] font-bahnschrift text-[clamp(52px,4.35vw,84px)] font-black italic uppercase leading-none tracking-[0.01em] [text-shadow:0_9px_5px_rgba(55,66,0,0.38)] max-[1200px]:mt-3 max-[1200px]:text-[clamp(46px,13vw,76px)]">
              Photography
            </h1>
          </div>

          <CaseStudyDescription
            className={`absolute left-1/2 top-[50.5%] w-[48%] -translate-x-1/2 text-center text-white/95 max-[1200px]:relative max-[1200px]:left-auto max-[1200px]:top-auto max-[1200px]:mt-10 max-[1200px]:w-full max-[1200px]:max-w-2xl max-[1200px]:translate-x-0 ${REVEAL}`}
            data-reveal
          >
            A cinematic photography series captured using the <strong>Sony ZV-E10</strong>, exploring real-world moments through light, mood, and composition.
            <br />
            Each frame is guided by a storytelling-driven approach that focuses on atmosphere and visual emotion.
          </CaseStudyDescription>

          <div className="absolute inset-x-0 bottom-[7.5%] px-[8vw] max-[1200px]:relative max-[1200px]:inset-auto max-[1200px]:mt-auto max-[1200px]:w-full max-[1200px]:px-0 max-[1200px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[1200px]:w-full ${REVEAL}`}
              dataReveal
              projectLine1="Sony ZV-E10 Series"
              projectLine2="Photography"
              scope={['Photography', 'Layout Design']}
              programs={['Figma', 'Adobe Photoshop', 'Adobe Lightroom']}
              contactRole="Graphic Artist"
            />
          </div>
        </header>

        <section className="photography-gallery relative h-[173.07vw] bg-[#262626] max-[1200px]:h-auto max-[1200px]:space-y-28 max-[1200px]:px-5 max-[1200px]:py-24">
          <article
            className={`absolute inset-x-0 top-[9.48vw] flex flex-col items-center max-[1200px]:relative max-[1200px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <img
              src={`${ASSET_ROOT}/jo-malone-logo.webp`}
              alt="Jo Malone London"
              loading="lazy"
              decoding="async"
              className="mb-[1.38vw] h-auto w-[10.7vw] brightness-0 invert max-[1200px]:mb-10 max-[1200px]:w-[180px]"
            />
            <PhotoTriptych photos={PHOTOS} indices={[0, 1, 2]} onOpen={openLightbox} />
            <Caption heading="Product Photography" name="Wood Sage & Sea Salt">
              Exploring product storytelling through light, texture, and composition.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[52.29vw] flex flex-col items-center max-[1200px]:relative max-[1200px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[58.8%] grid-cols-2 gap-[1.41vw] max-[1200px]:w-full max-[1200px]:max-w-[760px] max-[1200px]:grid-cols-1 max-[1200px]:gap-4">
              <Photo photo={PHOTOS[3]} index={3} onOpen={openLightbox} />
              <Photo photo={PHOTOS[4]} index={4} onOpen={openLightbox} />
            </div>
            <Caption heading="Food Photography" name="Turon" color="#F99526">
              Sweetness that transcends generations. A love letter to the merienda.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[87.55vw] flex flex-col items-center max-[1200px]:relative max-[1200px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[49.4%] grid-cols-[1fr_1fr_0.97fr] items-stretch gap-[0.62vw] max-[1200px]:w-full max-[1200px]:max-w-[760px] max-[1200px]:grid-cols-2 max-[1200px]:gap-4">
              <Photo photo={PHOTOS[5]} index={5} onOpen={openLightbox} />
              <Photo photo={PHOTOS[6]} index={6} onOpen={openLightbox} />
              <div className="grid grid-rows-2 gap-[0.6vw] max-[1200px]:col-span-2 max-[1200px]:grid-cols-2 max-[1200px]:grid-rows-1 max-[1200px]:gap-4">
                <Photo photo={PHOTOS[7]} index={7} onOpen={openLightbox} className="h-full" imageClassName="h-full" />
                <Photo photo={PHOTOS[8]} index={8} onOpen={openLightbox} className="h-full" imageClassName="h-full" />
              </div>
            </div>
            <Caption heading="Street Photography" name="Sound of Saints" color="#2F88D5">
              The tower tells us when, the lamp shows us where.
            </Caption>
          </article>

          <article
            className={`absolute inset-x-0 top-[125.36vw] flex flex-col items-center max-[1200px]:relative max-[1200px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[66.88%] grid-cols-4 gap-[0.61vw] max-[1200px]:w-full max-[1200px]:max-w-[760px] max-[1200px]:grid-cols-2 max-[1200px]:gap-4">
              <Photo photo={PHOTOS[9]} index={9} onOpen={openLightbox} />
              <Photo photo={PHOTOS[10]} index={10} onOpen={openLightbox} />
              <Photo photo={PHOTOS[11]} index={11} onOpen={openLightbox} />
              <Photo photo={PHOTOS[12]} index={12} onOpen={openLightbox} />
            </div>
            <Caption heading="Portrait Photography" name="DR.K" color="#85A760">
              Capturing personality and emotion through natural light and candid expression.
              <br />
              No updates required. just pure, unadulterated chaotic energy from minute one.
            </Caption>
          </article>
        </section>
      </main>

      {viewer.isOpen && (
        <Lightbox
          photos={PHOTOS}
          index={viewer.index}
          onClose={viewer.close}
          onPrevious={viewer.previous}
          onNext={viewer.next}
        />
      )}
    </div>
  )
}
