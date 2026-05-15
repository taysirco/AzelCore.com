import re

content = """// ═══ AzelCore.com — Pricing Tiers ═══

export const carTintingPrices = {
  title: "أسعار تظليل السيارات في جدة",
  titleEn: "Car Tinting Prices in Jeddah",
  note: "الأسعار تشمل التركيب + الضمان. لا توجد رسوم مخفية.",
  noteEn: "Prices include installation + warranty. No hidden fees.",
  tiers: [
    {
      filmType: "نانو سيراميك",
      filmTypeEn: "Nano Ceramic",
      sedan: { price: "1,500-2,200", example: "كامري، أكورد، سوناتا", exampleEn: "Camry, Accord, Sonata" },
      suv: { price: "2,200-3,000", example: "باترول، لاندكروزر، تاهو", exampleEn: "Patrol, Land Cruiser, Tahoe" },
      luxury: { price: "2,500-3,500", example: "لكزس LS، مرسيدس S، BMW 7", exampleEn: "Lexus LS, Mercedes S, BMW 7" },
      warranty: "10 سنوات",
      warrantyEn: "10 Years",
      includes: ["قص إلكتروني", "فحص حراري FLIR", "فحص سنوي مجاني"],
      includesEn: ["Electronic Cut", "FLIR Thermal Check", "Free Annual Inspection"],
    },
    {
      filmType: "3M Crystalline",
      filmTypeEn: "3M Crystalline",
      sedan: { price: "2,000-2,800", example: "كامري، أكورد", exampleEn: "Camry, Accord" },
      suv: { price: "2,800-3,500", example: "باترول، تاهو", exampleEn: "Patrol, Tahoe" },
      luxury: { price: "3,000-4,000", example: "لكزس، مرسيدس، BMW", exampleEn: "Lexus, Mercedes, BMW" },
      warranty: "عمر السيارة",
      warrantyEn: "Lifetime",
      includes: ["شهادة 3M رسمية", "قص إلكتروني", "فحص سنوي"],
      includesEn: ["Official 3M Certificate", "Electronic Cut", "Annual Inspection"],
    },
    {
      filmType: "LLumar CTX",
      filmTypeEn: "LLumar CTX",
      sedan: { price: "1,200-1,800", example: "كامري، سوناتا", exampleEn: "Camry, Sonata" },
      suv: { price: "1,800-2,500", example: "باترول، تاهو", exampleEn: "Patrol, Tahoe" },
      luxury: { price: "2,000-3,000", example: "لكزس، مرسيدس", exampleEn: "Lexus, Mercedes" },
      warranty: "7 سنوات",
      warrantyEn: "7 Years",
      includes: ["شهادة LLumar", "قص إلكتروني"],
      includesEn: ["LLumar Certificate", "Electronic Cut"],
    },
    {
      filmType: "كربوني",
      filmTypeEn: "Carbon",
      sedan: { price: "600-900", example: "أكسنت، صني، ألتيما", exampleEn: "Accent, Sunny, Altima" },
      suv: { price: "900-1,200", example: "توسان، سبورتاج", exampleEn: "Tucson, Sportage" },
      luxury: { price: "1,000-1,500", example: "—", exampleEn: "—" },
      warranty: "5 سنوات",
      warrantyEn: "5 Years",
      includes: ["قص يدوي احترافي"],
      includesEn: ["Professional Manual Cut"],
    },
    {
      filmType: "عادي (مصبوغ)",
      filmTypeEn: "Dyed (Standard)",
      sedan: { price: "300-500", example: "أي سيارة سيدان", exampleEn: "Any Sedan" },
      suv: { price: "400-600", example: "أي SUV", exampleEn: "Any SUV" },
      luxury: { price: "—", example: "غير منصوح للفارهة", exampleEn: "Not recommended for luxury" },
      warranty: "سنة واحدة",
      warrantyEn: "1 Year",
      includes: ["تركيب أساسي"],
      includesEn: ["Basic Installation"],
    },
  ],
  addons: [
    { name: "شريط أمامي (Sun Strip)", nameEn: "Sun Strip", price: "100-200 ر.س", priceEn: "100-200 SAR" },
    { name: "إزالة تظليل قديم", nameEn: "Old Tint Removal", price: "200-400 ر.س", priceEn: "200-400 SAR" },
    { name: "خدمة متنقلة", nameEn: "Mobile Service", price: "+100-200 ر.س", priceEn: "+100-200 SAR" },
    { name: "PPF حماية طلاء (كابوت)", nameEn: "PPF Paint Protection (Hood)", price: "1,500-3,000 ر.س", priceEn: "1,500-3,000 SAR" },
  ],
};

export const buildingPrices = {
  title: "أسعار عزل زجاج المباني",
  titleEn: "Building Glass Insulation Prices",
  unit: "ريال سعودي / متر مربع",
  unitEn: "SAR / sq.m",
  tiers: [
    { filmType: "نانو سيراميك", filmTypeEn: "Nano Ceramic", pricePerSqm: "150-200", minArea: "20 م²", minAreaEn: "20 sq.m", warranty: "15 سنة", warrantyEn: "15 Years" },
    { filmType: "فيلم عاكس", filmTypeEn: "Reflective Film", pricePerSqm: "80-150", minArea: "30 م²", minAreaEn: "30 sq.m", warranty: "10 سنوات", warrantyEn: "10 Years" },
    { filmType: "فيلم حراري شفاف", filmTypeEn: "Clear Thermal Film", pricePerSqm: "50-100", minArea: "20 م²", minAreaEn: "20 sq.m", warranty: "10 سنوات", warrantyEn: "10 Years" },
    { filmType: "فيلم أمان", filmTypeEn: "Safety Film", pricePerSqm: "70-120", minArea: "20 م²", minAreaEn: "20 sq.m", warranty: "10 سنوات", warrantyEn: "10 Years" },
    { filmType: "فيلم خصوصية", filmTypeEn: "Privacy Film", pricePerSqm: "60-100", minArea: "10 م²", minAreaEn: "10 sq.m", warranty: "8 سنوات", warrantyEn: "8 Years" },
  ],
  estimates: [
    { type: "شقة 3 غرف (8-10 نوافذ)", typeEn: "3-Room Apartment (8-10 windows)", range: "2,000-5,000 ر.س", rangeEn: "2,000-5,000 SAR" },
    { type: "فيلا متوسطة", typeEn: "Medium Villa", range: "8,000-15,000 ر.س", rangeEn: "8,000-15,000 SAR" },
    { type: "محل تجاري (واجهة)", typeEn: "Commercial Shop (Facade)", range: "3,000-8,000 ر.س", rangeEn: "3,000-8,000 SAR" },
    { type: "مبنى مكاتب (طابق واحد)", typeEn: "Office Building (Single Floor)", range: "10,000-25,000 ر.س", rangeEn: "10,000-25,000 SAR" },
    { type: "برج تجاري (واجهة كاملة)", typeEn: "Commercial Tower (Full Facade)", range: "عرض سعر خاص", rangeEn: "Custom Quote" },
  ],
};
"""
with open("src/data/pricing-tiers.ts", "w", encoding="utf-8") as f:
    f.write(content)

