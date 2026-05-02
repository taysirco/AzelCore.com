# 🏗️ AzelCore.com — الخطة الهندسية الشاملة v3.0
# دمج: البنية التقنية + SEO Content + الميثاق الهندسي YMYL

> **آخر تحديث**: 3 مايو 2026 | **3 مصادر مدمجة**
>
> هذا المستند = **بنية هندسية خوارزمية** تجمع بين:
> 1. `implementation_plan.md` — البنية التقنية (Next.js 15 + Firebase)
> 2. `seo_content_plan.md` — هندسة JSON-LD + pSEO + الفهرسة
> 3. الميثاق الهندسي v5.0 — E-E-A-T + NLP + AEO + Trust Architecture

> [!CAUTION]
> هذا الملف هو المرجع الأساسي الوحيد. كل بيانات الخبراء والكيانات والروابط هنا هي المصدر الحقيقي الوحيد.

---

## ═══ الجزء 1: الهوية والقرارات المعمارية ═══

### 1.1 — هوية الموقع

| البند | القيمة |
|---|---|
| الاسم | عزل كور (AzelCore) |
| الدومين | azelcore.com |
| المالك | محمد الهادي — فني عزل وتظليل معتمد |
| الهاتف/واتساب | +966564612017 |
| CRN | 4030253566 |
| VAT | 311280328300003 |
| العنوان | طريق الملك فهد، حي الزهراء، جدة 23425 |
| GPS | 21.5424, 39.1727 |
| الصومعة المحلية | تظليل سيارات جدة (70+ حي) |
| الصومعة الوطنية | عزل زجاج مباني (15 مدينة) |
| الشهادات | Johnson Authorized Dealer + IWFA |

### 1.2 — لماذا Next.js 15 App Router؟

```
✅ App Router — Metadata API + Streaming + Route Groups
✅ TypeScript Strict — 17+ ملف بيانات .ts
✅ CSS Modules + CSS Variables — تحكم RTL كامل بدون Tailwind
✅ SSG لكل الصفحات — لا SSR إلا OG Images API
✅ Firebase App Hosting (standalone output)
❌ بدون i18n — عربي فقط
❌ بدون Server Actions — واتساب فقط
```

### 1.3 — هيكل Route Groups (Silo-Enforced)

```
src/app/
├── layout.tsx                    ← Root: dir="rtl" + Schema Tier-0
├── (local-jeddah)/               ← 🚗 Schema LocalBusiness (جدة فقط)
│   ├── car-insulation-jeddah/[district]/
│   └── thermal-cars/
├── (national-ksa)/               ← 🏢 Schema Organization (وطني)
│   ├── building-glass-insulation/[city]/
│   └── thermal-windows/
├── blog/[slug]/
├── gallery/ | about/ | contact/ | calculator/
├── johnson-authorized-dealer/
├── sitemap.ts | robots.ts
└── api/og/route.tsx              ← Dynamic OG (Edge Runtime)
```

> [!WARNING]
> Route Groups تفصل Schema تماماً. Layout كل مجموعة يحقن Schema مختلف — هذا يمنع خلط الكيانات.

---

## ═══ الجزء 2: نظام التصميم ═══

### الألوان (Dark-First + Auto Light)

| Token | القيمة | الدور |
|---|---|---|
| `--primary` | `hsl(210, 100%, 45%)` | أزرق ملكي — ثقة + تقنية |
| `--secondary` | `hsl(35, 95%, 55%)` | ذهبي صحراوي — فخامة |
| `--accent` | `hsl(185, 80%, 45%)` | فيروزي — برودة + عزل |
| `--danger` | `hsl(15, 90%, 55%)` | برتقالي — حرارة + تحذير |
| `--success` | `hsl(150, 70%, 40%)` | أخضر سعودي — توفير |
| `--bg` | `hsl(220, 25%, 6%)` | أسود فحمي |

