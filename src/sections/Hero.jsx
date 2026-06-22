import { Button } from "@/components/Button";
import {ArrowRight, Download, ChevronDown} from "lucide-react";
import { AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Vercel",
  "Figma",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Django",
  "MySQL",
  "PostgreSQL",
  "GitLab",
  "Jest",
  "React Testing Library",
]

export const Hero = () => {
  // Warm the browser cache for the resume as soon as the Hero mounts.
  // By the time the user actually clicks "Download CV", the file is
  // usually already cached, so the click itself feels instant instead
  // of waiting for the fetch to start on click.
  useEffect(() => {
    fetch("/Resume.pdf", { cache: "force-cache" }).catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">

                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

                <span>
                  Full Stack MERN Developer
                </span>

                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

                <span>
                  Full Stack TypeScript + Nextjs + Nestjs Developer
                </span>

              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting
                <span className="text-primary glow-text">
                  {" "}digital
                </span>

                <br />

                experiences with

                <br />

                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Mafron Ronaldo Fernandes — a Full Stack Software Engineer focused on building scalable web applications with MERN, React, Next.js, NestJS, and TypeScript.
              </p>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                I create performant, production-ready experiences that combine elegant interfaces with robust backend systems to deliver real-world impact.
              </p>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
  <Button size="lg">
    Contact Me
    <ArrowRight className="w-5 h-5" />
  </Button>
</a>
              <a href="/Resume.pdf" download="Resume.pdf">
    <AnimatedBorderButton>
      <Download className="w-5 h-5" />
      Download CV
    </AnimatedBorderButton>
  </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>

              {[
                { icon: FaGithub, href: "https://github.com/ronaldo-28" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/mafronfernandes/" },
                { icon: SiLeetcode, href: "https://leetcode.com/u/mafronfernandes28/" },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
              rounded-3xl bg-linear-to-br
              from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse"
              />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img src="/profile-photo.jpg" alt="Mafron Ronaldo Fernandes" className="w-full aspect-4/5 object-cover rounded-2xl" />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse">
                  </div>
                  <span className="text-sm font-medium">Available for Work</span>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">
                  4+
                </div>
                <div className="text-xs text-muted-foreground ">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
  <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>

  <div className="relative overflow-hidden">
    <div className="flex animate-marquee">
      {skills.map((skill, idx) => (
        <div key={idx} className="shrink-0 px-8 py-4">
          <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
