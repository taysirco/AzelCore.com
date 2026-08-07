// ═══ Blog Article Dates ═══
// Real per-article publish/modified dates (derived from git history), so every
// article carries a distinct, honest datePublished/dateModified instead of one
// shared hardcoded date. Update `modified` whenever an article's content changes.

export interface ArticleDate {
  published: string; // ISO date (YYYY-MM-DD)
  modified: string;
}

const DEFAULT_DATE: ArticleDate = { published: '2026-05-02', modified: '2026-06-15' };

export const articleDates: Record<string, ArticleDate> = {
  'tint-laws-saudi-2026': { published: '2026-05-02', modified: '2026-06-15' },
  'nano-ceramic-vs-carbon-vs-3m': { published: '2026-05-02', modified: '2026-06-15' },
  'best-car-tint-jeddah-2026': { published: '2026-05-02', modified: '2026-05-15' },
  'building-insulation-electricity-savings': { published: '2026-05-02', modified: '2026-06-15' },
  'how-to-spot-fake-tint': { published: '2026-05-02', modified: '2026-06-15' },
  'ppf-vs-ceramic-coating': { published: '2026-05-02', modified: '2026-05-15' },
  'jeddah-heat-car-damage': { published: '2026-05-02', modified: '2026-06-15' },
  'tint-signal-interference': { published: '2026-05-02', modified: '2026-06-15' },
  'vision-2030-energy-efficiency': { published: '2026-05-02', modified: '2026-06-15' },
  'car-tint-maintenance-guide': { published: '2026-05-02', modified: '2026-05-15' },
  'commercial-building-tint-jeddah': { published: '2026-05-15', modified: '2026-06-15' },
  'ev-range-window-tint': { published: '2026-05-15', modified: '2026-05-15' },
  'clear-windshield-tint-3m': { published: '2026-05-15', modified: '2026-06-15' },
  'tint-removal-defroster-lines': { published: '2026-05-15', modified: '2026-05-15' },
  'uv-protection-car-tint-health': { published: '2026-05-15', modified: '2026-06-15' },
  'residential-privacy-tinting': { published: '2026-05-15', modified: '2026-05-15' },
  'roi-calculator-commercial-tint': { published: '2026-05-15', modified: '2026-06-15' },
  'flir-thermal-camera-tint-test': { published: '2026-05-15', modified: '2026-06-15' },
  'ppf-vs-car-polish-paint-damage': { published: '2026-05-15', modified: '2026-05-16' },
  'building-tint-furniture-fading-protection': { published: '2026-05-15', modified: '2026-06-15' },
  'nano-ceramic-coating-real-longevity-ksa': { published: '2026-05-15', modified: '2026-06-15' },
  'skin-cancer-driving-uv-protection-tint': { published: '2026-05-15', modified: '2026-06-15' },
  'computer-cut-vs-manual-ppf-jeddah': { published: '2026-05-15', modified: '2026-05-16' },
  'retail-store-window-tinting-clear-heat-rejection': { published: '2026-05-15', modified: '2026-06-15' },
  'dealership-tint-vs-specialized-centers': { published: '2026-05-15', modified: '2026-05-16' },
  'complete-guide-car-tinting-jeddah': { published: '2026-06-16', modified: '2026-06-16' },
  'car-protection-tinting-vs-ceramic-vs-ppf': { published: '2026-06-16', modified: '2026-06-16' },
  'building-insulation-saudi-arabia-guide': { published: '2026-06-16', modified: '2026-06-16' },
  // Spoke articles (batch A):
  'saudi-tint-vlt-percentage-by-window-2026': { published: '2026-06-16', modified: '2026-06-16' },
  'car-tint-cost-jeddah-by-car-size': { published: '2026-06-16', modified: '2026-06-16' },
  'ppf-cost-jeddah-coverage-packages': { published: '2026-06-16', modified: '2026-06-16' },
  'johnson-supreme-ir-vs-3m-crystalline': { published: '2026-06-16', modified: '2026-06-16' },
  'xpel-vs-3m-vs-suntek-ppf': { published: '2026-06-16', modified: '2026-06-16' },
  'full-body-vs-partial-ppf-jeddah': { published: '2026-06-16', modified: '2026-06-16' },
  'saudi-tint-fines-fahas-inspection-guide': { published: '2026-06-16', modified: '2026-06-16' },
  'verify-authentic-johnson-3m-film-serial-warranty': { published: '2026-06-16', modified: '2026-06-16' },
  'best-tint-land-cruiser-patrol-jeddah': { published: '2026-06-16', modified: '2026-06-16' },
  'johnson-vs-cheap-chinese-film': { published: '2026-06-16', modified: '2026-06-16' },
  'ir-uv-tser-metrics-decoded': { published: '2026-06-16', modified: '2026-06-16' },
  'vlt-explained-saudi-tint-law': { published: '2026-06-16', modified: '2026-06-16' },
  'why-cheap-tint-costs-more-jeddah': { published: '2026-06-16', modified: '2026-06-16' },
  // Spoke articles (batch B):
  'villa-glass-insulation-jeddah-cost-guide': { published: '2026-06-17', modified: '2026-06-17' },
  'glass-facade-tower-curtain-wall-insulation': { published: '2026-06-17', modified: '2026-06-17' },
  'security-anti-shatter-safety-window-film': { published: '2026-06-17', modified: '2026-06-17' },
  'sbc-601-602-glass-compliance-guide': { published: '2026-06-17', modified: '2026-06-17' },
  'why-tint-turns-purple-bubbles-jeddah': { published: '2026-06-17', modified: '2026-06-17' },
  'tesla-ev-tint-jeddah': { published: '2026-06-17', modified: '2026-06-17' },
  'children-pets-hot-car-heat-safety-jeddah': { published: '2026-06-17', modified: '2026-06-17' },
  'how-to-clean-tinted-windows-safely': { published: '2026-06-17', modified: '2026-06-17' },
  'tint-warranty-claim-process-saudi': { published: '2026-06-17', modified: '2026-06-17' },
  'mosque-hospital-school-window-film': { published: '2026-06-17', modified: '2026-06-17' },
  'full-windshield-tint-options-saudi': { published: '2026-06-17', modified: '2026-06-17' },
  'self-healing-ppf-explained': { published: '2026-06-17', modified: '2026-06-17' },
  'tint-reduce-ac-load-fuel-savings-jeddah': { published: '2026-06-17', modified: '2026-06-17' },
  'fleet-company-car-tinting-ksa': { published: '2026-06-17', modified: '2026-06-17' },
};

