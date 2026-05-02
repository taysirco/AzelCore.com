import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
import { blogTopics, type BlogTopic } from '@/data/blog-topics';
import { articles, articleSlugs } from '@/data/blog-content';
import ExpertReviewBox from '@/components/seo/ExpertReviewBox';
import GovernmentTrustBar from '@/components/seo/GovernmentTrustBar';
import styles from './page.module.css';

function getTopicBySlug(slug: string): BlogTopic | undefined {
  return blogTopics.find(t => t.slug === slug);
}

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
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  const topic = getTopicBySlug(slug);
  const title = topic?.titleAr || slug;
  return {
    title,
    description: article.content.intro.slice(0, 155),
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
      images: [{ url: `/images/${article.ogImage}`, width: 1200, height: 630 }],
    },
  };
}

// ═══════════════════════════════════════════
// Page Component (Next.js 16 — async + await params)
// ═══════════════════════════════════════════
export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { content, serviceLinks } = article;
  const topic = getTopicBySlug(slug);
  const title = topic?.titleAr || slug;
  const date = '2026-05-01';

  const approximateWordCount = (
    content.intro + ' ' +
    content.sections.map(s => s.heading + ' ' + s.body).join(' ') + ' ' +
    (content.warning || '') + ' ' +
    content.cta
  ).split(/\s+/).length;

  const articleGraphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/blog/${slug}#article`,
        headline: title,
        author: { '@type': 'Person', name: OWNER_NAME },
        reviewedBy: {
          '@type': 'Person',
          name: OWNER_NAME,
          jobTitle: OWNER_TITLE,
          url: `${SITE_URL}/johnson-authorized-dealer`
        },
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/azelcore-logo.png` } },
        datePublished: date,
        dateModified: date,
        mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
        image: `${SITE_URL}/images/${article.ogImage}`,
        inLanguage: 'ar',
        isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
        wordCount: approximateWordCount,
        about: [
          { '@type': 'Thing', name: 'تظليل سيارات', sameAs: 'https://www.wikidata.org/wiki/Q2647429' },
          { '@type': 'Thing', name: 'عزل حراري' },
          { '@type': 'Place', name: 'جدة', sameAs: 'https://www.wikidata.org/wiki/Q5880' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: [`#article-${slug}-title`, `#article-${slug}-intro`],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleGraphSchema) }} />

      {/* ── Voice SEO Target — Article ── */}
      <div id={`article-${slug}-intro`} style={{ position: 'absolute', left: '-9999px', top: 0 }} aria-hidden="true">
        {content.intro.slice(0, 200)}
      </div>

      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="مسار التنقل">
          <Link href="/">الرئيسية</Link> / <Link href="/blog">المدونة</Link> / <span>{title}</span>
        </nav>

        <div className={styles.meta}>
          {topic && <span className={styles.category}>{topic.intent === 'legal' ? 'قانوني' : topic.intent === 'comparison' ? 'مقارنة' : topic.intent === 'how-to' ? 'دليل' : 'معلوماتي'}</span>}
          <time className={styles.date} dateTime={date}>
            {new Date(date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>

        <h1 id={`article-${slug}-title`} className={styles.title}>{title}</h1>

        <div className={styles.readTime} data-nosnippet>
          🕐 {Math.ceil(approximateWordCount / 200)} دقائق قراءة · {approximateWordCount} كلمة
        </div>

        <div style={{ margin: '2rem 0' }}>
          <GovernmentTrustBar entityKeys={['GOV.SASO', 'GOV.SBC', 'GOV.BALADI']} />
        </div>

        <div className={styles.content}>
          <p>{content.intro}</p>

          {content.sections.map((section, i) => (
            <div key={i}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}

          {content.warning && (
            <div className={styles.warningBox}>
              <p><strong>⚠️ تحذير:</strong> {content.warning}</p>
            </div>
          )}

          {/* Internal Links → Services (Link Equity Pyramid) */}
          {serviceLinks.length > 0 && (
            <div className={styles.ctaBox} style={{ textAlign: 'start' }} data-nosnippet>
              <h3>خدمات ذات صلة</h3>
              <ul>
                {serviceLinks.map((link, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <Link href={link.href} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      {link.text} ←
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.ctaBox} data-nosnippet>
            <h3>{content.cta}</h3>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          <ExpertReviewBox
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization={SITE_NAME}
            quote="المعلومات الواردة في هذا الدليل مبنية على خبرتنا الميدانية وتطبيقنا لمعايير الجودة السعودية (SASO). احرص دائماً على التعامل مع وكيل معتمد لضمان النتيجة."
            reviewDate={date}
          />
        </div>

        <Link href="/blog" className={styles.backLink}>→ العودة للمدونة</Link>
      </article>
    </>
  );
}
