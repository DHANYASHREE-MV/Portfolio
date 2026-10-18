import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cloud, Eye, Brain } from "lucide-react";
import { profileData } from "../data/mockData";

const icons = [Sparkles, Cloud, Eye, Brain];
const gradients = [
  "from-fuchsia-500 to-pink-400",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-cyan-400",
  "from-amber-400 to-rose-500",
];

const Tick = ({ delay }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="rgba(94,234,212,0.12)" stroke="rgba(94,234,212,0.5)" />
    <motion.path
      d="M7 12.5 L10.5 16 L17 8.5"
      fill="none"
      stroke="#5eead4"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    />
  </svg>
);

const Certifications = () => {
  const certifications = profileData?.certifications || [];

  return (
    <section id="certifications" className="py-20 px-6 bg-[#020c1b] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Certifications<span className="text-magenta">.</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Generative AI, cloud and human-centred design, learned from the source.
        </p>

        {certifications.length === 0 ? (
          <p className="text-center text-gray-400">No certifications available</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2" style={{ perspective: 1000 }}>
            {certifications.map((cert, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 40, rotateX: -18 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="spin-border group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1a33] p-6"
                >
                  {/* shine sweep */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[130%] group-hover:opacity-100"
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-pink-300">{cert.issuer}</p>
                      <h3 className="mt-1 text-lg font-semibold leading-snug text-white">{cert.name}</h3>
                    </div>

                    <Tick delay={0.3 + i * 0.12} />
                  </div>

                  {cert.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-[#0a192f] px-2.5 py-1 text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
