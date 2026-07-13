import {
  BookOpen,
  Blocks,
  Microscope,
  GraduationCap,
  ClipboardCheck,
  Lightbulb,
  Users,
  Award,
  Brain,
  HandHeart,
  Globe2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const SECTIONS = [
  {
    icon: Blocks,
    name: 'Pre-Primary',
    grades: 'Nursery – UKG',
    desc: 'A joyful, play-based foundation that develops language, motor skills and social confidence through stories, songs and hands-on activity.',
    points: ['Phonics & early literacy', 'Sensorory play', 'Social-emotional learning'],
  },
  {
    icon: BookOpen,
    name: 'Primary',
    grades: 'Grade 1 – 5',
    desc: 'Strong foundations in literacy, numeracy and inquiry, with thematic learning that connects subjects to real life.',
    points: ['Activity-based learning', 'Reading & writing fluency', 'Environmental awareness'],
  },
  {
    icon: Microscope,
    name: 'Middle School',
    grades: 'Grade 6 – 8',
    desc: 'Concept-driven exploration that sharpens analytical thinking and introduces specialised subjects and labs.',
    points: ['STEM exploration', 'Project-based learning', 'Critical thinking labs'],
  },
  {
    icon: GraduationCap,
    name: 'Secondary',
    grades: 'Grade 9 – 10',
    desc: 'Rigorous SSC board preparation balanced with life skills, career guidance and holistic development.',
    points: ['Board exam readiness', 'Career counselling', 'Olympiad coaching'],
  },
];

const METHODOLOGY = [
  { icon: Brain, title: 'Concept-First', desc: 'We prioritise understanding over rote memorisation, using real-world examples and visual aids.' },
  { icon: Users, title: 'Differentiated Learning', desc: 'Lessons are adapted to varied learning paces and styles so no child is left behind.' },
  { icon: Lightbulb, title: 'Inquiry-Led', desc: 'Students ask, explore and discover — building genuine curiosity and ownership of learning.' },
  { icon: HandHeart, title: 'Value Integration', desc: 'Ethics, empathy and responsibility are woven into every subject and activity.' },
  { icon: Globe2, title: 'Real-World Relevance', desc: 'Projects and field work connect classroom concepts to the community and the world.' },
  { icon: ClipboardCheck, title: 'Continuous Assessment', desc: 'Regular, low-stakes feedback helps students improve steadily without fear.' },
];

export default function AcademicsPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="Academics"
        title="A SSC Curriculum That Builds Thinkers"
        subtitle="Structured, student-centric and future-ready — from first steps to board exams."
      />

      {/* SSC overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="SSC Curriculum"
              title="Nationally Recognised, Globally Relevant"
              subtitle="Our curriculum follows the Central Board of Secondary Education framework — designed to build conceptual clarity, analytical ability and application skills."
            />
            <ul className="mt-6 space-y-3">
              {[
                'NCERT-aligned syllabus with continuous updates',
                'Focus on competency-based and application questions',
                'Regular formative and summative assessments',
                'Integrated co-scholastic and life-skills grading',
              ].map((p) => (
                <li key={p} className="reveal flex items-start gap-3 text-sm text-slate-600">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative">
            <img
              src="https://images.pexels.com/photos/8617912/pexels-photo-8617912.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="SSC classroom"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Academic Sections"
            title="Four Stages of Growth"
            subtitle="Each stage is tailored to the developmental needs of the child."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SECTIONS.map((s) => (
              <div
                key={s.name}
                className="card reveal group flex gap-5 p-7 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white transition group-hover:bg-gold-500 group-hover:text-brand-950">
                  <s.icon className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold">{s.name}</h3>
                    <span className="rounded-full bg-gold-100 px-3 py-0.5 text-xs font-semibold text-gold-700">
                      {s.grades}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.desc}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Teaching Methodology"
            title="How We Teach Matters"
            subtitle="A balanced approach that puts understanding, curiosity and character first."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {METHODOLOGY.map((m) => (
              <div key={m.title} className="card reveal p-7 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam pattern */}
      <section className="bg-brand-950 py-20">
        <div className="container-px">
          <SectionHeading
            light
            eyebrow="Examination Pattern"
            title="Assessment That Supports Growth"
            subtitle="A balanced mix of formative and summative assessments aligned with SSC norms."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Formative', desc: 'Quizzes, oral tests, projects and class participation through the term.', icon: Lightbulb },
              { title: 'Summative', desc: 'End-of-term written exams testing conceptual understanding and application.', icon: ClipboardCheck },
              { title: 'Co-Scholastic', desc: 'Grading for arts, sports, life skills, values and attitudes.', icon: Award },
              { title: 'Competency-Based', desc: 'Case-study and application questions aligned with NEP 2020.', icon: Brain },
            ].map((e) => (
              <div
                key={e.title}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:bg-white/10"
              >
                <e.icon className="h-8 w-8 text-gold-400" />
                <h3 className="mt-4 text-lg font-bold !text-white">{e.title}</h3>
                <p className="mt-2 text-sm text-white/65">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


