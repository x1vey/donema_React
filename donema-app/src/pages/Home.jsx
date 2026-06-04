import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { stats, process, gallery, reviews } from '../data/content';
import Words from '../components/Words';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import ServiceRows from '../components/ServiceRows';
import ProjectGrid from '../components/ProjectGrid';
import StatCounter from '../components/StatCounter';
import ReviewCard from '../components/ReviewCard';
import CTA from '../components/CTA';
import './Home.css';

export default function Home() {
  const heroImg = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // entrance for hero title lines
    const lines = titleRef.current?.querySelectorAll('.hl-inner');
    if (lines && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lines.forEach((l, i) => {
        l.style.transform = 'translateY(110%)';
        requestAnimationFrame(() => {
          l.style.transition = `transform 1.1s var(--ease) ${0.15 + i * 0.12}s`;
          l.style.transform = 'translateY(0)';
        });
      });
    }
    // hero parallax
    const el = heroImg.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * 0.2}px) scale(1.08)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hhero">
        <div className="hhero__media">
          <img ref={heroImg} src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80" alt="Construction site" />
          <div className="hhero__veil" />
        </div>
        <div className="wrap hhero__inner">
          <Reveal className="hhero__eyebrow">
            <span className="dot" /> {site.area} · Est. {site.established}
          </Reveal>
          <h1 className="display hhero__title" ref={titleRef}>
            <span className="hl"><span className="hl-inner">We Build</span></span>
            <span className="hl"><span className="hl-inner">What Moves</span></span>
            <span className="hl"><span className="hl-inner"><em className="em">You Forward.</em></span></span>
          </h1>
          <Reveal className="hhero__sub" delay={0.1}>
            Expert building, renovations &amp; extensions — crafted with traditional
            skill and modern project management for over 18 years.
          </Reveal>
          <Reveal className="hhero__actions" delay={0.2}>
            <Link to="/contact" className="btn btn--solid" data-cursor="hover">
              <span>Start your project</span>
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link to="/gallery" className="btn btn--ghost" data-cursor="hover">View our work</Link>
          </Reveal>
        </div>
        <div className="hhero__badges">
          {site.certs.map((c) => {
            const [a, ...b] = c.split(' ');
            return (
              <div className="hbadge" key={c}>
                {a}<em>{b.join(' ')}</em>
              </div>
            );
          })}
        </div>
      </section>

      <Marquee items={['Renovations', 'Extensions', 'Kitchens', 'Bathrooms', 'Loft Conversions', 'Brickwork', 'Refurbishment']} />

      {/* INTRO */}
      <section className="section">
        <div className="wrap intro">
          <div className="intro__lead">
            <Reveal><p className="section-tag"><span>01</span> Who we are</p></Reveal>
            <Words as="h2" className="h-md intro__head"
              text="A Hertfordshire firm where traditional craftsmanship meets modern, transparent project management." />
          </div>
          <Reveal className="intro__body" delay={0.1}>
            <p>
              For more than 18 years, Donema Construction Vision has transformed homes
              across Hoddesdon and the surrounding villages. From a single wall to a full
              property refurbishment, we bring the same obsession with detail, honesty on
              price, and respect for your home.
            </p>
            <p>
              Our tradesmen are City &amp; Guilds qualified and NICEIC registered — so every
              project is built to last, and signed off with confidence.
            </p>
            <Link to="/reviews" className="link-underline" data-cursor="hover">Read client reviews →</Link>
          </Reveal>
        </div>

        <div className="wrap stats">
          {stats.map((s, i) => (
            <Reveal className="stat-wrap" key={i} delay={i * 0.06}>
              <StatCounter {...s} />
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="block-head">
            <Reveal><p className="section-tag"><span>02</span> What we do</p></Reveal>
            <Words as="h2" className="h-lg" text="Everything your home needs, under one roof." />
          </div>
          <ServiceRows />
        </div>
      </section>

      {/* WORK */}
      <section className="section section--cream">
        <div className="wrap">
          <div className="block-head block-head--row">
            <div>
              <Reveal><p className="section-tag"><span>03</span> Selected work</p></Reveal>
              <Words as="h2" className="h-lg" text="Built in Hertfordshire. Made to last." />
            </div>
            <Reveal delay={0.1}>
              <Link to="/gallery" className="btn btn--ghost" data-cursor="hover">View full gallery</Link>
            </Reveal>
          </div>
          <ProjectGrid items={gallery.slice(0, 6)} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="wrap">
          <div className="block-head">
            <Reveal><p className="section-tag"><span>04</span> How we work</p></Reveal>
            <Words as="h2" className="h-lg" text="A calm, transparent process — start to handover." />
          </div>
          <div className="steps">
            {process.map((s, i) => (
              <Reveal className="step" key={s.no} delay={i * 0.08}>
                <div className="step__no">{s.no}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="block-head block-head--row">
            <div>
              <Reveal><p className="section-tag"><span>05</span> Kind words</p></Reveal>
              <Words as="h2" className="h-lg" text="Trusted by homeowners across Hertfordshire." />
            </div>
            <Reveal delay={0.1}>
              <Link to="/reviews" className="btn btn--ghost" data-cursor="hover">All reviews</Link>
            </Reveal>
          </div>
          <div className="reviews-grid">
            {reviews.slice(0, 3).map((r, i) => (
              <ReviewCard key={r.name} review={r} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
