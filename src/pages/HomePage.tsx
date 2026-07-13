import {
  BookOpen,
  Users,
  MonitorPlay,
  Trophy,
  ShieldCheck,
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Building2,
  Award,
} from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { SCHOOL } from '../lib/data';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: 'SSC Curriculum',
    desc: 'A structured, nationally-recognised curriculum that builds conceptual clarity and real-world skills.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Dedicated, qualified teachers who nurture every child with personalised attention.',
  },
  {
    icon: MonitorPlay,
    title: 'Smart Classrooms',
    desc: 'Tech-enabled learning spaces with digital boards and interactive content.',
  },
  {
    icon: Trophy,
    title: 'Sports & Extracurriculars',
    desc: 'A vibrant programme of sports, arts, music and cultural activities for all-round growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Campus',
    desc: 'CCTV-monitored campus, trained staff and strict safety protocols for complete peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Value-Based Education',
    desc: 'Character building, ethics and life skills woven into everyday learning.',
  },
];

const STATS = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '1200+', label: 'Happy Students' },
  { value: '60+', label: 'Expert Educators' },
  { value: '100%', label: 'SSC Results' },
];

const TESTIMONIALS = [
  {
    name: 'Lakshmi Reddy',
    role: 'Parent · Grade 6',
    text: 'The teachers genuinely care about each child. My daughter has grown so confident in just one year. The smart classrooms make learning exciting for her.',
    rating: 5,
  },
  {
    name: 'Ramesh Naik',
    role: 'Parent · Grade 9',
    text: 'Excellent SSC academics combined with strong values. The campus is safe, the staff is responsive, and the sports programme is outstanding.',
    rating: 5,
  },
  {
    name: 'Aarav Sharma',
    role: 'Student · Grade 10',
    text: 'My teachers made even tough subjects easy to understand. I cleared my Olympiad with a medal thanks to their constant guidance.',
    rating: 5,
  },
];

