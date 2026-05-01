# 🛡️ مشروع AzelCore - الخطة الشاملة للسيطرة على محركات البحث

> **البراند**: AzelCore | **النطاق**: AzelCore.com
> **المشروع**: موقع خدمات التظليل والعزل (سيارات + مباني + حراري) - جدة والمملكة
> **التقنية**: Next.js 15 (App Router) → Firebase App Hosting (Blaze Plan)
> **الهدف**: Top 3 في Google + الظهور في AI Overviews خلال 90 يوم

---

## 🔴 القسم 1: الهوية والنطاق

### البراند والنطاق ✅
- **الاسم**: AzelCore (عزل كور)
- **النطاق**: `AzelCore.com`
- **الاسم العربي للـ Schema**: "عزل كور - تظليل وعزل حراري"

### الإجراء الفوري
- [ ] ربط النطاق AzelCore.com بـ Firebase App Hosting
- [ ] إنشاء صفحة Wikidata (Q-ID) للكيان التجاري
- [ ] ربط Google Business Profile بالعنوان في جدة
- [ ] تسجيل السجل التجاري (CRN) وشهادة SBC

---

## 🔴 القسم 2: بنية Next.js التقنية

### ⚠️ هندسة الصوامع (Silo Architecture) - فصل الكيانات

> [!CAUTION]
> **قاعدة ذهبية**: الخوارزمية تكره التداخل الجغرافي. يجب فصل الكيان المحلي (سيارات جدة) عن الكيان الوطني (مباني المملكة) في مجلدات مستقلة تماماً.

| الصومعة | النطاق الجغرافي | Schema | GBP |
|---------|----------------|--------|-----|
| 🚗 عزل السيارات | **محلي - جدة فقط** | `LocalBusiness` + إحداثيات GPS | مربوط |
| 🏢 عزل المباني | **وطني - كل المملكة** | `Organization` + `areaServed: SA` | غير مربوط |
| 🌡️ العزل الحراري | **مختلط** | حسب السياق | حسب الصفحة |

### هيكل المجلدات (Silo-Based)
```
src/
├── app/
│   ├── layout.tsx                    ← Root Layout + Schema Tier-0
│   ├── page.tsx                      ← الصفحة الرئيسية
│   │
│   ├── (local-jeddah)/               ← 🚗 صومعة محلية - جدة
│   │   ├── car-insulation-jeddah/
│   │   │   ├── page.tsx              ← Hub: عزل السيارات جدة
│   │   │   └── [district]/
│   │   │       └── page.tsx          ← pSEO: عزل سيارات + حي
│   │   └── thermal-cars/
│   │       └── page.tsx              ← العزل الحراري للسيارات
│   │
│   ├── (national-ksa)/               ← 🏢 صومعة وطنية - المملكة
│   │   ├── building-glass-insulation/
│   │   │   ├── page.tsx              ← Hub: عزل زجاج المباني
│   │   │   └── [city]/
│   │   │       └── page.tsx          ← pSEO: عزل مباني + مدينة
│   │   └── thermal-windows/
│   │       └── page.tsx              ← العزل الحراري للنوافذ
│   │
│   ├── blog/
│   │   └── [slug]/page.tsx           ← مقالات خبيرة
│   ├── calculator/page.tsx           ← حاسبة تكلفة العزل
│   ├── gallery/page.tsx              ← معرض الأعمال
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts                    ← Dynamic Sitemap
│   ├── robots.ts                     ← Defensive Robots
│   └── api/
│       └── og/route.tsx              ← Dynamic OG Images
├── components/
│   ├── schema/                       ← JSON-LD Components
│   ├── ui/                           ← UI Components
│   ├── sections/                     ← Page Sections
│   └── TldrBait.tsx                  ← 🆕 مكون طُعم الخلاصة للـ AI
├── data/
│   ├── districts.ts                  ← أحياء جدة (70+ حي)
│   ├── cities.ts                     ← مدن المملكة
│   ├── services.ts                   ← بيانات الخدمات
│   └── comparison-tables.ts          ← 🆕 جداول مقارنة العزل
└── lib/
    ├── schema-generator.ts           ← JSON-LD Factory (Silo-Aware)
    ├── seo-utils.ts                  ← Meta Tags Generator
    └── performance.ts                ← Battery/Network APIs
```

