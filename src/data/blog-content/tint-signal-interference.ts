// ═══ Blog: التظليل وتداخل الإشارات ═══
import type { ArticleModule } from './types';

const article: ArticleModule = {
  ogImage: 'blog-tint-signal-interference.webp',
  serviceLinks: [
    { href: '/car-insulation-jeddah', text: 'تظليل نانو سيراميك — صفر تداخل مع الإشارات', textEn: 'Nano-Ceramic Tint — Zero Signal Interference' },
    { href: '/johnson-authorized-dealer', text: 'أفلام جونسون — خالية من المعادن بنسبة 100%', textEn: 'Johnson Films — 100% Metal-Free' },
    { href: '/3m-authorized-dealer', text: 'أفلام 3M — تقنية غير معدنية بالكامل', textEn: '3M Films — Fully Non-Metallic Technology' },
  ],
  content: {
    quickAnswer: 'التظليل المعدني (Metalized) يحجب 20-60% من إشارات الجوال وGPS وBluetooth لأنه يعمل كقفص فاراداي. التظليل النانو سيراميك والكربوني لا يحجبان أي إشارة لأنهما خاليان من المعادن 100%. في عصر شبكات 5G، اختيار فيلم خالٍ من المعادن أصبح ضرورة.', quickAnswerEn: 'Metalized tint blocks 20-60% of mobile, GPS, and Bluetooth signals because it acts as a Faraday cage. Nano-ceramic and carbon tints do not block any signals as they are 100% metal-free. In the 5G network era, choosing a metal-free film has become a necessity.',
    intro: 'السؤال الأكثر شيوعاً بين عملائنا: "هل التظليل يضعف إشارة الجوال؟" الجواب يعتمد كلياً على نوع الفيلم المستخدم. الأفلام المعدنية القديمة (Metalized) تحتوي جزيئات ألومنيوم أو نيكل تعمل حرفياً كحاجز للموجات الكهرومغناطيسية (مبدأ قفص فاراداي). بينما أفلام النانو سيراميك الحديثة تحجب الحرارة بشكل استثنائي دون أي تأثير على الاتصالات. إليك الشرح الهندسي الكامل بالأرقام.', introEn: 'The most common question among our customers: "Does tint weaken mobile signals?" The answer depends entirely on the film type used. Older Metalized films contain aluminum or nickel particles that literally act as a barrier to electromagnetic waves (Faraday cage principle). Meanwhile, modern nano-ceramic films block heat exceptionally without any impact on communications. Here is the full engineering explanation with numbers.',
    table: {
      headers: ['نوع الفيلم', 'محتوى معدني', 'تأثير على 4G/5G', 'تأثير على GPS', 'تأثير على Bluetooth/NFC'], headersEn: ['Film Type', 'Metal Content', 'Impact on 4G/5G', 'Impact on GPS', 'Impact on Bluetooth/NFC'],
      rows: [
        ['نانو سيراميك (Johnson, 3M, XPEL)', '0% (خالي تماماً)', 'لا يوجد ✅', 'لا يوجد ✅', 'لا يوجد ✅'],
        ['كربوني متقدم (Carbon)', '0%', 'لا يوجد ✅', 'لا يوجد ✅', 'لا يوجد ✅'],
        ['مصبوغ عادي (Dyed)', '0%', 'لا يوجد ✅', 'لا يوجد ✅', 'لا يوجد ✅'],
        ['معدني مفرد (Metalized)', '15% - 25%', 'ضعف 20-40% ⚠️', 'تأخير ملحوظ ⚠️', 'قد يتأثر ⚠️'],
        ['معدني مزدوج (Dual Metal)', '30% - 50%', 'ضعف 40-60% ❌', 'فقدان متكرر ❌', 'لا يعمل غالباً ❌'],
      ], rowsEn: [
        ['Nano-Ceramic (Johnson, 3M, XPEL)', '0% (Completely free)', 'None ✅', 'None ✅', 'None ✅'],
        ['Advanced Carbon', '0%', 'None ✅', 'None ✅', 'None ✅'],
        ['Regular Dyed', '0%', 'None ✅', 'None ✅', 'None ✅'],
        ['Single Metalized', '15% - 25%', '20-40% Weakness ⚠️', 'Noticeable Delay ⚠️', 'May be affected ⚠️'],
        ['Dual Metal', '30% - 50%', '40-60% Weakness ❌', 'Frequent Loss ❌', 'Often Doesn\'t Work ❌']
      ],
    },
    sections: [
      {
        heading: 'لماذا النانو سيراميك شفاف للإشارات تماماً؟', headingEn: 'Why is Nano-Ceramic Completely Transparent to Signals?',
        body: 'النانو سيراميك يستخدم جزيئات سيراميكية (Titanium Nitride أو Zirconium Oxide) بدلاً من المعادن. هذه الجزيئات مصممة لامتصاص وتشتيت الأشعة تحت الحمراء (الحرارة) لكنها شفافة تماماً للموجات الراديوية التي تعمل عليها شبكات الجوال (700MHz-6GHz) وGPS (1.5GHz) وBluetooth (2.4GHz) وNFC. المعادلة: 97% حجب حرارة + 0% حجب إشارات.', bodyEn: 'Nano-ceramic uses ceramic particles (Titanium Nitride or Zirconium Oxide) instead of metals. These particles are designed to absorb and scatter infrared rays (heat) but are completely transparent to the radio waves on which mobile networks (700MHz-6GHz), GPS (1.5GHz), Bluetooth (2.4GHz), and NFC operate. The equation: 97% heat block + 0% signal block.',
      },
      {
        heading: 'التوافق الحرج مع شبكات 5G في السعودية', headingEn: 'Critical Compatibility with 5G Networks in Saudi Arabia',
        body: 'شبكات 5G mmWave تعمل على ترددات عالية جداً (24-39 GHz). هذه الترددات أكثر حساسية بكثير للحواجز المعدنية من شبكات 4G. فيلم معدني يحجب 60-80% من إشارة 5G mmWave — مما يعني سرعات إنترنت بطيئة جداً داخل السيارة. مع توسع STC وMobily في نشر شبكات 5G في جدة والرياض، أصبح اختيار فيلم خالي من المعادن قراراً تقنياً ضرورياً وليس اختيارياً.', bodyEn: '5G mmWave networks operate at very high frequencies (24-39 GHz). These frequencies are far more sensitive to metallic barriers than 4G networks. A metalized film blocks 60-80% of the 5G mmWave signal — meaning very slow internet speeds inside the car. With STC and Mobily expanding 5G networks in Jeddah and Riyadh, choosing a metal-free film has become a necessary technical decision, not an option.',
      },
      {
        heading: 'كيف تفحص فيلمك الحالي بنفسك', headingEn: 'How to Test Your Current Film Yourself',
        body: 'قبل التظليل: ادخل إعدادات الهاتف واحفظ قوة الإشارة بوحدة dBm (الإعدادات > عن الهاتف > حالة الشبكة). بعد التظليل: قِس مرة أخرى في نفس المكان. الفرق المقبول: 0-3 dBm (طبيعي). إذا تجاوز 5 dBm = الفيلم يحتوي معادن. اختبار ثانٍ: ضع مغناطيساً خفيفاً على الفيلم — إذا التصق أو شعرت بمقاومة خفيفة = فيلم معدني.', bodyEn: 'Before tinting: Enter phone settings and save the signal strength in dBm (Settings > About Phone > Network Status). After tinting: Measure again in the same location. Acceptable difference: 0-3 dBm (normal). If it exceeds 5 dBm = film contains metals. Second test: Place a light magnet on the film — if it sticks or you feel slight resistance = metalized film.',
      },
    ],
    expertReview: {
      author: 'م. أحمد سالم', authorEn: 'Eng. Ahmed Salem',
      role: 'مستشار العزل الحراري — عزل كور', roleEn: 'Thermal Insulation Consultant — AzelCore',
      rating: 9.8,
      text: 'مع انتشار المفاتيح الذكية (Smart Key) وأنظمة الدخول بدون لمس وتطبيقات فتح السيارة عن بُعد، أصبح التداخل مع الإشارات مشكلة حقيقية. بعض العملاء جاؤونا لإزالة تظليل معدني لأن مفتاح السيارة الذكي توقف عن العمل من داخل المقصورة. النانو سيراميك يحل هذه المشكلة جذرياً.', textEn: 'With the spread of Smart Keys, keyless entry systems, and remote car unlocking apps, signal interference has become a real issue. Some customers came to us to remove metalized tint because their smart key stopped working from inside the cabin. Nano-ceramic radically solves this problem.',
    },
    faqs: [
      { q: 'هل التظليل الكربوني يؤثر على إشارة الجوال؟', qEn: 'Does carbon tint affect mobile signals?', a: 'لا. الكربوني خالٍ من المعادن تماماً مثل النانو سيراميك. ألياف الكربون لا تتفاعل مع الموجات الراديوية.', aEn: 'No. Carbon is completely metal-free just like nano-ceramic. Carbon fibers do not interact with radio waves.' },
      { q: 'سيارتي فيها تظليل وإشارة الجوال ضعيفة — كيف أتأكد أن السبب هو التظليل؟', qEn: 'My car is tinted and mobile signal is weak — how can I confirm the tint is the cause?', a: 'اختبر قوة الإشارة مع نافذة مفتوحة ثم مغلقة في نفس الموقع. إذا تحسنت الإشارة بشكل ملحوظ عند فتح النافذة = فيلمك معدني. الحل: إزالة المعدني وتركيب نانو سيراميك.', aEn: 'Test the signal strength with an open window then closed in the same location. If the signal significantly improves when the window is open = your film is metalized. Solution: remove metalized and install nano-ceramic.' },
      { q: 'لماذا بعض المحلات لا تزال تستخدم الأفلام المعدنية؟', qEn: 'Why do some shops still use metalized films?', a: 'لأنها أرخص بكثير في التكلفة (الفيلم المعدني يكلف التاجر 30-50 ريالاً للرول مقابل 200-400 ريال للنانو سيراميك). بعض المحلات تبيعه على أنه "نانو" لتحقيق هامش ربح عالٍ.', aEn: 'Because they are much cheaper in cost (metalized film costs the merchant 30-50 SAR per roll versus 200-400 SAR for nano-ceramic). Some shops sell it as "nano" to achieve a high profit margin.' },
    ],
    sources: [
      { label: 'الجمعية الدولية لأفلام النوافذ (IWFA)', labelEn: 'International Window Film Association (IWFA)', url: 'https://www.iwfa.com/' },
    ],
    warning: 'بعض المحلات تبيع فيلماً "نانو سيراميك" لكنه في الحقيقة معدني مخلوط. اطلب ورقة المواصفات (Datasheet) وتأكد أن خانة "Metallic Content" = 0%. أي نسبة معدن مهما كانت ضئيلة = حجب إشارات.', warningEn: 'Some shops sell a "nano-ceramic" film that is actually a metal blend. Ask for the Datasheet and ensure the "Metallic Content" = 0%. Any metal percentage, no matter how small = signal interference.',
    cta: 'تريد تظليلاً بأقصى حجب حراري وصفر تداخل مع إشارات 5G؟ تواصل مع عزل كور بجدة.', ctaEn: 'Want a tint with maximum heat rejection and zero 5G signal interference? Contact AzelCore in Jeddah.',
  },
};

export default article;
