import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { Sparkles, Megaphone, Users } from "lucide-react";

const iconMeta = [
  {
    Icon: Sparkles,
    color: "from-magenta to-bright-purple",
  },
  {
    Icon: Megaphone,
    color: "from-emerald-400 to-cyan-400",
  },
  {
    Icon: Users,
    color: "from-amber-400 to-rose-500",
  },
];

const Leadership = () => {
  const { leadership } = profileData;

  return (
    <section
      id="leadership"
      className="py-20 px-6 bg-navy relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-deep-purple/30 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Leadership<span className="text-magenta">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => {
            const meta = iconMeta[index] || iconMeta[0];
            const Icon = meta.Icon;

            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                {/* glowing border on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-magenta/60 to-bright-purple/60 opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex gap-4">
                  {/* icon blob */}
                  <div className="mt-1">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-bright-purple text-sm font-medium">
                      {item.org}
                    </p>
                    <p className="text-gray-400 text-xs mb-3">{item.dates}</p>

                    <ul className="text-gray-300 text-sm space-y-1">
                      {item.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
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

export default Leadership;



























