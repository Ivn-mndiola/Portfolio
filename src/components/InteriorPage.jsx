import { useEffect } from 'react'
import Nav from './Nav.jsx'
import './InteriorPage.css'

// Shared only by About, Services, and Contact.
export default function InteriorPage({ active, title, children, fixedBackground = false }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Iverson Mendiola`
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [active, title])

  return (
    <div className="interior-page relative isolate min-h-screen overflow-x-clip bg-[#061735] font-questrial text-[#FDFDFD]">
      <picture className={`pointer-events-none inset-0 -z-10 select-none ${fixedBackground ? 'fixed' : 'absolute'}`} aria-hidden="true">
        <img src="/assets/optimized/interior/background-960.webp" srcSet="/assets/optimized/interior/background-960.webp 960w, /assets/optimized/interior/background-1920.webp 1920w, /assets/optimized/interior/background-3200.webp 3200w" sizes="100vw" alt="" fetchPriority="high" className={`h-full w-full ${fixedBackground ? 'object-cover' : 'object-fill'}`} />
      </picture>
      <a href="#page-content" className="sr-only fixed left-4 top-4 z-[300] rounded-lg bg-white p-3 text-[#071030] focus:not-sr-only">Skip to content</a>
      <Nav active={active} />
      {children}
    </div>
  )
}
