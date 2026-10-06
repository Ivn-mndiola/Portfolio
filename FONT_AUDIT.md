# Typography correction — v79

Home and project metadata use their original typography again. The extra case-study heading and label changes from v78 have been reverted. The latest font changes are limited to case-study descriptions, including opening summaries and the DBFortri gallery description.

| Case-study description | Font |
| --- | --- |
| Danes | Urbanist |
| Philippine GameDev | Karla |
| NIA | Bahnschrift |
| Source | Questrial |
| Artlantis | Urbanist |
| Illustration | Urbanist |
| Photography | Urbanist |
| DBFortri | Plus Jakarta Sans |

Descriptions retain the shared 14px size and 1.8 line height, with the existing bold and italic emphasis.

Home uses its original Oswald title, Questrial greeting and role, and Inter button text. Navigation uses Inter again. Metadata uses Inter with bold labels, retaining the original Questrial variants on Source and Artlantis. These original font binaries are registered under separate Portfolio UI family aliases in `src/ui-fonts.css` so the supplied case-study fonts cannot change Home or metadata.

The existing responsive layouts, animations, images, content, and interactions are retained. Uploaded case-study font files and their notices remain bundled. `FONT_SOURCES.json` records both the uploaded faces and the original UI faces.
