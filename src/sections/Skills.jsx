import { ChevronDown } from "lucide-react";
import { useMemo, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Skills data — edit this array to add/update skills or move them between
// categories. The "Data Science" entries are placeholders inferred from your
// Coursera/Udemy certificates (Python, ML, Data Analyst, etc.) — adjust the
// level/years/progress to match your actual confidence, or remove them.
// ---------------------------------------------------------------------------
const SKILLS = [
  { name: "React", level: "Expert", years: "4+", progress: 92, category: "Web Development" },
  { name: "Next.js", level: "Advanced", years: "2+", progress: 85, category: "Web Development" },
  { name: "TypeScript", level: "Advanced", years: "2+", progress: 82, category: "Web Development" },
  { name: "Node.js", level: "Advanced", years: "3+", progress: 84, category: "Web Development" },
  { name: "Express.js", level: "Advanced", years: "3+", progress: 85, category: "Web Development" },
  { name: "MongoDB", level: "Advanced", years: "3+", progress: 82, category: "Web Development" },
  { name: "Redux Toolkit", level: "Advanced", years: "2+", progress: 80, category: "Web Development" },
  { name: "Tailwind", level: "Expert", years: "3+", progress: 95, category: "Web Development" },
  { name: "Bootstrap", level: "Intermediate", years: "1+", progress: 60, category: "Web Development" },

  { name: "Docker", level: "Intermediate", years: "1+", progress: 65, category: "Tools" },
  { name: "Redis", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },
  { name: "Postman", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },
  { name: "Git", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },
  { name: "GitHub", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },
  { name: "Linux", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },
  { name: "NPM", level: "Intermediate", years: "1+", progress: 60, category: "Tools" },

  { name: "Python", level: "Advanced", years: "3+", progress: 78, category: "Data Science", placeholder: false },
  { name: "Pandas & NumPy", level: "Intermediate", years: "2+", progress: 65, category: "Data Science", placeholder: false },
  { name: "SQL", level: "Intermediate", years: "2+", progress: 68, category: "Data Science", placeholder: false },
  { name: "Scikit-learn", level: "Intermediate", years: "1+", progress: 60, category: "Data Science", placeholder: false },
];

const SKILL_TABS = ["All", "Web Development", "Tools", "Data Science"];
const VISIBLE_SKILLS_COUNT = 8;

// Rendered twice back-to-back for the marquee so the `-50%` translate in
// the `skillsMarquee` keyframe has a full duplicate set to scroll into —
// otherwise the tail end of the list never enters view before the loop resets.
const marqueeSkills = [...SKILLS, ...SKILLS].map((skill) => skill.name);

function SkillCard({ skill }) {
  return (
    <div className="glass rounded-2xl p-5 hover:glow-border transition-all duration-300">
      <div className="flex justify-between mb-3">
        <div>
          <h4 className={`font-semibold ${skill.placeholder ? "text-highlight italic" : ""}`}>
            {skill.name}
          </h4>
          <p className="text-xs text-muted-foreground">{skill.level}</p>
        </div>

        <div className="text-right">
          <span className="text-primary font-semibold">{skill.years}</span>
          <p className="text-xs text-muted-foreground">experience</p>
        </div>
      </div>

      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div className="skill-fill" style={{ width: `${skill.progress}%` }} />
      </div>
    </div>
  );
}

export const Skills = () => {
  const [activeSkillTab, setActiveSkillTab] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [marqueeExpanded, setMarqueeExpanded] = useState(false);
  const marqueeRef = useRef(null);

  const handleToggleMarquee = () => {
    if (!marqueeExpanded) {
      setMarqueeExpanded(true);

      setTimeout(() => {
        marqueeRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return;
    }

    setMarqueeExpanded(false);
  };

  const filteredSkills = useMemo(
    () =>
      activeSkillTab === "All"
        ? SKILLS
        : SKILLS.filter((s) => s.category === activeSkillTab),
    [activeSkillTab]
  );

  const visibleSkills = showAllSkills
    ? filteredSkills
    : filteredSkills.slice(0, VISIBLE_SKILLS_COUNT);
  const hasMoreSkills = filteredSkills.length > VISIBLE_SKILLS_COUNT;

  const handleSkillTabChange = (tab) => {
    setActiveSkillTab(tab);
    setShowAllSkills(false);
  };

  return (
    // Previously nested inside <section id="home">, which is why the Navbar
    // scroll-spy misfired on nested sections. Standalone + sibling to Home now.
    <section id="skills" className="relative py-20 scroll-mt-28">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              Proficiency &amp; Experience
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Skills</h3>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SKILL_TABS.map((tab) => {
              const isActive = activeSkillTab === tab;
              const count =
                tab === "All" ? SKILLS.length : SKILLS.filter((s) => s.category === tab).length;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleSkillTabChange(tab)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
  isActive
    ? "text-primary bg-primary/20 shadow-[0_0_28px_4px_hsl(var(--primary)/0.8)] scale-105"
    : "text-muted-foreground hover:text-foreground"
}`}
                >
                  {tab}
                  <span className={isActive ? "ml-2 text-xs text-primary/70" : "ml-2 text-xs text-muted-foreground/60"}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {visibleSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">
              No skills tagged in this category yet.
            </p>
          )}

          {/* Expand / Collapse */}
          {hasMoreSkills && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSkills((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary glass hover:glow-border transition-all duration-300"
              >
                {showAllSkills ? "Show Less" : `Show All ${filteredSkills.length}`}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${showAllSkills ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>

        {/* Technologies marquee — the expand/collapse toggle used to live at
            the bottom of Hero's viewport; it now lives right here since this
            is the section that actually owns the marquee state. */}
        <div ref={marqueeRef} className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>

          <div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
              marqueeExpanded ? "max-h-105" : "max-h-20"
            }`}
          >
            {marqueeExpanded ? (
              <div className="flex flex-wrap justify-center gap-3 px-6 py-2 animate-fade-in">
                {SKILLS.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-5 py-2 rounded-full glass text-sm font-medium text-muted-foreground border border-transparent hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            ) : (
              <>
                <style>{`
                  @keyframes skillsMarquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                  }
                `}</style>
                <div
                  className="flex w-max"
                  style={{ animation: "skillsMarquee 30s linear infinite" }}
                >
                  {marqueeSkills.map((skill, idx) => (
                    <div key={idx} className="shrink-0 px-8 py-4">
                      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleToggleMarquee}
              aria-expanded={marqueeExpanded}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary glass hover:glow-border transition-all duration-300"
            >
              {marqueeExpanded ? "Collapse" : "Show All Technologies"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${marqueeExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
