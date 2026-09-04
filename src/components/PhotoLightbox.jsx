import { useEffect, useRef } from 'react'

function DirectionIcon({ direction }) {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  )
}

export default function PhotoLightbox({
  photos,
  index,
  onClose,
  onPrevious,
  onNext,
  getPhotoSrc,
  titleId = 'photo-lightbox-title',
}) {
  const photo = photos[index]
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const touchStartX = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

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
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNext, onPrevious])

  useEffect(() => {
    const previousIndex = (index - 1 + photos.length) % photos.length
    const nextIndex = (index + 1) % photos.length
    ;[previousIndex, nextIndex].forEach((photoIndex) => {
      const image = new Image()
      image.src = getPhotoSrc(photos[photoIndex], photoIndex)
    })
  }, [getPhotoSrc, index, photos])

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

  const source = getPhotoSrc(photo, index)

  return (
    <div
      className="photo-lightbox-backdrop fixed inset-0 z-[300] flex touch-pan-y items-center justify-center bg-black/90 px-16 py-20 backdrop-blur-xl max-[600px]:px-12 max-[600px]:py-24"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={dialogRef} className="relative flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute right-0 top-0 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none max-[600px]:-right-7 max-[600px]:-top-14"
          aria-label="Close photo viewer"
          onClick={onClose}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <button
          type="button"
          className="absolute left-0 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none max-[600px]:-left-9 max-[600px]:h-11 max-[600px]:w-11"
          aria-label="Previous photograph"
          onClick={onPrevious}
        >
          <DirectionIcon direction="left" />
        </button>

        <figure className="m-0 flex max-h-full max-w-full flex-col items-center justify-center">
          <img
            key={`${index}-${source}`}
            src={source}
            alt={photo.alt}
            decoding="async"
            fetchPriority="high"
            draggable="false"
            className="photo-lightbox-image max-h-[76dvh] max-w-[84vw] object-contain shadow-[0_28px_80px_rgba(0,0,0,0.6)] max-[600px]:max-h-[68dvh] max-[600px]:max-w-[76vw]"
          />
          <figcaption className="mt-6 text-center" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: photo.accent ?? '#FFFFFF' }}>{photo.category}</p>
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
          <DirectionIcon direction="right" />
        </button>
      </div>
    </div>
  )
}
