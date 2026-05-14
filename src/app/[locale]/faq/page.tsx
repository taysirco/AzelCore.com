import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, localePath } from '@/lib/i18n';
import { SITE_URL, WHATSAPP_LINK } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'الأسئلة الشائعة — تظليل سيارات وعزل مباني في جدة' : 'الأسئلة الشائعة — تظليل سيارات وعزل مباني في جدة | AzelCore',
    description: isAr ? 'إجابات شاملة عن تظليل السيارات وعزل المباني في جدة — قوانين التظليل، الأسعار، الفرق بين الأفلام، الضمان، والمزيد.' : 'إجابات شاملة عن تظليل السيارات وعزل المباني في جدة — قوانين التظليل، الأسعار، الفرق بين الأفلام، الضمان، والمزيد.',
    alternates: { canonical: `${SITE_URL}${localePath(locale as Locale, '/faq')}` },
  };
}

const faqGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/faq#faqpage`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'الأسئلة الشائعة', item: `${SITE_URL}/faq` },
      ],
    },
    // ── SpeakableSpecification — FAQ Voice Search Monopoly ──
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#voice-answer-faq-1', '#voice-answer-faq-2', '#voice-answer-faq-3'],
    },
  ],
};

const categories = [
  { key: 'all', label: 'الكل', icon: '📋' },
  { key: 'legal', label: 'القوانين', icon: '⚖️' },
  { key: 'price', label: 'الأسعار', icon: '💰' },
  { key: 'comparison', label: 'المقارنات', icon: '⚡' },
  { key: 'safety', label: 'السلامة', icon: '🛡️' },
  { key: 'process', label: 'آلية العمل', icon: '🔧' },
  { key: 'warranty', label: 'الضمان', icon: '📜' },
] as const;

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraphSchema) }} />

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>الأسئلة الشائعة</span>
          </nav>
          <h1 className={styles.pageTitle}>الأسئلة <span className={styles.highlight}>الشائعة</span></h1>
          <p className={styles.pageSubtitle}>كل ما تحتاج تعرفه عن التظليل والعزل الحراري — إجابات واضحة ومباشرة.</p>
        </div>
      </section>

      {/* Category Pills */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map(c => (
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
            {faqs.map((faq) => (
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
                      {faq.service === 'car-tinting' ? '🚗 سيارات' :
                       faq.service === 'building-glass' ? '🏢 مباني' :
                       faq.service === 'thermal' ? '🌡️ حراري' : '📋 عام'}
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
          <h2 className={styles.ctaTitle}>ما لقيت إجابة سؤالك؟</h2>
          <p className={styles.ctaSubtitle}>تواصل معنا مباشرة — نرد في أقل من 5 دقائق.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            💬 اسأل عبر واتساب
          </a>
        </div>
      </section>
      {/* ═══ Voice Search Speakable Answers — FAQ TTS Targets ═══ */}
      <div id="voice-answer-faq-1" style={{ display: 'none' }} aria-hidden="true">
        نعم التظليل مسموح في السعودية بشروط. الزجاج الأمامي يجب يكون 70% شفافية والخلفي مفتوح. عزل كور ينصحك بالدرجة المناسبة.
      </div>
      <div id="voice-answer-faq-2" style={{ display: 'none' }} aria-hidden="true">
        الفرق بين نانو سيراميك وكربوني إن النانو سيراميك يحجب 97% حرارة والكربوني 70% بس. النانو سيراميك أغلى لكن أفضل بكثير في حرارة جدة.
      </div>
      <div id="voice-answer-faq-3" style={{ display: 'none' }} aria-hidden="true">
        تظليل نانو سيراميك ما يحجب إشارة الجوال أبداً. لأنه خالي من المعادن. الجوال وGPS وأبل باي كلها تشتغل عادي.
      </div>
    </>
  );
}
