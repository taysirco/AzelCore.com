// ═══ AzelCore — Building Insulation ROI Calculator API ═══
// Agentic Tool endpoint — callable by AI agents via openapi.json
// Math based on SBC 601 energy reduction coefficients

import { NextRequest, NextResponse } from 'next/server';
import { calculateRoi } from '@/lib/roi';

// Dynamic: reads query params at runtime; Cache-Control handles CDN caching.

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const area = parseFloat(searchParams.get('area_sqm') || '500');
  const bill = parseFloat(searchParams.get('monthly_bill_sar') || '15000');
  const filmType = searchParams.get('film_type') || 'nano-ceramic';

  const response = calculateRoi(area, bill, filmType);

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
