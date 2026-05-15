import re

with open('src/app/[locale]/(national-ksa)/building-glass-insulation/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Building Types
content = content.replace(
"""const buildingTypes = [
  { icon: '🏠', name: 'فلل وقصور', desc: 'عزل نوافذ الفلل والقصور لتقليل الحرارة وحماية الأثاث من الأشعة فوق البنفسجية مع الحفاظ على المنظر الخارجي.' },
  { icon: '🏢', name: 'أبراج ومكاتب', desc: 'عزل الواجهات الزجاجية الكاملة للأبراج التجارية — توفير طاقة ضخم وتحسين بيئة العمل.' },
  { icon: '🏬', name: 'محلات تجارية', desc: 'عزل واجهات المعارض والمحلات — حماية البضائع من أشعة الشمس مع الحفاظ على الإضاءة الطبيعية.' },
  { icon: '🏥', name: 'مستشفيات ومدارس', desc: 'عزل حراري آمن صحياً للمنشآت الحساسة — شهادات NFRC و AIMCAL معتمدة.' },
];""",
"""const getBuildingTypes = (isAr: boolean) => [
  { icon: '🏠', name: isAr ? 'فلل وقصور' : 'Villas & Palaces', desc: isAr ? 'عزل نوافذ الفلل والقصور لتقليل الحرارة وحماية الأثاث من الأشعة فوق البنفسجية مع الحفاظ على المنظر الخارجي.' : 'Window insulation for villas and palaces to reduce heat and protect furniture from UV rays while preserving the exterior view.' },
  { icon: '🏢', name: isAr ? 'أبراج ومكاتب' : 'Towers & Offices', desc: isAr ? 'عزل الواجهات الزجاجية الكاملة للأبراج التجارية — توفير طاقة ضخم وتحسين بيئة العمل.' : 'Full glass facade insulation for commercial towers — massive energy savings and improved work environment.' },
  { icon: '🏬', name: isAr ? 'محلات تجارية' : 'Retail Stores', desc: isAr ? 'عزل واجهات المعارض والمحلات — حماية البضائع من أشعة الشمس مع الحفاظ على الإضاءة الطبيعية.' : 'Storefront and showroom insulation — protecting merchandise from sun damage while maintaining natural lighting.' },
  { icon: '🏥', name: isAr ? 'مستشفيات ومدارس' : 'Hospitals & Schools', desc: isAr ? 'عزل حراري آمن صحياً للمنشآت الحساسة — شهادات NFRC و AIMCAL معتمدة.' : 'Health-safe thermal insulation for sensitive facilities — NFRC and AIMCAL certified.' },
];""")

# Film Types
content = content.replace(
"""const filmTypes = [
  { name: 'نانو سيراميك شفاف', ir: '95%', uv: '99%', light: '70-80%', warranty: '15 سنة', best: true },
  { name: 'عاكس فضي', ir: '85%', uv: '99%', light: '15-35%', warranty: '10 سنوات', best: false },
  { name: 'عاكس رمادي', ir: '80%', uv: '99%', light: '20-40%', warranty: '10 سنوات', best: false },
  { name: 'أمان وحماية', ir: '60%', uv: '99%', light: '50-70%', warranty: '12 سنة', best: false },
];""",
"""const getFilmTypes = (isAr: boolean) => [
  { name: isAr ? 'نانو سيراميك شفاف' : 'Clear Nano-Ceramic', ir: '95%', uv: '99%', light: '70-80%', warranty: isAr ? '15 سنة' : '15 Years', best: true },
  { name: isAr ? 'عاكس فضي' : 'Silver Reflective', ir: '85%', uv: '99%', light: '15-35%', warranty: isAr ? '10 سنوات' : '10 Years', best: false },
  { name: isAr ? 'عاكس رمادي' : 'Grey Reflective', ir: '80%', uv: '99%', light: '20-40%', warranty: isAr ? '10 سنوات' : '10 Years', best: false },
  { name: isAr ? 'أمان وحماية' : 'Safety & Security', ir: '60%', uv: '99%', light: '50-70%', warranty: isAr ? '12 سنة' : '12 Years', best: false },
];""")

# Savings
content = content.replace(
"""const savings = [
  { label: 'توفير فاتورة الكهرباء', value: '40%', desc: 'تقليل حمل التكييف بشكل ملحوظ' },
  { label: 'حجب الأشعة تحت الحمراء', value: '97%', desc: 'أقصى حماية حرارية' },
  { label: 'حجب الأشعة فوق البنفسجية', value: '99%', desc: 'حماية الأثاث والديكور' },
  { label: 'عمر الفيلم المتوقع', value: '+15 سنة', desc: 'ضمان مصنع رسمي' },
];""",
"""const getSavings = (isAr: boolean) => [
  { label: isAr ? 'توفير فاتورة الكهرباء' : 'Electricity Savings', value: '40%', desc: isAr ? 'تقليل حمل التكييف بشكل ملحوظ' : 'Significantly reducing AC load' },
  { label: isAr ? 'حجب الأشعة تحت الحمراء' : 'IR Rejection', value: '97%', desc: isAr ? 'أقصى حماية حرارية' : 'Maximum thermal protection' },
  { label: isAr ? 'حجب الأشعة فوق البنفسجية' : 'UV Rejection', value: '99%', desc: isAr ? 'حماية الأثاث والديكور' : 'Furniture & decor protection' },
  { label: isAr ? 'عمر الفيلم المتوقع' : 'Expected Film Lifespan', value: isAr ? '+15 سنة' : '+15 Years', desc: isAr ? 'ضمان مصنع رسمي' : 'Official factory warranty' },
];""")

# getGraphSchema
content = content.replace(
"""      '@type': ['Product', 'Service', 'B2BService' as string],
      '@id': `${SITE_URL}/building-glass-insulation#service`,
      name: 'عزل واجهات زجاج المباني — جدة والمملكة',
      image: `${SITE_URL}/images/hero-building-glass-insulation.webp`,
      description: 'عزل حراري احترافي لواجهات المباني التجارية والفلل — توفير 40% كهرباء. متوافق مع كود البناء السعودي SBC 601 ومعايير ASHRAE 90.1.',
      brand: { '@type': 'Brand', name: 'عزل كور' },
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        { '@type': 'Country', name: 'المملكة العربية السعودية' },
      ],
      serviceType: 'عزل واجهات زجاج مباني',
      offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '50', highPrice: '200', unitText: 'ر.س/م²' },
      termsOfService: `${SITE_URL}/about`,
      audience: { '@type': 'BusinessAudience', audienceType: 'مقاولون، شركات عقارية، ملاك مباني تجارية' },
      // ── Agentic Schema: ReserveAction ──
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: WHATSAPP_LINK,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'حجز معاينة عزل مباني',
        },
      },""",
"""      '@type': ['Product', 'Service', 'B2BService' as string],
      '@id': `${SITE_URL}/building-glass-insulation#service`,
      name: isAr ? 'عزل واجهات زجاج المباني — جدة والمملكة' : 'Building Glass Insulation — Jeddah & KSA',
      image: `${SITE_URL}/images/hero-building-glass-insulation.webp`,
      description: isAr ? 'عزل حراري احترافي لواجهات المباني التجارية والفلل — توفير 40% كهرباء. متوافق مع كود البناء السعودي SBC 601 ومعايير ASHRAE 90.1.' : 'Professional thermal insulation for commercial building facades and villas — save 40% on electricity. Compliant with Saudi Building Code SBC 601 and ASHRAE 90.1 standards.',
      brand: { '@type': 'Brand', name: isAr ? 'عزل كور' : 'AzelCore' },
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: isAr ? 'جدة' : 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        { '@type': 'Country', name: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
      ],
      serviceType: isAr ? 'عزل واجهات زجاج مباني' : 'Building Glass Facade Insulation',
      offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '50', highPrice: '200', unitText: isAr ? 'ر.س/م²' : 'SAR/m²' },
      termsOfService: `${SITE_URL}/about`,
      audience: { '@type': 'BusinessAudience', audienceType: isAr ? 'مقاولون، شركات عقارية، ملاك مباني تجارية' : 'Contractors, Real Estate Companies, Commercial Building Owners' },
      // ── Agentic Schema: ReserveAction ──
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: WHATSAPP_LINK,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: isAr ? 'حجز معاينة عزل مباني' : 'Book Building Insulation Inspection',
        },
      },""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'عزل واجهات مباني', item: `${SITE_URL}/building-glass-insulation` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'عزل واجهات مباني' : 'Building Facade Insulation', item: `${SITE_URL}/building-glass-insulation` },""")


content = content.replace(
"""      <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>عزل واجهات مباني</span>
          </nav>
          <h1 className={styles.heroTitle}>عزل واجهات <span className={styles.greenGradient}>المباني</span> في جدة</h1>
          <p className={styles.heroSubtitle}>
            وفّر <strong>40% من فاتورة الكهرباء</strong> بأفلام عزل حراري أمريكية — حجب 97% من الحرارة
            مع الحفاظ على الإضاءة الطبيعية والمنظر الخارجي.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>طلب عرض سعر</a>
            <a href="#types" className={styles.secondaryBtn}>أنواع العزل ↓</a>
          </div>""",
"""      <nav className={styles.breadcrumb} aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'عزل واجهات مباني' : 'Building Facade Insulation'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'عزل واجهات ' : 'Building '}<span className={styles.greenGradient}>{isAr ? 'المباني' : 'Facade Insulation'}</span>{isAr ? ' في جدة' : ' in Jeddah'}</h1>
          <p className={styles.heroSubtitle}>
            {isAr ? 'وفّر ' : 'Save '}<strong>{isAr ? '40% من فاتورة الكهرباء' : '40% on electricity bills'}</strong>{isAr ? ' بأفلام عزل حراري أمريكية — حجب 97% من الحرارة مع الحفاظ على الإضاءة الطبيعية والمنظر الخارجي.' : ' with American thermal insulation films — blocking 97% of heat while maintaining natural lighting and exterior views.'}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'طلب عرض سعر' : 'Get a Quote'}</a>
            <a href="#types" className={styles.secondaryBtn}>{isAr ? 'أنواع العزل ↓' : 'Insulation Types ↓'}</a>
          </div>""")

content = content.replace(
"""          <div className={styles.statsGrid}>
            {savings.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>""",
"""          <div className={styles.statsGrid}>
            {getSavings(isAr).map((s, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع المباني</span>
            <h2 className={styles.sectionTitle}>حلول عزل لكل نوع مبنى</h2>
            <p className={styles.sectionSubtitle}>نخدم المشاريع السكنية والتجارية — عقود شركات ومناقصات حكومية</p>
          </div>
          <dl className={styles.typesGrid}>
            {buildingTypes.map((b, i) => (
              <div key={i} className={styles.typeCard}>
                <dt>
                  <span className={styles.typeIcon}>{b.icon}</span>
                  {b.name}
                </dt>
                <dd>{b.desc}</dd>
              </div>
            ))}
          </dl>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أنواع المباني' : 'Building Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'حلول عزل لكل نوع مبنى' : 'Insulation Solutions for Every Building Type'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'نخدم المشاريع السكنية والتجارية — عقود شركات ومناقصات حكومية' : 'We serve residential and commercial projects — corporate contracts and government tenders'}</p>
          </div>
          <dl className={styles.typesGrid}>
            {getBuildingTypes(isAr).map((b, i) => (
              <div key={i} className={styles.typeCard}>
                <dt>
                  <span className={styles.typeIcon}>{b.icon}</span>
                  {b.name}
                </dt>
                <dd>{b.desc}</dd>
              </div>
            ))}
          </dl>""")


content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع الأفلام</span>
            <h2 className={styles.sectionTitle}>اختر الفيلم المناسب لمبناك</h2>
          </div>
          <div className={styles.filmTable}>
            <table className={styles.table} itemScope itemType="http://schema.org/Table">
              <caption className={styles.tableCaption} itemProp="about">مقارنة أنواع أفلام عزل المباني في السعودية 2026 — حسب معايير ASHRAE و SBC</caption>
              <thead>
                <tr><th scope="col">نوع الفيلم</th><th scope="col">حجب IR</th><th scope="col">حجب UV</th><th scope="col">نفاذية الضوء</th><th scope="col">الضمان</th></tr>
              </thead>
              <tbody>
                {filmTypes.map((f, i) => (
                  <tr key={i} className={f.best ? styles.bestRow : ''}>
                    <td className={styles.filmName}>{f.name} {f.best && '⭐'}</td>
                    <td>{f.ir}</td><td>{f.uv}</td><td>{f.light}</td><td>{f.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أنواع الأفلام' : 'Film Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'اختر الفيلم المناسب لمبناك' : 'Choose the Right Film for Your Building'}</h2>
          </div>
          <div className={styles.filmTable}>
            <table className={styles.table} itemScope itemType="http://schema.org/Table">
              <caption className={styles.tableCaption} itemProp="about">{isAr ? 'مقارنة أنواع أفلام عزل المباني في السعودية 2026 — حسب معايير ASHRAE و SBC' : 'Comparison of Building Insulation Film Types in KSA 2026 — Based on ASHRAE and SBC Standards'}</caption>
              <thead>
                <tr><th scope="col">{isAr ? 'نوع الفيلم' : 'Film Type'}</th><th scope="col">{isAr ? 'حجب IR' : 'IR Block'}</th><th scope="col">{isAr ? 'حجب UV' : 'UV Block'}</th><th scope="col">{isAr ? 'نفاذية الضوء' : 'VLT'}</th><th scope="col">{isAr ? 'الضمان' : 'Warranty'}</th></tr>
              </thead>
              <tbody>
                {getFilmTypes(isAr).map((f, i) => (
                  <tr key={i} className={f.best ? styles.bestRow : ''}>
                    <td className={styles.filmName}>{f.name} {f.best && '⭐'}</td>
                    <td>{f.ir}</td><td>{f.uv}</td><td>{f.light}</td><td>{f.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>المزايا</span>
            <h2 className={styles.sectionTitle}>لماذا عزل واجهات المباني ضرورة في جدة</h2>
          </div>
          <dl className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: 'توفير مالي ضخم', desc: 'تقليل استهلاك الكهرباء بنسبة تصل إلى 40% — استرداد التكلفة خلال 2-3 سنوات. متوافق مع SBC 601.' },
              { icon: '🌡️', title: 'راحة حرارية', desc: 'تقليل درجة حرارة الزجاج بمقدار 15-20 درجة — بيئة مريحة بدون بقع حرارية. معيار ASHRAE 55.' },
              { icon: '🛋️', title: 'حماية الأثاث', desc: 'حجب 99% من الأشعة فوق البنفسجية المسببة لبهتان الأثاث والستائر والأرضيات.' },
              { icon: '🔒', title: 'أمان إضافي', desc: 'أفلام الأمان تمنع تناثر الزجاج عند الكسر — مطلوب في المباني التجارية حسب كود البناء السعودي.' },
              { icon: '👁️', title: 'خصوصية ذكية', desc: 'أفلام عاكسة توفر خصوصية نهارية كاملة مع الحفاظ على الرؤية من الداخل.' },
              { icon: '🌿', title: 'صديق للبيئة', desc: 'تقليل البصمة الكربونية بتخفيض استهلاك الطاقة — متوافق مع رؤية 2030 وأهداف LEED.' },
            ].map((b, i) => (""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'المزايا' : 'Benefits'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'لماذا عزل واجهات المباني ضرورة في جدة' : 'Why Building Facade Insulation is a Necessity in Jeddah'}</h2>
          </div>
          <dl className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: isAr ? 'توفير مالي ضخم' : 'Massive Financial Savings', desc: isAr ? 'تقليل استهلاك الكهرباء بنسبة تصل إلى 40% — استرداد التكلفة خلال 2-3 سنوات. متوافق مع SBC 601.' : 'Reduce electricity consumption by up to 40% — ROI within 2-3 years. Compliant with SBC 601.' },
              { icon: '🌡️', title: isAr ? 'راحة حرارية' : 'Thermal Comfort', desc: isAr ? 'تقليل درجة حرارة الزجاج بمقدار 15-20 درجة — بيئة مريحة بدون بقع حرارية. معيار ASHRAE 55.' : 'Reduce glass temperature by 15-20 degrees — comfortable environment with no hot spots. ASHRAE 55 standard.' },
              { icon: '🛋️', title: isAr ? 'حماية الأثاث' : 'Furniture Protection', desc: isAr ? 'حجب 99% من الأشعة فوق البنفسجية المسببة لبهتان الأثاث والستائر والأرضيات.' : 'Block 99% of UV rays that cause fading to furniture, curtains, and flooring.' },
              { icon: '🔒', title: isAr ? 'أمان إضافي' : 'Added Security', desc: isAr ? 'أفلام الأمان تمنع تناثر الزجاج عند الكسر — مطلوب في المباني التجارية حسب كود البناء السعودي.' : 'Safety films prevent glass shattering upon impact — required in commercial buildings per Saudi Building Code.' },
              { icon: '👁️', title: isAr ? 'خصوصية ذكية' : 'Smart Privacy', desc: isAr ? 'أفلام عاكسة توفر خصوصية نهارية كاملة مع الحفاظ على الرؤية من الداخل.' : 'Reflective films provide full daytime privacy while maintaining visibility from the inside.' },
              { icon: '🌿', title: isAr ? 'صديق للبيئة' : 'Eco-Friendly', desc: isAr ? 'تقليل البصمة الكربونية بتخفيض استهلاك الطاقة — متوافق مع رؤية 2030 وأهداف LEED.' : 'Reduce carbon footprint by lowering energy consumption — compliant with Vision 2030 and LEED goals.' },
            ].map((b, i) => (""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>عقود الشركات</span>
            <h2 className={styles.sectionTitle}>حاسبة العائد على الاستثمار — مشاريع المباني</h2>
            <p className={styles.sectionSubtitle}>أداة للمقاولين وملاك العقارات التجارية — احسب توفيرك حسب معايير كود البناء السعودي</p>
          </div>
          <CorporateRoiCalculator />""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'عقود الشركات' : 'Corporate Contracts'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'حاسبة العائد على الاستثمار — مشاريع المباني' : 'ROI Calculator — Building Projects'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'أداة للمقاولين وملاك العقارات التجارية — احسب توفيرك حسب معايير كود البناء السعودي' : 'Tool for contractors and commercial property owners — calculate your savings based on Saudi Building Code standards'}</p>
          </div>
          <CorporateRoiCalculator isAr={isAr} />""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من مشاريعنا في عزل المباني</h2>
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أعمالنا' : 'Our Work'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'من مشاريعنا في عزل المباني' : 'From Our Building Insulation Projects'}</h2>
          </div>""")

content = content.replace(
"""      <ServiceDisclaimer
        title="أمان الزجاج: المباني"
        text="فيلم الأمان (Safety Film) يمنع تناثر الزجاج عند الكسر ويحمي من الإصابات. مطلوب في المباني التجارية والمدارس حسب كود البناء السعودي."
      />""",
"""      <ServiceDisclaimer
        title={isAr ? 'أمان الزجاج: المباني' : 'Glass Safety: Buildings'}
        text={isAr ? 'فيلم الأمان (Safety Film) يمنع تناثر الزجاج عند الكسر ويحمي من الإصابات. مطلوب في المباني التجارية والمدارس حسب كود البناء السعودي.' : 'Safety Film prevents glass from shattering upon breakage and protects against injuries. Required in commercial buildings and schools per the Saudi Building Code.'}
      />""")

content = content.replace(
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>تغطية وطنية</span>
            <h2 className={styles.sectionTitle}>نخدم 15 مدينة سعودية</h2>
            <p className={styles.sectionSubtitle}>عزل واجهات مباني احترافي في كل أنحاء المملكة — كل مدينة بتوصية مخصصة لمناخها.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {ksaCities.map(city => {
              const content = citiesContentData[city.id];
              return (
                <details key={city.id} style={{ background: 'var(--surface)', borderRadius: '14px', padding: '1.25rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>🏙️ {city.nameAr} <span style={{ fontSize: '0.8rem', color: 'hsl(220, 10%, 65%)', fontWeight: 400 }}>({city.avgTemp} | {city.humidity} رطوبة)</span></span>
                    <span style={{ fontSize: '1.2rem', color: 'hsl(210, 100%, 72%)' }}>+</span>
                  </summary>
                  {content && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <p style={{ lineHeight: '1.8', color: 'hsl(220, 10%, 65%)', fontSize: '0.95rem' }}>{content.paragraph}</p>
                      <div style={{ background: 'var(--surface-elevated, #0f1923)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                        <p style={{ fontSize: '0.85rem', color: 'hsl(210, 100%, 72%)', fontWeight: 600 }}>💰 تقدير التوفير</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginTop: '0.25rem' }}>{content.savingsEstimate}</p>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'hsl(220, 10%, 65%)' }}><strong>الفيلم الموصى:</strong> {content.recommendedFilm}</p>
                    </div>
                  )}
                </details>
              );
            })}
          </div>""",
"""          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'تغطية وطنية' : 'National Coverage'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'نخدم 15 مدينة سعودية' : 'We Serve 15 Saudi Cities'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'عزل واجهات مباني احترافي في كل أنحاء المملكة — كل مدينة بتوصية مخصصة لمناخها.' : 'Professional building facade insulation across the Kingdom — with customized recommendations for each city’s climate.'}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            {ksaCities.map(city => {
              const content = citiesContentData[city.id];
              return (
                <details key={city.id} style={{ background: 'var(--surface)', borderRadius: '14px', padding: '1.25rem', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>🏙️ {isAr ? city.nameAr : city.nameEn} <span style={{ fontSize: '0.8rem', color: 'hsl(220, 10%, 65%)', fontWeight: 400 }}>({city.avgTemp} | {isAr ? `${city.humidity} رطوبة` : `${city.humidity} humidity`})</span></span>
                    <span style={{ fontSize: '1.2rem', color: 'hsl(210, 100%, 72%)' }}>+</span>
                  </summary>
                  {content && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <p style={{ lineHeight: '1.8', color: 'hsl(220, 10%, 65%)', fontSize: '0.95rem' }}>{isAr ? content.paragraph : (content.paragraphEn || content.paragraph)}</p>
                      <div style={{ background: 'var(--surface-elevated, #0f1923)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                        <p style={{ fontSize: '0.85rem', color: 'hsl(210, 100%, 72%)', fontWeight: 600 }}>💰 {isAr ? 'تقدير التوفير' : 'Savings Estimate'}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginTop: '0.25rem' }}>{isAr ? content.savingsEstimate : (content.savingsEstimateEn || content.savingsEstimate)}</p>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'hsl(220, 10%, 65%)' }}><strong>{isAr ? 'الفيلم الموصى:' : 'Recommended Film:'}</strong> {isAr ? content.recommendedFilm : (content.recommendedFilmEn || content.recommendedFilm)}</p>
                    </div>
                  )}
                </details>
              );
            })}
          </div>""")

content = content.replace(
"""          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور لخدمات مشاريع المباني"
            quote="تطبيق معايير كود البناء السعودي (SBC) في العزل الزجاجي ليس خياراً بل ضرورة لتقليل الهدر المالي. نضمن لك أفلام عزل معتمدة توفر حتى 40% من استهلاك التكييف وتطيل عمر الأثاث والمعدات داخل المبنى."
            reviewDate="2026-05-01"
          />""",
"""          <AuthorProfile
            expertName={isAr ? OWNER_NAME : "Ahmed Salem"}
            expertTitle={isAr ? OWNER_TITLE : "Tinting Expert"}
            organization={isAr ? "عزل كور لخدمات مشاريع المباني" : "AzelCore Building Projects Services"}
            quote={isAr ? "تطبيق معايير كود البناء السعودي (SBC) في العزل الزجاجي ليس خياراً بل ضرورة لتقليل الهدر المالي. نضمن لك أفلام عزل معتمدة توفر حتى 40% من استهلاك التكييف وتطيل عمر الأثاث والمعدات داخل المبنى." : "Applying Saudi Building Code (SBC) standards in glass insulation is not an option but a necessity to reduce financial waste. We guarantee certified insulation films that save up to 40% of AC consumption and prolong the lifespan of furniture and equipment inside the building."}
            reviewDate="2026-05-01"
          />""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>جاهز توفّر في <span className={styles.greenGradient}>فاتورة الكهرباء</span>؟</h2>
          <p className={styles.ctaSubtitle}>معاينة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>طلب معاينة مجانية</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز توفّر في ' : 'Ready to save on your '}<span className={styles.greenGradient}>{isAr ? 'فاتورة الكهرباء' : 'electricity bill'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'معاينة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة' : 'Free inspection + instant quote — Authorized Johnson and 3M dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'طلب معاينة مجانية' : 'Request Free Inspection'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>""")

with open('src/app/[locale]/(national-ksa)/building-glass-insulation/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

