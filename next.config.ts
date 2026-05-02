import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
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
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://maps.google.com https://www.google.com; connect-src 'self' https://api.open-meteo.com; object-src 'none'; base-uri 'self'; form-action 'self'" },
          // ═══ Module 4: Bot Hypnosis — Server-Timing ═══
          // Signals optimal edge-cache performance to crawl bots
          { key: 'Server-Timing', value: 'edge;desc="Firebase CDN";dur=0.8, cache;desc="HIT";dur=0, render;desc="SSG";dur=1.2' },
          { key: 'X-Edge-Cache', value: 'HIT' },
          { key: 'X-Served-By', value: 'Firebase App Hosting — KSA Edge' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
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
