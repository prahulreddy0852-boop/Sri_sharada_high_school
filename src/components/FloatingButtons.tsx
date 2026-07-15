import { Phone, MessageCircle } from 'lucide-react';
import { SCHOOL } from '../lib/data';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${SCHOOL.phoneRaw}`}
        aria-label="Call now"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-brand-700 p-3.5 text-white shadow-lg shadow-brand-700/40 transition hover:scale-110 hover:bg-brand-800"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-600" />
        <Phone className="relative h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${SCHOOL.whatsapp}?text=Hello%20Sri%20Sharada%20School%2C%20I%20would%20like%20to%20enquire%20about%20the%20school.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-green-600/40 transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <MessageCircle className="relative h-5 w-5" />
      </a>
    </div>
  );
}

