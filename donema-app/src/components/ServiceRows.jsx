import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { serviceList } from '../data/services';
import './ServiceRows.css';

export default function ServiceRows() {
  const hoverRef = useRef(null);
  const imgRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = hoverRef.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, started = false, raf;
    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!started) { x = tx; y = ty; started = true; } // snap on first move
    };
    const render = () => {
      x += (tx - x) * 0.14; y += (ty - y) * 0.14;
      el.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(render);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(render);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  // preload thumbnail variants so the first hover is instant
  useEffect(() => {
    serviceList.forEach((s) => { const i = new Image(); i.src = s.hero.replace(/w=\d+/, 'w=620'); });
  }, []);

  const enter = (src) => {
    if (imgRef.current) imgRef.current.src = src.replace(/w=\d+/, 'w=620');
    setActive(true);
  };

  return (
    <div className="srv-list">
      {serviceList.map((s) => (
        <Link
          to={`/${s.slug}`}
          key={s.slug}
          className="srv-row"
          data-cursor="hover"
          onMouseEnter={() => enter(s.hero)}
          onMouseLeave={() => setActive(false)}
        >
          <span className="srv-row__no">{s.index}</span>
          <h3 className="srv-row__name">{s.eyebrow}</h3>
          <p className="srv-row__desc">{s.lead}</p>
          <span className="srv-row__arrow">→</span>
        </Link>
      ))}
      {createPortal(
        <div className={`srv-hover ${active ? 'is-active' : ''}`} ref={hoverRef} aria-hidden="true">
          <img ref={imgRef} alt="" />
        </div>,
        document.body
      )}
    </div>
  );
}
