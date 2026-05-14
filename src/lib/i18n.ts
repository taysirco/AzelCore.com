// ═══ AzelCore.com — Internationalization Core ═══
// Locale configuration, types, and helper functions
// Supports: Arabic (ar) as default, English (en) as secondary

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ar';

/** Validate a string is a supported locale */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/** Get text direction for a locale */
export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/** Get HTML lang attribute value */
export function getHtmlLang(locale: Locale): string {
  return locale === 'ar' ? 'ar' : 'en';
}

/** Get OG locale value */
export function getOgLocale(locale: Locale): string {
  return locale === 'ar' ? 'ar_SA' : 'en_US';
}

/** Get date locale string */
export function getDateLocale(locale: Locale): string {
  return locale === 'ar' ? 'ar-SA' : 'en-US';
}

/** Get the alternate locale */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

/** Get font priority class name based on locale */
export function getFontPriority(locale: Locale): string {
  return locale === 'ar' ? 'font-ar-primary' : 'font-en-primary';
}

/** Build a locale-prefixed path */
export function localePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ar') {
    return cleanPath === '/' ? '/' : cleanPath;
  }
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

/** Extract locale from a pathname */
export function extractLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return segments[0] as Locale;
  }
  return null;
}

/** Remove locale prefix from a pathname */
export function removeLocalePrefix(pathname: string): string {
  const locale = extractLocaleFromPath(pathname);
  if (locale) {
    return pathname.replace(`/${locale}`, '') || '/';
  }
  return pathname;
}
