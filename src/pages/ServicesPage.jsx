import Nav from '../components/Nav.jsx'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#071030] bg-[url('/assets/images/HOME-HERO-BG.jpg')] bg-cover bg-center text-white">
      <Nav active="/services" />
      <section className="flex h-screen flex-col items-center justify-center gap-3 text-center">
        <h1 className="font-oswald text-[clamp(48px,8vw,96px)] font-bold italic uppercase">Services</h1>
        <p className="text-base text-white/60">Content coming soon.</p>
      </section>
    </div>
  )
}
