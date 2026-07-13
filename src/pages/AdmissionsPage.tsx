import { useState } from 'react';
import {
  ClipboardList,
  FileCheck2,
  CalendarCheck,
  PhoneCall,
  Download,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import type { Route } from '../lib/router';
import { useScrollReveal } from '../lib/hooks';

const STEPS = [
  { icon: FileText, title: 'Submit Application', desc: 'Fill the online admission form or collect a physical form from the school office.' },
  { icon: CalendarCheck, title: 'Interaction', desc: 'An informal interaction with the child and parents to understand readiness.' },
  { icon: FileCheck2, title: 'Document Verification', desc: 'Submit all required documents for verification by the admissions team.' },
  { icon: CheckCircle2, title: 'Confirmation & Fee', desc: 'On approval, pay the admission fee to confirm your child\'s seat.' },
];

const ELIGIBILITY = [
  { grade: 'Nursery', age: '3+ years as on June 1' },
  { grade: 'LKG', age: '4+ years as on June 1' },
  { grade: 'UKG', age: '5+ years as on June 1' },
  { grade: 'Grade 1', age: '6+ years as on June 1' },
  { grade: 'Grade 2-10', age: 'Based on previous grade completion' },
];

const DOCUMENTS = [
  'Birth certificate (photocopy)',
  'Aadhaar card of student & parents',
  'Passport-size photographs (4 nos.)',
  'Previous school transfer certificate (if applicable)',
  'Previous year\'s report card (if applicable)',
  'Caste & income certificate (if applicable)',
];

const GRADES = [
  'Nursery', 'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4',
  'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

function AdmissionForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      student_name: data.get('student_name'),
      parent_name: data.get('parent_name'),
      email: data.get('email'),
      phone: data.get('phone'),
      grade_applying: data.get('grade_applying'),
      dob: data.get('dob'),
      current_school: data.get('current_school'),
      message: data.get('message'),
    };

    console.info('Admission form submitted locally', payload);
    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-green-800">Application Received!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for your interest. Our admissions team will contact you within
          2 working days.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="student_name">Student's Full Name *</label>
          <input id="student_name" name="student_name" required className="input-field" placeholder="Child's name" />
        </div>
        <div>
          <label className="label-field" htmlFor="parent_name">Parent / Guardian Name *</label>
          <input id="parent_name" name="parent_name" required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="label-field" htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required className="input-field" placeholder="you@example.com" />
        </div>
        <div>
          <label className="label-field" htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required className="input-field" placeholder="+91 ..." />
        </div>
        <div>
          <label className="label-field" htmlFor="grade_applying">Grade Applying For *</label>
          <select id="grade_applying" name="grade_applying" required className="input-field" defaultValue="">
            <option value="" disabled>Select grade</option>
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div>
          <label className="label-field" htmlFor="dob">Date of Birth</label>
          <input id="dob" name="dob" type="date" className="input-field" />
        </div>
      </div>
      <div>
        <label className="label-field" htmlFor="current_school">Current School (if any)</label>
        <input id="current_school" name="current_school" className="input-field" placeholder="Previous school name" />
      </div>
      <div>
        <label className="label-field" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={3} className="input-field" placeholder="Anything you'd like us to know" />
      </div>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5" /> {error}
        </div>
      )}
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
        {status === 'submitting' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
        ) : (
          <>Submit Application <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}

function FeeForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      parent_name: data.get('parent_name'),
      email: data.get('email'),
      phone: data.get('phone'),
      grade_interested: data.get('grade_interested'),
      message: data.get('message'),
    };

    console.info('Fee enquiry submitted locally', payload);
    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-3 text-lg font-bold text-green-800">Enquiry Sent!</h3>
        <p className="mt-2 text-sm text-green-700">We'll share fee details with you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn-ghost mt-5">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="f_parent">Parent Name *</label>
          <input id="f_parent" name="parent_name" required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="label-field" htmlFor="f_email">Email *</label>
          <input id="f_email" name="email" type="email" required className="input-field" placeholder="you@example.com" />
        </div>
        <div>
          <label className="label-field" htmlFor="f_phone">Phone *</label>
          <input id="f_phone" name="phone" type="tel" required className="input-field" placeholder="+91 ..." />
        </div>
        <div>
          <label className="label-field" htmlFor="f_grade">Grade Interested *</label>
          <select id="f_grade" name="grade_interested" required className="input-field" defaultValue="">
            <option value="" disabled>Select grade</option>
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="label-field" htmlFor="f_message">Message</label>
        <textarea id="f_message" name="message" rows={3} className="input-field" placeholder="Your query" />
      </div>
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5" /> {error}
        </div>
      )}
      <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full">
        {status === 'submitting' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <>Request Fee Details <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}

export default function AdmissionsPage({
  navigate,
}: {
  navigate: (r: Route) => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        navigate={navigate}
        eyebrow="Admissions"
        title="Begin Your Child's Journey With Us"
        subtitle="Admissions for 2026-27 are open. A simple, transparent process for every family."
      />

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Admission Process"
            title="Four Simple Steps to Enrolment"
            subtitle="From enquiry to confirmation — we guide you at every stage."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="card reveal relative p-7 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="absolute right-5 top-5 font-serif text-4xl font-bold text-brand-50">
                  {i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="bg-brand-50/60 py-20 lg:py-28">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <div className="card reveal p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-brand-950">
              <CalendarCheck className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold">Eligibility Criteria</h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
              {ELIGIBILITY.map((e, i) => (
                <div
                  key={e.grade}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    i % 2 === 0 ? 'bg-white' : 'bg-brand-50/50'
                  }`}
                >
                  <span className="font-semibold text-brand-900">{e.grade}</span>
                  <span className="text-slate-500">{e.age}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card reveal p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
              <FileCheck2 className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-bold">Required Documents</h3>
            <ul className="mt-5 space-y-3">
              {DOCUMENTS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {d}
                </li>
              ))}
            </ul>
            <button className="btn-ghost mt-6 w-full">
              <Download className="h-4 w-4" /> Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Online Admission Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-px">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                center={false}
                eyebrow="Online Admission Form"
                title="Apply Online Today"
                subtitle="Fill in the details below and our admissions team will reach out to you."
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-900">Call us</p>
                    <p>+91 90000 00000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <ClipboardList className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-900">Office hours</p>
                    <p>Mon – Sat, 8 AM – 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="card p-8">
                <AdmissionForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Enquiry */}
      <section className="bg-brand-950 py-20">
        <div className="container-px">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                light
                center={false}
                eyebrow="Fee Enquiry"
                title="Want to Know the Fee Structure?"
                subtitle="Share your details and we'll send the applicable fee details for your chosen grade."
              />
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <FeeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospectus CTA */}
      <section className="bg-white py-16">
        <div className="container-px">
          <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 px-8 py-10 text-center md:flex-row md:text-left">
            <div>
              <h3 className="!text-white text-2xl font-bold">Download Our Prospectus</h3>
              <p className="mt-2 text-white/75">Everything about Sri Sharada School in one document.</p>
            </div>
            <button className="btn-gold">
              <Download className="h-4 w-4" /> Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

