import { useParams, Navigate, Link } from 'react-router-dom';
import { services, serviceList } from '../data/services';
import PageHero from '../components/PageHero';
import Words from '../components/Words';
import Reveal from '../components/Reveal';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import './ServicePage.css';

export default function ServicePage() {
  const { slug } = useParams();
  const s = services[slug];
  if (!s) return <Navigate to="/" replace />;

  const others = serviceList.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        lead={s.lead}
        image={s.hero}
        index={s.index}
      />

      {/* INTRO + pillars */}
      <section className="section">
        <div className="wrap sp-intro">
          <Words as="h2" className="h-md sp-intro__lead" text={s.intro} stagger={0.012} />
        </div>

        <div className="wrap">
          <div className="block-head">
            <Reveal><p className="section-tag"><span>·</span> {s.sectionTitle}</p></Reveal>
          </div>
          <div className="sp-pillars">
            {s.pillars.map((p, i) => (
              <Reveal className="sp-pillar" key={p.k} delay={i * 0.08}>
                <div className="sp-pillar__k">{p.k}</div>
                <div className="sp-pillar__v">{p.v}</div>
                <p className="sp-pillar__d">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY strip + includes */}
      <section className="section section--cream">
        <div className="wrap sp-split">
          <div className="sp-split__text">
            <Reveal><p className="section-tag"><span>✦</span> {s.includesTitle}</p></Reveal>
            <ul className="sp-includes">
              {s.includes.map((it, i) => (
                <Reveal as="li" key={it} delay={i * 0.05}>
                  <span className="sp-includes__no">{String(i + 1).padStart(2, '0')}</span>
                  {it}
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="sp-split__media">
            {s.gallery.map((g, i) => (
              <Reveal className={`sp-shot sp-shot--${i}`} key={i} delay={i * 0.1}>
                <img src={g} alt={`${s.eyebrow} project ${i + 1}`} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap sp-faq">
          <div className="sp-faq__head">
            <Reveal><p className="section-tag"><span>?</span> Good to know</p></Reveal>
            <Words as="h2" className="h-lg" text={`${s.eyebrow} FAQs`} />
          </div>
          <FAQ items={s.faqs} />
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal><p className="section-tag sp-more__tag"><span>→</span> Explore more</p></Reveal>
          <div className="sp-more">
            {others.map((o) => (
              <Link to={`/${o.slug}`} key={o.slug} className="sp-more__link" data-cursor="hover">
                <span className="sp-more__no">{o.index}</span>
                <span className="sp-more__name">{o.eyebrow}</span>
                <span className="sp-more__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title={s.ctaTitle} text={s.ctaText} button={s.ctaButton} />
    </>
  );
}
