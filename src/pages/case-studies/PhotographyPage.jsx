import { useCallback, useRef, useState } from 'react'
import Nav from '../../components/Nav.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import PhotoLightbox from '../../components/PhotoLightbox.jsx'
import { PhotographyGalleryTriptych } from '../../components/PhotographyGallery.jsx'
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
]

function photographyPhotoSource(photo) {
  return `${ASSET_ROOT}/${photo.src}`
}

function Photo({ photo, index, onOpen, className = '', imageClassName = '' }) {
  return (
    <button
      type="button"
      className={`group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left shadow-[12px_14px_10px_rgba(0,0,0,0.24)] outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[16px_22px_18px_rgba(0,0,0,0.34)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] motion-reduce:transition-none ${className}`}
      aria-label={`Open ${photo.alt}`}
      aria-haspopup="dialog"
      onClick={(event) => onOpen(index, event)}
    >
      <img
        src={photographyPhotoSource(photo)}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={`block w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.035] group-hover:brightness-110 group-focus-visible:scale-[1.035] motion-reduce:transition-none ${imageClassName || 'h-auto'}`}
      />
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 group-focus-visible:bg-black/10 motion-reduce:transition-none" aria-hidden="true" />
      <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white opacity-0 shadow-lg backdrop-blur-md transition-[opacity,transform,background-color] duration-300 group-hover:translate-y-0 group-hover:bg-black/55 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none" aria-hidden="true">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H3v5" />
          <path d="M16 3h5v5" />
          <path d="M8 21H3v-5" />
          <path d="M16 21h5v-5" />
        </svg>
      </span>
    </button>
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
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const lastTriggerRef = useRef(null)

  const openLightbox = useCallback((index, event) => {
    lastTriggerRef.current = event.currentTarget
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }, [])

  const showPreviousPhoto = useCallback(() => {
    setLightboxIndex((current) => (current - 1 + PHOTOS.length) % PHOTOS.length)
  }, [])

  const showNextPhoto = useCallback(() => {
    setLightboxIndex((current) => (current + 1) % PHOTOS.length)
  }, [])

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
            <PhotographyGalleryTriptych
              photos={PHOTOS}
              onOpen={openLightbox}
              getPhotoSrc={photographyPhotoSource}
              logoSrc={`${ASSET_ROOT}/jo-malone-logo.webp`}
              logoAlt="Jo Malone London"
              logoClassName="brightness-0 invert"
              heading="Product Photography"
              name="Wood Sage & Sea Salt"
              description="Exploring product storytelling through light, texture, and composition."
            />
          </article>

          <article
            className={`absolute inset-x-0 top-[52.29vw] flex flex-col items-center max-[900px]:relative max-[900px]:top-auto ${REVEAL}`}
            data-reveal
          >
            <div className="grid w-[58.8%] grid-cols-2 gap-[1.41vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
              <Photo photo={PHOTOS[3]} index={3} onOpen={openLightbox} />
              <Photo photo={PHOTOS[4]} index={4} onOpen={openLightbox} />
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
              <Photo photo={PHOTOS[5]} index={5} onOpen={openLightbox} />
              <Photo photo={PHOTOS[6]} index={6} onOpen={openLightbox} />
              <div className="grid grid-rows-2 gap-[0.6vw] max-[900px]:col-span-2 max-[900px]:grid-cols-2 max-[900px]:grid-rows-1 max-[900px]:gap-4">
                <Photo photo={PHOTOS[7]} index={7} onOpen={openLightbox} className="h-full" imageClassName="h-full" />
                <Photo photo={PHOTOS[8]} index={8} onOpen={openLightbox} className="h-full" imageClassName="h-full" />
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

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={PHOTOS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrevious={showPreviousPhoto}
          onNext={showNextPhoto}
          getPhotoSrc={photographyPhotoSource}
          titleId="photography-lightbox-title"
        />
      )}
    </div>
  )
}
