import './CaseStudyDescription.css'

// Opening summaries use Urbanist; body paragraphs use the project's own font.
// Titles, labels and specimens must not use this paragraph component.
export default function CaseStudyDescription({ variant = 'body', className = '', children, ...props }) {
  return (
    <p
      {...props}
      className={`case-study-description${variant === 'intro' ? ' case-study-description--intro' : ''} ${className}`}
    >
      {children}
    </p>
  )
}
