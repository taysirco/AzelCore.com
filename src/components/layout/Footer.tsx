import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, SITE_NAME_EN, getWhatsAppLink, PHONE, WORKING_HOURS, WORKING_HOURS_EN, OWNER_NAME, OWNER_NAME_EN, CRN, VAT_ID, ADDRESS, ADDRESS_EN, GEO } from '@/lib/constants';
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
    { href: localePath(locale, '/paint-protection-film-jeddah'), label: isAr ? 'حماية طلاء (PPF)' : 'Paint Protection Film' },
    { href: localePath(locale, '/johnson-authorized-dealer'), label: isAr ? 'عازل جونسون (وكيل معتمد)' : 'Johnson Films (Authorized Dealer)' },
    { href: localePath(locale, '/3m-authorized-dealer'), label: isAr ? 'عازل 3M (وكيل معتمد)' : '3M Films (Authorized Dealer)' },
  ];
}

function getResourceLinks(locale: Locale) {
  const isAr = locale === 'ar';
  return [
    { href: localePath(locale, '/calculator'), label: isAr ? 'حاسبة التكلفة' : 'Cost Calculator' },
    { href: localePath(locale, '/gallery'), label: isAr ? 'معرض أعمالنا' : 'Our Work Gallery' },
    { href: localePath(locale, '/blog'), label: isAr ? 'المدونة' : 'Blog' },
    { href: localePath(locale, '/faq'), label: isAr ? 'الأسئلة الشائعة' : 'FAQ' },
    // /research is locale-exempt (served at the app root, no /en variant) — plain href
    { href: '/research/ksa-thermal-report-2026', label: isAr ? 'تقرير البحث الحراري 2026' : 'Thermal Research Report 2026' },
  ];
}

function getInfoLinks(locale: Locale) {
  const isAr = locale === 'ar';
  return [
    { href: localePath(locale, '/about'), label: isAr ? 'من نحن' : 'About Us' },
    { href: localePath(locale, '/contact'), label: isAr ? 'تواصل معنا' : 'Contact Us' },
  ];
}

export default function Footer({ locale = 'ar' }: FooterProps) {
  const dict = getDictionary(locale);
  const isAr = locale === 'ar';
  const siteName = isAr ? SITE_NAME : SITE_NAME_EN;
  const ownerName = isAr ? OWNER_NAME : OWNER_NAME_EN;
  const whatsappLink = getWhatsAppLink(locale);
  const serviceLinks = getServiceLinks(locale);
  const resourceLinks = getResourceLinks(locale);
  const infoLinks = getInfoLinks(locale);
  const mapUrl = `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      {/* ═══ Main Footer Grid ═══ */}
      <div className={styles.inner}>
        {/* ─── Brand Column ─── */}
        <div className={`${styles.col} ${styles.brandCol}`}>
          <Link href={localePath(locale, '/')} className={styles.brandLogo}>
            <Image
              src="/images/azelcore-logo.webp"
              alt={siteName}
              width={150}
              height={94}
              quality={50}
              sizes="150px"
            />
          </Link>
          <p className={styles.desc}>
            {isAr
              ? 'تظليل وعزل حراري احترافي في جدة — وكيل جونسون و 3M المعتمد. نحمي سيارتك ومبناك من حرارة السعودية بأفضل الأفلام الأمريكية.'
              : 'Professional thermal insulation and window tinting in Jeddah — Authorized Johnson & 3M Dealer. We protect your car and building from Saudi heat with the best American films.'
            }
          </p>
          {/* Social Links */}
          <div className={styles.socials}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href={`tel:${PHONE}`} className={styles.socialBtn} aria-label={dict.common.callNow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
            <a href="https://www.instagram.com/azelcore" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Google Maps">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
            </a>
          </div>
        </div>

        {/* ─── Services Column ─── */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{dict.footer.services}</h4>
          <ul className={styles.links}>
            {serviceLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ─── Resources Column ─── */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{isAr ? 'أدوات ومصادر' : 'Tools & Resources'}</h4>
          <ul className={styles.links}>
            {resourceLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
          <h4 className={`${styles.colTitle} ${styles.colTitleSecond}`}>{isAr ? 'معلومات' : 'Information'}</h4>
          <ul className={styles.links}>
            {infoLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ─── Business Info Column ─── */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{isAr ? 'بيانات النشاط' : 'Business Information'}</h4>
          <ul className={styles.businessInfo}>
            <li>
              <span className={styles.infoIcon}>✅</span>
              <div>
                <span className={styles.infoLabel}>{isAr ? 'الحالة' : 'Status'}</span>
                <span className={styles.infoValue}>{isAr ? 'منشأة سعودية مسجلة' : 'Registered Saudi Business'}</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>📋</span>
              <div>
                <span className={styles.infoLabel}>{isAr ? 'السجل التجاري' : 'CR'}</span>
                <span className={styles.infoValue}>{CRN}</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>🧾</span>
              <div>
                <span className={styles.infoLabel}>{isAr ? 'الرقم الضريبي' : 'VAT ID'}</span>
                <span className={styles.infoValue}>{VAT_ID}</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>🇺🇸</span>
              <div>
                <span className={styles.infoLabel}>{isAr ? 'الوكالات' : 'Brands'}</span>
                <span className={styles.infoValue}>Johnson + 3M</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <span className={styles.infoLabel}>{isAr ? 'ساعات العمل' : 'Hours'}</span>
                <span className={styles.infoValue}>{isAr ? WORKING_HOURS : WORKING_HOURS_EN}</span>
              </div>
            </li>
            <li>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.locationLink}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <span className={styles.infoLabel}>{isAr ? 'الموقع' : 'Location'}</span>
                  <span className={styles.infoValue}>{isAr ? ADDRESS : ADDRESS_EN}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ═══ Bottom Bar ═══ */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {siteName} — {ownerName}. {dict.footer.allRightsReserved}.
          </p>
          <p className={styles.badge}>
            {isAr ? 'وكيل جونسون و 3M المعتمد' : 'Authorized Johnson & 3M Dealer'} 🇺🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
