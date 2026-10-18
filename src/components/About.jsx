import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profileData } from "../data/mockData";
import { GraduationCap, MapPin, Mail, Phone, Copy, Check } from "lucide-react";
import CountUp from "./CountUp";
import ScrollText from "./ScrollText";

const workingOn = [
  "Research",
  "Generative AI",
  "Assistive AI",
  "Predictive maintenance",
  "LLM evaluation",
];

const stats = [
  { to: 4, suffix: "+", decimals: 0, label: "Projects Shipped" },
  { to: 4, suffix: "", decimals: 0, label: "Research & Industry Roles" },
  { to: 9.0, suffix: "", decimals: 1, label: "CGPA" },
];

const CgpaRing = () => {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
        <motion.circle
          cx="40"
          cy="40"
          r="34"
          fill="none"
          stroke="url(#cgpa)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 0.9 : 0 }}
          whileInView={{ pathLength: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="cgpa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#5eead4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-lg font-bold text-white">
          <CountUp to={9.0} decimals={1} />
        </span>
        <span className="mt-0.5 text-[10px] text-gray-400">/ 10</span>
      </div>
    </div>
  );
};

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy email address"
      className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 text-gray-300 transition-colors hover:border-magenta/60 hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "ok" : "copy"}
          initial={{ scale: 0.4, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.4, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="flex"
        >
          {copied ? <Check size={15} className="text-teal-300" /> : <Copy size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const cardIn = (i) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
});

const About = () => {
  const edu = profileData.education[0];

  return (
    <section id="about" className="py-20 px-6 bg-navy relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-magenta/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me<span className="text-magenta">.</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          {/* LEFT */}
          <div className="spin-border rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
            <ScrollText
              text={profileData.about}
              className="text-xl md:text-2xl leading-relaxed font-medium text-white"
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {workingOn.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 300, damping: 18 }}
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 text-xs font-medium text-pink-300"
                >
                  {w}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/10 bg-navy/60 py-4 text-center"
                >
                  <p className="text-3xl font-bold text-magenta">
                    <CountUp to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 px-2 text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <motion.div
              {...cardIn(0)}
              className="flex items-center gap-4 rounded-xl border border-magenta/40 bg-navy/70 p-5"
            >
              <CgpaRing />
              <div>
                <div className="mb-1 flex items-center gap-2 text-gray-400">
                  <GraduationCap className="h-4 w-4" />
                  <h3 className="text-xs font-semibold tracking-wide uppercase">Education</h3>
                </div>
                <p className="font-semibold text-white">{edu.degree}</p>
                <p className="text-sm text-gray-300">{edu.institution}</p>
                <p className="mt-1 text-xs text-gray-400">{edu.dates}</p>
              </div>
            </motion.div>

            <motion.div
              {...cardIn(1)}
              className="flex items-start gap-4 rounded-xl border border-white/15 bg-navy/70 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Based in</h3>
                <p className="font-semibold text-white">{profileData.location}</p>
                <p className="mt-1 text-xs text-gray-400">Open to full-time and hybrid roles.</p>
              </div>
            </motion.div>

            <motion.div
              {...cardIn(2)}
              className="flex items-start gap-4 rounded-xl border border-white/15 bg-navy/70 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-purple-500">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Contact</h3>
                <p className="truncate text-sm text-gray-200">{profileData.email}</p>
                <p className="flex items-center gap-1 text-sm text-gray-200">
                  <Phone className="h-3 w-3 text-gray-400" />
                  {profileData.phone}
                </p>
              </div>
              <CopyEmail email={profileData.email} />
            </motion.div>

            <motion.div
              {...cardIn(3)}
              className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-emerald-300">Open to full-time roles</p>
                <p className="mt-0.5 text-xs text-gray-400">AI/ML and research positions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