### Firebase App Hosting Config
```json
// apphosting.yaml
runConfig:
  cpu: 1
  memoryMiB: 512
  concurrency: 80
env:
  - variable: NEXT_PUBLIC_SITE_URL
    value: "https://azelcore.com"
```

### Performance Architecture

| المعيار | الهدف | الآلية |
|---------|-------|--------|
| LCP | < 1.2s | **SSG (Static Site Generation)** لصفحات الخدمات |
| INP | < 100ms | Minimal Client JS |
| CLS | 0 | `next/image` حصراً بأبعاد ثابتة |
| TTFB | < 200ms | Firebase Edge Nodes (جدة + الرياض) |
| Battery | Zero-drain | Max 3 CSS animations, no autoplay |

> [!WARNING]
> **Anti-Synthetic Rule**: لا تستهدف 100/100 PageSpeed من اليوم الأول. ابدأ بـ 85-90 وارفع تدريجياً خلال 30 يوم.

### 🆕 استراتيجية الصور الحقيقية (Computer Vision Trap)

> [!IMPORTANT]
> خوارزمية الرؤية (Computer Vision) تفحص EXIF Metadata للصور وتتأكد أنها التقطت في السعودية. صور Stock المجانية = عقوبة E-E-A-T فورية.

| القاعدة | التفصيل |
|---------|--------|
| الصيغة | WebP أو AVIF فقط عبر `next/image` |
| المصدر | صور حقيقية بالهاتف لأعمال فعلية |
| EXIF | حافظ على GPS metadata (جدة) |
| التسمية | `nano-ceramic-lexus-jeddah-2026.webp` وليس `IMG_4532.jpg` |
| Alt Text | وصفي بالعربي: "عزل نانو سيراميك لكزس ES في جدة" |

---

## 🔴 القسم 3: الكلمات المفتاحية الاستراتيجية (60+ كلمة)

### Cluster 1 — تظليل سيارات (⭐ أعلى أولوية)
| الكلمة | النية | الأولوية |
|--------|-------|----------|
| تظليل سيارات جدة | شرائية | 🔴🔴🔴 |
| تظليل سيارات | معلوماتية/شرائية | 🔴🔴🔴 |
| أفضل محل تظليل سيارات في جدة | شرائية | 🔴🔴🔴 |
| محلات تظليل سيارات بجدة معتمدة | شرائية | 🔴🔴 |
| عروض تظليل سيارات في جدة | شرائية | 🔴🔴 |
| أسعار تظليل سيارات جدة | تجارية | 🔴🔴 |
| أرخص تظليل سيارات في جدة | تجارية | 🔴 |
| تظليل سيارات متنقل جدة | شرائية | 🔴🔴 |
| تظليل سيارات مع ضمان جدة | شرائية | 🔴🔴 |
| مركز تظليل سيارات جدة | شرائية | 🔴🔴 |

### Cluster 2 — تظليل عازل حراري (⭐ أعلى أولوية)
| الكلمة | النية | الأولوية |
|--------|-------|----------|
| تظليل عازل حراري للسيارات | شرائية | 🔴🔴🔴 |
| تظليل عازل حراري جدة | شرائية | 🔴🔴🔴 |
| تركيب عازل حراري سيارات جدة | شرائية | 🔴🔴🔴 |
| أفضل عازل حراري للسيارات في السعودية | معلوماتية | 🔴🔴 |
| عزل حراري سيارات | معلوماتية | 🔴🔴 |
| عزل سيارات جدة | شرائية | 🔴🔴🔴 |
| نسبة العزل الحراري للسيارات TSER | معلوماتية | 🔴 |

