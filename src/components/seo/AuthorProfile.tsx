import styles from './AuthorProfile.module.css';

interface AuthorProfileProps {
  /** Expert name */
  expertName: string;
  /** Expert title/role */
  expertTitle: string;
  /** Expert profile URL (verified) */
  expertUrl?: string;
  /** Organization name */
  organization?: string;
  /** Expert quote */
  quote?: string;
  /** Review date (static — never use new Date()) */
  reviewDate?: string;
  /** Variant: 'full' shows quote, 'compact' is just the badge */
  variant?: 'full' | 'compact';
}

/**
 * E-E-A-T Expert Review Box — YMYL Trust Signal
 * 
 * Required at the bottom of every service page per master plan v3.0.
 * Generates ReviewedBy Schema markup when used.
 * 
 * Usage:
 * <AuthorProfile
 *   expertName="محمد الهادي"
 *   expertTitle="فني عزل وتظليل معتمد — وكيل جونسون الرسمي"
 *   organization="Johnson Window Films"
 *   quote="نستخدم فقط الأفلام الأصلية..."
 *   reviewDate="2026-04-15"
 * />
 */
export default function AuthorProfile({
  expertName,
  expertTitle,
  expertUrl,
  organization,
  quote,
  reviewDate = '2026-04-15',
  variant = 'full',
}: AuthorProfileProps) {
  // ReviewedBy Schema — injected inline
  const reviewedBySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    reviewedBy: {
      '@type': 'Person',
      name: expertName,
      jobTitle: expertTitle,
      ...(expertUrl && { url: expertUrl }),
      ...(organization && {
        memberOf: {
          '@type': 'Organization',
          name: organization,
        },
      }),
    },
    dateModified: reviewDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewedBySchema) }}
      />
      <aside className={`${styles.reviewBox} ${styles[variant]}`} aria-label="صندوق المراجعة الفنية">
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🔍</span>
            <span className={styles.badgeText}>محتوى مراجَع فنياً</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              <span className={styles.avatarIcon}>👤</span>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.meta}>
              <span className={styles.label}>✍️ إعداد:</span>
              <span className={styles.value}>فريق تحرير عزل كور</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.label}>🔍 المراجعة الفنية:</span>
              {expertUrl ? (
                <a href={expertUrl} target="_blank" rel="noopener noreferrer" className={styles.expertLink}>
                  {expertName}
                </a>
              ) : (
                <span className={styles.value}>{expertName}</span>
              )}
            </div>
            <p className={styles.title}>{expertTitle}</p>
            {organization && (
              <p className={styles.org}>{organization}</p>
            )}

            {variant === 'full' && quote && (
              <blockquote className={styles.quote}>
                &ldquo;{quote}&rdquo;
              </blockquote>
            )}

            {reviewDate && (
              <time className={styles.date} dateTime={reviewDate}>
                آخر مراجعة: {new Date(reviewDate).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
