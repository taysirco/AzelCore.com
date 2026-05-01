// ═══ AzelCore.com — E-E-A-T & Trust (YMYL) Signals ═══

// ─── لماذا العزل = YMYL? ───
// 1. سلامة الزجاج (أمان ركاب السيارة)
// 2. حماية من UV (صحة البشرة والعيون)
// 3. توفير طاقة (أموال - فواتير كهرباء)
// 4. قوانين المرور (مخالفات مالية)
// 5. سلامة هيكلية المباني (زجاج أمان)

export const eeatSignals = {
  // ─── Experience (التجربة الفعلية) ───
  experience: {
    yearsInBusiness: 2, // منذ 2024
    totalCarsServiced: 0, // تحديث بالعدد الفعلي
    totalBuildingsServiced: 0,
    photosRequired: {
      rule: "صور حقيقية فقط — لا ستوك، لا AI Generated",
      exifRequired: true,
      gpsRequired: true, // إحداثيات جدة
      namingConvention: "[الخدمة]-[التفصيل]-[الموقع]-[السنة].png",
      example: "nano-ceramic-lexus-es-jeddah-2026.png",
    },
    beforeAfterGallery: {
      minPairs: 5,
      format: "slider تفاعلي قبل/بعد",
      metadata: "اسم السيارة + نوع الفيلم + التاريخ",
    },
    thermalCameraTests: {
      required: true,
      device: "FLIR ONE / FLIR C5",
      scenarios: [
        "حرارة المقصورة قبل/بعد التظليل",
        "حرارة الزجاج بدون فيلم vs مع فيلم",
        "مقارنة أداء الأنواع المختلفة",
      ],
    },
  },

  // ─── Expertise (الخبرة التقنية) ───
  expertise: {
    certifications: [
      { name: "IWFA Certified Installer", nameAr: "فني معتمد من الرابطة الدولية لأفلام النوافذ", required: true },
      { name: "Johnson Authorized Dealer", nameAr: "وكيل جونسون المعتمد", required: true },
      { name: "3M Authorized Dealer", nameAr: "وكيل 3M معتمد", required: false },
      { name: "XPEL Certified Installer", nameAr: "مركب XPEL معتمد", required: false },
      { name: "LLumar SelectPro", nameAr: "شريك LLumar المختار", required: false },
    ],
    technicalContent: [
      "شرح TSER vs VLT vs UV Rejection بأرقام حقيقية",
      "مقارنة أفلام من الداتاشيت الرسمي (لا من أوصاف بائعين)",
      "ذكر معايير ASTM D1003 لقياس الضوء",
      "شرح تأثير الملوحة والرطوبة على عمر الفيلم",
    ],
    expertReviewBox: {
      required: true,
      format: {
        name: "محمد الهادي",
        title: "فني عزل وتظليل معتمد — وكيل جونسون الرسمي",
        certification: "Johnson Authorized Dealer + IWFA",
        photo: "about-owner-portrait.png",
      },
    },
  },

  // ─── Authoritativeness (السلطة) ───
  authority: {
    officialSources: [
      { name: "3M Window Films", url: "https://www.3m.com/3M/en_US/window-films/" },
      { name: "Johnson Window Films", url: "https://www.johnsonwindowfilms.com" },
      { name: "LLumar", url: "https://www.llumar.com" },
      { name: "XPEL", url: "https://www.xpel.com" },
      { name: "IWFA", url: "https://www.iwfa.com" },
    ],
    saudiAuthorities: [
      { name: "المرور السعودي", nameEn: "Saudi Traffic Department" },
      { name: "SASO المواصفات والمقاييس", nameEn: "Saudi Standards Organization" },
      { name: "كود البناء السعودي", nameEn: "Saudi Building Code" },
    ],
    citations: {
      rule: "كل رقم يجب أن يكون من مصدر موثق",
      sources: ["داتاشيت المصنع", "اختبارات FLIR حقيقية", "معايير ASTM", "نظام المرور"],
    },
  },

  // ─── Trust (الثقة) ───
  trust: {
    businessCredentials: {
      crn: { label: "السجل التجاري", required: true, displayIn: "footer" },
      vatId: { label: "الرقم الضريبي", required: true, displayIn: "footer" },
      sbc: { label: "شهادة الغرفة التجارية", required: false },
      maroof: { label: "منصة معروف", required: true, displayIn: "footer + about" },
    },
    contactTransparency: {
      whatsapp: { required: true, displayIn: "header + footer + sticky CTA" },
      phone: { required: true, displayIn: "header + footer" },
      address: { required: true, displayIn: "footer + contact + Schema" },
      googleMaps: { required: true, displayIn: "contact page" },
      workingHours: { required: true, displayIn: "Schema + contact" },
    },
    warrantyTransparency: {
      rule: "اذكر الضمان بالتحديد (مدة + ما يشمله + ما لا يشمله)",
      antiPattern: "ضمان شامل / ضمان حقيقي (كلام فاضي بدون أرقام)",
    },
    reviewPolicy: {
      source: "Google Business Profile reviews",
      display: "صفحة مستقلة + أجزاء في صفحات الخدمات",
      schema: "AggregateRating",
    },
  },
};

// ─── YMYL Safety Warnings (تحذيرات السلامة الإلزامية) ───
export const yymylWarnings = [
  {
    id: "fake-film",
    title: "تحذير: التظليل المقلد",
    content: "أفلام التظليل المقلدة تحتوي مواد كيميائية تتحلل بالحرارة وتطلق أبخرة سامة داخل المقصورة. تأكد من شهادة المنتج الأصلية.",
    displayOn: ["car-tinting", "comparison"],
  },
  {
    id: "uv-health",
    title: "حماية صحية: الأشعة فوق البنفسجية",
    content: "التعرض المستمر لـ UV داخل السيارة يسبب شيخوخة الجلد وزيادة خطر سرطان الجلد. فيلم بنسبة حجب UV 99% ضرورة صحية وليس رفاهية.",
    displayOn: ["car-tinting", "thermal"],
  },
  {
    id: "legal-risk",
    title: "تحذير قانوني: نسبة التظليل",
    content: "تجاوز نسبة 30% VLT = مخالفة 500-900 ر.س + رفض الفحص الدوري + إلزام بالإزالة على حسابك.",
    displayOn: ["car-tinting"],
  },
  {
    id: "glass-safety",
    title: "أمان الزجاج: المباني",
    content: "فيلم الأمان (Safety Film) يمنع تناثر الزجاج عند الكسر ويحمي من الإصابات. مطلوب في المباني التجارية والمدارس.",
    displayOn: ["building-glass"],
  },
];
