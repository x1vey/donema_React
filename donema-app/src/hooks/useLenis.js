import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

let lenisInstance = null;
export const getLenis = () => lenisInstance;

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useLenis() {
  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisInstance = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

// Scroll to top (or hash target) on route change
export function useScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        lenis ? lenis.scrollTo(el, { offset: -80 }) : el.scrollIntoView();
        return;
      }
    }
    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
  }, [pathname, hash]);
}
