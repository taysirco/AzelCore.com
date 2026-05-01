# 🏗️ AzelCore.com — الخطة الشاملة v2.0: البنية + التصميم + الأداء

> **آخر تحديث**: 1 مايو 2026 | **الحالة**: مراجعة نهائية قبل التنفيذ

## ═══ تدقيق الوضع الحالي ═══

| العنصر | الحالة | التفصيل | الثغرة المكتشفة |
|--------|--------|---------|-----------------|
| كود Next.js | ❌ صفر | لا `package.json` ولا `src/` | المشروع تخطيط فقط |
| طبقة البيانات | ✅ 17 ملف | entities, FAQs, NLP, pricing, schema, blog | **ثغرة**: لا يوجد `districts-content.ts` ولا `cities-content.ts` |
| الصور | ✅ 55 WebP | EXIF سعودي Samsung S24 Ultra | **ثغرة**: لا يوجد `favicon.ico` (WebP فقط) |
| الخطط | ✅ 3 ملفات | implementation + content_blueprint + images | **ثغرة**: لا يوجد ملف `next.config.ts` مخطط |
| Firebase | ❌ غير مُعَد | لا `firebase.json` ولا `apphosting.yaml` | يحتاج مشروع جديد |

> [!CAUTION]
> **7 بيانات حرجة = Placeholder**: الواتساب، CRN، VAT، GPS، GBP، عدد السيارات، اسم الفني. **يجب تعبئتها قبل الإطلاق وإلا Schema = كاذب = عقوبة E-E-A-T.**

---

## ═══ المرحلة 0: القرارات المعمارية الحرجة ═══

### لماذا Next.js 15 App Router وليس Vite/Astro؟

| المعيار | Next.js 15 | Astro | Vite SPA |
|---------|-----------|-------|----------|
| SSG + ISR | ✅ مدمج | ✅ | ❌ |
| Metadata API (SEO) | ✅ native | ❌ يدوي | ❌ |
| `generateStaticParams` (pSEO) | ✅ 125+ صفحة | ✅ | ❌ |
| Firebase App Hosting | ✅ دعم رسمي | ⚠️ محدود | ❌ |
| Streaming SSR | ✅ | ❌ | ❌ |
| Image Optimization | ✅ `next/image` | ⚠️ يدوي | ❌ |

### القرارات التقنية النهائية

```
✅ App Router (ليس Pages) — Metadata API + Streaming + Route Groups
✅ TypeScript Strict — البيانات الـ 17 ملف موجودة كـ .ts
✅ CSS Modules + CSS Variables — بدون Tailwind (تحكم كامل RTL)
✅ Turbopack — dev server أسرع 10x
✅ SSG لكل الصفحات — لا SSR إلا OG Images API
✅ `next/image` حصراً — WebP + lazy loading + fixed dimensions
❌ بدون App Router Intercepting Routes — تعقيد غير مبرر
❌ بدون Server Actions — لا backend مطلوب (واتساب فقط)
❌ بدون i18n routing — عربي فقط (الإنجليزي ≤5% من الترافيك)
```

---

## ═══ المرحلة 1: تهيئة المشروع (يوم 1-2) ═══

### 1.1 الأمر

```bash
npx -y create-next-app@latest ./ \
  --typescript --tailwind=false --eslint --app \
  --src-dir --import-alias "@/*" --turbopack
```

### 1.2 هيكل المجلدات (Silo-Enforced)

