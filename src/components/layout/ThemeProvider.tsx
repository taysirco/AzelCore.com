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

// Lightweight auto-theme: use time-of-day only (no geolocation API call)
function getAutoResolvedTheme(): 'dark' | 'light' {
  const hour = new Date().getHours();
  // Jeddah: ~6AM sunrise, ~6:30PM sunset (avg). Use 6-18 for simplicity.
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('auto');
  const [resolvedTheme, setResolved] = useState<'dark' | 'light'>('dark');

  const resolveTheme = useCallback(
    (t: Theme) => t === 'auto' ? getAutoResolvedTheme() : t,
    []
  );

  // Load saved preference + apply immediately (single effect, no cascade)
  useEffect(() => {
    const saved = localStorage.getItem('azelcore-theme') as Theme | null;
    const t = saved || 'auto';
    setThemeState(t);
    const resolved = resolveTheme(t);
    setResolved(resolved);
    document.documentElement.setAttribute('data-theme', resolved);

    // Re-check every 30 minutes if auto (was 10 min — reduced wakeups)
    if (t === 'auto') {
      const interval = setInterval(() => {
        const newResolved = getAutoResolvedTheme();
        setResolved(newResolved);
        document.documentElement.setAttribute('data-theme', newResolved);
      }, 1800000); // 30 min
      return () => clearInterval(interval);
    }
  }, [resolveTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem('azelcore-theme', t);
    const resolved = t === 'auto' ? getAutoResolvedTheme() : t;
    setResolved(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
