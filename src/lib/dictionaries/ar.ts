// ═══ AzelCore.com — Arabic Dictionary (ar) ═══
// Source of Truth for all Arabic UI strings
// Extracted from hardcoded component strings for i18n

import type { Locale } from '@/lib/i18n';

export const ar = {
  // ─── Site-wide ───
  site: {
    name: 'عزل كور',
    nameEn: 'AzelCore',
    description: 'تظليل سيارات وعزل زجاج مباني في جدة — وكيل جونسون و 3M المعتمد. نانو سيراميك يحجب 97% من الحرارة مع ضمان عمر السيارة.',
    address: 'طريق الملك فهد، حي الزهراء، جدة 23425، المملكة العربية السعودية',
    workingHours: 'السبت - الخميس: 8:00 ص - 10:00 م',
    whatsappMessage: 'السلام عليكم، أبي استفسر عن خدمات العزل والتظليل',
    currency: 'ر.س',
    currencyCode: 'SAR',
  },

  // ─── Navigation ───
  nav: {
    home: 'الرئيسية',
    carInsulation: 'تظليل سيارات',
    buildingInsulation: 'عزل مباني',
    calculator: 'حاسبة التكلفة',
    johnson: 'جونسون ⭐',
    threeMDealer: '3M ⭐',
    gallery: 'أعمالنا',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    about: 'من نحن',
    faq: 'الأسئلة الشائعة',
  },

  // ─── Trust Stats ───
  stats: {
    carsTinted: 'سيارة تم تظليلها',
    warranty: 'سنوات ضمان',
    irRejection: 'حجب الأشعة تحت الحمراء',
    rating: 'تقييم العملاء',
  },

  // ─── Header ───
  header: {
    cta: 'احجز الآن',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    ariaNavigation: 'التنقل الرئيسي',
  },

  // ─── Footer ───
  footer: {
    services: 'خدماتنا',
    company: 'الشركة',
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    allRightsReserved: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    taxInvoice: 'فاتورة ضريبية معتمدة',
    registeredBusiness: 'منشأة مسجلة في وزارة التجارة',
  },

  // ─── Language Switcher ───
  langSwitcher: {
    label: 'اللغة',
    current: 'العربية',
    switchTo: 'English',
  },

  // ─── Hero Section ───
  hero: {
    badge: 'وكيل جونسون و 3M المعتمد في جدة',
    title: 'تظليل سيارات وعزل مباني',
    titleHighlight: 'بأعلى تقنية أمريكية',
    subtitle: 'أفلام نانو سيراميك تحجب 97% من الحرارة — ضمان يصل لعمر السيارة. خبراء العزل الحراري في جدة منذ 2024.',
    ctaPrimary: 'احجز موعدك الآن',
    ctaSecondary: 'شاهد أعمالنا',
    trustItem1: 'وكيل معتمد',
    trustItem2: 'ضمان رسمي',
    trustItem3: '+780 سيارة',
  },

  // ─── Services Section ───
  services: {
    overline: 'خدماتنا',
    title: 'حلول عزل شاملة لكل احتياج',
    subtitle: 'من تظليل السيارات بأحدث التقنيات الأمريكية إلى عزل واجهات المباني — نقدم حماية متكاملة من حرارة السعودية.',
    learnMore: 'اعرف المزيد ←',
    ariaLabel: 'خدماتنا',
    card1: {
      title: 'تظليل سيارات جدة نانو سيراميك',
      desc: 'أفلام نانو سيراميك أمريكية تحجب 97% من الحرارة مع ضمان يصل لعمر السيارة. متوافقة مع قوانين المرور السعودية.',
      features: ['حجب IR 97%', 'لا يحجب إشارات', 'ضمان عمر السيارة'],
    },
    card2: {
      title: 'عزل مباني وواجهات زجاج جدة',
      desc: 'حلول عزل حراري متقدمة لواجهات المباني التجارية والسكنية — وفّر حتى 40% من فاتورة الكهرباء.',
      features: ['توفير كهرباء 40%', 'حماية UV 99%', 'ضمان 15 سنة'],
    },
    card3: {
      title: 'وكيل جونسون المعتمد',
      desc: 'وكيل جونسون المعتمد — 5 خطوط إنتاج أمريكية. وكيل 3M المعتمد — Crystalline بـ 200+ طبقة نانو.',
      features: ['5 خطوط إنتاج', 'ضمان عمر السيارة', 'تقنية CST™'],
    },
    card4: {
      title: 'عزل حراري للسيارات في جدة',
      desc: 'حلول حرارية شاملة للسيارات والمباني — اختبارات حقيقية بكاميرا FLIR تثبت كفاءة العزل.',
      features: ['اختبار FLIR', 'انخفاض 47%', 'مقارنة حقيقية'],
    },
  },

  // ─── CTA Section ───
  cta: {
    ariaLabel: 'احجز الآن',
    title: 'جاهز تحمي سيارتك من',
    titleHighlight: 'حرارة جدة',
    subtitle: 'تواصل معنا الآن واحصل على استشارة مجانية + عرض سعر فوري. ضمان أصلي من المصنع.',
    whatsappBtn: 'تواصل عبر واتساب',
    callBtn: '📞 اتصل الآن',
    hours: '⏰ السبت - الخميس: 8:00 ص - 10:00 م',
  },

  // ─── YMYL Warning ───
  ymyl: {
    ariaLabel: 'تحذير هام للمستهلك',
    title: 'احذر فخ',
    titleHighlight: '"تظليل كامل بـ 200 ريال"',
    intro: 'في السوق السعودي المليء بالخيارات، تنتشر عروض لـ "أفلام نانو" رخيصة. هذه الأفلام التجارية المقلدة ليست فقط خسارة لمالك، بل',
    introStrong: 'خطراً حقيقياً',
    introEnd: 'على صحتك ومقصورة سيارتك.',
    bullet1: 'تتحول للون البنفسجي أو تتلاشى خلال 3 أشهر فقط.',
    bullet2: 'عزل وهمي: تسمح بمرور 80% من الأشعة تحت الحمراء (الحرارة الحقيقية).',
    bullet3: 'ضرر صحي: لا تمنع الأشعة فوق البنفسجية (UV) المسببة لحروق الجلد.',
    bullet4: 'تتسبب في تشقق ديكور وطبلون السيارة بسبب احتباس الحرارة.',
    solutionTitle: 'الحل التقني المعتمد (عزل كور)',
    solutionText: 'نحن وكيل معتمد لـ Johnson Window Films و 3M الأمريكية. نستخدم أجهزة فحص حراري (FLIR) لإثبات نسبة عزل تصل إلى 97% للأشعة تحت الحمراء، مع ضمان موثق يمتد لعمر السيارة يشمل تغيير اللون والتقشير.',
  },

  // ─── Pricing Section ───
  pricing: {
    ariaLabel: 'أسعار التظليل',
    overline: 'أسعار شفافة',
    title: 'أسعار تظليل السيارات في جدة',
    subtitle: 'لا رسوم مخفية — السعر يشمل التركيب + الضمان + الفاتورة الضريبية.',
    mostPopular: '⭐ الأكثر طلباً',
    sedan: 'سيدان',
    suv: 'SUV / دبل',
    warranty: '🛡️ ضمان',
    bookNow: 'احجز الآن',
    addonsTitle: 'خدمات إضافية',
    note: '* الأسعار تقريبية وتختلف حسب حجم السيارة ونوع الفيلم.',
    noteLink: 'تواصل معنا لعرض سعر دقيق →',
  },

  // ─── Cost Calculator ───
  calculator: {
    step1: '1. حجم السيارة',
    step2: '2. نوع العزل الحراري',
    step3: '3. إضافات (اختياري)',
    calculating: 'جاري المعالجة وعرض السعر...',
    calculate: 'احسب التكلفة التقديرية',
    resultTitle: 'التكلفة التقديرية',
    disclaimer: '* هذا السعر مبدئي. قد يختلف حسب الموديل الفعلي وحالة الزجاج.',
    copied: '✅ تم نسخ السعر',
    copy: '📋 نسخ التسعيرة',
    whatsappBook: '📱 حجز موعد بالواتساب',
    clipboardText: 'عزل كور - التسعيرة المبدئية: من',
    whatsappMsg: 'مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:',
    whatsappMsgSize: '- حجم السيارة:',
    whatsappMsgFilm: '- نوع الفيلم:',
    whatsappMsgPrice: '- السعر التقريبي:',
    whatsappMsgCta: 'أريد حجز موعد لتأكيد السعر.',
    carSizes: {
      sedan: 'سيدان (صغيرة/متوسطة)',
      suv: 'جيب SUV (صفين)',
      suvLarge: 'جيب عائلي (3 صفوف)',
    },
    filmTypes: {
      carbon: 'فيلم كربوني (اقتصادي)',
      renegade: 'جونسون Renegade (كلاسيكي)',
      ceramicBasic: 'نانو سيراميك جونسون Marathon',
      ceramicJohnson: 'جونسون Supreme IR ⭐',
      ceramic3m: '3M Crystalline ⭐ (200+ طبقة نانو)',
    },
    addons: {
      sunroof: 'فتحة سقف عادية',
      panorama: 'سقف بانوراما',
      saltProtect: 'طبقة حماية ضد الملوحة (لأحياء البحر)',
    },
  },

  // ─── Price Reveal ───
  priceReveal: {
    label: 'اكتشف السعر',
    ariaLabel: 'انقر لمعرفة السعر',
  },

  // ─── WhatsApp Float ───
  whatsappFloat: {
    ariaLabel: 'تواصل عبر واتساب',
    tooltip: 'محتاج مساعدة؟',
  },

  // ─── Geo Banner ───
  geoBanner: {
    title: 'عرض خاص لسكان جدة',
    text: 'خصم 15% على تظليل نانو سيراميك لفترة محدودة',
    close: 'إغلاق',
  },

  // ─── Back to Top ───
  backToTop: {
    ariaLabel: 'العودة لأعلى الصفحة',
  },

  // ─── Not Found (404) ───
  notFound: {
    code: '404',
    title: 'الصفحة غير موجودة',
    description: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية أو التواصل معنا مباشرة.',
    goHome: 'العودة للرئيسية',
    whatsapp: 'تواصل عبر واتساب',
    links: {
      carTinting: 'تظليل سيارات',
      buildingInsulation: 'عزل مباني',
      gallery: 'معرض الأعمال',
      blog: 'المدونة',
      faq: 'الأسئلة الشائعة',
    },
  },

  // ─── SEO Components ───
  seo: {
    breadcrumbHome: 'الرئيسية',
    authorProfile: {
      badgeText: 'محتوى مراجَع فنياً',
      preparedBy: '✍️ إعداد:',
      editorialTeam: 'فريق تحرير عزل كور',
      technicalReview: '🔍 المراجعة الفنية:',
      lastReview: 'آخر مراجعة:',
      ariaLabel: 'صندوق المراجعة الفنية',
    },
    officialPartnerBar: {
      defaultTitle: 'مرجعياتنا والمعايير المعتمدة',
      ariaLabel: 'المرجعيات الحكومية والمعايير',
    },
    serviceSummary: {
      label: 'خلاصة الخدمة',
      ariaLabel: 'ملخص الخدمة',
    },
    serviceDisclaimer: {
      ariaLabel: 'تحذير سلامة',
    },
    certifications: {
      ariaLabel: 'شارات الاعتماد والتوثيق',
      grantedByPrefix: 'جهة الاعتماد:',
    },
    siloNav: {
      ariaLabel: 'صفحات ذات صلة',
    },
  },

  // ─── Common ───
  common: {
    learnMore: 'اعرف المزيد',
    viewAll: 'عرض الكل',
    readMore: 'اقرأ المزيد',
    bookNow: 'احجز الآن',
    contactUs: 'تواصل معنا',
    callNow: 'اتصل الآن',
    whatsapp: 'واتساب',
    price: 'السعر',
    free: 'مجاني',
    close: 'إغلاق',
    share: 'مشاركة',
    loading: 'جاري التحميل...',
  },

  // ─── Johnson Section ───
  johnson: {
    ariaLabel: 'عازل جونسون',
    dealerBadge: 'وكيل جونسون المعتمد',
    title: 'أفلام',
    titleBrand: 'Johnson Window Films',
    subtitle: '5 خطوط إنتاج أمريكية — من الفلاجشيب Supreme IR بحجب 97% IR إلى Marathon الاقتصادي. متوفرة حصرياً عبر الوكلاء المعتمدين.',
    irLabel: 'حجب IR',
    usps: [
      { icon: '🇺🇸', text: 'شركة أمريكية منذ 1961' },
      { icon: '🔬', text: 'تقنية CST™ لمقاومة الخدوش' },
      { icon: '📡', text: 'لا تحجب الإشارات' },
      { icon: '🛡️', text: 'ضمان عمر السيارة' },
      { icon: '🌡️', text: 'حجب IR 97%' },
      { icon: '✅', text: 'عزل كور وكيل رسمي' },
    ],
    ctaBtn: 'اكتشف كل منتجات جونسون ←',
    products: [
      { name: 'Supreme IR', nameLocal: 'سوبريم آي آر', tech: 'نانو سيراميك', ir: '97%', tser: '72%', warranty: 'عمر السيارة', tier: 'flagship' },
      { name: 'InsulatIR', nameLocal: 'إنسوليت', tech: 'نانو سيراميك', ir: '92%', tser: '65%', warranty: 'عمر السيارة', tier: 'premium' },
      { name: 'Marathon', nameLocal: 'ماراثون', tech: 'هايبرد', ir: '86%', tser: '60%', warranty: '5 سنوات', tier: 'value' },
      { name: 'Ray Guard', nameLocal: 'راي جارد', tech: 'كربون نانو', ir: '70%', tser: '55%', warranty: '5 سنوات', tier: 'economy' },
    ],
  },

  // ─── Process Section ───
  process: {
    ariaLabel: 'كيف نعمل',
    overline: 'كيف نعمل',
    title: '4 خطوات لتظليل مثالي',
    steps: [
      { number: '01', title: 'الاستشارة', desc: 'نحلل احتياجك ونقترح أفضل نوع فيلم حسب سيارتك أو مبناك وميزانيتك.', icon: '💬' },
      { number: '02', title: 'التحضير', desc: 'تنظيف عميق للزجاج وقص دقيق بالكمبيوتر لضمان تغطية مثالية بدون فقاعات.', icon: '🔧' },
      { number: '03', title: 'التركيب', desc: 'تركيب احترافي في بيئة نظيفة بأدوات متخصصة — لا غبار ولا فقاعات.', icon: '🎯' },
      { number: '04', title: 'الفحص والضمان', desc: 'فحص كامل + شهادة ضمان رسمية + تعليمات العناية لأطول عمر ممكن.', icon: '🛡️' },
    ],
  },

  // ─── Testimonials Section ───
  testimonials: {
    ariaLabel: 'آراء العملاء',
    overline: 'عملاؤنا يتكلمون',
    title: 'ثقة حقيقية من أهل جدة',
    subtitle: 'تقييمات حقيقية من عملاء تم خدمتهم — الأرقام ما تكذب.',
    reviewOf: 'تقييم',
    avgRating: 'متوسط التقييم',
    realReviews: 'تقييم حقيقي',
    satisfaction: 'نسبة الرضا',
    clientsServed: 'عميل تمت خدمته',
  },

  // ─── Trust Section ───
  trust: {
    ariaLabel: 'لماذا تثق بنا',
    overline: 'لماذا عزل كور',
    title: 'ثقة موثقة — مش مجرد كلام',
    subtitle: 'منشأة سعودية مسجلة ومرخصة — وكالة رسمية من جونسون و 3M الأمريكية.',
    expertQuote: 'نستخدم فقط الأفلام الأصلية من المصنع مباشرة — لا نقبل بأي منتج مقلد أو مجهول المصدر. كل رول فيلم يحمل رقم تسلسلي يمكن تتبعه.',
    credentials: [
      { icon: '📋', title: 'منشأة مسجلة', value: 'وزارة التجارة', desc: 'منشأة سعودية مسجلة رسمياً لدى وزارة التجارة' },
      { icon: '🧾', title: 'مسجل ضريبياً', value: 'هيئة الزكاة والضريبة', desc: 'ملتزمون بالأنظمة الضريبية في المملكة' },
      { icon: '🏆', title: 'وكيل جونسون المعتمد', value: 'Johnson Authorized Dealer', desc: 'الوكيل الرسمي لأفلام جونسون الأمريكية في جدة' },
      { icon: '🔴', title: 'وكيل 3M المعتمد', value: '3M Authorized Dealer', desc: 'الوكيل الرسمي لأفلام 3M — Crystalline + Ceramic IR' },
      { icon: '🛡️', title: 'ضمان مكتوب', value: 'حتى عمر السيارة', desc: 'شهادة ضمان رسمية مع كل عملية تركيب' },
    ],
  },

  // ─── Comparison Section ───
  comparison: {
    ariaLabel: 'مقارنة أنواع التظليل',
    overline: 'مقارنة الأنواع',
    title: 'قارن بالأرقام قبل ما تختار',
    subtitle: 'أرقام حقيقية من الداتاشيت الرسمي — لا تعتمد على كلام البائعين. كل الأرقام قابلة للتحقق.',
    headers: ['نوع الفيلم', 'حجب IR', 'حجب UV', 'TSER', 'الضمان', 'السعر (سيدان)'],
    footnote: '* TSER = Total Solar Energy Rejected — كلما ارتفعت كان العزل أفضل. الأرقام من الداتاشيت الرسمي على زجاج 6mm.',
    rows: [
      { cells: ['Johnson Supreme IR ⭐', '97%', '99%', '72%', 'عمر السيارة', '1,800-3,200 ر.س'], highlight: true },
      { cells: ['3M Crystalline ⭐', '97%', '99.9%', '90%', 'عمر السيارة', '2,000-3,500 ر.س'], highlight: true },
      { cells: ['XPEL PRIME XR+', '98%', '99%', '96%', '10 سنوات', '2,500-4,000 ر.س'], highlight: false },
      { cells: ['LLumar CTX', '95%', '99%', '88%', '7 سنوات', '1,200-2,500 ر.س'], highlight: false },
      { cells: ['Johnson InsulatIR', '92%', '99%', '65%', 'عمر السيارة', '1,200-2,500 ر.س'], highlight: true },
      { cells: ['Johnson Marathon', '86%', '99%', '60%', '5 سنوات', '600-1,200 ر.س'], highlight: true },
      { cells: ['كربوني عادي', '55%', '99%', '65%', '5 سنوات', '600-1,200 ر.س'], highlight: false },
      { cells: ['مصبوغ (عادي)', '30%', '70%', '40%', 'سنة', '300-600 ر.س'], highlight: false },
    ],
  },

  // ─── FAQ Section (homepage) ───
  faqSection: {
    ariaLabel: 'أسئلة شائعة',
    overline: 'أسئلة شائعة',
    title: 'كل ما تحتاج تعرفه',
    seeAll: 'عرض جميع الأسئلة',
  },

  // ─── Live Reviews ───
  liveReviews: {
    ariaLabel: 'تقييمات العملاء',
    overlineGoogle: '📍 تقييمات خرائط جوجل',
    overlineFallback: '⭐ تقييمات العملاء',
    title: 'ماذا يقول عملاؤنا؟',
    basedOn: 'بناءً على',
    reviewUnit: 'تقييم',
  },

  // ─── Weather Banner ───
  weatherBanner: {
    extreme: { prefix: 'تنبيه خطر شديد', message: 'حرارة قاتلة للتظليل الرخيص. سيارتك تحتاج نانو سيراميك الآن.' },
    high: { prefix: 'تنبيه حرارة مرتفعة', message: 'الحرارة تتجاوز الحد — التظليل العادي لن يحميك.' },
    moderate: { prefix: 'حرارة معتدلة-مرتفعة', message: 'ننصح بحماية سيارتك قبل موسم الذروة.' },
    jeddahNow: 'جدة الآن',
    cta: 'احمِ سيارتك الآن ←',
  },

  // ─── Thermal Slider ───
  thermalSlider: {
    overline: 'اختبار حراري تفاعلي',
    title: 'شوف الفرق بعينك — قبل وبعد التظليل',
    subtitle: 'اسحب المؤشر لمشاهدة فرق درجة الحرارة داخل المقصورة قبل وبعد تركيب فيلم نانو سيراميك.',
    ariaLabel: 'مقارنة حرارية قبل وبعد التظليل',
    ariaValueText: 'درجة الحرارة:',
    before: '🔥 قبل التظليل',
    beforeDesc: 'حرارة خانقة — المقصورة فرن',
    after: '❄️ بعد التظليل',
    afterDesc: 'مقصورة باردة ومريحة',
    currentTemp: '🌡️ درجة الحرارة الحالية:',
    reduction: '↓ انخفاض',
    hint: '👆 اسحب المؤشر يمين ويسار لمشاهدة الفرق',
  },

  // ─── Corporate ROI Calculator ───
  roiCalculator: {
    title: '📊 حاسبة توفير الطاقة — كود البناء السعودي (SBC)',
    subtitle: 'احسب العائد على الاستثمار لمشروع عزل واجهاتك حسب معايير',
    glassArea: 'مساحة الواجهات الزجاجية (م²)',
    unit: 'م²',
    monthlyBill: 'فاتورة الكهرباء الشهرية (ر.س)',
    currency: 'ر.س',
    floors: 'عدد الطوابق',
    annualSavings: 'التوفير السنوي المتوقع',
    projectCost: 'تكلفة المشروع التقديرية',
    paybackPeriod: 'فترة الاسترداد',
    paybackUnit: 'شهر',
    tenYearNet: 'صافي التوفير (10 سنوات)',
    disclaimer: '* الأرقام تقديرية بناءً على تعريفة SEC التجارية',
    disclaimerSuffix: 'ومعايير ASHRAE 90.1. النتائج الفعلية تختلف حسب نوع الزجاج واتجاه الواجهة.',
  },

  // ─── Cross-Sell Cards ───
  crossSell: {
    ariaLabel: 'خدمات مكمّلة',
    sectionTitle: 'خدمات',
    sectionTitleHighlight: 'مكمّلة',
    sectionTitleSuffix: 'قد تهمك',
    services: {
      'car-insulation-jeddah': [
        { icon: '🏢', title: 'عزل زجاج المباني', description: 'ظللت سيارتك؟ نوافذ بيتك ومكتبك تحتاج نفس الحماية — توفير 35-45% من فاتورة الكهرباء.', href: '/building-glass-insulation', linkText: 'تعرف على عزل المباني' },
        { icon: '🇺🇸', title: 'عازل جونسون الأمريكي', description: 'الخيار الأول للسيارات الفارهة — تقنية Supreme IR بضمان يمتد لعمر السيارة من الوكيل المعتمد.', href: '/johnson-authorized-dealer', linkText: 'اكتشف جونسون' },
        { icon: '🔴', title: 'عازل 3M — Crystalline', description: '200+ طبقة نانو — أعلى TSER في العالم بنسبة 90%. شبه شفاف ومطابق لنظام المرور.', href: '/3m-authorized-dealer', linkText: 'اكتشف 3M' },
      ],
      'building-glass-insulation': [
        { icon: '🚗', title: 'تظليل سيارات جدة', description: 'عزلت مبناك؟ سيارتك تحتاج نفس الحماية — نانو سيراميك يحجب 97% من الأشعة تحت الحمراء.', href: '/car-insulation-jeddah', linkText: 'تعرف على تظليل السيارات' },
        { icon: '🇺🇸', title: 'عازل جونسون للمباني', description: 'خطوط NightScape و Sunlight المخصصة للواجهات التجارية والسكنية بتقنية أمريكية.', href: '/johnson-authorized-dealer', linkText: 'اكتشف جونسون' },
        { icon: '🔴', title: 'أفلام 3M للمباني التجارية', description: '3M تُنتج أفلاماً معمارية متخصصة بحجب حراري فائق — مثالية للأبراج التجارية والواجهات الزجاجية.', href: '/3m-authorized-dealer', linkText: 'اكتشف 3M' },
      ],
      'johnson-authorized-dealer': [
        { icon: '🚗', title: 'تظليل سيارات جدة', description: 'عزل حراري احترافي بأفلام نانو سيراميك — حرارة مقصورتك تنزل من 72°م لـ 38°م.', href: '/car-insulation-jeddah', linkText: 'خدمة تظليل السيارات' },
        { icon: '🔴', title: 'عازل 3M — بديل قوي', description: '3M Crystalline بـ 200+ طبقة نانو — TSER 90% وحجب UV 99.9%. وكيل معتمد أيضاً.', href: '/3m-authorized-dealer', linkText: 'مقارنة مع 3M' },
      ],
      '3m-authorized-dealer': [
        { icon: '🚗', title: 'تظليل سيارات جدة', description: 'عزل حراري احترافي بأفلام نانو سيراميك — حرارة مقصورتك تنزل من 72°م لـ 38°م.', href: '/car-insulation-jeddah', linkText: 'خدمة تظليل السيارات' },
        { icon: '🇺🇸', title: 'عازل جونسون — بديل قوي', description: 'Johnson Supreme IR بحجب 97% IR. تقنية CST™ لمقاومة الخدوش. وكيل معتمد أيضاً.', href: '/johnson-authorized-dealer', linkText: 'مقارنة مع جونسون' },
      ],
    },
  },
} satisfies Record<string, unknown>;

// Recursive type that widens all string literals to string
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? DeepStringify<U>[]
  : T extends Record<string, unknown>
  ? { [K in keyof T]: DeepStringify<T[K]> }
  : T;

export type Dictionary = DeepStringify<typeof ar>;
