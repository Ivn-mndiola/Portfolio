import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'SERVICES', to: '/services' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
]

// Pass `darkSectionSelectors` on case-study pages that have dark-background
// sections (hero, mockups, socials, etc.). The optional `accent` controls the
// navbar color used over lighter sections.
export default function Nav({ active = '/', darkSectionSelectors = null, accent = 'red' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // Starts true (not-red) since every page using darkSectionSelectors always
  // opens scrolled to the top, over its dark hero section. Prevents a red
  // flash on first paint before the scroll-position effect below can run.
  const [isOverDark, setIsOverDark] = useState(true)
  const navigate = useNavigate()
  const navRef = useRef(null)

  // Close menu on Escape key
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // Scroll-tint: only runs when a page opts in via darkSectionSelectors.
  // State resets naturally on unmount — no manual DOM cleanup needed.
  useEffect(() => {
    if (!darkSectionSelectors || darkSectionSelectors.length === 0) return

    function onScroll() {
      const nav = navRef.current
      if (!nav) return

      const sections = darkSectionSelectors
        .flatMap((sel) => Array.from(document.querySelectorAll(sel)))
        .filter(Boolean)

      const navRect = nav.getBoundingClientRect()
      const navCenter = navRect.top + navRect.height / 2

      let overDark = false
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (navCenter >= rect.top && navCenter <= rect.bottom) {
          overDark = true
        }
      })

      setIsOverDark(overDark)
    }

    document.addEventListener('scroll', onScroll)
    onScroll()

    return () => document.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkSectionSelectors])

  function handleNavClick(e, to) {
    e.preventDefault()
    setMenuOpen(false)
    navigate(to)
  }

  const showAccent = Boolean(darkSectionSelectors) && !isOverDark
  const accentStyles = accent === 'charcoal'
    ? {
        glass: 'bg-[rgba(30,30,30,0.06)] border-[rgba(30,30,30,0.18)]',
        link: 'text-[#545353]/75 hover:text-[#1E1E1E]',
        active: 'text-[#1E1E1E]',
        logo: 'brightness-0',
      }
    : accent === 'teal'
    ? {
        glass: 'bg-[rgba(72,193,176,0.05)] border-[rgba(72,193,176,0.18)]',
        link: 'text-[#48C1B0]/70 hover:text-[#48C1B0]',
        active: 'text-[#48C1B0]',
        logo: '[filter:brightness(0)_saturate(100%)_invert(68%)_sepia(27%)_saturate(1054%)_hue-rotate(120deg)_brightness(97%)_contrast(85%)]',
      }
    : accent === 'blue'
      ? {
          glass: 'bg-[rgba(36,67,148,0.05)] border-[rgba(36,67,148,0.18)]',
          link: 'text-[#244394]/70 hover:text-[#244394]',
          active: 'text-[#244394]',
          logo: '[filter:brightness(0)_saturate(100%)_invert(25%)_sepia(35%)_saturate(2798%)_hue-rotate(198deg)_brightness(85%)_contrast(94%)]',
        }
    : accent === 'orange'
      ? {
          glass: 'bg-[rgba(216,90,0,0.05)] border-[rgba(216,90,0,0.18)]',
          link: 'text-[#D85A00]/70 hover:text-[#D85A00]',
          active: 'text-[#D85A00]',
          logo: '[filter:brightness(0)_saturate(100%)_invert(39%)_sepia(93%)_saturate(2356%)_hue-rotate(8deg)_brightness(94%)_contrast(101%)]',
        }
    : {
        glass: 'bg-[rgba(252,4,76,0.05)] border-[rgba(252,4,76,0.15)]',
        link: 'text-[rgba(252,4,76,0.6)] hover:text-[#FC044C]',
        active: 'text-[#FC044C]',
        logo: '[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(91%)_saturate(5796%)_hue-rotate(337deg)_brightness(98%)_contrast(108%)]',
      }
  const glassColor = showAccent
    ? accentStyles.glass
    : 'bg-white/5 border-white/15'
  const linkColor = showAccent
    ? accentStyles.link
    : 'text-white/60 hover:text-white'
  const menuLineColor = menuOpen || !showAccent
    ? 'bg-white'
    : accent === 'charcoal'
      ? 'bg-[#1E1E1E]'
      : accent === 'teal'
      ? 'bg-[#48C1B0]'
      : accent === 'blue'
        ? 'bg-[#244394]'
        : accent === 'orange'
          ? 'bg-[#D85A00]'
        : 'bg-[#FC044C]'

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-8 z-[100] flex h-20 items-center justify-center bg-transparent p-0 font-inter max-[900px]:top-4 max-[900px]:justify-end max-[900px]:pr-4"
    >
      <a
        href="/"
        className={`absolute left-0 flex h-full w-[17vw] min-w-[150px] items-center justify-end rounded-r-[40px] border border-l-0 pr-9 no-underline backdrop-blur-2xl max-md:w-20 max-md:min-w-20 max-md:pr-4 ${glassColor}`}
        aria-label="Iverson logo"
        onClick={(e) => handleNavClick(e, '/')}
      >
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className={`h-[38px] w-auto object-contain ${
            showAccent
              ? accentStyles.logo
              : 'brightness-0 invert'
          }`}
        />
      </a>

      <button
        className={`absolute right-6 z-[200] hidden h-12 w-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border backdrop-blur-2xl transition-colors hover:bg-white/10 max-[900px]:flex ${glassColor}`}
        id="mobile-menu-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`block h-0.5 w-5 rounded-sm transition duration-300 ${menuLineColor} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block h-0.5 w-5 rounded-sm transition duration-300 ${menuLineColor} ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
        <span className={`block h-0.5 w-5 rounded-sm transition duration-300 ${menuLineColor} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      <ul
        className={`flex h-full list-none items-center gap-16 rounded-[40px] border px-[72px] backdrop-blur-2xl max-[900px]:fixed max-[900px]:inset-0 max-[900px]:h-screen max-[900px]:w-screen max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-10 max-[900px]:rounded-none max-[900px]:border-0 max-[900px]:bg-[rgba(3,7,18,0.95)] max-[900px]:px-0 max-[900px]:transition-all max-[900px]:duration-[400ms] ${glassColor} ${
          menuOpen
            ? 'max-[900px]:visible max-[900px]:translate-y-0 max-[900px]:opacity-100'
            : 'max-[900px]:invisible max-[900px]:-translate-y-5 max-[900px]:opacity-0'
        }`}
        id="nav-links"
      >
        {LINKS.map((link) => (
          <li key={link.to}>
            <a
              href={link.to}
              className={`inline-block bg-transparent p-0 text-sm font-normal uppercase tracking-[0.1em] no-underline transition-colors max-[900px]:text-2xl max-[900px]:font-bold max-[900px]:tracking-[0.12em] max-[900px]:text-white/60 max-[900px]:hover:text-white ${
                active === link.to
                  ? showAccent
                    ? `font-extrabold tracking-[0.05em] ${accentStyles.active}`
                    : 'font-extrabold tracking-[0.05em] text-white'
                  : linkColor
              }`}
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
