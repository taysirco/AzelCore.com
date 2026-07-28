// ═══ AzelCore — robots.txt with Content Signals ═══
// Dynamic route handler for robots.txt (replaces MetadataRoute.Robots)
// Includes Content-Signal directives per IETF draft-romm-aipref-contentsignals
//
// NOTE ON GROUPING (RFC 9309): a blank line terminates a record/group. Every
// directive — including Content-Signal — must therefore sit inside its group
// with no blank line separating it from the User-agent line(s) it applies to.

import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

/** Our stance: index and cite freely, but do not train on this content. */
const CONTENT_SIGNAL = 'Content-Signal: ai-train=no, search=yes, ai-input=yes';

/** Paths every AI answer engine / agent should be able to reach. */
const AGENT_ALLOW = [
  '/',
  '/blog/',
  '/research/',
  '/llms.txt',
  '/llms-full.txt',
  '/api/research/',
  '/api/calculate-roi',
  '/openapi.json',
  '/.well-known/',
];

const AGENT_DISALLOW = ['/api/reindex/', '/admin/'];

/**
 * AI answer engines, AI search indexers and user-triggered agent fetchers.
 * These are ALLOWED so the site can be surfaced and cited in AI answers.
 *
 * Vendors run separate agents for separate purposes, and a bot only obeys the
 * group that matches its own token — so each is listed explicitly rather than
 * relying on the wildcard group.
 */
const ALLOWED_AI_AGENTS = [
  // ── OpenAI / ChatGPT ──
  'GPTBot',            // crawls for model training
  'OAI-SearchBot',     // builds the ChatGPT Search index
  'ChatGPT-User',      // fetches a page live when a user asks about it
  // ── Anthropic / Claude ──
  'ClaudeBot',
  'Claude-User',       // live fetch during a Claude conversation
  'Claude-SearchBot',  // search indexing
  'anthropic-ai',
  // ── Google (Gemini / AI Overviews) ──
  'Google-Extended',   // controls Gemini + AI Overviews grounding
  'GoogleOther',
  // ── Microsoft Copilot ──
  'bingbot',
  // ── Apple Intelligence / Siri (voice) ──
  'Applebot',
  'Applebot-Extended',
  // ── Amazon Alexa (voice) ──
  'Amazonbot',
  // ── Perplexity ──
  'PerplexityBot',
  'Perplexity-User',
  // ── Meta AI ──
  'meta-externalagent',
  'Meta-ExternalFetcher',
  // ── Others ──
  'DuckAssistBot',     // DuckDuckGo AI
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
];

/**
 * Bulk scrapers blocked to honour the ai-train=no preference. These feed
 * training corpora rather than answer engines, so blocking them costs no
 * citation surface.
 */
const BLOCKED_BULK_SCRAPERS = ['CCBot', 'Bytespider'];

function agentGroup(userAgent: string): string {
  return [
    `User-agent: ${userAgent}`,
    ...AGENT_ALLOW.map((p) => `Allow: ${p}`),
    ...AGENT_DISALLOW.map((p) => `Disallow: ${p}`),
    CONTENT_SIGNAL,
  ].join('\n');
}

export function GET() {
  const robotsTxt = `# ═══ AzelCore — robots.txt ═══
# https://azelcore.com/robots.txt
#
# Content Signals (IETF draft-romm-aipref-contentsignals):
#   search=yes    → allow classic search indexing
#   ai-input=yes  → ALLOW AI answer engines to ground/cite this content
#   ai-train=no   → do not use this content for model training

User-agent: *
Allow: /
# Let crawlers fetch render assets (CSS/JS/optimized images) so pages render fully
Allow: /_next/static/
Allow: /_next/image
Disallow: /_next/data/
Disallow: /api/reindex/
Disallow: /admin/
${CONTENT_SIGNAL}

# ═══ AI answer engines, AI search indexers & agent fetchers — allowed & citable ═══
${ALLOWED_AI_AGENTS.map(agentGroup).join('\n\n')}

# ═══ Bulk training scrapers — blocked (consistent with ai-train=no) ═══
${BLOCKED_BULK_SCRAPERS.map((ua) => `User-agent: ${ua}\nDisallow: /`).join('\n\n')}

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
