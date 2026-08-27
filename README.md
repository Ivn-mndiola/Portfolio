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
  `react-router-dom`. Since only the homepage markup was provided, the other
  pages are placeholders — swap in real content in `src/pages/*.jsx`.
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
