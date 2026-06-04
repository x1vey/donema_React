import { reviews } from '../data/content';
import { site } from '../data/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ReviewCard from '../components/ReviewCard';
import CTA from '../components/CTA';
import './Reviews.css';

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Here’s what our customers say."
        lead="Real Google reviews from homeowners across Hoddesdon and Hertfordshire."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="wrap">
          <div className="rv-summary">
            <Reveal className="rv-summary__score">
              <span className="rv-summary__num">5.0</span>
              <span className="rv-summary__stars">★★★★★</span>
              <span className="rv-summary__label">Rated by our clients on Google</span>
            </Reveal>
            <Reveal className="rv-summary__note" delay={0.1}>
              Over 18 years and hundreds of completed projects, our reputation has been
              built one satisfied homeowner at a time.
            </Reveal>
          </div>

          <div className="rv-grid">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Join our list of satisfied clients."
        text={`Let’s discuss your vision today — call ${site.phone} for a free consultation.`}
      />
    </>
  );
}
