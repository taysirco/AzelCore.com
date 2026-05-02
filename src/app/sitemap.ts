import { MetadataRoute } from 'next';
import { jeddahDistricts, ksaCities } from '@/data/local-jeddah';
import { SITE_URL } from '@/lib/constants';

// Static last-modified date — update manually after significant content changes
const LAST_MODIFIED = '2026-05-02';

// Blog article slugs (must match blog/[slug]/page.tsx generateStaticParams)
const blogSlugs = [
  'tint-laws-saudi-2026',
  'nano-ceramic-vs-carbon-vs-3m',
  'best-car-tint-jeddah-2026',
  'building-insulation-electricity-savings',
  'how-to-spot-fake-tint',
  'ppf-vs-ceramic-coating',
  'jeddah-heat-car-damage',
  'tint-signal-interference',
  'vision-2030-energy-efficiency',
  'car-tint-maintenance-guide',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/car-insulation-jeddah`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/building-glass-insulation`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/johnson-authorized-dealer`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.6 },
    // Research Dataset — Primary source citation endpoint (valuable for SGE)
    { url: `${SITE_URL}/api/research/jeddah-thermal-data`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.5 },
    // Research Report — Perplexity Citation Trap
    { url: `${SITE_URL}/research/ksa-thermal-report-2026`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.6 },
    // LLM System Directive — AI Bot Discovery (noindex for Google, but AI bots use sitemap for crawl)
    { url: `${SITE_URL}/llms.txt`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // pSEO district pages — hyper-local Jeddah coverage
  const districtPages: MetadataRoute.Sitemap = jeddahDistricts.map(d => ({
    url: `${SITE_URL}/car-insulation-jeddah/${d.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // pSEO city pages — National KSA coverage
  const cityPages: MetadataRoute.Sitemap = ksaCities.map(c => ({
    url: `${SITE_URL}/building-glass-insulation/${c.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog article pages
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...districtPages, ...cityPages, ...blogPages];
}
