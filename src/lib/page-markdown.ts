// ═══ AzelCore — Per-page Markdown for AI agents ═══
// Machine-readable, token-efficient variants of the key money pages, served by
// the Edge middleware on `Accept: text/markdown`. Facts here MUST stay consistent
// with the on-page content and the reconciled thermal dataset (n=530 field study).
// The homepage markdown lives in middleware.ts (getHomepageMarkdown).

const SITE = 'https://azelcore.com';

function url(path: string, isEn: boolean): string {
  return isEn ? `${SITE}/en${path === '/' ? '' : path}` : `${SITE}${path}`;
}

function footer(isEn: boolean): string {
  return isEn
    ? `\n---\n- **Phone**: [+966564612017](tel:+966564612017) · **WhatsApp**: https://wa.me/966564612017\n- **Location**: King Fahd Road, Al-Zahra District, Jeddah, Saudi Arabia\n- **Website**: ${SITE}/en\n\n*Last updated: June 2026 · AzelCore*\n`
    : `\n---\n- **هاتف**: [+966564612017](tel:+966564612017) · **واتساب**: https://wa.me/966564612017\n- **الموقع**: طريق الملك فهد، حي الزهراء، جدة، السعودية\n- **الموقع الإلكتروني**: ${SITE}\n\n*آخر تحديث: يونيو 2026 · عزل كور*\n`;
}

type PageBuilder = (isEn: boolean) => string;

const carInsulation: PageBuilder = (isEn) => isEn ? `# Car Tinting in Jeddah — Nano-Ceramic (AzelCore)

> Nano-ceramic car window tinting in Jeddah by AzelCore, authorized Johnson & 3M dealer.

## Key facts
- **Heat (IR) rejection**: 96–97% (FLIR T530 field study, n=530 vehicles)
- **UV protection**: 99%
- **Cabin temperature**: drops from ~74–81°C to ~37–42°C within 10–14 minutes
- **Signal interference**: none (metal-free nano-ceramic films)
- **Warranty**: up to vehicle lifetime (film)
- **Brands**: Johnson Supreme IR, 3M Crystalline, XPEL
- **Price range**: 200 SAR (windshield) to 3,200 SAR (full nano-ceramic)
- **Service area**: all districts of Jeddah

## Related
- Saudi tinting laws 2026: ${SITE}/en/blog/tint-laws-saudi-2026
- Nano vs carbon vs 3M: ${SITE}/en/blog/nano-ceramic-vs-carbon-vs-3m
- Cost calculator: ${SITE}/en/calculator
${footer(isEn)}` : `# تظليل سيارات جدة — نانو سيراميك (عزل كور)

> تظليل سيارات نانو سيراميك في جدة من عزل كور، الوكيل المعتمد لجونسون و 3M.

## حقائق رئيسية
- **حجب الحرارة (IR)**: 96–97% (دراسة ميدانية FLIR T530، عيّنة 530 سيارة)
- **حماية UV**: 99%
- **حرارة المقصورة**: تنخفض من ~74–81°م إلى ~37–42°م خلال 10–14 دقيقة
- **تداخل الإشارة**: لا يوجد (أفلام نانو سيراميك خالية من المعادن)
- **الضمان**: يمتد لعمر السيارة (الفيلم)
- **العلامات**: Johnson Supreme IR، 3M Crystalline، XPEL
- **نطاق السعر**: من 200 ريال (الزجاج الأمامي) إلى 3,200 ريال (نانو سيراميك كامل)
- **نطاق الخدمة**: كل أحياء جدة

## ذات صلة
- قوانين التظليل 2026: ${SITE}/blog/tint-laws-saudi-2026
- نانو مقابل كربوني مقابل 3M: ${SITE}/blog/nano-ceramic-vs-carbon-vs-3m
- حاسبة التكلفة: ${SITE}/calculator
${footer(isEn)}`;

