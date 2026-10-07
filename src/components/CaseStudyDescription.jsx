import './CaseStudyDescription.css'

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
