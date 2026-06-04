import { useReveal } from '../hooks/useReveal';
import './ReviewCard.css';

export default function ReviewCard({ review, delay = 0 }) {
  const ref = useReveal();
  return (
    <figure ref={ref} className="review reveal" style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      <div className="review__stars" aria-label="5 out of 5 stars">
        {'★★★★★'}
      </div>
      <blockquote className="review__text">{review.text}</blockquote>
      <figcaption className="review__foot">
        <span className="review__name">{review.name}</span>
        <span className="review__meta">{review.project} · {review.source}</span>
      </figcaption>
    </figure>
  );
}
