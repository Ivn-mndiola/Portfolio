# Picture revision, v92

This update uses the latest delivered v91 source and the two original images in `new-assets.zip`. The revision was implemented as follows:

| Reference note | Update |
| --- | --- |
| Game Dev footer marks not arranged properly on PC | Three equal footer columns place the pine/year mark at the exact center, with the main logo and secondary icon on the sides. |
| Source character: up on PC, down on tablet | The desktop offset is 2.5vw up. The landscape tablet canvas uses a 1.5vw downward offset in its logical coordinate system. The normal stacked layout keeps the character in flow. |
| Stretched Source logo on tablet | The Social Media card uses the larger original SOURCE-PROJ.png with automatic height, object containment, and flex shrinking disabled. |
| Home tablet logo-preview bug | The row has a consistent height, equal marquee groups, preserved image proportions, and stronger opacity. The row also respects reduced-motion settings. |
| Artlantis missing head fin and tail details | The ending uses the complete supplied ArtlantisEnding.png with its native shadows and preserved proportions. |
| About details should show on PC; tablet portrait should be larger | The new About.png fills a taller left portrait frame. More compact introduction spacing brings Education into the initial desktop view. About reveals visible details without the previous 100px bottom inset. |

## Checks

Production build passed. Chromium browser checks covered the five revised pages at eleven viewports:

- PC: 1920 x 1080, 1440 x 900, and 1366 x 768.
- Landscape tablet: 1024 x 768, 1024 x 568, 1180 x 820, and 1366 x 1024.
- Portrait tablet: 768 x 1024.
- Phone: 390 x 844, 320 x 667, and 844 x 390.

All 55 revised-page/viewport groups passed. The remaining eight routes also retained the full-screen tablet canvas at 1024 x 768. Two checks with motion enabled confirmed About's visible Education section reveals and Home's staged portrait reveal with equal marquee groups. Total: 65 groups passed.

Checks covered image proportions, no horizontal overflow, the visible Home logo row, portrait/content separation, Source's opposite character offsets, Source carousel navigation, the complete Artlantis ending within its page, and the centered Game Dev footer. Desktop, landscape tablet, portrait tablet, and phone screenshots were inspected. No JavaScript or requested-asset errors were recorded.

The existing 401 public assets, both dependency manifests, Vercel config, navigation, and shared full-screen canvas files are byte-for-byte unchanged. Both replacement PNGs match the supplied files exactly. Existing fonts and project copy were retained.

The browser checks used local Chromium and tablet/touch emulation. A physical iPad/Safari and the live Vercel deployment were not tested. Redeploy the updated source using your existing workflow to apply this revision to the live website.