```
src/
├── app/
│   ├── layout.tsx                       ← Root: dir="rtl" + Schema Tier-0
│   ├── page.tsx                         ← الرئيسية
│   ├── globals.css                      ← Design System كامل
│   ├── not-found.tsx                    ← 404 مخصص (Crawl Safety)
│   ├── error.tsx                        ← Error boundary
│   │
│   ├── (local-jeddah)/                  ← 🚗 Route Group: لا يؤثر على URL
│   │   ├── layout.tsx                   ← Schema LocalBusiness (جدة فقط)
│   │   ├── car-insulation-jeddah/
│   │   │   ├── page.tsx                 ← Hub
│   │   │   └── [district]/
│   │   │       ├── page.tsx             ← pSEO حي
│   │   │       └── generateStaticParams ← 10 أحياء
│   │   └── thermal-cars/page.tsx
│   │
│   ├── (national-ksa)/                  ← 🏢 Route Group
│   │   ├── layout.tsx                   ← Schema Organization (وطني)
│   │   ├── building-glass-insulation/
│   │   │   ├── page.tsx                 ← Hub
│   │   │   └── [city]/
│   │   │       ├── page.tsx             ← pSEO مدينة
│   │   │       └── generateStaticParams ← 15 مدينة
│   │   └── thermal-windows/page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx                     ← فهرس + ItemList Schema
│   │   └── [slug]/page.tsx              ← مقال + Article Schema
│   ├── gallery/page.tsx
│   ├── calculator/page.tsx              ← Client Component (تفاعلي)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts                       ← Dynamic (125+ URL)
│   ├── robots.ts                        ← Defensive + GPTBot selective
│   └── api/og/route.tsx                 ← Dynamic OG (Edge Runtime)
│
├── components/
│   ├── layout/   [4]  ← Header, Footer, MobileMenu, Breadcrumb
│   ├── ui/       [10] ← Button, Card, Badge, Table, Slider, CountUp...
│   ├── sections/ [12] ← Hero, FAQ, Gallery, Testimonials, Process...
│   ├── schema/   [6]  ← Organization, LocalBusiness, FAQ, Article...
│   └── seo/      [3]  ← TldrBait, ComparisonTable, YMYLWarning
│
├── data/               ← الـ 17 ملف الموجودة + 3 جديدة
├── lib/
│   ├── schema-generator.ts    ← Factory: Silo-Aware JSON-LD
│   ├── seo-utils.ts           ← Canonical, Metadata, OG
│   ├── fonts.ts               ← next/font/google (self-hosted)
│   ├── constants.ts           ← URLs, phones, config
│   └── analytics.ts           ← GA4 + GTM events
└── styles/
    ├── design-tokens.css      ← CSS Variables
    ├── animations.css         ← Micro-animations (max 3)
    └── components/            ← CSS Modules per component
```

> [!WARNING]
> **Route Groups `(local-jeddah)` و `(national-ksa)`** لا تظهر في URL لكنها تفصل Schema تماماً. Layout كل مجموعة يحقن Schema مختلف — هذا يمنع خلط الكيانات الذي يعاقب عليه Google.

### 1.3 next.config.ts (مفقود في v1)

```typescript
const nextConfig = {
  output: 'standalone',          // Firebase App Hosting
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000,   // سنة كاملة
  },
  headers: async () => [{
    source: '/:path*',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }],
  experimental: {
    optimizeCss: true,           // CSS minification
  },
};
```

### 1.4 Firebase Config

```yaml
# apphosting.yaml
runConfig:
  cpu: 1
  memoryMiB: 512
  concurrency: 80
env:
  - variable: NEXT_PUBLIC_SITE_URL
    value: "https://azelcore.com"
  - variable: NEXT_PUBLIC_WHATSAPP
    value: "+966564612017"
```

---

## ═══ المرحلة 2: نظام التصميم (يوم 2-3) ═══

### 2.1 فلسفة التصميم

```
الحرارة والشمس = المشكلة     → ألوان حمراء/ذهبية (التحذير)
البرودة والعزل = الحل          → ألوان زرقاء/فيروزية (الراحة)
الصحراء والفخامة = الثقافة    → ذهبي + كحلي غامق (السعودية)
```

### 2.2 لوحة الألوان المتقدمة

