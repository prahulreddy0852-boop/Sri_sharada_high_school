import {
  CalendarDays,
  Bell,
  Clock,
  MapPin,
  ArrowRight,
  CalendarCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const ANNOUNCEMENTS = [
  { date: 'Jul 10, 2026', title: 'New Academic Session Begins Soon', desc: 'Preparations are underway for the next session with new classes, staff and updated course activities.', tag: 'Announcement' },
  { date: 'Jul 5, 2026', title: 'Parent-Teacher Meeting', desc: 'PTM scheduled for July 19, 10 AM onwards for all grades.', tag: 'Notice' },
  { date: 'Jun 28, 2026', title: 'New Science Lab Inaugurated', desc: 'Our upgraded Biology lab was inaugurated by the District Education Officer.', tag: 'Campus' },
];

const EVENTS = [
  { date: 'Aug 15', title: 'Independence Day Celebration', time: '8:00 AM', venue: 'School Ground', desc: 'Flag hoisting, cultural programme and parade.' },
  { date: 'Sep 5', title: 'Teachers\' Day', time: '9:00 AM', venue: 'Auditorium', desc: 'Students honour their teachers with a special programme.' },
  { date: 'Oct 2', title: 'Gandhi Jayanti & Swachh Bharat', time: '8:30 AM', venue: 'Campus', desc: 'Community cleanliness drive and special assembly.' },
  { date: 'Nov 14', title: 'Children\'s Day', time: '9:00 AM', venue: 'Auditorium', desc: 'Fun activities, games and cultural performances.' },
  { date: 'Dec 20', title: 'Annual Day', time: '5:00 PM', venue: 'School Ground', desc: 'A grand celebration of talent, achievements and culture.' },
];

const HOLIDAYS = [
  { date: 'Aug 15', day: 'Friday', occasion: 'Independence Day' },
  { date: 'Sep 7', day: 'Sunday', occasion: 'Ganesh Chaturthi' },
  { date: 'Oct 2', day: 'Thursday', occasion: 'Gandhi Jayanti' },
  { date: 'Oct 21', day: 'Tuesday', occasion: 'Diwali' },
  { date: 'Dec 25', day: 'Thursday', occasion: 'Christmas' },
];

export default function NewsPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="News & Events"
        title="Stay Updated, Stay Connected"
        subtitle="The latest announcements, upcoming events and holiday calendar from Sri Sharada School."
      />

      {/* Announcements */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Latest Announcements"
            title="What's Happening at School"
            subtitle="Important updates for parents, students and the community."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ANNOUNCEMENTS.map((a, i) => (
              <div key={i} className="card reveal flex flex-col p-7 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Bell className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-gold-100 px-3 py-0.5 text-xs font-semibold text-gold-700">
                    {a.tag}
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                  <CalendarDays className="h-4 w-4" /> {a.date}
                </p>
                <h3 className="mt-2 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{a.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-gold-600">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Mark Your Calendar"
            subtitle="Don't miss these exciting events in the months ahead."
          />
          <div className="mt-12 space-y-4">
            {EVENTS.map((e, i) => (
              <div
                key={i}
                className="reveal card flex flex-col gap-4 p-6 hover:shadow-md sm:flex-row sm:items-center"
              >
                <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-700 py-4 text-white">
                  <CalendarCheck className="h-5 w-5 text-gold-300" />
                  <span className="mt-1 text-sm font-bold">{e.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{e.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{e.desc}</p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-slate-500 sm:text-right">
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <Clock className="h-4 w-4 text-gold-500" /> {e.time}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin className="h-4 w-4 text-gold-500" /> {e.venue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Calendar */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Holiday Calendar"
            title="Academic Holidays 2026"
            subtitle="Plan ahead with our list of school holidays for the year."
          />
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-700 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Day</th>
                  <th className="px-6 py-4 font-semibold">Occasion</th>
                </tr>
              </thead>
              <tbody>
                {HOLIDAYS.map((h, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/40'}>
                    <td className="px-6 py-4 font-semibold text-brand-900">{h.date}</td>
                    <td className="px-6 py-4 text-slate-500">{h.day}</td>
                    <td className="px-6 py-4 text-slate-600">{h.occasion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

