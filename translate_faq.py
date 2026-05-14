import re

with open('src/app/[locale]/faq/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""import { faqs } from '@/data/faqs';""",
"""import { getFaqs } from '@/data/faqs';""")

content = content.replace(
"""const faqGraphSchema = {""",
"""const getFaqGraphSchema = (isAr: boolean) => ({""")

content = content.replace(
"""      mainEntity: faqs.map(f => ({""",
"""      mainEntity: getFaqs(isAr).map(f => ({""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'الأسئلة الشائعة', item: `${SITE_URL}/faq` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'الأسئلة الشائعة' : 'FAQ', item: `${SITE_URL}/faq` },""")

content = content.replace(
"""  ],
};""",
"""  ],
});""")

content = content.replace(
"""const categories = [
  { key: 'all', label: 'الكل', icon: '📋' },
  { key: 'legal', label: 'القوانين', icon: '⚖️' },
  { key: 'price', label: 'الأسعار', icon: '💰' },
  { key: 'comparison', label: 'المقارنات', icon: '⚡' },
  { key: 'safety', label: 'السلامة', icon: '🛡️' },
  { key: 'process', label: 'آلية العمل', icon: '🔧' },
  { key: 'warranty', label: 'الضمان', icon: '📜' },
] as const;""",
"""const getCategories = (isAr: boolean) => [
  { key: 'all', label: isAr ? 'الكل' : 'All', icon: '📋' },
  { key: 'legal', label: isAr ? 'القوانين' : 'Legal', icon: '⚖️' },
  { key: 'price', label: isAr ? 'الأسعار' : 'Pricing', icon: '💰' },
  { key: 'comparison', label: isAr ? 'المقارنات' : 'Comparisons', icon: '⚡' },
  { key: 'safety', label: isAr ? 'السلامة' : 'Safety', icon: '🛡️' },
  { key: 'process', label: isAr ? 'آلية العمل' : 'Process', icon: '🔧' },
  { key: 'warranty', label: isAr ? 'الضمان' : 'Warranty', icon: '📜' },
] as const;""")

content = content.replace(
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraphSchema) }} />""",
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqGraphSchema(isAr)) }} />""")

content = content.replace(
"""          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>الأسئلة الشائعة</span>
          </nav>
          <h1 className={styles.pageTitle}>الأسئلة <span className={styles.highlight}>الشائعة</span></h1>
          <p className={styles.pageSubtitle}>كل ما تحتاج تعرفه عن التظليل والعزل الحراري — إجابات واضحة ومباشرة.</p>""",
"""          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</span>
          </nav>
          <h1 className={styles.pageTitle}>{isAr ? 'الأسئلة ' : 'Frequently Asked '}<span className={styles.highlight}>{isAr ? 'الشائعة' : 'Questions'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'كل ما تحتاج تعرفه عن التظليل والعزل الحراري — إجابات واضحة ومباشرة.' : 'Everything you need to know about tinting and thermal insulation — clear and direct answers.'}</p>""")

content = content.replace(
"""            {categories.map(c => (""",
"""            {getCategories(isAr).map(c => (""")

content = content.replace(
"""            {faqs.map((faq) => (""",
"""            {getFaqs(isAr).map((faq) => (""")

content = content.replace(
"""                    <span className={styles.faqTag}>
                      {faq.service === 'car-tinting' ? '🚗 سيارات' :
                       faq.service === 'building-glass' ? '🏢 مباني' :
                       faq.service === 'thermal' ? '🌡️ حراري' : '📋 عام'}
                    </span>""",
"""                    <span className={styles.faqTag}>
                      {faq.service === 'car-tinting' ? (isAr ? '🚗 سيارات' : '🚗 Cars') :
                       faq.service === 'building-glass' ? (isAr ? '🏢 مباني' : '🏢 Buildings') :
                       faq.service === 'thermal' ? (isAr ? '🌡️ حراري' : '🌡️ Thermal') : (isAr ? '📋 عام' : '📋 General')}
                    </span>""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>ما لقيت إجابة سؤالك؟</h2>
          <p className={styles.ctaSubtitle}>تواصل معنا مباشرة — نرد في أقل من 5 دقائق.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            💬 اسأل عبر واتساب
          </a>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'ما لقيت إجابة سؤالك؟' : 'Didn\\'t find your answer?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'تواصل معنا مباشرة — نرد في أقل من 5 دقائق.' : 'Contact us directly — we reply in under 5 minutes.'}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            💬 {isAr ? 'اسأل عبر واتساب' : 'Ask via WhatsApp'}
          </a>""")

content = content.replace(
"""      <div id="voice-answer-faq-1" style={{ display: 'none' }} aria-hidden="true">
        نعم التظليل مسموح في السعودية بشروط. الزجاج الأمامي يجب يكون 70% شفافية والخلفي مفتوح. عزل كور ينصحك بالدرجة المناسبة.
      </div>
      <div id="voice-answer-faq-2" style={{ display: 'none' }} aria-hidden="true">
        الفرق بين نانو سيراميك وكربوني إن النانو سيراميك يحجب 97% حرارة والكربوني 70% بس. النانو سيراميك أغلى لكن أفضل بكثير في حرارة جدة.
      </div>
      <div id="voice-answer-faq-3" style={{ display: 'none' }} aria-hidden="true">
        تظليل نانو سيراميك ما يحجب إشارة الجوال أبداً. لأنه خالي من المعادن. الجوال وGPS وأبل باي كلها تشتغل عادي.
      </div>""",
"""      <div id="voice-answer-faq-1" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'نعم التظليل مسموح في السعودية بشروط. الزجاج الأمامي يجب يكون 70% شفافية والخلفي مفتوح. عزل كور ينصحك بالدرجة المناسبة.' : 'Yes, tinting is allowed in Saudi Arabia under certain conditions. The front windshield must be 70% clear. AzelCore advises you on the right grade.'}
      </div>
      <div id="voice-answer-faq-2" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'الفرق بين نانو سيراميك وكربوني إن النانو سيراميك يحجب 97% حرارة والكربوني 70% بس. النانو سيراميك أغلى لكن أفضل بكثير في حرارة جدة.' : 'The difference between nano-ceramic and carbon is that nano-ceramic blocks 97% heat while carbon blocks only 70%. Nano-ceramic is more expensive but far better for Jeddah\\'s heat.'}
      </div>
      <div id="voice-answer-faq-3" style={{ display: 'none' }} aria-hidden="true">
        {isAr ? 'تظليل نانو سيراميك ما يحجب إشارة الجوال أبداً. لأنه خالي من المعادن. الجوال وGPS وأبل باي كلها تشتغل عادي.' : 'Nano-ceramic tint never blocks mobile signals because it is metal-free. Mobile, GPS, and Apple Pay will all work normally.'}
      </div>""")

with open('src/app/[locale]/faq/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