| Token | القيمة | الدور | Psychology |
|-------|--------|-------|-----------|
| `--primary` | `hsl(210, 100%, 45%)` | أزرق ملكي | ثقة + برودة + تقنية |
| `--primary-glow` | `hsl(210, 100%, 60%)` | توهج CTA | انتباه + حداثة |
| `--secondary` | `hsl(35, 95%, 55%)` | ذهبي صحراوي | فخامة + سعودي |
| `--accent` | `hsl(185, 80%, 45%)` | فيروزي ❄️ | برودة + عزل (NEW) |
| `--danger` | `hsl(15, 90%, 55%)` | برتقالي حراري | حرارة + تحذير |
| `--success` | `hsl(150, 70%, 40%)` | أخضر سعودي | توفير + أمان |
| `--bg` | `hsl(220, 25%, 6%)` | أسود فحمي | فخامة + تركيز |
| `--surface` | `hsl(220, 20%, 11%)` | رمادي عميق | البطاقات |
| `--surface-elevated` | `hsl(220, 18%, 16%)` | سطح مرفوع | Hover states |
| `--glass` | `hsla(220, 20%, 15%, 0.6)` | زجاجي | Glassmorphism |
| `--text` | `hsl(220, 15%, 93%)` | أبيض دافئ | قراءة مريحة |
| `--text-muted` | `hsl(220, 10%, 55%)` | رمادي | نصوص ثانوية |

### 2.3 Typography System

```css
/* Self-hosted via next/font (أسرع من Google CDN) */
--font-ar: 'IBM Plex Sans Arabic';  /* العناوين + النصوص */
--font-en: 'Inter';                  /* الأرقام + التقني */
--font-mono: 'JetBrains Mono';       /* الأكواد + البيانات */

/* Scale — Major Third (1.25) */
--text-xs:  0.75rem;   /* 12px — captions */
--text-sm:  0.875rem;  /* 14px — body small */
--text-base: 1rem;     /* 16px — body */
--text-lg:  1.125rem;  /* 18px — lead */
--text-xl:  1.25rem;   /* 20px — h4 */
--text-2xl: 1.5rem;    /* 24px — h3 */
--text-3xl: 1.875rem;  /* 30px — h2 */
--text-4xl: 2.25rem;   /* 36px — h1 */
--text-5xl: 3rem;      /* 48px — hero */
--text-6xl: 3.75rem;   /* 60px — hero desktop */
```

### 2.4 مبادئ التصميم الذكية (12 مبدأ)

| # | المبدأ | التطبيق | السبب التقني |
|---|--------|---------|-------------|
| 1 | **RTL-First** | `dir="rtl"` + `lang="ar"` في Root | NLP scoring + UX |
| 2 | **Auto Dark/Light Mode** | Dark = الأساسي. Light يتفعل تلقائياً حسب الموقع + الساعة | Geolocation + Sunrise/Sunset API |
| 3 | **Glassmorphism** | Header + Service Cards | عمق بصري بدون ثقل |
| 4 | **Gradient Mesh** | Hero background متحرك | Wow factor + premium |
| 5 | **Glow Pulse** | أزرار CTA فقط | يوجه العين للتحويل |
| 6 | **CountUp on Scroll** | أرقام الثقة | Scroll depth signal |
| 7 | **Parallax Light** | خلفيات الأقسام (CSS only) | عمق بدون JS |
| 8 | **Hover Lift** | البطاقات (`translateY(-4px)`) | تفاعل حي |
| 9 | **Max 3 CSS Animations** | أي viewport visible | Battery-Aware (Lithium Index) |
| 10 | **Skeleton Loading** | الصور والبطاقات | CLS = 0 |
| 11 | **60fps Only** | `transform` + `opacity` فقط | لا `width/height` animations |
| 12 | **Reduced Motion** | `prefers-reduced-motion` | Accessibility + SEO |

### 2.5 Responsive Breakpoints

```css
--bp-mobile: 480px;    /* هاتف صغير */
--bp-tablet: 768px;    /* تابلت/هاتف كبير */
--bp-laptop: 1024px;   /* لابتوب */
--bp-desktop: 1280px;  /* شاشة كبيرة */
--bp-wide: 1536px;     /* شاشة واسعة */
```

**Mobile-First**: كل CSS يُكتب للموبايل أولاً ثم `min-width` للأكبر.

---

## ═══ المرحلة 3: المكونات (35 مكون — يوم 3-7) ═══

### 3.1 Layout (4 مكونات)

