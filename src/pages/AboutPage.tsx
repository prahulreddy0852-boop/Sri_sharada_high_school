import {
  Target,
  Eye,
  Heart,
  BookHeart,
  Users,
  Lightbulb,
  ShieldCheck,
  Quote,
  Award,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';
import { SCHOOL } from '../lib/data';

const VALUES = [
  { icon: Heart, title: 'Compassion', desc: 'Kindness and empathy guide every interaction in our community.' },
  { icon: Lightbulb, title: 'Curiosity', desc: 'We celebrate questions and nurture a lifelong love of learning.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Honesty, fairness and responsibility in all that we do.' },
  { icon: Users, title: 'Inclusivity', desc: 'A welcoming space where every child belongs and thrives.' },
  { icon: BookHeart, title: 'Excellence', desc: 'We pursue our personal best in academics and character.' },
  { icon: Award, title: 'Respect', desc: 'For self, for others, for our culture and environment.' },
];

export default function AboutPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="About Us"
        title="Two Decades of Nurturing Excellence"
        subtitle="Rooted in values, growing with purpose — the story of Sri Sharada School."
      />

      {/* History */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <img
              src="https://images.pexels.com/photos/8617766/pexels-photo-8617766.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="School history"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-brand-700 px-6 py-4 text-white shadow-xl">
              <p className="font-serif text-3xl font-bold text-gold-300">2005</p>
              <p className="text-xs">Year of founding</p>
            </div>
          </div>
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our History"
              title="From a Small Dream to a Trusted Institution"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Sri Sharada School was founded in {SCHOOL.established} with a
                simple yet powerful vision — to bring quality, value-based
                education to the children of Narayanpet and the surrounding
                villages of Mahabubnagar district.
              </p>
              <p>
                What began as a small institution with a handful of students has
                grown into one of the region's most respected SSC schools,
                serving over 1,200 students across pre-primary to secondary
                grades.
              </p>
              <p>
                Through every milestone, our commitment has remained unchanged:
                to nurture confident, compassionate and capable young people who
                are ready to shape a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <div className="card reveal p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <Eye className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To be a centre of educational excellence that empowers every child
              to become a lifelong learner, a critical thinker and a responsible
              global citizen rooted in Indian values.
            </p>
          </div>
          <div className="card reveal p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
              <Target className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>• Deliver a rigorous, joyful SSC curriculum.</li>
              <li>• Foster holistic growth through arts, sports and life skills.</li>
              <li>• Cultivate a safe, inclusive and inspiring environment.</li>
              <li>• Partner with families and the community for every child's success.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <div className="reveal mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-brand-50/40 p-8 shadow-sm sm:p-12">
            <Quote className="h-12 w-12 text-gold-400" />
            <p className="mt-6 text-lg italic leading-relaxed text-slate-700">
              "At Sri Sharada School, we believe education is not merely about
              marks — it is about lighting a spark. Every child who walks through
              our gates carries a unique potential, and our greatest privilege is
              to help them discover it. We are committed to creating an
              environment where curiosity is celebrated, values are lived, and
              excellence becomes a habit. Together with our dedicated faculty and
              supportive parents, we are shaping not just students, but
              confident, compassionate citizens of tomorrow."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Principal"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gold-400"
              />
              <div>
                <p className="font-bold text-brand-900">Dr. Sunita Reddy</p>
                <p className="text-sm text-slate-500">Principal, Sri Sharada School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Core Values"
            title="The Principles That Guide Us"
            subtitle="Six values shape our culture, our classrooms and our community."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="card reveal group p-7 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-gold-500 group-hover:text-brand-950">
                  <v.icon className="h-6.5 w-6.5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