### Cluster 3 — نانو سيراميك + PPF + ماركات
| الكلمة | النية | الأولوية |
|--------|-------|----------|
| تظليل نانو سيراميك جدة | شرائية | 🔴🔴🔴 |
| نانو سيراميك سيارات جدة | شرائية | 🔴🔴 |
| تظليل نانو سيراميك مقابل كربوني | معلوماتية | 🔴🔴 |
| فيلم حماية سيارات PPF جدة | شرائية | 🔴🔴 |
| تظليل 3M سيارات جدة | شرائية (براند) | 🔴🔴 |
| تظليل LLumar جدة | شرائية (براند) | 🔴🔴 |
| تظليل XPEL جدة | شرائية (براند) | 🔴🔴 |
| تظليل SunTek جدة | شرائية (براند) | 🔴 |
| تظليل جونسون سيارات جدة | شرائية (براند) | 🔴 |
| تظليل أمريكي سيارات جدة | شرائية | 🔴🔴 |
| تظليل لا يؤثر على إشارات GPS | معلوماتية | 🔴 |

### Cluster 4 — القوانين والأنظمة (محتوى مدونة)
| الكلمة | النية | الأولوية |
|--------|-------|----------|
| قوانين تظليل السيارات السعودية | معلوماتية | 🔴🔴 |
| درجات التظليل المسموح بها المرور | معلوماتية | 🔴🔴🔴 |
| مخالفة تظليل السيارات جدة | معلوماتية | 🔴🔴 |
| هل التظليل الأمامي مسموح السعودية | معلوماتية | 🔴🔴 |
| نسبة التظليل 30% المرور | معلوماتية | 🔴 |

### Cluster 5 — تظليل مباني ونوافذ (وطني)
| الكلمة | النية | الأولوية |
|--------|-------|----------|
| تظليل مباني | شرائية | 🔴🔴🔴 |
| تظليل نوافذ المنازل | شرائية | 🔴🔴 |
| عزل زجاج واجهات مباني | شرائية | 🔴🔴🔴 |
| فيلم عزل حراري نوافذ | شرائية | 🔴🔴 |
| تظليل واجهات تجارية | شرائية | 🔴🔴 |
| تظليل مباني نانو سيراميك | شرائية | 🔴 |
| أسعار عزل حراري واجهات | تجارية | 🔴🔴 |
| عزل حراري شبابيك | شرائية | 🔴🔴 |
| تظليل نوافذ مباني الرياض | شرائية | 🔴🔴 |
| تظليل نوافذ مباني جدة | شرائية | 🔴🔴 |

### Cluster 6 — إنجليزي (مقيمين + B2B)
| الكلمة | النية |
|--------|-------|
| car window tinting Jeddah | شرائية |
| best heat rejection tint Jeddah | معلوماتية |
| nano ceramic tinting Jeddah | شرائية |
| building glass tinting Saudi Arabia | شرائية |
| legal window tint percentage Saudi | معلوماتية |

### Cluster 7 — Long-tail pSEO (توليد تلقائي)
```
# نمط أحياء جدة (70+ صفحة)
تظليل سيارات حي [الحي] جدة
أفضل محل تظليل سيارات [الحي] جدة
عزل حراري سيارات [الحي] جدة

# نمط ماركات السيارات (20+ صفحة)
تظليل [تويوتا/لكزس/هيونداي/BMW/مرسيدس] جدة
nano ceramic [ماركة] Jeddah

# نمط مدن المملكة - مباني (15+ صفحة)
تظليل مباني [الرياض/الدمام/مكة/المدينة]
عزل زجاج واجهات [المدينة]
عزل حراري نوافذ [المدينة]
```

---

## 🔴 القسم 4: هندسة JSON-LD (Silo-Aware - 7 طبقات)