| المكون | المواصفات التفصيلية |
|--------|---------------------|
| `Header` | Glassmorphism sticky + شعار + 4 روابط + CTA واتساب + hamburger mobile. **Height**: 64px mobile / 72px desktop. **Backdrop-filter**: `blur(16px)` |
| `Footer` | 4 أعمدة: روابط، خدمات، تواصل، قانوني (CRN+VAT). **Map embed**: Google Maps static image (لا iframe — يقتل LCP). Schema `ContactPoint` |
| `MobileMenu` | Drawer من اليمين (RTL) + overlay `blur(8px)` + transition 300ms. **Close**: swipe يمين أو tap overlay |
| `Breadcrumb` | Auto-generated من pathname + Schema `BreadcrumbList`. **Separator**: `›`. **Structured**: Home → الخدمة → التفصيل |

### 3.2 UI (11 مكون)

| المكون | Props الأساسية | التفاصيل |
|--------|---------------|---------|
| `Button` | `variant`, `size`, `glow`, `loading` | 4 variants: primary (glow), secondary, ghost, danger |
| `Card` | `glass`, `hover`, `border` | Glass effect + `translateY(-4px)` hover + border glow |
| `Badge` | `color`, `size` | Dynamic colors حسب التصنيف |
| `ComparisonTable` | `data`, `highlight` | Responsive scroll + صف مميز بلون `--accent` |
| `BeforeAfterSlider` | `before`, `after`, `label` | Touch/mouse drag + divider line + labels |
| `CountUpNumber` | `target`, `duration`, `suffix` | Intersection Observer + `requestAnimationFrame` |
| `WhatsAppCTA` | `phone`, `message`, `delay` | Fixed bottom-left + popup delay 2s + pulse glow |
| `CopyButton` | `text`, `label` | Clipboard API + toast "تم النسخ" + GA4 event |
| `PriceReveal` | `price`, `hideLast` | إخفاء آخر 3 أرقام → click → reveal + GA4 event |
| `StarRating` | `rating`, `count` | SVG stars + `AggregateRating` Schema |
| `Accordion` | `items`, `allowMultiple` | CSS-only animation + `details/summary` HTML5 |

### 3.3 Sections (13 مكون)

| المكون | الأقسام التي يظهر فيها | Client/Server |
|--------|------------------------|---------------|
| `HeroSection` | الرئيسية + Hub | Server (SSG) |
| `TldrBait` | كل صفحة خدمة (أعلى) | Server |
| `TrustBar` | الرئيسية (4 أرقام) | Client (CountUp) |
| `ServiceCards` | الرئيسية (3 بطاقات) | Server |
| `FAQAccordion` | كل صفحة خدمة (5 أسئلة) | Server + Client |
| `TestimonialCarousel` | الرئيسية + خدمات | Client (swipe) |
| `GalleryGrid` | معرض + خدمات | Server + Client (slider) |
| `ProcessTimeline` | صفحات الخدمات | Server |
| `BrandLogos` | الرئيسية | Server |
| `Calculator` | صفحة الحاسبة | Client (interactive) |
| `ContactSection` | صفحة التواصل | Server + Client (form) |
| `YMYLWarning` | صفحات الخدمات | Server |
| `CrossSellCards` | أسفل كل خدمة | Server |

### 3.4 Schema (7 مكونات)

| المكون | يُحقن في | `@type` |
|--------|----------|---------|
| `SchemaOrganization` | Root Layout | `Organization` |
| `SchemaLocalBusiness` | `(local-jeddah)/layout.tsx` | `AutoRepair` |
| `SchemaService` | صفحات الخدمات | `Service` + `AggregateOffer` |
| `SchemaFAQ` | كل صفحة بها FAQ | `FAQPage` |
| `SchemaBreadcrumb` | كل صفحة فرعية | `BreadcrumbList` |
| `SchemaArticle` | المدونة | `Article` + `Speakable` |
| `SchemaWebSite` | Root Layout | `WebSite` + `SearchAction` **(NEW)** |

