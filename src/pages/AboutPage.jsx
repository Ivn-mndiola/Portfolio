import InteriorPage from '../components/InteriorPage.jsx'
import AboutProfile from '../components/AboutProfile.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import './AboutPage.css'

export default function AboutPage() {
  useScrollReveal([], '0px')

  return (
    <InteriorPage active="/about" title="About" fixedBackground>
      <main id="page-content" className="about-layout">
        <picture className="about-portrait about-reveal" data-reveal>
          <img src="/assets/images/interior/About.png" alt="Iverson Mendiola, creative designer" width="6527" height="7551" fetchPriority="high" />
        </picture>
        <div className="about-scroll-content">
          <AboutProfile />
        </div>
      </main>
    </InteriorPage>
  )
}
