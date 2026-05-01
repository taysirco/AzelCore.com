// ═══ AzelCore.com — Entities Database ═══

export const brandEntity = {
  name: "AzelCore",
  nameAr: "عزل كور",
  tagline: "تظليل وعزل حراري احترافي",
  domain: "azelcore.com",
  foundingYear: 2024,
  city: "جدة",
  region: "منطقة مكة المكرمة",
  country: "SA",
  phone: "+966564612017",
  whatsapp: "+966564612017",
  crn: "4030253566", // السجل التجاري
  vatId: "311280328300003",
  owner: "محمد الهادي",
  ownerTitle: "فني عزل وتظليل معتمد",
  geo: { lat: 21.5424, lng: 39.1727 },
  sameAs: ['https://www.wikidata.org/wiki/Q5880'] as string[],
};

// ─── الخدمات الرئيسية ───
export const serviceEntities = [
  {
    id: "car-tinting",
    nameAr: "تظليل سيارات",
    nameEn: "Car Window Tinting",
    slug: "car-insulation-jeddah",
    silo: "local-jeddah",
    schemaType: "AutoRepair",
    areaServed: "جدة",
    description: "تظليل وعزل حراري احترافي لزجاج السيارات بأفلام نانو سيراميك و 3M و LLumar",
    priceRange: { min: 300, max: 3000, currency: "SAR" },
    warranty: "10 سنوات",
    keywords: [
      "تظليل سيارات جدة", "تظليل سيارات", "تظليل عازل حراري للسيارات",
      "أفضل محل تظليل سيارات في جدة", "عزل سيارات جدة",
    ],
  },
  {
    id: "building-glass",
    nameAr: "عزل زجاج واجهات المباني",
    nameEn: "Building Glass Insulation",
    slug: "building-glass-insulation",
    silo: "national-ksa",
    schemaType: "Service",
    areaServed: "المملكة العربية السعودية",
    description: "عزل وتظليل زجاج واجهات المباني التجارية والسكنية في جميع أنحاء المملكة",
    priceRange: { min: 50, max: 200, currency: "SAR", unit: "متر مربع" },
    warranty: "15 سنة",
    keywords: [
      "عزل زجاج واجهات مباني", "تظليل مباني", "تظليل نوافذ المنازل",
      "فيلم عزل حراري نوافذ", "تظليل واجهات تجارية",
    ],
  },
  {
    id: "thermal-cars",
    nameAr: "العزل الحراري للسيارات",
    nameEn: "Thermal Car Insulation",
    slug: "thermal-cars",
    silo: "local-jeddah",
    schemaType: "Service",
    areaServed: "جدة",
    description: "حلول العزل الحراري المتقدمة للسيارات لحماية المقصورة وتوفير الوقود",
    priceRange: { min: 500, max: 3000, currency: "SAR" },
    warranty: "10 سنوات",
    keywords: [
      "عزل حراري سيارات", "تظليل عازل حراري جدة", "تركيب عازل حراري سيارات جدة",
      "أفضل عازل حراري للسيارات في السعودية",
    ],
  },
  {
    id: "thermal-windows",
    nameAr: "العزل الحراري للنوافذ",
    nameEn: "Window Thermal Insulation",
    slug: "thermal-windows",
    silo: "national-ksa",
    schemaType: "Service",
    areaServed: "المملكة العربية السعودية",
    description: "عزل حراري لنوافذ المنازل والمباني لتقليل استهلاك الكهرباء وحماية الأثاث",
    priceRange: { min: 40, max: 150, currency: "SAR", unit: "متر مربع" },
    warranty: "10 سنوات",
    keywords: [
      "عزل حراري شبابيك", "عزل حراري نوافذ", "تظليل نوافذ المنازل",
    ],
  },
];

