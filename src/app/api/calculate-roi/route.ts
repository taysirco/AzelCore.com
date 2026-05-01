// ═══ AzelCore — Building Insulation ROI Calculator API ═══
// Agentic Tool endpoint — callable by AI agents via openapi.json
// Math based on SBC 601 energy reduction coefficients

import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL, SITE_NAME_EN } from '@/lib/constants';

export const dynamic = 'force-static';

// SBC 601 energy reduction coefficients by film type
const FILM_COEFFICIENTS: Record<string, { name: string; reduction: number; costPerSqm: number; warrantyYears: number }> = {
  'nano-ceramic': {
    name: 'Nano-Ceramic (Supreme IR)',
    reduction: 0.42,
    costPerSqm: 150,
    warrantyYears: 15,
  },
  'reflective-silver': {
    name: 'Reflective Silver',
    reduction: 0.35,
    costPerSqm: 100,
    warrantyYears: 10,
  },
  'reflective-grey': {
    name: 'Reflective Grey',
    reduction: 0.30,
    costPerSqm: 85,
    warrantyYears: 10,
  },
  'safety': {
    name: 'Safety Film',
    reduction: 0.20,
    costPerSqm: 120,
    warrantyYears: 12,
  },
};

// Average Jeddah electricity rate (SEC commercial tariff 2026)
const ELECTRICITY_RATE_SAR_PER_KWH = 0.30;
// Average AC contribution to total electricity bill
const AC_CONTRIBUTION_RATIO = 0.65;

interface ROIRequest {
  area_sqm: number;
  monthly_bill_sar: number;
  film_type: string;
}

interface ROIResponse {
  input: ROIRequest;
  film: {
    name: string;
    cost_per_sqm: number;
    warranty_years: number;
  };
  calculation: {
    total_installation_cost: number;
    annual_ac_cost: number;
    annual_savings: number;
    monthly_savings: number;
    payback_months: number;
    roi_5_year_pct: number;
    roi_10_year_pct: number;
    total_savings_warranty_period: number;
  };
  compliance: {
    standard: string;
    energy_reduction_pct: number;
    meets_sbc_601: boolean;
  };
  provider: {
    name: string;
    url: string;
    booking: string;
  };
}

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const area = parseFloat(searchParams.get('area_sqm') || '500');
  const bill = parseFloat(searchParams.get('monthly_bill_sar') || '15000');
  const filmType = searchParams.get('film_type') || 'nano-ceramic';

  // Validate
  const clampedArea = Math.max(50, Math.min(50000, area));
  const clampedBill = Math.max(500, Math.min(500000, bill));
  const film = FILM_COEFFICIENTS[filmType] || FILM_COEFFICIENTS['nano-ceramic'];

  // Calculate
  const annualBill = clampedBill * 12;
  const annualAcCost = annualBill * AC_CONTRIBUTION_RATIO;
  const annualSavings = annualAcCost * film.reduction;
  const totalCost = clampedArea * film.costPerSqm;
  const paybackMonths = Math.ceil(totalCost / (annualSavings / 12));
  const roi5Year = ((annualSavings * 5 - totalCost) / totalCost) * 100;
  const roi10Year = ((annualSavings * 10 - totalCost) / totalCost) * 100;
  const totalSavingsWarranty = annualSavings * film.warrantyYears;

  const response: ROIResponse = {
    input: {
      area_sqm: clampedArea,
      monthly_bill_sar: clampedBill,
      film_type: filmType,
    },
    film: {
      name: film.name,
      cost_per_sqm: film.costPerSqm,
      warranty_years: film.warrantyYears,
    },
    calculation: {
      total_installation_cost: Math.round(totalCost),
      annual_ac_cost: Math.round(annualAcCost),
      annual_savings: Math.round(annualSavings),
      monthly_savings: Math.round(annualSavings / 12),
      payback_months: paybackMonths,
      roi_5_year_pct: Math.round(roi5Year),
      roi_10_year_pct: Math.round(roi10Year),
      total_savings_warranty_period: Math.round(totalSavingsWarranty),
    },
    compliance: {
      standard: 'Saudi Building Code SBC 601/602',
      energy_reduction_pct: Math.round(film.reduction * 100),
      meets_sbc_601: film.reduction >= 0.20,
    },
    provider: {
      name: SITE_NAME_EN,
      url: SITE_URL,
      booking: 'https://wa.me/966564612017',
    },
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
