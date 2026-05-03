import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, VAT_ID, CRN } from '@/lib/constants';
import ServiceSummary from '@/components/seo/ServiceSummary';
import CrossSellCards from '@/components/sections/CrossSellCards';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'وكيل 3M المعتمد في جدة — 3M Window Films | عزل كور',
  description: 'عزل كور الوكيل الرسمي لأفلام 3M الأمريكية في جدة. Crystalline يحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV. 4 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.',
  keywords: ['عازل 3M', '3M Window Films', 'وكيل 3M جدة', '3M Crystalline', 'تظليل 3M', '3M Ceramic IR', 'نانو سيراميك 3M'],
  alternates: { canonical: `${SITE_URL}/3m-authorized-dealer` },
  openGraph: {
    title: 'وكيل 3M المعتمد — 3M Window Films | عزل كور جدة',
    description: '4 خطوط إنتاج أمريكية — Crystalline بحجب 97% IR + 99.9% UV — ضمان عمر السيارة',
    url: `${SITE_URL}/3m-authorized-dealer`,
    images: [{ url: '/images/hero-car-tinting-jeddah.webp', width: 1200, height: 630 }],
  },
};

const productLines = [
  {
    id: 'crystalline',
    name: 'Crystalline',
    nameAr: 'كريستالين',
    tier: 'الفلاجشيب',
    tech: 'نانو سيراميك متعدد الطبقات (200+ طبقة)',
    ir: 97,
    uv: 99.9,
    tser: 90,
    vlt: '40% - 90%',
    warranty: 'عمر السيارة',
    description: 'أعلى فيلم شفاف في العالم. 200+ طبقة نانو سيراميك تحجب 97% من الحرارة بدون تغيير لون الزجاج. يسمح بمرور 70-90% من الضوء — مثالي للزجاج الأمامي بدون أي مخالفة مرورية.',
    features: ['حجب IR 97%', '99.9% حجب UV', 'شبه شفاف', 'لا يحجب الإشارات', 'ضمان عمر السيارة', '200+ طبقة نانو'],
    bestFor: 'الزجاج الأمامي + السيارات الفاخرة + من يريد حماية بدون تغيير المظهر',
    color: 'flagship',
  },
  {
    id: 'ceramic-ir',
    name: 'Ceramic IR',
    nameAr: 'سيراميك آي آر',
    tier: 'بريميوم',
    tech: 'سيراميك نانو غير معدني',
    ir: 95,
    uv: 99,
    tser: 79,
    vlt: '5% - 70%',
    warranty: 'عمر السيارة',
    description: 'أداء قريب من Crystalline بدرجات أغمق. تقنية سيراميك غير معدنية تحجب 95% IR مع توفر درجات من 5% إلى 70% VLT. التوازن المثالي بين الخصوصية والأداء.',
    features: ['حجب IR 95%', 'سيراميك غير معدني', 'لا يحجب الإشارات', 'ضمان عمر السيارة', 'درجات متعددة'],
    bestFor: 'من يريد تظليل داكن مع أداء حراري فائق',
    color: 'premium',
  },
  {
    id: 'color-stable',
    name: 'Color Stable',
    nameAr: 'كولر ستيبل',
    tier: 'قيمة عالية',
    tech: 'صبغي ثابت اللون',
    ir: 44,
    uv: 99,
    tser: 49,
    vlt: '5% - 50%',
    warranty: '5 سنوات',
    description: 'الفيلم اللي ما يتحول بنفسجي. تقنية الصبغ غير المعدني الثابت من 3M تضمن لون موحد لسنوات. سعر ممتاز مع حماية UV كاملة — الخيار الذكي للميزانية المتوسطة.',
    features: ['لون ثابت لسنوات', 'حماية UV 99%', 'بدون تحول بنفسجي', 'ضمان 5 سنوات'],
    bestFor: 'الميزانية المتوسطة + من يكره التحول البنفسجي',
    color: 'value',
  },
  {
    id: 'fx-premium',
    name: 'FX Premium',
    nameAr: 'اف اكس بريميوم',
    tier: 'اقتصادي',
    tech: 'صبغي اقتصادي',
    ir: 30,
    uv: 95,
    tser: 35,
    vlt: '5% - 35%',
    warranty: '3 سنوات',
    description: 'حل اقتصادي أصلي من 3M. جودة المصنع الأمريكي بسعر مناسب. حجب أساسي للحرارة مع حماية من الأشعة فوق البنفسجية. أفضل بمراحل من الأفلام مجهولة المصدر.',
    features: ['صناعة أمريكية', 'حماية UV 95%', 'ضمان 3 سنوات'],
    bestFor: 'الميزانية المحدودة + السيارات الاقتصادية',
    color: 'economy',
  },
];

