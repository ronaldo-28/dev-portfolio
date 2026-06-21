import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "projects/project1.png",
    tags: ["tag1", "tag2", "tag3"],
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "projects/project2.png",
    tags: ["tag1", "tag2", "tag3"],
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: "projects/project3.png",
    tags: ["tag1", "tag2", "tag3"],
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    image: "projects/project4.png",
    tags: ["tag1", "tag2", "tag3"],
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
  },
  {
    title: "Project 5",
    description: "Description of Project 5",
    image: "projects/project5.png",
    tags: ["tag1", "tag2", "tag3"],
    link: "https://example.com/project5",
    github: "https://github.com/username/project5",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

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
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
            >

              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">

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
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full border"
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
        {!showAll && projects.length > 3 && (
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
