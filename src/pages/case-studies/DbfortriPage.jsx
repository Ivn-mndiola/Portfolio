import Nav from '../../components/Nav.jsx'
import { Lightbox, Caption, PhotoTriptych, usePhotoViewer } from '../../components/PhotoGallery.jsx'
import CaseStudyMeta from '../../components/CaseStudyMeta.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const ASSET_ROOT = '/assets/images/dbfortri'
const DARK_SECTIONS = ['.dbfortri-hero', '.dbfortri-gallery']
const REVEAL = 'opacity-0 translate-y-10 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity,transform] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100'

const PHOTOS = [
  { id: 1, alt: 'Ashley Yvonne in a red eighteenth-birthday gown, photographed through a close detail of her hands' },
  { id: 2, alt: 'Ashley Yvonne seated outdoors in a red eighteenth-birthday gown' },
  { id: 3, alt: 'Ashley Yvonne smiling on white steps in a red eighteenth-birthday gown' },
  { id: 4, alt: 'Close portrait of Ashley Yvonne wearing a red eighteenth-birthday gown' },
  { id: 5, alt: 'Ashley Yvonne in a blush eighteenth-birthday gown, photographed through a close detail of her hands' },
  { id: 6, alt: 'Ashley Yvonne seated on a wooden bench in a blush eighteenth-birthday gown' },
  { id: 7, alt: 'Ashley Yvonne posing beside a garden swing in a blush eighteenth-birthday gown' },
  { id: 8, alt: 'Full-length garden portrait of Ashley Yvonne in a blush eighteenth-birthday gown' },
].map((photo) => ({
  ...photo,
  src: photoSource(photo, 1600),
  fullSrc: photoSource(photo, 2400),
  srcSet: `${photoSource(photo, 1600)} ${[1, 5].includes(photo.id) ? 1600 : 1066}w, ${photoSource(photo, 2400)} ${[1, 5].includes(photo.id) ? 2400 : 1600}w`,
  sizes: '(max-width: 900px) calc(100vw - 40px), 34vw',
  category: 'Portrait Photography',
  title: 'Ashley Yvonne — Eighteen',
  accent: '#FFFFFF',
}))

const VALUES = [
  { title: 'intentional', copy: 'every image has purpose.' },
  { title: 'timeless', copy: 'images designed to outlive trends.' },
  { title: 'authentic', copy: 'real moments over perfect poses.' },
  { title: 'craftsmanship', copy: 'attention to every detail.' },
]

const COLORS = ['#1E1E1E', '#2D2D2D', '#545353', '#EBEAE8']

function photoSource(photo, size) {
  return `${ASSET_ROOT}/dbfortri-photo-${String(photo.id).padStart(2, '0')}-${size}.webp`
}

function GalleryCarousel() {
  const viewer = usePhotoViewer(PHOTOS.length)
  const previousIndex = (viewer.index - 1 + PHOTOS.length) % PHOTOS.length
  const nextIndex = (viewer.index + 1) % PHOTOS.length

  return (
    <>
      <div className="flex flex-col items-center font-questrial text-white" role="region" aria-label="DBFortri photography gallery">
        <PhotoTriptych
          photos={PHOTOS}
          indices={[previousIndex, viewer.index, nextIndex]}
          onOpen={viewer.open}
          cropPreviews
        />
        <Caption heading="Portrait Photography" name="Ashley Yvonne — Eighteen">
          A timeless portrait series created to preserve an important milestone with intention.
        </Caption>
      </div>

      {viewer.isOpen && (
        <Lightbox
          photos={PHOTOS}
          index={viewer.index}
          onClose={viewer.close}
          onPrevious={viewer.previous}
          onNext={viewer.next}
        />
      )}
    </>
  )
}

function BrandValue({ title, copy }) {
  return (
    <div className="text-center">
      <h3 className="font-jakarta text-[clamp(24px,2.05vw,40px)] font-extrabold leading-none tracking-[-0.045em] text-[#1E1E1E] max-[900px]:text-3xl">
        {title}
      </h3>
      <p className="mt-2 text-[clamp(11px,1.02vw,20px)] leading-tight text-[#2D2D2D] max-[900px]:text-sm">{copy}</p>
    </div>
  )
}

