// ═══ AzelCore.com — Schema Configs ═══

export const schemaConfigs = {
  // Tier-0: موجود في كل صفحة (Root Layout)
  organization: {
    "@type": "Organization",
    name: "عزل كور",
    alternateName: "AzelCore",
    url: "https://azelcore.com",
    logo: "https://azelcore.com/azelcore-logo.png",
    foundingDate: "2024",
    taxID: "311280328300003",
    address: { "@type": "PostalAddress", streetAddress: "طريق الملك فهد", addressLocality: "جدة", addressRegion: "منطقة مكة المكرمة", postalCode: "23425", addressCountry: "SA" },
    contactPoint: { "@type": "ContactPoint", telephone: "+966564612017", contactType: "customer service", availableLanguage: ["ar", "en"] },
    sameAs: [],
  },

  // صومعة السيارات (local-jeddah)
  localBusiness: {
    "@type": "AutoRepair",
    name: "عزل كور - تظليل سيارات جدة",
    geo: { "@type": "GeoCoordinates", latitude: "21.5424", longitude: "39.1727" },
    areaServed: { "@type": "City", name: "جدة", sameAs: "https://www.wikidata.org/wiki/Q5880" },
    priceRange: "$$",
    openingHours: "Sa-Th 08:00-22:00",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Mada",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "0" },
  },

  // صومعة المباني (national-ksa)
  nationalService: {
    "@type": "Service",
    serviceType: "عزل زجاج واجهات المباني",
    provider: { "@type": "Organization", name: "عزل كور" },
    areaServed: { "@type": "Country", name: "المملكة العربية السعودية" },
  },

  // صفحة خدمة
  serviceOffer: {
    "@type": "AggregateOffer",
    priceCurrency: "SAR",
    lowPrice: "300",
    highPrice: "4000",
    offerCount: "5",
  },

  // مقال مدونة
  blogArticle: {
    "@type": "Article",
    author: { "@type": "Person", name: "محمد الهادي", jobTitle: "فني عزل وتظليل معتمد" },
    publisher: { "@type": "Organization", name: "AzelCore", logo: "https://azelcore.com/azelcore-logo.png" },
    datePublished: "",
    dateModified: "",
  },

  // FAQ
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [], // يُملأ ديناميكياً من faqs.ts
  },

  // Breadcrumb
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [], // يُملأ ديناميكياً
  },
};
