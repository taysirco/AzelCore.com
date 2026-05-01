// ═══ AzelCore.com — Blog Topics ═══

export interface BlogTopic {
  slug: string;
  titleAr: string;
  targetKeyword: string;
  intent: "informational" | "comparison" | "how-to" | "legal";
  linksToServices: string[];
  outline: string[];
  priority: 1 | 2 | 3;
}

export const blogTopics: BlogTopic[] = [
  {
    slug: "tint-laws-saudi-2026",
    titleAr: "قوانين تظليل السيارات في السعودية 2026 — الدليل الكامل",
    targetKeyword: "قوانين تظليل السيارات السعودية",
    intent: "legal",
    linksToServices: ["car-tinting"],
    outline: ["النسب المسموحة حسب نوع الزجاج", "الغرامات والمخالفات", "الفحص الدوري", "كيف تتأكد من نسبة تظليلك", "أنواع مسموحة بدون مخالفة"],
    priority: 1,
  },
  {
    slug: "nano-ceramic-vs-carbon-vs-3m",
    titleAr: "نانو سيراميك مقابل كربوني مقابل 3M — مقارنة شاملة بالأرقام",
    targetKeyword: "تظليل نانو سيراميك مقابل كربوني",
    intent: "comparison",
    linksToServices: ["car-tinting"],
    outline: ["جدول مقارنة TSER/IR/UV", "اختبار الحرارة بالكاميرا", "العمر الافتراضي", "متى تختار كل نوع", "السعر مقابل القيمة"],
    priority: 1,
  },
  {
    slug: "best-car-tint-jeddah-2026",
    titleAr: "أفضل محل تظليل سيارات في جدة 2026 — دليل الاختيار",
    targetKeyword: "أفضل محل تظليل سيارات في جدة",
    intent: "informational",
    linksToServices: ["car-tinting"],
    outline: ["معايير اختيار محل التظليل", "علامات المحل الموثوق", "أسئلة اسألها قبل التظليل", "أسعار السوق 2026", "تحذيرات من المحلات المقلدة"],
    priority: 1,
  },
  {
    slug: "building-insulation-electricity-savings",
    titleAr: "كم يوفر عزل زجاج المبنى من فاتورة الكهرباء؟ — حسابات حقيقية",
    targetKeyword: "توفير فاتورة الكهرباء عزل زجاج",
    intent: "informational",
    linksToServices: ["building-glass", "thermal-windows"],
    outline: ["حسابات الطاقة الشمسية المنقولة", "أمثلة حقيقية (فيلا/شقة/مكتب)", "مدة استرداد التكلفة", "أفضل أنواع الأفلام للتوفير"],
    priority: 1,
  },
  {
    slug: "how-to-spot-fake-tint",
    titleAr: "5 علامات تعرف بيها التظليل المقلد من الأصلي",
    targetKeyword: "تظليل أصلي ولا تقليد",
    intent: "how-to",
    linksToServices: ["car-tinting"],
    outline: ["اختبار اللون بالضوء", "شهادة الضمان الأصلية", "اختبار الحرارة", "رائحة الفيلم", "سعر أقل من السوق = تقليد"],
    priority: 1,
  },
  {
    slug: "ppf-vs-ceramic-coating",
    titleAr: "PPF مقابل النانو سيراميك للطلاء — أيهما تحتاج؟",
    targetKeyword: "PPF مقابل نانو سيراميك",
    intent: "comparison",
    linksToServices: ["car-tinting"],
    outline: ["ما هو PPF", "ما هو النانو سيراميك للطلاء", "جدول مقارنة", "متى تحتاج كل واحد", "هل يمكن الجمع بينهما"],
    priority: 2,
  },
  {
    slug: "jeddah-heat-car-damage",
    titleAr: "ماذا تفعل شمس جدة بسيارتك؟ — 7 أضرار لا تعرفها",
    targetKeyword: "أضرار الشمس على السيارة",
    intent: "informational",
    linksToServices: ["car-tinting", "thermal-cars"],
    outline: ["تشقق الفرش الجلد", "بهتان الطبلون", "تلف الشاشات", "ضعف المكيف", "تآكل المطاط", "ضرر العيون والبشرة", "الحل: العزل الحراري"],
    priority: 2,
  },
  {
    slug: "tint-signal-interference",
    titleAr: "هل التظليل يأثر على إشارة الجوال و GPS؟ — الحقيقة التقنية",
    targetKeyword: "تظليل لا يؤثر على إشارات GPS",
    intent: "informational",
    linksToServices: ["car-tinting"],
    outline: ["أنواع الأفلام وتأثيرها", "لماذا المعدني يحجب", "لماذا النانو لا يحجب", "كيف تختبر بنفسك"],
    priority: 2,
  },
  {
    slug: "vision-2030-energy-efficiency",
    titleAr: "رؤية 2030 وكفاءة الطاقة — دور عزل المباني في تحقيق الأهداف",
    targetKeyword: "كفاءة الطاقة رؤية 2030 عزل مباني",
    intent: "informational",
    linksToServices: ["building-glass", "thermal-windows"],
    outline: ["أهداف رؤية 2030 للطاقة", "كود البناء السعودي", "دور العزل في التوفير", "حوافز حكومية"],
    priority: 3,
  },
  {
    slug: "car-tint-maintenance-guide",
    titleAr: "دليل العناية بتظليل السيارة — 10 نصائح لإطالة عمر الفيلم",
    targetKeyword: "العناية بتظليل السيارة",
    intent: "how-to",
    linksToServices: ["car-tinting"],
    outline: ["التنظيف الصحيح", "منتجات ممنوعة", "متى تبدل التظليل", "علامات التلف المبكر"],
    priority: 3,
  },
];
