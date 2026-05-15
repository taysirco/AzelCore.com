// ═══ Blog: عزل زجاج المباني وتوفير الكهرباء ═══
import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'blog-building-insulation-savings.webp',
  serviceLinks: [
    { href: '/building-glass-insulation', text: 'خدمة عزل زجاج المباني — وفّر حتى 44% من فاتورة الكهرباء', textEn: 'Building Glass Insulation Service — Save up to 44% on Electricity Bill' },
    { href: '/johnson-authorized-dealer', text: 'أفلام جونسون التجارية للعزل الحراري', textEn: 'Johnson Commercial Thermal Insulation Films' },
  ],
  content: {
    quickAnswer: 'عزل نوافذ فيلا 300م² بفيلم نانو سيراميك يُكلف حوالي 4,500 ريال ويُوفر ما يقارب 8,400 ريال سنوياً من فاتورة الكهرباء. مدة استرداد التكلفة: 6 أشهر فقط. الفيلم يحقق معيار SHGC أقل من 0.25 المطلوب في كود البناء السعودي SBC 601.', quickAnswerEn: 'Insulating a 300m² villa\'s windows with nano-ceramic film costs around 4,500 SAR and saves approximately 8,400 SAR annually on electricity. ROI period: only 6 months. The film achieves an SHGC below 0.25 as required by the Saudi Building Code SBC 601.',
    intro: 'فاتورة كهرباء فيلا متوسطة في جدة تتراوح بين 2,000 و 5,000 ريال شهرياً في ذروة الصيف. السبب الرئيسي؟ نوافذ الزجاج العادي التي تسمح بدخول 85% من الأشعة تحت الحمراء إلى المبنى، مما يرفع حمل التكييف بشكل كبير. عزل النوافذ بأفلام نانو سيراميك يخفض هذه النسبة إلى 22% فقط — وهذا يعني توفيراً حقيقياً يبدأ من أول شهر. هنا الحسابات الفعلية من مشاريعنا المنفذة في جدة.', introEn: 'The electricity bill for an average villa in Jeddah ranges between 2,000 and 5,000 SAR monthly during peak summer. The main reason? Regular glass windows that allow 85% of infrared rays into the building, significantly increasing the AC load. Insulating windows with nano-ceramic films reduces this to just 22% — meaning real savings starting from the very first month. Here are actual calculations from our executed projects in Jeddah.',
    table: {
      headers: ['نوع الفيلم', 'حجب الطاقة الشمسية (TSER)', 'معامل SHGC', 'العمر الافتراضي', 'التكلفة التقريبية (12 نافذة)'], headersEn: ['Film Type', 'Solar Energy Rejection (TSER)', 'SHGC Coefficient', 'Lifespan', 'Approx Cost (12 Windows)'],
      rows: [
        ['Sputtered Multilayer (عاكس)', '78%', '0.15', '15 - 20 سنة', '6,000 - 8,000 ر.س'],
        ['نانو سيراميك شفاف', '65%', '0.22', '10 - 15 سنة', '4,500 - 6,000 ر.س'],
        ['فيلم حراري شفاف اقتصادي', '55%', '0.30', '7 - 10 سنوات', '2,500 - 4,000 ر.س'],
        ['زجاج بدون عزل (مرجع)', '15%', '0.82', '—', '0 ر.س'],
      ], rowsEn: [
        ['Sputtered Multilayer (Reflective)', '78%', '0.15', '15 - 20 years', '6,000 - 8,000 SAR'],
        ['Transparent Nano-Ceramic', '65%', '0.22', '10 - 15 years', '4,500 - 6,000 SAR'],
        ['Economical Transparent Thermal Film', '55%', '0.30', '7 - 10 years', '2,500 - 4,000 SAR'],
        ['Uninsulated Glass (Reference)', '15%', '0.82', '—', '0 SAR'],
      ],
    },
    sections: [
      {
        heading: 'كيف تدخل الحرارة عبر النوافذ — الفيزياء ببساطة', headingEn: 'How Heat Enters Through Windows — Physics Simply Explained',
        body: 'نافذة واحدة بعرض 1.5 متر بدون عزل تنقل ما يعادل 500 واط من الطاقة الحرارية كل ساعة في ذروة الصيف. فيلا بها 12 نافذة = 6,000 واط حرارة زائدة تدخل المبنى كل ساعة. هذا الرقم يعني أن المكيف يعمل بأقصى طاقته طوال اليوم لمعادلة هذا الحمل الحراري الهائل. الزجاج العادي (Single-pane) يمرر 85% من الأشعة تحت الحمراء. حتى الزجاج المزدوج (Double-glazed) يمرر 60% بدون فيلم عزل. الفيلم الحراري يقطع هذا المسار ويرفض الحرارة قبل أن تدخل.', bodyEn: 'A single 1.5m wide window without insulation transmits equivalent to 500 watts of thermal energy per hour during peak summer. A villa with 12 windows = 6,000 watts of excess heat entering the building every hour. This number means the AC runs at maximum capacity all day to offset this massive heat load. Regular glass (Single-pane) passes 85% of infrared rays. Even double-glazed glass passes 60% without insulation film. Thermal film intercepts this path and rejects heat before it enters.',
      },
      {
        heading: 'دراسة حالة ميدانية — فيلا في حي الصفا بجدة', headingEn: 'Field Case Study — A Villa in Al-Safa District, Jeddah',
        body: 'فيلا مساحتها 300م² بها 12 نافذة مطلة على الواجهة الغربية والجنوبية. فاتورة الصيف قبل العزل: 3,200 ريال شهرياً. تم تركيب فيلم نانو سيراميك بنسبة حجب 78% طاقة شمسية. النتيجة: الفاتورة انخفضت إلى 1,800 ريال شهرياً — توفير فوري بنسبة 44%. التوفير الشهري: 1,400 ريال × 6 أشهر صيف = 8,400 ريال سنوياً. على مدار 10 سنوات (عمر الفيلم الافتراضي): 84,000 ريال توفير صافٍ بعد خصم تكلفة التركيب.', bodyEn: 'A 300m² villa with 12 windows facing west and south. Summer bill before insulation: 3,200 SAR monthly. Installed nano-ceramic film with 78% solar energy rejection. Result: Bill dropped to 1,800 SAR monthly — an immediate 44% savings. Monthly savings: 1,400 SAR × 6 summer months = 8,400 SAR annually. Over 10 years (film\'s lifespan): 84,000 SAR net savings after deducting installation cost.',
      },
      {
        heading: 'مقارنة اقتصادية: العزل بالفيلم مقابل تغيير الزجاج بالكامل', headingEn: 'Economic Comparison: Film Insulation vs Full Glass Replacement',
        body: 'تغيير 12 نافذة لزجاج مزدوج (Double-glazed): تكلفة 18,000 إلى 35,000 ريال، يحتاج كسر الإطارات والتركيب خلال 3 إلى 5 أيام، مع تعطيل الغرف أثناء العمل. عزل نفس النوافذ بفيلم نانو سيراميك: تكلفة 4,500 ريال فقط، التركيب خلال 3 إلى 4 ساعات، بدون أي تكسير أو فوضى. النتيجة: الفيلم يوفر 80% من أداء الزجاج المزدوج بتكلفة لا تتجاوز 15% من سعره.', bodyEn: 'Replacing 12 windows with Double-glazed glass: Costs 18,000 to 35,000 SAR, requires breaking frames and installation over 3 to 5 days, disrupting rooms during work. Insulating the same windows with nano-ceramic film: Costs only 4,500 SAR, installation within 3 to 4 hours, without any breaking or mess. Result: The film provides 80% of double-glazed performance at less than 15% of its price.',
      },
    ],
    expertReview: {
      author: 'فريق المشاريع — عزل كور', authorEn: 'Projects Team — AzelCore',
      role: 'قسم عزل المباني والمنشآت', roleEn: 'Building & Facilities Insulation Dept.',
      rating: 9.9,
      text: 'أكبر خطأ نراه هو أن أصحاب العقارات يبدأون بتغيير المكيفات قبل معالجة السبب الحقيقي. لا فائدة من مكيف بقوة 3 طن إذا كانت نوافذك تسرب 6,000 واط حرارة كل ساعة. عالج المصدر أولاً بعزل الزجاج، ثم لاحظ كيف ينخفض استهلاك المكيف تلقائياً.', textEn: 'The biggest mistake we see is property owners starting to change AC units before addressing the real cause. A 3-ton AC is useless if your windows are leaking 6,000 watts of heat every hour. Treat the source first by insulating the glass, then watch how AC consumption drops automatically.',
    },
    faqs: [
      { q: 'هل عزل الزجاج بالفيلم يؤثر على إضاءة الغرفة؟', qEn: 'Does film glass insulation affect room lighting?', a: 'لا، الأفلام الحديثة مصممة لحجب الحرارة (IR) مع السماح بمرور 50% إلى 70% من الضوء الطبيعي. لن تلاحظ فرقاً كبيراً في الإضاءة لكنك ستشعر بفرق ضخم في البرودة.', aEn: 'No, modern films are designed to block heat (IR) while allowing 50% to 70% of natural light to pass. You won\'t notice a major difference in lighting, but you will feel a huge difference in coolness.' },
      { q: 'هل الفيلم يتوافق مع كود البناء السعودي SBC 601؟', qEn: 'Does the film comply with the Saudi Building Code SBC 601?', a: 'نعم. أفلام النانو سيراميك تحقق معامل SHGC بين 0.15 و 0.22، وهو أقل من الحد الأقصى المسموح (0.25) في المنطقة المناخية 1 (جدة). نقدم لك شهادة مطابقة رسمية بعد التركيب.', aEn: 'Yes. Nano-ceramic films achieve an SHGC between 0.15 and 0.22, which is below the maximum allowed (0.25) in Climate Zone 1 (Jeddah). We provide you with an official compliance certificate after installation.' },
      { q: 'كم يستغرق تركيب عزل الزجاج لفيلا كاملة؟', qEn: 'How long does it take to install glass insulation for a full villa?', a: 'فيلا متوسطة (12-16 نافذة): 3 إلى 5 ساعات. مبنى تجاري: يوم إلى يومين. لا يحتاج إخلاء المبنى أو تعطيل الأعمال أثناء التركيب.', aEn: 'An average villa (12-16 windows): 3 to 5 hours. Commercial building: 1 to 2 days. No need to evacuate the building or halt operations during installation.' },
    ],
    warning: 'تركيب الفيلم من فني غير متخصص يسبب فقاعات هوائية وعدم التصاق محكم — مما يُفقد الفيلم 30% من أدائه العازل. اختر مركزاً معتمداً بضمان رسمي.', warningEn: 'Installing film by an unspecialized technician causes air bubbles and poor adhesion — losing 30% of the film\'s insulating performance. Choose an authorized center with an official warranty.',
    cta: 'وفّر آلاف الريالات من فاتورة الكهرباء. احصل على تقييم حراري مجاني لمبناك من خبراء عزل كور بجدة.', ctaEn: 'Save thousands of Riyals on your electricity bill. Get a free thermal assessment for your building from AzelCore experts in Jeddah.',
  },
};

export default article;
