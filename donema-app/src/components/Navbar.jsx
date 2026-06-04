import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site, nav } from '../data/site';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="nav__logo" data-cursor="hover" aria-label="Donema Construction Vision — home">
          <img src="/brand/logo.png" alt="Donema Construction Vision" className="nav__logo-img" />
        </Link>

        <nav className="nav__links">
          {nav.slice(1, 7).map((n) => (
            <NavLink key={n.to} to={n.to} data-cursor="hover"
              className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__right">
          <a href={`tel:${site.phoneRaw}`} className="nav__cta" data-cursor="hover">
            {site.phone}
          </a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`menu ${open ? 'is-open' : ''}`}>
        <nav className="menu__links">
          {nav.map((n, i) => (
            <NavLink key={n.to} to={n.to} style={{ '--i': i }}
              className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </div>
      </div>
    </>
  );
}
