// ═══ AzelCore.com — FAQ Database ═══
export interface FAQ {
  id: string; question: string; answer: string;
  service: "car-tinting" | "building-glass" | "thermal" | "general";
  intent: "legal" | "price" | "comparison" | "safety" | "warranty" | "process";
}

export const faqs: FAQ[] = [
  {
    id: "legal-1",
    question: "كم نسبة التظليل المسموح بها في السعودية؟",
    answer: "حسب نظام المرور: 30% VLT كحد أقصى للجانبي والخلفي. الأمامي شفاف بالكامل. نركب 28% لتجنب المخالفة. الغرامة 500-900 ر.س مع إلزام بالإزالة.",
    service: "car-tinting", intent: "legal",
  },
  {
    id: "legal-2",
    question: "هل التظليل الأمامي مسموح في السعودية؟",
    answer: "لا، الويندشيلد يجب أن يكون شفافاً (70%+ VLT). يمكن تركيب شريط علوي 10-15سم فقط. ننصح بـ 3M Crystalline 90 الشفاف الذي يحجب 90% حرارة.",
    service: "car-tinting", intent: "legal",
  },
  {
    id: "compare-1",
    question: "إيش الفرق بين النانو سيراميك والتظليل العادي؟",
    answer: "نانو سيراميك: 97% IR, 99% UV, يدوم 10-15 سنة (1500-3000 ر.س). العادي: 30% IR, 70% UV, يتحول بنفسجي خلال 6 أشهر (300-600 ر.س).",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "compare-2",
    question: "3M أحسن ولا LLumar ولا XPEL؟",
    answer: "3M Crystalline: أفضل رؤية ليلية. LLumar CTX: أفضل قيمة/سعر. XPEL PRIME XR Plus: أعلى TSER بسعر أعلى. الاختيار حسب ميزانيتك ونوع سيارتك.",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "price-1",
    question: "كم سعر تظليل سيارة كامل في جدة؟",
    answer: "عادي 300-600, كربوني 600-1200, نانو سيراميك 1500-3000, PPF 3000-8000 ر.س. سيدان نانو ~1800 ر.س. SUV ~2500 ر.س.",
    service: "car-tinting", intent: "price",
  },
  {
    id: "price-2",
    question: "كم تكلفة عزل نوافذ البيت؟",
    answer: "50-200 ر.س/م². شقة 3 غرف: 2000-5000 ر.س. فيلا: 8000-15000 ر.س. التوفير في الكهرباء يسترد التكلفة خلال 12-18 شهر.",
    service: "building-glass", intent: "price",
  },
  {
    id: "safety-1",
    question: "هل التظليل يأثر على إشارة الجوال و GPS؟",
    answer: "الفيلم المعدني يحجب 20-40% من الإشارات. النانو سيراميك والكربوني لا يحجبان أي إشارات لأنهما خاليان من المعادن.",
    service: "car-tinting", intent: "safety",
  },
  {
    id: "process-1",
    question: "كم يحتاج وقت تظليل السيارة؟",
    answer: "سيدان: 2-4 ساعات. SUV: 3-5 ساعات. التجفيف: 3-5 أيام بجدة (رطوبة عالية). لا تنزل الزجاج ولا تغسل السيارة خلالها.",
    service: "car-tinting", intent: "process",
  },
  {
    id: "warranty-1",
    question: "كم مدة ضمان التظليل؟",
    answer: "نانو سيراميك: 10 سنوات. 3M Crystalline: عمر السيارة. LLumar CTX: 7 سنوات. كربوني: 5 سنوات. يشمل: تغير اللون، التقشر، الفقاعات.",
    service: "general", intent: "warranty",
  },
  {
    id: "building-1",
    question: "كم يوفر عزل المبنى من فاتورة الكهرباء؟",
    answer: "35-45% توفير في التكييف. فيلا بفاتورة 3,200 ر.س تنخفض لـ 1,800 ر.س. مبنى تجاري يوفر 40-60%. التكلفة تُسترد خلال 12-18 شهر.",
    service: "building-glass", intent: "price",
  },
  {
    id: "process-2",
    question: "هل تقدمون خدمة تظليل متنقلة؟",
    answer: "نعم في جميع أحياء جدة. الفني يحضر بكامل المعدات. تحتاج مكان مظلل ونظيف. رسوم التنقل تبدأ من 100 ر.س.",
    service: "car-tinting", intent: "process",
  },
  {
    id: "safety-2",
    question: "هل تظليل المباني يقلل الإضاءة الطبيعية؟",
    answer: "يعتمد على VLT: فيلم 50% يحافظ على إضاءة جيدة + يحجب 70% حرارة. فيلم 20% يقلل الإضاءة لكن يوفر خصوصية. نختار النسبة المناسبة لكل غرفة.",
    service: "building-glass", intent: "safety",
  },
  {
    id: "compare-3",
    question: "النانو سيراميك مقابل الكربوني — أيهما أفضل؟",
    answer: "نانو أعلى في كل شيء: IR 97% vs 55%, عمر 10+ vs 5-8 سنوات, لا يحجب إشارات. الكربوني أرخص (600-1200 vs 1500-3000 ر.س).",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "legal-3",
    question: "كم غرامة مخالفة التظليل في جدة؟",
    answer: "500-900 ر.س مع إلزام بالإزالة خلال مهلة محددة. الفحص الدوري يرفض السيارة إذا تجاوز 30%. ننصح بـ 28% للأمان.",
    service: "car-tinting", intent: "legal",
  },
];
