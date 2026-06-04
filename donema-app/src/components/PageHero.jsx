import { useEffect, useRef } from 'react';
import Words from './Words';
import './PageHero.css';

/* Inner-page hero with a parallaxing image and split-word title. */
export default function PageHero({ eyebrow, title, lead, image, index }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${y * 0.18}px) scale(1.08)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header className="phero">
      <div className="phero__media">
        <img ref={imgRef} src={image} alt={title} />
        <div className="phero__veil" />
      </div>
      <div className="wrap phero__inner">
        {index && <span className="phero__index">{index}</span>}
        <p className="section-tag phero__eyebrow">
          <span>✦</span> {eyebrow}
        </p>
        <Words as="h1" className="display phero__title" text={title} stagger={0.04} />
        {lead && <p className="phero__lead">{lead}</p>}
      </div>
      <div className="phero__scroll"><span>Scroll</span><i /></div>
    </header>
  );
}
