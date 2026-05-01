import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, CRN, VAT_ID, ADDRESS_STRUCTURED } from '@/lib/constants';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'من نحن — فريق عزل كور | خبراء التظليل والعزل في جدة',
  description: 'تعرف على فريق عزل كور المتخصص في تظليل السيارات والعزل الحراري في جدة. وكيل جونسون المعتمد — فنيون معتمدون + ضمان حقيقي.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'من نحن — عزل كور',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'عزل كور',
    legalName: 'مؤسسة عزل كور للتجارة',
    founder: { '@type': 'Person', name: OWNER_NAME, jobTitle: OWNER_TITLE },
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS_STRUCTURED,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    telephone: PHONE,
    areaServed: { '@type': 'City', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
    taxID: VAT_ID,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Commercial Registration (CR)',
      value: CRN,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
      bestRating: '5',
    },
    sameAs: [
      'https://www.instagram.com/azelcore',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '22:00',
    },
  },
};

const milestones = [
  { year: '2018', title: 'البداية', desc: 'بدأنا كورشة صغيرة متخصصة في تظليل السيارات في جدة.' },
  { year: '2020', title: 'وكيل جونسون', desc: 'حصلنا على وكالة جونسون الرسمية كأول وكيل معتمد في جدة.' },
  { year: '2022', title: 'عزل المباني', desc: 'توسعنا لعزل واجهات المباني والفلل — أكثر من 50 مشروع.' },
  { year: '2024', title: 'عزل كور', desc: 'إطلاق علامة عزل كور كمنصة متكاملة لخدمات العزل والتظليل.' },
  { year: '2026', title: 'التحول الرقمي', desc: 'إطلاق المنصة الرقمية الاحترافية لخدمة العملاء أونلاين.' },
];

const values = [
  { icon: '🔍', title: 'الشفافية', desc: 'نعرض الأرقام الحقيقية من الداتاشيت — لا مبالغات ولا وعود كاذبة.' },
  { icon: '🏅', title: 'الجودة', desc: 'نستخدم فقط الأفلام الأصلية من المصنع مباشرة — كل رول بسيريال نمبر.' },
  { icon: '🤝', title: 'الأمانة', desc: 'ننصح العميل بالمنتج المناسب لاحتياجه — حتى لو أرخص.' },
  { icon: '📈', title: 'التطور', desc: 'نتابع أحدث التقنيات والمنتجات العالمية ونوفرها لعملائنا.' },
];

const certifications = [
  { name: 'Johnson Window Films', type: 'وكيل رسمي معتمد', icon: '🏆' },
  { name: '3M Authorized Applicator', type: 'فني معتمد للتركيب', icon: '🎖️' },
  { name: 'IWFA Member', type: 'عضو الاتحاد الدولي لأفلام النوافذ', icon: '🌐' },
  { name: 'وزارة التجارة', type: 'منشأة سعودية مسجلة', icon: '📋' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'الرئيسية', href: '/' },
        { name: 'من نحن', href: '/about' },
      ]} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/about-workshop-interior.png" alt="ورشة عزل كور — تظليل سيارات جدة" fill priority style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>من نحن</span>
          </nav>
          <h1 className={styles.heroTitle}>نحمي <span className={styles.gradient}>ممتلكاتك</span> من حرارة جدة</h1>
          <p className={styles.heroSubtitle}>
            فريق متخصص بخبرة +6 سنوات في العزل الحراري والتظليل — نستخدم أفضل الأفلام الأمريكية
            ونضمن لك نتيجة تشوفها بعينك وتحسها بالفرق.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className={styles.overline}>قصتنا</span>
              <h2 className={styles.sectionTitle}>من ورشة صغيرة إلى وكيل معتمد</h2>
              <p className={styles.storyPara}>
                بدأت رحلتنا في 2018 بشغف بسيط — نبي نقدم تظليل سيارات بجودة حقيقية في جدة.
                كنا نشوف السوق مليان بأفلام رخيصة تتقشر بعد أشهر ومحلات تبيع &ldquo;نانو سيراميك&rdquo; وهو في الحقيقة فيلم مصبوغ عادي.
              </p>
              <p className={styles.storyPara}>
                قررنا نكون مختلفين — نستورد من المصنع مباشرة، نعرض الداتاشيت الرسمي لكل فيلم،
                ونثبت الفرق بالكاميرا الحرارية قدام العميل. هذا النهج خلانا نحصل على وكالة جونسون الرسمية
                كأول وكيل معتمد في جدة.
              </p>
              <p className={styles.storyPara}>
                اليوم <strong>عزل كور</strong> يخدم أكثر من 780 سيارة و 50 مبنى — بضمان حقيقي مكتوب وفاتورة ضريبية رسمية.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image src="/images/why-choose-us-workshop.png" alt="فريق عزل كور في الورشة" width={500} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>المؤسس</span>
            <h2 className={styles.sectionTitle}>👨‍🔧 {OWNER_NAME}</h2>
            <p className={styles.sectionSubtitle}>{OWNER_TITLE}</p>
          </div>
          <div className={styles.expertGrid}>
            <div className={styles.expertQuote}>
              <blockquote>
                &ldquo;أؤمن إن العميل يستحق يعرف بالضبط إيش اللي يتركب على سيارته. عشان كذا أعرض الداتاشيت
                لكل فيلم وأثبت النتيجة بالكاميرا الحرارية. الثقة تُبنى بالشفافية.&rdquo;
              </blockquote>
            </div>
            <div className={styles.expertStats}>
              {[
                { value: '+6', label: 'سنوات خبرة' },
                { value: '+780', label: 'سيارة تم تظليلها' },
                { value: '+50', label: 'مبنى تم عزله' },
                { value: '4.9★', label: 'تقييم العملاء' },
              ].map((s, i) => (
                <div key={i} className={styles.expertStat}>
                  <span className={styles.expertStatValue}>{s.value}</span>
                  <span className={styles.expertStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>المحطات</span>
            <h2 className={styles.sectionTitle}>رحلة عزل كور</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>قيمنا</span>
            <h2 className={styles.sectionTitle}>ليش العملاء يرجعون لنا</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>الاعتمادات</span>
            <h2 className={styles.sectionTitle}>شهادات وتراخيص رسمية</h2>
          </div>
          <div className={styles.certsGrid}>
            {certifications.map((c, i) => (
              <div key={i} className={styles.certCard}>
                <span className={styles.certIcon}>{c.icon}</span>
                <h3 className={styles.certName}>{c.name}</h3>
                <p className={styles.certType}>{c.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>جاهز نحمي سيارتك أو مبناك؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية — نساعدك تختار الحل الأمثل.</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
