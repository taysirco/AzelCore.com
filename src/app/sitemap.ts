import { MetadataRoute } from 'next';
import { jeddahDistricts, ksaCities } from '@/data/local-jeddah';
import { SITE_URL } from '@/lib/constants';

// Static last-modified date — update manually after significant content changes
const LAST_MODIFIED = '2026-05-15';

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

/**
 * Helper function to generate deep, bidirectional hreflang entries
 * This eliminates 301 redirects and search cannibalization for the 2026 Saudi market.
 */
function createI18nEntries(path: string, options: Omit<MetadataRoute.Sitemap[0], 'url' | 'alternates'>): MetadataRoute.Sitemap {
  const normalizedPath = path === '/' ? '' : path;
  
  // Arabic is default (no prefix), English uses /en prefix
  const arUrl = `${SITE_URL}${normalizedPath || '/'}`;
  const enUrl = `${SITE_URL}/en${normalizedPath}`;

  const alternates = {
    languages: {
      'ar': arUrl,
      'en': enUrl,
      'x-default': arUrl, // Saudi Arabia is primary market
    },
  };

  return [
    { url: arUrl, alternates, ...options },
    { url: enUrl, alternates, ...options },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    ...createI18nEntries('/', { lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 }),
    ...createI18nEntries('/car-insulation-jeddah', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 }),
    ...createI18nEntries('/building-glass-insulation', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 }),
    ...createI18nEntries('/johnson-authorized-dealer', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 }),
    ...createI18nEntries('/3m-authorized-dealer', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 }),
    ...createI18nEntries('/faq', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 }),
    ...createI18nEntries('/blog', { lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 }),
    ...createI18nEntries('/gallery', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 }),
    ...createI18nEntries('/about', { lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.7 }),
    ...createI18nEntries('/contact', { lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.6 }),
    ...createI18nEntries('/calculator', { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 }),
    
    // API and AI discovery endpoints (Locale Exempt)
    { url: `${SITE_URL}/api/research/jeddah-thermal-data`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/research/ksa-thermal-report-2026`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/llms.txt`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // dynamic-pages district pages — hyper-local Jeddah coverage
  const districtPages: MetadataRoute.Sitemap = jeddahDistricts.flatMap(d => 
    createI18nEntries(`/car-insulation-jeddah/${d.id}`, { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 })
  );

  // dynamic-pages city pages — National KSA coverage
  const cityPages: MetadataRoute.Sitemap = ksaCities.flatMap(c => 
    createI18nEntries(`/building-glass-insulation/${c.id}`, { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 })
  );

  // Blog article pages
  const blogPages: MetadataRoute.Sitemap = blogSlugs.flatMap(slug => 
    createI18nEntries(`/blog/${slug}`, { lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 })
  );

  return [...staticPages, ...districtPages, ...cityPages, ...blogPages];
}
