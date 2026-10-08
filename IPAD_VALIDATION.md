# Full-screen iPad checks, v90

The landscape tablet canvas uses a 1920px logical width, uniform width-based scale, and a logical height derived from the visible browser height. Its transformed bounds now match the viewport edges instead of centering a fixed 16:9 rectangle inside it. The persistent wrapper is shared by all thirteen routes.

Verification used the production build in Chromium with touch/tablet emulation:

- Production build passed.
- Home, Services, About, Contact, and all eight case studies filled the complete 1024 x 768 viewport at both the top and bottom of their scrollable content. Every long page reached its final content without an outside canvas band or horizontal overflow.
- Those twelve routes and all eight Projects previews matched a desktop viewport of the same aspect ratio, 1920 x 1440, in visible content, fonts, and normalized geometry within 0.6 logical pixels.
- All eight project previews filled 1024 x 604, 1024 x 568, 960 x 600, 1180 x 820, 1366 x 1024, and 1376 x 900. Their arrows, tracker, project buttons, and descriptions stayed inside the viewport. The 568px height checks cover the previous 600px mode cutoff.
- Resizing each of the twelve content routes between 768px, 604px, and 568px high updated the canvas to the new viewport height while retaining its width-based scale.
- Home-to-Projects navigation retained the same navigation bounds and scale. Route changes reset the inner scroll. Portrait-to-landscape rotation closed the menu and filled the landscape viewport.
- DBFortri's desktop mockups, founder portrait, and gallery remained visible. Its photo viewer filled the entire viewport, advanced photos, and closed correctly. Navigation stayed fixed while scrolling.
- Desktop 1920 x 1080, phone 390 x 844, and portrait tablet 768 x 1024 remained unchanged in comparisons of Home, Projects, DBFortri, and Artlantis against v89.
- No broken visible images, requested-asset failures, or JavaScript errors were found. All 401 public assets and both dependency manifests are byte-for-byte unchanged.

Total: 32 layout comparisons and ten full-screen/interaction/viewport groups passed. Danes, DBFortri, Home, Contact, and project-preview screenshots were also inspected. A physical iPad/Safari was not available; browser toolbar heights were simulated through viewport resizing.

This update uses the previously delivered v89 source. The newer Portfolio.rar download was denied in the preceding update, so its contents have not been compared. The v61 attachment was not used.
