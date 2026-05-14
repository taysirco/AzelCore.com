import re

with open('src/app/[locale]/about/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace aboutSchema
content = content.replace(
"""const aboutSchema = {""",
"""const getAboutSchema = (isAr: boolean) => ({""")

content = content.replace(
"""    {
      '@type': 'AboutPage',
      name: 'من نحن — عزل كور',
      url: `${SITE_URL}/about`,
      mainEntity: {""",
"""    {
      '@type': 'AboutPage',
      name: isAr ? 'من نحن — عزل كور' : 'About Us — AzelCore',
      url: `${SITE_URL}/about`,
      mainEntity: {""")

content = content.replace(
"""            'تظليل سيارات نانو سيراميك',
            'عزل زجاج مباني',""",
"""            isAr ? 'تظليل سيارات نانو سيراميك' : 'Nano-ceramic car tinting',
            isAr ? 'عزل زجاج مباني' : 'Building glass insulation',""")

content = content.replace(
"""    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'من نحن', item: `${SITE_URL}/about` },
      ],
    },
  ],
};""",
"""    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'من نحن' : 'About Us', item: `${SITE_URL}/about` },
      ],
    },
  ],
});""")

content = content.replace(
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />""",
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutSchema(isAr)) }} />""")

content = content.replace(
"""          <Image src="/images/about-workshop-interior.webp" alt="ورشة عزل كور — تظليل سيارات جدة" fill priority sizes="100vw" quality={75} style={{ objectFit: 'cover' }} />""",
"""          <Image src="/images/about-workshop-interior.webp" alt={isAr ? "ورشة عزل كور — تظليل سيارات جدة" : "AzelCore Workshop — Car Tinting Jeddah"} fill priority sizes="100vw" quality={75} style={{ objectFit: 'cover' }} />""")

content = content.replace(
"""          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>من نحن</span>
          </nav>
          <h1 className={styles.heroTitle}>نحمي <span className={styles.gradient}>ممتلكاتك</span> من حرارة جدة</h1>
          <p className={styles.heroSubtitle}>
            فريق متخصص بخبرة +6 سنوات في العزل الحراري والتظليل — نستخدم أفضل الأفلام الأمريكية
            ونضمن لك نتيجة تشوفها بعينك وتحسها بالفرق.
          </p>""",
"""          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}>
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'من نحن' : 'About Us'}</span>
          </nav>
          <h1 className={styles.heroTitle}>{isAr ? 'نحمي ' : 'We Protect '}<span className={styles.gradient}>{isAr ? 'ممتلكاتك' : 'Your Assets'}</span> {isAr ? 'من حرارة جدة' : 'From Jeddah Heat'}</h1>
          <p className={styles.heroSubtitle}>
            {isAr ? 'فريق متخصص بخبرة +6 سنوات في العزل الحراري والتظليل — نستخدم أفضل الأفلام الأمريكية ونضمن لك نتيجة تشوفها بعينك وتحسها بالفرق.' : 'A specialized team with +6 years of experience in thermal insulation and tinting — we use the best American films and guarantee a result you can see and feel.'}
          </p>""")

content = content.replace(
"""              <span className={styles.overline}>قصتنا</span>
              <h2 className={styles.sectionTitle}>من ورشة صغيرة إلى وكيل معتمد</h2>
              <p className={styles.storyPara}>
                بدأت رحلتنا في 2018 بشغف بسيط — نبي نقدم تظليل سيارات بجودة حقيقية في جدة.
                كنا نشوف السوق مليان بأفلام رخيصة تتقشر بعد أشهر ومحلات تبيع &ldquo;نانو سيراميك&rdquo; وهو في الحقيقة فيلم مصبوغ عادي.
              </p>
              <p className={styles.storyPara}>
                قررنا نكون مختلفين — نستورد من المصنع مباشرة، نعرض الداتاشيت الرسمي لكل فيلم،
                ونثبت الفرق بالكاميرا الحرارية قدام العميل. هذا النهج خلانا نحصل على وكالة جونسون و 3M الرسمية
                كوكيل معتمد في جدة.
              </p>
              <p className={styles.storyPara}>
                اليوم <strong>عزل كور</strong> يخدم أكثر من 780 سيارة و 50 مبنى — بضمان حقيقي مكتوب وفاتورة ضريبية رسمية.
              </p>""",
"""              <span className={styles.overline}>{isAr ? 'قصتنا' : 'Our Story'}</span>
              <h2 className={styles.sectionTitle}>{isAr ? 'من ورشة صغيرة إلى وكيل معتمد' : 'From a Small Workshop to an Authorized Dealer'}</h2>
              <p className={styles.storyPara}>
                {isAr ? 'بدأت رحلتنا في 2018 بشغف بسيط — نبي نقدم تظليل سيارات بجودة حقيقية في جدة. كنا نشوف السوق مليان بأفلام رخيصة تتقشر بعد أشهر ومحلات تبيع "نانو سيراميك" وهو في الحقيقة فيلم مصبوغ عادي.' : 'Our journey started in 2018 with a simple passion — we wanted to offer real quality car tinting in Jeddah. We saw the market flooded with cheap films that peel after months and shops selling "nano-ceramic" which was actually just a regular dyed film.'}
              </p>
              <p className={styles.storyPara}>
                {isAr ? 'قررنا نكون مختلفين — نستورد من المصنع مباشرة، نعرض الداتاشيت الرسمي لكل فيلم، ونثبت الفرق بالكاميرا الحرارية قدام العميل. هذا النهج خلانا نحصل على وكالة جونسون و 3M الرسمية كوكيل معتمد في جدة.' : 'We decided to be different — import directly from the factory, display the official datasheet for each film, and prove the difference with a thermal camera in front of the customer. This approach earned us the official Johnson and 3M dealerships in Jeddah.'}
              </p>
              <p className={styles.storyPara}>
                {isAr ? 'اليوم ' : 'Today '}<strong>{isAr ? 'عزل كور' : 'AzelCore'}</strong>{isAr ? ' يخدم أكثر من 780 سيارة و 50 مبنى — بضمان حقيقي مكتوب وفاتورة ضريبية رسمية.' : ' serves over 780 cars and 50 buildings — with a real written warranty and official tax invoice.'}
              </p>""")

content = content.replace(
"""              <Image src="/images/why-choose-us-workshop.webp" alt="فريق عزل كور في الورشة" width={500} height={400} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />""",
"""              <Image src="/images/why-choose-us-workshop.webp" alt={isAr ? "فريق عزل كور في الورشة" : "AzelCore Team at the Workshop"} width={500} height={400} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />""")

content = content.replace(
"""            <span className={styles.overline}>المؤسس</span>""",
"""            <span className={styles.overline}>{isAr ? 'المؤسس' : 'Founder'}</span>""")

content = content.replace(
"""            <h2 className={styles.sectionTitle}>👨‍🔧 {OWNER_NAME}</h2>
            <p className={styles.sectionSubtitle}>{OWNER_TITLE}</p>""",
"""            <h2 className={styles.sectionTitle}>👨‍🔧 {isAr ? OWNER_NAME : 'Ahmed Salem'}</h2>
            <p className={styles.sectionSubtitle}>{isAr ? OWNER_TITLE : 'Technical Director'}</p>""")

content = content.replace(
"""              <blockquote>
                &ldquo;أؤمن إن العميل يستحق يعرف بالضبط إيش اللي يتركب على سيارته. عشان كذا أعرض الداتاشيت
                لكل فيلم وأثبت النتيجة بالكاميرا الحرارية. الثقة تُبنى بالشفافية.&rdquo;
              </blockquote>""",
"""              <blockquote>
                {isAr ? '“أؤمن إن العميل يستحق يعرف بالضبط إيش اللي يتركب على سيارته. عشان كذا أعرض الداتاشيت لكل فيلم وأثبت النتيجة بالكاميرا الحرارية. الثقة تُبنى بالشفافية.”' : '“I believe the customer deserves to know exactly what is being installed on their car. That’s why I display the datasheet for every film and prove the result with a thermal camera. Trust is built on transparency.”'}
              </blockquote>""")

content = content.replace(
"""                { value: '+6', label: 'سنوات خبرة' },
                { value: '+780', label: 'سيارة تم تظليلها' },
                { value: '+50', label: 'مبنى تم عزله' },
                { value: '4.9★', label: 'تقييم العملاء' },""",
"""                { value: '+6', label: isAr ? 'سنوات خبرة' : 'Years Experience' },
                { value: '+780', label: isAr ? 'سيارة تم تظليلها' : 'Cars Tinted' },
                { value: '+50', label: isAr ? 'مبنى تم عزله' : 'Buildings Insulated' },
                { value: '4.9★', label: isAr ? 'تقييم العملاء' : 'Client Rating' },""")

content = content.replace(
"""            <span className={styles.overline}>المحطات</span>
            <h2 className={styles.sectionTitle}>رحلة عزل كور</h2>""",
"""            <span className={styles.overline}>{isAr ? 'المحطات' : 'Milestones'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'رحلة عزل كور' : 'The AzelCore Journey'}</h2>""")

content = content.replace(
"""            <span className={styles.overline}>قيمنا</span>
            <h2 className={styles.sectionTitle}>ليش العملاء يرجعون لنا</h2>""",
"""            <span className={styles.overline}>{isAr ? 'قيمنا' : 'Our Values'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'ليش العملاء يرجعون لنا' : 'Why Clients Come Back'}</h2>""")

content = content.replace(
"""            <span className={styles.overline}>الاعتمادات</span>
            <h2 className={styles.sectionTitle}>شهادات وتراخيص رسمية</h2>""",
"""            <span className={styles.overline}>{isAr ? 'الاعتمادات' : 'Certifications'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'شهادات وتراخيص رسمية' : 'Official Certifications & Licenses'}</h2>""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>جاهز نحمي سيارتك أو مبناك؟</h2>
          <p className={styles.ctaSubtitle}>استشارة مجانية — نساعدك تختار الحل الأمثل.</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'جاهز نحمي سيارتك أو مبناك؟' : 'Ready to Protect Your Car or Building?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'استشارة مجانية — نساعدك تختار الحل الأمثل.' : 'Free Consultation — We help you choose the best solution.'}</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>
            <a href={`tel:${PHONE}`} className={styles.secondaryBtn}>📞 {PHONE}</a>
          </div>""")

with open('src/app/[locale]/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

