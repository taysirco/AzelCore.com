// ═══ AzelCore — robots.txt with Content Signals ═══
// Dynamic route handler for robots.txt (replaces MetadataRoute.Robots)
// Includes Content-Signal directives per IETF draft-romm-aipref-contentsignals

import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export function GET() {
  const robotsTxt = `# ═══ AzelCore — robots.txt ═══
# https://azelcore.com/robots.txt

User-agent: *
Allow: /
Disallow: /api/reindex/
Disallow: /_next/
Disallow: /admin/

# ═══ Content Signals (IETF draft-romm-aipref-contentsignals) ═══
# search=yes: allow classic search indexing
# ai-input=yes: ALLOW AI answer engines to ground/cite this content (GEO/AEO goal)
# ai-train=no: do not use this content for model training
Content-Signal: ai-train=no, search=yes, ai-input=yes

User-agent: GPTBot
Allow: /blog/
Allow: /
Allow: /llms.txt
Allow: /api/research/
Allow: /api/calculate-roi
Allow: /openapi.json
Allow: /.well-known/ai-plugin.json
Allow: /.well-known/agent-skills/
Allow: /.well-known/mcp/
Allow: /.well-known/api-catalog
Allow: /research/
Disallow: /api/reindex/
Disallow: /contact/
Disallow: /admin/

User-agent: Google-Extended
Allow: /blog/
Allow: /
Allow: /llms.txt
Allow: /api/research/
Allow: /api/calculate-roi
Allow: /openapi.json
Allow: /.well-known/ai-plugin.json
Allow: /.well-known/agent-skills/
Allow: /.well-known/mcp/
Allow: /.well-known/api-catalog
Allow: /research/
Disallow: /api/reindex/
Disallow: /admin/

User-agent: ClaudeBot
Allow: /blog/
Allow: /
Allow: /llms.txt
Allow: /api/research/
Allow: /api/calculate-roi
Allow: /openapi.json
Allow: /.well-known/ai-plugin.json
Allow: /.well-known/agent-skills/
Allow: /.well-known/mcp/
Allow: /.well-known/api-catalog
Allow: /research/
Disallow: /api/reindex/
Disallow: /contact/
Disallow: /admin/

User-agent: ChatGPT-User
Allow: /blog/
Allow: /
Allow: /llms.txt
Allow: /api/research/
Allow: /api/calculate-roi
Allow: /openapi.json
Allow: /.well-known/ai-plugin.json
Allow: /.well-known/agent-skills/
Allow: /.well-known/mcp/
Allow: /.well-known/api-catalog
Allow: /research/
Disallow: /api/reindex/
Disallow: /contact/
Disallow: /admin/

User-agent: PerplexityBot
Allow: /blog/
Allow: /
Allow: /llms.txt
Allow: /api/research/
Allow: /api/calculate-roi
Allow: /openapi.json
Allow: /.well-known/ai-plugin.json
Allow: /.well-known/agent-skills/
Allow: /.well-known/mcp/
Allow: /.well-known/api-catalog
Allow: /research/
Disallow: /api/reindex/
Disallow: /contact/
Disallow: /admin/

# ═══ Bulk training scrapers — blocked (consistent with ai-train=no) ═══
# Note: ClaudeBot, GPTBot, Google-Extended, PerplexityBot, ChatGPT-User are
# allowed above so the site can be cited in AI answers. CCBot (Common Crawl)
# and Bytespider are bulk crawlers blocked to honor the no-training preference.
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
