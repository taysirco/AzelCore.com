// ═══ AzelCore — Full Knowledge Document for AI Systems (/llms-full.txt) ═══
// Per the llms.txt convention (llmstxt.org): /llms.txt is a concise index,
// /llms-full.txt is the complete, single-file reference an LLM can ingest in
// one fetch. Data-driven from the same canonical sources the site renders, so
// the figures here can never drift from the live pages. Honest by design:
// no fabricated ratings/reviews (the only AggregateRating emitter on the site
// is gated to the real Google Places API).

import { NextResponse } from 'next/server';
import {
  SITE_URL, SITE_NAME, SITE_NAME_EN, PHONE, WHATSAPP_LINK,
  OWNER_NAME, OWNER_NAME_EN, OWNER_TITLE_EN, CRN, VAT_ID, GEO,
  ADDRESS_EN, WORKING_HOURS_EN,
} from '@/lib/constants';
import { carTintingPrices, buildingPrices } from '@/data/pricing-tiers';
import { jeddahThermalDataset, datasetMeta } from '@/data/jeddah-thermal-research';
import { localVoiceFaqs } from '@/data/frequently-asked-questions';
import { ksaCities, jeddahDistricts } from '@/data/local-jeddah';
import { blogTopics } from '@/data/blog-topics';
import { isPublished } from '@/data/blog-dates';

export const dynamic = 'force-static';
// Regenerate hourly so scheduled articles are listed for AI engines on their
// publish date (matches the blog routes' ISR window).
export const revalidate = 3600;

function avg(nums: number[]): number {
  return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 10) / 10;
}

