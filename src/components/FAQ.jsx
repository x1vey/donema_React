import { useState, useRef } from 'react';
import './FAQ.css';

function Item({ q, a, isOpen, onToggle }) {
  const body = useRef(null);
  return (
    <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq__q" onClick={onToggle} data-cursor="hover">
        <span>{q}</span>
        <span className="faq__icon" aria-hidden="true" />
      </button>
      <div
        className="faq__a"
        style={{ height: isOpen ? body.current?.scrollHeight : 0 }}
      >
        <p ref={body}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <Item key={i} {...it} isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}
