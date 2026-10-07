import InteriorPage from '../components/InteriorPage.jsx'
import AboutProfile from '../components/AboutProfile.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import './AboutPage.css'

export default function AboutPage() {
  useScrollReveal()

  return (
    <InteriorPage active="/about" title="About" fixedBackground>
      <main id="page-content" className="about-layout">
        <picture className="about-portrait about-reveal" data-reveal>
          <img src="/assets/images/interior/portrait-1800.webp" srcSet="/assets/images/interior/portrait-900.webp 900w, /assets/images/interior/portrait-1800.webp 1800w, /assets/images/interior/portrait-2400.webp 2400w" sizes="(min-width: 768px) and (max-width: 1024px) min(34vw, 340px), (max-width: 1000px) min(64vw, 300px), (min-width: 1920px) 700px, 36.5vw" alt="Iverson Mendiola, creative designer" width="3351" height="4080" fetchPriority="high" />
        </picture>
        <div className="about-scroll-content">
          <AboutProfile />
        </div>
      </main>
    </InteriorPage>
  )
}
