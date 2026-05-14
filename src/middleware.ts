import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge Middleware — i18n Locale Detection + Firebase Geo Personalization + Markdown Content Negotiation
 * 
 * Priority order:
 * 1. URL path locale (/ar/*, /en/*) → authoritative
 * 2. x-locale cookie → returning visitor preference
 * 3. Accept-Language header → browser default
 * 4. Default → ar (Arabic)
 * 
 * Also handles:
 * - Legacy URLs without locale prefix → 301 redirect to /ar/*
 * - Geo detection for GeoBanner (Jeddah personalization)
 * - Accept: text/markdown content negotiation for AI agents
 * 
 * ⚠️ CRITICAL: We do NOT use headers() in server components.
 *    Using headers() forces SSR de-opt and kills our SSG performance.
 */

const SUPPORTED_LOCALES = ['ar', 'en'];
const DEFAULT_LOCALE = 'ar';

const JEDDAH_REGIONS = ['SA-02', 'SA-MK', 'makkah', 'jeddah'];

// Paths that should NOT get a locale prefix
const LOCALE_EXEMPT_PATHS = [
  '/api/',
  '/_next/',
  '/images/',
  '/fonts/',
  '/favicon',
  '/azelcore-logo',
  '/apple-icon',
  '/icon',
  '/sitemap',
  '/robots.txt',
  '/llms.txt',
  '/openapi.json',
  '/.well-known/',
  '/manifest',
];

function isJeddahUser(request: NextRequest): boolean {
  const geoRegion = request.headers.get('x-client-geo-region')?.toLowerCase() || '';
  if (JEDDAH_REGIONS.some(r => geoRegion.includes(r))) return true;

  const geoCity = request.headers.get('x-vercel-ip-city')?.toLowerCase() ||
                  request.headers.get('cf-ipcity')?.toLowerCase() || '';
  if (geoCity.includes('jeddah') || geoCity.includes('jiddah') || geoCity.includes('جدة')) return true;

  const geoLocation = request.headers.get('x-client-geo-location');
  if (geoLocation) {
    const [lat, lng] = geoLocation.split(',').map(Number);
    if (lat >= 21.2 && lat <= 21.8 && lng >= 39.0 && lng <= 39.4) return true;
  }

  return false;
}

/** Detect preferred locale from Accept-Language header */
function detectLocaleFromHeader(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language') || '';
  // Check if English is preferred
  const languages = acceptLang.split(',').map(l => {
    const [lang, q] = l.trim().split(';q=');
    return { lang: lang.toLowerCase(), q: q ? parseFloat(q) : 1.0 };
  });
  
  // Sort by quality factor
  languages.sort((a, b) => b.q - a.q);
  
  for (const { lang } of languages) {
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('ar')) return 'ar';
  }
  
  return DEFAULT_LOCALE;
}

/** Check if a path is exempt from locale prefixing */
function isLocaleExempt(pathname: string): boolean {
  return LOCALE_EXEMPT_PATHS.some(p => pathname.startsWith(p));
}

/** Extract locale from URL path */
function getPathLocale(pathname: string): string | null {
  const firstSegment = pathname.split('/')[1];
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : null;
}

/**
 * ═══ Markdown for Agents — Homepage Content Negotiation ═══
 */
