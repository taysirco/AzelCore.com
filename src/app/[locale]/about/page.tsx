import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, CRN, VAT_ID, ADDRESS_STRUCTURED } from '@/lib/constants';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'من نحن — خبراء التظليل والعزل في جدة' : 'من نحن — خبراء التظليل والعزل في جدة | AzelCore',
    description: isAr ? 'تعرف على فريق عزل كور المتخصص في تظليل السيارات والعزل الحراري في جدة. وكيل جونسون و 3M المعتمد — فنيون معتمدون + ضمان حقيقي.' : 'تعرف على فريق عزل كور المتخصص في تظليل السيارات والعزل الحراري في جدة. وكيل جونسون و 3M المعتمد — فنيون معتمدون + ضمان حقيقي.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/about')}` },
  };
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'من نحن — عزل كور',
      url: `${SITE_URL}/about`,
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: 'عزل كور',
        legalName: `مؤسسة ${OWNER_NAME} للتجارة`,
        founder: {
          '@type': 'Person',
          name: OWNER_NAME,
          jobTitle: OWNER_TITLE,
          knowsAbout: [
            'تظليل سيارات نانو سيراميك',
            'عزل زجاج مباني',
            'Johnson Window Films',
            '3M Window Films',
            '3M Crystalline Series',
            'Nano-ceramic window film technology',
            'FLIR thermal imaging testing',
            'Saudi Building Code SBC 601',
            'HVAC energy efficiency',
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional Certification',
              name: 'IWFA Certified Window Film Installer',
              recognizedBy: { '@type': 'Organization', name: 'International Window Film Association', url: 'https://iwfa.com' },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Authorized Dealer',
              name: 'Johnson Window Films Authorized Dealer',
              recognizedBy: { '@type': 'Organization', name: 'Johnson Window Films', url: 'https://www.johnsonwindowfilms.com' },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Authorized Dealer',
              name: '3M Window Films Authorized Dealer',
              recognizedBy: { '@type': 'Organization', name: '3M Company', url: 'https://www.3m.com' },
            },
          ],
          memberOf: { '@type': 'Organization', name: 'International Window Film Association (IWFA)', url: 'https://iwfa.com' },
          knowsLanguage: ['ar', 'en'],
          worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
        },
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
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'من نحن', item: `${SITE_URL}/about` },
      ],
    },
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const milestones = [
    { year: '2018', title: isAr ? 'البداية' : 'The Beginning', desc: isAr ? 'بدأنا كورشة صغيرة متخصصة في تظليل السيارات في جدة.' : 'Started as a small workshop specializing in car tinting in Jeddah.' },
    { year: '2020', title: isAr ? 'وكيل جونسون' : 'Johnson Dealer', desc: isAr ? 'حصلنا على وكالة جونسون الرسمية كأول وكيل معتمد في جدة.' : 'Secured the official Johnson dealership as the first authorized dealer in Jeddah.' },
    { year: '2022', title: isAr ? 'عزل المباني' : 'Building Insulation', desc: isAr ? 'توسعنا لعزل واجهات المباني والفلل — أكثر من 50 مشروع.' : 'Expanded to building and villa facade insulation — completed over 50 projects.' },
    { year: '2024', title: isAr ? 'عزل كور' : 'AzelCore', desc: isAr ? 'إطلاق علامة عزل كور كمنصة متكاملة لخدمات العزل والتظليل.' : 'Launched the AzelCore brand as an integrated platform for tinting and insulation services.' },
    { year: '2025', title: isAr ? 'وكيل 3M' : '3M Dealer', desc: isAr ? 'حصلنا على وكالة 3M الرسمية — الآن وكيل معتمد لأقوى علامتين أمريكيتين: Johnson + 3M.' : 'Secured the official 3M dealership — now authorized for the top two American brands: Johnson + 3M.' },
    { year: '2026', title: isAr ? 'التحول الرقمي' : 'Digital Shift', desc: isAr ? 'إطلاق المنصة الرقمية الاحترافية لخدمة العملاء أونلاين.' : 'Launched a professional digital platform for online customer service.' },
  ];

  const values = [
    { icon: '🔍', title: isAr ? 'الشفافية' : 'Transparency', desc: isAr ? 'نعرض الأرقام الحقيقية من الداتاشيت — لا مبالغات ولا وعود كاذبة.' : 'We show real datasheet numbers — no exaggerations or false promises.' },
    { icon: '🏅', title: isAr ? 'الجودة' : 'Quality', desc: isAr ? 'نستخدم فقط الأفلام الأصلية من المصنع مباشرة — كل رول بسيريال نمبر.' : 'We only use authentic factory-direct films — every roll has a serial number.' },
    { icon: '🤝', title: isAr ? 'الأمانة' : 'Integrity', desc: isAr ? 'ننصح العميل بالمنتج المناسب لاحتياجه — حتى لو أرخص.' : 'We advise clients on what fits their needs — even if it costs less.' },
    { icon: '📈', title: isAr ? 'التطور' : 'Innovation', desc: isAr ? 'نتابع أحدث التقنيات والمنتجات العالمية ونوفرها لعملائنا.' : 'We track and provide the latest global technologies and products.' },
  ];

  const certifications = [
    { name: 'Johnson Window Films', type: isAr ? 'وكيل رسمي معتمد' : 'Official Authorized Dealer', icon: '🏆' },
    { name: '3M Window Films', type: isAr ? 'وكيل رسمي معتمد' : 'Official Authorized Dealer', icon: '🔴' },
    { name: 'IWFA Member', type: isAr ? 'عضو الاتحاد الدولي لأفلام النوافذ' : 'International Window Film Association Member', icon: '🌐' },
    { name: isAr ? 'وزارة التجارة' : 'Ministry of Commerce', type: isAr ? 'منشأة سعودية مسجلة' : 'Registered Saudi Entity', icon: '📋' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/about-workshop-interior.webp" alt="ورشة عزل كور — تظليل سيارات جدة" fill priority sizes="100vw" quality={75} style={{ objectFit: 'cover' }} />
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
                ونثبت الفرق بالكاميرا الحرارية قدام العميل. هذا النهج خلانا نحصل على وكالة جونسون و 3M الرسمية
                كوكيل معتمد في جدة.
              </p>
              <p className={styles.storyPara}>
                اليوم <strong>عزل كور</strong> يخدم أكثر من 780 سيارة و 50 مبنى — بضمان حقيقي مكتوب وفاتورة ضريبية رسمية.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image src="/images/why-choose-us-workshop.webp" alt="فريق عزل كور في الورشة" width={500} height={400} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
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
