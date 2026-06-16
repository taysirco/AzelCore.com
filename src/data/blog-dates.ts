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
};

/** Get the real dates for an article slug (falls back to a sane default). */
export function getArticleDate(slug: string): ArticleDate {
  return articleDates[slug] || DEFAULT_DATE;
}
