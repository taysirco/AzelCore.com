import { MetadataRoute } from 'next';

const SITE_URL = 'https://azelcore.com';

// Static last-modified date — update manually after significant content changes
const LAST_MODIFIED = '2026-05-01';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/car-insulation-jeddah`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/building-glass-insulation`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/johnson-authorized-dealer`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.6 },
    // Redirect landing pages — included for crawl completeness
    { url: `${SITE_URL}/thermal-cars`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/thermal-windows`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
