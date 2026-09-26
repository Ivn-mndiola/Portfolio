const SOFTWARE = ['Adobe Fresco', 'Adobe Illustrator', 'Adobe Photoshop', 'CapCut', 'Figma', 'Canva', 'Affinity']

// Live text and the original individual assets, following the supplied Contact reference.
export default function ContactProfile() {
  return (
    <>
      <header className="contact-introduction">
        <h1>Hello,</h1>
        <div className="contact-biography">
          <p className="contact-biography-lead">He is a multidisciplinary designer based in the Philippines, specializing in Logo Design, Branding, Visual Identity, Illustration, and Creative Content. A graduate of the Bachelor of Fine Arts Major in Visual Communication program at the University of the Cordilleras, he approaches design as a balance between clarity, strategy, and visual storytelling.</p>
          <p>His work is rooted in minimalism and intentionality, creating thoughtful visual experiences that help brands communicate with confidence and authenticity.<br />From developing brand identities and marketing materials to crafting illustrations and digital content, he focuses on delivering designs that are both aesthetically refined and purpose-driven.</p>
          <p>Through academic, internship, and independent creative experiences, Iverson continues to explore new ways of combining design, storytelling, and visual communication while embracing collaboration, adaptability, and lifelong learning.</p>
        </div>
      </header>

      <hr className="contact-divider" />

      <div className="contact-history">
        <section aria-labelledby="contact-education-title">
          <h2 id="contact-education-title" className="contact-section-title">EDUCATION</h2>
          <div className="contact-history-row">
            <p>May 2022 - Oct 2025</p>
            <div>
              <h3>UNIVERSITY OF THE CORDILLERAS</h3>
              <p className="contact-address">Governor Pack Road, Baguio City, Philippines, 2600</p>
              <p className="contact-role">Bachelor Of Fine Arts | Major in Visual Communication</p>
              <p className="contact-detail">A study of visual communication focused on key areas including design principles, digital media, production processes, advertising concepts, research methods, and portfolio development.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-experience-title" className="contact-experience">
          <h2 id="contact-experience-title" className="contact-section-title">EXPERIENCE</h2>
          <div className="contact-history-row">
            <p>Jan 2025 - Apr 2025</p>
            <div>
              <h3>CORDILLERA SCHOOL OF DIGITAL ARTS, INC.</h3>
              <p className="contact-address">3rd Level, 237 Avenue By GAV Building, Upper Bonifacio Street, Holy Ghost Proper, Baguio City, Benguet, Philippines</p>
              <p className="contact-role">Assistant Graphic Artist</p>
              <p className="contact-detail">Supported the design team in creating marketing materials, social media graphics, and visual assets while ensuring consistency across brand communications.</p>
            </div>
          </div>
          <div className="contact-history-row contact-freelance">
            <p>Jan 2024 - Present</p>
            <div>
              <h3>FREELANCE ARTIST</h3>
              <p className="contact-detail">Designed brand visuals, layouts, and illustrations for digital and print applications, combining creativity with strategic visual communication.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="contact-tools">
        <section aria-labelledby="contact-software-title">
          <h2 id="contact-software-title" className="contact-section-title">SOFTWARE</h2>
          <ul aria-label="Design software" className="contact-software-list">
            {SOFTWARE.map((name, index) => (
              <li key={name} title={name}>
                <img src={`/assets/images/interior/software-${index + 1}.webp`} alt={name} width="160" height="160" loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="contact-equipment-title">
          <h2 id="contact-equipment-title" className="contact-equipment-title">CREATIVE EQUIPMENT AND SETUP</h2>
          <ul className="contact-equipment-list">
            <li><img src="/assets/images/interior/gear-1.webp" alt="XP-Pen Artist 13.3 Pro" width="768" height="181" loading="lazy" decoding="async" /></li>
            <li><img src="/assets/images/interior/gear-2.webp" alt="Sony ZV-E10" width="512" height="163" loading="lazy" decoding="async" /></li>
          </ul>
        </section>
      </div>
    </>
  )
}
