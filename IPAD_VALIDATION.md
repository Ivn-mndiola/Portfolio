# PC canvas and iPad checks

This release uses the recovered earlier Portfolio.rar-based project. The newest Portfolio.rar download was denied, so its contents could not be checked. The v61 attachment was not used.

The desktop master stays fixed at 1920 x 1080. Every landscape tablet tab shares one uniformly scaled canvas and centered origin. The smaller of width/1920 and height/1080 sets the scale; different aspect ratios leave space around the unchanged composition.

Verification used Chromium with touch/tablet emulation:

- Production build passed. Development-mode checks passed for Home, Projects, and DBFortri.
- All eight project slides and all eight complete case studies, plus Home, Services, About, and Contact, matched the PC master in visible content, font family, font size, and normalized geometry within 0.6 logical pixels at 1024 x 768.
- Desktop 1920 x 1080, phone 390 x 844, and portrait tablet 768 x 1024 comparisons passed for Home, Projects, DBFortri, and Artlantis.
- All eight slides were checked at 960 x 600, 1024 x 671, 1133 x 744, 1180 x 820, 1194 x 834, and 1366 x 1024. The canvas remained 1920 x 1080 with one scale; arrows, tracker, buttons, and descriptions stayed inside it.
- Navigation from Home to Projects kept the same scale and navigation bounds. Rotation closed the portrait menu. Route changes reset the inner page scroll.
- DBFortri's original desktop mockups, founder portrait, full background, and gallery were visible. The gallery advanced and closed correctly, and navigation stayed fixed while scrolling.
- No broken visible images, requested-asset failures, or JavaScript errors were found.

Total: 32 layout comparisons and eight interaction/viewport check groups passed. CSS container queries have been removed from the implementation. DBFortri's preview has a full-resolution background fallback plus prefixed and standard image-set paths. A physical iPad/Safari was not available, so device-specific rendering remains unverified.
