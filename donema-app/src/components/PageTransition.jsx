import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/* Keyed fade/slide on route change. */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return (
    <main className="page" key={pathname}>
      {children}
    </main>
  );
}
