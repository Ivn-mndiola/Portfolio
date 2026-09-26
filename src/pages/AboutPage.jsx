import InteriorPage from '../components/InteriorPage.jsx'
import AboutProfile from '../components/AboutProfile.jsx'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <InteriorPage active="/about" title="About" fixedBackground>
      <main id="page-content" className="about-layout">
        <picture className="about-portrait">
          <img src="/assets/images/interior/portrait-1800.webp" srcSet="/assets/images/interior/portrait-900.webp 900w, /assets/images/interior/portrait-1800.webp 1800w, /assets/images/interior/portrait-2400.webp 2400w" sizes="(max-width: 1000px) min(64vw, 300px), (min-width: 1920px) 700px, 36.5vw" alt="Iverson Mendiola, creative designer" width="3351" height="4080" fetchPriority="high" />
        </picture>
        <div className="about-scroll-content">
          <AboutProfile />
        </div>
      </main>
    </InteriorPage>
  )
}
