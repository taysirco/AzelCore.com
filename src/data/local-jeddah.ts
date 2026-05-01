// ═══ AzelCore.com — Local Jeddah Entities ═══
// بيانات أحياء جدة + المناخ + الكثافة + القرب من البحر

export interface JeddahDistrict {
  id: string;
  nameAr: string;
  nameEn: string;
  zone: "شمال" | "جنوب" | "وسط" | "شرق" | "غرب";
  avgTemp: string;
  humidity: string;
  uvIndex: string;
  saltCorrosion: "عالي" | "متوسط" | "منخفض";
  distanceFromSea: string;
  economicLevel: "فاخر" | "متوسط-عالي" | "متوسط" | "شعبي";
  recommendation: string;
  popularCars: string[];
}

export const jeddahDistricts: JeddahDistrict[] = [
  {
    id: "al-rawdah",
    nameAr: "حي الروضة",
    nameEn: "Al Rawdah",
    zone: "شمال",
    avgTemp: "38°م",
    humidity: "78%",
    uvIndex: "Very High (11+)",
    saltCorrosion: "عالي",
    distanceFromSea: "3 كم",
    economicLevel: "فاخر",
    recommendation: "نانو سيراميك + طبقة حماية ملحية — الرطوبة العالية تتطلب فيلم مقاوم للتآكل",
    popularCars: ["لكزس ES", "مرسيدس S-Class", "BMW 7 Series"],
  },
  {
    id: "al-hamdaniya",
    nameAr: "حي الحمدانية",
    nameEn: "Al Hamdaniya",
    zone: "شرق",
    avgTemp: "42°م",
    humidity: "45%",
    uvIndex: "Extreme (12+)",
    saltCorrosion: "منخفض",
    distanceFromSea: "25 كم",
    economicLevel: "متوسط",
    recommendation: "فيلم 3M CR70 + تظليل 28% — الحرارة أعلى لكن الملوحة أقل",
    popularCars: ["تويوتا كامري", "هيونداي أكسنت", "كيا K5"],
  },
  {
    id: "al-safa",
    nameAr: "حي الصفا",
    nameEn: "Al Safa",
    zone: "وسط",
    avgTemp: "39°م",
    humidity: "70%",
    uvIndex: "Very High (11+)",
    saltCorrosion: "متوسط",
    distanceFromSea: "5 كم",
    economicLevel: "فاخر",
    recommendation: "XPEL PRIME XR Plus — أعلى حجب IR مع وضوح تام للرؤية",
    popularCars: ["رنج روفر", "بورشه كايين", "لكزس LX"],
  },
  {
    id: "al-naeem",
    nameAr: "حي النعيم",
    nameEn: "Al Naeem",
    zone: "شمال",
    avgTemp: "38°م",
    humidity: "75%",
    uvIndex: "Very High (11+)",
    saltCorrosion: "عالي",
    distanceFromSea: "4 كم",
    economicLevel: "متوسط-عالي",
    recommendation: "LLumar CTX + حماية UV كاملة — توازن بين الجودة والسعر",
    popularCars: ["تويوتا كامري", "هوندا أكورد", "نيسان ألتيما"],
  },
  {
    id: "al-marwah",
    nameAr: "حي المروة",
    nameEn: "Al Marwah",
    zone: "جنوب",
    avgTemp: "40°م",
    humidity: "65%",
    uvIndex: "Extreme (12+)",
    saltCorrosion: "متوسط",
    distanceFromSea: "8 كم",
    economicLevel: "متوسط",
    recommendation: "فيلم كربوني مع طبقة UV — خيار اقتصادي مع حماية جيدة",
    popularCars: ["تويوتا هايلوكس", "نيسان باترول", "تويوتا كامري"],
  },
  {
    id: "al-zahra",
    nameAr: "حي الزهراء",
    nameEn: "Al Zahra",
    zone: "شمال",
    avgTemp: "37°م",
    humidity: "80%",
    uvIndex: "High (10)",
    saltCorrosion: "عالي",
    distanceFromSea: "2 كم",
    economicLevel: "فاخر",
    recommendation: "نانو سيراميك من XPEL — مقاومة ملحية عالية + ضمان ممتد",
    popularCars: ["مرسيدس GLE", "BMW X5", "أودي Q7"],
  },
  {
    id: "al-khalidiya",
    nameAr: "حي الخالدية",
    nameEn: "Al Khalidiya",
    zone: "غرب",
    avgTemp: "36°م",
    humidity: "85%",
    uvIndex: "High (10)",
    saltCorrosion: "عالي",
    distanceFromSea: "1 كم",
    economicLevel: "فاخر",
    recommendation: "نانو سيراميك مع طبقة مقاومة ملحية إضافية — أقرب للبحر",
    popularCars: ["لكزس LX 600", "تويوتا لاندكروزر", "مرسيدس G-Class"],
  },
  {
    id: "al-nuzha",
    nameAr: "حي النزهة",
    nameEn: "Al Nuzha",
    zone: "شمال",
    avgTemp: "38°م",
    humidity: "72%",
    uvIndex: "Very High (11+)",
    saltCorrosion: "متوسط",
    distanceFromSea: "6 كم",
    economicLevel: "متوسط-عالي",
    recommendation: "3M Crystalline 70 — أفضل رؤية ليلية مع عزل حراري ممتاز",
    popularCars: ["تويوتا كامري", "هوندا أكورد", "كيا K5"],
  },
  {
    id: "al-shati",
    nameAr: "حي الشاطئ",
    nameEn: "Al Shati",
    zone: "غرب",
    avgTemp: "36°م",
    humidity: "88%",
    uvIndex: "High (10)",
    saltCorrosion: "عالي",
    distanceFromSea: "0.5 كم",
    economicLevel: "فاخر",
    recommendation: "XPEL PRIME XR Plus + PPF — أعلى مقاومة للملوحة والرطوبة",
    popularCars: ["رولز رويس", "بنتلي", "مرسيدس S-Class"],
  },
  {
    id: "al-ajaweed",
    nameAr: "حي الأجاويد",
    nameEn: "Al Ajaweed",
    zone: "جنوب",
    avgTemp: "41°م",
    humidity: "50%",
    uvIndex: "Extreme (12+)",
    saltCorrosion: "منخفض",
    distanceFromSea: "20 كم",
    economicLevel: "متوسط",
    recommendation: "فيلم 3M CR70 — حرارة عالية تحتاج عزل قوي بسعر مناسب",
    popularCars: ["تويوتا هايلوكس", "نيسان صني", "هيونداي أكسنت"],
  },
];

