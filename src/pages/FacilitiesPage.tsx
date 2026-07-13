import {
  MonitorPlay,
  FlaskConical,
  Cpu,
  Library,
  Dumbbell,
  Bus,
  Cctv,
  Wifi,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const FACILITIES = [
  {
    icon: MonitorPlay,
    title: 'Smart Classrooms',
    desc: 'Every classroom is equipped with interactive digital boards, audio-visual aids and smart content that make learning immersive and engaging.',
    image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratories',
    desc: 'Well-stocked Physics, Chemistry and Biology labs where students learn by doing — observing, experimenting and discovering.',
    image: 'https://images.pexels.com/photos/2280570/pexels-photo-2280570.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Cpu,
    title: 'Computer Lab',
    desc: 'A modern computer lab with high-speed internet and the latest hardware, introducing students to coding, design and digital literacy.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Library,
    title: 'Library',
    desc: 'A vast collection of books, magazines and digital resources that fosters a lifelong love of reading and research.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Dumbbell,
    title: 'Sports Ground',
    desc: 'Spacious grounds for cricket, football, athletics and indoor games — nurturing teamwork, fitness and sportsmanship.',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Bus,
    title: 'School Transport',
    desc: 'A fleet of GPS-enabled buses with trained drivers and attendants covering Narayanpet and nearby villages safely.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Cctv,
    title: 'CCTV Security',
    desc: '24/7 CCTV surveillance across the campus with monitored access control for complete safety and peace of mind.',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Wifi,
    title: 'Digital Infrastructure',
    desc: 'Campus-wide high-speed Wi-Fi, digital resource access and tech-enabled administration for a seamless experience.',
    image: 'https://images.pexels.com/photos/414634/pexels-photo-414634.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function FacilitiesPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="Facilities"
        title="World-Class Facilities for Every Child"
        subtitle="A safe, stimulating and well-equipped campus designed for holistic growth."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Campus"
            title="Spaces That Inspire Learning"
            subtitle="From smart classrooms to science labs, every facility is built with your child's growth in mind."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {FACILITIES.map((f) => (
              <div
                key={f.title}
                className="reveal group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-brand-700 backdrop-blur">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold !text-white">
                    {f.title}
                  </h3>
                </div>
                <p className="px-6 py-5 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50/60 py-16">
        <div className="container-px">
          <div className="reveal mx-auto max-w-3xl rounded-3xl bg-brand-800 px-8 py-12 text-center text-white">
            <h2 className="!text-white text-2xl font-bold sm:text-3xl">
              Come, See Our Campus for Yourself
            </h2>
            <p className="mt-3 text-white/75">
              Schedule a campus visit and experience the Sri Sharada difference.
            </p>
            <button onClick={() => navigate('contact')} className="btn-gold mt-6">
              Book a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

