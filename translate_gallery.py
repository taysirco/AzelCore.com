import re

with open('src/app/[locale]/gallery/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""const carPhotos = [
  { src: 'gallery-car-before-01.webp', caption: 'سيارة قبل التظليل', detail: 'لكزس ES 350 — حي الروضة | الفيلم: جونسون Supreme IR | حجب: 97% IR' },
  { src: 'gallery-car-after-01.webp', caption: 'سيارة بعد تظليل جونسون Supreme IR', detail: 'النتيجة: حرارة المقصورة انخفضت من 74°م إلى 38°م' },
  { src: 'gallery-car-before-02.webp', caption: 'SUV قبل التظليل', detail: 'رنج روفر سبورت — حي الصفا | تظليل XPEL PRIME XR Plus' },
  { src: 'gallery-car-after-02.webp', caption: 'SUV بعد تظليل نانو سيراميك', detail: 'النتيجة: وضوح رؤية 95% مع حماية UV 99% وحجب حرارة 98%' },
  { src: 'gallery-car-before-03.webp', caption: 'سيارة سيدان قبل العزل', detail: 'تويوتا كامري — حي الحمدانية | الفيلم: 3M CR70' },
  { src: 'gallery-car-after-03.webp', caption: 'سيارة سيدان بعد التظليل الكامل', detail: 'النتيجة: توفير بنزين 18% شهرياً — المكيف يبرد في 4 دقائق بدل 12' },
  { src: 'nano-ceramic-tint-applied.webp', caption: 'فيلم نانو سيراميك أثناء التركيب', detail: 'قص كمبيوتري دقيق بتقنية DAP — صفر فقاعات' },
  { src: 'thermal-camera-car-test.webp', caption: 'اختبار كاميرا حرارية — قبل وبعد', detail: 'كاميرا FLIR تُظهر فرق 34°م بين الزجاج المظلل وغير المظلل' },
  { src: 'car-tint-heat-comparison.webp', caption: 'مقارنة حرارية — فيلم عادي vs نانو سيراميك', detail: 'فيلم عادي: 52°م داخل المقصورة | نانو سيراميك: 38°م فقط' },
];""",
"""const getCarPhotos = (isAr: boolean) => [
  { src: 'gallery-car-before-01.webp', caption: isAr ? 'سيارة قبل التظليل' : 'Car before tinting', detail: isAr ? 'لكزس ES 350 — حي الروضة | الفيلم: جونسون Supreme IR | حجب: 97% IR' : 'Lexus ES 350 — Al Rawdah | Film: Johnson Supreme IR | Block: 97% IR' },
  { src: 'gallery-car-after-01.webp', caption: isAr ? 'سيارة بعد تظليل جونسون Supreme IR' : 'Car after Johnson Supreme IR tint', detail: isAr ? 'النتيجة: حرارة المقصورة انخفضت من 74°م إلى 38°م' : 'Result: Cabin heat dropped from 74°C to 38°C' },
  { src: 'gallery-car-before-02.webp', caption: isAr ? 'SUV قبل التظليل' : 'SUV before tinting', detail: isAr ? 'رنج روفر سبورت — حي الصفا | تظليل XPEL PRIME XR Plus' : 'Range Rover Sport — Al Safa | XPEL PRIME XR Plus tint' },
  { src: 'gallery-car-after-02.webp', caption: isAr ? 'SUV بعد تظليل نانو سيراميك' : 'SUV after nano-ceramic tint', detail: isAr ? 'النتيجة: وضوح رؤية 95% مع حماية UV 99% وحجب حرارة 98%' : 'Result: 95% visibility with 99% UV protection and 98% heat block' },
  { src: 'gallery-car-before-03.webp', caption: isAr ? 'سيارة سيدان قبل العزل' : 'Sedan before insulation', detail: isAr ? 'تويوتا كامري — حي الحمدانية | الفيلم: 3M CR70' : 'Toyota Camry — Al Hamdaniya | Film: 3M CR70' },
  { src: 'gallery-car-after-03.webp', caption: isAr ? 'سيارة سيدان بعد التظليل الكامل' : 'Sedan after full tinting', detail: isAr ? 'النتيجة: توفير بنزين 18% شهرياً — المكيف يبرد في 4 دقائق بدل 12' : 'Result: 18% monthly fuel savings — AC cools in 4 mins instead of 12' },
  { src: 'nano-ceramic-tint-applied.webp', caption: isAr ? 'فيلم نانو سيراميك أثناء التركيب' : 'Nano-ceramic film during installation', detail: isAr ? 'قص كمبيوتري دقيق بتقنية DAP — صفر فقاعات' : 'Precise DAP computer cut — Zero bubbles' },
  { src: 'thermal-camera-car-test.webp', caption: isAr ? 'اختبار كاميرا حرارية — قبل وبعد' : 'Thermal camera test — Before & After', detail: isAr ? 'كاميرا FLIR تُظهر فرق 34°م بين الزجاج المظلل وغير المظلل' : 'FLIR camera shows a 34°C diff between tinted & untinted glass' },
  { src: 'car-tint-heat-comparison.webp', caption: isAr ? 'مقارنة حرارية — فيلم عادي vs نانو سيراميك' : 'Heat comparison — Regular vs Nano-Ceramic film', detail: isAr ? 'فيلم عادي: 52°م داخل المقصورة | نانو سيراميك: 38°م فقط' : 'Regular film: 52°C inside | Nano-Ceramic: 38°C only' },
];""")

content = content.replace(
"""const buildingPhotos = [
  { src: 'gallery-building-before-01.webp', caption: 'مبنى قبل العزل', detail: 'برج مكاتب 8 أدوار — شارع فلسطين | واجهة 1,200م²' },
  { src: 'gallery-building-after-01.webp', caption: 'مبنى بعد عزل الواجهة', detail: 'النتيجة: فاتورة الكهرباء انخفضت 42% = 280,000 ر.س/سنة توفير' },
  { src: 'gallery-building-before-02.webp', caption: 'فيلا قبل العزل', detail: 'فيلا 350م² — حي الصفا | 16 نافذة واجهة غربية' },
  { src: 'gallery-building-after-02.webp', caption: 'فيلا بعد تركيب فيلم عاكس', detail: 'النتيجة: درجة الحرارة داخل الصالة نزلت 8 درجات — المكيف أقل بـ 35%' },
  { src: 'building-tint-before-after.webp', caption: 'قبل وبعد — واجهة تجارية', detail: 'معرض سيارات — طريق المدينة | فيلم عاكس فضي 20%' },
  { src: 'commercial-facade-tinting.webp', caption: 'عزل واجهة مبنى تجاري', detail: 'مجمع تجاري — حي الزهراء | 800م² نانو سيراميك شفاف' },
  { src: 'villa-window-insulation-jeddah.webp', caption: 'عزل نوافذ فيلا في جدة', detail: 'فيلا فاخرة — حي الشاطئ | فيلم مقاوم للملوحة + ضمان 15 سنة' },
  { src: 'office-window-tinting.webp', caption: 'عزل مكاتب إدارية', detail: 'مكاتب إدارية 5 أدوار — حي النزهة | فيلم 3M Prestige 70' },
  { src: 'reflective-film-building.webp', caption: 'فيلم عاكس على واجهة زجاجية', detail: 'واجهة فندق — كورنيش جدة | حجب 85% من الحرارة الشمسية' },
];""",
"""const getBuildingPhotos = (isAr: boolean) => [
  { src: 'gallery-building-before-01.webp', caption: isAr ? 'مبنى قبل العزل' : 'Building before insulation', detail: isAr ? 'برج مكاتب 8 أدوار — شارع فلسطين | واجهة 1,200م²' : '8-floor office tower — Palestine St. | 1,200m² facade' },
  { src: 'gallery-building-after-01.webp', caption: isAr ? 'مبنى بعد عزل الواجهة' : 'Building after facade insulation', detail: isAr ? 'النتيجة: فاتورة الكهرباء انخفضت 42% = 280,000 ر.س/سنة توفير' : 'Result: Electricity bill dropped 42% = 280,000 SAR/year savings' },
  { src: 'gallery-building-before-02.webp', caption: isAr ? 'فيلا قبل العزل' : 'Villa before insulation', detail: isAr ? 'فيلا 350م² — حي الصفا | 16 نافذة واجهة غربية' : '350m² Villa — Al Safa | 16 west-facing windows' },
  { src: 'gallery-building-after-02.webp', caption: isAr ? 'فيلا بعد تركيب فيلم عاكس' : 'Villa after reflective film', detail: isAr ? 'النتيجة: درجة الحرارة داخل الصالة نزلت 8 درجات — المكيف أقل بـ 35%' : 'Result: Living room temp dropped 8°C — AC usage down 35%' },
  { src: 'building-tint-before-after.webp', caption: isAr ? 'قبل وبعد — واجهة تجارية' : 'Before & After — Commercial facade', detail: isAr ? 'معرض سيارات — طريق المدينة | فيلم عاكس فضي 20%' : 'Car showroom — Madinah Rd. | 20% Silver Reflective Film' },
  { src: 'commercial-facade-tinting.webp', caption: isAr ? 'عزل واجهة مبنى تجاري' : 'Commercial building facade insulation', detail: isAr ? 'مجمع تجاري — حي الزهراء | 800م² نانو سيراميك شفاف' : 'Commercial complex — Al Zahra | 800m² clear nano-ceramic' },
  { src: 'villa-window-insulation-jeddah.webp', caption: isAr ? 'عزل نوافذ فيلا في جدة' : 'Villa window insulation in Jeddah', detail: isAr ? 'فيلا فاخرة — حي الشاطئ | فيلم مقاوم للملوحة + ضمان 15 سنة' : 'Luxury Villa — Al Shati | Anti-salt film + 15yr warranty' },
  { src: 'office-window-tinting.webp', caption: isAr ? 'عزل مكاتب إدارية' : 'Office windows insulation', detail: isAr ? 'مكاتب إدارية 5 أدوار — حي النزهة | فيلم 3M Prestige 70' : '5-floor office building — Al Nuzha | 3M Prestige 70 film' },
  { src: 'reflective-film-building.webp', caption: isAr ? 'فيلم عاكس على واجهة زجاجية' : 'Reflective film on glass facade', detail: isAr ? 'واجهة فندق — كورنيش جدة | حجب 85% من الحرارة الشمسية' : 'Hotel Facade — Jeddah Corniche | Blocks 85% of solar heat' },
];""")

content = content.replace(
"""const imageListSchema = {""",
"""const getImageListSchema = (isAr: boolean) => ({""")

content = content.replace(
"""      name: 'معرض أعمال عزل كور — جدة',
      url: `${SITE_URL}/gallery`,
      description: 'صور حقيقية لأعمال تظليل السيارات وعزل المباني في جدة',
      provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      image: [...carPhotos, ...buildingPhotos].map(p => ({""",
"""      name: isAr ? 'معرض أعمال عزل كور — جدة' : 'AzelCore Work Gallery — Jeddah',
      url: `${SITE_URL}/gallery`,
      description: isAr ? 'صور حقيقية لأعمال تظليل السيارات وعزل المباني في جدة' : 'Real photos of car tinting and building insulation works in Jeddah',
      provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      image: [...getCarPhotos(isAr), ...getBuildingPhotos(isAr)].map(p => ({""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'معرض الأعمال', item: `${SITE_URL}/gallery` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'معرض الأعمال' : 'Gallery', item: `${SITE_URL}/gallery` },""")

content = content.replace(
"""    },
  ],
};""",
"""    },
  ],
});""")

content = content.replace(
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageListSchema) }} />""",
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getImageListSchema(isAr)) }} />""")

content = content.replace(
"""      <div id="voice-answer-gallery-1" className="sr-only" aria-hidden="true">
        معرض أعمال عزل كور — تصفح أكثر من 30 سيارة تم تظليلها في جدة بأنواع الأفلام المختلفة.
      </div>""",
"""      <div id="voice-answer-gallery-1" className="sr-only" aria-hidden="true">
        {isAr ? 'معرض أعمال عزل كور — تصفح أكثر من 30 سيارة تم تظليلها في جدة بأنواع الأفلام المختلفة.' : 'AzelCore Gallery — Browse over 30 cars tinted in Jeddah using various film types.'}
      </div>""")

content = content.replace(
"""          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link> / <span>أعمالنا</span>
          </nav>
          <h1 className={styles.pageTitle}>معرض <span className={styles.highlight}>أعمالنا</span></h1>
          <p className={styles.pageSubtitle}>صور حقيقية قبل وبعد — كل مشروع بأيدي فريقنا في جدة.</p>""",
"""          <nav className={styles.breadcrumb} aria-label={isAr ? "مسار التنقل" : "Breadcrumbs"}>
            <Link href="/">{isAr ? 'الرئيسية' : 'Home'}</Link> / <span>{isAr ? 'أعمالنا' : 'Gallery'}</span>
          </nav>
          <h1 className={styles.pageTitle}>{isAr ? 'معرض ' : 'Our '}<span className={styles.highlight}>{isAr ? 'أعمالنا' : 'Gallery'}</span></h1>
          <p className={styles.pageSubtitle}>{isAr ? 'صور حقيقية قبل وبعد — كل مشروع بأيدي فريقنا في جدة.' : 'Real Before & After photos — every project done by our team in Jeddah.'}</p>""")

content = content.replace(
"""            <span className={styles.overline}>🚗 تظليل سيارات</span>
            <h2 className={styles.sectionTitle}>أعمال تظليل السيارات</h2>""",
"""            <span className={styles.overline}>🚗 {isAr ? 'تظليل سيارات' : 'Car Tinting'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'أعمال تظليل السيارات' : 'Car Tinting Works'}</h2>""")

content = content.replace(
"""            {carPhotos.map((p, i) => (""",
"""            {getCarPhotos(isAr).map((p, i) => (""")

content = content.replace(
"""            <span className={styles.overline}>🏢 عزل مباني</span>
            <h2 className={styles.sectionTitle}>مشاريع عزل واجهات المباني</h2>""",
"""            <span className={styles.overline}>🏢 {isAr ? 'عزل مباني' : 'Building Insulation'}</span>
            <h2 className={styles.sectionTitle}>{isAr ? 'مشاريع عزل واجهات المباني' : 'Building Facade Insulation Projects'}</h2>""")

content = content.replace(
"""            {buildingPhotos.map((p, i) => (""",
"""            {getBuildingPhotos(isAr).map((p, i) => (""")

content = content.replace(
"""          <h2 className={styles.ctaTitle}>عجبك شغلنا؟</h2>
          <p className={styles.ctaSubtitle}>سيارتك أو مبناك ممكن يكون المشروع القادم — تواصل معنا الآن.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>تواصل عبر واتساب</a>""",
"""          <h2 className={styles.ctaTitle}>{isAr ? 'عجبك شغلنا؟' : 'Like our work?'}</h2>
          <p className={styles.ctaSubtitle}>{isAr ? 'سيارتك أو مبناك ممكن يكون المشروع القادم — تواصل معنا الآن.' : 'Your car or building could be the next project — contact us now.'}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</a>""")

with open('src/app/[locale]/gallery/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
