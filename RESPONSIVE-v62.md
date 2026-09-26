# v62 — Responsive portfolio update

Based on the latest uploaded `iverson-portfolio-vite.zip`.

## Changes

- Phone and tablet navigation uses a full-screen menu with scroll locking, keyboard focus management, and correct reset when resizing to desktop.
- Home title, portrait, greeting, and action button adapt to narrower and shorter screens. The original entrance animation and logo marquee remain.
- Project slides scale and wrap their titles, images, descriptions, and controls. Vertical touch scrolling no longer changes projects; horizontal swiping still does.
- Case-study metadata uses fluid columns, then stacked layouts at smaller widths.
- Source, Artlantis, Illustration, Photography, and DBFortri switch to their flowing layouts at tablet widths.
- NIA's sections reflow into a vertical story with readable copy, scaled artwork, and aligned timeline arrows.
- Danes logo, swatch, heading, and carousel sizes fit mobile screens. PH Game Dev identity cards and Journey heading scale appropriately.
- Photography and DBFortri share the same full-screen viewer. Images, captions, close controls, and navigation fit phones and short landscape screens.
- Contact inputs reflow on tablets and retain the Gmail compose behavior.

Existing image assets, dependency versions, brand colors, and case-study content are preserved. PH Game Dev text remains `#FDFDFD`. About retains its fixed background. Project selection is retained when returning from a case study.

## Run

```sh
npm ci
npm run dev
```

Production build:

```sh
npm run build
```

This ZIP includes source and assets, without generated build output or installed dependencies.

## Verification

Production build and browser checks across all 13 routes at 320×568, 390×844, 768×1024, 844×390, 1024×768, 1280×800, 1440×900, and 1920×1080. Checked document overflow and text clipping, reviewed phone/tablet screenshots, and exercised navigation, carousels, image previews, and the contact draft flow. These are Chromium viewport checks, not physical-device certification.