const faqs = [
  { q: 'هل عزل كور وكيل رسمي لـ 3M؟', a: 'نعم، عزل كور وكيل معتمد ومسجل رسمياً لدى شركة 3M الأمريكية. جميع أفلامنا أصلية بتغليف المصنع وقابلة للتحقق عبر موقع 3M الرسمي.' },
  { q: 'إيش الفرق بين 3M Crystalline و Johnson Supreme IR؟', a: 'Crystalline يتفوق بـ 200+ طبقة نانو + TSER 90% مقابل 72% لـ Supreme IR. لكن السعر أعلى بـ 30-40%. كلاهما ممتاز — Crystalline للي يبغى أقصى أداء حتى لو الثمن أغلى.' },
  { q: 'ليش 3M Crystalline أغلى من باقي التظليل؟', a: 'لأنه يحتوي على 200+ طبقة نانو سيراميك مصنعة بتقنية Multilayer Optical Film الحصرية من 3M. هذي التقنية تخلي الفيلم شبه شفاف (VLT 70-90%) لكن يحجب 97% حرارة — ما فيه فيلم ثاني يقدر يحقق هذي المعادلة.' },
  { q: 'هل تظليل 3M يحجب إشارة الجوال أو GPS؟', a: 'لا. كل خطوط 3M Window Films غير معدنية — لا تأثر على الجوال، GPS، Apple Pay، رادار الرجوع، أو أي نظام إلكتروني. حتى Crystalline اللي فيه 200 طبقة.' },
  { q: 'كم ضمان تظليل 3M؟', a: 'Crystalline و Ceramic IR: ضمان عمر السيارة. Color Stable: 5 سنوات. FX Premium: 3 سنوات. الضمان يغطي التغير اللوني والفقاعات والتقشر.' },
  { q: 'هل 3M Crystalline مطابق لنظام المرور السعودي؟', a: 'نعم — وهذي أكبر ميزة فيه. Crystalline متوفر بدرجة CR70 (نفاذية 70%) وCR90 (نفاذية 90%). يعني تقدر تركبه على الزجاج الأمامي بدون أي مخالفة، وبرضو يحجب 97% حرارة.' },
];

const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/3m-authorized-dealer#product`,
      name: '3M Crystalline Window Film',
      description: 'فيلم تظليل نانو سيراميك أمريكي من 3M — 200+ طبقة تحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV',
      brand: { '@type': 'Brand', name: '3M', url: 'https://www.3m.com' },
      manufacturer: { '@type': 'Organization', name: '3M Company', url: 'https://www.3m.com/3M/en_US/automotive-window-films-us/' },
      category: 'Window Film',
      image: `${SITE_URL}/images/hero-car-tinting-jeddah.webp`,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'SAR',
        lowPrice: '400',
        highPrice: '4500',
        offerCount: '4',
        availability: 'https://schema.org/InStock',
      },
      hasWarranty: {
        '@type': 'WarrantyPromise',
        durationOfWarranty: { '@type': 'QuantitativeValue', value: 10, unitCode: 'ANN' },
        warrantyScope: 'تغير اللون + التقشر + الفقاعات',
      },
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
          name: 'حجز موعد تظليل 3M',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
      },
      review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'عبدالله القرشي' },
        reviewBody: 'ركبت Crystalline CR70 على الأمامي — الفرق خيالي. الحرارة انخفضت بشكل واضح والزجاج تقريباً شفاف.',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/3m-authorized-dealer#faq`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'وكيل 3M المعتمد', item: `${SITE_URL}/3m-authorized-dealer` },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-3m-1', '#voice-answer-3m-2', '#voice-answer-3m-3'],
    },
  ],
};

