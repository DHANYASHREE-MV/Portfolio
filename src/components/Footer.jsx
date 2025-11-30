import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { profileData } from "../data/mockData";

const Footer = () => {
  return (
    <footer className="bg-navy py-10 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 text-gray-400 mb-4">
        <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-magenta">
          <Linkedin />
        </a>
        <a href={profileData.social.github} target="_blank" rel="noreferrer" className="hover:text-magenta">
          <Github />
        </a>
        <a
          href={profileData.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:text-magenta"
        >
          <Instagram />
        </a>
        <a href={`mailto:${profileData.email}`} className="hover:text-magenta">
          <Mail />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Dhanyashree M V — Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
























