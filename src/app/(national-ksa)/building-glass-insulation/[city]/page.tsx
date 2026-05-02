import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, WHATSAPP_LINK, OWNER_NAME, OWNER_TITLE } from '@/lib/constants';
import { citiesContent } from '@/data/cities-content';
import { ksaCities } from '@/data/local-jeddah';
import CrossSellCards from '@/components/sections/CrossSellCards';
import YmylWarning from '@/components/seo/YmylWarning';
import CorporateRoiCalculator from '@/components/sections/CorporateRoiCalculator';
import GovernmentTrustBar from '@/components/seo/GovernmentTrustBar';
import ExpertReviewBox from '@/components/seo/ExpertReviewBox';
import VerificationBadges from '@/components/seo/VerificationBadges';
import styles from '../page.module.css';

// ═══ SSG: Pre-build 15 city routes at build time ═══
export function generateStaticParams() {
  return ksaCities.map((city) => ({
    city: city.id,
  }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const cityObj = ksaCities.find(c => c.id === params.city);
  if (!cityObj) return {};

  return {
    title: `عزل واجهات زجاج المباني في ${cityObj.nameAr} — وفّر 40% كهرباء | عزل كور`,
    description: `عزل حراري احترافي لواجهات المباني والفلل في ${cityObj.nameAr}. نانو سيراميك يحجب 97% حرارة، متوافق مع كود البناء السعودي. خصم للمشاريع.`,
    alternates: { canonical: `${SITE_URL}/building-glass-insulation/${cityObj.id}` },
    openGraph: {
      title: `عزل مباني في ${cityObj.nameAr} | ضمان 15 سنة`,
      description: `أفضل عزل زجاج مباني في ${cityObj.nameAr}. تقليل التكييف 40%.`,
      url: `${SITE_URL}/building-glass-insulation/${cityObj.id}`,
    },
  };
}

export default function BuildingInsulationCityPage({ params }: { params: { city: string } }) {
  const cityObj = ksaCities.find(c => c.id === params.city);
  const content = citiesContent[params.city];

  if (!cityObj || !content) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero} style={{ minHeight: '50vh', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className={styles.heroBg} style={{ background: 'var(--color-bg)' }}>
          <div className={styles.heroOverlay} style={{ background: 'linear-gradient(to bottom, var(--color-bg) 0%, transparent 100%)' }} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <Link href="/building-glass-insulation">عزل المباني</Link> / <span>{cityObj.nameAr}</span>
          </nav>
          <h1 className={styles.heroTitle}>
            عزل زجاج المباني في <span className={styles.greenGradient}>{cityObj.nameAr}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            حلول متوافقة مع مناخ {cityObj.nameAr} (رطوبة {cityObj.humidity}، حرارة تصل {cityObj.avgTemp})
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>حجز معاينة في {cityObj.nameAr}</a>
          </div>
        </div>
      </section>

      {/* ═══ E-E-A-T: Government Trust Signals ═══ */}
      <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
        <GovernmentTrustBar entityKeys={['GOV.SASO', 'GOV.SBC', 'GOV.BALADI']} />
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>خبراء العزل في {cityObj.nameAr}</span>
            <h2 className={styles.sectionTitle}>لماذا العزل الحراري ضروري في {cityObj.nameAr}؟</h2>
          </div>

          {/* Sentiment U-Curve Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,100,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--color-danger)' }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--color-danger)' }}>التحدي: </strong>
                {content.paragraph}
              </p>
            </div>
            
            <div style={{ background: 'rgba(100,255,100,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--color-success)' }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--color-success)' }}>العائد المتوقع: </strong>
                {content.savingsEstimate}
              </p>
            </div>

            <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong style={{ color: 'var(--color-primary)' }}>التوصية الهندسية: </strong>
                نوصي بـ <strong>{content.recommendedFilm}</strong> لتحقيق أعلى كفاءة وتوافق مع كود البناء السعودي في {cityObj.nameAr}.
              </p>
            </div>
          </div>

          {/* ═══ E-E-A-T: Verification Badges ═══ */}
          <div style={{ marginTop: 'var(--space-8)' }}>
            <VerificationBadges sector="المباني" />
          </div>
        </div>
      </section>

      {/* ═══ Localized FAQ for this specific city ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>أسئلة شائعة</span>
            <h2 className={styles.sectionTitle}>استفسارات مشاريع {cityObj.nameAr}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {content.faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-surface)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600, color: 'var(--color-text)', listStyle: 'none' }}>{faq.question}</summary>
                <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CorporateRoiCalculator />

      <YmylWarning
        title="أمان الزجاج وكود البناء SBC"
        text={`المشاريع التجارية في ${cityObj.nameAr} مُلزمة بتطبيق كود البناء السعودي (SBC 601) لترشيد الطاقة. العزل التجاري الغير معتمد يعرضك لمخالفات بلدية وعدم اجتياز فحص الدفاع المدني.`}
      />

      {/* ═══ E-E-A-T: Expert Review Entity ═══ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <ExpertReviewBox
            expertName={OWNER_NAME}
            expertTitle={OWNER_TITLE}
            organization="عزل كور لخدمات مشاريع المباني"
            quote={`أشرفنا على العديد من مشاريع العزل في ${cityObj.nameAr}. التعامل مع مناخ المنطقة (حرارة تصل ${cityObj.avgTemp} ورطوبة ${cityObj.humidity}) يتطلب اختيار فيلم نانو سيراميك بمواصفات دقيقة جداً لتجنب الكسر الحراري للزجاج.`}
            reviewDate={new Date().toISOString().split('T')[0]}
          />
        </div>
      </section>

      <CrossSellCards currentPage={`building-glass-insulation-${cityObj.id}`} />
    </>
  );
}
