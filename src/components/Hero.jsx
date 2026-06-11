import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profileData } from "../data/mockData";
import NeuralNetwork from "./NeuralNetwork";
import FloatingAI from "./FloatingAI";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020c1b]"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#910A67 1px, transparent 1px), linear-gradient(90deg, #910A67 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Pink Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-magenta/10 blur-[180px]" />

      {/* AI Effects */}
      <NeuralNetwork />
      <FloatingAI />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        
        {/* Profile Image */}
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profileData.image}
          alt="Profile"
          className="w-52 h-52 rounded-full object-cover mx-auto mb-8 border-4 border-magenta/30 shadow-[0_0_60px_rgba(145,10,103,0.5)]"
        />

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          {profileData.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-8">
          <span className="text-magenta font-semibold">
            AI/ML Engineer
          </span>
          <span className="text-white/80">
            {" "}
            • Data Science Engineer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Building intelligent systems with Machine Learning,
          Generative AI, LangGraph, RAG pipelines, MLOps and
          scalable AI applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Link to="projects" smooth duration={500}>
            <button className="bg-magenta hover:bg-bright-purple px-10 py-4 rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-magenta/30">
              View Projects
              <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href={profileData.social.resume}
            download
            className="border border-white/20 px-10 py-4 rounded-full text-white hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center items-center gap-5 text-gray-400">
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Github size={18} />
            GitHub
          </a>

          <span>|</span>

          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <span>|</span>

          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-white"
          >
            {profileData.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;