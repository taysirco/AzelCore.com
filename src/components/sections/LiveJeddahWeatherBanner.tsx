// ═══ LiveJeddahWeatherBanner — QDF Weather-Sync (ISR) ═══
// Server Component — fetches real-time Jeddah weather via Open-Meteo
// ISR: revalidates every 1 hour (3600s)
// Only renders if temperature > 33°C

import { getWhatsAppLink } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import styles from './LiveJeddahWeatherBanner.module.css';

interface WeatherData {
  current: {
    temperature_2m: number;
    uv_index: number;
  };
}

async function getJeddahWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=21.5424&longitude=39.1727&current=temperature_2m,uv_index&timezone=Asia/Riyadh',
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

type AlertLevel = 'extreme' | 'high' | 'moderate';

function getAlertLevel(temp: number): AlertLevel | null {
  if (temp > 45) return 'extreme';
  if (temp > 39) return 'high';
  if (temp > 33) return 'moderate';
  return null;
}

export default async function LiveJeddahWeatherBanner({ locale = 'ar' }: { locale?: string }) {
  const weather = await getJeddahWeather();
  if (!weather) return null;

  const temp = Math.round(weather.current.temperature_2m);
  const uv = weather.current.uv_index;
  const level = getAlertLevel(temp);

  if (!level) return null;

  const dict = getDictionary(locale as Locale);
  const alertConfig = dict.weatherBanner[level] as { prefix: string; message: string };
  const whatsappLink = getWhatsAppLink(locale as Locale);

  const alertIcons: Record<AlertLevel, string> = { extreme: '🔴', high: '🟠', moderate: '🟡' };

  return (
    <div className={`${styles.banner} ${styles[level]}`} role="alert" aria-live="polite" data-nosnippet>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.icon}>{alertIcons[level]}</span>
          <div className={styles.textBlock}>
            <strong className={styles.prefix}>{alertConfig.prefix}: {dict.weatherBanner.jeddahNow} {temp}°C</strong>
            <span className={styles.separator}>|</span>
            <span className={styles.uvBadge}>UV: {uv.toFixed(1)}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.message}>{alertConfig.message}</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {dict.weatherBanner.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
