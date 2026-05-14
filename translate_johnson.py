import re

with open('src/app/[locale]/johnson-authorized-dealer/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace productLines
content = content.replace(
"""const productLines = [""",
"""const getProductLines = (isAr: boolean) => [""")

content = content.replace(
"""    tier: 'الفلاجشيب',
    tech: 'نانو سيراميك متعدد الطبقات',
    ir: 97,
    uv: 99,
    tser: 72,
    vlt: '5% - 70%',
    warranty: 'عمر السيارة',
    description: 'أعلى فيلم أداء من جونسون. تقنية نانو سيراميك متعددة الطبقات تحجب 97% من الأشعة تحت الحمراء بدون حجب إشارات الهاتف أو GPS. مثالي لمن يريد أقصى حماية من حرارة جدة.',
    features: ['حجب IR 97%', 'لا يحجب الإشارات', 'CST™ مقاومة خدوش', 'ضمان عمر السيارة', 'صناعة أمريكية'],
    bestFor: 'السيارات الفاخرة + العملاء الباحثين عن أعلى أداء',""",
"""    tier: isAr ? 'الفلاجشيب' : 'Flagship',
    tech: isAr ? 'نانو سيراميك متعدد الطبقات' : 'Multilayer Nano-Ceramic',
    ir: 97,
    uv: 99,
    tser: 72,
    vlt: '5% - 70%',
    warranty: isAr ? 'عمر السيارة' : 'Lifetime Warranty',
    description: isAr ? 'أعلى فيلم أداء من جونسون. تقنية نانو سيراميك متعددة الطبقات تحجب 97% من الأشعة تحت الحمراء بدون حجب إشارات الهاتف أو GPS. مثالي لمن يريد أقصى حماية من حرارة جدة.' : 'The highest performing film from Johnson. Multilayer nano-ceramic technology blocks 97% of IR rays without blocking mobile or GPS signals. Ideal for maximum heat protection in Jeddah.',
    features: isAr ? ['حجب IR 97%', 'لا يحجب الإشارات', 'CST™ مقاومة خدوش', 'ضمان عمر السيارة', 'صناعة أمريكية'] : ['97% IR Block', 'No signal interference', 'CST™ Scratch Resistant', 'Lifetime Warranty', 'American Made'],
    bestFor: isAr ? 'السيارات الفاخرة + العملاء الباحثين عن أعلى أداء' : 'Luxury Cars + Customers seeking top performance',""")

content = content.replace(
"""    tier: 'بريميوم',
    tech: 'نانو سيراميك',
    ir: 92,
    uv: 99,
    tser: 65,
    vlt: '15% - 50%',
    warranty: 'عمر السيارة',
    description: 'أداء قريب من Supreme IR بسعر أقل. نانو سيراميك حقيقي مع حجب 92% IR — خيار ذكي لمن يريد توازن بين الأداء والسعر.',
    features: ['حجب IR 92%', 'نانو سيراميك أصلي', 'لا يحجب الإشارات', 'ضمان عمر السيارة'],
    bestFor: 'العملاء الباحثين عن أداء ممتاز بسعر معقول',""",
"""    tier: isAr ? 'بريميوم' : 'Premium',
    tech: isAr ? 'نانو سيراميك' : 'Nano-Ceramic',
    ir: 92,
    uv: 99,
    tser: 65,
    vlt: '15% - 50%',
    warranty: isAr ? 'عمر السيارة' : 'Lifetime Warranty',
    description: isAr ? 'أداء قريب من Supreme IR بسعر أقل. نانو سيراميك حقيقي مع حجب 92% IR — خيار ذكي لمن يريد توازن بين الأداء والسعر.' : 'Performance close to Supreme IR at a lower price. True nano-ceramic with 92% IR rejection — a smart choice for balancing performance and price.',
    features: isAr ? ['حجب IR 92%', 'نانو سيراميك أصلي', 'لا يحجب الإشارات', 'ضمان عمر السيارة'] : ['92% IR Block', 'Original Nano-Ceramic', 'No signal interference', 'Lifetime Warranty'],
    bestFor: isAr ? 'العملاء الباحثين عن أداء ممتاز بسعر معقول' : 'Customers seeking excellent performance at a reasonable price',""")

content = content.replace(
"""    tier: 'هايبرد',
    tech: 'هايبرد (معدني + صبغي)',
    ir: 86,
    uv: 99,
    tser: 60,
    vlt: '20% - 50%',
    warranty: '5 سنوات',
    description: 'تقنية هايبرد تجمع بين الطبقة المعدنية والصبغية. أداء جيد بسعر متوسط — مناسب للاستخدام اليومي مع حماية قوية من الحرارة.',
    features: ['حجب IR 86%', 'تقنية هايبرد', 'حماية UV 99%', 'ضمان 5 سنوات'],
    bestFor: 'الاستخدام اليومي + الميزانية المتوسطة',""",
"""    tier: isAr ? 'هايبرد' : 'Hybrid',
    tech: isAr ? 'هايبرد (معدني + صبغي)' : 'Hybrid (Metal + Dyed)',
    ir: 86,
    uv: 99,
    tser: 60,
    vlt: '20% - 50%',
    warranty: isAr ? '5 سنوات' : '5 Years',
    description: isAr ? 'تقنية هايبرد تجمع بين الطبقة المعدنية والصبغية. أداء جيد بسعر متوسط — مناسب للاستخدام اليومي مع حماية قوية من الحرارة.' : 'Hybrid technology combining metal and dyed layers. Good performance at a medium price — suitable for daily use with strong heat protection.',
    features: isAr ? ['حجب IR 86%', 'تقنية هايبرد', 'حماية UV 99%', 'ضمان 5 سنوات'] : ['86% IR Block', 'Hybrid Tech', '99% UV Protection', '5 Year Warranty'],
    bestFor: isAr ? 'الاستخدام اليومي + الميزانية المتوسطة' : 'Daily use + Medium budget',""")

content = content.replace(
"""    tier: 'اقتصادي',
    tech: 'كربون نانو',
    ir: 70,
    uv: 99,
    tser: 55,
    vlt: '20% - 35%',
    warranty: '5 سنوات',
    description: 'حل اقتصادي ذكي من جونسون. تقنية كربون نانو توفر حماية معقولة من الحرارة والأشعة بسعر مناسب.',
    features: ['حجب IR 70%', 'كربون نانو', 'حماية UV 99%', 'ضمان 5 سنوات'],
    bestFor: 'الميزانية المحدودة + السيارات الاقتصادية',""",
"""    tier: isAr ? 'اقتصادي' : 'Economy',
    tech: isAr ? 'كربون نانو' : 'Nano-Carbon',
    ir: 70,
    uv: 99,
    tser: 55,
    vlt: '20% - 35%',
    warranty: isAr ? '5 سنوات' : '5 Years',
    description: isAr ? 'حل اقتصادي ذكي من جونسون. تقنية كربون نانو توفر حماية معقولة من الحرارة والأشعة بسعر مناسب.' : 'A smart economical solution from Johnson. Nano-carbon technology provides reasonable heat and UV protection at an affordable price.',
    features: isAr ? ['حجب IR 70%', 'كربون نانو', 'حماية UV 99%', 'ضمان 5 سنوات'] : ['70% IR Block', 'Nano Carbon', '99% UV Protection', '5 Year Warranty'],
    bestFor: isAr ? 'الميزانية المحدودة + السيارات الاقتصادية' : 'Limited budget + Economy cars',""")

content = content.replace(
"""    tier: 'كلاسيكي',
    tech: 'صبغي ثابت اللون (Color-Stable)',
    ir: 50,
    uv: 99,
    tser: 45,
    vlt: '5% - 35%',
    warranty: '5 سنوات',
    description: 'مظهر أنيق كلاسيكي بلون فحمي موحد لا يتحول بنفسجياً. تقنية Color-Stable Charcoal تضمن ثبات اللون لسنوات مع حماية UV كاملة — الخيار الأمثل لمن يريد مظهر راقي بميزانية ذكية.',
    features: ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'لا يحجب الإشارات', 'ضمان 5 سنوات'],
    bestFor: 'من يريد مظهر كلاسيكي أنيق بدون تداخل مع الإشارات',""",
"""    tier: isAr ? 'كلاسيكي' : 'Classic',
    tech: isAr ? 'صبغي ثابت اللون (Color-Stable)' : 'Color-Stable Dyed',
    ir: 50,
    uv: 99,
    tser: 45,
    vlt: '5% - 35%',
    warranty: isAr ? '5 سنوات' : '5 Years',
    description: isAr ? 'مظهر أنيق كلاسيكي بلون فحمي موحد لا يتحول بنفسجياً. تقنية Color-Stable Charcoal تضمن ثبات اللون لسنوات مع حماية UV كاملة — الخيار الأمثل لمن يريد مظهر راقي بميزانية ذكية.' : 'Classic elegant appearance with a uniform charcoal color that does not turn purple. Color-Stable Charcoal technology ensures color stability for years with full UV protection.',
    features: isAr ? ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'لا يحجب الإشارات', 'ضمان 5 سنوات'] : ['Color stable for years', '99% UV Protection', 'No purple fading', 'Signal friendly', '5 Year Warranty'],
    bestFor: isAr ? 'من يريد مظهر كلاسيكي أنيق بدون تداخل مع الإشارات' : 'Those seeking an elegant classic look without signal interference',""")

# Replace faqs
content = content.replace(
"""const faqs = [""",
"""const getFaqs = (isAr: boolean) => [""")

content = content.replace(
"""  { q: 'هل عزل كور وكيل رسمي لجونسون؟', a: 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة Johnson Window Films الأمريكية. كل منتجاتنا أصلية مع رقم تسلسلي قابل للتحقق.' },
  { q: 'ما الفرق بين Supreme IR و InsulatIR؟', a: 'Supreme IR هو الفلاجشيب بحجب 97% IR و TSER 72%، بينما InsulatIR يحجب 92% IR و TSER 65%. كلاهما نانو سيراميك مع ضمان عمر السيارة، لكن Supreme IR يوفر أداء أعلى في حرارة جدة الشديدة.' },
  { q: 'كم مدة الضمان على عازل جونسون؟', a: 'Supreme IR و InsulatIR: ضمان عمر السيارة. Marathon و Ray Guard و Renegade: ضمان 5 سنوات. الضمان يشمل التغير اللوني والفقاعات وتقشر الفيلم.' },
  { q: 'هل عازل جونسون يحجب إشارات الجوال؟', a: 'لا! جميع خطوط إنتاج جونسون مصممة بتقنية غير معدنية لا تؤثر على إشارات الهاتف أو GPS أو الرادار أو أنظمة الدفع بدون تلامس.' },
  { q: 'كم وقت يستغرق تظليل السيارة بجونسون؟', a: 'تظليل سيارة سيدان كاملة يستغرق من 2-4 ساعات حسب الموديل. SUV قد يستغرق 3-5 ساعات. نوصي بحجز موعد مسبق لضمان التركيب في بيئة نظيفة.' },
  { q: 'هل جونسون متوافق مع قوانين المرور السعودية؟', a: 'نعم، نوفر جميع درجات الـ VLT من 5% إلى 70%. ننصح عملاءنا بالدرجات المتوافقة مع أنظمة المرور ونقدم استشارة مجانية بخصوص الدرجة المناسبة.' },""",
"""  {
    q: isAr ? 'هل عزل كور وكيل رسمي لجونسون؟' : 'Is AzelCore an official Johnson dealer?',
    a: isAr ? 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة Johnson Window Films الأمريكية. كل منتجاتنا أصلية مع رقم تسلسلي قابل للتحقق.' : 'Yes, AzelCore is an officially registered authorized dealer for American Johnson Window Films. All products are original with a verifiable serial number.'
  },
  {
    q: isAr ? 'ما الفرق بين Supreme IR و InsulatIR؟' : 'What is the difference between Supreme IR and InsulatIR?',
    a: isAr ? 'Supreme IR هو الفلاجشيب بحجب 97% IR و TSER 72%، بينما InsulatIR يحجب 92% IR و TSER 65%. كلاهما نانو سيراميك مع ضمان عمر السيارة، لكن Supreme IR يوفر أداء أعلى في حرارة جدة الشديدة.' : 'Supreme IR is the flagship with 97% IR block and 72% TSER, while InsulatIR blocks 92% IR with 65% TSER. Both are nano-ceramic with a lifetime warranty, but Supreme IR offers higher performance in extreme Jeddah heat.'
  },
  {
    q: isAr ? 'كم مدة الضمان على عازل جونسون؟' : 'How long is the warranty on Johnson films?',
    a: isAr ? 'Supreme IR و InsulatIR: ضمان عمر السيارة. Marathon و Ray Guard و Renegade: ضمان 5 سنوات. الضمان يشمل التغير اللوني والفقاعات وتقشر الفيلم.' : 'Supreme IR and InsulatIR: Lifetime Warranty. Marathon, Ray Guard, and Renegade: 5 Years. The warranty covers color change, bubbling, and peeling.'
  },
  {
    q: isAr ? 'هل عازل جونسون يحجب إشارات الجوال؟' : 'Does Johnson tint block mobile signals?',
    a: isAr ? 'لا! جميع خطوط إنتاج جونسون مصممة بتقنية غير معدنية لا تؤثر على إشارات الهاتف أو GPS أو الرادار أو أنظمة الدفع بدون تلامس.' : 'No! All Johnson product lines are designed with non-metal technology that does not affect mobile, GPS, radar, or contactless payment systems.'
  },
  {
    q: isAr ? 'كم وقت يستغرق تظليل السيارة بجونسون؟' : 'How long does it take to tint a car with Johnson?',
    a: isAr ? 'تظليل سيارة سيدان كاملة يستغرق من 2-4 ساعات حسب الموديل. SUV قد يستغرق 3-5 ساعات. نوصي بحجز موعد مسبق لضمان التركيب في بيئة نظيفة.' : 'Tinting a full sedan takes 2-4 hours depending on the model. An SUV may take 3-5 hours. We recommend booking an appointment in advance to ensure installation in a clean environment.'
  },
  {
    q: isAr ? 'هل جونسون متوافق مع قوانين المرور السعودية؟' : 'Is Johnson compliant with Saudi traffic laws?',
    a: isAr ? 'نعم، نوفر جميع درجات الـ VLT من 5% إلى 70%. ننصح عملاءنا بالدرجات المتوافقة مع أنظمة المرور ونقدم استشارة مجانية بخصوص الدرجة المناسبة.' : 'Yes, we provide all VLT shades from 5% to 70%. We advise our customers on shades compliant with traffic laws and offer free consultation.'
  },""")

# Replace graphSchema
content = content.replace(
"""const graphSchema = {""",
"""const getGraphSchema = (isAr: boolean) => ({""")

content = content.replace(
"""    },
  ],
};""",
"""    },
  ],
});""")

content = content.replace(
"""      description: 'فيلم تظليل نانو سيراميك أمريكي يحجب 97% من الأشعة تحت الحمراء',""",
"""      description: isAr ? 'فيلم تظليل نانو سيراميك أمريكي يحجب 97% من الأشعة تحت الحمراء' : 'American nano-ceramic tint film blocking 97% of infrared rays',""")

content = content.replace(
"""        warrantyScope: 'تغير اللون + التقشر + الفقاعات',""",
"""        warrantyScope: isAr ? 'تغير اللون + التقشر + الفقاعات' : 'Color change + Peeling + Bubbling',""")

content = content.replace(
"""          name: 'حجز موعد تظليل جونسون',""",
"""          name: isAr ? 'حجز موعد تظليل جونسون' : 'Book Johnson Tint Appointment',""")

content = content.replace(
"""        author: { '@type': 'Person', name: 'محمد الزهراني' },
        reviewBody: 'ركبت Supreme IR على لكزس — فرق الحرارة واضح من أول يوم. الضمان مكتوب والشغل نظيف.',""",
"""        author: { '@type': 'Person', name: isAr ? 'محمد الزهراني' : 'Mohammed Al-Zahrani' },
        reviewBody: isAr ? 'ركبت Supreme IR على لكزس — فرق الحرارة واضح من أول يوم. الضمان مكتوب والشغل نظيف.' : 'Installed Supreme IR on a Lexus — the heat difference is clear from day one. Written warranty and clean work.',""")

content = content.replace(
"""      mainEntity: faqs.map(f => ({""",
"""      mainEntity: getFaqs(isAr).map(f => ({""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'وكيل جونسون المعتمد', item: `${SITE_URL}/johnson-authorized-dealer` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'وكيل جونسون المعتمد' : 'Johnson Authorized Dealer', item: `${SITE_URL}/johnson-authorized-dealer` },""")

# Component updates
content = content.replace(
"""export default async function JohnsonDealerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      {/* Unified @graph — Product + FAQ + Breadcrumb + Speakable */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />""",
"""export default async function JohnsonDealerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const productLines = getProductLines(isAr);
  const faqs = getFaqs(isAr);
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema(isAr)) }} />""")

content = content.replace(
"""      <ServiceSummary summary="على عكس الأفلام التجارية مجهولة المصدر، أفلام جونسون الأمريكية (منذ 1961) تقدم 5 خطوط إنتاج متخصصة أبرزها Supreme IR بنسبة حجب 97% للأشعة تحت الحمراء. عزل كور وكيل جونسون المعتمد في جدة — مع ضمان يصل لعمر السيارة وشهادة IWFA لكل فني تركيب." />""",
"""      <ServiceSummary summary={isAr ? "على عكس الأفلام التجارية مجهولة المصدر، أفلام جونسون الأمريكية (منذ 1961) تقدم 5 خطوط إنتاج متخصصة أبرزها Supreme IR بنسبة حجب 97% للأشعة تحت الحمراء. عزل كور وكيل جونسون المعتمد في جدة — مع ضمان يصل لعمر السيارة وشهادة IWFA لكل فني تركيب." : "Unlike unknown commercial films, American Johnson films (since 1961) offer 5 specialized lines, notably Supreme IR with 97% infrared rejection. AzelCore is your authorized Johnson dealer in Jeddah — with a warranty up to the car's lifetime and an IWFA certificate for every installer."} />""")

content = content.replace(
"""          <div className={styles.dealerBadge}>
            <span className={styles.badgePulse} />
            🇺🇸 وكيل جونسون المعتمد — AzelCore
          </div>
          <h1 className={styles.heroTitle}>
            أفلام <span className={styles.goldGradient}>Johnson Window Films</span>
            <br />الأمريكية في جدة
          </h1>
          <p className={styles.heroSubtitle}>
            5 خطوط إنتاج — من Supreme IR الفلاجشيب بحجب <strong>97% IR</strong> إلى Ray Guard الاقتصادي.
            كل فيلم أصلي بشهادة ضمان رسمية.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              احجز موعد تظليل جونسون
            </a>
            <a href="#products" className={styles.scrollBtn}>تعرف على المنتجات ↓</a>
          </div>""",
"""          <div className={styles.dealerBadge}>
            <span className={styles.badgePulse} />
            🇺🇸 {isAr ? 'وكيل جونسون المعتمد — AzelCore' : 'Authorized Johnson Dealer — AzelCore'}
          </div>
          <h1 className={styles.heroTitle}>
            {isAr ? 'أفلام ' : 'American '}<span className={styles.goldGradient}>Johnson Window Films</span>
            <br />{isAr ? 'الأمريكية في جدة' : 'in Jeddah'}
          </h1>
          <p className={styles.heroSubtitle}>
            {isAr ? '5 خطوط إنتاج — من Supreme IR الفلاجشيب بحجب ' : '5 Product Lines — From the Flagship Supreme IR blocking '}<strong>97% IR</strong>{isAr ? ' إلى Ray Guard الاقتصادي. كل فيلم أصلي بشهادة ضمان رسمية.' : ' down to Economy Ray Guard. Every film is original with an official warranty.'}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              {isAr ? 'احجز موعد تظليل جونسون' : 'Book Johnson Tinting'}
            </a>
            <a href="#products" className={styles.scrollBtn}>{isAr ? 'تعرف على المنتجات ↓' : 'Explore Products ↓'}</a>
          </div>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا جونسون</span>
            <h2 className={styles.sectionTitle}>شركة أمريكية بخبرة تتجاوز 60 عاماً</h2>
          </div>
          <dl className={styles.whyGrid}>
            {[
              { icon: '🇺🇸', title: 'صناعة أمريكية', desc: 'مصنعة في الولايات المتحدة منذ 1961 بأعلى معايير الجودة العالمية.' },
              { icon: '🔬', title: 'تقنية CST™', desc: 'Ceramic Scratch Technology — مقاومة خدوش متقدمة تحافظ على وضوح الزجاج لسنوات.' },
              { icon: '📡', title: 'شفافية الإشارات', desc: 'لا تحجب إشارات الهاتف أو GPS أو أنظمة الدفع. تقنية غير معدنية 100%.' },
              { icon: '🌡️', title: 'حجب حراري فائق', desc: 'Supreme IR يحجب 97% من الأشعة تحت الحمراء — مثالي لمناخ جدة والسعودية.' },
              { icon: '🛡️', title: 'ضمان عمر السيارة', desc: 'Supreme IR و InsulatIR بضمان عمر السيارة — ضد التغير اللوني والفقاعات والتقشر.' },
              { icon: '✅', title: 'أصالة مضمونة', desc: 'كل رول فيلم يحمل رقم تسلسلي من المصنع. شهادة ضمان رسمية مع كل تركيب.' },
            ].map((item, i) => (""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'لماذا جونسون' : 'Why Johnson'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'شركة أمريكية بخبرة تتجاوز 60 عاماً' : 'American Company with over 60 Years of Experience'}</h2>
          </div>
          <dl className={styles.whyGrid}>
            {[
              { icon: '🇺🇸', title: isAr ? 'صناعة أمريكية' : 'American Made', desc: isAr ? 'مصنعة في الولايات المتحدة منذ 1961 بأعلى معايير الجودة العالمية.' : 'Manufactured in the US since 1961 to the highest global quality standards.' },
              { icon: '🔬', title: isAr ? 'تقنية CST™' : 'CST™ Tech', desc: isAr ? 'Ceramic Scratch Technology — مقاومة خدوش متقدمة تحافظ على وضوح الزجاج لسنوات.' : 'Ceramic Scratch Technology — Advanced scratch resistance preserving glass clarity for years.' },
              { icon: '📡', title: isAr ? 'شفافية الإشارات' : 'Signal Transparency', desc: isAr ? 'لا تحجب إشارات الهاتف أو GPS أو أنظمة الدفع. تقنية غير معدنية 100%.' : 'Does not block mobile, GPS, or payment system signals. 100% non-metal.' },
              { icon: '🌡️', title: isAr ? 'حجب حراري فائق' : 'Ultimate Heat Block', desc: isAr ? 'Supreme IR يحجب 97% من الأشعة تحت الحمراء — مثالي لمناخ جدة والسعودية.' : 'Supreme IR blocks 97% of IR rays — ideal for the Jeddah and KSA climate.' },
              { icon: '🛡️', title: isAr ? 'ضمان عمر السيارة' : 'Lifetime Warranty', desc: isAr ? 'Supreme IR و InsulatIR بضمان عمر السيارة — ضد التغير اللوني والفقاعات والتقشر.' : 'Supreme IR and InsulatIR with lifetime warranty — against color change, bubbles, and peeling.' },
              { icon: '✅', title: isAr ? 'أصالة مضمونة' : 'Guaranteed Authenticity', desc: isAr ? 'كل رول فيلم يحمل رقم تسلسلي من المصنع. شهادة ضمان رسمية مع كل تركيب.' : 'Every film roll has a factory serial number. Official warranty certificate with every install.' },
            ].map((item, i) => (""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوط الإنتاج</span>
            <h2 className={styles.sectionTitle}>5 خطوط إنتاج لكل احتياج وميزانية</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام من الداتاشيت الرسمي — قابلة للتحقق من موقع جونسون مباشرة.</p>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'خطوط الإنتاج' : 'Product Lines'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? '5 خطوط إنتاج لكل احتياج وميزانية' : '5 Lines for Every Need & Budget'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'كل الأرقام من الداتاشيت الرسمي — قابلة للتحقق من موقع جونسون مباشرة.' : 'All metrics from official datasheets — verifiable directly from the Johnson site.'}</p>
          </div>""")

content = content.replace(
"""                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.ir}%</span>
                      <span className={styles.metricLabel}>حجب IR</span>
                    </div>""",
"""                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.ir}%</span>
                      <span className={styles.metricLabel}>{isAr ? 'حجب IR' : 'IR Block'}</span>
                    </div>""")

content = content.replace(
"""                <div className={styles.productDetails}>
                  <div className={styles.detailRow}><span>التقنية:</span><span>{product.tech}</span></div>
                  <div className={styles.detailRow}><span>UV:</span><span>{product.uv}%</span></div>
                  <div className={styles.detailRow}><span>VLT:</span><span>{product.vlt}</span></div>
                  <div className={styles.detailRow}><span>الضمان:</span><span className={styles.warranty}>{product.warranty}</span></div>
                </div>""",
"""                <div className={styles.productDetails}>
                  <div className={styles.detailRow}><span>{isAr ? 'التقنية:' : 'Tech:'}</span><span>{product.tech}</span></div>
                  <div className={styles.detailRow}><span>UV:</span><span>{product.uv}%</span></div>
                  <div className={styles.detailRow}><span>VLT:</span><span>{product.vlt}</span></div>
                  <div className={styles.detailRow}><span>{isAr ? 'الضمان:' : 'Warranty:'}</span><span className={styles.warranty}>{product.warranty}</span></div>
                </div>""")

content = content.replace(
"""                <p className={styles.bestFor}>🎯 <strong>الأنسب لـ:</strong> {product.bestFor}</p>""",
"""                <p className={styles.bestFor}>🎯 <strong>{isAr ? 'الأنسب لـ:' : 'Best For:'}</strong> {product.bestFor}</p>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>مقارنة سريعة</span>
            <h2 className={styles.sectionTitle}>جونسون مقابل المنافسين</h2>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'مقارنة سريعة' : 'Quick Comparison'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'جونسون مقابل المنافسين' : 'Johnson vs Competitors'}</h2>
          </div>""")

content = content.replace(
"""              <caption className={styles.tableCaption} itemProp="about">مقارنة أفلام جونسون مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي</caption>
              <thead>
                <tr>
                  <th scope="col">الفيلم</th>
                  <th scope="col">حجب IR</th>
                  <th scope="col">TSER</th>
                  <th scope="col">UV</th>
                  <th scope="col">الضمان</th>
                  <th scope="col">حجب إشارات؟</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.rowFeatured}><td>Johnson Supreme IR ⭐</td><td>97%</td><td>72%</td><td>99%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr className={styles.rowFeatured}><td>Johnson InsulatIR</td><td>92%</td><td>65%</td><td>99%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr><td>3M Crystalline</td><td>97%</td><td>90%</td><td>99.9%</td><td>عمر السيارة</td><td>لا</td></tr>
                <tr><td>XPEL PRIME XR+</td><td>98%</td><td>96%</td><td>99%</td><td>10 سنوات</td><td>لا</td></tr>
                <tr><td>LLumar CTX</td><td>95%</td><td>88%</td><td>99%</td><td>7 سنوات</td><td>لا</td></tr>
                <tr><td>تظليل مصبوغ (عادي)</td><td>30%</td><td>40%</td><td>70%</td><td>سنة</td><td>لا</td></tr>
              </tbody>""",
"""              <caption className={styles.tableCaption} itemProp="about">{isAr ? 'مقارنة أفلام جونسون مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي' : 'Johnson vs Competitors 2026 — Official Datasheet Metrics'}</caption>
              <thead>
                <tr>
                  <th scope="col">{isAr ? 'الفيلم' : 'Film'}</th>
                  <th scope="col">{isAr ? 'حجب IR' : 'IR Block'}</th>
                  <th scope="col">TSER</th>
                  <th scope="col">UV</th>
                  <th scope="col">{isAr ? 'الضمان' : 'Warranty'}</th>
                  <th scope="col">{isAr ? 'حجب إشارات؟' : 'Blocks Signals?'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.rowFeatured}><td>Johnson Supreme IR ⭐</td><td>97%</td><td>72%</td><td>99%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا ✅' : 'No ✅'}</td></tr>
                <tr className={styles.rowFeatured}><td>Johnson InsulatIR</td><td>92%</td><td>65%</td><td>99%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا ✅' : 'No ✅'}</td></tr>
                <tr><td>3M Crystalline</td><td>97%</td><td>90%</td><td>99.9%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>XPEL PRIME XR+</td><td>98%</td><td>96%</td><td>99%</td><td>{isAr ? '10 سنوات' : '10 Years'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>LLumar CTX</td><td>95%</td><td>88%</td><td>99%</td><td>{isAr ? '7 سنوات' : '7 Years'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>{isAr ? 'تظليل مصبوغ (عادي)' : 'Standard Dyed Tint'}</td><td>30%</td><td>40%</td><td>70%</td><td>{isAr ? 'سنة' : '1 Year'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
              </tbody>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>كل ما تحتاج تعرفه عن جونسون</h2>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أسئلة شائعة' : 'FAQs'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'كل ما تحتاج تعرفه عن جونسون' : 'Everything You Need to Know About Johnson'}</h2>
          </div>""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك بعازل <span className={styles.goldGradient}>جونسون الأصلي</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل جونسون المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 اتصل: {PHONE}</a>
          </div>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز تحمي سيارتك بعازل ' : 'Ready to protect your car with '}<span className={styles.goldGradient}>{isAr ? 'جونسون الأصلي' : 'Original Johnson'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية + عرض سعر فوري — وكيل جونسون المعتمد في جدة' : 'Free consultation + instant quote — Authorized Johnson Dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 {isAr ? 'اتصل: ' : 'Call: '}{PHONE}</a>
          </div>""")

content = content.replace(
"""      <div id="voice-answer-johnson-1" style={{ display: 'none' }} aria-hidden="true">
        عزل كور وكيل جونسون المعتمد في جدة. جونسون شركة أمريكية منذ 1961 متخصصة في أفلام التظليل الاحترافية.
      </div>
      <div id="voice-answer-johnson-2" style={{ display: 'none' }} aria-hidden="true">
        جونسون سوبريم آي آر هو الأفضل. يحجب 97% حرارة وما يأثر على إشارة الجوال لأنه نانو سيراميك بدون معادن. ضمان عمر السيارة.
      </div>
      <div id="voice-answer-johnson-3" style={{ display: 'none' }} aria-hidden="true">
        جونسون عنده 5 خطوط: سوبريم آي آر وإنسيلات آي آر وماراثون وراي جارد ورينيجيد. الأسعار من 400 إلى 3200 ريال.
      </div>""",
"""      <div id="voice-answer-johnson-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'عزل كور وكيل جونسون المعتمد في جدة. جونسون شركة أمريكية منذ 1961 متخصصة في أفلام التظليل الاحترافية.' : 'AzelCore is the authorized Johnson dealer in Jeddah. Johnson is an American company since 1961 specializing in professional window films.'}
      </div>
      <div id="voice-answer-johnson-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'جونسون سوبريم آي آر هو الأفضل. يحجب 97% حرارة وما يأثر على إشارة الجوال لأنه نانو سيراميك بدون معادن. ضمان عمر السيارة.' : 'Johnson Supreme IR is the best. It blocks 97% heat and does not affect mobile signals because it is non-metal nano-ceramic. Lifetime warranty.'}
      </div>
      <div id="voice-answer-johnson-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'جونسون عنده 5 خطوط: سوبريم آي آر وإنسيلات آي آر وماراثون وراي جارد ورينيجيد. الأسعار من 400 إلى 3200 ريال.' : 'Johnson has 5 lines: Supreme IR, InsulatIR, Marathon, Ray Guard, and Renegade. Prices range from 400 to 3200 SAR.'}
      </div>""")

with open('src/app/[locale]/johnson-authorized-dealer/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

