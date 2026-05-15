import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { SITE_URL, WHATSAPP_LINK, PHONE, OWNER_NAME, OWNER_TITLE, GEO, WORKING_HOURS, CRN, VAT_ID, ADDRESS_STRUCTURED } from '@/lib/constants';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'من نحن — خبراء التظليل والعزل في جدة' : 'About Us — Tinting & Insulation Experts in Jeddah | AzelCore',
    description: isAr ? 'تعرف على فريق عزل كور المتخصص في تظليل السيارات والعزل الحراري في جدة. وكيل جونسون و 3M المعتمد — فنيون معتمدون + ضمان حقيقي.' : 'Meet the AzelCore team specializing in car tinting and thermal insulation in Jeddah. Authorized Johnson & 3M dealer — certified technicians + real warranty.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/about')}` },
  };
}

const getAboutSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: isAr ? 'من نحن — عزل كور' : 'About Us — AzelCore',
      url: `${SITE_URL}/about`,
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: isAr ? 'عزل كور' : 'AzelCore',
        legalName: isAr ? `مؤسسة ${OWNER_NAME} للتجارة` : `${OWNER_NAME} Trading Est.`,
        founder: {
          '@type': 'Person',
          name: OWNER_NAME,
          jobTitle: OWNER_TITLE,
          knowsAbout: [
            isAr ? 'تظليل سيارات نانو سيراميك' : 'Nano-ceramic car tinting',
            isAr ? 'عزل زجاج مباني' : 'Building glass insulation',
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
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'من نحن' : 'About Us', item: `${SITE_URL}/about` },
      ],
    },
  ],
});

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutSchema(isAr)) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/about-workshop-interior.webp" alt={isAr ? "ورشة عزل كور — تظليل سيارات جدة" : "AzelCore Workshop — Car Tinting Jeddah"} fill priority sizes="100vw" quality={75} style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'من نحن' : 'About Us'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'نحمي ' : 'We Protect '}<span className={styles.gradient}>{isAr ? 'ممتلكاتك' : 'Your Assets'}</span> {isAr ? 'من حرارة جدة' : 'From Jeddah Heat'}</h1>
          <p className={styles.heroSubtitle}>
            {isAr ? 'فريق متخصص بخبرة +6 سنوات في العزل الحراري والتظليل — نستخدم أفضل الأفلام الأمريكية ونضمن لك نتيجة تشوفها بعينك وتحسها بالفرق.' : 'A specialized team with +6 years of experience in thermal insulation and tinting — we use the best American films and guarantee a result you can see and feel.'}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className={styles.overline}>{isAr ? 'قصتنا' : 'Our Story'}</span>
              <h2 className={styles.sectionTitle}>{isAr ? 'من ورشة صغيرة إلى وكيل معتمد' : 'From a Small Workshop to an Authorized Dealer'}</h2>
              <p className={styles.storyPara}>
                {isAr ? 'بدأت رحلتنا في 2018 بشغف بسيط — نبي نقدم تظليل سيارات بجودة حقيقية في جدة. كنا نشوف السوق مليان بأفلام رخيصة تتقشر بعد أشهر ومحلات تبيع "نانو سيراميك" وهو في الحقيقة فيلم مصبوغ عادي.' : 'Our journey started in 2018 with a simple passion — we wanted to offer real quality car tinting in Jeddah. We saw the market flooded with cheap films that peel after months and shops selling "nano-ceramic" which was actually just a regular dyed film.'}
              </p>
              <p className={styles.storyPara}>
                {isAr ? 'قررنا نكون مختلفين — نستورد من المصنع مباشرة، نعرض الداتاشيت الرسمي لكل فيلم، ونثبت الفرق بالكاميرا الحرارية قدام العميل. هذا النهج خلانا نحصل على وكالة جونسون و 3M الرسمية كوكيل معتمد في جدة.' : 'We decided to be different — import directly from the factory, display the official datasheet for each film, and prove the difference with a thermal camera in front of the customer. This approach earned us the official Johnson and 3M dealerships in Jeddah.'}
              </p>
              <p className={styles.storyPara}>
                {isAr ? 'اليوم ' : 'Today '}<strong>{isAr ? 'عزل كور' : 'AzelCore'}</strong>{isAr ? ' يخدم أكثر من 780 سيارة و 50 مبنى — بضمان حقيقي مكتوب وفاتورة ضريبية رسمية.' : ' serves over 780 cars and 50 buildings — with a real written warranty and official tax invoice.'}
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image src="/images/why-choose-us-workshop.webp" alt={isAr ? "فريق عزل كور في الورشة" : "AzelCore Team at the Workshop"} width={500} height={400} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>{isAr ? 'المؤسس' : 'Founder'}</span>
            <h2 className={styles.sectionTitle}>👨‍🔧 {isAr ? OWNER_NAME : 'Ahmed Salem'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? OWNER_TITLE : 'Technical Director'}</p>
          </div>
          <div className={styles.expertGrid}>
            <div className={styles.expertQuote}>
              <blockquote>
                {isAr ? '“أؤمن إن العميل يستحق يعرف بالضبط إيش اللي يتركب على سيارته. عشان كذا أعرض الداتاشيت لكل فيلم وأثبت النتيجة بالكاميرا الحرارية. الثقة تُبنى بالشفافية.”' : '“I believe the customer deserves to know exactly what is being installed on their car. That’s why I display the datasheet for every film and prove the result with a thermal camera. Trust is built on transparency.”'}
              </blockquote>
            </div>
            <div className={styles.expertStats}>
              {[
                { value: '+6', label: isAr ? 'سنوات خبرة' : 'Years Experience' },
                { value: '+780', label: isAr ? 'سيارة تم تظليلها' : 'Cars Tinted' },
                { value: '+50', label: isAr ? 'مبنى تم عزله' : 'Buildings Insulated' },
                { value: '4.9★', label: isAr ? 'تقييم العملاء' : 'Client Rating' },
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
            <span className={styles.overline}>{isAr ? 'المحطات' : 'Milestones'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'رحلة عزل كور' : 'The AzelCore Journey'}</h2>
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
            <span className={styles.overline}>{isAr ? 'قيمنا' : 'Our Values'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'ليش العملاء يرجعون لنا' : 'Why Clients Come Back'}</h2>
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
            <span className={styles.overline}>{isAr ? 'الاعتمادات' : 'Certifications'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'شهادات وتراخيص رسمية' : 'Official Certifications & Licenses'}</h2>
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
          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز نحمي سيارتك أو مبناك؟' : 'Ready to Protect Your Car or Building?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية — نساعدك تختار الحل الأمثل.' : 'Free Consultation — We help you choose the best solution.'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
