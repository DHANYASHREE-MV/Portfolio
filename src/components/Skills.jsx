import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { Code2, Brain, Database, Rocket } from "lucide-react";

const categoryMeta = {
  programming: {
    icon: Code2,
    label: "Programming",
    color: "from-magenta to-bright-purple",
  },
  ai_ml: {
    icon: Brain,
    label: "AI & Machine Learning",
    color: "from-purple-500 to-magenta",
  },
  data: {
    icon: Database,
    label: "Data & Analytics",
    color: "from-sky-500 to-purple-500",
  },
  web_deployment: {
    icon: Rocket,
    label: "Web & Deployment",
    color: "from-emerald-500 to-cyan-400",
  },
  tools: {
    icon: Code2,
    label: "Developer Tools",
    color: "from-amber-400 to-rose-500",
  },
};

const Skills = () => {
  const { skills } = profileData;

  return (
    <section id="skills" className="py-20 px-6 bg-navy relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-deep-purple/30 blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills<span className="text-magenta">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, list], index) => {
            const meta = categoryMeta[key] || {};
            const Icon = meta.icon || Code2;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-magenta/60 to-bright-purple/60 opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${
                        meta.color || "from-magenta to-bright-purple"
                      } flex items-center justify-center`}
                    >
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {meta.label || key}
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        {list.length} skills
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-navy/70 border border-white/15 text-gray-200 group-hover:border-magenta/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;














