function MetaList({ title, items }) {
  return (
    <div className="[&_h4]:mb-[18px] [&_h4]:text-xs [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-[0.15em] [&_li]:mb-3 [&_li]:text-[13px] [&_li]:leading-normal [&_li]:text-white/90">
      <h4>{title}</h4>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function CaseStudyMeta({
  projectLine1,
  projectLine2,
  scope,
  programs,
  contactName = 'Iverson Mendiola',
  contactRole = 'Graphic Designer',
  contactEmail = 'IVM.CREATIVES@GMAIL.COM',
  fontClassName = 'font-inter',
  className = '',
  dataReveal = false,
}) {
  return (
    <div
      className={`grid w-full grid-cols-[1fr_220px_220px_250px] gap-[30px] border-t border-white/40 pt-[35px] text-left max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 ${fontClassName} ${className}`}
      data-reveal={dataReveal ? '' : undefined}
    >
      <div className="flex items-center gap-10 max-[900px]:col-span-2 max-[900px]:border-b max-[900px]:border-white/20 max-[900px]:pb-5 max-[600px]:col-span-1">
        <img
          src="/assets/images/logo.png"
          alt="Iverson Logo"
          className="h-[45px] w-auto brightness-0 invert"
        />
        <p className="m-0 text-[13px] uppercase leading-normal tracking-[0.05em] text-white/95">
          {projectLine1}
          <br />
          {projectLine2}
        </p>
      </div>

      <MetaList title="Project Scope" items={scope} />
      <MetaList title="Programs" items={programs} />

      <div className="[&_h4]:mb-[18px] [&_h4]:text-xs [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-[0.15em] [&_p]:mb-3 [&_p]:text-[13px] [&_p]:leading-normal [&_p]:text-white/90 [&_strong]:font-bold [&_strong]:text-white">
        <h4>Contact</h4>
        <p>
          <strong>{contactName}</strong>
          <br />
          {contactRole}
        </p>
        <p className="mt-2">{contactEmail}</p>
      </div>
    </div>
  )
}
