"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
  decimals?: number;
};

export function CountUp({ value, suffix = "", className = "", decimals = 1 }: CountUpProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const duration = 850;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Number((value * eased).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };

        setDisplay(0);
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [decimals, value]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)} {suffix}
    </span>
  );
}
