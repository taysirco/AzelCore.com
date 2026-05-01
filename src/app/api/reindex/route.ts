// ═══ AzelCore — Reindex API Route ═══
// Protected endpoint to trigger batch Google Indexing API notifications
// Auth: Bearer token (REINDEX_SECRET env var)

import { NextRequest, NextResponse } from 'next/server';
import { pingAllCriticalUrls, pingGoogleIndexing } from '@/actions/pingGoogleIndexing';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // ── Auth Check ──
  const authHeader = request.headers.get('authorization');
  const secret = process.env.REINDEX_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json(
      { error: 'Unauthorized — invalid or missing Bearer token' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json().catch(() => null);

    // Single URL mode
    if (body?.url) {
      const result = await pingGoogleIndexing(
        body.url,
        body.type || 'URL_UPDATED'
      );
      return NextResponse.json({
        mode: 'single',
        result,
        timestamp: new Date().toISOString(),
      });
    }

    // Batch mode — all critical URLs
    const results = await pingAllCriticalUrls();
    const summary = {
      total: results.length,
      success: results.filter((r) => r.status === 'success').length,
      errors: results.filter((r) => r.status === 'error').length,
    };

    return NextResponse.json({
      mode: 'batch',
      summary,
      results,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: 'Indexing API error',
        message: String(err),
        hint: 'Ensure GOOGLE_SERVICE_ACCOUNT_KEY env var is set with valid JSON key',
      },
      { status: 500 }
    );
  }
}
