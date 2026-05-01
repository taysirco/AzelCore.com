// ═══ AzelCore.com — Pricing Tiers ═══

export const carTintingPrices = {
  title: "أسعار تظليل السيارات في جدة",
  note: "الأسعار تشمل التركيب + الضمان. لا توجد رسوم مخفية.",
  tiers: [
    {
      filmType: "نانو سيراميك",
      sedan: { price: "1,500-2,200", example: "كامري، أكورد، سوناتا" },
      suv: { price: "2,200-3,000", example: "باترول، لاندكروزر، تاهو" },
      luxury: { price: "2,500-3,500", example: "لكزس LS، مرسيدس S، BMW 7" },
      warranty: "10 سنوات",
      includes: ["قص إلكتروني", "فحص حراري FLIR", "فحص سنوي مجاني"],
    },
    {
      filmType: "3M Crystalline",
      sedan: { price: "2,000-2,800", example: "كامري، أكورد" },
      suv: { price: "2,800-3,500", example: "باترول، تاهو" },
      luxury: { price: "3,000-4,000", example: "لكزس، مرسيدس، BMW" },
      warranty: "عمر السيارة",
      includes: ["شهادة 3M رسمية", "قص إلكتروني", "فحص سنوي"],
    },
    {
      filmType: "LLumar CTX",
      sedan: { price: "1,200-1,800", example: "كامري، سوناتا" },
      suv: { price: "1,800-2,500", example: "باترول، تاهو" },
      luxury: { price: "2,000-3,000", example: "لكزس، مرسيدس" },
      warranty: "7 سنوات",
      includes: ["شهادة LLumar", "قص إلكتروني"],
    },
    {
      filmType: "كربوني",
      sedan: { price: "600-900", example: "أكسنت، صني، ألتيما" },
      suv: { price: "900-1,200", example: "توسان، سبورتاج" },
      luxury: { price: "1,000-1,500", example: "—" },
      warranty: "5 سنوات",
      includes: ["قص يدوي احترافي"],
    },
    {
      filmType: "عادي (مصبوغ)",
      sedan: { price: "300-500", example: "أي سيارة سيدان" },
      suv: { price: "400-600", example: "أي SUV" },
      luxury: { price: "—", example: "غير منصوح للفارهة" },
      warranty: "سنة واحدة",
      includes: ["تركيب أساسي"],
    },
  ],
  addons: [
    { name: "شريط أمامي (Sun Strip)", price: "100-200 ر.س" },
    { name: "إزالة تظليل قديم", price: "200-400 ر.س" },
    { name: "خدمة متنقلة", price: "+100-200 ر.س" },
    { name: "PPF حماية طلاء (كابوت)", price: "1,500-3,000 ر.س" },
  ],
};

export const buildingPrices = {
  title: "أسعار عزل زجاج المباني",
  unit: "ريال سعودي / متر مربع",
  tiers: [
    { filmType: "نانو سيراميك", pricePerSqm: "150-200", minArea: "20 م²", warranty: "15 سنة" },
    { filmType: "فيلم عاكس", pricePerSqm: "80-150", minArea: "30 م²", warranty: "10 سنوات" },
    { filmType: "فيلم حراري شفاف", pricePerSqm: "50-100", minArea: "20 م²", warranty: "10 سنوات" },
    { filmType: "فيلم أمان", pricePerSqm: "70-120", minArea: "20 م²", warranty: "10 سنوات" },
    { filmType: "فيلم خصوصية", pricePerSqm: "60-100", minArea: "10 م²", warranty: "8 سنوات" },
  ],
  estimates: [
    { type: "شقة 3 غرف (8-10 نوافذ)", range: "2,000-5,000 ر.س" },
    { type: "فيلا متوسطة", range: "8,000-15,000 ر.س" },
    { type: "محل تجاري (واجهة)", range: "3,000-8,000 ر.س" },
    { type: "مبنى مكاتب (طابق واحد)", range: "10,000-25,000 ر.س" },
    { type: "برج تجاري (واجهة كاملة)", range: "عرض سعر خاص" },
  ],
};
