import Link from 'next/link';
import { SITE_NAME, SITE_NAME_EN, getWhatsAppLink, PHONE, WORKING_HOURS, WORKING_HOURS_EN, OWNER_NAME, CRN, VAT_ID, ADDRESS, ADDRESS_EN } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import { localePath, type Locale } from '@/lib/i18n';
import styles from './Footer.module.css';

interface FooterProps {
  locale?: Locale;
}

function getServiceLinks(locale: Locale) {
  const isAr = locale === 'ar';
  return [
    { href: localePath(locale, '/car-insulation-jeddah'), label: isAr ? 'تظليل سيارات جدة' : 'Car Tinting Jeddah' },
    { href: localePath(locale, '/building-glass-insulation'), label: isAr ? 'عزل زجاج مباني' : 'Building Glass Insulation' },
    { href: localePath(locale, '/johnson-authorized-dealer'), label: isAr ? 'عازل جونسون (وكيل معتمد)' : 'Johnson Films (Authorized Dealer)' },
    { href: localePath(locale, '/3m-authorized-dealer'), label: isAr ? 'عازل 3M (وكيل معتمد)' : '3M Films (Authorized Dealer)' },
    { href: localePath(locale, '/gallery'), label: isAr ? 'معرض أعمالنا' : 'Our Work Gallery' },
    { href: localePath(locale, '/blog'), label: isAr ? 'المدونة' : 'Blog' },
  ];
}

function getInfoLinks(locale: Locale) {
  const isAr = locale === 'ar';
  return [
    { href: localePath(locale, '/about'), label: isAr ? 'من نحن' : 'About Us' },
    { href: localePath(locale, '/faq'), label: isAr ? 'الأسئلة الشائعة' : 'FAQ' },
    { href: localePath(locale, '/contact'), label: isAr ? 'تواصل معنا' : 'Contact Us' },
  ];
}

export default function Footer({ locale = 'ar' }: FooterProps) {
  const dict = getDictionary(locale);
  const isAr = locale === 'ar';
  const siteName = isAr ? SITE_NAME : SITE_NAME_EN;
  const whatsappLink = getWhatsAppLink(locale);
  const serviceLinks = getServiceLinks(locale);
  const infoLinks = getInfoLinks(locale);

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.col}>
          <h3 className={styles.brand}>{siteName}</h3>
          <p className={styles.desc}>
            {isAr
              ? 'تظليل وعزل حراري احترافي في جدة — وكيل جونسون و 3M المعتمد. نحمي سيارتك ومبناك من حرارة السعودية بأفضل الأفلام الأمريكية.'
              : 'Professional car tinting & thermal insulation in Jeddah — Authorized Johnson & 3M dealer. Protecting your vehicle and building from Saudi heat with premium American films.'
            }
          </p>
          <div className={styles.socials}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label={dict.common.whatsapp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href={`tel:${PHONE}`} className={styles.socialBtn} aria-label={dict.common.callNow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{dict.footer.services}</h4>
          <ul className={styles.links}>
            {serviceLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{isAr ? 'معلومات' : 'Information'}</h4>
          <ul className={styles.links}>
            {infoLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{isAr ? 'بيانات النشاط' : 'Business Information'}</h4>
          <ul className={styles.businessInfo}>
            <li><span className={styles.infoLabel}>{isAr ? 'الحالة:' : 'Status:'}</span> {isAr ? 'منشأة سعودية مسجلة ✅' : 'Registered Saudi Business ✅'}</li>
            <li><span className={styles.infoLabel}>{isAr ? 'السجل التجاري:' : 'CR:'}</span> {CRN}</li>
            <li><span className={styles.infoLabel}>{isAr ? 'الرقم الضريبي:' : 'VAT ID:'}</span> {VAT_ID}</li>
            <li><span className={styles.infoLabel}>{isAr ? 'الوكالات:' : 'Brands:'}</span> Johnson 🇺🇸 + 3M 🇺🇸</li>
            <li><span className={styles.infoLabel}>{isAr ? 'ساعات العمل:' : 'Hours:'}</span> {isAr ? WORKING_HOURS : WORKING_HOURS_EN}</li>
            <li><span className={styles.infoLabel}>{isAr ? 'الموقع:' : 'Location:'}</span> {isAr ? ADDRESS : ADDRESS_EN}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p>© 2026 {siteName} — {OWNER_NAME}. {dict.footer.allRightsReserved}.</p>
          <p className={styles.badge}>{isAr ? 'وكيل جونسون و 3M المعتمد 🇺🇸' : 'Authorized Johnson & 3M Dealer 🇺🇸'}</p>
        </div>
      </div>
    </footer>
  );
}
