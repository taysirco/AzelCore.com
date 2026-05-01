'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'auto';

const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (t: Theme) => void;
}>({
  theme: 'auto',
  resolvedTheme: 'dark',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// Solar calculation — simplified Sunrise/Sunset
function calculateSunTimes(lat: number, lng: number, date: Date) {
  const rad = Math.PI / 180;
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const declination = -23.45 * Math.cos(rad * (360 / 365) * (dayOfYear + 10));
  const hourAngle = Math.acos(
    (-Math.tan(lat * rad) * Math.tan(declination * rad))
  ) / rad;
  const solarNoon = 12 - lng / 15;
  const sunrise = solarNoon - hourAngle / 15;
  const sunset = solarNoon + hourAngle / 15;

  const toDate = (hours: number) => {
    const d = new Date(date);
    d.setHours(Math.floor(hours), (hours % 1) * 60, 0, 0);
    return d;
  };
  return { sunrise: toDate(sunrise), sunset: toDate(sunset) };
}

function getAutoResolvedTheme(lat?: number, lng?: number): 'dark' | 'light' {
  const now = new Date();
  // Default Jeddah coordinates
  const useLat = lat ?? 21.5;
  const useLng = lng ?? 39.2;
  try {
    const { sunrise, sunset } = calculateSunTimes(useLat, useLng, now);
    return now > sunrise && now < sunset ? 'light' : 'dark';
  } catch {
    // Fallback: 6 AM - 6 PM
    const hour = now.getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('auto');
  const [resolvedTheme, setResolved] = useState<'dark' | 'light'>('dark');
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null);

  const resolveTheme = useCallback(
    (t: Theme, coords?: { lat: number; lng: number } | null) => {
      if (t === 'auto') {
        return getAutoResolvedTheme(coords?.lat, coords?.lng);
      }
      return t;
    },
    []
  );

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('azelcore-theme') as Theme | null;
    if (saved) {
      setThemeState(saved);
    }
  }, []);

  // Try to get geolocation (once)
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {}, // Silently fail — use Jeddah default
        { timeout: 5000, maximumAge: 3600000 }
      );
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const resolved = resolveTheme(theme, geo);
    setResolved(resolved);
    document.documentElement.setAttribute('data-theme', resolved);

    // Re-check every 10 minutes if auto
    if (theme === 'auto') {
      const interval = setInterval(() => {
        const newResolved = resolveTheme('auto', geo);
        setResolved(newResolved);
        document.documentElement.setAttribute('data-theme', newResolved);
      }, 600000);
      return () => clearInterval(interval);
    }
  }, [theme, geo, resolveTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem('azelcore-theme', t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
