import { pageScrollToTop } from './components/DesktopCanvas.jsx'
import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useBrowserTheme from './hooks/useBrowserTheme.js'
import SLIDES from './data/projectSlides.jsx'
import HomePage from './pages/HomePage.jsx'
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const DanesPage = lazy(() => import('./pages/case-studies/DanesPage.jsx'))
const GameDev = lazy(() => import('./pages/case-studies/gamedev.jsx'))
const NiaPage = lazy(() => import('./pages/case-studies/NiaPage.jsx'))
const SourcePage = lazy(() => import('./pages/case-studies/SourcePage.jsx'))
const ArtlantisPage = lazy(() => import('./pages/case-studies/ArtlantisPage.jsx'))
const IllustrationPage = lazy(() => import('./pages/case-studies/IllustrationPage.jsx'))
const PhotographyPage = lazy(() => import('./pages/case-studies/PhotographyPage.jsx'))
const DbfortriPage = lazy(() => import('./pages/case-studies/DbfortriPage.jsx'))

export default function App() {
  const pathname = useLocation().pathname.replace(/\/+$/, '') || '/'
  useEffect(() => { pageScrollToTop() }, [pathname])
  const project = SLIDES.find((slide) => slide.cta.href === pathname)
  const isInteriorPage = ['/services', '/about', '/contact'].includes(pathname)
  // The carousel supplies its live slide color; other routes supply their own.
  useBrowserTheme(pathname === '/projects'
    ? null
    : project?.caseStudyThemeColor ?? (isInteriorPage ? '#061735' : '#071030'))

  return (
    <Suspense fallback={<main className="grid min-h-svh place-items-center bg-[#071030] font-inter text-white" aria-live="polite" aria-busy="true"><p>Loading…</p></main>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/danes" element={<DanesPage />} />
      <Route path="/projects/gamedev" element={<GameDev />} />
      <Route path="/projects/nia" element={<NiaPage />} />
      <Route path="/projects/source" element={<SourcePage />} />
      <Route path="/projects/artlantis" element={<ArtlantisPage />} />
      <Route path="/projects/illustration" element={<IllustrationPage />} />
      <Route path="/projects/photography" element={<PhotographyPage />} />
      <Route path="/projects/dbfortri" element={<DbfortriPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </Suspense>
  )
}
