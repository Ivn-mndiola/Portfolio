// Config-driven slide data for the Projects slider.
// Each slide points at image assets under /public/assets/images/<folder>/
// bg: full-bleed background image
// Titles are either a graphic (logo/wordmark image) or text (subtitle + main title)

const SLIDES = [
  {
    id: 'danes',
    bg: '/assets/images/danes/ds-background.jpg',
    titleGraphic: '/assets/images/danes/DANES-PROJECT-LOGO.png',
    description: (
      <>
        a modern competitive gaming organization built on <strong>discipline</strong>,{' '}
        <strong>precision</strong>, and <strong>fearless execution</strong>.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/danes' },
    roster: [
      { src: '/assets/images/danes/P1.png', alt: 'Henjie', key: 'henjie' },
      { src: '/assets/images/danes/P2.png', alt: 'Noah', key: 'noah' },
      { src: '/assets/images/danes/P3.png', alt: 'Sean Dale', key: 'sean-dale' },
      { src: '/assets/images/danes/P4.png', alt: 'Tristan', key: 'tristan' },
      { src: '/assets/images/danes/P5.png', alt: 'Vince', key: 'vince' },
      { src: '/assets/images/danes/P6.png', alt: 'Iver', key: 'iver' },
    ],
  },
  {
    id: 'gamedev',
    bg: '/assets/images/gamedev/GAME-DEV-BG.jpg',
    smallIcon: '/assets/images/gamedev/game-dev-icon.png',
    titleGraphic: '/assets/images/gamedev/GAME-DEV-PROJECT.png',
    description: (
      <>
        a project that empowers aspiring game developers in Baguio City with{' '}
        <strong>accessible, engaging insights</strong> into the Philippine game
        development industry.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/gamedev' },
  },
  {
    id: 'nia',
    bg: '/assets/images/nia/NIA-BG.jpg',
    smallIcon: '/assets/images/nia/nia-icon.png',
    titleGraphic: '/assets/images/nia/NIA-PROJECT-NAME.png',
    description:
      'empowering regional agricultural infrastructure through robust development and sustainable water management systems.',
    cta: { label: 'VIEW NOW', href: '/projects/nia' },
  },
  {
    id: 'source',
    bg: '/assets/images/source/SOURCE-BG.jpg',
    titleGraphic: '/assets/images/source/SOURCE-PROJ.png',
    description:
      'a Baguio City-based destination for premium PC components, gaming peripherals, and expert hardware support.',
    cta: { label: 'VIEW NOW', href: '/projects/source' },
  },
  {
    id: 'artlantis',
    bg: '/assets/images/artlantis/ARTLANTIS-BG.jpg',
    titleGraphic: '/assets/images/artlantis/ARTLANTIS-PROJ.png',
    description:
      'an immersive creative exploration pushing the boundaries of modern visual storytelling and conceptual artistry.',
    cta: { label: 'VIEW NOW', href: '/projects/artlantis' },
  },
  {
    id: 'illustration',
    bg: '/assets/images/illustration/ILLUSTRATION-BG.jpg',
    titleText: { subtitle: 'DIGITAL ART', title: 'ILLUSTRATIONS' },
    description:
      'a curated showcase of bespoke digital vector artworks, character designs, and dynamic environmental pieces.',
    cta: { label: 'VIEW NOW', href: '/projects/illustration' },
    visualRight: {
      src: '/assets/images/illustration/illustration-proj.png',
      alt: 'Panagbenga Festival Artwork',
    },
  },
  {
    id: 'photography',
    bg: '/assets/images/photography/PHOTOGRAPHY-BG.jpg',
    titleText: { subtitle: 'SONY ZV-E10', title: 'PHOTOGRAPHY' },
    description:
      'capturing raw, authentic human moments and dramatic urban landscapes through a precise, cinematic lens.',
    cta: { label: 'VIEW NOW', href: '/projects/photography' },
    visualRight: {
      src: '/assets/images/photography/Photography.png',
      alt: 'Photography Portrait',
      wrapClass: true,
    },
  },
  {
    id: 'dbfortri',
    bg: '/assets/images/dbfortri/dbfortri-project-bg-1920.webp',
    bgSet: {
      oneX: '/assets/images/dbfortri/dbfortri-project-bg-1920.webp',
      twoX: '/assets/images/dbfortri/dbfortri-project-bg-3840.webp',
    },
    titleGraphic: '/assets/images/dbfortri/dbfortri-project-wordmark-2x.png',
    description:
      'a timeless photography brand dedicated to capturing authentic stories through intentional imagery and refined visual identity.',
    cta: { label: 'VIEW NOW', href: '/projects/dbfortri' },
  },
]

export default SLIDES
