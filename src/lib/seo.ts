import { SITE_URL } from './constants';
import { Locale, localePath } from './i18n';

/**
 * Generate deep and professional hreflang alternates for a given path.
 * Ensures strict SEO compliance for bilingual canonicals.
 */
export function getAlternates(locale: Locale, path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return {
    canonical: `${SITE_URL}${localePath(locale, normalizedPath)}`,
    languages: {
      'ar': `${SITE_URL}${localePath('ar', normalizedPath)}`,
      'en': `${SITE_URL}${localePath('en', normalizedPath)}`,
      'x-default': `${SITE_URL}${localePath('ar', normalizedPath)}`,
    },
  };
}
