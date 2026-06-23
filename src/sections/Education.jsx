import React from "react";

const educationData = [
  {
    institution: "Padre Conceição College Of Engineering",
    location: "Verna, Goa",
    degree: "B.E. in Computer Engineering",
    board: "Goa University",
    duration: "JULY 2018 — AUGUST 2022",
  },
  {
    institution: "Infant Jesus Higher Secondary School",
    location: "Colva, Goa",
    degree: "12th Standard",
    board: "Goa Board",
    duration: "JUNE 2017 — MARCH 2018",
  },
  {
    institution: "Auxilium High School",
    location: "Benaulim, Goa",
    degree: "10th Standard",
    board: "Goa Board",
    duration: "JUNE 2015 — MARCH 2016",
  },
];

const GraduationCapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3z" fill="currentColor" />
    <path
      d="M5 13.18v4.34c0 .35.16.68.44.89C6.79 19.34 9.25 20.5 12 20.5s5.21-1.16 6.56-2.09c.28-.21.44-.54.44-.89v-4.34l-7 3.18-7-3.18z"
      fill="currentColor"
    />
  </svg>
);

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Academic Record
          </span>

          <h2 className="mt-3 text-4xl font-semibold">Education</h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-primary/70 via-border to-transparent" />

          <ol className="space-y-10">
            {educationData.map((item) => (
              <li key={item.institution} className="group relative pl-16">
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
                  <GraduationCapIcon
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
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.institution}</h3>

                      <p
                        className="
                          mt-1 flex items-center gap-2 text-sm text-muted-foreground
                          transition-all duration-500
                          group-hover:text-primary group-focus-within:text-primary
                        "
                      >
                        <span
                          className="
                            opacity-70 transition-all duration-500
                            group-hover:animate-pulse group-hover:scale-125 group-hover:opacity-100
                            group-hover:drop-shadow-[0_0_14px_hsl(var(--primary))]
                            group-focus-within:animate-pulse group-focus-within:scale-125 group-focus-within:opacity-100
                            group-focus-within:drop-shadow-[0_0_14px_hsl(var(--primary))]
                          "
                        >
                          📍
                        </span>
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-medium text-primary">
                    {item.degree}
                    <span className="text-muted-foreground"> · {item.board}</span>
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.duration}
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
