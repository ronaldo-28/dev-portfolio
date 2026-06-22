import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "MERN",
    description: "Full-stack ecommerce with payments",
    image: "projects/project1.png",
    tags: ["React", "Node", "MongoDB"],
    link: "#",
    github: "#",
  },

  {
    title: "Project Management App",
    category: "MERN",
    description: "Trello style collaboration",
    image: "projects/project2.png",
    tags: ["React", "Socket.io"],
    link: "#",
    github: "#",
  },

  {
    title: "Social Media App",
    category: "MERN",
    description: "Realtime social platform",
    image: "projects/project3.png",
    tags: ["Express", "MongoDB"],
    link: "#",
    github: "#",
  },

  {
    title: "AI Job Tracker",
    category: "Next.js",
    description: "Track jobs with AI insights",
    image: "projects/project4.png",
    tags: ["Next.js", "TS"],
    link: "#",
    github: "#",
  },

  {
    title: "Analytics Dashboard",
    category: "Next.js",
    description: "Modern SaaS analytics",
    image: "projects/project5.png",
    tags: ["Next.js", "Prisma"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
  "All",
  ...new Set(projects.map((p) => p.category)),
];

const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.category === activeCategory
      );

const visibleProjects =
  showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase">
            Featured Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A selection of my recent work.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => {
        setActiveCategory(category);
        setShowAll(false);
      }}
      className={`
        px-5 py-2 rounded-full
        transition-all duration-300

        ${
          activeCategory === category
            ? `
              bg-primary
              text-background
              shadow-[0_0_30px_rgba(32,178,166,.3)]
            `
            : `
              glass
              text-muted-foreground
              hover:text-primary
            `
        }
      `}
    >
      {category}
    </button>
  ))}
</div>

{/* Project Grid */}

<div className="grid md:grid-cols-2 gap-8">
  {visibleProjects.map((project) => (
    <div
      key={project.title}
      className="
        group
        glass
        rounded-2xl
        overflow-hidden
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      <div className="relative overflow-hidden aspect-video">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full glass"
          >
            <ArrowUpRight />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full glass"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="p-6 space-y-4">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <span className="text-xs text-primary">
            {project.category}
          </span>

        </div>

        <p className="text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                glass
                text-xs
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>

        {/* Button */}
        {!showAll && filteredProjects.length > 3 > 3 && (
          <div className="text-center mt-12">
            <div onClick={() => setShowAll(true)}>
              <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
