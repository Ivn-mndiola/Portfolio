import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Slide from '../components/Slide.jsx'
import SLIDES from '../data/projectSlides.jsx'
import useSlider from '../hooks/useSlider.js'
import useRosterCycle from '../hooks/useRosterCycle.js'

const SELECTED_PROJECT_KEY = 'iverson-portfolio:selected-project'
let lastSelectedProjectId = null

function restoreSelectedProject() {
  let projectId = lastSelectedProjectId
  try {
    projectId = window.sessionStorage.getItem(SELECTED_PROJECT_KEY) || projectId
  } catch {
    // Keep returning to the selected project when browser storage is blocked.
  }

  // Use the stable project ID so reordering slides won't select another project.
  const index = SLIDES.findIndex((slide) => slide.id === projectId)
  return index >= 0 ? index : 0
}

export default function ProjectsPage() {
  const total = SLIDES.length
  const { current, goPrev, goNext } = useSlider(total, restoreSelectedProject)

  useEffect(() => {
    lastSelectedProjectId = SLIDES[current].id
    try {
      window.sessionStorage.setItem(SELECTED_PROJECT_KEY, lastSelectedProjectId)
    } catch {
      // The in-memory selection still survives navigation within this visit.
    }
  }, [current])

  const danesSlideIndex = SLIDES.findIndex((s) => s.id === 'danes')
  const rosterCount = SLIDES[danesSlideIndex]?.roster?.length ?? 0
  const rosterIndex = useRosterCycle(rosterCount, current === danesSlideIndex)

  const pct = ((current + 1) / total) * 100
  const label = String(current + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')

  return (
    <div className="h-screen overflow-hidden bg-[#030712] font-inter text-white">
      <Nav active="/projects" />

      <main className="relative h-screen w-screen">
        {SLIDES.map((slide, i) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={i === current}
            rosterIndex={rosterIndex}
          />
        ))}
      </main>

      <button
        className="absolute left-[3.5vw] top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-2xl transition-all duration-300 hover:scale-[1.06] hover:border-white/50 hover:bg-white/[0.18] motion-reduce:transition-none max-[900px]:left-3"
        aria-label="Previous Project"
        onClick={goPrev}
      >
        <svg className="h-[22px] w-[22px] -translate-x-px transition-transform duration-200 hover:-translate-x-[3px]" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className="absolute right-[3.5vw] top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-2xl transition-all duration-300 hover:scale-[1.06] hover:border-white/50 hover:bg-white/[0.18] motion-reduce:transition-none max-[900px]:right-3"
        aria-label="Next Project"
        onClick={goNext}
      >
        <svg className="h-[22px] w-[22px] translate-x-px transition-transform duration-200 hover:translate-x-[3px]" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-10 left-[8vw] z-10 flex items-center gap-4 max-[900px]:bottom-6 max-[900px]:left-1/2 max-[900px]:-translate-x-1/2">
        <div className="relative h-0.5 w-[140px] overflow-hidden bg-white/15">
          <div className="absolute inset-y-0 left-0 bg-white transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs font-light tracking-[0.1em] text-white/60">{label}/{totalLabel}</span>
      </div>
    </div>
  )
}
