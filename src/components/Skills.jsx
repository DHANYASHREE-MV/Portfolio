import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { Code2, Brain, Database, Rocket, Wrench } from "lucide-react";

const categoryMeta = {
  programming: {
    icon: Code2,
    label: "Programming",
    color: "from-pink-500 to-purple-500",
  },
  ai_ml: {
    icon: Brain,
    label: "AI & Machine Learning",
    color: "from-purple-500 to-fuchsia-500",
  },
  mlops: {
    icon: Rocket,
    label: "MLOps & Deployment",
    color: "from-emerald-400 to-cyan-400",
  },
  data: {
    icon: Database,
    label: "Data & Analytics",
    color: "from-sky-400 to-indigo-500",
  },
  databases: {
    icon: Database,
    label: "Databases",
    color: "from-orange-400 to-pink-500",
  },
  tools: {
    icon: Wrench,
    label: "Tools & VCS",
    color: "from-yellow-400 to-red-500",
  },
};

const Skills = () => {
  const { skills } = profileData;

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#020c1b] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies{" "}
          <span className="text-teal-300">.</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, list], index) => {
            const meta = categoryMeta[key] || {};
            const Icon = meta.icon || Code2;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Glow border */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-teal-400/60 to-purple-500/60 opacity-0 group-hover:opacity-100 blur transition-opacity" />

                {/* Card */}
                <div className="relative bg-[#112240]/80 border border-[#233554] rounded-2xl p-6 h-full flex flex-col">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${meta.color || "from-teal-400 to-purple-500"
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

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-[#0a192f] border border-gray-600 text-gray-300 hover:border-teal-400 hover:text-white transition"
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