const buildingGlass: PageBuilder = (isEn) => isEn ? `# Building Glass Insulation in Jeddah & KSA (AzelCore)

> Thermal window-film insulation for commercial buildings and villas in Saudi Arabia.

## Key facts
- **HVAC energy savings**: 35–40% reduction in AC consumption
- **ROI payback**: 7–18 months (building-type dependent)
- **Compliance**: Saudi Building Code SBC 601/602 + ASHRAE 90.1
- **Warranty**: up to 15 years
- **Films**: clear & reflective nano-ceramic (97% IR, 99% UV)
- **Applications**: villas, towers, retail, schools, hospitals
- **Coverage**: Jeddah + major KSA cities

## Tools & related
- ROI API: ${SITE}/api/calculate-roi
- Electricity savings guide: ${url('/blog/building-insulation-electricity-savings', isEn)}
- Vision 2030 energy efficiency: ${url('/blog/vision-2030-energy-efficiency', isEn)}
${footer(isEn)}` : `# عزل زجاج المباني في جدة والمملكة (عزل كور)

> عزل حراري بأفلام النوافذ للمباني التجارية والفلل في السعودية.

## حقائق رئيسية
- **توفير طاقة التكييف**: تخفيض 35–40% من استهلاك المكيفات
- **فترة الاسترداد**: 7–18 شهرًا (حسب نوع المبنى)
- **التوافق**: كود البناء السعودي SBC 601/602 + ASHRAE 90.1
- **الضمان**: حتى 15 سنة
- **الأفلام**: نانو سيراميك شفاف وعاكس (97% IR، 99% UV)
- **التطبيقات**: فلل، أبراج، محلات، مدارس، مستشفيات
- **التغطية**: جدة + كبرى مدن المملكة

## أدوات وذات صلة
- حاسبة العائد API: ${SITE}/api/calculate-roi
- دليل توفير الكهرباء: ${url('/blog/building-insulation-electricity-savings', isEn)}
- كفاءة الطاقة ورؤية 2030: ${url('/blog/vision-2030-energy-efficiency', isEn)}
${footer(isEn)}`;

const ppf: PageBuilder = (isEn) => isEn ? `# Paint Protection Film (PPF) in Jeddah (AzelCore)

> XPEL paint protection film installation in Jeddah — physical shield for your car paint.

## Key facts
- **Film**: XPEL PPF, up to 8 mil thick
- **Self-healing**: heat-activated scratch recovery
- **Protects against**: rock chips, deep scratches, sandblasting, UV yellowing
- **Coverage options**: full body, front-end, high-impact zones
- **Benefit**: preserves original paint and resale value
- **vs Ceramic**: PPF is physical protection; ceramic coating adds gloss/hydrophobicity

## Related
- PPF vs ceramic coating: ${url('/blog/ppf-vs-ceramic-coating', isEn)}
- PPF vs polish & paint damage: ${url('/blog/ppf-vs-car-polish-paint-damage', isEn)}
${footer(isEn)}` : `# حماية طلاء السيارات PPF في جدة (عزل كور)

> تركيب أفلام حماية الطلاء XPEL في جدة — درع مادي لطلاء سيارتك.

## حقائق رئيسية
- **الفيلم**: XPEL PPF بسماكة تصل إلى 8 ميل
- **معالجة ذاتية**: استرجاع الخدوش بالحرارة
- **يحمي من**: حصى الطريق، الخدوش العميقة، الترميل، اصفرار UV
- **خيارات التغطية**: كامل السيارة، الواجهة الأمامية، مناطق الاصطدام
- **الفائدة**: يحافظ على الطلاء الأصلي وقيمة إعادة البيع
- **مقابل السيراميك**: PPF حماية مادية؛ النانو سيراميك يضيف لمعانًا وعزلًا مائيًا

## ذات صلة
- PPF مقابل النانو سيراميك: ${url('/blog/ppf-vs-ceramic-coating', isEn)}
- PPF مقابل التلميع وحماية الطلاء: ${url('/blog/ppf-vs-car-polish-paint-damage', isEn)}
${footer(isEn)}`;

