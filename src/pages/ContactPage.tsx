import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';
import { supabase } from '../lib/supabase';
import { SCHOOL } from '../lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage({
  navigate: _navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      subject: data.get('subject'),
      message: data.get('message'),
    };
    const { error: err } = await supabase.from('contact_messages').insert([payload]);
    if (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    } else {
      setStatus('success');
      form.reset();
    }
  };

  return (
    <div ref={ref}>
      <PageHero
        navigate={_navigate}
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        subtitle="Have a question or want to visit? Reach out — we're here to help."
      />

      {/* Contact cards */}
      <section className="bg-white py-16">
        <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: 'Visit Us', lines: [SCHOOL.location], link: null },
            { icon: Phone, title: 'Call Us', lines: [SCHOOL.phone, SCHOOL.altPhone], link: `tel:${SCHOOL.phoneRaw}` },
            { icon: Mail, title: 'Email Us', lines: [SCHOOL.email], link: `mailto:${SCHOOL.email}` },
            { icon: Clock, title: 'Office Hours', lines: [SCHOOL.hours], link: null },
          ].map((c, i) => (
            <div key={i} className="card reveal p-7 text-center hover:-translate-y-1 hover:shadow-lg">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <div className="mt-2 space-y-0.5">
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-slate-500">
                    {c.link ? (
                      <a href={c.link} className="hover:text-gold-600">{l}</a>
                    ) : l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px grid items-start gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="card reveal p-8">
            <SectionHeading
              center={false}
              eyebrow="Send a Message"
              title="Get in Touch"
            />
            {status === 'success' ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-600" />
                <h3 className="mt-4 text-xl font-bold text-green-800">Message Sent!</h3>
                <p className="mt-2 text-sm text-green-700">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="name">Your Name *</label>
                    <input id="name" name="name" required className="input-field" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required className="input-field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="phone">Phone *</label>
                    <input id="phone" name="phone" type="tel" required className="input-field" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" className="input-field" placeholder="How can we help?" />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required className="input-field" placeholder="Write your message..." />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-5 w-5" /> {error}
                  </div>
                )}
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                  {status === 'submitting' ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            )}

            {/* WhatsApp + Social */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-sm font-semibold text-slate-600">Prefer to chat?</p>
              <a
                href={`https://wa.me/${SCHOOL.whatsapp}?text=Hello%20Sri%20Sharada%20School%2C%20I%20have%20a%20query.`}
                target="_blank"
                rel="noreferrer"
                className="btn mt-3 w-full bg-[#25D366] text-white hover:bg-[#1da851]"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition hover:bg-brand-700 hover:text-white"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="School location"
                src={SCHOOL.mapEmbed}
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-gold-500" />
              <div>
                <p className="font-bold text-brand-900">Sri Sharada School</p>
                <p className="text-sm text-slate-500">{SCHOOL.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

