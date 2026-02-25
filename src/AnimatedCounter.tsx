import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  to: number;
  from?: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function AnimatedCounter({
  to,
  from = 0,
  durationMs = 900,
  suffix = '',
  prefix = '',
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [to]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const startValue = from;
    const delta = to - startValue;
    const startAt = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(startValue + delta * eased);
      setValue(next);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [durationMs, from, hasStarted, to]);

  return (
    <span ref={rootRef} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
