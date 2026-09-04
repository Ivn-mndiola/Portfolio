import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import DanesPage from './pages/case-studies/DanesPage.jsx'
import GameDev from './pages/case-studies/gamedev.jsx'
import NiaPage from './pages/case-studies/NiaPage.jsx'
import SourcePage from './pages/case-studies/SourcePage.jsx'
import ArtlantisPage from './pages/case-studies/ArtlantisPage.jsx'
import IllustrationPage from './pages/case-studies/IllustrationPage.jsx'
import PhotographyPage from './pages/case-studies/PhotographyPage.jsx'
import DbfortriPage from './pages/case-studies/DbfortriPage.jsx'

export default function App() {
  return (
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
  )
}
