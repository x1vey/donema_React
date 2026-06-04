import { useEffect, useRef } from 'react';

/* IntersectionObserver-based reveal — adds .is-in once in view.
   Works for .reveal blocks and staggered .r-word children. */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const { stagger = 0.04, once = true, threshold = 0.18 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll('.r-word');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      el.classList.add('is-in');
      words.forEach((w) => (w.style.opacity = 1));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          el.classList.add('is-in');
          words.forEach((w, i) => {
            w.style.transition = `opacity .7s var(--ease) ${i * stagger}s, transform .7s var(--ease) ${i * stagger}s`;
            w.style.opacity = 1;
            w.style.transform = 'none';
          });
          if (once) io.unobserve(el);
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, once, threshold]);

  return ref;
}
