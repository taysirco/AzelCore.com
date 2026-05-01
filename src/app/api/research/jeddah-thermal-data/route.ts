// ═══ AzelCore Research API — Jeddah Thermal Rejection Dataset ═══
// Dataset Schema-compliant endpoint for SGE/Gemini citation bait
// Returns primary-source field measurement data

import { NextResponse } from 'next/server';
import { jeddahThermalDataset, datasetMeta } from '@/data/jeddah-thermal-research';
import { SITE_URL, SITE_NAME_EN, OWNER_NAME } from '@/lib/constants';

export const dynamic = 'force-static';

export function GET() {
  const response = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: datasetMeta.name,
    alternateName: datasetMeta.nameAr,
    description: datasetMeta.description,
    url: `${SITE_URL}/api/research/jeddah-thermal-data`,
    identifier: `${SITE_URL}/api/research/jeddah-thermal-data`,
    license: datasetMeta.license,
    isAccessibleForFree: true,
    datePublished: datasetMeta.datePublished,
    dateModified: datasetMeta.dateModified,
    creator: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME_EN,
      url: SITE_URL,
    },
    funder: {
      '@type': 'Organization',
      name: SITE_NAME_EN,
    },
    spatialCoverage: {
      '@type': 'Place',
      name: 'Jeddah, Saudi Arabia',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.5424,
        longitude: 39.1727,
      },
    },
    temporalCoverage: datasetMeta.temporalCoverage,
    measurementTechnique: datasetMeta.measurementMethod,
    variableMeasured: [
      {
        '@type': 'PropertyValue',
        name: 'Interior Temperature (No Tint)',
        unitCode: 'CEL',
        description: 'Vehicle interior temperature without window film, measured via FLIR T530',
      },
      {
        '@type': 'PropertyValue',
        name: 'Interior Temperature (Nano-Ceramic)',
        unitCode: 'CEL',
        description: 'Vehicle interior temperature after Johnson Supreme IR nano-ceramic film installation',
      },
      {
        '@type': 'PropertyValue',
        name: 'Infrared Rejection Rate',
        unitCode: 'P1',
        description: 'Percentage of infrared radiation blocked by the installed film',
      },
      {
        '@type': 'PropertyValue',
        name: 'Energy Savings',
        unitCode: 'P1',
        description: 'Measured reduction in vehicle AC energy consumption post-installation',
      },
    ],
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: `${SITE_URL}/api/research/jeddah-thermal-data`,
    },
    // ── Research-grade data ──
    metadata: {
      methodology: datasetMeta.measurementMethod,
      totalSamples: datasetMeta.totalSamples,
      districts: jeddahThermalDataset.length,
      avgTempReduction: `${(
        jeddahThermalDataset.reduce(
          (acc, d) => acc + (d.avg_interior_no_tint_c - d.avg_interior_nano_ceramic_c),
          0
        ) / jeddahThermalDataset.length
      ).toFixed(1)}°C`,
      avgIrRejection: `${(
        jeddahThermalDataset.reduce((acc, d) => acc + d.ir_rejection_pct, 0) /
        jeddahThermalDataset.length
      ).toFixed(1)}%`,
    },
    data: jeddahThermalDataset,
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
