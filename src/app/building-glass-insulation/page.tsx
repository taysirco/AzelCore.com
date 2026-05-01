import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'عزل واجهات زجاج المباني في جدة — وفّر 40% من فاتورة الكهرباء',
  description: 'عزل حراري احترافي لواجهات المباني والفلل في جدة. أفلام نانو سيراميك تحجب 97% حرارة وتوفر 40% من تكاليف التكييف. ضمان 15 سنة.',
  keywords: ['عزل مباني جدة', 'عزل واجهات زجاج', 'فيلم حراري مباني', 'عزل فلل جدة', 'توفير كهرباء'],
  alternates: { canonical: `${SITE_URL}/building-glass-insulation` },
  openGraph: {
    title: 'عزل واجهات زجاج المباني — توفير 40% كهرباء | عزل كور جدة',
    description: 'أفلام نانو سيراميك للمباني تحجب 97% حرارة — ضمان 15 سنة',
    url: `${SITE_URL}/building-glass-insulation`,
    images: [{ url: '/images/hero-building-glass-insulation.png', width: 1200, height: 630 }],
  },
};

const buildingTypes = [
  { icon: '🏠', name: 'فلل وقصور', desc: 'عزل نوافذ الفلل والقصور لتقليل الحرارة وحماية الأثاث من الأشعة فوق البنفسجية مع الحفاظ على المنظر الخارجي.' },
  { icon: '🏢', name: 'أبراج ومكاتب', desc: 'عزل الواجهات الزجاجية الكاملة للأبراج التجارية — توفير طاقة ضخم وتحسين بيئة العمل.' },
  { icon: '🏬', name: 'محلات تجارية', desc: 'عزل واجهات المعارض والمحلات — حماية البضائع من أشعة الشمس مع الحفاظ على الإضاءة الطبيعية.' },
  { icon: '🏥', name: 'مستشفيات ومدارس', desc: 'عزل حراري آمن صحياً للمنشآت الحساسة — شهادات NFRC و AIMCAL معتمدة.' },
];

const filmTypes = [
  { name: 'نانو سيراميك شفاف', ir: '95%', uv: '99%', light: '70-80%', warranty: '15 سنة', best: true },
  { name: 'عاكس فضي', ir: '85%', uv: '99%', light: '15-35%', warranty: '10 سنوات', best: false },
  { name: 'عاكس رمادي', ir: '80%', uv: '99%', light: '20-40%', warranty: '10 سنوات', best: false },
  { name: 'أمان وحماية', ir: '60%', uv: '99%', light: '50-70%', warranty: '12 سنة', best: false },
];

const savings = [
  { label: 'توفير فاتورة الكهرباء', value: '40%', desc: 'تقليل حمل التكييف بشكل ملحوظ' },
  { label: 'حجب الأشعة تحت الحمراء', value: '97%', desc: 'أقصى حماية حرارية' },
  { label: 'حجب الأشعة فوق البنفسجية', value: '99%', desc: 'حماية الأثاث والديكور' },
  { label: 'عمر الفيلم المتوقع', value: '+15 سنة', desc: 'ضمان مصنع رسمي' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'عزل واجهات زجاج المباني — جدة',
  provider: { '@type': 'Organization', name: 'عزل كور', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'جدة' },
  description: 'عزل حراري لواجهات المباني والفلل بأفلام نانو سيراميك — توفير 40% من فاتورة الكهرباء',
  offers: { '@type': 'AggregateOffer', priceCurrency: 'SAR', lowPrice: '50', highPrice: '200', unitText: 'ر.س/مـ٢' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'عزل واجهات مباني', item: `${SITE_URL}/building-glass-insulation` },
  ],
};

// FAQPage Schema — Tier 3 (top 5 building-glass FAQs)
const buildingFaqs = faqs.filter(f => f.service === 'building-glass').slice(0, 5);
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: buildingFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function BuildingInsulationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-building-glass-insulation.png" alt="عزل واجهات زجاج مبنى تجاري في جدة" fill priority style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
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
          </div>
        </div>
      </section>

      {/* Savings Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {savings.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع المباني</span>
            <h2 className={styles.sectionTitle}>حلول عزل لكل نوع مبنى</h2>
          </div>
          <div className={styles.typesGrid}>
            {buildingTypes.map((b, i) => (
              <div key={i} className={styles.typeCard}>
                <span className={styles.typeIcon}>{b.icon}</span>
                <h3 className={styles.typeTitle}>{b.name}</h3>
                <p className={styles.typeDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="types">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أنواع الأفلام</span>
            <h2 className={styles.sectionTitle}>اختر الفيلم المناسب لمبناك</h2>
          </div>
          <div className={styles.filmTable}>
            <table className={styles.table}>
              <thead>
                <tr><th>نوع الفيلم</th><th>حجب IR</th><th>حجب UV</th><th>نفاذية الضوء</th><th>الضمان</th></tr>
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
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>المزايا</span>
            <h2 className={styles.sectionTitle}>لماذا عزل واجهات المباني ضرورة في جدة</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: 'توفير مالي ضخم', desc: 'تقليل استهلاك الكهرباء بنسبة تصل إلى 40% — استرداد التكلفة خلال 2-3 سنوات.' },
              { icon: '🌡️', title: 'راحة حرارية', desc: 'تقليل درجة حرارة الزجاج بمقدار 15-20 درجة — بيئة مريحة بدون بقع حرارية.' },
              { icon: '🛋️', title: 'حماية الأثاث', desc: 'حجب 99% من الأشعة فوق البنفسجية المسببة لبهتان الأثاث والستائر والأرضيات.' },
              { icon: '🔒', title: 'أمان إضافي', desc: 'أفلام الأمان تمنع تناثر الزجاج عند الكسر — حماية إضافية للعائلة والموظفين.' },
              { icon: '👁️', title: 'خصوصية ذكية', desc: 'أفلام عاكسة توفر خصوصية نهارية كاملة مع الحفاظ على الرؤية من الداخل.' },
              { icon: '🌿', title: 'صديق للبيئة', desc: 'تقليل البصمة الكربونية بتخفيض استهلاك الطاقة — متوافق مع رؤية 2030.' },
            ].map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أعمالنا</span>
            <h2 className={styles.sectionTitle}>من مشاريعنا في عزل المباني</h2>
          </div>
          <div className={styles.galleryGrid}>
            {['building-tint-before-after', 'commercial-facade-tinting', 'villa-window-insulation-jeddah', 'office-window-tinting', 'reflective-film-building', 'gallery-building-after-01'].map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={`/images/${img}.png`} alt={`عزل واجهات مباني جدة — مشروع ${i + 1}`} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز توفّر في <span className={styles.greenGradient}>فاتورة الكهرباء</span>؟</h2>
          <p className={styles.ctaSubtitle}>معاينة مجانية + عرض سعر فوري — وكيل جونسون المعتمد في جدة</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>طلب معاينة مجانية</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