### الطبقة 0 - الهوية المؤسسية (كل صفحة)
```json
{
  "@type": "Organization",
  "name": "عزل كور",
  "url": "https://azelcore.com",
  "logo": "https://azelcore.com/logo.png",
  "foundingDate": "2024",
  "taxID": "310XXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "جدة",
    "addressRegion": "منطقة مكة المكرمة",
    "addressCountry": "SA"
  },
  "sameAs": ["WIKIDATA_URL", "GOOGLE_BUSINESS_URL"]
}
```

### الطبقة 1A - LocalBusiness (🚗 صومعة السيارات فقط)
> يُحقن في صفحات `/car-insulation-jeddah/*` فقط
```json
{
  "@type": "AutoRepair",
  "name": "عزل كور - تظليل سيارات جدة",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.XXXXX",
    "longitude": "39.XXXXX"
  },
  "areaServed": { "@type": "City", "name": "جدة" },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "CRN", "value": "XXXXXXXXXX" }
  ]
}
```

### الطبقة 1B - Organization + Service (🏢 صومعة المباني فقط)
> يُحقن في صفحات `/building-glass-insulation/*` فقط - بدون ربط بـ GBP
```json
{
  "@type": "Service",
  "serviceType": "عزل زجاج واجهات المباني",
  "provider": { "@type": "Organization", "name": "عزل كور" },
  "areaServed": { "@type": "Country", "name": "المملكة العربية السعودية" }
}
```

### الطبقة 2 - Service + AggregateOffer (لكل خدمة)
### الطبقة 3 - FAQPage Schema (5 أسئلة/صفحة - يسرقها AI مباشرة)
### الطبقة 4 - BreadcrumbList
### الطبقة 5 - ItemList (صفحات التصنيف)
### الطبقة 6 - Speakable + ReserveAction (البحث الصوتي + الحجز)

---

## 🔴 القسم 5: بنية الصفحات البرمجية (pSEO)

### خريطة التوليد التلقائي

| النمط | عدد الصفحات | مثال |
|-------|-------------|------|
| خدمة + حي جدة | ~70 صفحة | `/car-tinting/al-rawdah` |
| خدمة + مدينة | ~15 صفحة | `/building-glass/riyadh` |
| نوع عزل + تطبيق | ~20 صفحة | `/thermal/nano-ceramic` |
| مقالات مدونة | ~20 مقال | `/blog/best-car-tint-2026` |
| **المجموع** | **~125+ صفحة** | |

### مبدأ Information Gain
كل صفحة pSEO يجب أن تكون فريدة بمحتوى حقيقي:

```typescript
// مثال: حقن بيانات مناخية لكل حي
const districtData = {
  'al-rawdah': {
    avgTemp: '38°C',
    humidity: '78%',
    uvIndex: 'Very High (11+)',
    saltCorrosion: 'عالي - قرب البحر',
    recommendation: 'نانو سيراميك + طبقة حماية ملحية'
  },
  'al-hamdaniya': {
    avgTemp: '42°C',
    humidity: '45%',
    uvIndex: 'Extreme (12+)',
    saltCorrosion: 'منخفض - بعيد عن الساحل',
    recommendation: 'فيلم حراري 3M CR70 + تظليل 15%'
  }
};
```

---

## 🔴 القسم 6: المحتوى والتحويل

### 🆕 مكون طُعم الخلاصة (TL;DR Bait) - أعلى كل صفحة خدمة
> الـ AI التوليدي لا يقرأ المقالات الطويلة. يستخلص "مكعبات بيانات مركزية" فقط.

```tsx
// components/TldrBait.tsx
const TldrBait = ({ summary }: { summary: string }) => (
  <div className="tldr-bait" role="complementary" aria-label="ملخص الخدمة">
    <p>{summary}</p>
  </div>
);
// مثال الاستخدام:
// "نقدم أفضل عزل حراري للسيارات في جدة لتقليل الحرارة بنسبة 80%،
//  بضمان يصل لـ 10 سنوات. أسعار تبدأ من 500 ر.س"
```

### 🆕 جداول مقارنة HTML (AI Magnet)
> الذكاء الاصطناعي مهووس بوسوم `<table>`. برمج جداول مقارنة حقيقية.

