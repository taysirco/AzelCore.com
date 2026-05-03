import styles from './TrustSection.module.css';
import { OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
import AuthorProfile from '../seo/AuthorProfile';
import OfficialPartnerBar from '../seo/OfficialPartnerBar';

const credentials = [
  { icon: '📋', title: 'منشأة مسجلة', value: 'وزارة التجارة', desc: 'منشأة سعودية مسجلة رسمياً لدى وزارة التجارة' },
  { icon: '🧾', title: 'مسجل ضريبياً', value: 'هيئة الزكاة والضريبة', desc: 'ملتزمون بالأنظمة الضريبية في المملكة' },
  { icon: '🏆', title: 'وكيل جونسون المعتمد', value: 'Johnson Authorized Dealer', desc: 'الوكيل الرسمي لأفلام جونسون الأمريكية في جدة' },
  { icon: '🛡️', title: 'ضمان مكتوب', value: 'حتى عمر السيارة', desc: 'شهادة ضمان رسمية مع كل عملية تركيب' },
];

export default function TrustSection() {
  return (
    <section className={styles.section} id="trust" aria-label="لماذا تثق بنا">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>لماذا عزل كور</span>
          <h2 className={styles.title}>ثقة موثقة — مش مجرد كلام</h2>
          <p className={styles.subtitle}>
            منشأة سعودية مسجلة ومرخصة — وكالة رسمية من جونسون الأمريكية.
          </p>
        </div>

        <div className={styles.grid}>
          {credentials.map((cred, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{cred.icon}</span>
              <h3 className={styles.cardTitle}>{cred.title}</h3>
              <span className={styles.cardValue}>{cred.value}</span>
              <p className={styles.cardDesc}>{cred.desc}</p>
            </div>
          ))}
        </div>

        {/* Expert Box (Centralized E-E-A-T Component) */}
        <div style={{ marginTop: '2rem' }}>
          <AuthorProfile 
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="Johnson Window Films (الوكيل المعتمد)"
            quote="نستخدم فقط الأفلام الأصلية من المصنع مباشرة — لا نقبل بأي منتج مقلد أو مجهول المصدر. كل رول فيلم يحمل رقم تسلسلي يمكن تتبعه."
            reviewDate={new Date().toISOString().split('T')[0]} // Static for today as we just launched
          />
        </div>

        {/* Government Trust Anchors */}
        <div style={{ marginTop: '2rem' }}>
          <OfficialPartnerBar entityKeys={['GOV.SASO', 'GOV.TRAFFIC', 'GOV.SBC', 'GOV.BALADI']} />
        </div>
      </div>
    </section>
  );
}
