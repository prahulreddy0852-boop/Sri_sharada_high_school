import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';
import { NAV_ITEMS, SCHOOL } from '../lib/data';
import type { Route } from '../lib/router';

export default function Footer({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white/70">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <GraduationCap className="h-7 w-7 text-gold-400" />
            </span>
            <div>
              <p className="font-serif text-lg font-bold text-white">Sri Sharada School</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                Maddur · SSC
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Empowering young minds for a brighter future through value-based,
            future-ready SSC education in Narayanpet, Telangana.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, href: SCHOOL.social.facebook, label: 'Facebook' },
              { icon: Instagram, href: SCHOOL.social.instagram, label: 'Instagram' },
              { icon: Youtube, href: SCHOOL.social.youtube, label: 'YouTube' },
              { icon: Twitter, href: SCHOOL.social.twitter, label: 'Twitter' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-gold-500 hover:text-brand-950"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Explore
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.route}>
                <button
                  onClick={() => navigate(item.route as Route)}
                  className="flex items-center gap-1.5 text-white/70 transition hover:text-gold-300"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Reach Us
          </h4>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>{SCHOOL.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <a href={`tel:${SCHOOL.phoneRaw}`} className="hover:text-gold-300">
                {SCHOOL.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-gold-300">
                {SCHOOL.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>{SCHOOL.hours}</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Admissions
          </h4>
          <p className="mt-5 text-sm leading-relaxed">
            Admissions are open for the academic year 2026-27. Limited seats
            available across all grades.
          </p>
          <button
            onClick={() => navigate('admissions')}
            className="btn-gold mt-5 w-full"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate('contact')}
            className="btn mt-3 w-full border border-white/20 text-white hover:bg-white/10"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sri Sharada School, Maddur. All rights
            reserved.
          </p>
          <p>Affiliated to {SCHOOL.affiliation} · Estd. {SCHOOL.established}</p>
        </div>
      </div>
    </footer>
  );
}


