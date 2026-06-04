import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ num, suffix = '', text }) {
  const ref = useRef(null);
  const [val, setVal] = useState(text ? text : 0);

  useEffect(() => {
    if (text) return;
    const el = ref.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVal(num); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(el);
        const start = performance.now();
        const dur = 1700;
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(eased * num));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [num, text]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat__num">{val}{!text && suffix}</div>
    </div>
  );
}