// ─── ماركات الأفلام ───
export const filmBrands = [
  { name: "3M", nameAr: "ثري ام", flagship: "Crystalline Series", origin: "أمريكي", authorized: true },
  { name: "LLumar", nameAr: "لومار", flagship: "CTX Series", origin: "أمريكي", authorized: true },
  { name: "XPEL", nameAr: "إكسبل", flagship: "PRIME XR Plus", origin: "أمريكي", authorized: true },
  { name: "SunTek", nameAr: "صن تك", flagship: "CXP Series", origin: "أمريكي", authorized: true },
  { name: "Johnson", nameAr: "جونسون", flagship: "Supreme IR (Nano-Ceramic)", origin: "أمريكي", authorized: true, isDealer: true },
];

// ─── أنواع الأفلام ───
export const filmTypes = [
  {
    id: "nano-ceramic",
    nameAr: "نانو سيراميك",
    nameEn: "Nano Ceramic",
    tser: "95%", uvRejection: "99%", irRejection: "97%",
    signalBlock: false,
    priceRange: "1500-3000 ر.س",
    durability: "10-15 سنة",
    bestFor: "السيارات الفارهة وأصحاب الحساسية من الحرارة",
  },
  {
    id: "metalized",
    nameAr: "فيلم معدني",
    nameEn: "Metalized Film",
    tser: "70%", uvRejection: "99%", irRejection: "60%",
    signalBlock: true,
    priceRange: "800-1500 ر.س",
    durability: "7-10 سنوات",
    bestFor: "الميزانية المتوسطة مع عزل جيد",
  },
  {
    id: "carbon",
    nameAr: "فيلم كربوني",
    nameEn: "Carbon Film",
    tser: "65%", uvRejection: "99%", irRejection: "55%",
    signalBlock: false,
    priceRange: "600-1200 ر.س",
    durability: "5-8 سنوات",
    bestFor: "توازن بين الجودة والسعر",
  },
  {
    id: "dyed",
    nameAr: "فيلم مصبوغ (عادي)",
    nameEn: "Dyed Film",
    tser: "40%", uvRejection: "70%", irRejection: "30%",
    signalBlock: false,
    priceRange: "300-600 ر.س",
    durability: "2-3 سنوات",
    bestFor: "الخصوصية فقط بدون عزل حراري حقيقي",
  },
];

// ─── المنافسون في جدة ───
export const competitors = [
  { name: "Care Style", domain: "care-style.sa", city: "جدة" },
  { name: "Tornado Auto Care", domain: "tornadoautocare.com", city: "جدة" },
  { name: "Driven", domain: "driven-sa.com", city: "جدة" },
  { name: "Care1", domain: "care1cc.com", city: "جدة" },
  { name: "3M Jeddah", domain: "3m-jedah.com", city: "جدة" },
  { name: "NanoPro", domain: "nanopro.sa", city: "جدة" },
  // { name: "Johnson SA" } — تم حذفه: نحن وكيل جونسون المعتمد
];

