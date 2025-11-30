import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profileData } from "../data/mockData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1651499833046-a21523397971?q=80&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h3 className="text-bright-purple font-mono text-lg mb-3">
          Hello, I am
        </h3>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {profileData.name}
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          {profileData.role}
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Building intelligent systems that solve real-world problems using AI,
          ML, and data-driven technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="projects" smooth duration={500}>
            <button className="bg-magenta hover:bg-bright-purple px-8 py-4 rounded-full text-lg text-white flex items-center gap-2 shadow-lg">
              View Projects <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href={profileData.social.resume}
            download
            className="border border-white/30 px-8 py-4 rounded-full text-white hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