| نوع العزل | نسبة حجب الحرارة | حجب UV | حجب IR | السعر التقريبي |
|-----------|-----------------|--------|--------|---------------|
| نانو سيراميك | 95% | 99% | 97% | 1500-3000 ر.س |
| فيلم 3M CR70 | 70% | 99% | 60% | 800-1500 ر.س |
| تظليل عادي | 40% | 70% | 30% | 300-600 ر.س |

### صفحة Hub لكل خدمة تحتوي:
1. **🆕 TL;DR Bait** - مربع 50 كلمة في الأعلى (يسرقه AI حرفياً)
2. **Hero Section** - عنوان + CTA + رقم واتساب
3. **🆕 جدول مقارنة `<table>`** - أنواع العزل (UV, IR, حرارة, سعر)
4. **قسم "لماذا العزل؟"** - إحصائيات حقيقية
5. **حاسبة تكلفة** - أداة تفاعلية (Copy Event = Navboost)
6. **معرض أعمال** - صور حقيقية (EXIF سعودي) قبل/بعد
7. **شهادات عملاء** - بالعامية السعودية
8. **FAQ** - 5 أسئلة مع FAQPage Schema
9. **CTA نهائي** - واتساب + اتصال + نموذج

### Anti-Bounce Engineering
- **إخفاء السعر الكامل**: "السعر يبدأ من ٥٠٠ ر.س - [اضغط لمعرفة السعر الدقيق]"
- **تأخير واتساب 2 ثانية**: Popup "جاري تجهيز عرض سعر خاص..." → يسجل Interaction Event
- **زر نسخ الرقم**: كل نسخة = Copy Event = إشارة Navboost قوية

---

## 🔴 القسم 7: AI Search & SGE Optimization

### الظهور في AI Overviews (Gemini/ChatGPT)
1. **🆕 TL;DR Bait في أعلى كل صفحة** - الـ AI ينسخ هذه الفقرة حرفياً
2. **🆕 جداول `<table>` مهيكلة** - AI مهووس بالجداول ويستخلصها أولاً
3. **Speakable Schema**: تحديد فقرات محددة للقراءة الصوتية
4. **Dataset Schema**: نشر بيانات إحصائية (مؤشر أسعار العزل)
5. **FAQ المهيكل**: أسئلة محادثية - AI يسرق إجاباته من هنا مباشرة
6. **Bait & Hook**: معلومة كافية للـ AI لكن الحجز/السعر الدقيق خلف تفاعل

### ملف `llms.txt`
```
# AzelCore - عزل كور
> خدمات عزل السيارات والمباني في جدة والمملكة العربية السعودية

## الخدمات
- عزل حراري للسيارات (نانو سيراميك، 3M، لومار)
- عزل زجاج واجهات المباني (فيلم حراري، عاكس، أمان)
- تظليل نوافذ (سيارات ومباني)

## التغطية
- جدة: جميع الأحياء (70+ حي)
- المباني: جميع مدن المملكة

## Contact
- WhatsApp: +966-5X-XXX-XXXX
- Website: https://azelcore.com
```

---

## 🔴 القسم 8: بروتوكول الإطلاق (90 يوم)

### المرحلة 1: التأسيس (أسبوع 1-2)
- [ ] بناء Next.js + Deploy على Firebase App Hosting
- [ ] الصفحة الرئيسية + 3 صفحات Hub رئيسية
- [ ] JSON-LD الطبقة 0 + 1
- [ ] Google Search Console + Analytics
- [ ] Google Business Profile
- [ ] تسجيل Indexing API → Push أول 5 صفحات
- [ ] PageSpeed Target: **85-90** (ليس 100!)
- [ ] `robots.txt` + `sitemap.xml` + `llms.txt`

