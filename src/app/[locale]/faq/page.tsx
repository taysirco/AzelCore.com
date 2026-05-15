import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import { SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import { getFaqs } from '@/data/faqs';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'الأسئلة الشائعة — تظليل سيارات وعزل مباني في جدة' : 'Frequently Asked Questions — Car Tinting & Building Insulation in Jeddah | AzelCore',
    description: isAr ? 'إجابات شاملة عن تظليل السيارات وعزل المباني في جدة — قوانين التظليل، الأسعار، الفرق بين الأفلام، الضمان، والمزيد.' : 'Comprehensive answers about car tinting and building insulation in Jeddah — tinting laws, prices, film differences, warranty, and more.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/faq')}` },
  };
}

const getFaqGraphSchema = (isAr: boolean) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/faq#faqpage`,
      mainEntity: getFaqs(isAr).map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'الأسئلة الشائعة' : 'FAQ', item: `${SITE_URL}/faq` },
      ],
    },
    // ── SpeakableSpecification — FAQ Voice Search Monopoly ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-faq-1', '#voice-answer-faq-2', '#voice-answer-faq-3'],
    },
  ],
});

const getCategories = (isAr: boolean) => [
  { key: 'all', label: isAr ? 'الكل' : 'All', icon: '📋' },
  { key: 'legal', label: isAr ? 'القوانين' : 'Legal', icon: '⚖️' },
  { key: 'price', label: isAr ? 'الأسعار' : 'Pricing', icon: '💰' },
  { key: 'comparison', label: isAr ? 'المقارنات' : 'Comparisons', icon: '⚡' },
  { key: 'safety', label: isAr ? 'السلامة' : 'Safety', icon: '🛡️' },
  { key: 'process', label: isAr ? 'آلية العمل' : 'Process', icon: '🔧' },
  { key: 'warranty', label: isAr ? 'الضمان' : 'Warranty', icon: '📜' },
] as const;

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqGraphSchema(isAr)) }} />

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</span>
          </nav>
          <h1 className={styles.pageTitle}>{isAr ? 'الأسئلة ' : 'Frequently Asked '}<span className={styles.highlight}>{isAr ? 'الشائعة' : 'Questions'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'كل ما تحتاج تعرفه عن التظليل والعزل الحراري — إجابات واضحة ومباشرة.' : 'Everything you need to know about tinting and thermal insulation — clear and direct answers.'}</p>
        </div>
      </section>

      {/* Category Pills */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {getCategories(isAr).map(c => (
              <span key={c.key} className={`${styles.filterPill} ${c.key === 'all' ? styles.filterActive : ''}`}>
                {c.icon} {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            {getFaqs(isAr).map((faq) => (
              <details key={faq.id} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.chevron}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                  <div className={styles.faqMeta}>
                    <span className={styles.faqTag}>
                      {faq.service === 'car-tinting' ? (isAr ? '🚗 سيارات' : '🚗 Cars') :
                       faq.service === 'building-glass' ? (isAr ? '🏢 مباني' : '🏢 Buildings') :
                       faq.service === 'thermal' ? (isAr ? '🌡️ حراري' : '🌡️ Thermal') : (isAr ? '📋 عام' : '📋 General')}
                    </span>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions — data-nosnippet (vector density) */}
      <section className={styles.ctaSection} data-nosnippet>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{isAr ? 'ما لقيت إجابة سؤالك؟' : 'Didn\'t find your answer?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'تواصل معنا مباشرة — نرد في أقل من 5 دقائق.' : 'Contact us directly — we reply in under 5 minutes.'}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            💬 {isAr ? 'اسأل عبر واتساب' : 'Ask via WhatsApp'}
          </a>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — FAQ TTS Targets ═══ */}
      <div id="voice-answer-faq-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'نعم التظليل مسموح في السعودية بشروط. الزجاج الأمامي يجب يكون 70% شفافية والخلفي مفتوح. عزل كور ينصحك بالدرجة المناسبة.' : 'Yes, tinting is allowed in Saudi Arabia under certain conditions. The front windshield must be 70% clear. AzelCore advises you on the right grade.'}
      </div>
      <div id="voice-answer-faq-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'الفرق بين نانو سيراميك وكربوني إن النانو سيراميك يحجب 97% حرارة والكربوني 70% بس. النانو سيراميك أغلى لكن أفضل بكثير في حرارة جدة.' : 'The difference between nano-ceramic and carbon is that nano-ceramic blocks 97% heat while carbon blocks only 70%. Nano-ceramic is more expensive but far better for Jeddah\'s heat.'}
      </div>
      <div id="voice-answer-faq-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'تظليل نانو سيراميك ما يحجب إشارة الجوال أبداً. لأنه خالي من المعادن. الجوال وGPS وأبل باي كلها تشتغل عادي.' : 'Nano-ceramic tint never blocks mobile signals because it is metal-free. Mobile, GPS, and Apple Pay will all work normally.'}
      </div>
    </>
  );
}
