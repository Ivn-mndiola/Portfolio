# v64 — Complete images on mobile

Built on v63, including the earlier responsive layouts, animations, project selection memory, and carousel fixes.

- Source and NIA now show their complete wide compositions in a fitted image area on mobile and tablet.
- Danes roster portraits, Illustration artwork, and Photography visuals fit within their own rows instead of extending beyond the screen.
- Short screens can scroll to the project description and controls without clipping the artwork.
- Photography and DBFortri gallery previews retain their image proportions on smaller screens.
- Danes mockup cards use the original image proportions on tablet as well as mobile.
- Desktop layouts, original image files, and package dependencies are preserved.

Validation: production build passed; 59 browser checks passed for project images at 320px, 400px, 768px and landscape widths, case-study image bounds, full-screen previews, navigation, project selection memory and desktop Source rendering.

Run locally: `npm ci`, then `npm run dev`.
Build for deployment: `npm run build`.
