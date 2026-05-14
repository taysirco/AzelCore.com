import { fetchGoogleReviews } from '@/lib/fetchGoogleReviews';
import { SITE_URL } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './LiveReviews.module.css';

/**
 * LiveReviews — Server Component with ISR (24h cache)
 * 
 * Fetches reviews from Google Places API (or fallback).
 * Renders visible reviews + dynamic AggregateRating JSON-LD.
 * No 'use client' = zero JS shipped to browser.
 */
export default async function LiveReviews({ locale = 'ar' }: { locale?: string }) {
  const { reviews, averageRating, totalReviews, source } = await fetchGoogleReviews();
  const dict = getDictionary(locale as Locale);
  const isAr = locale === 'ar';

  const aggregateSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#reviews`,
    name: isAr ? 'عزل كور' : 'AzelCore',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toString(),
      reviewCount: totalReviews.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 5).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.authorName },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString() },
      reviewBody: r.text,
      datePublished: '2026-04-15',
    })),
  };

  return (
    <section className={styles.reviews} aria-label={dict.liveReviews.ariaLabel}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>
            {source === 'google-api' ? dict.liveReviews.overlineGoogle : dict.liveReviews.overlineFallback}
          </span>
          <h2 className={styles.title}>{dict.liveReviews.title}</h2>
          <div className={styles.aggregate}>
            <span className={styles.rating}>{averageRating}</span>
            <div className={styles.stars}>
              {'★'.repeat(Math.round(averageRating))}{'☆'.repeat(5 - Math.round(averageRating))}
            </div>
            <span className={styles.count}>{dict.liveReviews.basedOn} {totalReviews} {dict.liveReviews.reviewUnit}</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.slice(0, 5).map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{r.authorName.charAt(0)}</div>
                <div>
                  <p className={styles.name}>{r.authorName}</p>
                  <p className={styles.time}>{r.relativeTimeDescription}</p>
                </div>
                <span className={styles.cardStars}>
                  {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                </span>
              </div>
              <p className={styles.text}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