### المرحلة 2: التوسع (أسبوع 3-4)
- [ ] إضافة 30 صفحة pSEO (أحياء جدة الرئيسية)
- [ ] JSON-LD الطبقة 2 + 3 (Service + FAQ)
- [ ] حاسبة تكلفة العزل التفاعلية
- [ ] معرض الأعمال (قبل/بعد)
- [ ] 5 مقالات مدونة خبيرة
- [ ] Indexing API → Push 30 صفحة إضافية
- [ ] تفعيل Copy/Share buttons

### المرحلة 3: الاختراق (أسبوع 5-8)
- [ ] استكمال 70+ صفحة أحياء جدة
- [ ] إضافة 15 صفحة مدن المملكة (عزل المباني)
- [ ] JSON-LD الطبقة 4 + 5 (Breadcrumb + ItemList)
- [ ] Dynamic OG Images لواتساب
- [ ] Speculation Rules API
- [ ] 10 مقالات إضافية
- [ ] حملة "ابحث في جوجل عن: [البراند]"

### المرحلة 4: السيطرة (أسبوع 9-12)
- [ ] JSON-LD الطبقة 6 (Speakable + ReserveAction)
- [ ] Dataset Schema + مؤشر أسعار العزل
- [ ] رفع PageSpeed إلى 95-100 تدريجياً
- [ ] PR + روابط خارجية
- [ ] استكمال جميع الصفحات (125+)

---

## 🔴 القسم 9: Robots.txt & Crawl Management

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      },
      {
        userAgent: 'GPTBot',
        allow: ['/blog/', '/'],
        disallow: ['/calculator/', '/api/']
      }
    ],
    sitemap: 'https://azelcore.com/sitemap.xml'
  }
}
```

---

## 🔴 القسم 10: الهندسة السلوكية

| التكتيك | الهدف | التأثير |
|---------|-------|---------|
| إخفاء آخر 3 أرقام الهاتف | INP Score ممتاز | كل زائر يسجل تفاعل |
| تأخير واتساب 2 ثانية | منع Bounce | GA4 يسجل Success Event |
| زر نسخ الرقم/السعر | Navboost Copy Signal | أقوى إشارة رضا |
| حاسبة تفاعلية | Time on Page | Tab Hoarding Signal |
| "ابحث عنا في جوجل" | Brand Search Spike | Knowledge Panel |
| شارك عبر واتساب + OG ديناميكي | Dark Social | CTR 400% |

---

## User Review Required

> [!IMPORTANT]
> **اختيار اسم البراند والنطاق**: هذا هو القرار الأول والأهم. ما الاسم الذي تفضله؟ هل لديك نطاق محجوز؟

> [!IMPORTANT]
> **السجل التجاري**: هل لديك سجل تجاري في جدة؟ وجوده يفتح باب الـ E-E-A-T الكامل (Google Business Profile + Knowledge Panel).

> [!IMPORTANT]
> **مشروع Firebase**: هل تريد إنشاء مشروع Firebase جديد أم لديك مشروع قائم؟

## Open Questions

1. ما اسم البراند والنطاق المختار؟
2. هل لديك صور حقيقية لأعمال سابقة (قبل/بعد)؟
3. هل الخدمة تغطي كل أحياء جدة أم أحياء محددة؟
4. ما هي ماركات العزل المستخدمة (3M, LLumar, XPEL, SunTek)؟
5. ما نطاق الأسعار التقريبي لكل خدمة؟
6. هل تريد نظام حجز مواعيد أونلاين أم واتساب فقط؟

## Verification Plan

### Automated Tests
- Lighthouse CI: LCP < 1.2s, INP < 100ms, CLS = 0
- Schema Validator: Google Rich Results Test لكل نوع صفحة
- Sitemap Validator: جميع URLs مفهرسة وصالحة
- Mobile-first audit عبر Chrome DevTools

### Manual Verification
- Google Search Console: تأكد من فهرسة جميع الصفحات
- Rich Results: ظهور النجوم/FAQ/Breadcrumbs في SERPs
- AI Search: اختبار الظهور في Gemini و ChatGPT
- PageSpeed: مراقبة أسبوعية للأداء
