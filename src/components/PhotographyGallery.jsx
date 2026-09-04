export function PhotographyGalleryPhoto({ photo, index, onOpen, getPhotoSrc, className = '', imageClassName = '', sizes }) {
  return (
    <button
      type="button"
      className={`group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left shadow-[12px_14px_10px_rgba(0,0,0,0.24)] outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[16px_22px_18px_rgba(0,0,0,0.34)] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] motion-reduce:transition-none ${className}`}
      aria-label={`Open ${photo.alt}`}
      aria-haspopup="dialog"
      onClick={(event) => onOpen(index, event)}
    >
      <img
        src={getPhotoSrc(photo, index)}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        sizes={sizes}
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

export function PhotographyGalleryCaption({ heading, name, children, color = '#FFFFFF' }) {
  return (
    <div className="mt-[2.5vw] text-center max-[900px]:mt-8" style={{ color }}>
      <h2 className="text-[clamp(12px,0.68vw,13px)] font-semibold uppercase tracking-[0.32em] max-[900px]:text-sm">{heading}</h2>
      <h3 className="mt-[1.65vw] text-[clamp(13px,0.78vw,15px)] font-semibold leading-none max-[900px]:mt-6 max-[900px]:text-base">{name}</h3>
      <p className="mx-auto mt-1 max-w-[720px] text-[clamp(11px,0.67vw,13px)] leading-[1.35] max-[900px]:mt-2 max-[900px]:max-w-xl max-[900px]:text-sm">{children}</p>
    </div>
  )
}

export function PhotographyGalleryTriptych({ photos, indexes = [0, 1, 2], onOpen, getPhotoSrc, logoSrc, logoAlt, logoClassName = '', heading, name, description, color = '#FFFFFF' }) {
  return (
    <>
      {logoSrc && <img src={logoSrc} alt={logoAlt} loading="lazy" decoding="async" className={`mb-[1.38vw] h-auto w-[10.7vw] max-[900px]:mb-10 max-[900px]:w-[180px] ${logoClassName}`} />}
      <div className="grid w-[63.28%] grid-cols-[1fr_2.253fr_1fr] items-stretch gap-[0.84vw] max-[900px]:w-full max-[900px]:max-w-[760px] max-[900px]:grid-cols-1 max-[900px]:gap-4">
        {indexes.map((photoIndex) => (
          <PhotographyGalleryPhoto key={photoIndex} photo={photos[photoIndex]} index={photoIndex} onOpen={onOpen} getPhotoSrc={getPhotoSrc} sizes="(max-width: 900px) calc(100vw - 40px), 40vw" />
        ))}
      </div>
      <PhotographyGalleryCaption heading={heading} name={name} color={color}>{description}</PhotographyGalleryCaption>
    </>
  )
}
