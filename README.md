# Version 61 — DBFortri logo in the home hero

The home hero's scrolling client-logo row now includes the existing DBFortri vector wordmark, with the same monochrome styling and seamless loop as the other logos. The home entrance animation, About layout, Contact Gmail form, and case studies are preserved.

# Version 60 — Apply the new layout to About

The supplied layout belongs to **About**. About now has the fixed blue background and desktop portrait, with biography, education, experience, software, and equipment scrolling beside it. On narrow screens the portrait stacks above the text while the background stays fixed.

Contact is restored exactly to its v58 layout and Gmail form behavior. The new About layout contains no contact form. Navigation highlights the correct page. Existing case studies, services, assets, and dependency versions are preserved.

# Version 59 — Fixed Contact background and scrolling profile

Contact now follows the two supplied SAMPLE references: a stationary blue background and desktop portrait, with a live-text biography, education, experience, software, and equipment column that scrolls normally. The Gmail enquiry form remains beneath the profile. Service enquiry links jump directly to that form.

The background stays fixed at all sizes. On smaller screens the portrait stacks above the text at a bounded size so it does not cover the content or form. Contact uses scoped layout rules in `src/pages/ContactPage.css`; About, Services, case studies, original images, and the existing Gmail draft controls are preserved.

# Version 58 — Contact opens Gmail

Submitting Contact validates the email and message, then opens Gmail in a new tab with `ivm.creatives@gmail.com`, the subject, name, reply email, selected service (when present), and message filled in. The visitor signs in if needed and clicks **Send** inside Gmail. The website does not send an email automatically or need Gmail credentials.

The form keeps the entered details. **Open Gmail again**, **Copy message**, and **View email draft** provide fallbacks if the new tab is blocked. Editing a field clears the previous prepared draft so the next submission uses the latest details. Existing About portrait sizing and all other pages and assets are preserved.

# Version 57 — Balanced About portrait

The About portrait now stays within its own left column, with a maximum desktop width of 700px (about 40% smaller than v56 at 1920px). It is aligned beside the biography, with a soft bottom fade into the page background. On narrower layouts the portrait is limited to 400px and 80% of the content width. Image resolution, text, navigation, and other pages are unchanged.

# Version 56 — Smaller interior-page layouts

The About portrait, large headings, software/equipment graphics, service cards, and Contact form are approximately 10–15% smaller. Spacing and page height are reduced along with the content. Image files retain their original v55 resolution. Existing case studies, navigation, animations, and form behavior are unchanged.

# Version 55 — About, Services, and Contact

- About follows the supplied portrait, biography, education, experience, software, and equipment layout. The Education graduation-cap icon is omitted.
- Services includes all nine services. Selecting a service opens Contact with that service included in the enquiry.
- Contact validates email and message fields, then opens a prefilled draft in the visitor’s email app. The visitor sends that draft. Copy message and View email draft are provided as fallbacks. Automatic email delivery would require a separately configured backend or email service.
- The supplied PNGs are served as WebP, with multiple resolutions for the background and portrait, and lossless software/equipment graphics. Questrial is self-hosted with its license included.
- Existing home animations, case studies, gallery previews, project selection memory, shared navigation, PH Game Dev #FDFDFD text, and dependency versions are preserved from v54.
- The broader site-wide media-query review remains for the final pass. These three pages include narrow-screen layouts and reduced-motion support.

# Iverson Portfolio — Vite + React

React/Vite portfolio styled with Tailwind CSS utility classes.

## Setup

```bash
npm install
npm run dev
```

## Tailwind setup

Tailwind CSS 4 is integrated through the official Vite plugin. `src/index.css`
imports Tailwind and defines only the project fonts and marquee theme token.

All layout, color, typography, responsive, hover, and animation styling now
lives in JSX utility classes. The four page-specific legacy stylesheets were
removed.

## Project features

- **Routing**: `pages/case-studies/projects.html`, `pages/services.html`, etc. are now
  React Router routes (`/projects`, `/services`, `/about`, `/contact`) handled by
  `react-router-dom`. About, Services, and Contact are implemented in version 55.
- **Nav / hamburger menu**: `assets/js/script.js`'s DOM manipulation
  (`classList.toggle('active-menu')`, Escape-key handling) is now React state
  in `src/components/Nav.jsx`.
- **Hero load animation**: the staged `setTimeout` reveal (fade-in logos at
  100ms, text at 300ms, portrait at 900ms, CTA at 1600ms) is managed by
  `src/hooks/useHeroAnimation.js` and Tailwind transition utilities.
- **Client logos marquee**: turned into a `LOGOS` array mapped twice (for the
  seamless loop) in `src/components/ClientLogos.jsx`, instead of hand-duplicated
  `<img>` tags in HTML.
- **Case studies**: Danes, New Ilocos Airport, and Philippine Game Dev Experience
  are responsive React pages styled entirely with Tailwind utilities.

## Assets

All portfolio images and local fonts are included under `public/assets/`.
Vite serves this folder from the site root, so the JSX references assets using
paths such as `/assets/images/logo.png`.

## Structure

```
src/
  main.jsx              # React root + BrowserRouter
  App.jsx               # Route definitions
  components/
    Nav.jsx              # Nav + hamburger menu
    ClientLogos.jsx       # Marquee footer
  hooks/
    useHeroAnimation.js   # Staged entrance animation timing
  pages/
    HomePage.jsx           # Hero section (from index.html)
    ProjectsPage.jsx        # Full-screen project slider
    ServicesPage.jsx        # Placeholder
    AboutPage.jsx            # Placeholder
    ContactPage.jsx           # Placeholder
```
