# Iverson Portfolio — v72

React, Vite, and Tailwind portfolio with thirteen routes and eight case studies.

## Run locally

Use Node.js 20.19 or newer.

```bash
npm ci
npm run dev
```

Create the production build with `npm run build`. Preview it with `npm run preview`.
Deploy the generated `dist` folder to a host with an SPA fallback to `index.html`, so direct links such as `/projects/artlantis` work.

## Responsive layout updates

- Phone home layout keeps the greeting, portrait, project link, and logo row separate. Short landscape screens have their own compact composition.
- On smaller screens, Projects has a scrolling preview above a persistent control bar. Text stays clear of the controls, and switching projects resets the preview scroll.
- Case studies reflow into readable vertical stories. Breakpoints meet at the same screen widths; smaller galleries show complete artwork.
- Services keeps its stationary background while cards scroll. Service descriptions and Contact fields have more room on phones and tablets.
- Bright Illustration, Photography, and NIA sections have clearer description contrast.
- Case-study and project descriptions use the shared **Inter, 14px, line-height 1.8** setting. The requested Artlantis text, bold names, freelance role, Game Dev title color, and supplied Verto PNGs remain included.

## Loading improvements

- Routes load their code when opened. Projects mounts the selected and outgoing slides for its fade instead of downloading all eight posters upfront.
- `ResponsiveImage.jsx` selects WebP previews from `src/data/imageVariants.json` and defers below-fold images. Raster originals remain in `public/assets/images`; photo viewers keep their full-resolution sources.
- Desktop-only Source and Artlantis backgrounds use responsive pictures and do not download on phones. Interior backgrounds use smaller responsive previews.
- Embedded NIA SVG photos are compressed while vector paths and filters remain intact.
- The existing font families are self-hosted under `public/assets/fonts`, with licenses included. Google Fonts connections are no longer required.
- Scroll reveals use IntersectionObserver; navigation tint measurements are limited to one frame. Normal entrance animations stay enabled, with reduced-motion support.
- Source rotates designs only while its carousel is visible, and mounts only its current and outgoing designs.

See `VALIDATION.md` for the browser checks and their limits.