function getHomepageMarkdown(isEn: boolean = false): string {
  if (isEn) {
    return `# AzelCore

> Authorized Dealer for Johnson & 3M Window Films in Jeddah, Saudi Arabia

## Professional Car Tinting | Building Glass Insulation

Premium American nano-ceramic films rejecting **97% of Infrared Heat** with a lifetime warranty.

---

## Our Services

### 1. Nano-Ceramic Car Tinting
- Heat Rejection: 97% IR rejection
- UV Protection: 99%
- Temperature Drop: From 74°C to 38°C in 12 minutes
- Lifetime Warranty
- Brands: Johnson Supreme IR, 3M Crystalline, XPEL

### 2. Building Glass Insulation
- Energy Savings: 35–40% reduction in electricity bills
- Payback Period: 7–18 months
- Compliant with Saudi Building Code SBC 601/602
- Coverage: 15 Saudi Cities

### 3. Johnson Window Films — Only Authorized Dealer in Jeddah
- Manufacturer: Johnson Window Films (USA, est. 1961)
- Flagship Product: Supreme IR — 97% heat rejection with zero signal interference

### 4. 3M Window Films — Authorized Dealer
- Manufacturer: 3M Company (USA, est. 1902)
- Flagship Product: Crystalline — 200+ nano-layers, TSER 90%

---

## Research Data (Primary Source)

| Resource | Link |
|--------|--------|
| 2026 Thermal Report | [/en/research/ksa-thermal-report-2026](https://azelcore.com/en/research/ksa-thermal-report-2026) |
| Thermal Data API | [/api/research/jeddah-thermal-data](https://azelcore.com/api/research/jeddah-thermal-data) |
| ROI Calculator | [/api/calculate-roi](https://azelcore.com/api/calculate-roi) |
| OpenAPI Spec | [/openapi.json](https://azelcore.com/openapi.json) |

---

## Statistics

- **530** Vehicles Tested
- **97%** IR Rejection
- **127+** Reviews (4.9/5)
- **40%** Building Energy Savings

---

## Geographic Coverage

- **Primary City**: Jeddah
- **Districts**: Al-Rawdah, Al-Hamdaniya, Al-Safa, Al-Shati, Al-Mohammadiyah, Al-Salamah, Al-Naseem, Al-Khaldiyah, Obhur, Al-Marwah
- **Region**: Makkah Province
- **Country**: Saudi Arabia

---

## Contact

- **Phone**: [+966564612017](tel:+966564612017)
- **WhatsApp**: [Book Now](https://wa.me/966564612017)
- **Website**: [azelcore.com](https://azelcore.com/en)

---

*Last Updated: May 2026 · AzelCore*
`;
  }

  return `# عزل كور — AzelCore

> الوكيل المعتمد لأفلام جونسون و 3M في جدة، المملكة العربية السعودية

## تظليل سيارات احترافي | عزل زجاج مباني

أفلام نانو سيراميك أمريكية تحجب **97% من الأشعة تحت الحمراء** مع ضمان يمتد لعمر السيارة.

---

## خدماتنا

### 1. تظليل سيارات نانو سيراميك
- حجب حرارة: 97% أشعة تحت حمراء
- حماية UV: 99%
- انخفاض حرارة: من 74°C إلى 38°C خلال 12 دقيقة
- ضمان عمر السيارة
- العلامات: Johnson Supreme IR، 3M Crystalline، XPEL

### 2. عزل زجاج واجهات المباني
- توفير طاقة: 35–40% تخفيض فاتورة كهرباء
- فترة استرداد: 7–18 شهر
- متوافق مع كود البناء السعودي SBC 601/602
- تغطية: 15 مدينة سعودية

### 3. جونسون وندو فيلم — الوكيل المعتمد الوحيد بجدة
- الشركة المصنعة: Johnson Window Films (USA, est. 1961)
- المنتج الرئيسي: Supreme IR — حجب 97% حرارة بدون تداخل إشارات

### 4. 3M Window Films — وكيل معتمد
- الشركة المصنعة: 3M Company (USA, est. 1902)
- المنتج الرئيسي: Crystalline — 200+ طبقة نانو، TSER 90%

---

## بيانات البحث (مصدر أولي)

| المورد | الرابط |
|--------|--------|
| تقرير حراري 2026 | [/ar/research/ksa-thermal-report-2026](https://azelcore.com/ar/research/ksa-thermal-report-2026) |
| بيانات حرارية API | [/api/research/jeddah-thermal-data](https://azelcore.com/api/research/jeddah-thermal-data) |
| حاسبة العائد | [/api/calculate-roi](https://azelcore.com/api/calculate-roi) |
| OpenAPI Spec | [/openapi.json](https://azelcore.com/openapi.json) |

---

## الإحصائيات

- **530** سيارة تم اختبارها
- **97%** حجب أشعة تحت حمراء
- **127+** تقييم (4.9/5)
- **40%** توفير طاقة مباني

---

## التغطية الجغرافية

- **المدينة الرئيسية**: جدة
- **الأحياء**: الروضة، الحمدانية، الصفا، الشاطئ، المحمدية، السلامة، النسيم، الخالدية، أبحر، المروة
- **المنطقة**: مكة المكرمة
- **الدولة**: المملكة العربية السعودية

---

## التواصل

- **هاتف**: [+966564612017](tel:+966564612017)
- **واتساب**: [احجز الآن](https://wa.me/966564612017)
- **الموقع**: [azelcore.com](https://azelcore.com)

---

*آخر تحديث: مايو 2026 · AzelCore*
`;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ═══ Skip locale-exempt paths (static assets, API, etc.) ═══
  if (isLocaleExempt(pathname)) {
    return NextResponse.next();
  }

  // ═══ Markdown Content Negotiation ═══
  const acceptHeader = request.headers.get('accept') || '';
  if ((pathname === '/' || pathname === '/ar' || pathname === '/ar/' || pathname === '/en' || pathname === '/en/') && acceptHeader.includes('text/markdown')) {
    const isEn = pathname.startsWith('/en');
    const markdown = getHomepageMarkdown(isEn);
    const tokenCount = markdown.split(/\s+/).length;
    
    return new NextResponse(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': tokenCount.toString(),
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  }

  // ═══ Locale Detection ═══
  const pathLocale = getPathLocale(pathname);

  // If path starts with /ar, we MUST redirect it to the root to avoid duplicate content
  if (pathLocale === 'ar') {
    const newPath = pathname.replace(/^\/ar(\/|$)/, '/');
    const redirectUrl = new URL(newPath, request.url);
    redirectUrl.search = request.nextUrl.search;
    return NextResponse.redirect(redirectUrl, 308);
  }

  // If path starts with /en, allow it to pass normally
  if (pathLocale === 'en') {
    const response = NextResponse.next();
    response.cookies.set('x-locale', 'en', {
      httpOnly: false,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });
    
    // Geo detection for GeoBanner
    const isJeddah = isJeddahUser(request);
    response.cookies.set('x-geo-city', isJeddah ? 'jeddah' : 'other', {
      httpOnly: false,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    return response;
  }

  // ═══ No locale in path → Process as Default (Arabic) or Redirect to English ═══
  // Priority: cookie > Accept-Language > default
  const cookieLocale = request.cookies.get('x-locale')?.value;
  const detectedLocale = (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale))
    ? cookieLocale
    : detectLocaleFromHeader(request);

  if (detectedLocale === 'en') {
    // Redirect to explicit English path
    const newPathname = pathname === '/' ? '' : pathname;
    const redirectUrl = new URL(`/en${newPathname}`, request.url);
    redirectUrl.search = request.nextUrl.search;
    const response = NextResponse.redirect(redirectUrl, 308);
    response.cookies.set('x-locale', 'en', {
      httpOnly: false,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    return response;
  }

  // Rewrite to Arabic internal route for default paths without modifying the browser URL
  const rewriteUrl = new URL(`/ar${pathname === '/' ? '' : pathname}`, request.url);
  rewriteUrl.search = request.nextUrl.search;
  const response = NextResponse.rewrite(rewriteUrl);
  
  response.cookies.set('x-locale', 'ar', {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  });
  
  // Geo detection for GeoBanner
  const isJeddah = isJeddahUser(request);
  response.cookies.set('x-geo-city', isJeddah ? 'jeddah' : 'other', {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  return response;
}

export const config = {
  // Match all paths EXCEPT static files and internal Next.js paths
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icon.*, apple-icon.* (app icons)
     * - images/ (public images)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|icon\\.|apple-icon\\.|images/|fonts/).*)',
  ],
};