const johnson: PageBuilder = (isEn) => isEn ? `# Johnson Window Films — Authorized Jeddah Dealer (AzelCore)

> AzelCore is an authorized Johnson Window Films dealer in Jeddah, Saudi Arabia.

## Key facts
- **Manufacturer**: Johnson Window Films (USA, est. 1961)
- **Flagship**: Supreme IR — 97% infrared rejection, signal-friendly
- **Product lines**: Supreme IR, InsulatIR, Marathon, Ray Guard, Renegade
- **Warranty**: up to vehicle lifetime
${footer(isEn)}` : `# جونسون وندو فيلم — الوكيل المعتمد بجدة (عزل كور)

> عزل كور وكيل معتمد لأفلام Johnson Window Films في جدة، السعودية.

## حقائق رئيسية
- **الشركة المصنّعة**: Johnson Window Films (أمريكا، تأسست 1961)
- **المنتج الرئيسي**: Supreme IR — حجب 97% أشعة تحت حمراء، بدون تداخل إشارة
- **خطوط الإنتاج**: Supreme IR، InsulatIR، Marathon، Ray Guard، Renegade
- **الضمان**: يمتد لعمر السيارة
${footer(isEn)}`;

const threeM: PageBuilder = (isEn) => isEn ? `# 3M Window Films — Authorized Jeddah Dealer (AzelCore)

> AzelCore is an authorized 3M Window Films dealer in Jeddah, Saudi Arabia.

## Key facts
- **Manufacturer**: 3M Company (USA, est. 1902)
- **Flagship**: Crystalline — 200+ nano-layers, TSER 90%, 97% IR
- **Product lines**: Crystalline, Ceramic IR, Color Stable, FX Premium
- **Warranty**: up to vehicle lifetime
${footer(isEn)}` : `# 3M Window Films — الوكيل المعتمد بجدة (عزل كور)

> عزل كور وكيل معتمد لأفلام 3M Window Films في جدة، السعودية.

## حقائق رئيسية
- **الشركة المصنّعة**: 3M Company (أمريكا، تأسست 1902)
- **المنتج الرئيسي**: Crystalline — أكثر من 200 طبقة نانو، TSER 90%، 97% IR
- **خطوط الإنتاج**: Crystalline، Ceramic IR، Color Stable، FX Premium
- **الضمان**: يمتد لعمر السيارة
${footer(isEn)}`;

const research: PageBuilder = (isEn) => isEn ? `# KSA Thermal Rejection Field Report 2026 (AzelCore)

> Field measurements of vehicle interior temperatures before/after nano-ceramic film across Jeddah districts.

## Method & scope
- **Instrument**: FLIR T530 thermal camera (±2°C)
- **Sample**: 530 vehicles across 10 Jeddah districts (2024–2026)
- **Buildings**: HVAC load reduction measured per SBC 601/602

## Headline results
- No-tint cabin: ~74–81°C → nano-ceramic: ~37–42°C
- Infrared rejection: 96–97%
- Building HVAC energy reduction: 35–40%

## Data
- JSON dataset: ${SITE}/api/research/jeddah-thermal-data
- Full report: ${url('/research/ksa-thermal-report-2026', isEn)}
${footer(isEn)}` : `# تقرير حراري ميداني للمملكة 2026 (عزل كور)

> قياسات ميدانية لحرارة مقصورة السيارة قبل وبعد النانو سيراميك عبر أحياء جدة.

## المنهجية والنطاق
- **الجهاز**: كاميرا FLIR T530 الحرارية (±2°م)
- **العيّنة**: 530 سيارة عبر 10 أحياء بجدة (2024–2026)
- **المباني**: قياس تخفيض حمل التكييف وفق SBC 601/602

## النتائج الرئيسية
- بدون تظليل: ~74–81°م ← نانو سيراميك: ~37–42°م
- حجب الأشعة تحت الحمراء: 96–97%
- تخفيض طاقة تكييف المباني: 35–40%

## البيانات
- مجموعة بيانات JSON: ${SITE}/api/research/jeddah-thermal-data
- التقرير الكامل: ${url('/research/ksa-thermal-report-2026', isEn)}
${footer(isEn)}`;

const PAGES: Record<string, PageBuilder> = {
  '/car-insulation-jeddah': carInsulation,
  '/building-glass-insulation': buildingGlass,
  '/paint-protection-film-jeddah': ppf,
  '/johnson-authorized-dealer': johnson,
  '/3m-authorized-dealer': threeM,
  '/research/ksa-thermal-report-2026': research,
};

/** Return token-efficient markdown for a known page path, or null if none. */
export function getPageMarkdown(cleanPath: string, isEn: boolean): string | null {
  const builder = PAGES[cleanPath];
  return builder ? builder(isEn) : null;
}
