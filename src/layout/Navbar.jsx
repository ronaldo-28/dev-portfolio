import {Button} from "@/components/Button";

import {Menu, X} from "lucide-react";

import { useState, useEffect } from "react";

const navLinks = [

  { href: "#about", label: "About" },

  { href: "#projects", label: "Projects" },

  { href: "#experience", label: "Experience" },

  // { href: "#testimonials", label: "Testimonials" },

  { href: "#contact", label: "Contact" },

]





export const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

      const handleScroll = () => {

        setIsScrolled(window.scrollY > 50);

      }

      window.addEventListener("scroll", handleScroll);

      return () => {

        window.removeEventListener("scroll", handleScroll);

      }

    }, [])

  return (

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-strong' : 'bg-transparent py-5'}`}>



      <nav className="container mx-auto px-6 flex items-center justify-between">



        <a href="#" className="text-xl font-bold tracking-tight  hover:text-primary">

          MRF<span className="text-primary">.</span>

        </a>



        <div className="hidden md:flex items-centre gap-1">

          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

          {navLinks.map((link) => (

            <a

              key={link.href}

              href={link.href}

              className="px-4 py-2 text-sm text-muted-foreground hover:text--foreground rounded-full bg--surface"

            >

              {link.label}

            </a>

          ))}

          </div>

        </div>

          {/* CTA Button */}

          <div className="hidden md:block">

  <a href="#contact">

    <Button size="sm">

      Contact Me

    </Button>

  </a>

</div>

          {/*Mobile Menu Button */}

          <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>

            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}

          </button>

      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (

      <div className="md:hidden fixed top-20 left-0 right-0 z-50 glass-strong animate-fade-in">

        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">{navLinks.map((link) => (

            <a

              key={link.href}

              onClick={() => setIsMobileMenuOpen(false)}

              href={link.href}

              className="text-lg text-muted-foreground hover:text-foreground py-2"

            >

              {link.label}

            </a>))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>

  <Button>

    Contact Me

  </Button>

</a>

            </div>

      </div>

      )}



    </header>

  )
}
