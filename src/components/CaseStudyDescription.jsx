import './CaseStudyDescription.css'

// Universal description typography for project summaries and case studies.
// Keep placement, colors, and reveal effects with each case-study page.
export default function CaseStudyDescription({ className = '', children, ...props }) {
  return (
    <p
      {...props}
      className={`case-study-description ${className}`}
    >
      {children}
    </p>
  )
}
