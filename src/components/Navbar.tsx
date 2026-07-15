import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { NAV_ITEMS, SCHOOL } from '../lib/data';
import type { Route } from '../lib/router';
import { useScrolled } from '../lib/hooks';

export default function Navbar({
  route,
  navigate,
}: {
  route: Route;
  navigate: (r: Route) => void;
}) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(30);

  const go = (r: Route) => {
    navigate(r);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md shadow-brand-950/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden border-b border-white/10 bg-brand-950 text-white/80 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="text-gold-400">●</span>
            {SCHOOL.location}
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${SCHOOL.phoneRaw}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Phone className="h-3.5 w-3.5" /> {SCHOOL.phone}
            </a>
            <span className="text-white/40">|</span>
            <span>{SCHOOL.hours}</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-px flex h-16 items-center justify-between lg:h-20">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Sri Sharada School home"
        >
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg shadow-lg transition-all ${
            scrolled ? 'bg-white' : 'bg-white/20 backdrop-blur'
          }`}>
            <img
              src="/logo.svg"
              alt="Sri Sharada School Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <span className="text-left leading-tight">
            <span
              className={`block font-serif text-lg font-bold leading-tight ${
                scrolled ? 'text-brand-800' : 'text-white'
              }`}
            >
              Sri Sharada High School
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              Maddur · SSC
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const active = route === item.route;
            return (
              <button
                key={item.route}
                onClick={() => go(item.route as Route)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? scrolled
                      ? 'text-brand-700'
                      : 'text-gold-300'
                    : scrolled
                      ? 'text-slate-600 hover:text-brand-700'
                      : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? 'bg-gold-500' : 'bg-gold-300'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
            scrolled ? 'text-brand-800 hover:bg-brand-50' : 'text-white hover:bg-white/10'
          } xl:hidden`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white shadow-xl transition-all duration-300 xl:hidden ${
          open ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <nav className="container-px flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.route}
              onClick={() => go(item.route as Route)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                route === item.route
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}


