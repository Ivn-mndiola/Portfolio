import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Both case studies use the same click, navigation, and focus behavior.
export function usePhotoViewer(photoCount) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const lastTriggerRef = useRef(null)

  const open = useCallback((photoIndex, event) => {
    lastTriggerRef.current = event.currentTarget
    setIndex(photoIndex)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus({ preventScroll: true }))
  }, [])

  const previous = useCallback(() => {
    setIndex((current) => (current - 1 + photoCount) % photoCount)
  }, [photoCount])

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % photoCount)
  }, [photoCount])

  return { index, isOpen, open, close, previous, next }
}

export function Photo({ photo, index, onOpen, className = '', imageClassName = '' }) {
  return (
    <button
      type="button"
      className={`group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left shadow-[12px_14px_10px_rgba(0,0,0,0.24)] outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[16px_22px_18px_rgba(0,0,0,0.34)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] motion-reduce:transition-none ${className}`}
      aria-label={`Open ${photo.alt}`}
      aria-haspopup="dialog"
      onClick={(event) => onOpen(index, event)}
    >
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={photo.sizes}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={`block w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.035] group-hover:brightness-110 group-focus-visible:scale-[1.035] motion-reduce:transition-none ${imageClassName || 'h-auto'}`}
      />
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 group-focus-visible:bg-black/10 motion-reduce:transition-none" aria-hidden="true" />
      <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white opacity-0 shadow-lg backdrop-blur-md transition-[opacity,transform,background-color] duration-300 group-hover:translate-y-0 group-hover:bg-black/55 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none" aria-hidden="true">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H3v5" />
          <path d="M16 3h5v5" />
          <path d="M8 21H3v-5" />
          <path d="M16 21h5v-5" />
        </svg>
      </span>
    </button>
  )
}

export function Lightbox({ photos, index, onClose, onPrevious, onNext }) {
  const photo = photos[index]
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const touchStartX = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus({ preventScroll: true })

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
        return
      }

      if (event.key === 'Tab') {
        const controls = Array.from(dialogRef.current?.querySelectorAll('button:not([disabled])') ?? [])
        if (!controls.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.documentElement.style.overflow = previousRootOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNext, onPrevious])

  useEffect(() => {
    const previousIndex = (index - 1 + photos.length) % photos.length
    const nextIndex = (index + 1) % photos.length
    ;[previousIndex, nextIndex].forEach((photoIndex) => {
      const image = new Image()
      image.src = photos[photoIndex].fullSrc || photos[photoIndex].src
    })
  }, [index, photos])

  function handleTouchStart(event) {
    touchStartX.current = event.changedTouches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(distance) < 55) return
    if (distance > 0) onPrevious()
    else onNext()
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  // Mount outside the page's scroll-reveal transforms so fixed positioning
  // covers the viewport, including navigation, at any page scroll position.
  return createPortal(
    <div
      className="fixed inset-0 z-[300] isolate flex touch-pan-y overscroll-contain font-questrial text-white items-center justify-center bg-black px-16 py-20 max-[600px]:px-12 max-[600px]:py-24"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={dialogRef} className="relative flex h-full w-full items-center justify-center" onClick={handleBackdropClick}>
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute right-0 top-0 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none max-[600px]:-right-7 max-[600px]:-top-14"
          aria-label="Close photo viewer"
          onClick={onClose}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <button
          type="button"
          className="absolute left-0 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none max-[600px]:-left-9 max-[600px]:h-11 max-[600px]:w-11"
          aria-label="Previous photograph"
          onClick={onPrevious}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <figure className="m-0 flex max-h-full max-w-full flex-col items-center justify-center">
          <img
            key={photo.fullSrc || photo.src}
            src={photo.fullSrc || photo.src}
            alt={photo.alt}
            decoding="async"
            className="max-h-[76dvh] max-w-[84vw] object-contain shadow-[0_28px_80px_rgba(0,0,0,0.6)] max-[600px]:max-h-[68dvh] max-[600px]:max-w-[76vw]"
          />
          <figcaption className="mt-6 text-center" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: photo.accent }}>{photo.category}</p>
            <h2 id={titleId} className="mt-2 text-base font-semibold text-white">{photo.title}</h2>
            <p className="mt-2 text-xs tracking-[0.14em] text-white/55">
              {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </p>
          </figcaption>
        </figure>

        <button
          type="button"
          className="absolute right-0 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none max-[600px]:-right-9 max-[600px]:h-11 max-[600px]:w-11"
          aria-label="Next photograph"
          onClick={onNext}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>,
    document.body,
  )
}

export function Caption({ heading, name, children, color = '#FFFFFF' }) {
  return (
    <div className="mt-[2.5vw] text-center max-[900px]:mt-8" style={{ color }}>
      <h2 className="text-[clamp(12px,0.68vw,13px)] font-semibold uppercase tracking-[0.32em] max-[900px]:text-sm">
        {heading}
      </h2>
      <h3 className="mt-[1.65vw] text-[clamp(13px,0.78vw,15px)] font-semibold leading-none max-[900px]:mt-6 max-[900px]:text-base">
        {name}
      </h3>
      <p className="mx-auto mt-1 max-w-[720px] text-[clamp(11px,0.67vw,13px)] leading-[1.35] max-[900px]:mt-2 max-[900px]:max-w-xl max-[900px]:text-sm">
        {children}
      </p>
    </div>
  )
}

// The same three-image layout is used by Photography and DBFortri.
export function PhotoTriptych({ photos, indices, onOpen, cropPreviews = false }) {
  return (
    <div className="grid w-[63.28%] grid-cols-[1fr_2.253fr_1fr] items-stretch gap-[0.84vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
      {indices.map((index, position) => (
        <Photo
          key={position}
          photo={photos[index]}
          index={index}
          onOpen={onOpen}
          className={cropPreviews ? (position === 1 ? 'min-[901px]:aspect-[3/2]' : 'min-[901px]:aspect-[2/3]') : ''}
          imageClassName={cropPreviews ? 'h-auto min-[901px]:absolute min-[901px]:inset-0 min-[901px]:h-full' : ''}
        />
      ))}
    </div>
  )
}
