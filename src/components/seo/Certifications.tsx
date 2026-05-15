import styles from './Certifications.module.css';
import { getBadgesBySector } from '@/data/trust-anchors';

interface CertificationsProps {
  isAr?: boolean;
  /** The sector to get badges for (e.g., 'تظليل سيارات', 'عزل مباني', 'الشركة') */
  sector: string;
}

/**
 * Verification Badges Component
 * 
 * Displays visual badges proving compliance, licensing, or authorized dealership.
 * Pulled dynamically from the central trust-anchors database.
 */
export default function Certifications({ sector, isAr = true }: CertificationsProps) {
  const badges = getBadgesBySector(sector);

  if (badges.length === 0) return null;

  return (
    <div className={styles.badgesWrapper} aria-label={isAr ? "شارات الاعتماد والتوثيق" : "Certifications and accreditations"}>
      {badges.map((b, idx) => (
        <a 
          key={idx} 
          href={b.url} 
          target="_blank" 
          rel="noopener noreferrer nofollow"
          className={styles.badge}
          title={isAr ? `جهة الاعتماد: ${b.grantedBy}` : `Accredited by: ${b.grantedByEn || b.grantedBy}`}
        >
          <span className={styles.badgeIcon}>{b.icon}</span>
          <div className={styles.badgeInfo}>
            <span className={styles.badgeTitle}>{isAr ? b.badge : (b.badgeEn || b.badge)}</span>
            <span className={styles.badgeGrantor}>{isAr ? b.grantedBy : (b.grantedByEn || b.grantedBy)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
