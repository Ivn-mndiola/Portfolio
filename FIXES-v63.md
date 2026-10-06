# v63 — Danes mobile mockups

Built on v62, including its responsive layouts and previous portfolio fixes.

- Show one complete mockup per card on screens up to 600px wide, using the original image proportions.
- Keep the selected mockup aligned when resizing or rotating the screen.
- Snap touch swipes to complete cards and preserve looping arrow navigation.
- Add accessible labels to the previous and next mockup buttons.

All existing image assets and dependencies are unchanged.

Validation: production build passed; browser checks passed for mobile, tablet, and desktop alignment, arrow wrapping, native touch swipes, resize, and remount cleanup.

Run locally: `npm ci`, then `npm run dev`.
Build for deployment: `npm run build`.
