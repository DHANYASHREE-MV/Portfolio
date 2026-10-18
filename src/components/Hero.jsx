import React from "react";
import { Link } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { profileData } from "../data/mockData";
import NeuralNetwork from "./NeuralNetwork";
import FloatingAI from "./FloatingAI";

const orbitChips = ["Research", "AI/ML", "GenAI", "IIMB", "CSIR-NAL"];

const phrases = [
  "research-grade ML pipelines",
  "multi-agent RAG systems",
  "computer vision that ships",
  "aerospace fatigue analytics",
  "assistive AI for blind users",
  "LLM evaluation benchmarks",
];

const Hero = () => {
  const reduce = useReducedMotion();
  const typed = useTypewriter(phrases, { still: reduce });
  const nameLetters = profileData.name.split("");

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
        className="relative z-20 text-center px-6 pt-24 pb-12 max-w-5xl"
      >
        
        {/* Profile Image + orbit */}
        <div className="orbit-wrap relative mx-auto mb-6 flex h-[19rem] w-[19rem] md:h-[24rem] md:w-[24rem] items-center justify-center">
          <div className="absolute inset-0 m-auto h-[calc(var(--r)*2)] w-[calc(var(--r)*2)] rounded-full border border-dashed border-magenta/30" />
          <div className="orbit-spin absolute left-1/2 top-1/2 h-0 w-0">
            {orbitChips.map((chip, i) => {
              const angle = (360 / orbitChips.length) * i - 90;
              return (
                <div
                  key={chip}
                  className="absolute left-0 top-0"
                  style={{ transform: `rotate(${angle}deg) translateX(var(--r))` }}
                >
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div className="orbit-counter">
                      <span className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-magenta/40 bg-[#0a1226]/90 px-3 py-1 text-xs font-mono text-pink-200 shadow-[0_0_18px_rgba(236,72,153,0.35)] backdrop-blur">
                        {chip}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={profileData.image}
            alt="Profile"
            className="relative h-40 w-40 md:h-52 md:w-52 rounded-full object-cover border-4 border-magenta/30 shadow-[0_0_60px_rgba(145,10,103,0.5)]"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" aria-label={profileData.name}>
          {nameLetters.map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={reduce ? false : { opacity: 0, y: 40, rotateX: -70 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.25 + i * 0.045, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
              style={{ transformPerspective: 600 }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-3xl mb-8 font-mono min-h-[2.5rem]">
          <span className="text-white/70">I build </span>
          <span className="text-magenta font-semibold">{typed}</span>
          <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-teal-300" />
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          AI/ML engineer working across research, Generative AI and
          applied machine learning, from assistive vision at IIM Bengaluru
          and fatigue analytics at CSIR-NAL to multi-agent RAG systems.
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