export default function ThreeMDealerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />

      <ServiceSummary summary="على عكس الأفلام التجارية التي تتحول بنفسجياً خلال أشهر وتفقد كفاءتها، تعتمد أفلام 3M على تقنية Multilayer Optical Film بـ 200+ طبقة نانو سيراميك. Crystalline يحجب 97% IR مع نفاذية 70-90% ضوء مرئي — يعني حماية قصوى من حرارة جدة بدون تغيير شكل الزجاج وبدون مخالفة مرور. عزل كور وكيل 3M المعتمد في جدة." />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-car-tinting-jeddah.webp" alt="تظليل 3M Crystalline على سيارة في جدة" fill priority fetchPriority="high" quality={80} sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.dealerBadge}>
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
          </div>
        </div>
      </section>

      {/* Why 3M */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
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
            ].map((item, i) => (
              <div key={i} className={styles.whyCard}>
                <dt><span className={styles.whyIcon}>{item.icon}</span>{item.title}</dt>
                <dd>{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="products">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خطوط الإنتاج</span>
            <h2 className={styles.sectionTitle}>4 خطوط إنتاج لكل احتياج وميزانية</h2>
            <p className={styles.sectionSubtitle}>كل الأرقام من الداتاشيت الرسمي لـ 3M — قابلة للتحقق من موقع الشركة مباشرة.</p>
          </div>

          <div className={styles.productsGrid}>
            {productLines.map((product) => (
              <div key={product.id} className={`${styles.productCard} ${styles[product.color]}`}>
                <div className={styles.productHeader}>
                  <span className={styles.productTier}>{product.tier}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.productNameAr}>{product.nameAr}</span>
                </div>

                <div className={styles.productMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricFill} style={{ width: `${product.ir}%` }} />
                    </div>
                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.ir}%</span>
                      <span className={styles.metricLabel}>حجب IR</span>
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricFill} style={{ width: `${product.tser}%` }} />
                    </div>
                    <div className={styles.metricInfo}>
                      <span className={styles.metricValue}>{product.tser}%</span>
                      <span className={styles.metricLabel}>TSER</span>
                    </div>
                  </div>
                </div>

                <p className={styles.productDesc}>{product.description}</p>

                <div className={styles.productDetails}>
                  <div className={styles.detailRow}><span>التقنية:</span><span>{product.tech}</span></div>
                  <div className={styles.detailRow}><span>UV:</span><span>{product.uv}%</span></div>
                  <div className={styles.detailRow}><span>VLT:</span><span>{product.vlt}</span></div>
                  <div className={styles.detailRow}><span>الضمان:</span><span className={styles.warranty}>{product.warranty}</span></div>
                </div>

                <div className={styles.productFeatures}>
                  {product.features.map((f, j) => (
                    <span key={j} className={styles.featureTag}>✓ {f}</span>
                  ))}
                </div>

                <p className={styles.bestFor}>🎯 <strong>الأنسب لـ:</strong> {product.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>مقارنة تقنية</span>
            <h2 className={styles.sectionTitle}>3M مقابل المنافسين — بالأرقام</h2>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table} itemScope itemType="http://schema.org/Table">
              <caption className={styles.tableCaption} itemProp="about">مقارنة أفلام 3M مقابل المنافسين 2026 — بيانات من الداتاشيت الرسمي</caption>
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
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="faq">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>كل ما تحتاج تعرفه عن أفلام 3M</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <CrossSellCards currentPage="3m-authorized-dealer" />

      {/* CTA */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز تحمي سيارتك بتقنية <span className={styles.redGradient}>3M الأمريكية</span>؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية + عرض سعر فوري — وكيل 3M المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.callBtn}>📞 اتصل: {PHONE}</a>
          </div>
        </div>
      </section>

      {/* Voice Search Speakable Answers */}
      <div id="voice-answer-3m-1" style={{ display: 'none' }} aria-hidden="true">
        عزل كور هو الوكيل المعتمد لأفلام 3M في جدة. 3M شركة أمريكية عمرها أكثر من 120 سنة وتصنع أفضل أفلام تظليل في العالم.
      </div>
      <div id="voice-answer-3m-2" style={{ display: 'none' }} aria-hidden="true">
        3M Crystalline هو أفضل فيلم تظليل شفاف. فيه 200 طبقة نانو سيراميك تحجب 97% حرارة و 99.9% أشعة فوق بنفسجية. ما يأثر على إشارة الجوال.
      </div>
      <div id="voice-answer-3m-3" style={{ display: 'none' }} aria-hidden="true">
        3M عندها 4 خطوط: كريستالين وسيراميك آي آر وكولر ستيبل واف اكس بريميوم. الأسعار من 400 إلى 4500 ريال.
      </div>
    </>
  );
}
