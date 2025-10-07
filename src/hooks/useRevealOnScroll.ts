import { useEffect } from 'react';

export default function useRevealOnScroll(options?: IntersectionObserverInit) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            // If you want the animation only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
        threshold: options?.threshold ?? 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);
}
