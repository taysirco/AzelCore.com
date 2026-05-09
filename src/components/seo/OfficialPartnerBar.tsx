import styles from './OfficialPartnerBar.module.css';
import { GOVERNMENT_ENTITIES } from '@/data/trust-anchors';

interface OfficialPartnerBarProps {
  /** Array of entity keys to display. If empty, displays all. */
  entityKeys?: string[];
  /** Title for the bar. Default: 'مرجعياتنا والمعايير المعتمدة' */
  title?: string;
}

/**
 * Government Trust Bar — YMYL Trust Anchor
 * 
 * Displays official government bodies and standards organizations to boost E-E-A-T.
 * Provides authoritative outbound links which Google rewards for YMYL queries.
 */
export default function OfficialPartnerBar({ 
  entityKeys,
  title = 'مرجعياتنا والمعايير المعتمدة'
}: OfficialPartnerBarProps) {
  
  const entitiesToDisplay = entityKeys 
    ? GOVERNMENT_ENTITIES.filter(gov => entityKeys.includes(gov.key))
    : GOVERNMENT_ENTITIES;

  if (entitiesToDisplay.length === 0) return null;

  return (
    <div className={styles.trustBar} aria-label="المرجعيات الحكومية والمعايير">
      <div className={styles.trustContainer}>
        <p className={styles.trustTitle}>{title}</p>
        <div className={styles.entitiesList}>
          {entitiesToDisplay.map((entity) => (
            <a 
              key={entity.key}
              href={entity.url}
              target="_blank"
              rel="noopener noreferrer nofollow" // Important: YMYL outlink but we don't pass pagerank, just signal trust
              className={styles.entityLink}
              title={entity.role}
            >
              <div className={styles.entityIcon}>🏛️</div>
              <div className={styles.entityInfo}>
                <span className={styles.entityAbbr}>{entity.abbreviation}</span>
                <span className={styles.entityName}>{entity.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
