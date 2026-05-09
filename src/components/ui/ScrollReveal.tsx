'use client';
import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation delay in ms */
  delay?: number;
  /** 'up' | 'left' | 'right' | 'fade' */
  direction?: 'up' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add('sr-visible'), delay);
          } else {
            el.classList.add('sr-visible');
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass =
    direction === 'up' ? 'sr-up' :
    direction === 'left' ? 'sr-left' :
    direction === 'right' ? 'sr-right' :
    'sr-fade';

  return (
    <div ref={ref} className={`sr-hidden ${directionClass} cv-auto ${className}`}>
      {children}
    </div>
  );
}
