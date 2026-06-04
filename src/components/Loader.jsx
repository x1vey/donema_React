import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPct(100); setHide(true); onDone?.(); return;
    }
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 16 + 5;
      if (p >= 100) {
        p = 100; clearInterval(t);
        setPct(100);
        setTimeout(() => { setHide(true); onDone?.(); }, 450);
      } else setPct(Math.floor(p));
    }, 120);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className={`loader ${hide ? 'is-hide' : ''}`}>
      <div className="loader__inner">
        <div className="loader__brand">DONEMA</div>
        <div className="loader__bar"><span style={{ width: `${pct}%` }} /></div>
        <div className="loader__count">{pct}%</div>
      </div>
    </div>
  );
}
