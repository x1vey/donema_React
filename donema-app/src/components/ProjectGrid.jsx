import { useReveal } from '../hooks/useReveal';
import './ProjectGrid.css';

function Card({ item, onOpen }) {
  const ref = useReveal();
  return (
    <figure
      ref={ref}
      className={`pcard reveal ${item.size ? `pcard--${item.size}` : ''}`}
      data-cursor="view"
      onClick={() => onOpen?.(item)}
    >
      <img src={item.src} alt={item.title} loading="lazy" />
      <figcaption>
        <span>{item.title}</span>
        <em>{item.place}</em>
      </figcaption>
    </figure>
  );
}

export default function ProjectGrid({ items, onOpen }) {
  return (
    <div className="pgrid">
      {items.map((item, i) => (
        <Card key={item.title + i} item={item} onOpen={onOpen} />
      ))}
    </div>
  );
}
