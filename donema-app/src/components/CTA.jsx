import { Link } from 'react-router-dom';
import { site } from '../data/site';
import Words from './Words';
import Reveal from './Reveal';
import './CTA.css';

/* Reusable call-to-action band used at the bottom of most pages. */
export default function CTA({
  title = 'Ready to start your project?',
  text = 'Free consultation, transparent quote, and a team that treats your home like its own.',
  button = 'Get a Free Consultation',
}) {
  return (
    <section className="cta">
      <div className="cta__glow" />
      <div className="wrap cta__inner">
        <Reveal className="cta__tag">
          <p className="section-tag"><span>✦</span> Let’s build</p>
        </Reveal>
        <Words as="h2" className="h-xl cta__title" text={title} stagger={0.045} />
        <Reveal className="cta__text" delay={0.1}>{text}</Reveal>
        <Reveal className="cta__actions" delay={0.18}>
          <Link to="/contact" className="btn btn--solid" data-cursor="hover">
            <span>{button}</span>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <a href={`tel:${site.phoneRaw}`} className="btn btn--ghost" data-cursor="hover">
            Call {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
