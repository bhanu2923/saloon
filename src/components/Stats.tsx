import { useEffect, useRef, useState } from 'react';

function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.2, ...(options || {}) }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

function CountUpNumber({
  target,
  duration = 1200,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic for a nice finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="reveal relative py-20 px-4"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-semibold text-amber-400">
              <CountUpNumber target={6} suffix="" />
              <span className="align-top text-3xl">+</span>
            </div>
            <div className="text-xl md:text-2xl text-white">Locations Pan India</div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-semibold text-amber-400">
              <CountUpNumber target={2} suffix="" />
              <span className="align-top text-3xl">+</span>
            </div>
            <div className="text-xl md:text-2xl text-white">Decades Of Experience</div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-semibold text-amber-400">
              <CountUpNumber target={100} suffix="K" />
              <span className="align-top text-3xl">+</span>
            </div>
            <div className="text-xl md:text-2xl text-white">Smiles Spread</div>
          </div>
        </div>
      </div>
    </section>
  );
}
