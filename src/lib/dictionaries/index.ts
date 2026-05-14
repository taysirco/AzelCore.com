// ═══ AzelCore.com — Dictionary Loader ═══
// Centralized dictionary access by locale

import type { Locale } from '@/lib/i18n';
import { ar, type Dictionary } from './ar';
import { en } from './en';

const dictionaries: Record<Locale, Dictionary> = { ar, en };

/** Get the dictionary for a given locale */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.ar;
}

export type { Dictionary };
export { ar, en };
