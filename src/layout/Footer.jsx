import {  Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ronaldo-28", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mafronfernandes/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/mafronfernandes28/", label: "LeetCode" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
            MRF<span className="text-primary">.</span>
            </a>
           <div className="mt-2 space-y-2">
  <p className="text-sm text-muted-foreground">
    © {currentYear} Mafron Ronaldo Fernandes. All rights reserved.
  </p>

  <p className="flex items-center justify-center md:justify-start gap-1 text-sm text-muted-foreground">
    Built with
    <Heart
      className="
        w-4 h-4
        fill-red-500
        text-red-500
        animate-heartbeat
        hover:scale-125
        hover:drop-shadow-[0_0_12px_rgba(239,68,68,.8)]
        transition-all
      "
    />
    and lots of caffeine
  </p>
</div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
