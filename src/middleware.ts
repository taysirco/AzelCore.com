import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge Middleware — Firebase Geo Personalization (Cookie Strategy)
 * 
 * Reads Firebase App Hosting edge headers to detect Jeddah users.
 * Sets a lightweight `x-geo-city` COOKIE (not header) so SSG pages
 * remain fully static. A client component reads the cookie after hydration.
 * 
 * ⚠️ CRITICAL: We do NOT use headers() in server components.
 *    Using headers() forces SSR de-opt and kills our SSG performance.
 */

const JEDDAH_REGIONS = ['SA-02', 'SA-MK', 'makkah', 'jeddah'];

function isJeddahUser(request: NextRequest): boolean {
  // 1. Firebase App Hosting geo region header
  const geoRegion = request.headers.get('x-client-geo-region')?.toLowerCase() || '';
  if (JEDDAH_REGIONS.some(r => geoRegion.includes(r))) return true;

  // 2. Cloudflare/Vercel fallback
  const geoCity = request.headers.get('x-vercel-ip-city')?.toLowerCase() ||
                  request.headers.get('cf-ipcity')?.toLowerCase() || '';
  if (geoCity.includes('jeddah') || geoCity.includes('jiddah') || geoCity.includes('جدة')) return true;

  // 3. GPS bounding box
  const geoLocation = request.headers.get('x-client-geo-location');
  if (geoLocation) {
    const [lat, lng] = geoLocation.split(',').map(Number);
    if (lat >= 21.2 && lat <= 21.8 && lng >= 39.0 && lng <= 39.4) return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const isJeddah = isJeddahUser(request);
  const geoValue = isJeddah ? 'jeddah' : 'other';

  const response = NextResponse.next();

  // Set lightweight cookie — readable by client components via document.cookie
  // httpOnly: false so JS can read it. SameSite: Lax for security.
  response.cookies.set('x-geo-city', geoValue, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

export const config = {
  matcher: [
    '/',
    '/car-insulation-jeddah',
    '/car-insulation-jeddah/:district*',
    '/building-glass-insulation',
    '/johnson-authorized-dealer',
    '/3m-authorized-dealer',
    '/calculator',
    '/contact',
    '/about',
    '/faq',
    '/gallery',
    '/blog',
    '/blog/:slug*',
  ],
};
