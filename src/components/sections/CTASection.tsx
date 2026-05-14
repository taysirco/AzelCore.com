import { getWhatsAppLink, PHONE } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './CTASection.module.css';

export default function CTASection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);
  const whatsappLink = getWhatsAppLink(locale as Locale);

  return (
    <section className={styles.section} id="cta" aria-label={dict.cta.ariaLabel} data-nosnippet>
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.container}>
        <h2 className={styles.title}>
          {dict.cta.title} <span className={styles.gradient}>{dict.cta.titleHighlight}</span>{locale === 'ar' ? '؟' : '?'}
        </h2>
        <p className={styles.subtitle}>{dict.cta.subtitle}</p>

        <div className={styles.actions}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            {dict.cta.whatsappBtn}
          </a>
          <a href={`tel:${PHONE}`} className={styles.callBtn}>
            {dict.cta.callBtn}
          </a>
        </div>

        <p className={styles.hours}>{dict.cta.hours}</p>
      </div>
    </section>
  );
}
