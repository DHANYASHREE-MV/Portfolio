import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { Sparkles, Users, Check } from "lucide-react";
import CountUp from "./CountUp";

const iconMeta = [
  { Icon: Sparkles, color: "from-magenta to-bright-purple" },
  { Icon: Users, color: "from-amber-400 to-rose-500" },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const li = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Leadership = () => {
  const { leadership } = profileData;

  return (
    <section id="leadership" className="py-20 px-6 bg-navy relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-deep-purple/30 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Leadership<span className="text-magenta">.</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Leading teams and events alongside the engineering.
        </p>

        <div className="space-y-8">
          {leadership.map((item, index) => {
            const meta = iconMeta[index] || iconMeta[0];
            const Icon = meta.Icon;

            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="spin-border group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* accent bar grows in */}
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className={`absolute left-0 top-0 h-full w-1.5 origin-top bg-gradient-to-b ${meta.color}`}
                />

                <div className="grid gap-6 p-6 pl-8 md:grid-cols-[1fr,auto] md:p-8 md:pl-10">
                  <div>
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${meta.color} transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <p className="text-sm font-medium text-bright-purple">{item.org}</p>
                        <p className="text-xs text-gray-400">{item.dates}</p>
                      </div>
                    </div>

                    <motion.ul
                      variants={list}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="mt-5 space-y-2.5 text-sm text-gray-300"
                    >
                      {item.points.map((p) => (
                        <motion.li key={p} variants={li} className="flex gap-3 leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                          <span>{p}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {item.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 text-xs font-medium text-pink-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.stat && (
                    <div className="flex items-center justify-center md:min-w-[9rem]">
                      <div className="rounded-xl border border-white/10 bg-navy/60 px-6 py-5 text-center">
                        <p className="text-4xl font-bold text-magenta">
                          <CountUp to={item.stat.to} suffix={item.stat.suffix} />
                        </p>
                        <p className="mt-1 text-xs text-gray-400">{item.stat.label}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
