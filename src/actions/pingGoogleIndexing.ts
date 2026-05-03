// ═══ AzelCore — Google Indexing API VIP Backdoor ═══
// Server Action: Bypasses standard sitemap queue by directly
// notifying Google's indexing infrastructure via OAuth2.
//
// Prerequisites:
// 1. Google Cloud Service Account with Indexing API enabled
// 2. Service Account email added as owner in Search Console
// 3. JSON key file stored as GOOGLE_SERVICE_ACCOUNT_KEY env var
//
// Usage: import { pingGoogleIndexing } from '@/actions/pingGoogleIndexing';
//        await pingGoogleIndexing('https://azelcore.com/car-insulation-jeddah');

'use server';

import { SITE_URL } from '@/lib/constants';

// All critical URLs to index
const CRITICAL_URLS = [
  `${SITE_URL}`,
  `${SITE_URL}/car-insulation-jeddah`,
  `${SITE_URL}/building-glass-insulation`,
  `${SITE_URL}/johnson-authorized-dealer`,
  `${SITE_URL}/3m-authorized-dealer`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/gallery`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/about`,
  `${SITE_URL}/faq`,
  `${SITE_URL}/llms.txt`,
  `${SITE_URL}/api/research/jeddah-thermal-data`,
];

interface IndexingResult {
  url: string;
  status: 'success' | 'error';
  message: string;
}

/**
 * Authenticate with Google via Service Account and get access token
 */
async function getAccessToken(): Promise<string> {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set');
  }

  const key = JSON.parse(keyJson);

  // Build JWT
  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const claimSet = btoa(
    JSON.stringify({
      iss: key.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  // Sign JWT with private key using Web Crypto API
  const signInput = `${header}.${claimSet}`;

  // Import the private key
  const pemContents = key.private_key
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\n/g, '');
  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryDer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBuffer = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signInput)
  );

  const signature = btoa(String.fromCharCode(...new Uint8Array(signatureBuffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const jwt = `${header}.${claimSet}.${signature}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!tokenResponse.ok) {
    throw new Error(`Token exchange failed: ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

/**
 * Send a single URL notification to Google Indexing API
 */
async function notifyUrl(
  accessToken: string,
  url: string,
  type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'
): Promise<IndexingResult> {
  try {
    const response = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, type }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        url,
        status: 'success',
        message: `Notified: ${data.urlNotificationMetadata?.latestUpdate?.type || type}`,
      };
    } else {
      const error = await response.text();
      return { url, status: 'error', message: `HTTP ${response.status}: ${error}` };
    }
  } catch (err) {
    return { url, status: 'error', message: String(err) };
  }
}

/**
 * Ping Google Indexing API for a single URL
 */
export async function pingGoogleIndexing(
  url: string,
  type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'
): Promise<IndexingResult> {
  const accessToken = await getAccessToken();
  return notifyUrl(accessToken, url, type);
}

/**
 * Batch ping all critical AzelCore URLs
 */
export async function pingAllCriticalUrls(): Promise<IndexingResult[]> {
  const accessToken = await getAccessToken();
  const results = await Promise.allSettled(
    CRITICAL_URLS.map((url) => notifyUrl(accessToken, url, 'URL_UPDATED'))
  );

  return results.map((r) =>
    r.status === 'fulfilled'
      ? r.value
      : { url: 'unknown', status: 'error' as const, message: String(r.reason) }
  );
}
