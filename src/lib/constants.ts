import type { Locale } from '@/lib/i18n';

export const SITE_URL = 'https://azelcore.com';
export const SITE_NAME = 'عزل كور';
export const SITE_NAME_EN = 'AzelCore';
/** Google Analytics 4 Measurement ID (public, exposed client-side by design). */
export const GA_MEASUREMENT_ID = 'G-TSKGYJ2X0G';
export const WHATSAPP = '+966564612017';
export const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=966564612017&text=${encodeURIComponent('السلام عليكم، أبي استفسر عن خدمات العزل والتظليل')}`;
export const PHONE = '+966564612017';
export const CRN = '4030253566';
export const VAT_ID = '311280328300003';
export const OWNER_NAME = 'محمد الهادي';
export const OWNER_NAME_EN = 'Mohammed Al-Hadi';
export const OWNER_TITLE = 'فني عزل وتظليل معتمد — وكيل جونسون و 3M الرسمي';
export const OWNER_TITLE_EN = 'Certified Insulation & Tinting Technician — Official Johnson & 3M Dealer';
export const GEO = { lat: 21.5424, lng: 39.1727 };
export const ADDRESS = 'طريق الملك فهد، حي الزهراء، جدة 23425، المملكة العربية السعودية';
export const ADDRESS_EN = 'King Fahd Road, Al-Zahra District, Jeddah 23425, Kingdom of Saudi Arabia';
export const ADDRESS_STRUCTURED = {
  streetAddress: 'طريق الملك فهد',
  addressLocality: 'جدة',
  addressRegion: 'منطقة مكة المكرمة',
  postalCode: '23425',
  addressCountry: 'SA',
  neighborhood: 'حي الزهراء',
};
export const ADDRESS_STRUCTURED_EN = {
  streetAddress: 'King Fahd Road',
  addressLocality: 'Jeddah',
  addressRegion: 'Makkah Region',
  postalCode: '23425',
  addressCountry: 'SA',
  neighborhood: 'Al-Zahra District',
};
export const WORKING_HOURS = 'السبت - الخميس: 8:00 ص - 10:00 م';
export const WORKING_HOURS_EN = 'Saturday – Thursday: 8:00 AM – 10:00 PM';

export const NAV_LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/car-insulation-jeddah', label: 'تظليل سيارات' },
  { href: '/building-glass-insulation', label: 'عزل مباني' },
  { href: '/calculator', label: 'حاسبة التكلفة' },
  { href: '/johnson-authorized-dealer', label: 'جونسون ⭐' },
  { href: '/3m-authorized-dealer', label: '3M ⭐' },
  { href: '/gallery', label: 'أعمالنا' },
  { href: '/blog', label: 'المدونة' },
  { href: '/contact', label: 'تواصل معنا' },
];

/** Get locale-aware nav links with proper locale prefix */
export function getNavLinks(locale: Locale) {
  const labels: Record<Locale, string[]> = {
    ar: ['الرئيسية', 'تظليل سيارات', 'عزل مباني', 'حاسبة التكلفة', 'جونسون ⭐', '3M ⭐', 'أعمالنا', 'المدونة', 'تواصل معنا'],
    en: ['Home', 'Car Tinting', 'Building Insulation', 'Cost Calculator', 'Johnson ⭐', '3M ⭐', 'Our Work', 'Blog', 'Contact Us'],
  };
  const hrefs = [
    '/', '/car-insulation-jeddah', '/building-glass-insulation', '/calculator',
    '/johnson-authorized-dealer', '/3m-authorized-dealer', '/gallery', '/blog', '/contact',
  ];
  return hrefs.map((href, i) => ({
    href: locale === 'ar' ? href : `/en${href === '/' ? '' : href}`,
    label: labels[locale][i],
  }));
}

/** Get locale-aware WhatsApp link */
export function getWhatsAppLink(locale: Locale): string {
  const messages: Record<Locale, string> = {
    ar: 'السلام عليكم، أبي استفسر عن خدمات العزل والتظليل',
    en: 'Hello, I would like to inquire about your insulation and tinting services',
  };
  return `https://api.whatsapp.com/send/?phone=966564612017&text=${encodeURIComponent(messages[locale])}`;
}

export const TRUST_STATS = [
  { value: 780, suffix: '+', label: 'سيارة تم تظليلها', icon: '🚗' },
  { value: 10, suffix: '', label: 'سنوات ضمان', icon: '🛡️' },
  { value: 97, suffix: '%', label: 'حجب الأشعة تحت الحمراء', icon: '🌡️' },
  { value: 4.9, suffix: '★', label: 'تقييم العملاء', icon: '⭐' },
];

/** Get locale-aware trust stats */
export function getTrustStats(locale: Locale) {
  const labels: Record<Locale, string[]> = {
    ar: ['سيارة تم تظليلها', 'سنوات ضمان', 'حجب الأشعة تحت الحمراء', 'تقييم العملاء'],
    en: ['Cars Tinted', 'Years Warranty', 'Infrared Rejection', 'Customer Rating'],
  };
  return TRUST_STATS.map((stat, i) => ({
    ...stat,
    label: labels[locale][i],
  }));
}
