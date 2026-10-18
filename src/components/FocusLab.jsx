import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FlaskConical, Brain, Sparkles, Building2, Plane } from "lucide-react";
import {
  ResearchScene,
  MLScene,
  GenAIScene,
  IIMBScene,
  NALScene,
} from "./FocusScenes";

const areas = [
  {
    id: "research",
    label: "Research",
    icon: FlaskConical,
    Scene: ResearchScene,
    title: "Start from the question, validate against ground truth",
    text: "Whether it is fatigue data at NAL or LLM benchmarks at Handshake AI, I design the experiment, validate against ground truth, and track runs so results are reproducible.",
    tags: ["ASTM E1049-85", "Ground-truth validation", "LLM evaluation", "Experiment tracking"],
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: Brain,
    Scene: MLScene,
    title: "Models that leave the notebook",
    text: "From a YOLOv11 detector that texts alerts when it spots poachers to Random Forest pricing served over FastAPI, I build the model and the system around it, with MLflow tracking and Docker deployment.",
    tags: ["YOLOv11", "PyTorch", "MLflow", "Docker"],
  },
  {
    id: "genai",
    label: "Generative AI",
    icon: Sparkles,
    Scene: GenAIScene,
    title: "Nine agents, one assistant",
    text: "Cortex orchestrates 9 specialized agents with LangGraph, combining SQL querying and RAG to answer academic and administrative questions, with voice, multilingual translation and image understanding.",
    tags: ["LangGraph", "LangChain", "ChromaDB", "FastAPI"],
  },
  {
    id: "iimb",
    label: "IIM Bengaluru",
    icon: Building2,
    Scene: IIMBScene,
    title: "An AI mobility device for blind users",
    text: "As a research intern at IIM Bengaluru CSITM, I am developing a mobility support device that uses real-time object detection to identify obstacles and surroundings, and extending it to education and daily-activity assistance. I work with a professor and faculty across departments on system design and testing.",
    tags: ["Object detection", "Assistive AI", "System design & testing"],
  },
  {
    id: "nal",
    label: "CSIR-NAL",
    icon: Plane,
    Scene: NALScene,
    title: "Predicting remaining useful life of aircraft components",
    text: "I built an ML model that predicts Remaining Useful Life from real strain sensor data. Rainflow counting (ASTM E1049-85) with exponential smoothing extracts the fatigue features, and time-series EDA reveals degradation patterns.",
    tags: ["Rainflow counting", "Exponential smoothing", "RUL prediction"],
  },
];

export default function FocusLab() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const area = areas[active];
  const Scene = area.Scene;

  return (
    <section id="focus" className="py-20 px-6 bg-[#020c1b] relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-magenta/15 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Focus Areas<span className="text-magenta">.</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Pick one to see how it works.
        </p>

        <div className="grid gap-6 md:grid-cols-[250px,1fr]">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Focus areas"
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
          >
            {areas.map((a, i) => {
              const Icon = a.icon;
              const on = i === active;
              return (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                    on ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="focus-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-magenta/40 to-bright-purple/10 border border-magenta/50"
                    />
                  )}
                  <Icon className="relative w-5 h-5" />
                  <span className="relative font-semibold whitespace-nowrap">{a.label}</span>
                </button>
              );
            })}
          </div>

          {/* Stage */}
          <div className="spin-border rounded-2xl bg-[#0a1226] border border-white/10 overflow-hidden">
            <div className="relative h-[17rem] md:h-[19rem] p-4 bg-[radial-gradient(circle_at_50%_0%,rgba(145,10,103,0.25),transparent_65%)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={area.id}
                  initial={reduce ? false : { opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                  transition={{ duration: 0.35 }}
                  className="h-full w-full"
                >
                  <Scene still={reduce} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-6 md:p-8 border-t border-white/10" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={area.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-5 max-w-2xl">{area.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-magenta/30 bg-magenta/10 text-pink-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
