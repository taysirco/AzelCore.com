// ═══ Blog Content — Barrel Index ═══
// Each article is a separate module for code-splitting and faster builds

import type { ArticleModule } from './types';

import tintLaws from './tint-laws-saudi-2026';
import nanoCeramic from './nano-ceramic-vs-carbon-vs-3m';
import bestCarTint from './best-car-tint-jeddah-2026';
import buildingInsulation from './building-insulation-electricity-savings';
import spotFakeTint from './how-to-spot-fake-tint';
import ppfVsCeramic from './ppf-vs-ceramic-coating';
import jeddahHeat from './jeddah-heat-car-damage';
import signalInterference from './tint-signal-interference';
import vision2030 from './vision-2030-energy-efficiency';
import tintMaintenance from './car-tint-maintenance-guide';
import commercialBuildingTint from './commercial-building-tint-jeddah';
import evRangeTint from './ev-range-window-tint';
import clearWindshieldTint from './clear-windshield-tint-3m';
import tintRemovalDefroster from './tint-removal-defroster-lines';
import uvProtectionHealth from './uv-protection-car-tint-health';
import residentialPrivacy from './residential-privacy-tinting';
import roiCalculator from './roi-calculator-commercial-tint';
import flirThermalTest from './flir-thermal-camera-tint-test';

export type { ArticleModule, ArticleData, ArticleSection, ArticleServiceLink } from './types';

/** All articles keyed by slug */
export const articles: Record<string, ArticleModule> = {
  'tint-laws-saudi-2026': tintLaws,
  'nano-ceramic-vs-carbon-vs-3m': nanoCeramic,
  'best-car-tint-jeddah-2026': bestCarTint,
  'building-insulation-electricity-savings': buildingInsulation,
  'how-to-spot-fake-tint': spotFakeTint,
  'ppf-vs-ceramic-coating': ppfVsCeramic,
  'jeddah-heat-car-damage': jeddahHeat,
  'tint-signal-interference': signalInterference,
  'vision-2030-energy-efficiency': vision2030,
  'car-tint-maintenance-guide': tintMaintenance,
  'commercial-building-tint-jeddah': commercialBuildingTint,
  'ev-range-window-tint': evRangeTint,
  'clear-windshield-tint-3m': clearWindshieldTint,
  'tint-removal-defroster-lines': tintRemovalDefroster,
  'uv-protection-car-tint-health': uvProtectionHealth,
  'residential-privacy-tinting': residentialPrivacy,
  'roi-calculator-commercial-tint': roiCalculator,
  'flir-thermal-camera-tint-test': flirThermalTest,
};

/** All available slugs (for generateStaticParams) */
export const articleSlugs = Object.keys(articles);
