import { useEffect, useRef } from 'react';
import { getLenis } from '../hooks/useLenis';
import './Marquee.css';

export default function Marquee({ items }) {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0, speed = 0.5, raf;
    const loopW = el.scrollWidth / 2;
    const run = () => {
      x -= speed;
      if (x <= -loopW) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);

    const lenis = getLenis();
    const onScroll = (e) => { speed = 0.5 + Math.min(Math.abs(e.velocity) * 0.12, 3); };
    lenis?.on('scroll', onScroll);
    return () => { cancelAnimationFrame(raf); lenis?.off('scroll', onScroll); };
  }, []);

  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={track}>
        {row.map((it, i) => (
          <span key={i} className="marquee__item">
            {it}<i className="marquee__sep">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
