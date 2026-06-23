import React, { useState, useEffect } from 'react';
import {
  Award,
  Calendar,
  Clock,
  Download,
  Eye,
  ExternalLink,
  X,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Certificate data — edit this array to add/update credentials.
// Fields marked `placeholder: true` render with an amber/italic treatment
// so they're easy to spot until you fill in the real details.
// ---------------------------------------------------------------------------
// const CERTIFICATES = [
//   {
//     id: 'ibm-data-science',
//     issuer: 'Coursera',
//     issuerSub: 'IBM Skills Network',
//     title: 'IBM Data Science Specialization',
//     recipient: 'Mafron Ronaldo Fernandes',
//     dateLabel: 'February 22, 2024',
//     duration: 'Approx. 4 months · 10 hrs / week',
//     blurb:
//       'Account verified — Coursera certifies successful completion of the IBM Data Science Specialization.',
//     link: 'https://www.coursera.org/specializations/ibm-data-science',
//     courses: [
//       'What is Data Science?',
//       'Tools for Data Science',
//       'Data Science Methodology',
//       'Python for Data Science, AI & Development',
//       'Python Project for Data Science',
//       'Databases and SQL for Data Science with Python',
//       'Data Analysis with Python',
//       'Data Visualization with Python',
//       'Machine Learning with Python',
//       'Applied Data Science Capstone',
//     ],
//   },
//   {
//     id: ' Meta Front-End Developer Specialization',
//     issuer: 'Coursera',
//     issuerSub: 'IBM Skills Network',
//     title: 'IBM Data Science Specialization',
//     recipient: 'Mafron Ronaldo Fernandes',
//     dateLabel: 'February 22, 2024',
//     duration: 'Approx. 4 months · 10 hrs / week',
//     blurb:
//       'Account verified — Coursera certifies successful completion of the IBM Data Science Specialization.',
//     link: 'https://www.coursera.org/specializations/ibm-data-science',
//     courses: [
//       'What is Data Science?',
//       'Tools for Data Science',
//       'Data Science Methodology',
//       'Python for Data Science, AI & Development',
//       'Python Project for Data Science',
//       'Databases and SQL for Data Science with Python',
//       'Data Analysis with Python',
//       'Data Visualization with Python',
//       'Machine Learning with Python',
//       'Applied Data Science Capstone',
//     ],
//   },
//
// ];

const CERTIFICATES = [
  {
    id: "meta-front-end",

    issuer: "Coursera",
    issuerSub: "Meta",

    title: "Meta Front-End Developer Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "July 22, 2024",

    duration: "Approximately 7 months · 6 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the Meta Front-End Developer Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/ZAYS3X33P4AW",

    courses: [
      "Introduction to Front-End Development",
      "Programming with JavaScript",
      "Version Control",
      "HTML and CSS in depth",
      "React Basics",
      "Advanced React",
      "Principles of UX/UI Design",
      "Front-End Developer Capstone",
      "Coding Interview Preparation",
    ],
  },

  {
    id: "ibm-applied-data-science",

    issuer: "Coursera",
    issuerSub: "IBM Skills Network",

    title: "IBM Applied Data Science Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "February 22, 2024",

    duration: "Approximately 2 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the IBM Applied Data Science Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/N2CLSV6HD3MW",

    courses: [
      "Python for Data Science, AI & Development",
      "Python Project for Data Science",
      "Data Analysis with Python",
      "Data Visualization with Python",
      "Applied Data Science Capstone",
    ],
  },

  {
    id: "ibm-data-science",

    issuer: "Coursera",
    issuerSub: "IBM Skills Network",

    title: "IBM Data Science Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "February 22, 2024",

    duration: "Approximately 4 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the IBM Data Science Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/WS66S2MN8TWW",

    courses: [
      "What is Data Science?",
      "Tools for Data Science",
      "Data Science Methodology",
      "Python for Data Science, AI & Development",
      "Python Project for Data Science",
      "Databases and SQL for Data Science with Python",
      "Data Analysis with Python",
      "Data Visualization with Python",
      "Machine Learning with Python",
      "Applied Data Science Capstone",
    ],
  },

  {
    id: "google-project-management",

    issuer: "Coursera",
    issuerSub: "Google",

    title: "Google Project Management Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "January 10, 2024",

    duration: "Approximately 6 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the Google Project Management Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/8SHNQGE87L33",

    courses: [
      "Foundations of Project Management",
      "Project Initiation: Starting a Successful Project",
      "Project Planning: Putting It All Together",
      "Project Execution: Running the Project",
      "Agile Project Management",
      "Capstone: Applying Project Management in the Real World",
    ],
  },

  {
    id: "google-data-analytics",

    issuer: "Coursera",
    issuerSub: "Google",

    title: "Google Data Analytics Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "October 9, 2023",

    duration: "Approximately 6 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the Google Data Analytics Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/YGQ5V4KZ84RP",

    courses: [
      "Foundations: Data, Data, Everywhere",
      "Ask Questions to Make Data-Driven Decisions",
      "Prepare Data for Exploration",
      "Process Data from Dirty to Clean",
      "Analyze Data to Answer Questions",
      "Share Data Through the Art of Visualization",
      "Google Data Analytics Capstone: Complete a Case Study",
    ],
  },

  {
    id: "machine-learning-specialization",

    issuer: "Coursera",
    issuerSub: "Stanford University & DeepLearning.AI",

    title: "Machine Learning Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "January 30, 2023",

    duration: "Approximately 2 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the Machine Learning Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/SRY3QB2VNG58",

    courses: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
  },

  {
    id: "ibm-data-analyst",

    issuer: "Coursera",
    issuerSub: "IBM Skills Network",

    title: "IBM Data Analyst Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "October 17, 2022",

    duration: "Approximately 4 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the IBM Data Analyst Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/RGM7UCF6YQ9F",

    courses: [
      "Introduction to Data Analytics",
      "Excel Basics for Data Analysis",
      "Data Visualization and Dashboards with Excel and Cognos",
      "Python for Data Science, AI & Development",
      "Python Project for Data Science",
      "Databases and SQL for Data Science with Python",
      "Data Analysis with Python",
      "Data Visualization with Python",
      "IBM Data Analyst Capstone Project",
    ],
  },

  {
    id: "deep-learning-specialization",

    issuer: "Coursera",
    issuerSub: "DeepLearning.AI",

    title: "Deep Learning Specialization",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "September 26, 2021",

    duration: "Approximately 3 months · 10 hrs / week",

    blurb:
      "Account verified — Coursera certifies successful completion of the Deep Learning Specialization.",

    link:
      "https://www.coursera.org/account/accomplishments/specialization/PAWQCHD2QT8Y",

    courses: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks",
      "Structuring Machine Learning Projects",
      "Convolutional Neural Networks",
      "Sequence Models",
    ],
  },

  {
    id: "learning-how-to-learn",

    issuer: "Coursera",
    issuerSub: "Deep Teaching Solutions",

    title:
      "Learning How to Learn: Powerful mental tools to help you master tough subjects",

    recipient: "Mafron Ronaldo Fernandes",

    dateLabel: "September 29, 2023",

    duration: "15 hours (approximately)",

    blurb:
      "Account verified — Coursera certifies successful completion with Grade Achieved: 100%.",

    link:
      "https://www.coursera.org/account/accomplishments/verify/ASJ6UVTXYKL4",

    courses: [],
  },
  {
  id: "programming-for-everybody",

  issuer: "Coursera",
  issuerSub: "University of Michigan",

  title: "Programming for Everybody (Getting Started with Python)",

  recipient: "Mafron Ronaldo Fernandes",

  dateLabel: "January 13, 2022",

  duration: "17 hours (approximately)",

  blurb:
    "Account verified — Coursera certifies successful completion with Grade Achieved: 100%.",

  link:
    "https://www.coursera.org/account/accomplishments/verify/N9DCP8VKHE2Q",

  courses: [],
},
{
  id: "introduction-to-git-and-github",

  issuer: "Coursera",
  issuerSub: "Google",

  title: "Introduction to Git and GitHub",

  recipient: "Mafron Ronaldo Fernandes",

  dateLabel: "May 24, 2021",

  duration: "20 hours (approximately)",

  blurb:
    "Account verified — Coursera certifies successful completion with Grade Achieved: 100%.",

  link:
    "https://www.coursera.org/account/accomplishments/verify/VHY7X7HBGMFM",

  courses: [],
},
{
  id: "machine-learning",

  issuer: "Coursera",
  issuerSub: "Stanford University",

  title: "Machine Learning",

  recipient: "Mafron Ronaldo Fernandes",

  dateLabel: "March 22, 2021",

  duration: "59 hours (approximately)",

  blurb:
    "Account verified — Coursera certifies successful completion with Grade Achieved: 100%.",

  link:
    "https://www.coursera.org/account/accomplishments/verify/QVNVDXEF6ATF",

  courses: [],
},
{
    id: 'udemy-course',
    issuer: 'Udemy',
    issuerSub: 'Certificate of Completion',
    title: 'JavaScript - The Complete Guide (Beginner + Advanced)',
    recipient: 'Mafron Ronaldo Fernandes',
    dateLabel: '04/25/2026',
    duration: 52.5 + ' hours',
    blurb: 'Verified certificate of completion issued by Udemy.',
    link: 'https://www.udemy.com/certificate/UC-05b62927-81e9-4a8e-9811-6d18420cad07/',
    courses: [],
    placeholder: false,
  },
  {
  id: 'css-complete-guide',

  issuer: 'Udemy',
  issuerSub: 'Certificate of Completion',

  title: 'CSS - The Complete Guide (incl. Flexbox, Grid & Sass)',

  recipient: 'Mafron Ronaldo Fernandes',

  dateLabel: '05/29/2025',

  duration: '23 hours',

  blurb:
    'Verified — This certificate verifies successful completion of the course. The entire course was completed and validated by the student.',

  link:
    'https://www.udemy.com/certificate/UC-12d67776-9061-4a20-9552-6e7db4a163b4/',

  courses: [],
},

{
  id: 'docker-kubernetes-practical-guide',

  issuer: 'Udemy',
  issuerSub: 'Certificate of Completion',

  title: 'Docker & Kubernetes: The Practical Guide',

  recipient: 'Mafron Ronaldo Fernandes',

  dateLabel: '11/01/2025',

  duration: '23.5 hours',

  blurb:
    'Verified — This certificate verifies successful completion of the course. The entire course was completed and validated by the student.',

  link:
    'https://www.udemy.com/certificate/UC-daa324c5-fab7-4be7-9e85-803c36a618ba/',

  courses: [],
},

{
  id: 'machine-learning-a-z',

  issuer: 'Udemy',
  issuerSub: 'Certificate of Completion',

  title: 'Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R',

  recipient: 'Mafron Ronaldo Fernandes',

  dateLabel: '04/07/2021',

  duration: '44.5 hours',

  blurb:
    'Verified — This certificate verifies successful completion of the course. The entire course was completed and validated by the student.',

  link:
    'https://www.udemy.com/certificate/UC-48ada6fd-a565-40d3-b0d6-6610a767f893/',

  courses: [],
},

{
  id: 'python-bootcamp',

  issuer: 'Udemy',
  issuerSub: 'Certificate of Completion',

  title: 'The Complete Python Bootcamp From Zero to Hero in Python',

  recipient: 'Mafron Ronaldo Fernandes',

  dateLabel: '12/15/2020',

  duration: '21.5 hours',

  blurb:
    'Verified — This certificate verifies successful completion of the course. The entire course was completed and validated by the student.',

  link:
    'https://www.udemy.com/certificate/UC-ab7d13ff-cd10-49b2-8c2b-526787587a5e/',

  courses: [],
},

];

