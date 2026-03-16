import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Leadership"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-bright-purple to-magenta cursor-pointer"
        >
          DMV<span className="text-magenta">.</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-magenta group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          {/* Hire Me CTA */}
          <a
            href="mailto:dhanyashreemv@gmail.com"
            className="ml-2 px-4 py-1.5 rounded-full border border-magenta/50 text-magenta hover:bg-magenta hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md px-6 py-4 space-y-4 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          <a
            href="mailto:dhanyashreemv@gmail.com"
            className="block text-magenta font-medium"
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;













































