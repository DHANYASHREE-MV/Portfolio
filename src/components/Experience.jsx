import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-magenta/15 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Experience<span className="text-magenta">.</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          Real-world impact through research and engineering.
        </p>

        <div className="relative border-l-2 border-magenta/20">
          {profileData.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-12 ml-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] flex items-center justify-center w-[22px] h-[22px] rounded-full bg-magenta border-2 border-navy">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-magenta/30 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-xl text-white font-bold">{job.role}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-magenta/15 border border-magenta/30 text-magenta font-medium">
                    {job.dates}
                  </span>
                </div>

                <h4 className="text-bright-purple font-semibold mb-4 text-sm">
                  {job.company}
                </h4>

                <ul className="text-gray-300 space-y-2.5">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-magenta mt-1 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;








































