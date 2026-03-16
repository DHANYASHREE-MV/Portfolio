import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { profileData } from "../data/mockData";

const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Name / tagline */}
        <p className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-bright-purple to-magenta mb-2">
          DMV<span className="text-magenta">.</span>
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Building AI systems that matter.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-8">
          {[
            { href: profileData.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: profileData.social.github, Icon: Github, label: "GitHub" },
            { href: profileData.social.instagram, Icon: Instagram, label: "Instagram" },
            { href: `mailto:${profileData.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-magenta hover:border-magenta/50 hover:bg-magenta/10 transition-all duration-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Dhanyashree M V — Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



