const glass = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
};

function Seal({ size = 44 }) {
  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0 seal-shine"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #fde68a 0%, #f59e0b 45%, #b45309 100%)',
        boxShadow: '0 0 0 3px rgba(245,158,11,0.15), 0 6px 16px -4px rgba(0,0,0,0.5)',
      }}
    >
      <Award size={size * 0.5} color="#1c1206" strokeWidth={2} />
    </div>
  );
}

function CertificateCard({ cert, onPreview }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 sm:p-7 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col"
      style={{ ...glass, boxShadow: '0 8px 30px -12px rgba(0,0,0,0.55)' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Seal />
          <div>
            <p className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
              {cert.issuer}
            </p>
            <p className="text-xs text-slate-400">{cert.issuerSub}</p>
          </div>
        </div>
        <ShieldCheck size={20} className="text-teal-400 shrink-0 mt-1" />
      </div>

      <h3
        className={`mt-5 text-xl sm:text-2xl font-semibold leading-snug ${
          cert.placeholder ? 'text-amber-300 italic' : 'text-white'
        }`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {cert.title}
      </h3>

      <p className="mt-2 text-sm text-slate-300">Issued to {cert.recipient}</p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
        <span className="flex items-center gap-1.5">
          <Calendar size={15} className="text-teal-400" />
          <span className={cert.placeholder ? 'text-amber-300 italic' : ''}>{cert.dateLabel}</span>
        </span>
        {cert.duration && (
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-teal-400" />
            {cert.duration}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-400 leading-relaxed">{cert.blurb}</p>

      {cert.courses.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 text-sm text-teal-300 hover:text-teal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
            {open ? 'Hide course list' : `Show all ${cert.courses.length} courses`}
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open ? 400 : 0 }}
          >
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {cert.courses.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="text-teal-400 mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div
        className="mt-6 pt-5 flex items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <button
          onClick={() => onPreview(cert)}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <Eye size={16} /> Preview
        </button>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)', color: '#06231f' }}
        >
          <Download size={16} /> Download
        </a>
      </div>
    </div>
  );
}

function PreviewModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(2,6,15,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-1 modal-pop"
        style={{
          background: 'linear-gradient(135deg, rgba(45,212,191,0.4), rgba(15,23,42,0.4))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="rounded-2xl p-8 sm:p-10 text-center relative"
          style={{
            background: 'linear-gradient(160deg, #0b1220 0%, #0f2a28 100%)',
            border: '1px solid rgba(45,212,191,0.25)',
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full p-1"
            aria-label="Close preview"
          >
            <X size={18} />
          </button>

          <div className="flex justify-center mb-4">
            <Seal size={52} />
          </div>

          <p className="text-xs uppercase tracking-widest text-teal-300 font-semibold">
            Certificate of Completion
          </p>

          <h2
            className="mt-4 text-2xl sm:text-3xl text-white italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {cert.recipient}
          </h2>

          <p className="mt-2 text-sm text-slate-400">has successfully completed</p>

          <h3
            className={`mt-3 text-xl sm:text-2xl font-semibold ${
              cert.placeholder ? 'text-amber-300 italic' : 'text-teal-200'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {cert.title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {cert.issuer} · {cert.issuerSub}
          </p>

          <div
            className="mt-6 pt-6 flex justify-between text-left"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Date of completion</p>
              <p className={`text-sm mt-0.5 ${cert.placeholder ? 'text-amber-300 italic' : 'text-white'}`}>
                {cert.dateLabel}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Duration</p>
              <p className="text-sm mt-0.5 text-white">{cert.duration || '—'}</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500 italic">
            Visual recreation for preview — the verified original is hosted on {cert.issuer}.
          </p>

          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
          >
            View verified credential <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div
      className="rounded-full px-4 py-1.5 text-sm flex items-center gap-2"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <span className="text-teal-300 font-semibold">{value}</span>
      <span className="text-slate-400">{label}</span>
    </div>
  );
}

export function Certificates() {
  const [previewCert, setPreviewCert] = useState(null);
  const totalCourses = CERTIFICATES.reduce((sum, c) => sum + (c.courses.length || 1), 0);

  return (
    <section
  id="certificates"
  className="relative min-h-screen overflow-hidden scroll-mt-28"
  style={{ background: "#070b14" }}
>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Inter:wght@400;500;600;700&display=swap');
        .cert-root { font-family: 'Inter', system-ui, sans-serif; }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-pop { animation: popIn 0.25s ease-out; }
        @keyframes shine {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.25); }
          100% { filter: brightness(1); }
        }
        .seal-shine:hover { animation: shine 1.2s ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          .modal-pop, .seal-shine:hover { animation: none !important; }
        }
      `}</style>

      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ width: 420, height: 420, top: -120, left: -100, background: '#0d9488', opacity: 0.18 }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ width: 360, height: 360, bottom: -100, right: -80, background: '#0f766e', opacity: 0.15 }}
      />

      <div className="cert-root relative max-w-5xl mx-auto px-6 py-20 sm:py-24">
        <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
          Verified Credentials
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Certificates</h1>
        <p className="mt-3 text-slate-400 max-w-xl">
          Courses and specializations completed, verified by their issuing platforms.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Stat label="Credentials" value={CERTIFICATES.length} />
          <Stat label="Courses completed" value={totalCourses} />
          <Stat label="Verified" value="100%" />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onPreview={setPreviewCert} />
          ))}
        </div>
      </div>

      {previewCert && <PreviewModal cert={previewCert} onClose={() => setPreviewCert(null)} />}
    </section>
  );
}
