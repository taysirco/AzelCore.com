import Link from 'next/link';
import { SITE_NAME, WHATSAPP_LINK, PHONE, WORKING_HOURS, NAV_LINKS, OWNER_NAME, CRN, VAT_ID, ADDRESS } from '@/lib/constants';
import styles from './Footer.module.css';

const serviceLinks = [
  { href: '/car-insulation-jeddah', label: 'تظليل سيارات جدة' },
  { href: '/building-glass-insulation', label: 'عزل زجاج مباني' },
  { href: '/johnson-authorized-dealer', label: 'عازل جونسون (وكيل معتمد)' },
  { href: '/gallery', label: 'معرض أعمالنا' },
  { href: '/blog', label: 'المدونة' },
];

const infoLinks = [
  { href: '/about', label: 'من نحن' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.col}>
          <h3 className={styles.brand}>{SITE_NAME}</h3>
          <p className={styles.desc}>
            تظليل وعزل حراري احترافي في جدة — وكيل جونسون المعتمد.
            نحمي سيارتك ومبناك من حرارة السعودية بأفضل الأفلام الأمريكية.
          </p>
          <div className={styles.socials}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="واتساب">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href={`tel:${PHONE}`} className={styles.socialBtn} aria-label="اتصل بنا">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>خدماتنا</h4>
          <ul className={styles.links}>
            {serviceLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>معلومات</h4>
          <ul className={styles.links}>
            {infoLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>بيانات النشاط</h4>
          <ul className={styles.businessInfo}>
            <li><span className={styles.infoLabel}>الحالة:</span> منشأة سعودية مسجلة ✅</li>
            <li><span className={styles.infoLabel}>السجل التجاري:</span> {CRN}</li>
            <li><span className={styles.infoLabel}>الرقم الضريبي:</span> {VAT_ID}</li>
            <li><span className={styles.infoLabel}>الوكالة:</span> Johnson Window Films 🇺🇸</li>
            <li><span className={styles.infoLabel}>ساعات العمل:</span> {WORKING_HOURS}</li>
            <li><span className={styles.infoLabel}>الموقع:</span> {ADDRESS}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p>© 2026 {SITE_NAME} — {OWNER_NAME}. جميع الحقوق محفوظة.</p>
          <p className={styles.badge}>وكيل جونسون المعتمد 🇺🇸</p>
        </div>
      </div>
    </footer>
  );
}
