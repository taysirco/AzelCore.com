import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/reindex/', '/_next/', '/admin/'],
      },
      {
        // GPTBot — Bait & Hook: allow blog/home/llms.txt for AI citation, block transactional pages
        userAgent: 'GPTBot',
        allow: ['/blog/', '/', '/llms.txt', '/api/research/', '/openapi.json', '/.well-known/ai-plugin.json'],
        disallow: ['/api/reindex/', '/contact/', '/admin/'],
      },
      {
        // Google-Extended — Gemini/SGE training; allow authoritative content
        userAgent: 'Google-Extended',
        allow: ['/blog/', '/', '/llms.txt', '/api/research/', '/openapi.json', '/.well-known/ai-plugin.json'],
        disallow: ['/api/reindex/', '/admin/'],
      },
      {
        // ClaudeBot — same strategy
        userAgent: 'ClaudeBot',
        allow: ['/blog/', '/llms.txt', '/api/research/', '/openapi.json', '/.well-known/ai-plugin.json'],
        disallow: ['/api/reindex/', '/contact/', '/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/blog/', '/', '/llms.txt', '/api/research/', '/openapi.json', '/.well-known/ai-plugin.json'],
        disallow: ['/api/reindex/', '/contact/', '/admin/'],
      },
      {
        // PerplexityBot — growing AI search engine
        userAgent: 'PerplexityBot',
        allow: ['/blog/', '/', '/llms.txt', '/api/research/', '/openapi.json', '/.well-known/ai-plugin.json'],
        disallow: ['/api/reindex/', '/contact/', '/admin/'],
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
