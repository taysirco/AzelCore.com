import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        // GPTBot — Bait & Hook: allow blog/home for AI citation, block transactional pages
        userAgent: 'GPTBot',
        allow: ['/blog/', '/'],
        disallow: ['/api/', '/contact/', '/admin/'],
      },
      {
        // ClaudeBot — same strategy
        userAgent: 'ClaudeBot',
        allow: ['/blog/'],
        disallow: ['/api/', '/contact/', '/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/blog/', '/'],
        disallow: ['/api/', '/contact/', '/admin/'],
      },
      {
        // Aggressive scrapers — full block
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
    ],
    sitemap: 'https://azelcore.com/sitemap.xml',
  };
}
