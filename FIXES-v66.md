# v66 — Project browser colors

Based on v65. Existing layouts, assets, galleries, animations, and remembered project selection are preserved.

The page body previously had a fixed navy background. Both HTML and body now use the active project color, so the area behind browser toolbars and overscroll no longer stays navy on every project. A single theme-color meta tag updates at the same time for browsers that support it.

- Danes: red (#DA0442)
- PH Game Dev: purple (#736CB3)
- NIA: teal (#57B9B1)
- Source: blue (#667FB6)
- Artlantis: cyan (#02C6F2)
- Illustration: gold (#EDB113)
- Photography: green (#ABC400)
- DBfortri: gray (#737373)

Each case study uses a color from its own page. Home, About, Services, and Contact restore their own backgrounds when leaving Projects. Colors update before React paints and follow the same active slide state used by arrows, swipes, keyboard navigation, and remembered selection.

Validation: production build passed; 28 browser checks passed, covering all eight slides and case study routes, wraparound, keyboard/swipe changes, reload, back navigation, and menu navigation. No JavaScript errors were reported. Original public assets are byte-for-byte unchanged.

Native Safari browser chrome cannot be rendered by the local Chromium check. Test the top and bottom tint on a physical iPhone after redeploying; Safari may adjust the final shade for contrast and its browser appearance settings.

Run locally: npm ci, then npm run dev. For deployment: npm ci, npm run build, output directory dist. The archive excludes node_modules and dist.
