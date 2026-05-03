// ═══ AzelCore.com — قاعدة بيانات الثقة المركزية (Trust Anchors Database) ═══
// المصدر الوحيد للحقيقة: كل الجهات الحكومية + الخبراء + الأنظمة + الشارات
// ⚠️ لا تخترع أسماء أو روابط — كل شيء هنا حقيقي وموثق

// ─── Types ───
export interface GovernmentEntity {
  key: string;
  name: string;
  abbreviation: string;
  url: string;
  role: string;
  sectors: string[];
}

export interface Expert {
  key: string;
  name: string;
  title: string;
  url: string;
  sectors: string[];
  organization?: string;
}

export interface Regulation {
  key: string;
  code: string;
  description: string;
  url: string;
  sectors: string[];
}

export interface VerificationBadge {
  sector: string;
  badge: string;
  grantedBy: string;
  url: string;
  icon: string;
}

export interface OfficialSource {
  name: string;
  nameAr: string;
  url: string;
  role: string;
}

export interface MunicipalEntity {
  cities: string[];
  name: string;
  url: string;
}

// ═══ 1. الجهات الحكومية (Trust Anchors) ═══

export const GOVERNMENT_ENTITIES: GovernmentEntity[] = [
  {
    key: 'GOV.SASO',
    name: 'الهيئة السعودية للمواصفات والمقاييس',
    abbreviation: 'SASO',
    url: 'https://www.saso.gov.sa',
    role: 'اعتماد مواد التظليل والعزل وأفلام النوافذ',
    sectors: ['تظليل', 'عزل', 'مباني'],
  },
  {
    key: 'GOV.SBC',
    name: 'اللجنة الوطنية لكود البناء السعودي',
    abbreviation: 'SBC',
    url: 'https://sbc.gov.sa',
    role: 'اشتراطات العزل الحراري والمائي (SBC 601/602)',
    sectors: ['عزل', 'مباني'],
  },
  {
    key: 'GOV.SEEC',
    name: 'المركز السعودي لكفاءة الطاقة',
    abbreviation: 'كفاءة',
    url: 'https://seec.gov.sa',
    role: 'كفاءة الطاقة في المباني وتوفير الكهرباء',
    sectors: ['عزل', 'مباني', 'حراري'],
  },
  {
    key: 'GOV.SCE',
    name: 'الهيئة السعودية للمهندسين',
    abbreviation: 'SCE',
    url: 'https://www.saudieng.sa',
    role: 'اعتماد المهندسين المدنيين وفاحصي المباني',
    sectors: ['عزل', 'مباني'],
  },
  {
    key: 'GOV.TRAFFIC',
    name: 'المرور السعودي',
    abbreviation: 'المرور',
    url: 'https://www.moi.gov.sa',
    role: 'نسبة التظليل المسموحة (≤30% VLT) وعقوبات المخالفة',
    sectors: ['تظليل', 'سيارات'],
  },
  {
    key: 'GOV.BALADI',
    name: 'وزارة البلديات — منصة بلدي',
    abbreviation: 'بلدي',
    url: 'https://balady.gov.sa',
    role: 'الرخص التجارية والشهادات الصحية',
    sectors: ['تراخيص'],
  },
  {
    key: 'GOV.CIVILDEFENSE',
    name: 'المديرية العامة للدفاع المدني',
    abbreviation: '998',
    url: 'https://www.998.gov.sa',
    role: 'سلامة زجاج المباني التجارية ومعايير الحريق',
    sectors: ['مباني', 'سلامة'],
  },
];

// ═══ 2. الخبراء الحقيقيون ═══

export const EXPERTS: Expert[] = [
  {
    key: 'EXPERTS.ALJUND',
    name: 'م. عبدالغني الجند',
    title: 'مؤلف موسوعة "أخطاء في البناء"',
    url: 'https://x.com/ssrrr22',
    sectors: ['عزل', 'بناء', 'تسربات'],
    organization: 'الهيئة السعودية للمهندسين',
  },
  {
    key: 'EXPERTS.ALMOHAIMED',
    name: 'م. ماجد المحيميد',
    title: 'خبير جودة تشطيبات وعزل',
    url: 'https://x.com/majedalmohaimed',
    sectors: ['تشطيبات', 'عزل', 'خزانات'],
    organization: 'الهيئة السعودية للمهندسين',
  },
  {
    key: 'EXPERTS.ALMISNID',
    name: 'أ.د. عبدالله المسند',
    title: 'أستاذ جغرافيا المناخ',
    url: 'https://x.com/ALMISNID',
    sectors: ['مناخ', 'حرارة', 'غبار'],
    organization: 'جامعة القصيم',
  },
  {
    key: 'EXPERTS.SHIHATA',
    name: 'م. إسلام شحاتة',
    title: 'مهندس مدني — الكود السعودي',
    url: 'https://mostaql.com/u/Eslam_Shihata',
    sectors: ['بنية تحتية', 'عزل', 'مباني'],
  },
  {
    key: 'EXPERTS.WISSAM',
    name: 'م. وسام',
    title: 'مهندس دراسات إنشائية',
    url: 'https://mostaql.com/u/wissam_sle121',
    sectors: ['كود إنشائي', 'عزل'],
  },
];

