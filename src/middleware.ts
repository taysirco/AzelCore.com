import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge Middleware — Firebase Geo Personalization + Markdown Content Negotiation
 * 
 * 1. Reads Firebase App Hosting edge headers to detect Jeddah users.
 *    Sets a lightweight `x-geo-city` COOKIE (not header) so SSG pages
 *    remain fully static. A client component reads the cookie after hydration.
 * 
 * 2. Handles `Accept: text/markdown` content negotiation for AI agents
 *    per Markdown for Agents standard. Returns markdown representation
 *    of the homepage when agents request it.
 * 
 * ⚠️ CRITICAL: We do NOT use headers() in server components.
 *    Using headers() forces SSR de-opt and kills our SSG performance.
 * 
 * Performance: Redundant security headers REMOVED (already set in next.config.ts headers()).
 *    Duplicate header sets add ~0.5ms per request × thousands of requests = wasted compute.
 */

const JEDDAH_REGIONS = ['SA-02', 'SA-MK', 'makkah', 'jeddah'];

function isJeddahUser(request: NextRequest): boolean {
  // 1. Firebase App Hosting geo region header
  const geoRegion = request.headers.get('x-client-geo-region')?.toLowerCase() || '';
  if (JEDDAH_REGIONS.some(r => geoRegion.includes(r))) return true;

  // 2. Cloudflare/Vercel fallback
  const geoCity = request.headers.get('x-vercel-ip-city')?.toLowerCase() ||
                  request.headers.get('cf-ipcity')?.toLowerCase() || '';
  if (geoCity.includes('jeddah') || geoCity.includes('jiddah') || geoCity.includes('جدة')) return true;

  // 3. GPS bounding box
  const geoLocation = request.headers.get('x-client-geo-location');
  if (geoLocation) {
    const [lat, lng] = geoLocation.split(',').map(Number);
    if (lat >= 21.2 && lat <= 21.8 && lng >= 39.0 && lng <= 39.4) return true;
  }

  return false;
}

/**
 * ═══ Markdown for Agents — Homepage Content Negotiation ═══
 * When Accept: text/markdown is present, return a markdown representation
 * of the homepage instead of HTML. This allows AI agents to consume
 * structured content without parsing HTML.
 */
function getHomepageMarkdown(): string {
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
| تقرير حراري 2026 | [/research/ksa-thermal-report-2026](https://azelcore.com/research/ksa-thermal-report-2026) |
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
  // ═══ Markdown Content Negotiation ═══
  // If the agent requests text/markdown, return markdown instead of HTML
  const acceptHeader = request.headers.get('accept') || '';
  const pathname = request.nextUrl.pathname;
  
  if (pathname === '/' && acceptHeader.includes('text/markdown')) {
    const markdown = getHomepageMarkdown();
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

  const response = NextResponse.next();

  // Only compute geo for pages that actually use the GeoBanner
  const isJeddah = isJeddahUser(request);
  const geoValue = isJeddah ? 'jeddah' : 'other';

  // Set lightweight cookie — readable by client components via document.cookie
  // httpOnly: false so JS can read it. SameSite: Lax for security.
  response.cookies.set('x-geo-city', geoValue, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  return response;
}

export const config = {
  // Only run middleware on user-facing pages that use GeoBanner
  // Exclude static assets, API routes, and _next to minimize edge invocations
  matcher: [
    '/',
    '/car-insulation-jeddah',
    '/building-glass-insulation',
    '/johnson-authorized-dealer',
    '/3m-authorized-dealer',
    '/calculator',
    '/contact',
    '/gallery',
  ],
};
