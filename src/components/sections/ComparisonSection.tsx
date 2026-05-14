import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './ComparisonSection.module.css';

export default function ComparisonSection({ locale = 'ar' }: { locale?: string }) {
  const dict = getDictionary(locale as Locale);

  return (
    <section className={styles.section} id="comparison" aria-label={dict.comparison.ariaLabel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>{dict.comparison.overline}</span>
          <h2 className={styles.title}>{dict.comparison.title}</h2>
          <p className={styles.subtitle}>{dict.comparison.subtitle}</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {dict.comparison.headers.map((h: string, i: number) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dict.comparison.rows.map((row: { cells: string[]; highlight: boolean }, i: number) => (
                <tr key={i} className={row.highlight ? styles.highlighted : ''}>
                  {row.cells.map((cell: string, j: number) => (
                    <td key={j} className={j === 0 ? styles.nameCell : ''}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>{dict.comparison.footnote}</p>
      </div>
    </section>
  );
}
