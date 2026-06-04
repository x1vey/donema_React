import { Link } from 'react-router-dom';
import { site, serviceLinks } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/brand/logo.png" alt="Donema Construction Vision Ltd" className="footer__logo" />
          </div>
          <p className="footer__tag">
            Expert building &amp; renovations across {site.area}. Traditional
            craftsmanship, modern project management — for over 18 years.
          </p>
          <a href="#top" className="footer__back" data-cursor="hover">Back to top ↑</a>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Services</h4>
            {serviceLinks.map((s) => (
              <Link key={s.to} to={s.to}>{s.label}</Link>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>Email us</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
            <h4>Visit</h4>
            <p className="footer__addr">{site.address}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.legalName}</span>
          <span>{site.certs.join(' · ')}</span>
        </div>
      </div>
    </footer>
  );
}
