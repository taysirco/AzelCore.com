// ═══ Blog Content — Shared Types ═══

export interface ArticleSection {
  heading: string;
  headingEn?: string;
  body: string;
  bodyEn?: string;
}

export interface ArticleFAQ {
  q: string;
  qEn?: string;
  a: string;
  aEn?: string;
}

export interface ArticleTable {
  headers: string[];
  headersEn?: string[];
  rows: string[][];
  rowsEn?: string[][];
}

export interface ArticleReview {
  author: string;
  authorEn?: string;
  role: string;
  roleEn?: string;
  rating: number; // e.g. 9.8
  text: string;
  textEn?: string;
}

export interface ArticleData {
  /** AEO Highlights: 40-60 words max, extremely dense */
  quickAnswer?: string;
  quickAnswerEn?: string;
  intro: string;
  introEn?: string;
  sections: ArticleSection[];
  
  /** Comparison table */
  table?: ArticleTable;
  
  /** YMYL FAQs */
  faqs?: ArticleFAQ[];
  
  /** Trust signal review box */
  expertReview?: ArticleReview;
  
  warning?: string;
  warningEn?: string;
  cta: string;
  ctaEn?: string;
}

export interface ArticleServiceLink {
  href: string;
  text: string;
  textEn?: string;
}

export interface ArticleModule {
  content: ArticleData;
  serviceLinks: ArticleServiceLink[];
  /** OG image filename (in /public/images/) */
  ogImage: string;
}
