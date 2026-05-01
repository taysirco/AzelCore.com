// ═══ LiveJeddahWeatherBanner — QDF Weather-Sync (ISR) ═══
// Server Component — fetches real-time Jeddah weather via Open-Meteo
// ISR: revalidates every 1 hour (3600s)
// Only renders if temperature > 33°C

import { WHATSAPP_LINK } from '@/lib/constants';
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

const alertConfig: Record<AlertLevel, { icon: string; prefix: string; message: string }> = {
  extreme: {
    icon: '🔴',
    prefix: 'تنبيه خطر شديد',
    message: 'حرارة قاتلة للتظليل الرخيص. سيارتك تحتاج نانو سيراميك الآن.',
  },
  high: {
    icon: '🟠',
    prefix: 'تنبيه حرارة مرتفعة',
    message: 'الحرارة تتجاوز الحد — التظليل العادي لن يحميك.',
  },
  moderate: {
    icon: '🟡',
    prefix: 'حرارة معتدلة-مرتفعة',
    message: 'ننصح بحماية سيارتك قبل موسم الذروة.',
  },
};

export default async function LiveJeddahWeatherBanner() {
  const weather = await getJeddahWeather();
  if (!weather) return null;

  const temp = Math.round(weather.current.temperature_2m);
  const uv = weather.current.uv_index;
  const level = getAlertLevel(temp);

  if (!level) return null;

  const config = alertConfig[level];

  return (
    <div className={`${styles.banner} ${styles[level]}`} role="alert" aria-live="polite">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.icon}>{config.icon}</span>
          <div className={styles.textBlock}>
            <strong className={styles.prefix}>{config.prefix}: جدة الآن {temp}°C</strong>
            <span className={styles.separator}>|</span>
            <span className={styles.uvBadge}>UV: {uv.toFixed(1)}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.message}>{config.message}</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            احمِ سيارتك الآن ←
          </a>
        </div>
      </div>
    </div>
  );
}
