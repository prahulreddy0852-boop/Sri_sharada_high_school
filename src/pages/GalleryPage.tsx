import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const CATEGORIES = ['All', 'Annual Day', 'Sports Day', 'Cultural', 'Classroom', 'Events'];

const PHOTOS = [
  { src: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Events', caption: 'Annual Celebration' },
  { src: 'https://images.pexels.com/photos/8617842/pexels-photo-8617842.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Events', caption: 'Investiture Ceremony' },
  { src: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Sports Day', caption: 'Sports Meet' },
  { src: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Classroom', caption: 'Smart Classroom' },
  { src: 'https://images.pexels.com/photos/2280570/pexels-photo-2280570.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Classroom', caption: 'Science Lab' },
  { src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Classroom', caption: 'Computer Lab' },
  { src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Events', caption: 'Library Session' },
  { src: 'https://images.pexels.com/photos/6141172/pexels-photo-6141172.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Cultural', caption: 'Cultural Dance' },
  { src: 'https://images.pexels.com/photos/6141180/pexels-photo-6141180.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Cultural', caption: 'Festival Performance' },
  { src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Sports Day', caption: 'Track & Field' },
  { src: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Annual Day', caption: 'Annual Day Stage' },
  { src: 'https://images.pexels.com/photos/8617912/pexels-photo-8617912.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Classroom', caption: 'Group Activity' },
];

export default function GalleryPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = filter === 'All' ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  const close = () => setLightbox(null);
  const next = () => setLightbox((i) => (i === null ? i : (i + 1) % photos.length));
  const prev = () => setLightbox((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));

  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="Gallery"
        title="Moments That Make Us Proud"
        subtitle="A glimpse into life at Sri Sharada School — events, achievements and everyday joy."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Captured Memories"
            subtitle="Browse through our school events, cultural activities and classroom moments."
          />

          {/* Filters */}
          <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === c
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <button
                key={p.src + i}
                onClick={() => setLightbox(i)}
                className="reveal group relative aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                  <p className="p-4 text-sm font-semibold text-white">{p.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && photos[lightbox] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src.replace('w=800', 'w=1400')}
              alt={photos[lightbox].caption}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-white/80">
              {photos[lightbox].caption}
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}

