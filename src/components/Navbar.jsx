import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  House,
  User,
  Brain,
  Briefcase,
  FolderGit2,
  Award,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "home",
      icon: House,
      label: "Home",
    },
    {
      id: "about",
      icon: User,
      label: "About",
    },
    {
      id: "skills",
      icon: Brain,
      label: "Skills",
    },
    {
      id: "experience",
      icon: Briefcase,
      label: "Experience",
    },
    {
      id: "projects",
      icon: FolderGit2,
      label: "Projects",
    },
    {
      id: "leadership",
      icon: Award,
      label: "Leadership",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-navy/30 backdrop-blur-md"
          : "bg-transparent"
        }`}
    >
      <div className="relative h-20 flex items-center justify-center pl-20">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="
            absolute left-8
            text-3xl
            font-bold
            font-mono
            cursor-pointer
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-bright-purple
            to-magenta
          "
        >
          DMV<span className="text-magenta">.</span>
        </Link>

        {/* Desktop Floating Dock */}
        <div
          className="
    hidden md:flex
    absolute right-8
    items-center
    gap-8
    px-8
    py-4
    rounded-full
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    shadow-xl
  "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="
                  text-gray-400
                  hover:text-magenta
                  transition-all
                  duration-300
                  hover:scale-125
                  cursor-pointer
                "
              >
                <Icon size={22} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="absolute right-8 md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-navy/95
            backdrop-blur-md
            px-6
            py-6
            border-t
            border-white/10
            space-y-5
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="
                block
                text-gray-300
                hover:text-magenta
                transition-colors
                cursor-pointer
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;