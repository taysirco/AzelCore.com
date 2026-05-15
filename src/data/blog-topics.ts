// ═══ AzelCore.com — Blog Topics ═══

export interface BlogTopic {
  slug: string;
  titleAr: string;
  titleEn?: string;
  targetKeyword: string;
  intent: "informational" | "comparison" | "how-to" | "legal";
  linksToServices: string[];
  outline: string[];
  outlineEn?: string[];
  priority: 1 | 2 | 3;
}

export const blogTopics: BlogTopic[] = [
  {
    slug: "tint-laws-saudi-2026",
    titleAr: "قوانين تظليل السيارات في السعودية 2026 — الدليل الكامل",
    titleEn: "Saudi Car Tinting Laws 2026 — The Complete Guide",
        targetKeyword: "قوانين تظليل السيارات السعودية",
    intent: "legal",
    linksToServices: ["car-tinting"],
    outline: ["النسب المسموحة حسب نوع الزجاج", "الغرامات والمخالفات", "الفحص الدوري", "كيف تتأكد من نسبة تظليلك", "أنواع مسموحة بدون مخالفة"],
    outlineEn: ["Allowed Percentages by Glass Type", "Fines and Violations", "Periodic Inspection", "How to Verify Your Tint Percentage", "Allowed Types Without Violations"],
    priority: 1,
  },
  {
    slug: "nano-ceramic-vs-carbon-vs-3m",
    titleAr: "نانو سيراميك مقابل كربوني مقابل 3M — مقارنة شاملة بالأرقام",
    titleEn: "Nano Ceramic vs Carbon vs 3M — Comprehensive Numbers Comparison",
        targetKeyword: "تظليل نانو سيراميك مقابل كربوني",
    intent: "comparison",
    linksToServices: ["car-tinting"],
    outline: ["جدول مقارنة TSER/IR/UV", "اختبار الحرارة بالكاميرا", "العمر الافتراضي", "متى تختار كل نوع", "السعر مقابل القيمة"],
    outlineEn: ["TSER/IR/UV Comparison Table", "Camera Heat Test", "Lifespan", "When to Choose Each Type", "Price vs Value"],
    priority: 1,
  },
  {
    slug: "best-car-tint-jeddah-2026",
    titleAr: "أفضل محل تظليل سيارات في جدة 2026 — دليل الاختيار",
    titleEn: "Best Car Tinting Shop in Jeddah 2026 — Selection Guide",
        targetKeyword: "أفضل محل تظليل سيارات في جدة",
    intent: "informational",
    linksToServices: ["car-tinting"],
    outline: ["معايير اختيار محل التظليل", "علامات المحل الموثوق", "أسئلة اسألها قبل التظليل", "أسعار السوق 2026", "تحذيرات من المحلات المقلدة"],
    outlineEn: ["Criteria for Choosing a Tint Shop", "Signs of a Reliable Shop", "Questions to Ask Before Tinting", "Market Prices in 2026", "Warnings Against Fake Shops"],
    priority: 1,
  },
  {
    slug: "building-insulation-electricity-savings",
    titleAr: "كم يوفر عزل زجاج المبنى من فاتورة الكهرباء؟ — حسابات حقيقية",
    titleEn: "How Much Does Building Glass Insulation Save on Electricity? — Real Calculations",
        targetKeyword: "توفير فاتورة الكهرباء عزل زجاج",
    intent: "informational",
    linksToServices: ["building-glass"],
    outline: ["حسابات الطاقة الشمسية المنقولة", "أمثلة حقيقية (فيلا/شقة/مكتب)", "مدة استرداد التكلفة", "أفضل أنواع الأفلام للتوفير"],
    outlineEn: ["Transmitted Solar Energy Calculations", "Real Examples (Villa/Apartment/Office)", "ROI Duration", "Best Film Types for Savings"],
    priority: 1,
  },
  {
    slug: "how-to-spot-fake-tint",
    titleAr: "5 علامات تعرف بيها التظليل المقلد من الأصلي",
    titleEn: "5 Signs to Spot Fake Tint from Original",
        targetKeyword: "تظليل أصلي ولا تقليد",
    intent: "how-to",
    linksToServices: ["car-tinting"],
    outline: ["اختبار اللون بالضوء", "شهادة الضمان الأصلية", "اختبار الحرارة", "رائحة الفيلم", "سعر أقل من السوق = تقليد"],
    outlineEn: ["Light Color Test", "Original Warranty Certificate", "Heat Test", "Film Smell", "Price Below Market = Fake"],
    priority: 1,
  },
  {
    slug: "ppf-vs-ceramic-coating",
    titleAr: "PPF مقابل النانو سيراميك للطلاء — أيهما تحتاج؟",
    titleEn: "PPF vs Nano Ceramic Coating — Which Do You Need?",
        targetKeyword: "PPF مقابل نانو سيراميك",
    intent: "comparison",
    linksToServices: ["car-tinting"],
    outline: ["ما هو PPF", "ما هو النانو سيراميك للطلاء", "جدول مقارنة", "متى تحتاج كل واحد", "هل يمكن الجمع بينهما"],
    outlineEn: ["What is PPF", "What is Paint Nano Ceramic", "Comparison Table", "When You Need Each", "Can They Be Combined"],
    priority: 2,
  },
  {
    slug: "jeddah-heat-car-damage",
    titleAr: "ماذا تفعل شمس جدة بسيارتك؟ — 7 أضرار لا تعرفها",
    titleEn: "What Does Jeddah Sun Do to Your Car? — 7 Unknown Damages",
        targetKeyword: "أضرار الشمس على السيارة",
    intent: "informational",
    linksToServices: ["car-tinting", "thermal-cars"],
    outline: ["تشقق الفرش الجلد", "بهتان الطبلون", "تلف الشاشات", "ضعف المكيف", "تآكل المطاط", "ضرر العيون والبشرة", "الحل: العزل الحراري"],
    outlineEn: ["Cracked Leather Seats", "Faded Dashboard", "Screen Damage", "Weak AC", "Rubber Degradation", "Eye and Skin Damage", "The Solution: Thermal Insulation"],
    priority: 2,
  },
  {
    slug: "tint-signal-interference",
    titleAr: "هل التظليل يأثر على إشارة الجوال و GPS؟ — الحقيقة التقنية",
    titleEn: "Does Tint Affect Mobile and GPS Signals? — The Technical Truth",
        targetKeyword: "تظليل لا يؤثر على إشارات GPS",
    intent: "informational",
    linksToServices: ["car-tinting"],
    outline: ["أنواع الأفلام وتأثيرها", "لماذا المعدني يحجب", "لماذا النانو لا يحجب", "كيف تختبر بنفسك"],
    outlineEn: ["Film Types and Their Impact", "Why Metallized Films Block Signals", "Why Nano Films Don't Block", "How to Test It Yourself"],
    priority: 2,
  },
  {
    slug: "vision-2030-energy-efficiency",
    titleAr: "رؤية 2030 وكفاءة الطاقة — دور عزل المباني في تحقيق الأهداف",
    titleEn: "Vision 2030 and Energy Efficiency — The Role of Building Insulation",
        targetKeyword: "كفاءة الطاقة رؤية 2030 عزل مباني",
    intent: "informational",
    linksToServices: ["building-glass"],
    outline: ["أهداف رؤية 2030 للطاقة", "كود البناء السعودي", "دور العزل في التوفير", "حوافز حكومية"],
    outlineEn: ["Vision 2030 Energy Goals", "Saudi Building Code", "Role of Insulation in Savings", "Government Incentives"],
    priority: 3,
  },
  {
    slug: "car-tint-maintenance-guide",
    titleAr: "دليل العناية بتظليل السيارة — 10 نصائح لإطالة عمر الفيلم",
    titleEn: "Car Tint Maintenance Guide — 10 Tips to Extend Film Life",
        targetKeyword: "العناية بتظليل السيارة",
    intent: "how-to",
    linksToServices: ["car-tinting"],
    outline: ["التنظيف الصحيح", "منتجات ممنوعة", "متى تبدل التظليل", "علامات التلف المبكر"],
    outlineEn: ["Proper Cleaning", "Prohibited Products", "When to Replace Tint", "Signs of Early Damage"],
    priority: 3,
  },
];