export default function DbfortriPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#EBEAE8] font-inter text-[#2D2D2D]">
      <Nav active="/projects" darkSectionSelectors={DARK_SECTIONS} accent="charcoal" />

      <main className="dbfortri-case-main">
        <header className="dbfortri-hero relative h-[65.68vw] min-h-[760px] overflow-hidden text-white max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-[900px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-36">
          <div className={`absolute left-1/2 top-[21.5%] w-[39.55%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full max-[900px]:max-w-[650px] max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <img src={`${ASSET_ROOT}/dbfortri-wordmark-vector.svg`} alt="DBFortri" className="w-full" />
            <p className="absolute bottom-[6.5%] right-[0.5%] text-[clamp(10px,0.84vw,16px)] font-medium uppercase tracking-[0.01em] text-[#DCDADC] max-[900px]:bottom-[2%] max-[900px]:right-[2%] max-[900px]:text-[10px]">
              Formed to be timeless.
            </p>
          </div>

          <p className={`absolute left-1/2 top-[52.6%] w-[43.86%] -translate-x-1/2 text-center text-[clamp(9px,0.68vw,13px)] leading-[1.35] text-white/90 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-10 max-[900px]:w-full max-[900px]:max-w-2xl max-[900px]:translate-x-0 max-[900px]:text-sm ${REVEAL}`} data-reveal>
            A refined photography brand dedicated to capturing authentic stories through intentional composition, meaningful storytelling, and timeless visual craftsmanship. Inspired by the philosophy <strong className="font-semibold text-white">“Formed to be Timeless,”</strong> every image is thoughtfully created to preserve genuine moments with elegance, emotion, and lasting impact.
          </p>

          <div className="absolute inset-x-0 bottom-[7.5%] max-[900px]:relative max-[900px]:inset-auto max-[900px]:mt-auto max-[900px]:w-full max-[900px]:pt-16">
            <CaseStudyMeta
              className={`mx-auto w-[calc(100%_-_8vw)] max-w-[1560px] max-[900px]:w-full ${REVEAL}`}
              dataReveal
              tone="ivory"
              projectLine1="Visuals and Brand Identity"
              projectLine2="for DBFortri"
              scope={['Logo', 'Brand Identity', 'Socials', 'Layout Design', 'Mockups', 'Photography']}
              programs={['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Lightroom']}
              contactRole="Creative Designer"
            />
          </div>
        </header>

        <section className="dbfortri-paper relative h-[86.25vw] min-h-[820px] text-center max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:px-6 max-[900px]:py-24">
          <div className={`absolute left-1/2 top-[10.15%] w-[24.74%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[475px] max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <img src={`${ASSET_ROOT}/dbfortri-black-wordmark-vector.svg`} alt="DBFortri — Formed to be timeless" className="w-full" loading="lazy" decoding="async" />
          </div>

          <article className={`absolute left-1/2 top-[35.33%] w-[44.38%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-20 max-[900px]:w-full max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <h2 className="font-jakarta text-[clamp(25px,1.74vw,34px)] font-extrabold lowercase tracking-[-0.05em]">about</h2>
            <p className="mx-auto mt-[1.25vw] max-w-[850px] text-[clamp(11px,0.78vw,15px)] leading-[1.35] max-[900px]:mt-5 max-[900px]:text-sm">
              <strong className="font-bold">dbfortri</strong> is a photography service dedicated to creating <strong className="font-bold">timeless imagery</strong> through intentional storytelling.<br className="max-[900px]:hidden" /> Every session is approached with <strong className="font-bold">creativity, authenticity, and precision</strong> to preserve life’s most meaningful moments.
            </p>
          </article>

          <article className={`absolute left-1/2 top-[54.17%] w-[43.91%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-20 max-[900px]:w-full max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <h2 className="font-jakarta text-[clamp(25px,1.74vw,34px)] font-extrabold lowercase tracking-[-0.05em]">our purpose</h2>
            <p className="mx-auto mt-[1.55vw] max-w-[850px] text-[clamp(11px,0.78vw,15px)] leading-[1.45] max-[900px]:mt-5 max-[900px]:text-sm">
              We believe photographs should do more than document a moment,<br className="max-[900px]:hidden" /> they should <strong className="font-bold">preserve emotions, relationships, and memories</strong><br className="max-[900px]:hidden" /> that remain meaningful for years to come.<br /><br />Every frame is <strong className="font-bold">formed with intention</strong> and created to stand the test of time.
            </p>
          </article>

          <article className={`absolute left-1/2 top-[75.6%] w-[42.29%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mt-20 max-[900px]:w-full max-[900px]:translate-x-0 ${REVEAL}`} data-reveal>
            <h2 className="font-jakarta text-[clamp(24px,1.82vw,35px)] font-extrabold uppercase tracking-[-0.04em]">Formed to be timeless.</h2>
            <p className="mx-auto mt-[1.3vw] max-w-[820px] text-[clamp(11px,0.78vw,15px)] leading-[1.45] max-[900px]:mt-5 max-[900px]:text-sm">
              Photography is formed by <strong className="font-bold">light</strong>, shaped by <strong className="font-bold">perspective</strong>, and preserved<br className="max-[900px]:hidden" /> through <strong className="font-bold">craftsmanship</strong>.<br /><br />Our philosophy is simple:<br />create photographs that never feel outdated.
            </p>
          </article>
        </section>

        <section className="dbfortri-paper relative h-[48.02vw] min-h-[620px] max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:px-6 max-[900px]:py-24">
          <div className={`absolute left-1/2 top-[7%] grid w-[64%] -translate-x-1/2 grid-cols-2 gap-x-[16%] gap-y-[4.2vw] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:grid-cols-1 max-[900px]:gap-10 ${REVEAL}`} data-reveal>
            {VALUES.map((value) => <BrandValue key={value.title} {...value} />)}
          </div>

          <div className="absolute left-1/2 top-[48.6%] h-px w-[67.2%] -translate-x-1/2 bg-[#545353]/70 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:my-16 max-[900px]:w-full max-[900px]:translate-x-0" aria-hidden="true" />

          <div className={`absolute left-1/2 top-[58.8%] grid w-[47.8%] -translate-x-1/2 grid-cols-[0.62fr_1.65fr_1fr] items-baseline gap-x-[4.2vw] gap-y-[1.9vw] max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:grid-cols-[0.65fr_1.4fr_1fr] max-[900px]:gap-x-4 max-[900px]:gap-y-7 ${REVEAL}`} data-reveal>
            <span className="font-jakarta text-[clamp(26px,2.5vw,48px)] font-extrabold tracking-[-0.06em]">H1</span>
            <span className="font-jakarta text-[clamp(28px,2.8vw,54px)] font-extrabold tracking-[-0.06em]">Buvera</span>
            <span className="font-jakarta text-[clamp(24px,2.45vw,47px)] font-extrabold tracking-[-0.06em]">72–96 px</span>

            <span className="text-[clamp(14px,1.55vw,30px)]">H2 H3</span>
            <span className="font-jakarta text-[clamp(14px,1.55vw,30px)]">Plus Jakarta Sans</span>
            <span className="text-[clamp(14px,1.55vw,30px)]">40–56 px</span>

            <span className="text-[clamp(12px,1.2vw,23px)]">Body</span>
            <span className="text-[clamp(12px,1.2vw,23px)]">Inter</span>
            <span className="text-[clamp(12px,1.2vw,23px)]">24–32 px</span>
          </div>

          <div className={`absolute bottom-[7.7%] left-1/2 flex w-[48.2%] -translate-x-1/2 gap-[0.35vw] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:mt-16 max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:flex-wrap max-[900px]:justify-center max-[900px]:gap-3 ${REVEAL}`} data-reveal aria-label="DBFortri color palette">
            {COLORS.map((color) => (
              <span
                key={color}
                className={`flex h-[2.55vw] min-h-9 flex-1 items-center justify-center rounded-full px-4 text-[clamp(10px,0.84vw,16px)] shadow-[0_4px_4px_rgba(0,0,0,0.22)] max-[900px]:min-w-[132px] max-[900px]:flex-none ${color === '#EBEAE8' ? 'text-[#1E1E1E]' : 'text-white'}`}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
        </section>

        <section className="relative h-[48.65vw] overflow-hidden bg-[#dedcde] max-[900px]:h-auto">
          <picture className={`absolute inset-0 max-[900px]:hidden ${REVEAL}`} data-reveal>
            <source
              type="image/webp"
              srcSet={`${ASSET_ROOT}/dbfortri-mockups-1920.webp 1920w, ${ASSET_ROOT}/dbfortri-mockups-3840.webp 3840w`}
              sizes="100vw"
            />
            <img src={`${ASSET_ROOT}/dbfortri-mockups-1920.webp`} alt="DBFortri stationery and photography brand mockups" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </picture>

          <div className="hidden gap-0 max-[900px]:grid">
            <img src={`${ASSET_ROOT}/dbfortri-mockup-left.webp`} alt="DBFortri stationery mockup collection" loading="lazy" decoding="async" className="w-full" />
            <img src={`${ASSET_ROOT}/dbfortri-mockup-right.webp`} alt="DBFortri printed identity mockups" loading="lazy" decoding="async" className="w-full" />
          </div>
        </section>

        <section className="dbfortri-paper relative h-[41.61vw] min-h-[540px] overflow-visible max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:px-6 max-[900px]:py-24">
          <article className={`absolute left-[15.8%] top-[11%] w-[39%] text-center max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full ${REVEAL}`} data-reveal>
            <div className="flex items-center justify-center gap-[1.4vw] max-[900px]:flex-col max-[900px]:gap-4">
              <h2 className="font-jakarta text-[clamp(27px,2.3vw,44px)] font-extrabold leading-none tracking-[-0.055em]">The Story Behind</h2>
              <img src={`${ASSET_ROOT}/dbfortri-logo-black-vector.svg`} alt="DBFortri" loading="lazy" decoding="async" className="w-[clamp(150px,12.3vw,236px)]" />
            </div>
            <p className="mx-auto mt-[2.2vw] max-w-[760px] text-[clamp(11px,0.78vw,15px)] leading-[1.35] max-[900px]:mt-7 max-[900px]:text-sm">
              dbfortri was created with a simple belief that meaningful moments<br className="max-[900px]:hidden" /> deserve to be preserved with intention.<br />Every photograph is crafted to remain relevant long after trends have passed,<br className="max-[900px]:hidden" /> becoming a timeless visual memory.
            </p>
            <p className="mt-[5.8vw] text-[clamp(13px,1.25vw,24px)] font-medium uppercase tracking-[0.02em] max-[900px]:mt-12">Formed to be timeless.</p>
          </article>

          <img
            src={`${ASSET_ROOT}/dbfortri-founder-card.webp`}
            alt="Iverson Mendiola, founder, creative director, brand identity designer and photographer"
            loading="lazy"
            decoding="async"
            className={`absolute left-[54.69%] top-[-12.92vw] z-10 w-[28.65%] max-[900px]:hidden ${REVEAL}`}
            data-reveal
          />
          <img
            src={`${ASSET_ROOT}/dbfortri-founder-card-mobile.webp`}
            alt="Iverson Mendiola, founder, creative director, brand identity designer and photographer"
            loading="lazy"
            decoding="async"
            className={`mx-auto mt-14 hidden w-full max-w-[550px] max-[900px]:block ${REVEAL}`}
            data-reveal
          />
        </section>

        <section className="dbfortri-paper relative h-[44.43vw] min-h-[620px] px-0 max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:pb-20">
          <div className="dbfortri-gallery absolute inset-x-0 top-0 bg-[#262626] py-[2vw] max-[900px]:relative max-[900px]:px-5 max-[900px]:py-12">
            <div className={REVEAL} data-reveal>
              <GalleryCarousel />
            </div>
          </div>

          <img
            src={`${ASSET_ROOT}/dbfortri-footer-logo-vector.svg`}
            alt="DBFortri — Formed to be timeless"
            loading="lazy"
            decoding="async"
            className={`absolute left-1/2 top-[76.9%] w-[10.73%] -translate-x-1/2 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-20 max-[900px]:w-[190px] max-[900px]:translate-x-0 ${REVEAL}`}
            data-reveal
          />
        </section>
      </main>
    </div>
  )
}
