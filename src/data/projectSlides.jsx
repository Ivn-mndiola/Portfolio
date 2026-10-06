// Config-driven slide data for the Projects slider.
// Each slide points at image assets under /public/assets/images/<folder>/
// bg: full-bleed background image
// themeColor: solid project color for the browser chrome and overscroll canvas
// caseStudyThemeColor: the case study's own opening background
// Titles are either a graphic (logo/wordmark image) or text (subtitle + main title)

const SLIDES = [
  {
    id: 'danes',
    themeColor: '#DA0442',
    caseStudyThemeColor: '#630521',
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
      { src: '/assets/images/danes/P1.png', alt: 'Henjie', key: 'henjie', mobileOffset: '-20.3%' },
      { src: '/assets/images/danes/P2.png', alt: 'Noah', key: 'noah', mobileOffset: '-5%' },
      { src: '/assets/images/danes/P3.png', alt: 'Sean Dale', key: 'sean-dale', mobileOffset: '-12.5%' },
      { src: '/assets/images/danes/P4.png', alt: 'Tristan', key: 'tristan', mobileOffset: '6%' },
      { src: '/assets/images/danes/P5.png', alt: 'Vince', key: 'vince', mobileOffset: '0%' },
      { src: '/assets/images/danes/P6.png', alt: 'Iver', key: 'iver', mobileOffset: '-12.3%' },
    ],
  },
  {
    id: 'gamedev',
    themeColor: '#736CB3',
    caseStudyThemeColor: '#141126',
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
    themeColor: '#57B9B1',
    caseStudyThemeColor: '#52C2B3',
    bg: '/assets/images/nia/NIA-BG.jpg',
    mobileArtwork: { src: '/assets/images/nia/NIA-AIRPLANE.svg', alt: 'New Ilocos Airport aircraft', kind: 'cutout', width: 1098, height: 369 },
    mobileBackground: 'radial-gradient(ellipse at 48% 48%, #60c9bf 0%, transparent 46%), linear-gradient(160deg, #57b9b1, #146f67 48%, #031c21 90%)',
    smallIcon: '/assets/images/nia/NIA-SYMBOL.svg',
    titleGraphic: '/assets/images/nia/NIA-MAIN-NAME.svg',
    description: (
      <>
        a modern airport identity emphasizing <strong>clarity</strong>,{' '}
        <strong>movement</strong>, and <strong>regional connection</strong> through a
        structured visual system.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/nia' },
  },
  {
    id: 'source',
    themeColor: '#667FB6',
    caseStudyThemeColor: '#233F91',
    bg: '/assets/images/source/SOURCE-BG.jpg',
    mobileArtwork: { src: '/assets/images/source/SOURCE-BG.jpg', alt: 'Source team outside the store', kind: 'scene', width: 1920, height: 905 },
    mobileBackground: 'linear-gradient(160deg, #667fb6, #203b78 46%, #030b20 86%)',
    titleGraphic: '/assets/images/source/SOURCE-PROJ.png',
    description: (
      <>
        a Baguio City hub for premium PC parts and peripherals offering{' '}
        <strong>high-performance components, expert advice, and affordable builds</strong>{' '}
        to help you elevate your game from the Cordilleras.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/source' },
  },
  {
    id: 'artlantis',
    themeColor: '#02C6F2',
    caseStudyThemeColor: '#02C6F2',
    bg: '/assets/images/artlantis/ARTLANTIS-BG.jpg',
    titleGraphic: '/assets/images/artlantis/ARTLANTIS-PROJ.png',
    description: (
      <>
        a conceptual character duo featuring <strong>Chanty a cutesy pencil fish</strong>,
        and <strong>Sharky a sleek sharpener</strong> inspired companion that embodies
        contrast through playful charm and sharp design.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/artlantis' },
  },
  {
    id: 'illustration',
    themeColor: '#EDB113',
    caseStudyThemeColor: '#F6AD13',
    bg: '/assets/images/illustration/ILLUSTRATION-BG.jpg',
    titleText: { subtitle: 'DIGITAL ART', title: 'ILLUSTRATIONS' },
    description: (
      <>
        a collection of digital illustrations exploring expressive{' '}
        <strong>visuals</strong>, <strong>storytelling</strong>, and{' '}
        <strong>creative concepts</strong> through bold and detailed artwork.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/illustration' },
    visualRight: {
      src: '/assets/images/illustration/illustration-proj.png',
      alt: 'Panagbenga Festival Artwork',
    },
  },
  {
    id: 'photography',
    themeColor: '#ABC400',
    caseStudyThemeColor: '#262626',
    bg: '/assets/images/photography/PHOTOGRAPHY-BG.jpg',
    titleText: { subtitle: 'SONY ZV-E10', title: 'PHOTOGRAPHY' },
    description: (
      <>
        a photography series capturing real world <strong>moments</strong>,{' '}
        <strong>moods</strong>, and <strong>compositions</strong> through a creative
        and cinematic perspective.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/photography' },
    visualRight: {
      src: '/assets/images/photography/Photography.png',
      alt: 'Photography Portrait',
      wrapClass: true,
    },
  },
  {
    id: 'dbfortri',
    themeColor: '#737373',
    caseStudyThemeColor: '#A2A2A2',
    bg: '/assets/images/dbfortri/dbfortri-project-bg-1920.webp',
    bgSet: {
      oneX: '/assets/images/dbfortri/dbfortri-project-bg-1920.webp',
      twoX: '/assets/images/dbfortri/dbfortri-project-bg-3840.webp',
    },
    bgOverlay: 'linear-gradient(180deg, rgba(30,30,30,0.26) 0%, rgba(30,30,30,0.6) 68%, rgba(18,18,18,0.82) 100%)',
    titleGraphic: '/assets/images/dbfortri/dbfortri-wordmark-vector.svg',
    titleTagline: 'FORMED TO BE TIMELESS.',
    description: (
      <>
        A timeless photography brand dedicated to <strong>capturing authentic stories</strong>{' '}
        through intentional <strong>imagery and refined visual identity</strong>.
      </>
    ),
    cta: { label: 'VIEW NOW', href: '/projects/dbfortri' },
  },
]

export default SLIDES
