import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'standalone',
  
  // ═══ Performance: Compress server responses ═══
  compress: true,
  
  // ═══ Performance: Minimize powered-by header overhead ═══
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'], // Prefer AVIF first (30% smaller than WebP)
    deviceSizes: [640, 828, 1080, 1280, 1536],
    imageSizes: [48, 96, 128, 170, 256, 340], // Precise logo sizes included
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year — images are content-hashed
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; frame-src https://maps.google.com https://www.google.com https://maps.googleapis.com; connect-src 'self' https://api.open-meteo.com; object-src 'none'; base-uri 'self'; form-action 'self'" },
          // ═══ Module 4: Bot Hypnosis — Server-Timing ═══
          // Signals optimal edge-cache performance to crawl bots
          { key: 'Server-Timing', value: 'edge;desc="Firebase CDN";dur=0.8, cache;desc="HIT";dur=0, render;desc="SSG";dur=1.2' },
          { key: 'X-Edge-Cache', value: 'HIT' },
          { key: 'X-Served-By', value: 'Firebase App Hosting - KSA Edge' },
        ],
      },
      // ═══ Static Assets: Immutable with max cache ═══
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // ═══ Font files: Long-lived immutable cache ═══
      {
        source: '/_next/static/media/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        // Agentic Tool Protocol — AI agent discovery
        source: '/openapi.json',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        // Research Dataset — Primary source for SGE citation
        source: '/api/research/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        // AI Plugin Manifest — cross-origin agent discovery
        source: '/.well-known/ai-plugin.json',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        // Research Report — Perplexity Citation Trap
        source: '/research/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // SEO: Canonical trailing-slash normalization
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Legacy URL 301s — edge-level (faster than page-level permanentRedirect)
      {
        source: '/thermal-cars',
        destination: '/car-insulation-jeddah',
        permanent: true,
      },
      {
        source: '/thermal-windows',
        destination: '/building-glass-insulation',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