> [!IMPORTANT]
> **`SchemaWebSite` مفقود في v1** — يُفعّل Sitelinks Searchbox في Google. يحتاج `potentialAction: SearchAction` مع endpoint `/blog?q={search_term}`.

### ══ نظام Auto Dark/Light Mode الذكي ══

**المنطق**: الوضع الداكن هو الأساسي. ينتقل تلقائياً إلى Light Mode نهاراً حسب موقع المستخدم.

```typescript
// lib/theme-engine.ts
// 1. يحاول قراءة Geolocation API (بإذن المستخدم)
// 2. يحسب وقت الشروق/الغروب عبر solar algorithm
// 3. Fallback: يستخدم توقيت السعودية (شروق 5:30 / غروب 18:30)
// 4. يحفظ التفضيل في localStorage (إذا غيّر المستخدم يدوياً)

const getAutoTheme = (lat: number, lng: number): 'dark' | 'light' => {
  const { sunrise, sunset } = calculateSunTimes(lat, lng, new Date());
  const now = new Date();
  return (now > sunrise && now < sunset) ? 'light' : 'dark';
};

// CSS Variables تتبدل تلقائياً:
// [data-theme="light"] { --color-bg: hsl(220, 15%, 97%); ... }
// [data-theme="dark"]  { --color-bg: hsl(220, 25%, 6%); ... }

// Toggle يدوي في Header → يُلغي Auto ويحفظ في localStorage
```

**سلوك UX:**
- الدخول الأول → Auto (حسب الشمس)
- Toggle يدوي → يُحفظ كتفضيل دائم
- أيقونة ☀️/🌙 في Header

---

### ══ صفحة جونسون — وكيل معتمد ══

**URL**: `/johnson-authorized-dealer`
**النوع**: صفحة ثابتة (SSG) — أولوية Phase 1

**البنية:**
```
┌──────────────────────────────────────────┐
│ Hero: "عزل كور — وكيل جونسون المعتمد"   │
│ Badge: Johnson Authorized Dealer ⭐       │
├──────────────────────────────────────────┤
│ عن جونسون (1961 — 60+ سنة خبرة أمريكية) │
├──────────────────────────────────────────┤
│ 5 خطوط إنتاج سيارات:                    │
│  Supreme IR | InsulatIR | Marathon       │
│  Ray Guard Carbon | Renegade             │
├──────────────────────────────────────────┤
│ جدول مقارنة خطوط جونسون                  │
│ (VLT × TSER × IR × سعر × ضمان)          │
├──────────────────────────────────────────┤
│ خطوط المباني: NightScape + Sunlight      │
├──────────────────────────────────────────┤
│ 6 USPs: لماذا جونسون؟                    │
├──────────────────────────────────────────┤
│ Expert Review Box: محمد الهادي            │
│ "وكيل جونسون الرسمي + فني معتمد IWFA"   │
├──────────────────────────────────────────┤
│ CTA: "احصل على تظليل جونسون الأصلي"      │
└──────────────────────────────────────────┘
```

**Schema**: `Service` + `Brand` + `Offer` — يربط جونسون بالكيان

---

## ═══ المرحلة 4: بناء الصفحات (يوم 5-12) ═══

### ترتيب البناء (Dependency-Ordered)

| الدفعة | الصفحات | المدة | يعتمد على |
|--------|---------|-------|-----------|
| **D1** | Design System + Layout | يوم 2-3 | المرحلة 1 |
| **D2** | الرئيسية `/` | يوم 4-5 | D1 |
| **D3** | Hub سيارات + Hub مباني | يوم 5-6 | D1 + D2 components |
| **D4** | thermal-cars + thermal-windows | يوم 6-7 | D3 templates |
| **D5** | gallery + about + contact | يوم 7-8 | D1 |
| **D6** | calculator + blog index | يوم 8-9 | D1 |
| **D7** | blog/[slug] × 5 مقالات | يوم 9-10 | D6 |
| **D8** | pSEO أحياء × 10 | يوم 10-11 | D3 template |
| **D9** | pSEO مدن × 15 | يوم 11-12 | D3 template |
| **D10** | sitemap + robots + llms.txt + OG | يوم 12 | كل ما سبق |