// ═══ 3. المصادر الرسمية (ماركات الأفلام) ═══

export const OFFICIAL_SOURCES: OfficialSource[] = [
  { name: 'Johnson Window Films', nameAr: 'جونسون وندو فيلم', url: 'https://www.johnsonwindowfilms.com', role: 'الوكيل المعتمد — المصدر الأساسي' },
  { name: '3M Window Films', nameAr: 'ثري ام', url: 'https://www.3m.com/3M/en_US/window-films/', role: 'وكيل معتمد — Crystalline + Ceramic IR + Color Stable + FX' },
  { name: 'LLumar', nameAr: 'لومار', url: 'https://www.llumar.com', role: 'مقارنة الأداء — CTX Series' },
  { name: 'XPEL', nameAr: 'إكسبل', url: 'https://www.xpel.com', role: 'بيانات PPF وأفلام PRIME XR' },
  { name: 'IWFA', nameAr: 'الرابطة الدولية لأفلام النوافذ', url: 'https://www.iwfa.com', role: 'شهادة التركيب المعتمدة' },
];

// ═══ 4. الأنظمة والأكواد ═══

export const REGULATIONS: Regulation[] = [
  {
    key: 'REG.SBC_601',
    code: 'SBC 601',
    description: 'كفاءة الطاقة والعزل الحراري — الحد الأدنى لمعامل U-Value',
    url: 'https://www.sbc.gov.sa',
    sectors: ['عزل', 'مباني', 'حراري'],
  },
  {
    key: 'REG.SBC_602',
    code: 'SBC 602',
    description: 'العزل المائي وحماية المباني من الرطوبة',
    url: 'https://www.sbc.gov.sa',
    sectors: ['عزل', 'مباني'],
  },
  {
    key: 'REG.SASO_FILMS',
    code: 'مواصفات SASO',
    description: 'مواصفات مواد التظليل وأفلام النوافذ السعودية',
    url: 'https://www.saso.gov.sa',
    sectors: ['تظليل', 'عزل'],
  },
  {
    key: 'REG.TRAFFIC_30',
    code: 'نظام المرور — نسبة التظليل',
    description: 'نسبة التظليل المسموحة ≤30% VLT — مخالفة 500-900 ر.س',
    url: 'https://www.moi.gov.sa',
    sectors: ['تظليل', 'سيارات'],
  },
  {
    key: 'REG.ASTM_D1003',
    code: 'ASTM D1003',
    description: 'المعيار الدولي لقياس نفاذية الضوء في الأفلام والزجاج',
    url: 'https://www.astm.org',
    sectors: ['تظليل', 'عزل'],
  },
];

// ═══ 5. شارات التحقق ═══

export const VERIFICATION_BADGES: VerificationBadge[] = [
  { sector: 'تظليل سيارات', badge: 'وكيل جونسون المعتمد', grantedBy: 'Johnson Window Films', url: 'https://www.johnsonwindowfilms.com', icon: '🏆' },
  { sector: 'تظليل سيارات', badge: 'وكيل 3M المعتمد', grantedBy: '3M Company', url: 'https://www.3m.com/3M/en_US/window-films/', icon: '🔴' },
  { sector: 'تظليل سيارات', badge: 'فني معتمد IWFA', grantedBy: 'الرابطة الدولية لأفلام النوافذ', url: 'https://www.iwfa.com', icon: '🛡️' },
  { sector: 'عزل مباني', badge: 'مطابق لكود البناء السعودي SBC 601', grantedBy: 'كود البناء السعودي', url: 'https://www.sbc.gov.sa', icon: '✔️' },
  { sector: 'عزل مباني', badge: 'مطابق لمواصفات SASO', grantedBy: 'الهيئة السعودية للمواصفات', url: 'https://www.saso.gov.sa', icon: '✔️' },
  { sector: 'الشركة', badge: 'منشأة مسجلة — سجل تجاري 4030253566', grantedBy: 'وزارة التجارة', url: 'https://mc.gov.sa', icon: '📋' },
  { sector: 'الشركة', badge: 'مسجل ضريبياً — 311280328300003', grantedBy: 'هيئة الزكاة والضريبة', url: 'https://zatca.gov.sa', icon: '🧾' },
];

