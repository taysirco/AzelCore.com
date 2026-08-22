# Task: generate 6 blog hero images for AzelCore.com

You are working in the repo `AzelCore.com` (Next.js 16, Arabic-first, Jeddah/Saudi window-film company).
Six scheduled blog articles have no hero image yet. Produce them.

## What to produce

Exactly six image files, saved to `public/images/blog/` with these EXACT filenames:

| # | Filename |
|---|----------|
| 1 | `car-tint-resale-value-insurance-saudi-1.webp` |
| 2 | `mostadam-leed-window-film-energy-credits-1.webp` |
| 3 | `best-tint-camry-accord-sonata-sedan-jeddah-1.webp` |
| 4 | `double-glazing-vs-window-film-buildings-ksa-1.webp` |
| 5 | `tint-curing-period-haze-bubbles-normal-1.webp` |
| 6 | `window-film-thermal-stress-glass-breakage-1.webp` |

## Technical spec (must match the existing image set)

- Format: **WebP**
- Dimensions: **1536 × 864** (16:9)
- Quality: ~85, target **under 250 KB** each
- **Strip all metadata** on export (a separate EXIF/SEO pass is applied afterwards — do not add any)
- If your generator outputs PNG/JPEG, convert:
  `magick in.png -resize 1536x864^ -gravity center -extent 1536x864 -quality 85 -strip out.webp`

## House style — applies to ALL six

Photorealistic editorial photograph. Natural daylight, shallow depth of field, clean composition.
Saudi Arabia / Jeddah context. Consistent look across all six so they read as ONE series.

**Hard constraints (any violation = reject and regenerate):**
- NO text, letters, numbers or captions anywhere in the image
- NO logos, watermarks, or brand badges (no car marques, no film-brand logos)
- NO human faces, NO identifiable people
- NO AI-generator watermarks or signatures

## The six prompts

**1. car-tint-resale-value-insurance-saudi**
The pristine interior of a well-kept modern sedan in Saudi Arabia. Dashboard and leather seats in
excellent condition with no sun cracking. Viewed through a tinted side window from outside. Warm
late-afternoon desert light. A car key and a folded document rest on the passenger seat, suggesting a
private sale handover. Clean, premium, trustworthy mood.

**2. mostadam-leed-window-film-energy-credits**
A modern glass-facade commercial office tower in Saudi Arabia under bright daylight, low angle, crisp
blue-sky reflections on spectrally-selective glazing. Foreground softly out of focus: a rolled
architectural drawing and a hard hat on a table, suggesting a sustainability consultant's site review.
Professional, corporate, energy-efficiency mood.

**3. best-tint-camry-accord-sonata-sedan-jeddah**
A clean modern midsize sedan parked on a sunlit street in Jeddah, three-quarter front view. Freshly
tinted windows with an even dark finish; the large sloped rear windshield is visible. Palm trees and
warm coastal light behind. Crisp reflections, professional detailing-shop quality. Generic sedan — no
identifiable marque.

**4. double-glazing-vs-window-film-buildings-ksa**
A split comparison inside one frame: a modern villa window in Saudi Arabia where the LEFT half is a
thick insulated double-glazed unit with a visible spacer bar at the glass edge, and the RIGHT half is a
single pane with a thin applied heat-rejection film. Intense desert sunlight strikes both from outside.
Technical, explanatory, clean architectural lighting.

**5. tint-curing-period-haze-bubbles-normal**
Macro shot of a freshly tinted car side window during the curing period: tiny trapped water pockets and
a faint milky haze under the film, backlit by bright sunlight so the moisture beads glow. Extremely
shallow depth of field; water droplets and the film edge crisply visible. Clinical, diagnostic mood.

**6. window-film-thermal-stress-glass-breakage**
Detail shot of a large architectural glass pane in an aluminium frame with a single thermal-stress crack
running perpendicular from the shaded frame edge toward the sunlit centre of the glass. Harsh Saudi
midday sun on the exposed centre, cool shadow at the edge, high contrast showing the temperature
boundary. Technical, serious, forensic-engineering mood.

## How to generate

Use the OpenAI Images API (`gpt-image-1`, size `1536x1024`, quality `high`), reading the key from the
`OPENAI_API_KEY` environment variable. Never hardcode or print the key.

A working script already exists — prefer running it over writing a new one:

```bash
export OPENAI_API_KEY=...      # already-set env var
node scripts/generate-blog-images.mjs
```

It reads `scripts/blog-image-prompts.json`, writes each file, converts to WebP, and skips any that
already exist. If it fails, fix it rather than replacing it.

## Acceptance check (run this — it must pass)

```bash
node scripts/validate-blog.mjs
```

It fails while any `ogImage` file is missing. When all six exist:

1. In each of these files under `src/data/blog-content/`, uncomment the `ogImage` line
   (each has a `TODO(image):` comment marking it):
   `car-tint-resale-value-insurance-saudi.ts`, `mostadam-leed-window-film-energy-credits.ts`,
   `best-tint-camry-accord-sonata-sedan-jeddah.ts`, `double-glazing-vs-window-film-buildings-ksa.ts`,
   `tint-curing-period-haze-bubbles-normal.ts`, `window-film-thermal-stress-glass-breakage.ts`
2. `node scripts/validate-blog.mjs` → must print `blog data is consistent`
3. `npm run build` → must succeed

## Do NOT

- Do not touch article text, `blog-dates.ts`, or any publish date.
- Do not reuse any existing image from `public/images/` — every blog image must be unique to its article.
- Do not add EXIF/XMP metadata; that pass is applied separately.