/** Get the real dates for an article slug (falls back to a sane default). */
export function getArticleDate(slug: string): ArticleDate {
  return articleDates[slug] || DEFAULT_DATE;
}

// ═══════════════════════════════════════════════════════════════════
// Publishing schedule
// ═══════════════════════════════════════════════════════════════════
// An article's `published` date doubles as its scheduled go-live date.
// Give a future date and the article stays hidden from the blog index,
// the sitemap, llms.txt and its own URL (404) until that date arrives.
//
// Going live is automatic: the blog routes use ISR, so each regeneration
// re-evaluates the date and the article appears without any deploy.

/** Business timezone — Asia/Riyadh is UTC+3 year-round (no DST). */
const RIYADH_UTC_OFFSET_HOURS = 3;

/** Today's date in Riyadh local time, as YYYY-MM-DD. */
export function todayInRiyadh(): string {
  return new Date(Date.now() + RIYADH_UTC_OFFSET_HOURS * 3_600_000)
    .toISOString()
    .slice(0, 10);
}

/**
 * Has this article's publish date arrived?
 * ISO date strings (YYYY-MM-DD) compare correctly lexicographically.
 */
export function isPublished(slug: string, today: string = todayInRiyadh()): boolean {
  return getArticleDate(slug).published <= today;
}

/** Filter any slug list down to those already published. */
export function filterPublished(slugs: string[], today: string = todayInRiyadh()): string[] {
  return slugs.filter((slug) => isPublished(slug, today));
}

/** Articles still waiting for their publish date — for tooling/diagnostics. */
export function getScheduledSlugs(slugs: string[], today: string = todayInRiyadh()): string[] {
  return slugs.filter((slug) => !isPublished(slug, today));
}
