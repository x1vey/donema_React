import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const cur = ref.current;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf;

    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const render = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(render);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(render);

    const onOver = (e) => {
      const t = e.target.closest('a,button,[data-cursor]');
      cur.classList.remove('is-hover', 'is-view');
      if (!t) return;
      const kind = t.getAttribute('data-cursor');
      if (kind === 'view') cur.classList.add('is-view');
      else cur.classList.add('is-hover');
    };
    window.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