// ─── منتجات جونسون (وكيل معتمد) ───
export const johnsonProductLines = {
  brand: "Johnson Window Films",
  brandAr: "جونسون وندو فيلم",
  origin: "أمريكا 🇺🇸",
  founded: 1961,
  dealerStatus: "وكيل معتمد",
  dealerBadge: "Johnson Authorized Dealer",
  website: "https://www.johnsonwindowfilms.com",

  // ─── خطوط المنتجات — السيارات ───
  automotive: [
    {
      id: "supreme-ir",
      nameEn: "Supreme IR",
      nameAr: "سوبريم آي آر (نانو سيراميك)",
      technology: "Multi-layered Nano-Ceramic",
      uvRejection: "99%",
      irRejection: "97%",
      signalBlock: false,
      warranty: "عمر السيارة",
      priceRange: "1,800-3,200 ر.س",
      bestFor: "الأداء الأعلى — سيارات فارهة وعائلية",
      shades: [
        { name: "SIR 70", vlt: "70%", tser: "55%" },
        { name: "SIR 50", vlt: "50%", tser: "60%" },
        { name: "SIR 35", vlt: "35%", tser: "63%" },
        { name: "SIR 20", vlt: "20%", tser: "67%" },
        { name: "SIR 05", vlt: "5%", tser: "72%" },
      ],
    },
    {
      id: "insulatir",
      nameEn: "InsulatIR",
      nameAr: "إنسوليت آي آر (نانو سيراميك)",
      technology: "Nano-Ceramic",
      uvRejection: "99%",
      irRejection: "92%",
      signalBlock: false,
      warranty: "عمر السيارة",
      priceRange: "1,200-2,500 ر.س",
      bestFor: "عزل حراري ممتاز بسعر معقول",
      shades: [
        { name: "IR 50", vlt: "50%", tser: "52%" },
        { name: "IR 35", vlt: "35%", tser: "56%" },
        { name: "IR 20", vlt: "20%", tser: "60%" },
        { name: "IR 05", vlt: "5%", tser: "65%" },
      ],
    },
    {
      id: "marathon",
      nameEn: "Marathon",
      nameAr: "ماراثون",
      technology: "Hybrid (Metallized + Dyed)",
      uvRejection: "99%",
      irRejection: "86%",
      signalBlock: false,
      warranty: "5 سنوات",
      priceRange: "600-1,200 ر.س",
      bestFor: "توازن ممتاز بين الأداء والسعر",
      shades: [
        { name: "MN 45", vlt: "46%", tser: "42%" },
        { name: "MN 35", vlt: "37%", tser: "43%" },
        { name: "MN 30", vlt: "30%", tser: "45%" },
        { name: "MN 20", vlt: "20%", tser: "49%" },
        { name: "MN 15", vlt: "12%", tser: "58%" },
        { name: "MN 05", vlt: "5%", tser: "60%" },
      ],
    },
    {
      id: "ray-guard-carbon",
      nameEn: "Ray Guard Carbon",
      nameAr: "راي جارد كربون",
      technology: "Nano-Hybrid Carbon",
      uvRejection: "99%",
      irRejection: "70%",
      signalBlock: false,
      warranty: "5 سنوات",
      priceRange: "500-900 ر.س",
      bestFor: "خيار اقتصادي مع أداء جيد",
    },
    {
      id: "renegade",
      nameEn: "Renegade",
      nameAr: "رينيجيد",
      technology: "Color-Stable Charcoal",
      uvRejection: "99%",
      irRejection: "50%",
      signalBlock: false,
      warranty: "5 سنوات",
      priceRange: "400-700 ر.س",
      bestFor: "مظهر كلاسيكي بدون تداخل إشارات",
    },
  ],

  // ─── خطوط المنتجات — المباني ───
  architectural: [
    {
      id: "nightscape",
      nameEn: "NightScape",
      nameAr: "نايت سكيب",
      technology: "Dual-Reflective Aluminum",
      uvRejection: "99%",
      bestFor: "واجهات تجارية + مكاتب",
    },
    {
      id: "sunlight",
      nameEn: "Sunlight",
      nameAr: "صن لايت",
      technology: "Spectrally Selective",
      uvRejection: "99%",
      bestFor: "محلات + واجهات شفافة تحتاج عزل",
    },
  ],

  // ─── لماذا جونسون؟ (USPs) ───
  uniqueSellingPoints: [
    "شركة أمريكية منذ 1961 — أكثر من 60 سنة خبرة",
    "تقنية CST™ الحصرية لمقاومة الخدوش",
    "Supreme IR يحجب 97% من الأشعة تحت الحمراء",
    "لا تتداخل مع GPS أو البلوتوث أو إشارات الراديو",
    "ضمان عمر السيارة على الخط الأعلى (Supreme IR)",
    "متوفر حصرياً عبر وكلاء معتمدين — عزل كور وكيل رسمي",
  ],
};
