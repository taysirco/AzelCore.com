import styles from './ProcessSection.module.css';

const steps = [
  { number: '01', title: 'الاستشارة', desc: 'نحلل احتياجك ونقترح أفضل نوع فيلم حسب سيارتك أو مبناك وميزانيتك.', icon: '💬' },
  { number: '02', title: 'التحضير', desc: 'تنظيف عميق للزجاج وقص دقيق بالكمبيوتر لضمان تغطية مثالية بدون فقاعات.', icon: '🔧' },
  { number: '03', title: 'التركيب', desc: 'تركيب احترافي في بيئة نظيفة بأدوات متخصصة — لا غبار ولا فقاعات.', icon: '🎯' },
  { number: '04', title: 'الفحص والضمان', desc: 'فحص كامل + شهادة ضمان رسمية + تعليمات العناية لأطول عمر ممكن.', icon: '🛡️' },
];

export default function ProcessSection() {
  return (
    <section className={styles.section} id="process" aria-label="كيف نعمل">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>كيف نعمل</span>
          <h2 className={styles.title}>4 خطوات لتظليل مثالي</h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
