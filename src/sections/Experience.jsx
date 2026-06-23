import React from "react";

const experiences = [
  {
    period: "Feb 2024 to March 2026",
    role: "Subject Matter Expert",
    company: "Chegg",
    mode: "Freelancing · Remote",
    description: "Solved 1000+ questions on various topics in Mathematics.",
    technologies: [],
    current: false,
  },
  {
    period: "June 2023 to July 2023",
    role: "Associate IT Analyst",
    company: "Government of Goa Directorate of Transport",
    mode: "Onsite",
    description:
      "Analysed tax records using Excel and SQL to uncover 150+ anomalies, improving Taxation Department processing efficiency by 30%. Identified 200+ tax defaulters through data mining in Python, issuing 180 permit suspension notices and increasing compliance by 22%. Processed and reconciled tax payments via Parivahan, managing ₹4 lakh+ in monthly transactions with 99.8% accuracy.",
    technologies: [
      "Excel",
      "SQL",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
    ],
    current: false,
  },
  {
    period: "June 2023 to July 2023",
    role: "Full Stack Web Developer Intern",
    company: "Prepinsta Prime",
    mode: "Remote",
    description:
      "Created various apps for the client like travel website, Task Management Web Application, Quiz App, Portfolio Website.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    current: false,
  },
  {
    period: "June 2023 to July 2023",
    role: "Trainee Developer - EDI",
    company: "Tangentia",
    mode: "Hybrid",
    description: "Converted data to various EDI formats.",
    technologies: ["AS2", "EDIFACT", "ANSI X12"],
    current: false,
  },
  {
    period: "Oct 2022",
    role: "Data Analyst Intern",
    company: "MedTourEasy",
    mode: "Remote",
    description:
      "Performed EDA on the dataset, visualized the data using matplotlib, performed data cleaning and feature selection and machine learning using python and scikit-learn.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
    ],
    current: false,
  },
  {
    period: "Sept 2021",
    role: "Data Science Intern",
    company: "Padre Conceicao College of Engineering, Verna (PCCE)",
    mode: "Remote",
    description:
      "Performed EDA on the dataset, visualized the data using matplotlib, performed data cleaning and feature selection using R.",
    technologies: ["R", "SQL"],
    current: false,
  },
  {
    period: "June 2021 - Sept 2021",
    role: "UI/UX Developer Intern",
    company: "Imagine Works",
    mode: "Remote",
    description: "Created wireframes for portfolio website, ecommerce website.",
    technologies: ["Figma"],
    current: false,
  },
];

const modeStyles = {
  Remote: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  Onsite: "bg-orange-500/10 text-orange-300 border-orange-500/30",
  Hybrid: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  "Freelancing · Remote": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
};

const modeEmoji = {
  Remote: "🏠",
  Onsite: "🏢",
  Hybrid: "🔀",
  "Freelancing · Remote": "✨",
};

// Always-on glow, color-matched to each mode — independent of hover state
const modeGlow = {
  Remote: "shadow-[0_0_14px_rgba(34,211,238,0.55)]",
  Onsite: "shadow-[0_0_14px_rgba(249,115,22,0.55)]",
  Hybrid: "shadow-[0_0_14px_rgba(167,139,250,0.55)]",
  "Freelancing · Remote": "shadow-[0_0_14px_rgba(52,211,153,0.55)]",
};

const BriefcaseIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Career Path
          </span>
          <h2 className="mt-3 text-4xl font-semibold">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-primary/70 via-border to-transparent" />

          <ol className="space-y-10">
            {experiences.map((item) => (
              <li key={`${item.company}-${item.period}`} className="group relative pl-16">
                {/* Timeline Dot */}
                <span
                  className={`
                    absolute left-0 top-0 flex h-10 w-10
                    items-center justify-center rounded-full
                    transition-all duration-500
                    glass-strong

                    group-hover:bg-primary/20
                    group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                    group-hover:scale-110
                    group-hover:ring-2 group-hover:ring-primary/50

                    group-focus-within:bg-primary/20
                    group-focus-within:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                    group-focus-within:scale-110
                    group-focus-within:ring-2 group-focus-within:ring-primary/50
                  `}
                >
                  <BriefcaseIcon
                    className="
                      h-5 w-5 text-primary/70 transition-all duration-500
                      group-hover:text-primary group-hover:animate-pulse
                      group-focus-within:text-primary group-focus-within:animate-pulse
                    "
                  />
                </span>

                {/* Card */}
                <div
                  tabIndex={0}
                  className="
                    w-full text-left rounded-(--radius)
                    p-6 transition-all duration-300
                    glass outline-none

                    group-hover:border-primary/40
                    group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]

                    group-focus-within:border-primary/40
                    group-focus-within:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                  "
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                    </div>

                    {/* Mode tag — glows constantly, not just on hover */}
                    <span
                      className={`
                        flex items-center gap-1.5 rounded-full border
                        px-3 py-1 text-xs font-medium
                        ${modeStyles[item.mode]}
                        ${modeGlow[item.mode]}
                      `}
                    >
                      <span>{modeEmoji[item.mode]}</span>
                      {item.mode}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-foreground/90">{item.description}</p>

                  {item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.period}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
