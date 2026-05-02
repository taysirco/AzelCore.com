import styles from './YMYLWarning.module.css';

/**
 * YMYL (Your Money or Your Life) Warning Component
 * Implements the U-Curve Sentiment Analysis (Behavioral Engineering) from the Master Plan.
 * Agitates the pain point (fake cheap tint) before providing the AzelCore solution.
 */
export default function YMYLWarning() {
  return (
    <section className={styles.section} aria-label="تحذير هام للمستهلك">
      <div className={styles.container}>
        <div className={styles.warningBox}>
          
          <div className={styles.iconWrapper}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              احذر فخ <span className={styles.highlight}>"تظليل كامل بـ 200 ريال"</span>
            </h2>
            
            <p className={styles.text}>
              في السوق السعودي المليء بالخيارات، تنتشر عروض لـ "أفلام نانو" رخيصة. هذه الأفلام التجارية المقلدة ليست فقط خسارة لمالك، بل <strong style={{color: 'var(--text)'}}>خطراً حقيقياً</strong> على صحتك ومقصورة سيارتك.
            </p>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>تتحول للون البنفسجي أو تتلاشى خلال 3 أشهر فقط.</li>
              <li className={styles.bulletItem}>عزل وهمي: تسمح بمرور 80% من الأشعة تحت الحمراء (الحرارة الحقيقية).</li>
              <li className={styles.bulletItem}>ضرر صحي: لا تمنع الأشعة فوق البنفسجية (UV) المسببة لحروق الجلد.</li>
              <li className={styles.bulletItem}>تتسبب في تشقق ديكور وطبلون السيارة بسبب احتباس الحرارة.</li>
            </ul>

            <div className={styles.solutionBox}>
              <h3 className={styles.solutionTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                الحل التقني المعتمد (عزل كور)
              </h3>
              <p className={styles.solutionText}>
                نحن وكيل معتمد لـ <strong>Johnson Window Films</strong> الأمريكية. نستخدم أجهزة فحص حراري (FLIR) لإثبات نسبة عزل تصل إلى 97% للأشعة تحت الحمراء، مع ضمان موثق يصل لـ 10 سنوات يشمل تغيير اللون والتقشير.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
