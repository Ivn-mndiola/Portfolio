import { Link } from 'react-router-dom'
import InteriorPage from '../components/InteriorPage.jsx'

const SERVICES = [
  ['Branding & Visual Identity', 'Creating cohesive brand systems that communicate your business’s personality, values, and vision through strategic visual elements, ensuring consistency across all touchpoints.'],
  ['Logo Design', 'Designing distinctive and memorable logos that capture the essence of your brand and establish a strong visual foundation for your business.'],
  ['Graphic Design', 'Developing creative visual solutions for both digital and print media, combining aesthetics and functionality to effectively communicate your message.'],
  ['Illustration', 'Crafting custom illustrations that add personality, storytelling, and uniqueness to brands, marketing materials, and creative projects.'],
  ['Marketing Design', 'Designing engaging promotional content for social media, advertising, campaigns, and other marketing channels to help brands connect with their audience and drive results.'],
  ['Layout Design', 'Organizing content with clarity and visual balance for publications, presentations, brochures, catalogs, and other multi-page or information-rich materials.'],
  ['Photography', 'Capturing high-quality images that showcase products, people, events, and brand stories with a focus on visual impact and authenticity.'],
  ['Print & Publication Design', 'Designing brochures, flyers, menus, business cards, posters, packaging, and other printed materials.'],
  ['UI Design', 'Creates the visual and interactive elements of websites, apps, and software.', '(User Interface)'],
]

export default function ServicesPage() {
  return (
    <InteriorPage active="/services" title="Services">
      <main id="page-content" className="mx-auto max-w-[1920px] pb-[min(4.8vw,92px)] pt-[min(11.25vw,216px)] max-[1000px]:px-6 max-[1000px]:pb-20 max-[1000px]:pt-40">
        <h1 className="interior-enter mb-[min(4.17vw,80px)] text-center text-[clamp(58px,6.15vw,118px)] font-normal leading-none tracking-[-0.065em] max-[1000px]:mb-14">What I Do</h1>
        <ol aria-label="Creative services" className="mx-auto flex w-[50%] flex-col gap-[min(1.35vw,26px)] max-[1000px]:w-full max-[1000px]:max-w-[640px] max-[1000px]:gap-5">
          {SERVICES.map(([name, description, subtitle], index) => (
            <li key={name}>
              <Link to={`/contact?service=${encodeURIComponent(name)}`} aria-label={`Enquire about ${name}`} className="group flex min-h-[min(6.04vw,116px)] overflow-hidden rounded-full border border-white/25 bg-white/15 text-inherit no-underline backdrop-blur-[10px] transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-[0_16px_32px_rgba(0,15,55,0.25)] focus-visible:border-white motion-reduce:transform-none motion-reduce:transition-none max-[1000px]:min-h-[116px] max-[540px]:rounded-[28px]">
                <div aria-hidden="true" className="flex w-[24%] shrink-0 items-center justify-center gap-[min(1.04vw,20px)] bg-white/5 px-4 max-[540px]:w-[23%] max-[540px]:flex-col max-[540px]:gap-0 max-[540px]:px-2">
                  <img src="/assets/images/interior/service-star.webp" alt="" width="90" height="128" className="h-[min(2.71vw,52px)] w-[min(1.88vw,36px)] object-contain max-[1000px]:h-11 max-[1000px]:w-8 max-[540px]:h-7 max-[540px]:w-5" />
                  <span className="service-number text-[clamp(50px,4.17vw,80px)] leading-none tracking-[-0.04em] max-[540px]:text-[40px]">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center bg-[#343f72]/85 px-6 py-3.5 text-center transition-colors group-hover:bg-[#343f72]/65 max-[540px]:px-4 max-[540px]:py-5">
                  <h2 className="text-[clamp(22px,1.56vw,30px)] font-semibold leading-[1.1] tracking-[-0.035em] max-[540px]:text-[22px]">{name}</h2>
                  {subtitle && <p className="mt-0.5 text-[clamp(12px,0.77vw,14.8px)] leading-tight">{subtitle}</p>}
                  <p className="mt-1 max-w-[390px] text-[clamp(12px,0.77vw,14.8px)] leading-[1.15] max-[540px]:mt-2 max-[540px]:text-[13px] max-[540px]:leading-snug">{description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </InteriorPage>
  )
}
