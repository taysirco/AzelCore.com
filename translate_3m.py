import re

with open('src/app/[locale]/3m-authorized-dealer/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace productLines
content = content.replace(
"""const productLines = [""",
"""const getProductLines = (isAr: boolean) => [""")

content = content.replace(
"""    tier: 'الفلاجشيب',
    tech: 'نانو سيراميك متعدد الطبقات (200+ طبقة)',
    ir: 97,
    uv: 99.9,
    tser: 90,
    vlt: '40% - 90%',
    warranty: 'عمر السيارة',
    description: 'أعلى فيلم شفاف في العالم. 200+ طبقة نانو سيراميك تحجب 97% من الحرارة بدون تغيير لون الزجاج. يسمح بمرور 70-90% من الضوء — مثالي للزجاج الأمامي بدون أي مخالفة مرورية.',
    features: ['حجب IR 97%', '99.9% حجب UV', 'شبه شفاف', 'لا يحجب الإشارات', 'ضمان عمر السيارة', '200+ طبقة نانو'],
    bestFor: 'الزجاج الأمامي + السيارات الفاخرة + من يريد حماية بدون تغيير المظهر',""",
"""    tier: isAr ? 'الفلاجشيب' : 'Flagship',
    tech: isAr ? 'نانو سيراميك متعدد الطبقات (200+ طبقة)' : 'Multilayer Nano-Ceramic (200+ layers)',
    ir: 97,
    uv: 99.9,
    tser: 90,
    vlt: '40% - 90%',
    warranty: isAr ? 'عمر السيارة' : 'Lifetime',
    description: isAr ? 'أعلى فيلم شفاف في العالم. 200+ طبقة نانو سيراميك تحجب 97% من الحرارة بدون تغيير لون الزجاج. يسمح بمرور 70-90% من الضوء — مثالي للزجاج الأمامي بدون أي مخالفة مرورية.' : 'The highest transparency film in the world. 200+ nano-ceramic layers block 97% of heat without changing glass color. Allows 70-90% light transmission — perfect for windshields with zero traffic violations.',
    features: isAr ? ['حجب IR 97%', '99.9% حجب UV', 'شبه شفاف', 'لا يحجب الإشارات', 'ضمان عمر السيارة', '200+ طبقة نانو'] : ['97% IR Block', '99.9% UV Block', 'Near-transparent', 'Signal friendly', 'Lifetime Warranty', '200+ Nano layers'],
    bestFor: isAr ? 'الزجاج الأمامي + السيارات الفاخرة + من يريد حماية بدون تغيير المظهر' : 'Windshields + Luxury Cars + those wanting protection without changing appearance',""")

content = content.replace(
"""    tier: 'بريميوم',
    tech: 'سيراميك نانو غير معدني',
    ir: 95,
    uv: 99,
    tser: 79,
    vlt: '5% - 70%',
    warranty: 'عمر السيارة',
    description: 'أداء قريب من Crystalline بدرجات أغمق. تقنية سيراميك غير معدنية تحجب 95% IR مع توفر درجات من 5% إلى 70% VLT. التوازن المثالي بين الخصوصية والأداء.',
    features: ['حجب IR 95%', 'سيراميك غير معدني', 'لا يحجب الإشارات', 'ضمان عمر السيارة', 'درجات متعددة'],
    bestFor: 'من يريد تظليل داكن مع أداء حراري فائق',""",
"""    tier: isAr ? 'بريميوم' : 'Premium',
    tech: isAr ? 'سيراميك نانو غير معدني' : 'Non-metal Nano-Ceramic',
    ir: 95,
    uv: 99,
    tser: 79,
    vlt: '5% - 70%',
    warranty: isAr ? 'عمر السيارة' : 'Lifetime',
    description: isAr ? 'أداء قريب من Crystalline بدرجات أغمق. تقنية سيراميك غير معدنية تحجب 95% IR مع توفر درجات من 5% إلى 70% VLT. التوازن المثالي بين الخصوصية والأداء.' : 'Performance close to Crystalline in darker shades. Non-metal ceramic technology blocks 95% IR with 5% to 70% VLT options. The perfect balance between privacy and performance.',
    features: isAr ? ['حجب IR 95%', 'سيراميك غير معدني', 'لا يحجب الإشارات', 'ضمان عمر السيارة', 'درجات متعددة'] : ['95% IR Block', 'Non-metal Ceramic', 'Signal Friendly', 'Lifetime Warranty', 'Multiple Shades'],
    bestFor: isAr ? 'من يريد تظليل داكن مع أداء حراري فائق' : 'Those wanting dark tint with superior thermal performance',""")

content = content.replace(
"""    tier: 'قيمة عالية',
    tech: 'صبغي ثابت اللون',
    ir: 44,
    uv: 99,
    tser: 49,
    vlt: '5% - 50%',
    warranty: '5 سنوات',
    description: 'الفيلم اللي ما يتحول بنفسجي. تقنية الصبغ غير المعدني الثابت من 3M تضمن لون موحد لسنوات. سعر ممتاز مع حماية UV كاملة — الخيار الذكي للميزانية المتوسطة.',
    features: ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'ضمان 5 سنوات'],
    bestFor: 'الميزانية المتوسطة + من يكره التحول البنفسجي',""",
"""    tier: isAr ? 'قيمة عالية' : 'High Value',
    tech: isAr ? 'صبغي ثابت اللون' : 'Color Stable Dyed',
    ir: 44,
    uv: 99,
    tser: 49,
    vlt: '5% - 50%',
    warranty: isAr ? '5 سنوات' : '5 Years',
    description: isAr ? 'الفيلم اللي ما يتحول بنفسجي. تقنية الصبغ غير المعدني الثابت من 3M تضمن لون موحد لسنوات. سعر ممتاز مع حماية UV كاملة — الخيار الذكي للميزانية المتوسطة.' : 'The film that never turns purple. 3M’s non-metal color stable technology ensures uniform color for years. Excellent price with full UV protection — the smart choice for mid-range budgets.',
    features: isAr ? ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'ضمان 5 سنوات'] : ['Color stable for years', '99% UV Protection', 'No purple fading', '5 Year Warranty'],
    bestFor: isAr ? 'الميزانية المتوسطة + من يكره التحول البنفسجي' : 'Mid-range budgets + those who hate purple tint',""")

content = content.replace(
"""    tier: 'اقتصادي',
    tech: 'صبغي اقتصادي',
    ir: 30,
    uv: 95,
    tser: 35,
    vlt: '5% - 35%',
    warranty: '3 سنوات',
    description: 'حل اقتصادي أصلي من 3M. جودة المصنع الأمريكي بسعر مناسب. حجب أساسي للحرارة مع حماية من الأشعة فوق البنفسجية. أفضل بمراحل من الأفلام مجهولة المصدر.',
    features: ['صناعة أمريكية', 'حماية UV 95%', 'ضمان 3 سنوات'],
    bestFor: 'الميزانية المحدودة + السيارات الاقتصادية',""",
"""    tier: isAr ? 'اقتصادي' : 'Economy',
    tech: isAr ? 'صبغي اقتصادي' : 'Economy Dyed',
    ir: 30,
    uv: 95,
    tser: 35,
    vlt: '5% - 35%',
    warranty: isAr ? '3 سنوات' : '3 Years',
    description: isAr ? 'حل اقتصادي أصلي من 3M. جودة المصنع الأمريكي بسعر مناسب. حجب أساسي للحرارة مع حماية من الأشعة فوق البنفسجية. أفضل بمراحل من الأفلام مجهولة المصدر.' : 'An original economy solution from 3M. American factory quality at an affordable price. Basic heat rejection with UV protection. Miles better than unknown source films.',
    features: isAr ? ['صناعة أمريكية', 'حماية UV 95%', 'ضمان 3 سنوات'] : ['American Made', '95% UV Protection', '3 Year Warranty'],
    bestFor: isAr ? 'الميزانية المحدودة + السيارات الاقتصادية' : 'Limited budgets + Economy cars',""")

# Replace faqs
content = content.replace(
"""const faqs = [""",
"""const getFaqs = (isAr: boolean) => [""")

content = content.replace(
"""  { q: 'هل عزل كور وكيل رسمي لـ 3M؟', a: 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة 3M الأمريكية. جميع أفلامنا أصلية بتغليف المصنع وقابلة للتحقق عبر موقع 3M الرسمي.' },
  { q: 'إيش الفرق بين 3M Crystalline و Johnson Supreme IR؟', a: 'Crystalline يتفوق بـ 200+ طبقة نانو + TSER 90% مقابل 72% لـ Supreme IR. لكن السعر أعلى بـ 30-40%. كلاهما ممتاز — Crystalline للي يبغى أقصى أداء حتى لو الثمن أغلى.' },
  { q: 'ليش 3M Crystalline أغلى من باقي التظليل؟', a: 'لأنه يحتوي على 200+ طبقة نانو سيراميك مصنعة بتقنية Multilayer Optical Film الحصرية من 3M. هذي التقنية تخلي الفيلم شبه شفاف (VLT 70-90%) لكن يحجب 97% حرارة — ما فيه فيلم ثاني يقدر يحقق هذي المعادلة.' },
  { q: 'هل تظليل 3M يحجب إشارة الجوال أو GPS؟', a: 'لا. كل خطوط 3M Window Films غير معدنية — لا تأثر على الجوال، GPS، Apple Pay، رادار الرجوع، أو أي نظام إلكتروني. حتى Crystalline اللي فيه 200 طبقة.' },
  { q: 'كم ضمان تظليل 3M؟', a: 'Crystalline و Ceramic IR: ضمان عمر السيارة. Color Stable: 5 سنوات. FX Premium: 3 سنوات. الضمان يغطي التغير اللوني والفقاعات والتقشر.' },
  { q: 'هل 3M Crystalline مطابق لنظام المرور السعودي؟', a: 'نعم — وهذي أكبر ميزة فيه. Crystalline متوفر بدرجة CR70 (نفاذية 70%) وCR90 (نفاذية 90%). يعني تقدر تركبه على الزجاج الأمامي بدون أي مخالفة، وبرضو يحجب 97% حرارة.' },""",
"""  {
    q: isAr ? 'هل عزل كور وكيل رسمي لـ 3M؟' : 'Is AzelCore an official 3M dealer?',
    a: isAr ? 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة 3M الأمريكية. جميع أفلامنا أصلية بتغليف المصنع وقابلة للتحقق عبر موقع 3M الرسمي.' : 'Yes, AzelCore is an officially registered and authorized dealer for American 3M. All our films are 100% original in factory packaging, verifiable via 3M\\'s official website.'
  },
  {
    q: isAr ? 'إيش الفرق بين 3M Crystalline و Johnson Supreme IR؟' : 'What is the difference between 3M Crystalline and Johnson Supreme IR?',
    a: isAr ? 'Crystalline يتفوق بـ 200+ طبقة نانو + TSER 90% مقابل 72% لـ Supreme IR. لكن السعر أعلى بـ 30-40%. كلاهما ممتاز — Crystalline للي يبغى أقصى أداء حتى لو الثمن أغلى.' : 'Crystalline leads with 200+ nano layers + 90% TSER vs 72% for Supreme IR. However, the price is 30-40% higher. Both are excellent — Crystalline is for those wanting maximum performance regardless of price.'
  },
  {
    q: isAr ? 'ليش 3M Crystalline أغلى من باقي التظليل؟' : 'Why is 3M Crystalline more expensive than other tint?',
    a: isAr ? 'لأنه يحتوي على 200+ طبقة نانو سيراميك مصنعة بتقنية Multilayer Optical Film الحصرية من 3M. هذي التقنية تخلي الفيلم شبه شفاف (VLT 70-90%) لكن يحجب 97% حرارة — ما فيه فيلم ثاني يقدر يحقق هذي المعادلة.' : 'Because it contains 200+ nano-ceramic layers manufactured with 3M\\'s exclusive Multilayer Optical Film technology. This makes the film near-transparent (70-90% VLT) while blocking 97% of heat — no other film can achieve this equation.'
  },
  {
    q: isAr ? 'هل تظليل 3M يحجب إشارة الجوال أو GPS؟' : 'Does 3M tint block mobile or GPS signals?',
    a: isAr ? 'لا. كل خطوط 3M Window Films غير معدنية — لا تأثر على الجوال، GPS، Apple Pay، رادار الرجوع، أو أي نظام إلكتروني. حتى Crystalline اللي فيه 200 طبقة.' : 'No. All 3M Window Films lines are non-metal — they do not affect mobile, GPS, Apple Pay, reverse radars, or any electronic systems. Even Crystalline with its 200 layers.'
  },
  {
    q: isAr ? 'كم ضمان تظليل 3M؟' : 'What is the warranty for 3M tint?',
    a: isAr ? 'Crystalline و Ceramic IR: ضمان عمر السيارة. Color Stable: 5 سنوات. FX Premium: 3 سنوات. الضمان يغطي التغير اللوني والفقاعات والتقشر.' : 'Crystalline and Ceramic IR: Lifetime Warranty. Color Stable: 5 Years. FX Premium: 3 Years. The warranty covers color change, bubbling, and peeling.'
  },
  {
    q: isAr ? 'هل 3M Crystalline مطابق لنظام المرور السعودي؟' : 'Is 3M Crystalline compliant with Saudi traffic laws?',
    a: isAr ? 'نعم — وهذي أكبر ميزة فيه. Crystalline متوفر بدرجة CR70 (نفاذية 70%) وCR90 (نفاذية 90%). يعني تقدر تركبه على الزجاج الأمامي بدون أي مخالفة، وبرضو يحجب 97% حرارة.' : 'Yes — and this is its biggest advantage. Crystalline is available in CR70 (70% VLT) and CR90 (90% VLT). This means you can install it on your windshield without any violations, while still blocking 97% of heat.'
  },""")

# Replace graphSchema
content = content.replace(
"""const graphSchema = {""",
"""const getGraphSchema = (isAr: boolean) => ({""")

content = content.replace(
"""  '@context': 'https://schema.org',
  '@graph': [""",
"""  '@context': 'https://schema.org',
  '@graph': [""")

# Make sure graphSchema ends with '});' instead of '};'
content = content.replace(
"""    },
  ],
};""",
"""    },
  ],
});""")

content = content.replace(
"""      name: '3M Crystalline Window Film',
      description: 'فيلم تظليل نانو سيراميك أمريكي من 3M — 200+ طبقة تحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV',""",
"""      name: isAr ? '3M Crystalline Window Film' : '3M Crystalline Window Film',
      description: isAr ? 'فيلم تظليل نانو سيراميك أمريكي من 3M — 200+ طبقة تحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV' : 'American nano-ceramic window film by 3M — 200+ layers blocking 97% IR with 99.9% UV protection',""")

content = content.replace(
"""        warrantyScope: 'تغير اللون + التقشر + الفقاعات',""",
"""        warrantyScope: isAr ? 'تغير اللون + التقشر + الفقاعات' : 'Color change + Peeling + Bubbling',""")

content = content.replace(
"""          name: 'حجز موعد تظليل 3M',""",
"""          name: isAr ? 'حجز موعد تظليل 3M' : 'Book 3M Tinting Appointment',""")

content = content.replace(
"""        author: { '@type': 'Person', name: 'عبدالله القرشي' },
        reviewBody: 'ركبت Crystalline CR70 على الأمامي — الفرق خيالي. الحرارة انخفضت بشكل واضح والزجاج تقريباً شفاف.',""",
"""        author: { '@type': 'Person', name: isAr ? 'عبدالله القرشي' : 'Abdullah Al-Qurashi' },
        reviewBody: isAr ? 'ركبت Crystalline CR70 على الأمامي — الفرق خيالي. الحرارة انخفضت بشكل واضح والزجاج تقريباً شفاف.' : 'Installed Crystalline CR70 on my windshield — the difference is unreal. Heat dropped significantly and the glass is nearly transparent.',""")

content = content.replace(
"""      mainEntity: faqs.map(f => ({""",
"""      mainEntity: getFaqs(isAr).map(f => ({""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'وكيل 3M المعتمد', item: `${SITE_URL}/3m-authorized-dealer` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'وكيل 3M المعتمد' : '3M Authorized Dealer', item: `${SITE_URL}/3m-authorized-dealer` },""")

# Update component calls inside ThreeMDealerPage
content = content.replace(
"""export default async function ThreeMDealerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />""",
"""export default async function ThreeMDealerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const productLines = getProductLines(isAr);
  const faqs = getFaqs(isAr);
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema(isAr)) }} />""")

# Replace remaining text blocks in JSX
content = content.replace(
"""      <ServiceSummary summary="على عكس الأفلام التجارية التي تتحول بنفسجياً خلال أشهر وتفقد كفاءتها، تعتمد أفلام 3M على تقنية Multilayer Optical Film بـ 200+ طبقة نانو سيراميك. Crystalline يحجب 97% IR مع نفاذية 70-90% ضوء مرئي — يعني حماية قصوى من حرارة جدة بدون تغيير شكل الزجاج وبدون مخالفة مرور. عزل كور وكيل 3M المعتمد في جدة." />""",
"""      <ServiceSummary summary={isAr ? "على عكس الأفلام التجارية التي تتحول بنفسجياً خلال أشهر وتفقد كفاءتها، تعتمد أفلام 3M على تقنية Multilayer Optical Film بـ 200+ طبقة نانو سيراميك. Crystalline يحجب 97% IR مع نفاذية 70-90% ضوء مرئي — يعني حماية قصوى من حرارة جدة بدون تغيير شكل الزجاج وبدون مخالفة مرور. عزل كور وكيل 3M المعتمد في جدة." : "Unlike commercial films that turn purple within months and lose efficiency, 3M films rely on Multilayer Optical Film technology with 200+ nano-ceramic layers. Crystalline blocks 97% IR with 70-90% VLT — meaning maximum KSA heat protection without altering glass appearance and zero traffic violations. AzelCore is your authorized 3M dealer in Jeddah."} />""")

content = content.replace(
"""          <div className={styles.dealerBadge}>
            <span className={styles.badgePulse} />
            🇺🇸 وكيل 3M المعتمد — AzelCore
          </div>
          <h1 className={styles.heroTitle}>
            أفلام <span className={styles.redGradient}>3M Window Films</span>
            <br />الأمريكية في جدة
          </h1>
          <p className={styles.heroSubtitle}>
            4 خطوط إنتاج — من Crystalline الفلاجشيب بـ 200+ طبقة نانو وحجب <strong>97% IR + 99.9% UV</strong> إلى FX الاقتصادي.
            كل فيلم أصلي بتغليف المصنع الأمريكي.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              احجز موعد تظليل 3M
            </a>
            <a href="#products" className={styles.scrollBtn}>تعرف على المنتجات ↓</a>
          </div>""",
"""          <div className={styles.dealerBadge}>
            <span className={styles.badgePulse} />
            🇺🇸 {isAr ? 'وكيل 3M المعتمد — AzelCore' : 'Authorized 3M Dealer — AzelCore'}
          </div>
          <h1 className={styles.heroTitle}>
            {isAr ? 'أفلام ' : 'American '}<span className={styles.redGradient}>3M Window Films</span>
            <br />{isAr ? 'الأمريكية في جدة' : 'in Jeddah'}
          </h1>
          <p className={styles.heroSubtitle}>
            {isAr ? '4 خطوط إنتاج — من Crystalline الفلاجشيب بـ 200+ طبقة نانو وحجب ' : '4 Product Lines — From the Flagship Crystalline with 200+ nano layers blocking '}<strong>97% IR + 99.9% UV</strong>{isAr ? ' إلى FX الاقتصادي. كل فيلم أصلي بتغليف المصنع الأمريكي.' : ' down to the Economy FX. Every film is original in American factory packaging.'}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              {isAr ? 'احجز موعد تظليل 3M' : 'Book 3M Tinting'}
            </a>
            <a href="#products" className={styles.scrollBtn}>{isAr ? 'تعرف على المنتجات ↓' : 'Explore Products ↓'}</a>
          </div>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا 3M</span>
            <h2 className={styles.sectionTitle}>شركة أمريكية بأكثر من 120 سنة خبرة</h2>
          </div>
          <dl className={styles.whyGrid}>
            {[
              { icon: '🇺🇸', title: 'عملاق أمريكي منذ 1902', desc: '3M Company — شركة عالمية بإيرادات 34 مليار دولار. تصنع 60,000+ منتج. أفلام النوافذ ليست منتج فرعي — هي قسم كامل بتقنيات حصرية.' },
              { icon: '🔬', title: 'تقنية 200+ طبقة', desc: 'Multilayer Optical Film — تقنية حصرية لـ 3M. 200+ طبقة نانو سيراميك مرصوصة بدقة نانومترية. ما فيه شركة ثانية تملك هذي التقنية.' },
              { icon: '📡', title: 'شفافية الإشارات', desc: 'صفر معادن في كل خطوط الإنتاج. الجوال، GPS، Apple Pay، رادار الرجوع — كلها تشتغل بشكل طبيعي 100%.' },
              { icon: '🌡️', title: '97% حجب IR + 99.9% UV', desc: 'Crystalline يحجب 97% حرارة + 99.9% أشعة فوق بنفسجية. أعلى نسبة حجب UV في أي فيلم تظليل على مستوى العالم.' },
              { icon: '🛡️', title: 'ضمان عمر السيارة', desc: 'Crystalline و Ceramic IR — ضمان عمر السيارة. 3M لا تتلاعب بالضمان — مسجل إلكترونياً برقم الشاصي VIN.' },
              { icon: '✅', title: 'TSER 90% — الأعلى', desc: 'Total Solar Energy Rejected — 3M Crystalline يرفض 90% من طاقة الشمس الكلية. أعلى رقم TSER في السوق. يعني مكيف أقل = وقود أقل.' },
            ].map((item, i) => (""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'لماذا 3M' : 'Why 3M'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'شركة أمريكية بأكثر من 120 سنة خبرة' : 'American Company with 120+ Years of Experience'}</h2>
          </div>
          <dl className={styles.whyGrid}>
            {[
              { icon: '🇺🇸', title: isAr ? 'عملاق أمريكي منذ 1902' : 'American Giant Since 1902', desc: isAr ? '3M Company — شركة عالمية بإيرادات 34 مليار دولار. تصنع 60,000+ منتج. أفلام النوافذ ليست منتج فرعي — هي قسم كامل بتقنيات حصرية.' : '3M Company — A global corporation with $34B revenue. Manufactures 60,000+ products. Window films are a dedicated division with exclusive tech.' },
              { icon: '🔬', title: isAr ? 'تقنية 200+ طبقة' : '200+ Layer Tech', desc: isAr ? 'Multilayer Optical Film — تقنية حصرية لـ 3M. 200+ طبقة نانو سيراميك مرصوصة بدقة نانومترية. ما فيه شركة ثانية تملك هذي التقنية.' : 'Multilayer Optical Film — 3M exclusive tech. 200+ nano-ceramic layers stacked with nanometer precision. No other company owns this technology.' },
              { icon: '📡', title: isAr ? 'شفافية الإشارات' : 'Signal Transparency', desc: isAr ? 'صفر معادن في كل خطوط الإنتاج. الجوال، GPS، Apple Pay، رادار الرجوع — كلها تشتغل بشكل طبيعي 100%.' : 'Zero metals across all product lines. Mobile, GPS, Apple Pay, sensors — everything works 100% naturally.' },
              { icon: '🌡️', title: isAr ? '97% حجب IR + 99.9% UV' : '97% IR + 99.9% UV Block', desc: isAr ? 'Crystalline يحجب 97% حرارة + 99.9% أشعة فوق بنفسجية. أعلى نسبة حجب UV في أي فيلم تظليل على مستوى العالم.' : 'Crystalline blocks 97% of heat + 99.9% UV rays. The highest UV blocking rate of any window film globally.' },
              { icon: '🛡️', title: isAr ? 'ضمان عمر السيارة' : 'Lifetime Warranty', desc: isAr ? 'Crystalline و Ceramic IR — ضمان عمر السيارة. 3M لا تتلاعب بالضمان — مسجل إلكترونياً برقم الشاصي VIN.' : 'Crystalline & Ceramic IR — Lifetime warranty. 3M does not play games with warranties — electronically registered via VIN.' },
              { icon: '✅', title: isAr ? 'TSER 90% — الأعلى' : '90% TSER — The Highest', desc: isAr ? 'Total Solar Energy Rejected — 3M Crystalline يرفض 90% من طاقة الشمس الكلية. أعلى رقم TSER في السوق. يعني مكيف أقل = وقود أقل.' : 'Total Solar Energy Rejected — 3M Crystalline rejects 90% of total solar energy. The highest TSER in the market. Means less AC = less fuel.' },
            ].map((item, i) => (""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوط الإنتاج</span>
            <h2 className={styles.sectionTitle}>4 خطوط إنتاج لكل احتياج وميزانية</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام من الداتاشيت الرسمي لـ 3M — قابلة للتحقق من موقع الشركة مباشرة.</p>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'خطوط الإنتاج' : 'Product Lines'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? '4 خطوط إنتاج لكل احتياج وميزانية' : '4 Lines for Every Need & Budget'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'كل الأرقام من الداتاشيت الرسمي لـ 3M — قابلة للتحقق من موقع الشركة مباشرة.' : 'All metrics from official 3M datasheets — verifiable directly from the company site.'}</p>
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
            <span className={styles.overline}>مقارنة تقنية</span>
            <h2 className={styles.sectionTitle}>3M مقابل المنافسين — بالأرقام</h2>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'مقارنة تقنية' : 'Technical Comparison'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? '3M مقابل المنافسين — بالأرقام' : '3M vs Competitors — By the Numbers'}</h2>
          </div>""")

content = content.replace(
"""              <caption className={styles.tableCaption} itemProp="about">مقارنة أفلام 3M مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي</caption>
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
                <tr className={styles.rowFeatured}><td>3M Crystalline ⭐</td><td>97%</td><td>90%</td><td>99.9%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr className={styles.rowFeatured}><td>3M Ceramic IR</td><td>95%</td><td>79%</td><td>99%</td><td>عمر السيارة</td><td>لا ✅</td></tr>
                <tr><td>Johnson Supreme IR</td><td>97%</td><td>72%</td><td>99%</td><td>عمر السيارة</td><td>لا</td></tr>
                <tr><td>XPEL PRIME XR+</td><td>98%</td><td>96%</td><td>99%</td><td>10 سنوات</td><td>لا</td></tr>
                <tr><td>LLumar CTX</td><td>95%</td><td>88%</td><td>99%</td><td>7 سنوات</td><td>لا</td></tr>
                <tr><td>تظليل مصبوغ (عادي)</td><td>30%</td><td>40%</td><td>70%</td><td>سنة</td><td>لا</td></tr>
              </tbody>""",
"""              <caption className={styles.tableCaption} itemProp="about">{isAr ? 'مقارنة أفلام 3M مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي' : '3M vs Competitors 2026 — Official Datasheet Metrics'}</caption>
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
                <tr className={styles.rowFeatured}><td>3M Crystalline ⭐</td><td>97%</td><td>90%</td><td>99.9%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا ✅' : 'No ✅'}</td></tr>
                <tr className={styles.rowFeatured}><td>3M Ceramic IR</td><td>95%</td><td>79%</td><td>99%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا ✅' : 'No ✅'}</td></tr>
                <tr><td>Johnson Supreme IR</td><td>97%</td><td>72%</td><td>99%</td><td>{isAr ? 'عمر السيارة' : 'Lifetime'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>XPEL PRIME XR+</td><td>98%</td><td>96%</td><td>99%</td><td>{isAr ? '10 سنوات' : '10 Years'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>LLumar CTX</td><td>95%</td><td>88%</td><td>99%</td><td>{isAr ? '7 سنوات' : '7 Years'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
                <tr><td>{isAr ? 'تظليل مصبوغ (عادي)' : 'Standard Dyed Tint'}</td><td>30%</td><td>40%</td><td>70%</td><td>{isAr ? 'سنة' : '1 Year'}</td><td>{isAr ? 'لا' : 'No'}</td></tr>
              </tbody>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>كل ما تحتاج تعرفه عن أفلام 3M</h2>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أسئلة شائعة' : 'FAQs'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'كل ما تحتاج تعرفه عن أفلام 3M' : 'Everything You Need to Know About 3M'}</h2>
          </div>""")

content = content.replace(
"""      <AuthorProfile
        expertName={OWNER_NAME}
        expertTitle={OWNER_TITLE}
        organization="عزل كور (وكيل جونسون و 3M)"
        quote="3M Crystalline هو أفضل فيلم شفاف في العالم — 200+ طبقة نانو تحجب 97% حرارة بدون تغيير لون الزجاج. اختيارك للفيلم الصح يعتمد على نوع سيارتك واستخدامك اليومي — تواصل معنا للاستشارة المجانية."
        reviewDate="2026-01-15"
      />""",
"""      <AuthorProfile
        expertName={isAr ? OWNER_NAME : "Ahmed Salem"}
        expertTitle={isAr ? OWNER_TITLE : "Tinting Expert"}
        organization={isAr ? "عزل كور (وكيل جونسون و 3M)" : "AzelCore (Johnson & 3M Dealer)"}
        quote={isAr ? "3M Crystalline هو أفضل فيلم شفاف في العالم — 200+ طبقة نانو تحجب 97% حرارة بدون تغيير لون الزجاج. اختيارك للفيلم الصح يعتمد على نوع سيارتك واستخدامك اليومي — تواصل معنا للاستشارة المجانية." : "3M Crystalline is the world's best transparent film — 200+ nano layers blocking 97% heat without altering glass color. Choosing the right film depends on your vehicle and daily use — contact us for a free consultation."}
        reviewDate="2026-01-15"
      />""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك بتقنية <span className={styles.redGradient}>3M الأمريكية</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 اتصل: {PHONE}</a>
          </div>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز تحمي سيارتك بتقنية ' : 'Ready to protect your car with '}<span className={styles.redGradient}>{isAr ? '3M الأمريكية' : 'American 3M'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية + عرض سعر فوري — وكيل 3M المعتمد في جدة' : 'Free consultation + instant quote — Authorized 3M Dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 {isAr ? 'اتصل: ' : 'Call: '}{PHONE}</a>
          </div>""")

content = content.replace(
"""      <div id="voice-answer-3m-1" style={{ display: 'none' }} aria-hidden="true">
        عزل كور هو الوكيل المعتمد لأفلام 3M في جدة. 3M شركة أمريكية عمرها أكثر من 120 سنة وتصنع أفضل أفلام تظليل في العالم.
      </div>
      <div id="voice-answer-3m-2" style={{ display: 'none' }} aria-hidden="true">
        3M Crystalline هو أفضل فيلم تظليل شفاف. فيه 200 طبقة نانو سيراميك تحجب 97% حرارة و 99.9% أشعة فوق بنفسجية. ما يأثر على إشارة الجوال.
      </div>
      <div id="voice-answer-3m-3" style={{ display: 'none' }} aria-hidden="true">
        3M عندها 4 خطوط: كريستالين وسيراميك آي آر وكولر ستيبل واف اكس بريميوم. الأسعار من 400 إلى 4500 ريال.
      </div>""",
"""      <div id="voice-answer-3m-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'عزل كور هو الوكيل المعتمد لأفلام 3M في جدة. 3M شركة أمريكية عمرها أكثر من 120 سنة وتصنع أفضل أفلام تظليل في العالم.' : 'AzelCore is the authorized 3M dealer in Jeddah. 3M is an American company with over 120 years of history, manufacturing the world\\'s best tint films.'}
      </div>
      <div id="voice-answer-3m-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? '3M Crystalline هو أفضل فيلم تظليل شفاف. فيه 200 طبقة نانو سيراميك تحجب 97% حرارة و 99.9% أشعة فوق بنفسجية. ما يأثر على إشارة الجوال.' : '3M Crystalline is the best transparent tint film. It has 200 nano-ceramic layers blocking 97% heat and 99.9% UV rays. It does not affect mobile signals.'}
      </div>
      <div id="voice-answer-3m-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? '3M عندها 4 خطوط: كريستالين وسيراميك آي آر وكولر ستيبل واف اكس بريميوم. الأسعار من 400 إلى 4500 ريال.' : '3M has 4 lines: Crystalline, Ceramic IR, Color Stable, and FX Premium. Prices range from 400 to 4500 SAR.'}
      </div>""")

with open('src/app/[locale]/3m-authorized-dealer/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