### بنية الصفحة الرئيسية (12 قسم)

```
┌──────────────────────────────────────────┐
│ 1. Header (Glassmorphism sticky 64px)    │
├──────────────────────────────────────────┤
│ 2. Hero (gradient mesh + CTA glow)       │
│    H1 + subtitle + WhatsApp CTA          │
│    hero-car-tinting-jeddah.webp           │
├──────────────────────────────────────────┤
│ 3. TrustBar (4× CountUp)                │
│    780+ سيارة | 10yr ضمان | 97% IR | 4.9★│
├──────────────────────────────────────────┤
│ 4. ServiceCards (3× glass cards)         │
│    سيارات → مباني → حراري                │
├──────────────────────────────────────────┤
│ 5. ComparisonTable (AI Magnet)           │
│    7 أنواع × 9 أعمدة بيانات              │
├──────────────────────────────────────────┤
│ 6. BeforeAfter (3 sliders)               │
├──────────────────────────────────────────┤
│ 7. ProcessTimeline (6 خطوات)             │
├──────────────────────────────────────────┤
│ 8. YMYLWarning (تحذير التقليد)           │
├──────────────────────────────────────────┤
│ 9. TestimonialCarousel (6 شهادات)        │
├──────────────────────────────────────────┤
│ 10. BrandLogos (5 ماركات)                │
├──────────────────────────────────────────┤
│ 11. FAQAccordion (5 أسئلة + Schema)      │
├──────────────────────────────────────────┤
│ 12. Final CTA + Footer                   │
└──────────────────────────────────────────┘
```

---

## ═══ المرحلة 5: الأداء والأمان (يوم 12-14) ═══

### Performance Budget

| المعيار | الهدف | الآلية | القيد |
|---------|-------|--------|-------|
| LCP | < 1.2s | SSG + `next/image` priority | Hero image = `priority={true}` |
| INP | < 100ms | Server Components أولاً | Client = Calculator + Carousel فقط |
| CLS | 0.00 | `width` + `height` على كل `<Image>` | لا lazy load فوق fold |
| TTFB | < 200ms | Firebase Edge (جدة ME-WEST1) | `output: 'standalone'` |
| JS Bundle | < 80KB | `next/dynamic` للمكونات التفاعلية | Accordion = CSS-only |
| CSS | < 30KB | CSS Modules (tree-shaking تلقائي) | لا global CSS كبير |
| PageSpeed | **85-90 الأسبوع 1** | ثم 95+ تدريجياً | Anti-Synthetic Rule |

> [!CAUTION]
> **قاعدة Anti-Synthetic**: موقع جديد بـ 100/100 من اليوم الأول = Google يصنفه "Synthetic" = عقوبة. ابدأ بـ 85 وارفع تدريجياً.

### Security Headers

```typescript
// next.config.ts headers
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'X-Frame-Options', value: 'DENY' },
{ key: 'X-XSS-Protection', value: '1; mode=block' },
{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
```

---

## ═══ User Review Required ═══

> [!IMPORTANT]
> **7 أسئلة حرجة قبل كتابة سطر واحد:**
> 1. رقم الواتساب الحقيقي؟
> 2. السجل التجاري (CRN) والرقم الضريبي (VAT)؟
> 3. إحداثيات GPS الدقيقة للمحل/الورشة؟
> 4. مشروع Firebase جديد أم موجود؟
> 5. Dark Mode فقط أم Dark + Light toggle؟
> 6. هل نبدأ بالصفحة الرئيسية أم Hub خدمة؟
> 7. اسم صاحب المشروع/الفني للـ Expert Review Box؟

## Verification Plan

- `next build` = 0 errors + 0 warnings
- Lighthouse: LCP < 1.2s, INP < 100ms, CLS = 0
- Google Rich Results Test: كل Schema type
- Mobile RTL: iPhone SE + Samsung A14 + iPad
- WhatsApp deep link: يفتح chat صحيح
- Copy button: GA4 event fires
- Schema validator: schema.org + Google Testing Tool
