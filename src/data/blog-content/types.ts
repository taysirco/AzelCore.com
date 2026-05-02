// ═══ Blog Content — Shared Types ═══

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface ArticleData {
  intro: string;
  sections: ArticleSection[];
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