### Typography: IBM Plex Sans Arabic + Inter + JetBrains Mono
### مبادئ: RTL-First, Glassmorphism, Glow Pulse CTAs, Max 3 CSS Animations, 60fps only

---

## ═══ الجزء 3: E-E-A-T — ركيزة YMYL ═══

### 3.1 — لماذا YMYL؟

كل قطاعاتنا YMYL:
- **تظليل سيارات**: سلامة الزجاج + UV (صحة) + مخالفات مالية
- **عزل مباني**: سلامة هيكلية + توفير طاقة (مال) + كود بناء SBC
- **عزل حراري**: فواتير كهرباء + أمان ركاب

### 3.2 — الجهات الحكومية (Trust Anchors)

| المفتاح | الكيان | الرابط |
|---|---|---|
| `GOV.SASO` | الهيئة السعودية للمواصفات والمقاييس | https://www.saso.gov.sa |
| `GOV.SBC` | كود البناء السعودي | https://sbc.gov.sa |
| `GOV.SEEC` | المركز السعودي لكفاءة الطاقة | https://seec.gov.sa |
| `GOV.SCE` | الهيئة السعودية للمهندسين | https://www.saudieng.sa |

### 3.3 — الخبراء الحقيقيون

| المفتاح | الاسم | اللقب | الحساب |
|---|---|---|---|
| `EXPERTS.ALJUND` | م. عبدالغني الجند | مؤلف موسوعة "أخطاء في البناء" | [x.com/ssrrr22](https://x.com/ssrrr22) |
| `EXPERTS.ALMOHAIMED` | م. ماجد المحيميد | خبير جودة تشطيبات وعزل | [x.com/majedalmohaimed](https://x.com/majedalmohaimed) |
| `EXPERTS.ALMISNID` | أ.د. عبدالله المسند | أستاذ جغرافيا المناخ | [x.com/ALMISNID](https://x.com/ALMISNID) |

### 3.4 — Expert Review Box (إلزامي في كل صفحة)

```html
<div class="expert-review-box">
  ✍️ إعداد: فريق تحرير عزل كور
  🔍 المراجعة الفنية: محمد الهادي — فني عزل وتظليل معتمد (Johnson + IWFA)
</div>
```

### 3.5 — التطبيق في كل صفحة

```
1. trustAnchors — 1-2 جهة حكومية بروابطها (SASO, SBC, SEEC)
2. expertReviewBox — محمد الهادي (المالك المعتمد)
3. officialSources — روابط 3M, Johnson, LLumar, XPEL الرسمية
4. saudiRegulations — SASO, كود البناء SBC 601/602, نظام المرور
5. verificationBadges — Johnson Authorized + IWFA Certified
```

---

## ═══ الجزء 4: هندسة JSON-LD (9 طبقات) ═══

| الطبقة | `@type` | أين يُحقن |
|---|---|---|
| 0 | `Organization` | Root Layout |
| 0b | `WebSite` + `SearchAction` | Root Layout |
| 1A | `AutoRepair` + `LocalBusiness` | `(local-jeddah)/layout` |
| 1B | `Service` + `Organization` | `(national-ksa)/layout` |
| 2 | `Service` + `AggregateOffer` | صفحات الخدمات |
| 3 | `FAQPage` | كل صفحة بها FAQ |
| 4 | `BreadcrumbList` | كل صفحة فرعية |
| 5 | `Article` + `Speakable` | المدونة |
| 6 | `WarrantyPromise` | صفحات الخدمات |

### قواعد حرجة
- `dateModified` **ثابت** (لا `new Date()`)
- `AggregateRating.reviewCount` يبدأ `0`
- CRN/VAT يتطابق مع سجلات حكومية
- GPS فقط في صومعة السيارات

---

## ═══ الجزء 5: القواعد الصفرية للمحتوى ═══

### 5.1 — ممنوع كليشيهات AI
| ✗ ممنوع | ✓ البديل |
|---|---|
| "في الختام" | (احذف) |
| "نقدم لكم أفضل خدمات" | "نانو سيراميك بنسبة حجب 97% IR" |
| "نسعى جاهدين" | "ضمان 10 سنوات + فحص مجاني بعد 6 أشهر" |
| "من الجدير بالذكر" | ابدأ بالمعلومة مباشرة |

### 5.2 — الكثافة الدلالية
كل فقرة = **رقم دقيق** + **اسم تقنية/ماركة** + **نتيجة قابلة للقياس**

### 5.3 — التباين اللغوي (Burstiness)
تنويع حاد: "97% حجب IR." ثم جملة 25 كلمة تشرح التقنية.

### 5.4 — النبرة: خبير تقني صادق
✓ "التظليل العادي مش هيفيدك لو سيارتك واقفة بالشمس 8 ساعات"
✗ "نقدم أفضل خدمات التظليل في المملكة!"

---

## ═══ الجزء 6: NLP السعودي — جسر سياقي ═══

### جدة
| الفئة | المصطلحات |
|---|---|
| أحياء | الصفا، النزهة، الزهراء، أبحر، الحمدانية، المروة، الشاطئ |
| مناخ | رطوبة 60-90%، Heat Index 55-60°م، ملوحة بحرية |
| عزل | العزل المائي أهم من الحراري، Closed-Cell فوم فقط |

### الجسر السياقي (Contextual Bridging)
```
"فيلم النانو سيراميك (تظليل عازل حراري) يحجب 97% من الأشعة تحت الحمراء.
يعني سيارتك اللي واقفة بشمس جدة 8 ساعات — بدل ما تولع من الحر
(ترتفع حرارة المقصورة لـ 72°م)، الحرارة تنزل لـ 38°م."
```

---

## ═══ الجزء 7: هيكل صفحة الخدمة (12 عنصر إلزامي) ═══

```
 1. meta.title: [الخدمة] [المدينة] — [الميزة] | AzelCore (2026)
 2. meta.description: 155 حرف — الخدمة + الرقم + CTA
 3. H1: الخدمة + المدينة + القيمة المضافة
 4. Quick Answer (40-60 كلمة — المعادلة المعمارية)
 5. جدول مقارنة الأنواع (نانو vs 3M vs كربوني — بأرقام TSER, UV, IR)
 6. قسم "لماذا العزل؟" — بالأرقام
 7. FAQ (5 أسئلة YMYL — عامية + فصحى)
 8. تحذيرات المشتري (2-3)
 9. Expert Review Box
10. معرض أعمال — قبل/بعد
11. خدمات مكملة (Cross-sell سببي — 5-7 خدمات)
12. Schema: Service + FAQ + LocalBusiness + BreadcrumbList
```

---

## ═══ الجزء 8: AEO — الظهور في AI Overviews ═══

### معادلة Quick Answer (TL;DR Bait)
```
"على عكس [المشكلة الشائعة] التي تسبب [الضرر المحدد]،
يتميز [الخدمة/المنتج] بتقنية [التقنية + رقم].
في ظل [تحدي مناخي سعودي]، يوفر لك [الميزة + رقم]،
مع [الضمان] — مما يجعله [القيمة النهائية]."
```

### قواعد AEO
1. إجابة قاطعة في أول 60 كلمة — لا مقدمات
2. FAQ بصيغة "كيف/ليش/متى/كم"
3. أرقام محددة في أول 20 كلمة
4. جداول `<table>` للمقارنات
5. Schema كامل ومطابق

---

## ═══ الجزء 9: pSEO — 25+ صفحة برمجية ═══

### أحياء جدة (10 أحياء)
كل صفحة: H1 محلي + بيانات مناخية + توصية فيلم مبررة + 3 FAQ محلية + CTA محلي

### مدن المملكة (15 مدينة)
كل صفحة: نوع المباني حسب المدينة + تقدير التوفير المخصص + Schema Service

---

## ═══ الجزء 10: الأداء والأمان ═══

| المعيار | الهدف |
|---|---|
| LCP | < 1.2s |
| INP | < 100ms |
| CLS | 0.00 |
| JS Bundle | < 80KB |
| PageSpeed | **85-90 أسبوع 1** → 95+ تدريجياً |

> **Anti-Synthetic**: موقع جديد بـ 100/100 = Google يصنفه Synthetic = عقوبة.

---

## ═══ الجزء 11: بروتوكول الإطلاق (90 يوم) ═══

### 🔴 Phase 1 (أسبوع 1-2): Foundation
- Next.js 15 + Design System + Root Layout
- الرئيسية (12 قسم) + Hub سيارات + Hub مباني
- صفحة جونسون + Schema Tier 0-1
- robots.ts + sitemap.ts + llms.txt + favicon
- Firebase Deploy + GSC + GA4
- Indexing API: Push 6 صفحات

### 🟡 Phase 2 (أسبوع 3-4): Expansion
- thermal-cars + thermal-windows + Gallery + About + Contact
- Calculator + 5 مقالات مدونة
- Dynamic OG Images + Copy/Share
- Push 15 صفحة

### 🟢 Phase 3 (أسبوع 5-8): Penetration
- 10 pSEO أحياء + 15 pSEO مدن
- 5 مقالات إضافية + Schema Tier 4-5
- Push 25 صفحة

### ⚡ Phase 4 (أسبوع 9-12): Domination
- Schema Tier 6-8 (Speakable + Dataset + Warranty)
- PageSpeed 90→95→98
- PR + روابط خارجية
- حملة Brand Search "عزل كور"

---

## ═══ الجزء 12: الهندسة السلوكية (Navboost) ═══

```
الزائر → TL;DR Bait (5 ثواني) → Scroll CountUp → جدول مقارنة (15 ثانية)
→ Before/After slider → FAQ click → CTA واتساب → GA4 Event
```
**النتيجة**: 60+ ثانية + 4+ تفاعلات = Navboost ممتاز

---

## ═══ الجزء 13: Internal Linking — هرم السلطة ═══

```
مقالات المدونة (قوانين، مقارنات، أدلة)
         ↓ ↓ ↓ ↓ ↓
    صفحات الخدمات Hub ← تحويل (واتساب)
         ↕ ↕ ↕ ↕ ↕
  صفحات خدمات مكمّلة (Cross-sell سببي)
```

⛔ لا تضع "مقالات ذات صلة" في صفحات الخدمات — صفحة الخدمة = صفحة تحويل فقط.

---

## ═══ الجزء 14: قائمة فحص الجودة (15 نقطة) ═══

```
□ Quick Answer مبني حسب المعادلة المعمارية (40-60 كلمة)؟
□ الأرقام من الداتاشيت الرسمي (TSER, VLT, UV%)؟
□ 5 أسئلة FAQ (قانون، توافق، مقارنة، عامية، ضمان)؟
□ جدول <table> مقارنة بالأرقام؟
□ 3+ مصطلحات سعودية عامية (Contextual Bridging)؟
□ تحذير واحد على الأقل (فيلم مقلد، خطأ شائع)؟
□ فقرات ≤ 4 أسطر والجمل متنوعة (Burstiness)؟
□ لا كليشيهات AI؟
□ خدمات مكمّلة بربط سببي؟
□ Schema Service + FAQ + LocalBusiness صحيح؟
□ صور حقيقية بـ EXIF سعودي؟
□ CTA دقيق ("احجز موعدك — واتساب")؟
□ Sentiment U-Curve (مشكلة → حل تقني → ضمان)؟
□ النبرة = خبير صادق وليس بائع؟
□ Expert Review Box موجود أسفل المقال؟
```

---

## ═══ الجزء 15: Verification Plan ═══

- `next build` = 0 errors
- Lighthouse: LCP < 1.2s, INP < 100ms, CLS = 0
- Google Rich Results Test: كل Schema type
- Mobile RTL: iPhone SE + Samsung A14
- WhatsApp deep link: يفتح chat صحيح
- Schema validator: schema.org + Google Testing Tool
