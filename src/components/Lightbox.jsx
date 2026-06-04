import { useEffect } from 'react';
import './Lightbox.css';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!item) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" aria-label="Close">×</button>
      <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <figcaption>
          <span>{item.title}</span>
          <em>{item.cat} · {item.place}</em>
        </figcaption>
      </figure>
    </div>
  );
}
