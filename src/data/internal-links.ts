// ═══ AzelCore.com — Internal Linking Map ═══

export const crossSellMap = {
  // من ظلل سيارته → يحتاج:
  "car-tinting": [
    { target: "ppf-protection", reason: "حماية طلاء السيارة من الخدوش والحصى", cta: "حمِّ طلاء سيارتك كمان" },
    { target: "nano-ceramic-coating", reason: "لمعان دائم + حماية إضافية للطلاء", cta: "أضف طبقة نانو للطلاء" },
    { target: "thermal-cars", reason: "عزل حراري شامل لكل أجزاء السيارة", cta: "عزل حراري كامل" },
    { target: "building-glass", reason: "نفس العميل عنده بيت يحتاج عزل", cta: "ظلل نوافذ بيتك كمان" },
  ],
  // من عزل مبناه → يحتاج:
  "building-glass": [
    { target: "thermal-windows", reason: "عزل حراري متقدم للنوافذ الداخلية", cta: "عزل الشبابيك الداخلية" },
    { target: "safety-film", reason: "حماية الزجاج من الكسر", cta: "أضف فيلم أمان" },
    { target: "car-tinting", reason: "نفس العميل عنده سيارة", cta: "ظلل سيارتك بخصم خاص" },
  ],
};

// هرم الربط الداخلي
export const linkingPyramid = {
  rule: "المقالات تدفع Link Equity للخدمات — وليس العكس",
  structure: {
    blogArticles: { linksTo: ["serviceHubs", "districtPages"], linksFrom: [] },
    serviceHubs: { linksTo: ["crossSellServices"], linksFrom: ["blogArticles", "districtPages"] },
    districtPages: { linksTo: ["serviceHubs"], linksFrom: ["blogArticles"] },
    homepage: { linksTo: ["serviceHubs", "blogHighlights"], linksFrom: ["all"] },
  },
  rules: [
    "كل مقال مدونة يربط لـ 2-3 صفحات خدمة",
    "صفحة الخدمة تربط فقط لخدمات مكمّلة (Cross-sell)",
    "صفحة dynamic-pages (حي/مدينة) تربط للـ Hub فقط",
    "لا تربط من صفحة خدمة لمقال مدونة — تسريب Link Equity",
  ],
};
