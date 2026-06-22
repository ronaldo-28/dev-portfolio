import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");

      let current = "#about";

      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 120; // navbar offset fix
        const offsetBottom = offsetTop + section.offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          MRF<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-foreground bg-primary/15 shadow-[0_0_16px_-2px_hsl(var(--primary)/0.65)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu (OUTSIDE nav but INSIDE header) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-50 glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-2 pl-3 border-l-2 transition-all duration-300 ${
                    isActive
                      ? "text-primary border-primary shadow-[0_0_12px_-2px_hsl(var(--primary)/0.5)]"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
