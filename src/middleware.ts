import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge Middleware — Firebase Geo Personalization
 * 
 * Reads Firebase App Hosting edge headers to detect user location.
 * Sets `x-geo-city` response header for RSC consumption via headers().
 * No URL rewrites or redirects — preserves canonical URLs for SEO.
 * 
 * Firebase App Hosting sets:
 *   - X-Client-Geo-Region: "SA-02" (Makkah Region = Jeddah)
 *   - X-Forwarded-For: client IP
 *   - X-Client-Geo-Location: lat,lng
 */

// Jeddah = Makkah Region (SA-02) in ISO 3166-2:SA
const JEDDAH_REGIONS = ['SA-02', 'SA-MK', 'makkah', 'jeddah'];

function isJeddahUser(request: NextRequest): boolean {
  // 1. Firebase App Hosting geo region header (primary signal)
  const geoRegion = request.headers.get('x-client-geo-region')?.toLowerCase() || '';
  if (JEDDAH_REGIONS.some(r => geoRegion.includes(r))) return true;

  // 2. Cloudflare/Vercel geo city header (fallback)
  const geoCity = request.headers.get('x-vercel-ip-city')?.toLowerCase() ||
                  request.headers.get('cf-ipcity')?.toLowerCase() || '';
  if (geoCity.includes('jeddah') || geoCity.includes('jiddah') || geoCity.includes('جدة')) return true;

  // 3. Firebase geo location coordinates (Jeddah bounding box)
  const geoLocation = request.headers.get('x-client-geo-location');
  if (geoLocation) {
    const [lat, lng] = geoLocation.split(',').map(Number);
    // Jeddah bounding box: ~21.2-21.8 lat, ~39.0-39.4 lng
    if (lat >= 21.2 && lat <= 21.8 && lng >= 39.0 && lng <= 39.4) return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  
  // Determine geo context
  const isJeddah = isJeddahUser(request);
  requestHeaders.set('x-geo-city', isJeddah ? 'jeddah' : 'other');
  
  // Pass timestamp for cache-busting awareness
  requestHeaders.set('x-geo-ts', Date.now().toString());

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Expose geo header for client-side awareness (optional)
  response.headers.set('x-geo-city', isJeddah ? 'jeddah' : 'other');
  
  // Security: Prevent MIME sniffing on all routes
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match service pages and homepage only.
     * Skip: /api, /_next/static, /_next/image, /images, /favicon, .well-known
     */
    '/',
    '/car-insulation-jeddah',
    '/building-glass-insulation',
    '/johnson-authorized-dealer',
    '/thermal-cars',
    '/thermal-windows',
    '/contact',
  ],
};
