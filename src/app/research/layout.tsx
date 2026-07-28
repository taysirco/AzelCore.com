import '../globals.css';

/**
 * ═══ Research Route Layout ═══
 *
 * The app root layout (src/app/layout.tsx) is a bare pass-through so that
 * [locale]/layout.tsx can own the <html> element for localized routes.
 * Routes outside [locale] — like /research/* — therefore have no <html>/<body>
 * of their own and were being served as malformed HTML fragments
 * (no DOCTYPE, no lang attribute, no body).
 *
 * This layout supplies them. The research report is English-language, so the
 * document is declared as en/ltr.
 */
export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* ═══ Agentic Discovery — keep parity with the localized layout ═══ */}
        <link rel="service-desc" href="/openapi.json" type="application/openapi+json" />
        <link rel="alternate" href="/.well-known/ai-plugin.json" type="application/json" title="AI Plugin Manifest" />
        <link rel="api-catalog" href="/.well-known/api-catalog" type="application/linkset+json" />
        <link rel="describedby" href="/.well-known/mcp/server-card.json" type="application/json" title="MCP Server Card" />
        <link rel="describedby" href="/.well-known/agent-skills/index.json" type="application/json" title="Agent Skills Index" />
      </head>
      <body>{children}</body>
    </html>
  );
}
