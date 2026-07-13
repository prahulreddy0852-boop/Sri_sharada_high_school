import {
  Award,
  Trophy,
  Medal,
  Star,
  BookOpen,
  GraduationCap,
  Flame,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const ACADEMIC = [
  { year: '2025', title: '100% SSC Class X Pass', desc: 'All 48 students passed with distinction, 12 scoring above 90%.', icon: GraduationCap },
  { year: '2025', title: 'District Topper — Mathematics', desc: 'Aarav Sharma secured the highest marks in Mathematics across the district.', icon: BookOpen },
  { year: '2024', title: '100% SSC Class X Pass', desc: 'Yet another year of perfect board results with 15 distinctions.', icon: GraduationCap },
];

const SPORTS = [
  { title: 'District Cricket Champions', year: '2025', desc: 'Our U-16 cricket team won the inter-school district tournament.', icon: Trophy },
  { title: 'State Athletics Bronze', year: '2024', desc: 'Priya Naidu won bronze in the 400m at the state-level athletics meet.', icon: Medal },
  { title: 'Zonal Kabaddi Winners', year: '2024', desc: 'Our kabaddi team clinched the zonal championship.', icon: Trophy },
];

const OLYMPIADS = [
  { subject: 'Mathematics', count: '12 medals', year: '2025' },
  { subject: 'Science', count: '8 medals', year: '2025' },
  { subject: 'English', count: '6 medals', year: '2024' },
  { subject: 'Cyber', count: '5 medals', year: '2024' },
];

const AWARDS = [
  { name: 'Best School Award', org: 'District Education Dept.', year: '2024', icon: Star },
  { name: 'Excellence in Co-curricular', org: 'SSC Regional', year: '2023', icon: Flame },
  { name: 'Green School Certification', org: 'Eco Club Initiative', year: '2023', icon: Star },
];

export default function AchievementsPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="Achievements"
        title="Celebrating Our Stars"
        subtitle="Academic brilliance, sporting glory and all-round excellence — year after year."
      />

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container-px grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: '100%', label: 'Board Pass Rate', icon: GraduationCap },
            { value: '50+', label: 'Olympiad Medals', icon: Medal },
            { value: '30+', label: 'Sports Trophies', icon: Trophy },
            { value: '15+', label: 'School Awards', icon: Award },
          ].map((s) => (
            <div key={s.label} className="reveal rounded-2xl border border-slate-100 bg-brand-50/40 p-6 text-center">
              <s.icon className="mx-auto h-9 w-9 text-gold-500" />
              <p className="mt-3 font-serif text-3xl font-bold text-brand-900">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Results That Speak"
            subtitle="Consistent academic brilliance across SSC board examinations."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ACADEMIC.map((a, i) => (
              <div key={i} className="card reveal p-7 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <a.icon className="h-6 w-6" />
                </span>
                <span className="mt-4 inline-block rounded-full bg-gold-100 px-3 py-0.5 text-xs font-semibold text-gold-700">
                  {a.year}
                </span>
                <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="bg-brand-50/60 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Sports Achievements"
            title="Champions On & Off the Field"
            subtitle="Our students shine in team and individual sports at district, zonal and state levels."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SPORTS.map((s, i) => (
              <div key={i} className="card reveal flex gap-4 p-7 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
                  <s.icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-gold-600">{s.year}</span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympiads */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Olympiad Results"
            title="Young Scholars Making Their Mark"
            subtitle="Consistent medal-winning performances across national Olympiads."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OLYMPIADS.map((o, i) => (
              <div key={i} className="card reveal p-6 text-center hover:-translate-y-1 hover:shadow-lg">
                <Medal className="mx-auto h-10 w-10 text-gold-500" />
                <h3 className="mt-3 text-lg font-bold">{o.subject}</h3>
                <p className="mt-1 font-serif text-2xl font-bold text-brand-700">{o.count}</p>
                <p className="text-xs text-slate-400">{o.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-brand-950 py-16 lg:py-24">
        <div className="container-px">
          <SectionHeading
            light
            eyebrow="School Awards"
            title="Recognition & Honours"
            subtitle="Our institution has been recognised for excellence across multiple dimensions."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AWARDS.map((a, i) => (
              <div key={i} className="reveal rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:bg-white/10">
                <a.icon className="h-9 w-9 text-gold-400" />
                <h3 className="mt-4 text-lg font-bold !text-white">{a.name}</h3>
                <p className="mt-1 text-sm text-white/60">{a.org}</p>
                <p className="mt-2 text-xs text-gold-300">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