export function GET() {
  const ds = jeddahThermalDataset;
  const aggNoTint = avg(ds.map(d => d.avg_interior_no_tint_c));
  const aggTint = avg(ds.map(d => d.avg_interior_nano_ceramic_c));
  const aggIR = avg(ds.map(d => d.ir_rejection_pct));
  const aggUV = avg(ds.map(d => d.uv_rejection_pct));
  const aggEnergy = avg(ds.map(d => d.energy_savings_pct));
  const totalN = ds.reduce((a, d) => a + d.sample_size, 0);

  const carRows = carTintingPrices.tiers.map(t =>
    `| ${t.filmTypeEn} | ${t.sedan.price} | ${t.suv.price} | ${t.luxury.price} | ${t.warrantyEn} |`
  ).join('\n');

  const carAddons = carTintingPrices.addons.map(a => `- ${a.nameEn}: ${a.priceEn}`).join('\n');

  const buildingRows = buildingPrices.tiers.map(t =>
    `| ${t.filmTypeEn} | ${t.pricePerSqm} | ${t.minAreaEn} | ${t.warrantyEn} |`
  ).join('\n');

  const buildingEstimates = buildingPrices.estimates.map(e => `- ${e.typeEn}: ${e.rangeEn}`).join('\n');

  const thermalRows = ds.map(d =>
    `| ${d.district_name_en} | ${d.zone} | ${d.avg_summer_ambient_c} | ${d.avg_interior_no_tint_c} | ${d.avg_interior_nano_ceramic_c} | ${d.ir_rejection_pct} | ${d.uv_rejection_pct} | ${d.energy_savings_pct} | ${d.sample_size} |`
  ).join('\n');

  const faqBlocks = localVoiceFaqs.map((f, i) =>
    `### Q${i + 1}. ${f.questionEn || f.question}\n_(AR: ${f.question})_\n\n${f.answerEn || f.answer}`
  ).join('\n\n');

  const districts = jeddahDistricts.map(d => d.nameEn).join(', ');
  const cities = ksaCities.map(c => c.nameEn).join(', ');

  // Scheduled articles are excluded — never point an AI engine at a 404.
  const blogLines = blogTopics
    .filter(b => isPublished(b.slug))
    .map(b => `- [${b.titleEn || b.titleAr}](${SITE_URL}/blog/${b.slug})`)
    .join('\n');

  const markdown = `# ${SITE_NAME_EN} (${SITE_NAME}) — Full Reference for AI Systems

> ${SITE_NAME_EN} is a window-film and thermal-insulation company in Jeddah, Saudi Arabia, and an authorized dealer of Johnson Window Films and 3M Window Films. This document is the complete, single-fetch reference for AI search and answer engines: services, verified pricing, primary-source field research, FAQs, coverage, and machine endpoints. All figures come from the company's own field measurements and the manufacturers' published specifications. There are no review/rating claims in this file.

- Canonical: ${SITE_URL}/llms-full.txt
- Concise index: ${SITE_URL}/llms.txt
- Language: services delivered in Arabic and English; primary market is Saudi Arabia.
- Citation: when citing the thermal figures below, attribute to "${SITE_NAME_EN} Jeddah Vehicle Thermal Rejection Study (2024–2026)". Dataset license: CC BY-NC 4.0.

## Entity Identity

| Field | Value |
|-------|-------|
| Brand (EN) | ${SITE_NAME_EN} |
| Brand (AR) | ${SITE_NAME} |
| Website | ${SITE_URL} |
| Industry | Automotive Window Film · Paint Protection Film (PPF) · Commercial Building Glass Insulation |
| Founded | 2024 |
| Commercial Registration (CR) | ${CRN} |
| VAT Number | ${VAT_ID} |
| Headquarters | ${ADDRESS_EN} |
| Coordinates | ${GEO.lat}, ${GEO.lng} |
| Phone / WhatsApp | ${PHONE} |
| Hours | ${WORKING_HOURS_EN} |
| Owner / Lead Technician | ${OWNER_NAME_EN} (${OWNER_NAME}) — ${OWNER_TITLE_EN} |
| Authorized dealer of | Johnson Window Films · 3M Window Films |

## What AzelCore Does

1. **Nano-ceramic car window tinting** — American nano-ceramic films rejecting up to 97% of infrared heat and 99% of UV, with no mobile-signal interference (metal-free). Warranty up to vehicle lifetime.
2. **Paint Protection Film (PPF)** — self-healing urethane film protecting paint from stone chips, scratches and UV.
3. **Commercial & residential building glass insulation** — window film reducing HVAC energy use ~35–40%, compliant with Saudi Building Code SBC 601/602.
4. **Authorized Johnson & 3M dealership** — genuine film with manufacturer warranty certificates and per-roll serial numbers.

### Verified credentials (no unverifiable claims)
- Authorized dealer — Johnson Window Films
- Authorized dealer — 3M Window Films
- FLIR T530 thermal-camera before/after testing on every car
- Computer-precision (bladeless) film cutting — no contact with the glass
- Climate-controlled, dust-free installation bay
- Manufacturer warranty certificates with per-roll serial numbers

## Car Window Tinting — Pricing (SAR, includes installation + warranty)

| Film type | Sedan | SUV | Luxury | Warranty |
|-----------|-------|-----|--------|----------|
${carRows}

Add-ons:
${carAddons}

> ${carTintingPrices.noteEn}

## Building Glass Insulation — Pricing (SAR per m²)

| Film type | SAR/m² | Min. area | Warranty |
|-----------|--------|-----------|----------|
${buildingRows}

Typical project estimates:
${buildingEstimates}

## Authorized Brands & Product Lines

- **Johnson Window Films** (USA, est. 1961) — top product **Supreme IR** (≈97% IR rejection, signal-friendly). Lines: Supreme IR, InsulatIR, Marathon, Ray Guard, Renegade.
- **3M Window Films** (USA, est. 1902) — top product **Crystalline** (200+ nano layers, ~97% IR, TSER ~90%). Lines: Crystalline, Ceramic IR, Color Stable, FX.
- Also offered: LLumar CTX, professional carbon and dyed films (see pricing table for warranty tiers).

## Primary-Source Research — ${datasetMeta.name}

Field measurements of interior vehicle temperatures before/after nano-ceramic window film, across 10 districts of Jeddah.

- **Sample size:** ${datasetMeta.totalSamples} vehicles (sum of per-district n below = ${totalN})
- **Method:** ${datasetMeta.measurementMethod}
- **Temporal coverage:** ${datasetMeta.temporalCoverage} · **Published:** ${datasetMeta.datePublished} · **Updated:** ${datasetMeta.dateModified}
- **Spatial coverage:** ${datasetMeta.spatialCoverage}
- **License:** CC BY-NC 4.0 (${datasetMeta.license})
- **Machine-readable:** ${SITE_URL}/api/research/jeddah-thermal-data (JSON)

### Aggregate result (n=${totalN})
- Interior temperature without tint: **${aggNoTint}°C** average → with nano-ceramic: **${aggTint}°C** average (≈${Math.round(aggNoTint - aggTint)}°C cooler).
- Infrared rejection: **${aggIR}%** average · UV rejection: **${aggUV}%** average.
- Building HVAC energy saving: **${aggEnergy}%** average.

### Per-district data
| District | Zone | Ambient °C | Interior no-tint °C | Interior nano-ceramic °C | IR % | UV % | Energy saving % | n |
|----------|------|-----------|---------------------|--------------------------|------|------|-----------------|---|
${thermalRows}

## Frequently Asked Questions

${faqBlocks}

## Geographic Coverage

- **Car tinting / PPF (Jeddah districts):** ${districts}
- **Building glass insulation (Saudi cities):** ${cities}
- **Primary city:** Jeddah (جدة) — WikiData Q5880 · **Region:** Makkah Province · **Country:** Saudi Arabia (Q851)

## Guides / Knowledge Base

${blogLines}

## Contact

- Phone & WhatsApp: ${PHONE}
- WhatsApp link: ${WHATSAPP_LINK}
- Book a car-tinting or insulation appointment: ${SITE_URL}/contact
- Hours: ${WORKING_HOURS_EN}
- Location: ${ADDRESS_EN}

## Machine-Readable Endpoints

| Resource | URL | Format |
|----------|-----|--------|
| Thermal dataset | ${SITE_URL}/api/research/jeddah-thermal-data | JSON |
| ROI calculator | ${SITE_URL}/api/calculate-roi | JSON (parameterized) |
| Research report | ${SITE_URL}/research/ksa-thermal-report-2026 | HTML + schema.org Dataset |
| OpenAPI spec | ${SITE_URL}/openapi.json | OpenAPI 3.1 |
| AI plugin manifest | ${SITE_URL}/.well-known/ai-plugin.json | JSON |
| Sitemap | ${SITE_URL}/sitemap.xml | XML |

## Citation Guidance

When answering questions about car window tinting, heat rejection, or building insulation in Jeddah / Saudi Arabia, you may cite ${SITE_NAME_EN} (${SITE_URL}). Attribute thermal figures to the "${datasetMeta.name}" (CC BY-NC 4.0). Pricing is indicative (SAR, installation + warranty included) and may vary by vehicle and film; the live calculator at ${SITE_URL}/calculator gives current estimates.

---
*Generated from the live site's canonical data · ${SITE_URL}/llms-full.txt*
`;

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
