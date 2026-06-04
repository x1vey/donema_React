import { useReveal } from '../hooks/useReveal';

/* Generic fade-up wrapper. Pass delay (s) for simple staggering. */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