// ─── مدن المملكة (لصومعة المباني) ───
export const ksaCities = [
  { id: "riyadh", nameAr: "الرياض", avgTemp: "44°م", humidity: "15%", buildingType: "أبراج تجارية + فلل" },
  { id: "dammam", nameAr: "الدمام", avgTemp: "40°م", humidity: "70%", buildingType: "واجهات بحرية + مجمعات" },
  { id: "makkah", nameAr: "مكة المكرمة", avgTemp: "43°م", humidity: "35%", buildingType: "فنادق + أبراج سكنية" },
  { id: "madinah", nameAr: "المدينة المنورة", avgTemp: "42°م", humidity: "20%", buildingType: "فنادق + مجمعات تجارية" },
  { id: "taif", nameAr: "الطائف", avgTemp: "32°م", humidity: "30%", buildingType: "فلل + منتجعات" },
  { id: "tabuk", nameAr: "تبوك", avgTemp: "38°م", humidity: "25%", buildingType: "مباني حكومية + سكنية" },
  { id: "abha", nameAr: "أبها", avgTemp: "28°م", humidity: "45%", buildingType: "فلل + سياحية" },
  { id: "khobar", nameAr: "الخبر", avgTemp: "39°م", humidity: "65%", buildingType: "أبراج بحرية + تجارية" },
  { id: "jubail", nameAr: "الجبيل", avgTemp: "40°م", humidity: "60%", buildingType: "مباني صناعية + سكنية" },
  { id: "yanbu", nameAr: "ينبع", avgTemp: "38°م", humidity: "70%", buildingType: "صناعية + سكنية" },
  { id: "najran", nameAr: "نجران", avgTemp: "36°م", humidity: "20%", buildingType: "سكنية" },
  { id: "jazan", nameAr: "جيزان", avgTemp: "35°م", humidity: "75%", buildingType: "سكنية + تجارية" },
  { id: "hail", nameAr: "حائل", avgTemp: "37°م", humidity: "18%", buildingType: "سكنية" },
  { id: "qassim", nameAr: "القصيم", avgTemp: "42°م", humidity: "15%", buildingType: "زراعية + سكنية" },
  { id: "al-ahsa", nameAr: "الأحساء", avgTemp: "43°م", humidity: "40%", buildingType: "تراثية + سكنية" },
];

// ─── معالم جدة (للربط الجغرافي) ───
export const jeddahLandmarks = [
  "كورنيش جدة", "نافورة الملك فهد", "جدة التاريخية (البلد)",
  "مول الأندلس", "مول رد سي", "أبراج الهيلتون",
  "طريق الملك عبدالعزيز", "طريق الملك فهد", "طريق المدينة",
  "مطار الملك عبدالعزيز الدولي", "جامعة الملك عبدالعزيز",
  "ميناء جدة الإسلامي",
];
