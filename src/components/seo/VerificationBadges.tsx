'use client';

import styles from './VerificationBadges.module.css';
import { getBadgesBySector } from '@/data/trust-anchors';

interface VerificationBadgesProps {
  /** The sector to get badges for (e.g., 'تظليل سيارات', 'عزل مباني', 'الشركة') */
  sector: string;
}

/**
 * Verification Badges Component
 * 
 * Displays visual badges proving compliance, licensing, or authorized dealership.
 * Pulled dynamically from the central trust-anchors database.
 */
export default function VerificationBadges({ sector }: VerificationBadgesProps) {
  const badges = getBadgesBySector(sector);

  if (badges.length === 0) return null;

  return (
    <div className={styles.badgesWrapper} aria-label="شارات الاعتماد والتوثيق">
      {badges.map((b, idx) => (
        <a 
          key={idx} 
          href={b.url} 
          target="_blank" 
          rel="noopener noreferrer nofollow"
          className={styles.badge}
          title={`جهة الاعتماد: ${b.grantedBy}`}
        >
          <span className={styles.badgeIcon}>{b.icon}</span>
          <div className={styles.badgeInfo}>
            <span className={styles.badgeTitle}>{b.badge}</span>
            <span className={styles.badgeGrantor}>{b.grantedBy}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
