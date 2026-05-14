// ═══ AzelCore.com — FAQ Database ═══
export interface FAQ {
  id: string; question: string; answer: string;
  service: "car-tinting" | "building-glass" | "thermal" | "general";
  intent: "legal" | "price" | "comparison" | "safety" | "warranty" | "process";
}

export const getFaqs = (isAr: boolean): FAQ[] => [
  {
    id: "legal-1",
    question: isAr ? "كم نسبة التظليل المسموح بها في السعودية؟" : "What is the allowed tint percentage in Saudi Arabia?",
    answer: isAr ? "حسب نظام المرور: 30% VLT كحد أقصى للجانبي والخلفي. الأمامي شفاف بالكامل. نركب 28% لتجنب المخالفة. الغرامة 500-900 ر.س مع إلزام بالإزالة." : "According to traffic laws: Max 30% VLT for side and rear. Front must be fully clear. We install 28% to avoid violations. Fine is 500-900 SAR with mandatory removal.",
    service: "car-tinting", intent: "legal",
  },
  {
    id: "legal-2",
    question: isAr ? "هل التظليل الأمامي مسموح في السعودية؟" : "Is front windshield tinting allowed in Saudi Arabia?",
    answer: isAr ? "لا، الويندشيلد يجب أن يكون شفافاً (70%+ VLT). يمكن تركيب شريط علوي 10-15سم فقط. ننصح بـ 3M Crystalline 90 الشفاف الذي يحجب 90% حرارة." : "No, the windshield must be clear (70%+ VLT). A top strip of 10-15cm is allowed. We recommend the clear 3M Crystalline 90 which blocks 90% of heat.",
    service: "car-tinting", intent: "legal",
  },
  {
    id: "compare-1",
    question: isAr ? "ليش اختار النانو سيراميك بدل التظليل العادي؟" : "Why choose nano-ceramic over regular tint?",
    answer: isAr ? "لأن النانو سيراميك يحجب 97% من الأشعة تحت الحمراء (IR) و99% من الأشعة فوق البنفسجية (UV) ويدوم حتى عمر السيارة دون أن يبهت لونه، بينما التظليل العادي يحجب 30% فقط ويتحول للون البنفسجي خلال 6 أشهر في شمس جدة." : "Nano-ceramic blocks 97% of IR rays and 99% of UV rays, and lasts the life of the car without fading. Regular tint blocks only 30% and turns purple within 6 months in Jeddah's sun.",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "compare-2",
    question: isAr ? "3M أحسن ولا LLumar ولا XPEL؟" : "Which is better: 3M, LLumar, or XPEL?",
    answer: isAr ? "3M Crystalline: أفضل رؤية ليلية. LLumar CTX: أفضل قيمة/سعر. XPEL PRIME XR Plus: أعلى TSER بسعر أعلى. الاختيار حسب ميزانيتك ونوع سيارتك." : "3M Crystalline: best night visibility. LLumar CTX: best value/price. XPEL PRIME XR Plus: highest TSER at a premium price. The choice depends on your budget and car type.",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "price-1",
    question: isAr ? "كم سعر تظليل سيارة كامل في جدة؟" : "What is the price of full car tinting in Jeddah?",
    answer: isAr ? "عادي 300-600, كربوني 600-1200, نانو سيراميك 1500-3000, PPF 3000-8000 ر.س. سيدان نانو ~1800 ر.س. SUV ~2500 ر.س." : "Regular 300-600, Carbon 600-1200, Nano-ceramic 1500-3000, PPF 3000-8000 SAR. Sedan Nano ~1800 SAR. SUV ~2500 SAR.",
    service: "car-tinting", intent: "price",
  },
  {
    id: "price-2",
    question: isAr ? "كم تكلفة عزل نوافذ البيت؟" : "How much does home window insulation cost?",
    answer: isAr ? "50-200 ر.س/م². شقة 3 غرف: 2000-5000 ر.س. فيلا: 8000-15000 ر.س. التوفير في الكهرباء يسترد التكلفة خلال 12-18 شهر." : "50-200 SAR/m². 3-room apartment: 2000-5000 SAR. Villa: 8000-15000 SAR. Electricity savings recover the cost within 12-18 months.",
    service: "building-glass", intent: "price",
  },
  {
    id: "safety-1",
    question: isAr ? "هل التظليل يأثر على إشارة الجوال و GPS؟" : "Does tinting affect mobile and GPS signals?",
    answer: isAr ? "الفيلم المعدني يحجب 20-40% من الإشارات. النانو سيراميك والكربوني لا يحجبان أي إشارات لأنهما خاليان من المعادن." : "Metallic film blocks 20-40% of signals. Nano-ceramic and carbon do not block any signals as they are metal-free.",
    service: "car-tinting", intent: "safety",
  },
  {
    id: "process-1",
    question: isAr ? "كم ياخذ وقت تركيب تظليل السيارة؟" : "How long does car tint installation take?",
    answer: isAr ? "من ساعتين إلى 4 ساعات للسيارات السيدان، ومن 3 إلى 5 ساعات للسيارات العائلية (SUV). نوصي بعدم فتح النوافذ أو غسيل السيارة لمدة 3 إلى 5 أيام بعد التركيب لضمان جفاف المادة اللاصقة تماماً، خاصة مع معدلات الرطوبة في جدة." : "2 to 4 hours for sedans, and 3 to 5 hours for SUVs. We recommend not opening windows or washing the car for 3 to 5 days post-installation to ensure complete adhesive drying, especially with Jeddah's humidity.",
    service: "car-tinting", intent: "process",
  },
  {
    id: "warranty-1",
    question: isAr ? "كم مدة ضمان التظليل؟" : "How long is the tint warranty?",
    answer: isAr ? "نانو سيراميك: يمتد لعمر السيارة. 3M Crystalline: عمر السيارة. LLumar CTX: 7 سنوات. كربوني: 5 سنوات. يشمل: تغير اللون، التقشر، الفقاعات." : "Nano-ceramic: Lifetime of the car. 3M Crystalline: Lifetime. LLumar CTX: 7 years. Carbon: 5 years. Covers: color fading, peeling, bubbling.",
    service: "general", intent: "warranty",
  },
  {
    id: "building-1",
    question: isAr ? "كم يوفر عزل المبنى من فاتورة الكهرباء؟" : "How much does building insulation save on electricity?",
    answer: isAr ? "35-45% توفير في التكييف. فيلا بفاتورة 3,200 ر.س تنخفض لـ 1,800 ر.س. مبنى تجاري يوفر 40-60%. التكلفة تُسترد خلال 12-18 شهر." : "35-45% savings on AC. A villa with a 3,200 SAR bill drops to 1,800 SAR. Commercial buildings save 40-60%. Cost is recovered in 12-18 months.",
    service: "building-glass", intent: "price",
  },
  {
    id: "process-2",
    question: isAr ? "هل تقدمون خدمة تظليل متنقلة؟" : "Do you offer mobile tinting service?",
    answer: isAr ? "نعم في جميع أحياء جدة. الفني يحضر بكامل المعدات. تحتاج مكان مظلل ونظيف. رسوم التنقل تبدأ من 100 ر.س." : "Yes, in all Jeddah neighborhoods. The technician arrives fully equipped. You need a shaded, clean area. Mobile fee starts at 100 SAR.",
    service: "car-tinting", intent: "process",
  },
  {
    id: "safety-2",
    question: isAr ? "هل تظليل المباني يقلل الإضاءة الطبيعية؟" : "Does building tint reduce natural light?",
    answer: isAr ? "يعتمد على VLT: فيلم 50% يحافظ على إضاءة جيدة + يحجب 70% حرارة. فيلم 20% يقلل الإضاءة لكن يوفر خصوصية. نختار النسبة المناسبة لكل غرفة." : "It depends on VLT: 50% film keeps good light + blocks 70% heat. 20% film reduces light but provides privacy. We choose the right ratio per room.",
    service: "building-glass", intent: "safety",
  },
  {
    id: "compare-3",
    question: isAr ? "النانو سيراميك مقابل الكربوني — أيهما أفضل؟" : "Nano-ceramic vs Carbon — Which is better?",
    answer: isAr ? "نانو أعلى في كل شيء: IR 97% vs 55%, عمر 10+ vs 5-8 سنوات, لا يحجب إشارات. الكربوني أرخص (600-1200 vs 1500-3000 ر.س)." : "Nano is superior in everything: IR 97% vs 55%, lifespan 10+ vs 5-8 years, no signal block. Carbon is cheaper (600-1200 vs 1500-3000 SAR).",
    service: "car-tinting", intent: "comparison",
  },
  {
    id: "legal-3",
    question: isAr ? "كم غرامة مخالفة التظليل في جدة؟" : "What is the tint violation fine in Jeddah?",
    answer: isAr ? "500-900 ر.س مع إلزام بالإزالة خلال مهلة محددة. الفحص الدوري يرفض السيارة إذا تجاوز 30%. ننصح بـ 28% للأمان." : "500-900 SAR with mandatory removal within a set period. Vehicle Inspection rejects cars exceeding 30%. We advise 28% for safety.",
    service: "car-tinting", intent: "legal",
  },
];
