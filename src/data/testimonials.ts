// ═══ AzelCore.com — Testimonials ═══

export interface Testimonial {
  id: string;
  name: string;
  nameEn?: string;
  district: string;
  districtEn?: string;
  carOrBuilding: string;
  carOrBuildingEn?: string;
  service: "car-tinting" | "building-glass";
  filmType: string;
  filmTypeEn?: string;
  rating: number;
  text: string;
  textEn?: string;
  date: string;
  image: string;
}

export const testimonialTemplate: Testimonial[] = [
  {
    id: "t1", name: "أبو عبدالله", nameEn: "Abu Abdullah", district: "حي الروضة", districtEn: "Al Rawdah",
    carOrBuilding: "لكزس ES 350", carOrBuildingEn: "Lexus ES 350", service: "car-tinting", filmType: "نانو سيراميك", filmTypeEn: "Nano Ceramic",
    rating: 5, date: "2026-01",
    text: "الفرق واضح من أول يوم — السيارة كانت تولع من الحر والحين المكيف يبرد بسرعة. الضمان 10 سنوات ريّح بالي.",
    textEn: "The difference is clear from day one — the car used to boil in the heat, now the AC cools quickly. The 10-year warranty gives me peace of mind.",
    image: "testimonial-customer-01.webp",
  },
  {
    id: "t2", name: "م. خالد", nameEn: "Eng. Khaled", district: "حي الصفا", districtEn: "Al Safa",
    carOrBuilding: "فيلا 4 غرف", carOrBuildingEn: "4-Bedroom Villa", service: "building-glass", filmType: "فيلم حراري", filmTypeEn: "Thermal Film",
    rating: 5, date: "2025-12",
    text: "فاتورة الكهرباء نزلت من 3,200 لـ 1,900 ر.س بعد عزل كل الشبابيك. المبلغ رجع خلال سنة.",
    textEn: "My electricity bill dropped from 3,200 to 1,900 SAR after insulating all windows. The investment paid off in a year.",
    image: "testimonial-customer-02.webp",
  },
  {
    id: "t3", name: "سارة", nameEn: "Sarah", district: "حي النعيم", districtEn: "Al Naim",
    carOrBuilding: "هيونداي توسان 2025", carOrBuildingEn: "Hyundai Tucson 2025", service: "car-tinting", filmType: "3M Crystalline", filmTypeEn: "3M Crystalline",
    rating: 5, date: "2026-02",
    text: "أهم شي إن الجوال و GPS ما تأثروا. والتظليل شكله راقي ما يبين من برا لكن الرؤية واضحة من جوا.",
    textEn: "The most important thing is that my phone and GPS weren't affected. The tint looks elegant; you can't see inside, but the view from inside is crystal clear.",
    image: "testimonial-customer-03.webp",
  },
  {
    id: "t4", name: "أبو فهد", nameEn: "Abu Fahad", district: "حي الحمدانية", districtEn: "Al Hamdaniyah",
    carOrBuilding: "تويوتا كامري 2024", carOrBuildingEn: "Toyota Camry 2024", service: "car-tinting", filmType: "LLumar CTX", filmTypeEn: "LLumar CTX",
    rating: 4, date: "2026-01",
    text: "سعر معقول وجودة ممتازة. الحرارة نقصت بشكل ملحوظ. بس ودي لو كان عندهم فرع أقرب للحمدانية.",
    textEn: "Reasonable price and excellent quality. The heat decreased noticeably. I just wish they had a branch closer to Al Hamdaniyah.",
    image: "testimonial-customer-04.webp",
  },
  {
    id: "t5", name: "شركة المستقبل للمقاولات", nameEn: "Al-Mustaqbal Contracting", district: "طريق الملك فهد", districtEn: "King Fahd Road",
    carOrBuilding: "مبنى مكاتب 5 أدوار", carOrBuildingEn: "5-Story Office Building", service: "building-glass", filmType: "فيلم عاكس", filmTypeEn: "Reflective Film",
    rating: 5, date: "2025-11",
    text: "ظللنا واجهة المبنى كاملة. الشكل صار احترافي والتكييف بطل يشتغل 24 ساعة. وفرنا 40% كهرباء.",
    textEn: "We tinted the entire building facade. It looks professional, and the AC no longer runs 24/7. We saved 40% on electricity.",
    image: "testimonial-customer-05.webp",
  },
  {
    id: "t6", name: "عبدالرحمن", nameEn: "Abdulrahman", district: "حي الزهراء", districtEn: "Al Zahra",
    carOrBuilding: "BMW X5 2025", carOrBuildingEn: "BMW X5 2025", service: "car-tinting", filmType: "XPEL PRIME XR+", filmTypeEn: "XPEL PRIME XR+",
    rating: 5, date: "2026-03",
    text: "ركبت أفضل نوع عندهم وما ندمت. الحرارة اختفت تقريباً. الضمان 10 سنوات والتركيب كان نظيف جداً.",
    textEn: "I installed their best film and I don't regret it. The heat is almost gone. 10-year warranty and the installation was very clean.",
    image: "testimonial-customer-06.webp",
  },
];
