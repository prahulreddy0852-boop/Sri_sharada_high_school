import { useEffect } from 'react';

const META: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Sri Sharada School, Maddur | SSC School in Narayanpet, Telangana',
    description:
      'A premier SSC school in Narayanpet, Mahabubnagar. Smart classrooms, experienced faculty, safe campus. Admissions open.',
  },
  about: {
    title: 'About Us | Sri Sharada School, Maddur',
    description:
      'Our history, vision, mission, principal message and core values — shaping young minds since 2005.',
  },
  academics: {
    title: 'Academics | Sri Sharada School, Maddur',
    description:
      'SSC curriculum from pre-primary to secondary. Student-centric teaching methodology and structured examination pattern.',
  },
  admissions: {
    title: 'Admissions | Sri Sharada School, Maddur',
    description:
      'Admission process, eligibility, required documents, fee enquiry form and prospectus download.',
  },
  facilities: {
    title: 'Facilities | Sri Sharada School, Maddur',
    description:
      'Smart classrooms, science and computer labs, library, sports ground, transport and CCTV-secured campus.',
  },
  gallery: {
    title: 'Gallery | Sri Sharada School, Maddur',
    description:
      'Annual day, sports day, cultural activities and classroom moments captured at Sri Sharada School.',
  },
  achievements: {
    title: 'Achievements | Sri Sharada School, Maddur',
    description:
      'Academic excellence, sports medals, Olympiad results and student awards at Sri Sharada School.',
  },
  news: {
    title: 'News & Events | Sri Sharada School, Maddur',
    description:
      'Latest announcements, holiday calendar and upcoming events at Sri Sharada School.',
  },
  contact: {
    title: 'Contact Us | Sri Sharada School, Maddur',
    description:
      'Reach Sri Sharada School at Maddur, Narayanpet, Mahabubnagar, Telangana. Call, email or send a message.',
  },
};

export default function Seo({ page }: { page: string }) {
  useEffect(() => {
    const m = META[page] ?? META.home;
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', m.description);
  }, [page]);
  return null;
}


