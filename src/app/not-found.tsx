import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.glow} aria-hidden="true" />
      
      <div className={styles.errorCode}>404</div>
      <h1 className={styles.title}>الصفحة غير موجودة</h1>
      <p className={styles.description}>
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. 
        يمكنك العودة للصفحة الرئيسية أو التواصل معنا مباشرة.
      </p>

      <div className={styles.actions}>
        <Link href="/" className={styles.primaryBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          العودة للرئيسية
        </Link>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
          تواصل عبر واتساب
        </a>
      </div>

      <div className={styles.links}>
        <Link href="/car-insulation-jeddah" className={styles.link}>تظليل سيارات</Link>
        <Link href="/building-glass-insulation" className={styles.link}>عزل مباني</Link>
        <Link href="/gallery" className={styles.link}>معرض الأعمال</Link>
        <Link href="/blog" className={styles.link}>المدونة</Link>
        <Link href="/faq" className={styles.link}>الأسئلة الشائعة</Link>
      </div>
    </div>
  );
}