// ═══ 6. الكيانات الجغرافية (أمانات المناطق — Local SEO) ═══

export const MUNICIPAL_ENTITIES: MunicipalEntity[] = [
  // المنطقة الغربية (الأولوية القصوى)
  { cities: ['جدة'], name: 'أمانة محافظة جدة', url: 'https://www.jeddah.gov.sa/' },
  { cities: ['مكة المكرمة'], name: 'أمانة العاصمة المقدسة', url: 'https://holymakkah.gov.sa/' },
  { cities: ['المدينة المنورة', 'ينبع'], name: 'أمانة منطقة المدينة المنورة', url: 'https://www.amana-md.gov.sa/' },
  { cities: ['الطائف'], name: 'أمانة محافظة الطائف', url: 'https://www.taifcity.gov.sa/' },
  // المنطقة الوسطى
  { cities: ['الرياض', 'الخرج'], name: 'أمانة منطقة الرياض', url: 'https://www.alriyadh.gov.sa/' },
  { cities: ['بريدة', 'عنيزة'], name: 'أمانة منطقة القصيم', url: 'https://www.qassim.gov.sa/' },
  // المنطقة الشرقية
  { cities: ['الدمام', 'الخبر', 'الظهران', 'الجبيل', 'القطيف'], name: 'أمانة المنطقة الشرقية', url: 'https://www.eamana.gov.sa/' },
  { cities: ['الأحساء'], name: 'أمانة محافظة الأحساء', url: 'https://www.alhasa.gov.sa/' },
  // المنطقة الشمالية
  { cities: ['تبوك'], name: 'أمانة منطقة تبوك', url: 'https://www.tabukm.gov.sa/' },
  { cities: ['حائل'], name: 'أمانة منطقة حائل', url: 'https://www.amanathail.gov.sa/' },
  // المنطقة الجنوبية
  { cities: ['أبها', 'خميس مشيط'], name: 'أمانة منطقة عسير', url: 'https://ars.gov.sa/' },
  { cities: ['نجران'], name: 'أمانة منطقة نجران', url: 'https://www.najran.gov.sa/' },
  { cities: ['جازان'], name: 'أمانة منطقة جازان', url: 'https://www.jazan.gov.sa/' },
];

// ═══ 7. Helper Functions ═══

/** Get government entities relevant to a specific sector */
export function getGovEntitiesBySector(sector: string): GovernmentEntity[] {
  return GOVERNMENT_ENTITIES.filter(g => g.sectors.includes(sector));
}

/** Get the municipality for a given city */
export function getMunicipalityForCity(city: string): MunicipalEntity | undefined {
  return MUNICIPAL_ENTITIES.find(m => m.cities.includes(city));
}

/** Get regulations relevant to a sector */
export function getRegulationsBySector(sector: string): Regulation[] {
  return REGULATIONS.filter(r => r.sectors.includes(sector));
}

/** Get verification badges for a sector */
export function getBadgesBySector(sector: string): VerificationBadge[] {
  return VERIFICATION_BADGES.filter(b => b.sector === sector || b.sector === 'الشركة');
}

/** Get expert by key */
export function getExpertByKey(key: string): Expert | undefined {
  return EXPERTS.find(e => e.key === key);
}

// ═══ 8. خريطة ربط الخبراء بالقطاعات ═══

export const SECTOR_EXPERT_MAP: Record<string, { reviewer: string; citations: string[]; govAnchors: string[] }> = {
  'تظليل-سيارات': {
    reviewer: 'EXPERTS.ALMOHAIMED',
    citations: ['EXPERTS.ALMISNID'],
    govAnchors: ['GOV.TRAFFIC', 'GOV.SASO'],
  },
  'عزل-مباني': {
    reviewer: 'EXPERTS.ALJUND',
    citations: ['EXPERTS.ALMOHAIMED', 'EXPERTS.ALMISNID'],
    govAnchors: ['GOV.SBC', 'GOV.SEEC', 'GOV.SASO'],
  },
  'عزل-حراري': {
    reviewer: 'EXPERTS.ALMOHAIMED',
    citations: ['EXPERTS.ALJUND'],
    govAnchors: ['GOV.SBC', 'GOV.SEEC'],
  },
  'عزل-نوافذ': {
    reviewer: 'EXPERTS.ALMOHAIMED',
    citations: ['EXPERTS.ALJUND', 'EXPERTS.ALMISNID'],
    govAnchors: ['GOV.SBC', 'GOV.SEEC', 'GOV.SASO'],
  },
};
