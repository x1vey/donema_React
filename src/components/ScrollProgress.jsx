import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0, height: '2px', width: '100%',
        transformOrigin: 'left', transform: 'scaleX(0)', zIndex: 9998,
        background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
      }}
    />
  );
}
