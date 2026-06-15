import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, OWNER_NAME, OWNER_NAME_EN, OWNER_TITLE } from '@/lib/constants';
import { blogTopics, type BlogTopic } from '@/data/blog-topics';
import { articles, articleSlugs } from '@/data/blog-content';
import { getArticleDate } from '@/data/blog-dates';
import { Locale, localePath } from '@/lib/i18n';
import { getAlternates } from '@/lib/seo';
import AuthorProfile from '@/components/seo/AuthorProfile';
import OfficialPartnerBar from '@/components/seo/OfficialPartnerBar';
import styles from './page.module.css';

function getTopicBySlug(slug: string): BlogTopic | undefined {
  return blogTopics.find(t => t.slug === slug);
}

// ═══════════════════════════════════════════
// Smart Text Formatter — Converts raw string blobs into readable paragraphs
// ═══════════════════════════════════════════
const SmartTextFormatter = ({ text }: { text: string }) => {
  if (!text) return null;

  // If text already has line breaks, just split by them
  if (text.includes('\n')) {
    return (
      <>
        {text.split('\n').filter(p => p.trim() !== '').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </>
    );
  }

  // Otherwise, smartly break long walls of text by periods.
  const sentences = text.split(/(?<=\.)\s+/);
  if (sentences.length <= 2) {
    return <p>{text}</p>;
  }

  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const chunk = sentences.slice(i, i + 2).join(' ');
    if (chunk.trim()) paragraphs.push(chunk);
  }

  return (
    <>
      {paragraphs.map((p, i) => {
        // Highlight bold-like structures "الزجاج الأمامي: ..."
        const parts = p.split(/(:|—|-)/);
        if (parts.length > 1 && parts[0].length < 50 && !parts[0].includes('.')) {
          return (
            <p key={i}>
              <strong>{parts[0]}</strong>{parts.slice(1).join('')}
            </p>
          );
        }
        return <p key={i}>{p}</p>;
      })}
    </>
  );
};

// ═══════════════════════════════════════════
// Static Params (SSG — all article slugs)
// ═══════════════════════════════════════════
export const dynamicParams = false; // 404 for unknown slugs — all pages are pre-built

export function generateStaticParams() {
  return articleSlugs.map(slug => ({ slug }));
}

// ═══════════════════════════════════════════
// Metadata (Next.js 16 — params is Promise)
// ═══════════════════════════════════════════
export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';
  const article = articles[slug];
  if (!article) return {};
  const topic = getTopicBySlug(slug);
  
  // Try to grab English version if it exists, otherwise fallback to Arabic
  const content = (!isAr && (article as any).contentEn) ? (article as any).contentEn : article.content;
  const rawTitle = isAr ? topic?.titleAr : (topic as any)?.titleEn || topic?.titleAr;
  const title = rawTitle || slug;
  
  return {
    title: title,
    description: content.intro.slice(0, 155),
    alternates: getAlternates(locale as Locale, `/blog/${slug}`),
    openGraph: {
      title,
      url: `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog/${slug}`,
      type: 'article',
      images: [{ url: `/images/${article.ogImage}`, width: 1200, height: 630 }],
    },
  };
}

