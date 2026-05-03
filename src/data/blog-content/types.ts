// ═══ Blog Content — Shared Types ═══

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface ArticleFAQ {
  q: string;
  a: string;
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleReview {
  author: string;
  role: string;
  rating: number; // e.g. 9.8
  text: string;
}

export interface ArticleData {
  /** AEO Bait: 40-60 words max, extremely dense */
  quickAnswer?: string;
  intro: string;
  sections: ArticleSection[];
  
  /** Comparison table */
  table?: ArticleTable;
  
  /** YMYL FAQs */
  faqs?: ArticleFAQ[];
  
  /** Trust signal review box */
  expertReview?: ArticleReview;
  
  warning?: string;
  cta: string;
}

export interface ArticleServiceLink {
  href: string;
  text: string;
}

export interface ArticleModule {
  content: ArticleData;
  serviceLinks: ArticleServiceLink[];
  /** OG image filename (in /public/images/) */
  ogImage: string;
}
