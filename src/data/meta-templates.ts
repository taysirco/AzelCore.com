// ═══ AzelCore.com — Meta Templates ═══
// قوالب SEO لكل نوع صفحة — تُملأ ديناميكياً

export const metaTemplates = {
  // ─── الصفحة الرئيسية ───
  home: {
    title: "AzelCore — تظليل سيارات وعزل حراري احترافي في جدة | عزل كور",
    description: "تظليل سيارات بفيلم نانو سيراميك يحجب 97% من الحرارة + عزل زجاج مباني في كل المملكة. ضمان 10 سنوات. احجز موعدك الآن.",
    h1: "تظليل سيارات وعزل حراري في جدة — نانو سيراميك بضمان 10 سنوات",
  },

  // ─── صفحة Hub خدمة ───
  serviceHub: {
    titleTemplate: "{serviceName} — {mainBenefit} | AzelCore ({year})",
    descriptionTemplate: "{serviceName} بأفلام {filmType} بنسبة حجب {irPercent} IR. أسعار تبدأ من {startPrice} ر.س. {warranty}. {cta}",
    h1Template: "{serviceName} — {filmType} و{secondaryBenefit}",
    examples: {
      carTinting: {
        title: "تظليل سيارات جدة — نانو سيراميك بضمان 10 سنوات | AzelCore (2026)",
        description: "تظليل سيارات احترافي في جدة بأفلام نانو سيراميك بنسبة حجب 97% IR. أسعار تبدأ من 800 ر.س. ضمان 10 سنوات. احجز عبر واتساب.",
        h1: "تظليل سيارات جدة — نانو سيراميك وعزل حراري احترافي",
      },
      buildingGlass: {
        title: "عزل زجاج واجهات مباني — توفير 45% من الكهرباء | AzelCore (2026)",
        description: "عزل وتظليل زجاج واجهات المباني في السعودية. فيلم حراري يحجب 78% من الحرارة. ضمان 15 سنة. استشارة مجانية.",
        h1: "عزل زجاج واجهات مباني — توفير 45% من فاتورة الكهرباء",
      },
    },
  },

  // ─── صفحة dynamic-pages حي ───
  districtPage: {
    titleTemplate: "تظليل سيارات حي {district} جدة — {recommendation} | AzelCore",
    descriptionTemplate: "أفضل تظليل سيارات في حي {district} بجدة. {climateNote}. نانو سيراميك بضمان 10 سنوات. خدمة متنقلة متاحة.",
    h1Template: "تظليل سيارات حي {district} جدة — {recommendation}",
  },

  // ─── صفحة dynamic-pages مدينة ───
  cityPage: {
    titleTemplate: "تظليل مباني {city} — عزل زجاج واجهات احترافي | AzelCore",
    descriptionTemplate: "خدمات عزل وتظليل زجاج المباني في {city}. فيلم حراري يقلل التكييف {savingPercent}%. ضمان 15 سنة. اطلب عرض سعر.",
    h1Template: "تظليل مباني {city} — عزل حراري للواجهات الزجاجية",
  },

  // ─── صفحة مدونة ───
  blogPost: {
    titleTemplate: "{articleTitle} | مدونة AzelCore ({year})",
    descriptionTemplate: "{articleSummary} — دليل شامل من خبراء AzelCore.",
    h1Template: "{articleTitle}",
  },

  // ─── صفحة About ───
  about: {
    title: "من نحن — فريق AzelCore لتظليل السيارات وعزل المباني في جدة",
    description: "تعرف على فريق AzelCore المتخصص في تظليل السيارات والعزل الحراري في جدة. فنيون معتمدون + ضمان حقيقي + سجل تجاري.",
    h1: "من نحن — خبرة وثقة في تظليل السيارات وعزل المباني",
  },

  // ─── صفحة Contact ───
  contact: {
    title: "تواصل معنا — احجز موعد تظليل سيارتك في جدة | AzelCore",
    description: "تواصل مع AzelCore عبر واتساب أو اتصل بنا لحجز موعد تظليل سيارتك أو عزل مبناك. استشارة مجانية + عرض سعر فوري.",
    h1: "تواصل معنا — نخدمك في جدة وكل المملكة",
  },

  // ─── صفحة Gallery ───
  gallery: {
    title: "معرض أعمالنا — تظليل سيارات ومباني في جدة | AzelCore",
    description: "شاهد أعمال AzelCore في تظليل السيارات وعزل المباني. صور قبل وبعد حقيقية. نانو سيراميك + 3M + LLumar.",
    h1: "معرض الأعمال — قبل وبعد التظليل والعزل",
  },
};
