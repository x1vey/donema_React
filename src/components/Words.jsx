import { useReveal } from '../hooks/useReveal';

/* Splits text into word spans for a staggered reveal.
   Usage: <Words as="h2" className="h-lg" text="Some headline" /> */
export default function Words({ as = 'h2', text, className = '', stagger = 0.035 }) {
  const ref = useReveal({ stagger });
  const Tag = as;
  const parts = text.split(' ');
  return (
    <Tag ref={ref} className={className}>
      {parts.map((w, i) => (
        <span className="r-word" key={i}>
          {w}
          {i < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
