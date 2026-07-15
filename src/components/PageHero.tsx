import type { Route } from '../lib/router';

export default function PageHero({
  navigate,
  eyebrow,
  title,
  subtitle,
}: {
  navigate: (r: Route) => void;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-brand-950 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,29,74,0.4),rgba(13,29,74,0.85))]" />
      <div className="container-px relative pb-14 pt-10">
        <span className="section-eyebrow !text-gold-300">
          <span className="h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold !text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button onClick={() => navigate('contact')} className="btn-gold">
            Contact Us
          </button>
          <button onClick={() => navigate('about')} className="btn-outline">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