const FAQS = [
  {
    q: 'What curriculum does Sri Sharada School follow?',
    a: 'We follow the SSC curriculum, affiliated to the Central Board of Secondary Education, New Delhi, from pre-primary through secondary level.',
  },
  {
    q: 'What is the age criterion for admission to pre-primary?',
    a: 'For Nursery, the child should be 3+ years as on June 1st of the academic year. Age criteria scale accordingly for higher grades.',
  },
  {
    q: 'Does the school provide transport facilities?',
    a: 'Yes, we operate a fleet of GPS-enabled buses covering Narayanpet and surrounding villages with trained attendants on every route.',
  },
  {
    q: 'How can I apply for admission?',
    a: 'You can fill out the online admission form on our Admissions page or visit the school office. Our team will guide you through every step.',
  },
  {
    q: 'Are there scholarships or fee concessions?',
    a: 'Merit-based and need-based concessions are available. Please contact the school office or submit a fee enquiry form for details.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card reveal overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-brand-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Students learning at Sri Sharada School"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/90 to-brand-800/70" />
        </div>
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="container-px relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] !text-white sm:text-5xl lg:text-6xl">
              Empowering Young Minds for a{' '}
              <span className="text-gradient-gold">Brighter Future</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              A premier SSC school in Narayanpet, Mahabubnagar — nurturing
              curious, confident and compassionate learners through
              future-ready education.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => navigate('admissions')} className="btn-gold">
                Admissions Open <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigate('contact')} className="btn-outline">
                Contact Us
              </button>
              <button
                onClick={() => navigate('admissions')}
                className="btn border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15"
              >
                Enquire Now
              </button>
            </div>

            {/* Stats strip */}
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="reveal">
                  <p className="font-serif text-3xl font-bold text-gold-400">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float-slow">
          <ChevronDown className="h-7 w-7 text-white/40" />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="An Education That Goes Beyond Books"
            subtitle="Everything we do is designed to help your child grow — academically, socially and emotionally."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="card group reveal p-7 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                  <h.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{h.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8617842/pexels-photo-8617842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="School campus"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl sm:right-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500 text-brand-950">
                <Building2 className="h-7 w-7" />
              </span>
              <div>
                <p className="font-serif text-2xl font-bold text-brand-900">
                  Est. {SCHOOL.established}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Two decades of trust
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              center={false}
              eyebrow="About Our School"
              title="Where Tradition Meets Tomorrow"
              subtitle="Since 2005, Sri Sharada School has been a beacon of quality education in Narayanpet — blending strong Indian values with modern, future-ready learning."
            />
            <ul className="mt-7 space-y-3">
              {[
                'Affiliated to SSC, New Delhi',
                'Student-teacher ratio of 20:1',
                'Holistic development through arts & sports',
                'Safe, inclusive and joyful campus',
              ].map((point) => (
                <li key={point} className="reveal flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm font-medium text-slate-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('about')}
              className="btn-primary mt-8"
            >
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Academics preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Academics"
            title="A Curriculum That Builds Thinkers"
            subtitle="From pre-primary to secondary, our SSC programme balances rigour with curiosity."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Pre-Primary', desc: 'Play-based, joyful foundation', icon: '🧸' },
              { name: 'Primary', desc: 'Strong literacy & numeracy', icon: '✏️' },
              { name: 'Middle', desc: 'Concept-driven exploration', icon: '🔬' },
              { name: 'Secondary', desc: 'Board-ready academic rigour', icon: '🎓' },
            ].map((s) => (
              <div
                key={s.name}
                className="card reveal group p-7 text-center hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
                <button
                  onClick={() => navigate('academics')}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-gold-600"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-brand-800 py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-60 w-60 rounded-full bg-brand-500/30 blur-3xl" />
        </div>
        <div className="container-px relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="!text-white text-3xl font-bold sm:text-4xl">
              Ready to join the Sri Sharada family?
            </h2>
            <p className="mt-3 text-white/75">
              Admissions for 2026-27 are now open. Secure your child's seat today.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => navigate('admissions')} className="btn-gold">
              Apply for Admission
            </button>
            <button
              onClick={() => navigate('facilities')}
              className="btn border border-white/30 text-white hover:bg-white/10"
            >
              Explore Facilities
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Parents & Students"
            subtitle="Hear from the families who make Sri Sharada School their home."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="card reveal flex flex-col p-7 hover:shadow-lg"
              >
                <Quote className="h-9 w-9 text-gold-400" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  "{t.text}"
                </p>
                <div className="mt-5 flex items-center gap-1 text-gold-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="font-bold text-brand-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before joining our community."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-4">
            {FAQS.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <p className="text-sm text-slate-500">
              Still have questions?{' '}
              <button
                onClick={() => navigate('contact')}
                className="font-semibold text-brand-700 hover:text-gold-600"
              >
                Get in touch with us
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Achievements teaser */}
      <section className="relative overflow-hidden bg-brand-950 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
        <div className="container-px relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow !text-gold-300">
              <span className="h-px w-6 bg-current opacity-50" />
              Our Pride
            </span>
            <h2 className="mt-3 text-3xl font-bold !text-white sm:text-4xl">
              Celebrating Excellence, Year After Year
            </h2>
            <p className="mt-4 text-white/70">
              From board toppers to national-level athletes, our students make
              us proud across academics, sports and beyond.
            </p>
            <button
              onClick={() => navigate('achievements')}
              className="btn-gold mt-7"
            >
              View Achievements <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, value: '50+', label: 'Olympiad Medals' },
              { icon: Trophy, value: '30+', label: 'Sports Trophies' },
              { icon: Star, value: '98%', label: 'Distinctions' },
              { icon: Users, value: '100+', label: 'Alumni in Top Colleges' },
            ].map((s) => (
              <div
                key={s.label}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
              >
                <s.icon className="mx-auto h-8 w-8 text-gold-400" />
                <p className="mt-3 font-serif text-3xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


