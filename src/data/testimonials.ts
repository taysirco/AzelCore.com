// ═══ AzelCore.com — Testimonials ═══

export interface Testimonial {
  id: string;
  name: string;
  district: string;
  carOrBuilding: string;
  service: "car-tinting" | "building-glass";
  filmType: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

export const testimonialTemplate: Testimonial[] = [
  {
    id: "t1", name: "أبو عبدالله", district: "حي الروضة",
    carOrBuilding: "لكزس ES 350", service: "car-tinting", filmType: "نانو سيراميك",
    rating: 5, date: "2026-01",
    text: "الفرق واضح من أول يوم — السيارة كانت تولع من الحر والحين المكيف يبرد بسرعة. الضمان 10 سنوات ريّح بالي.",
    image: "testimonial-customer-01.webp",
  },
  {
    id: "t2", name: "م. خالد", district: "حي الصفا",
    carOrBuilding: "فيلا 4 غرف", service: "building-glass", filmType: "فيلم حراري",
    rating: 5, date: "2025-12",
    text: "فاتورة الكهرباء نزلت من 3,200 لـ 1,900 ر.س بعد عزل كل الشبابيك. المبلغ رجع خلال سنة.",
    image: "testimonial-customer-02.webp",
  },
  {
    id: "t3", name: "سارة", district: "حي النعيم",
    carOrBuilding: "هيونداي توسان 2025", service: "car-tinting", filmType: "3M Crystalline",
    rating: 5, date: "2026-02",
    text: "أهم شي إن الجوال و GPS ما تأثروا. والتظليل شكله راقي ما يبين من برا لكن الرؤية واضحة من جوا.",
    image: "testimonial-customer-03.webp",
  },
  {
    id: "t4", name: "أبو فهد", district: "حي الحمدانية",
    carOrBuilding: "تويوتا كامري 2024", service: "car-tinting", filmType: "LLumar CTX",
    rating: 4, date: "2026-01",
    text: "سعر معقول وجودة ممتازة. الحرارة نقصت بشكل ملحوظ. بس ودي لو كان عندهم فرع أقرب للحمدانية.",
    image: "testimonial-customer-04.webp",
  },
  {
    id: "t5", name: "شركة المستقبل للمقاولات", district: "طريق الملك فهد",
    carOrBuilding: "مبنى مكاتب 5 أدوار", service: "building-glass", filmType: "فيلم عاكس",
    rating: 5, date: "2025-11",
    text: "ظللنا واجهة المبنى كاملة. الشكل صار احترافي والتكييف بطل يشتغل 24 ساعة. وفرنا 40% كهرباء.",
    image: "testimonial-customer-05.webp",
  },
  {
    id: "t6", name: "عبدالرحمن", district: "حي الزهراء",
    carOrBuilding: "BMW X5 2025", service: "car-tinting", filmType: "XPEL PRIME XR+",
    rating: 5, date: "2026-03",
    text: "ركبت أفضل نوع عندهم وما ندمت. الحرارة اختفت تقريباً. الضمان 10 سنوات والتركيب كان نظيف جداً.",
    image: "testimonial-customer-06.webp",
  },
];
