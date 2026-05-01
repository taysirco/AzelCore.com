import styles from './ComparisonSection.module.css';

const headers = ['نوع الفيلم', 'حجب IR', 'حجب UV', 'TSER', 'الضمان', 'السعر (سيدان)'];
const rows = [
  { cells: ['Johnson Supreme IR ⭐', '97%', '99%', '72%', 'عمر السيارة', '1,800-3,200 ر.س'], highlight: true },
  { cells: ['3M Crystalline', '97%', '99.9%', '90%', 'عمر السيارة', '2,000-3,500 ر.س'], highlight: false },
  { cells: ['XPEL PRIME XR+', '98%', '99%', '96%', '10 سنوات', '2,500-4,000 ر.س'], highlight: false },
  { cells: ['LLumar CTX', '95%', '99%', '88%', '7 سنوات', '1,200-2,500 ر.س'], highlight: false },
  { cells: ['Johnson InsulatIR', '92%', '99%', '65%', 'عمر السيارة', '1,200-2,500 ر.س'], highlight: true },
  { cells: ['Johnson Marathon', '86%', '99%', '60%', '5 سنوات', '600-1,200 ر.س'], highlight: true },
  { cells: ['كربوني عادي', '55%', '99%', '65%', '5 سنوات', '600-1,200 ر.س'], highlight: false },
  { cells: ['مصبوغ (عادي)', '30%', '70%', '40%', 'سنة', '300-600 ر.س'], highlight: false },
];

export default function ComparisonSection() {
  return (
    <section className={styles.section} id="comparison" aria-label="مقارنة أنواع التظليل">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>مقارنة الأنواع</span>
          <h2 className={styles.title}>قارن بالأرقام قبل ما تختار</h2>
          <p className={styles.subtitle}>
            أرقام حقيقية من الداتاشيت الرسمي — لا تعتمد على كلام البائعين. كل الأرقام قابلة للتحقق.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={row.highlight ? styles.highlighted : ''}>
                  {row.cells.map((cell, j) => (
                    <td key={j} className={j === 0 ? styles.nameCell : ''}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>
          * TSER = Total Solar Energy Rejected — كلما ارتفعت كان العزل أفضل. الأرقام من الداتاشيت الرسمي على زجاج 6mm.
        </p>
      </div>
    </section>
  );
}
