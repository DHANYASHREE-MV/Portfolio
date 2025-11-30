import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Experience<span className="text-magenta">.</span>
        </h2>

        <div className="relative border-l-2 border-white/10">
          {profileData.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-12 ml-6"
            >
              <div className="absolute -left-4 top-2 w-4 h-4 bg-magenta rounded-full"></div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl text-white font-bold">{job.role}</h3>
                  <span className="text-bright-purple text-sm">{job.dates}</span>
                </div>

                <h4 className="text-magenta font-semibold mb-4">
                  {job.company}
                </h4>

                <ul className="text-gray-300 space-y-2">
                  {job.description.map((point, idx) => (
                    <li key={idx}>• {point}</li>
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
