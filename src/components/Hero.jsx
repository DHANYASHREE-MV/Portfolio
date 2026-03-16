import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profileData } from "../data/mockData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      {/* Background */}
      <div
        className = <div className="absolute inset-0 bg-navy/95" />
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1651499833046-a21523397971?q=80&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-navy/92" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#910A67 1px, transparent 1px), linear-gradient(90deg, #910A67 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-magenta/40 bg-magenta/10 text-magenta text-sm font-mono mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
          Open to full-time AI/ML roles · 2026
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {profileData.name}
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta via-bright-purple to-magenta">
            AI/ML Engineer
          </span>
          <span className="text-gray-300"> · Full Stack Software development</span>
        </h2>

        
        
        
        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link to="projects" smooth duration={500}>
            <button className="bg-magenta hover:bg-bright-purple px-8 py-4 rounded-full text-lg text-white font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-magenta/30 hover:shadow-bright-purple/40">
              View Projects <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href={profileData.social.resume}
            download
            className="border border-white/30 px-8 py-4 rounded-full text-white hover:bg-white/10 transition-all duration-300 font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Social quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <span className="text-white/20">|</span>
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="text-white/20">|</span>
          <a
            href={`mailto:${profileData.email}`}
            className="text-gray-400 hover:text-magenta text-sm transition-colors"
          >
            {profileData.email}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;








