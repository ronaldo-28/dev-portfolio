const experiences = [
  {
    period: "Feb 2024 to March 2026",
    role: "Subject Matter Expert",
    company: "Chegg",
    description:
      "Solved 1000+ questions on various topics in Mathematics. ",
    technologies: [],
    current: false
  },
  {
    period: "June 2023 to July 2023",
    role: "Associate IT Analyst",
    company: "Government of Goa Directorate of Transport",
    description:
       `
      Analysed tax records using Excel and SQL to uncover 150+ anomalies, improving Taxation Department processing efficiency by 30%.

      Identified 200+ tax defaulters through data mining in Python, issuing 180 permit suspension notices and increasing compliance by 22%.

      Processed and reconciled tax payments via Parivahan, managing ₹4 lakh+ in monthly transactions with 99.8% accuracy.
    `,
    technologies: ["Exel", "SQL", "Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    current: false
  },
  {
    period: "June 2023 to July 2023",
    role: "Full Stack Web Developer Intern",
    company: "Prepinsta Prime",
    description:
      "Created various apps for the client like travel website, Task Management Web Application, Quiz App, Portfolio Website.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node.js", "Express.js", "MongoDB"],
    current: false
  },
  {
    period: "June 2023 to July 2023",
    role: "Trainee Developer - EDI",
    company: "Tangentia",
    description:
      "Converted data to various EDI formats.",
    technologies: ["AS2", "EDIFACT", "ANSI X12"],
    current: false
  },
  {
    period: "Oct 2022",
    role: "Data Analyst Intern",
    company: "MedTourEasy",
    description:
      "Performed EDA on the dataset, visualized the data using matplotlib, performed data cleaning and feature selection and machine learning using python and scikit-learn.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    current: false
  },
  {
    period: "Sept 2021",
    role: "Data Science Intern",
    company: "Padre Conceicao College of Engineering, Verna (PCCE) ",
    description:
      "Performed EDA on the dataset, visualized the data using matplotlib, performed data cleaning and feature selection using R.",
    technologies: ["R", "SQL"],
    current: false
  },
  {
    period: "June 2021 - Sept 2021",
    role: "UI/ UX Developer Intern",
    company: "Imagine Works",
    description:
      "Created wireframes for portfolio website, ecommerce website.",
    technologies: ["Figma"],
    current: false
  },
]
export const Experience = () => {
  return (
  <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Content (marked as `peer` so only hovering this column triggers the dot) */}
                <div
                  className={`peer pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot — glows only via peer-hover from the content column above */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 transition-all duration-300 peer-hover:scale-150 peer-hover:shadow-[0_0_20px_6px_rgba(32,178,166,0.9)]">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

    )
}