// ═══════════════════════════════════════════
// Page Component (Next.js 16 — async + await params)
// ═══════════════════════════════════════════
export default async function BlogArticlePage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';
  const article = articles[slug];
  if (!article) notFound();

  const content = article.content;
  const serviceLinks = article.serviceLinks;
  
  const topic = getTopicBySlug(slug);
  const rawTitle = isAr ? topic?.titleAr : (topic as any)?.titleEn || topic?.titleAr;
  const title = rawTitle || slug;
  const { published: pubDate, modified: modDate } = getArticleDate(slug);

  const introStr = !isAr && content.introEn ? content.introEn : content.intro;
  const ctaStr = !isAr && content.ctaEn ? content.ctaEn : content.cta;
  const warningStr = !isAr && content.warningEn ? content.warningEn : content.warning;
  
  const approximateWordCount = (
    introStr + ' ' +
    content.sections.map((s: any) => {
      const h = !isAr && s.headingEn ? s.headingEn : s.heading;
      const b = !isAr && s.bodyEn ? s.bodyEn : s.body;
      return h + ' ' + b;
    }).join(' ') + ' ' +
    (warningStr || '') + ' ' +
    ctaStr
  ).split(/\s+/).length;

  const articleGraphSchema: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog/${slug}#article`,
        headline: title,
        author: { '@type': 'Person', name: isAr ? OWNER_NAME : OWNER_NAME_EN },
        reviewedBy: {
          '@type': 'Person',
          name: isAr ? OWNER_NAME : OWNER_NAME_EN,
          jobTitle: isAr ? OWNER_TITLE : 'Technical Consultant',
          url: `${SITE_URL}${locale === 'ar' ? '' : '/en'}/johnson-authorized-dealer`
        },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/azelcore-logo.webp` } },
        datePublished: pubDate,
        dateModified: modDate,
        mainEntityOfPage: `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog/${slug}`,
        image: `${SITE_URL}/images/${article.ogImage}`,
        inLanguage: locale,
        isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        wordCount: approximateWordCount,
        about: [
          { '@type': 'Thing', name: isAr ? 'تظليل سيارات' : 'Car Tinting', sameAs: 'https://www.wikidata.org/wiki/Q2647429' },
          { '@type': 'Thing', name: isAr ? 'عزل حراري' : 'Thermal Insulation' },
          { '@type': 'Place', name: isAr ? 'جدة' : 'Jeddah', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: [`#article-${slug}-title`, `#article-${slug}-intro`],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isAr ? 'المدونة' : 'Blog', item: `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog/${slug}` },
        ],
      },
    ],
  };
  
  if (content.faqs && content.faqs.length > 0) {
    articleGraphSchema['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${SITE_URL}${locale === 'ar' ? '' : '/en'}/blog/${slug}#faq`,
      mainEntity: content.faqs.map((faq: any) => {
        const qStr = !isAr && faq.qEn ? faq.qEn : faq.q;
        const aStr = !isAr && faq.aEn ? faq.aEn : faq.a;
        return {
          '@type': 'Question',
          name: qStr,
          acceptedAnswer: {
            '@type': 'Answer',
            text: aStr,
          },
        };
      }),
    });
  }

  // Get topic translated strings
  let categoryStr = '';
  if (topic) {
    if (topic.intent === 'legal') categoryStr = isAr ? 'قانوني' : 'Legal';
    else if (topic.intent === 'comparison') categoryStr = isAr ? 'مقارنة' : 'Comparison';
    else if (topic.intent === 'how-to') categoryStr = isAr ? 'دليل' : 'Guide';
    else categoryStr = isAr ? 'معلوماتي' : 'Information';
  }

  // ── Citations (machine-readable) from authoritative sources ──
  if (content.sources && content.sources.length > 0) {
    articleGraphSchema['@graph'][0].citation = content.sources.map((s: { label: string; labelEn?: string; url: string }) => ({
      '@type': 'CreativeWork',
      name: !isAr && s.labelEn ? s.labelEn : s.label,
      url: s.url,
    }));
  }

  // ── Related articles (same intent first, then fill) — bidirectional internal linking ──
  const relatedSlugs = (() => {
    const others = articleSlugs.filter((s) => s !== slug);
    if (topic) {
      const sameIntent = others.filter((s) => getTopicBySlug(s)?.intent === topic.intent);
      const rest = others.filter((s) => !sameIntent.includes(s));
      return [...sameIntent, ...rest].slice(0, 3);
    }
    return others.slice(0, 3);
  })();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleGraphSchema) }} />

      {/* ── Voice Structure — Article ── */}
      <div id={`article-${slug}-intro`} className="sr-only" aria-hidden="true">
        {introStr.slice(0, 200)}
      </div>

      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
          <Link href={localePath(locale as Locale, '/')}>{isAr ? 'الرئيسية' : 'Home'}</Link> / <Link href={localePath(locale as Locale, '/blog')}>{isAr ? 'المدونة' : 'Blog'}</Link> / <span>{title}</span>
        </nav>

        <div className={styles.meta}>
          {topic && <span className={styles.category}>{categoryStr}</span>}
          <time className={styles.date} dateTime={pubDate}>
            {new Date(pubDate).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          {modDate !== pubDate && (
            <time className={styles.date} dateTime={modDate}>
              {isAr ? 'آخر تحديث: ' : 'Updated: '}{new Date(modDate).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
        </div>

        <h1 id={`article-${slug}-title`} className={styles.title}>{title}</h1>

        <div className={styles.readTime} data-nosnippet>
          🕐 {Math.ceil(approximateWordCount / 200)} {isAr ? 'دقائق قراءة' : 'min read'} · {approximateWordCount} {isAr ? 'كلمة' : 'words'}
        </div>

        <div style={{ margin: '2rem 0' }}>
          <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.SBC', 'GOV.BALADI']} isAr={isAr} />
        </div>

        <div className={styles.content}>
          {content.quickAnswer && (
            <div className={styles.quickAnswerBox}>
              <div className={styles.quickAnswerBadge}>{isAr ? 'الإجابة السريعة (TL;DR)' : 'Quick Answer (TL;DR)'}</div>
              <p><strong>{!isAr && content.quickAnswerEn ? content.quickAnswerEn : content.quickAnswer}</strong></p>
            </div>
          )}

          <p>{introStr}</p>

          {/* ═══ Table of Contents (Outline) ═══ */}
          {topic?.outline && topic.outline.length > 0 && (
            <div className={styles.tocBox} data-nosnippet>
              <h3>{isAr ? 'جدول المحتويات:' : 'Table of Contents:'}</h3>
              <ul>
                {(!isAr && topic.outlineEn ? topic.outlineEn : topic.outline).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {content.table && (
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    {(!isAr && content.table.headersEn ? content.table.headersEn : content.table.headers).map((h: string, i: number) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(!isAr && content.table.rowsEn ? content.table.rowsEn : content.table.rows).map((row: string[], i: number) => (
                    <tr key={i}>
                      {row.map((cell: string, j: number) => (
                        <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {content.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2>{!isAr && section.headingEn ? section.headingEn : section.heading}</h2>
              <SmartTextFormatter text={!isAr && section.bodyEn ? section.bodyEn : section.body} />
            </div>
          ))}

          {content.faqs && content.faqs.length > 0 && (
            <div className={styles.faqBox}>
              <h2>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
              {content.faqs.map((faq: any, i: number) => (
                <details key={i} className={styles.faqItem}>
                  <summary>{!isAr && faq.qEn ? faq.qEn : faq.q}</summary>
                  <p>{!isAr && faq.aEn ? faq.aEn : faq.a}</p>
                </details>
              ))}
            </div>
          )}

          {content.warning && (
            <div className={styles.warningBox}>
              <p><strong>⚠️ {isAr ? 'تحذير:' : 'Warning:'}</strong> {warningStr}</p>
            </div>
          )}

          {/* Authoritative Sources / References (YMYL E-E-A-T + AI citation) */}
          {content.sources && content.sources.length > 0 && (
            <div className={styles.ctaBox} style={{ textAlign: 'start' }}>
              <h3>{isAr ? 'المصادر والمراجع' : 'Sources & References'}</h3>
              <ul>
                {content.sources.map((s: { label: string; labelEn?: string; url: string }, i: number) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {!isAr && s.labelEn ? s.labelEn : s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Internal Links → Services (Link Equity Pyramid) */}
          {serviceLinks.length > 0 && (
            <div className={styles.ctaBox} style={{ textAlign: 'start' }} data-nosnippet>
              <h3>{isAr ? 'خدمات ذات صلة' : 'Related Services'}</h3>
              <ul>
                {serviceLinks.map((link: any, i: number) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <Link href={isAr ? link.href : `/en${link.href}`} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      {!isAr && link.textEn ? link.textEn : link.text} ←
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.ctaBox} data-nosnippet>
            <h3>{ctaStr}</h3>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              {isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
            </a>
          </div>
        </div>

        <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          {content.expertReview ? (
            <AuthorProfile
              isAr={isAr}
              expertName={!isAr && content.expertReview.authorEn ? content.expertReview.authorEn : content.expertReview.author}
              expertTitle={!isAr && content.expertReview.roleEn ? content.expertReview.roleEn : content.expertReview.role}
              organization={SITE_NAME}
              quote={!isAr && content.expertReview.textEn ? content.expertReview.textEn : content.expertReview.text}
              reviewDate={modDate}
            />
          ) : (
            <AuthorProfile
              isAr={isAr}
              expertName={isAr ? OWNER_NAME : OWNER_NAME_EN}
              expertTitle={isAr ? OWNER_TITLE : 'Technical Consultant'}
              organization={SITE_NAME}
              quote={isAr 
                ? "المعلومات الواردة في هذا الدليل مبنية على خبرتنا الميدانية وتطبيقنا لمعايير الجودة السعودية (SASO). احرص دائماً على التعامل مع وكيل معتمد لضمان النتيجة." 
                : "The information in this guide is based on our field experience and application of Saudi quality standards (SASO). Always deal with an authorized agent to guarantee results."}
              reviewDate={modDate}
            />
          )}
        </div>

        {relatedSlugs.length > 0 && (
          <section aria-labelledby="related-heading" style={{ marginTop: '2.5rem' }}>
            <h2 id="related-heading" style={{ marginBottom: '1rem' }}>{isAr ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
            <ul style={{ display: 'grid', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {relatedSlugs.map((s) => {
                const t = getTopicBySlug(s);
                const rTitle = t ? (isAr ? t.titleAr : (t.titleEn || t.titleAr)) : s;
                return (
                  <li key={s}>
                    <Link href={localePath(locale as Locale, `/blog/${s}`)} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      {rTitle} ←
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <Link href={localePath(locale as Locale, '/blog')} className={styles.backLink} style={{ marginTop: '2rem', display: 'inline-block' }}>
          {isAr ? '→ العودة للمدونة' : '→ Back to Blog'}
        </Link>
      </article>
    </>
  );
}
