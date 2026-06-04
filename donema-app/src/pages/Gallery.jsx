import { useState } from 'react';
import { gallery, galleryFilters } from '../data/content';
import PageHero from '../components/PageHero';
import ProjectGrid from '../components/ProjectGrid';
import Lightbox from '../components/Lightbox';
import CTA from '../components/CTA';
import './Gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const items = filter === 'All' ? gallery : gallery.filter((g) => g.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A portfolio built across Hertfordshire."
        lead="Extensions, kitchens, bathrooms and full refurbishments — a look at the homes we’ve transformed."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="wrap">
          <div className="gfilters">
            {galleryFilters.map((f) => (
              <button
                key={f}
                className={`gfilter ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
                data-cursor="hover"
              >
                {f}
              </button>
            ))}
          </div>

          <ProjectGrid key={filter} items={items} onOpen={setActive} />
        </div>
      </section>

      <CTA title="Like what you see?" text="Let’s talk about how we can do the same for your home." />

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </>
  );
}
