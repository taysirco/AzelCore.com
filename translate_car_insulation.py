import re

with open('src/app/[locale]/(local-jeddah)/car-insulation-jeddah/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace graphSchema
content = content.replace(
"""const graphSchema = {""",
"""const getGraphSchema = (isAr: boolean) => ({""")

content = content.replace(
"""      name: 'عزل كور — تظليل سيارات جدة',
      alternateName: 'AzelCore Car Tinting Jeddah',
      url: `${SITE_URL}/car-insulation-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: 'ورشة تظليل سيارات احترافية في جدة — وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك أمريكية تحجب 97% حرارة مع ضمان عمر السيارة.',
      priceRange: '200-3200 SAR',
      currenciesAccepted: 'SAR',
      paymentAccepted: 'نقدي, تحويل بنكي, مدى, Apple Pay',""",
"""      name: isAr ? 'عزل كور — تظليل سيارات جدة' : 'AzelCore — Car Tinting Jeddah',
      alternateName: 'AzelCore Car Tinting Jeddah',
      url: `${SITE_URL}/car-insulation-jeddah`,
      telephone: PHONE,
      image: `${SITE_URL}/images/hero-car-tinting-process.webp`,
      logo: `${SITE_URL}/images/azelcore-logo.webp`,
      description: isAr ? 'ورشة تظليل سيارات احترافية في جدة — وكيل جونسون و 3M المعتمد. أفلام نانو سيراميك أمريكية تحجب 97% حرارة مع ضمان عمر السيارة.' : 'Professional car tinting workshop in Jeddah — Authorized Johnson & 3M dealer. American nano-ceramic films rejecting 97% of heat with a lifetime warranty.',
      priceRange: '200-3200 SAR',
      currenciesAccepted: 'SAR',
      paymentAccepted: isAr ? 'نقدي, تحويل بنكي, مدى, Apple Pay' : 'Cash, Bank Transfer, Mada, Apple Pay',""")

content = content.replace(
"""        result: {
          '@type': 'Reservation',
          name: 'حجز موعد تظليل سيارة',
        },
      },
    },""",
"""        result: {
          '@type': 'Reservation',
          name: isAr ? 'حجز موعد تظليل سيارة' : 'Book a car tinting appointment',
        },
      },
    },""")

content = content.replace(
"""    }
  ],
};""",
"""    }
  ],
});""")

# Inject getGraphSchema into component
content = content.replace(
"""export default async function CarTintingPage({ params }: { params: { locale: string } }) {
  const isAr = params.locale === 'ar';

  return (""",
"""export default async function CarTintingPage({ params }: { params: { locale: string } }) {
  const isAr = params.locale === 'ar';

  const tintTypes = getTintTypes(isAr);
  const vltGuide = getVltGuide(isAr);
  const benefits = getBenefits(isAr);
  const processSteps = getProcessSteps(isAr);
  const graphSchema = getGraphSchema(isAr);

  return (""")

content = content.replace(
"""      <Script
        id="schema-autobodyshop"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />""",
"""      <Script
        id="schema-autobodyshop"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />""")

# Hero Section
content = content.replace(
"""          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>تظليل سيارات</span>
          </nav>
          <h1 className={styles.heroTitle}>تظليل سيارات في <span className={styles.blueGradient}>جدة</span></h1>
          <p className={styles.heroSubtitle}>
            نحمي سيارتك من شمس جدة القاسية باستخدام أحدث أفلام النانو سيراميك الأمريكية من جونسون و 3M. حجب 97% من الحرارة مع ضمان يمتد لعمر السيارة.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>احجز موعدك الآن</a>
            <a href="#types" className={styles.secondaryBtn}>قارن أنواع التظليل ↓</a>
          </div>
          <div className={styles.heroTrust}>
            <span>⭐ تقييم 4.9/5 من 120+ عميل في جدة</span>
            <span>🛡️ ضمان 10 سنوات إلى مدى الحياة</span>
          </div>""",
"""          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}>
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'تظليل سيارات' : 'Car Tinting'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'تظليل سيارات في ' : 'Car Tinting in '}<span className={styles.blueGradient}>{isAr ? 'جدة' : 'Jeddah'}</span></h1>
          <p className={styles.heroSubtitle}>
            {isAr ? 'نحمي سيارتك من شمس جدة القاسية باستخدام أحدث أفلام النانو سيراميك الأمريكية من جونسون و 3M. حجب 97% من الحرارة مع ضمان يمتد لعمر السيارة.' : 'We protect your car from Jeddah\\'s harsh sun using the latest American nano-ceramic films from Johnson & 3M. Reject 97% of heat with a lifetime warranty.'}
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'احجز موعدك الآن' : 'Book Now'}</a>
            <a href="#types" className={styles.secondaryBtn}>{isAr ? 'قارن أنواع التظليل ↓' : 'Compare Tint Types ↓'}</a>
          </div>
          <div className={styles.heroTrust}>
            <span>⭐ {isAr ? 'تقييم 4.9/5 من 120+ عميل في جدة' : '4.9/5 Rating from 120+ Jeddah Customers'}</span>
            <span>🛡️ {isAr ? 'ضمان 10 سنوات إلى مدى الحياة' : '10 Years to Lifetime Warranty'}</span>
          </div>""")

# Table
content = content.replace(
"""      <section id="types" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع أفلام التظليل</span>
            <h2 className={styles.sectionTitle}>اختر التظليل المناسب لسيارتك وميزانيتك</h2>
            <p className={styles.sectionSubtitle}>نستخدم أفلام أصلية 100% مثبتة الفعالية في أجواء الخليج.</p>
          </div>
          
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>النوع</th>
                  <th>عزل الحرارة (IR)</th>
                  <th>حجب الأشعة (UV)</th>
                  <th>إشارة الجوال</th>
                  <th>الضمان</th>
                  <th>السعر التقديري (ر.س)</th>
                </tr>
              </thead>""",
"""      <section id="types" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أنواع أفلام التظليل' : 'Tint Film Types'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'اختر التظليل المناسب لسيارتك وميزانيتك' : 'Choose the Right Tint for Your Car & Budget'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'نستخدم أفلام أصلية 100% مثبتة الفعالية في أجواء الخليج.' : 'We use 100% authentic films proven in Gulf climates.'}</p>
          </div>
          
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>{isAr ? 'النوع' : 'Type'}</th>
                  <th>{isAr ? 'عزل الحرارة (IR)' : 'Heat Rejection (IR)'}</th>
                  <th>{isAr ? 'حجب الأشعة (UV)' : 'UV Block'}</th>
                  <th>{isAr ? 'إشارة الجوال' : 'Mobile Signal'}</th>
                  <th>{isAr ? 'الضمان' : 'Warranty'}</th>
                  <th>{isAr ? 'السعر التقديري (ر.س)' : 'Est. Price (SAR)'}</th>
                </tr>
              </thead>""")

# Benefits
content = content.replace(
"""      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>لماذا عزل كور؟</span>
            <h2 className={styles.sectionTitle}>لا نركب التظليل فقط، بل نضمن لك النتيجة</h2>
          </div>""",
"""      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'لماذا عزل كور؟' : 'Why AzelCore?'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'لا نركب التظليل فقط، بل نضمن لك النتيجة' : 'We Don\\'t Just Tint, We Guarantee the Result'}</h2>
          </div>""")

# VLT Guide
content = content.replace(
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>دليل الدرجات</span>
            <h2 className={styles.sectionTitle}>درجات التظليل — أي VLT يناسبك؟</h2>
          </div>""",
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'دليل الدرجات' : 'Shade Guide'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'درجات التظليل — أي VLT يناسبك؟' : 'Tint Shades — Which VLT Fits You?'}</h2>
          </div>""")

# Process
content = content.replace(
"""      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوات العمل</span>
            <h2 className={styles.sectionTitle}>كيف نظلل سيارتك</h2>
          </div>""",
"""      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'خطوات العمل' : 'Our Process'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'كيف نظلل سيارتك' : 'How We Tint Your Car'}</h2>
          </div>""")

# Gallery
content = content.replace(
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من أعمالنا في تظليل السيارات</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'car-tint-heat-comparison', 'thermal-camera-car-test', 'nano-ceramic-tint-applied'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={`تظليل سيارات جدة — عمل ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/gallery" className={styles.secondaryBtn}>شاهد كل أعمالنا ←</Link>
          </div>
        </div>
      </section>""",
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'أعمالنا' : 'Our Work'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'من أعمالنا في تظليل السيارات' : 'Our Car Tinting Gallery'}</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['gallery-car-after-01', 'gallery-car-after-02', 'gallery-car-after-03', 'car-tint-heat-comparison', 'thermal-camera-car-test', 'nano-ceramic-tint-applied'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.webp`} alt={isAr ? `تظليل سيارات جدة — عمل ${i + 1}` : `Car Tinting Jeddah — Work ${i + 1}`} width={400} height={300} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/gallery" className={styles.secondaryBtn}>{isAr ? 'شاهد كل أعمالنا ←' : 'View All Gallery ←'}</Link>
          </div>
        </div>
      </section>""")

# Disclaimers
content = content.replace(
"""      <ServiceDisclaimer
        title="تحذير: التظليل المقلد"
        text="أفلام التظليل المقلدة تحتوي مواد كيميائية تتحلل بالحرارة وتطلق أبخرة سامة داخل المقصورة. تأكد من شهادة المنتج الأصلية."
      />
      <ServiceDisclaimer
        title="تحذير قانوني: نسبة التظليل"
        text="تجاوز نسبة 30% VLT = مخالفة 500-900 ر.س + رفض الفحص الدوري + إلزام بالإزالة على حسابك."
      />""",
"""      <ServiceDisclaimer
        title={isAr ? 'تحذير: التظليل المقلد' : 'Warning: Fake Tint Films'}
        text={isAr ? 'أفلام التظليل المقلدة تحتوي مواد كيميائية تتحلل بالحرارة وتطلق أبخرة سامة داخل المقصورة. تأكد من شهادة المنتج الأصلية.' : 'Fake tint films contain chemicals that degrade under heat and release toxic fumes inside the cabin. Always verify the original product certificate.'}
      />
      <ServiceDisclaimer
        title={isAr ? 'تحذير قانوني: نسبة التظليل' : 'Legal Warning: Tint Percentage'}
        text={isAr ? 'تجاوز نسبة 30% VLT = مخالفة 500-900 ر.س + رفض الفحص الدوري + إلزام بالإزالة على حسابك.' : 'Exceeding 30% VLT = 500-900 SAR fine + rejection in periodic inspection + mandatory removal at your expense.'}
      />""")

# Author Profile
content = content.replace(
"""          <AuthorProfile
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور (وكيل جونسون و 3M)"
            quote="تظليل النانو سيراميك الأصلي هو استثمار حقيقي لحماية سيارتك وصحتك من أشعة UV الضارة. احرص دائماً على الالتزام بنسبة 30% المقررة من المرور وتأكد من شهادة الضمان المعتمدة."
            reviewDate="2026-05-01"
          />""",
"""          <AuthorProfile
            expertName={isAr ? OWNER_NAME : OWNER_NAME_EN}
            expertTitle={isAr ? OWNER_TITLE : OWNER_TITLE_EN}
            organization={isAr ? 'عزل كور (وكيل جونسون و 3M)' : 'AzelCore (Johnson & 3M Authorized)'}
            quote={isAr ? 'تظليل النانو سيراميك الأصلي هو استثمار حقيقي لحماية سيارتك وصحتك من أشعة UV الضارة. احرص دائماً على الالتزام بنسبة 30% المقررة من المرور وتأكد من شهادة الضمان المعتمدة.' : 'Original nano-ceramic tinting is a true investment to protect your car and health from harmful UV rays. Always adhere to the 30% limit set by traffic laws and ensure you receive a certified warranty.'}
            reviewDate="2026-05-01"
          />""")

# Districts Coverage
content = content.replace(
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>تغطية أحياء جدة</span>
            <h2 className={styles.sectionTitle}>نخدم جميع أحياء جدة — حلول مخصصة لكل حي</h2>
            <p className={styles.sectionSubtitle}>كل حي له مناخه الخاص — نوصي بالفيلم المثالي حسب الرطوبة والحرارة والقرب من البحر.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {jeddahDistricts.map(d => (
              <Link
                key={d.id}
                href={`/car-insulation-jeddah/${d.id}`}
                style={{
                  display: 'block',
                  padding: 'var(--space-5)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)' }}>تظليل سيارات {d.nameAr} 🚗</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6 }}>
                  رطوبة {d.humidity} • UV {d.uvIndex} • {d.zone} جدة
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>""",
"""      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'تغطية أحياء جدة' : 'Jeddah Districts Coverage'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'نخدم جميع أحياء جدة — حلول مخصصة لكل حي' : 'We Serve All Jeddah Districts — Tailored Solutions'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? 'كل حي له مناخه الخاص — نوصي بالفيلم المثالي حسب الرطوبة والحرارة والقرب من البحر.' : 'Every district has its own microclimate — we recommend the perfect film based on humidity, heat, and proximity to the sea.'}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {jeddahDistricts.map(d => (
              <Link
                key={d.id}
                href={`/car-insulation-jeddah/${d.id}`}
                style={{
                  display: 'block',
                  padding: 'var(--space-5)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)' }}>{isAr ? `تظليل سيارات ${d.nameAr}` : `Car Tinting ${d.nameEn}`} 🚗</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6 }}>
                  {isAr ? `رطوبة ${d.humidity} • UV ${d.uvIndex} • ${d.zone} جدة` : `Humidity ${d.humidity} • UV ${d.uvIndex} • ${d.zone} Jeddah`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>""")

# CTA
content = content.replace(
"""      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك من <span className={styles.blueGradient}>حرارة جدة</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>""",
"""      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز تحمي سيارتك من ' : 'Ready to protect your car from '}<span className={styles.blueGradient}>{isAr ? 'حرارة جدة' : 'Jeddah heat'}</span>؟</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية + عرض سعر فوري — وكيل جونسون و 3M المعتمد في جدة' : 'Free consultation + instant quote — Authorized Johnson & 3M dealer in Jeddah'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>""")

with open('src/app/[locale]/(local-jeddah)/car-insulation-jeddah/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
