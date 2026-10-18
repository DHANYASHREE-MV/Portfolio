import React from "react";
import StrainSignal from "./StrainSignal";

const TEAL = "#5eead4";
const PINK = "#f472b6";
const DEEP = "#910A67";

/* ---------------- Research: a knowledge graph that grows ---------------- */
const rNodes = [
  { id: "q", x: 60, y: 120, label: "Question" },
  { id: "l", x: 150, y: 50, label: "Literature" },
  { id: "s", x: 150, y: 195, label: "Standard" },
  { id: "m", x: 255, y: 120, label: "Method" },
  { id: "e", x: 335, y: 60, label: "Experiment" },
  { id: "f", x: 340, y: 190, label: "Finding" },
];
const rEdges = [
  ["q", "l"],
  ["q", "s"],
  ["l", "m"],
  ["s", "m"],
  ["m", "e"],
  ["m", "f"],
  ["e", "f"],
];
const rn = Object.fromEntries(rNodes.map((n) => [n.id, n]));

export function ResearchScene() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label="Animated graph linking a research question to literature, standards, method, experiment and finding">
      {rEdges.map(([a, b], i) => (
        <path
          key={`${a}${b}`}
          d={`M${rn[a].x} ${rn[a].y} L${rn[b].x} ${rn[b].y}`}
          pathLength="1"
          fill="none"
          stroke={i % 2 ? TEAL : PINK}
          strokeWidth="1.6"
          className="draw-loop"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      {rNodes.map((n, i) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r="9"
            fill="#020c1b"
            stroke={PINK}
            strokeWidth="1.5"
            className="node-pulse"
            style={{ "--l": i * 0.6 }}
          />
          <circle cx={n.x} cy={n.y} r="3.5" fill={TEAL} />
          <text x={n.x} y={n.y + 26} textAnchor="middle" fontSize="11" fill="#cbd5e1" fontFamily="JetBrains Mono, monospace">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------------- AI/ML: forward pass + falling loss ---------------- */
const layers = [3, 5, 5, 2];
const lx = [60, 150, 250, 340];
const ly = (count, k) => 20 + ((130 - 0) / (count + 1)) * (k + 1);

export function MLScene() {
  const edges = [];
  for (let L = 0; L < layers.length - 1; L += 1) {
    for (let a = 0; a < layers[L]; a += 1) {
      for (let b = 0; b < layers[L + 1]; b += 1) {
        edges.push(
          <line
            key={`${L}-${a}-${b}`}
            x1={lx[L]}
            y1={ly(layers[L], a)}
            x2={lx[L + 1]}
            y2={ly(layers[L + 1], b)}
            stroke="rgba(244,114,182,0.16)"
            strokeWidth="0.8"
          />
        );
      }
    }
  }
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label="Animated neural network forward pass and a falling loss curve">
      {edges}
      {layers.map((count, L) =>
        Array.from({ length: count }, (_, k) => (
          <circle
            key={`${L}-${k}`}
            cx={lx[L]}
            cy={ly(count, k)}
            r="6"
            fill={L === layers.length - 1 ? TEAL : PINK}
            className="node-pulse"
            style={{ "--l": L }}
          />
        ))
      )}
      <text x="20" y="178" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">
        loss
      </text>
      <path d="M40 182 V238 H380" stroke="rgba(255,255,255,0.18)" fill="none" />
      <path
        d="M40 190 C 80 190, 90 225, 130 228 S 220 233, 260 235 S 340 236, 380 236"
        pathLength="1"
        fill="none"
        stroke={TEAL}
        strokeWidth="2.2"
        className="draw-loop"
      />
      <text x="380" y="176" textAnchor="end" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">
        epochs
      </text>
    </svg>
  );
}

/* ---------------- GenAI: RAG pipeline with travelling packets ---------------- */
const stages = [
  { x: 14, label: "Query" },
  { x: 92, label: "Router" },
  { x: 170, label: "Retriever" },
  { x: 248, label: "LLM" },
  { x: 326, label: "Answer" },
];

export function GenAIScene({ still }) {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label="Animated retrieval-augmented generation pipeline from query to answer">
      <path id="ragpath" d="M40 95 H360" stroke="rgba(244,114,182,0.35)" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
      {stages.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y="70"
            width="60"
            height="50"
            rx="10"
            fill="#0b1226"
            stroke={i === 2 ? TEAL : DEEP}
            strokeWidth="1.5"
          />
          <text x={s.x + 30} y="99" textAnchor="middle" fontSize="10.5" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace">
            {s.label}
          </text>
        </g>
      ))}
      <text x="200" y="146" textAnchor="middle" fontSize="9.5" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">
        FAISS · PostgreSQL · documents
      </text>
      {!still &&
        [0, 1, 2].map((i) => (
          <circle key={i} r="4.5" fill={i === 1 ? TEAL : PINK}>
            <animateMotion dur="4.5s" begin={`${i * 1.5}s`} repeatCount="indefinite" path="M40 95 H360" />
          </circle>
        ))}
      <text x="20" y="190" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">
        streaming answer
      </text>
      {Array.from({ length: 12 }, (_, i) => (
        <rect
          key={i}
          x={20 + i * 29}
          y="200"
          width={20 + ((i * 7) % 3) * 4}
          height="9"
          rx="3"
          fill={i % 4 === 3 ? TEAL : PINK}
          className="token-fade"
          style={{ "--i": i }}
        />
      ))}
      <rect x="20" y="216" width="150" height="9" rx="3" fill={PINK} className="token-fade" style={{ "--i": 12 }} />
      <rect x="176" y="216" width="8" height="12" fill={TEAL} className="caret" />
    </svg>
  );
}

/* ---------------- IIMB: assistive object detection ---------------- */
export function IIMBScene() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label="Animated first-person view with object detection boxes around obstacles and an audio cue">
      <rect x="30" y="14" width="340" height="190" rx="10" fill="#0b1226" stroke="rgba(255,255,255,0.18)" />
      <path d="M30 120 H370" stroke="rgba(255,255,255,0.12)" />
      <path d="M200 120 L120 204 M200 120 L280 204" stroke="rgba(244,114,182,0.25)" strokeDasharray="4 5" fill="none" />

      <rect x="96" y="92" width="38" height="52" rx="3" fill="#1e293b" />
      <rect x="232" y="104" width="64" height="40" rx="3" fill="#1e293b" />
      <circle cx="186" cy="112" r="11" fill="#1e293b" />

      <g className="build-in" style={{ "--i": 1 }}>
        <rect x="90" y="86" width="50" height="64" rx="3" fill="none" stroke="#5eead4" strokeWidth="1.8" />
        <text x="92" y="80" fontSize="10" fill="#5eead4" fontFamily="JetBrains Mono, monospace">pole 0.91</text>
      </g>
      <g className="build-in" style={{ "--i": 3 }}>
        <rect x="226" y="98" width="76" height="52" rx="3" fill="none" stroke="#f472b6" strokeWidth="1.8" />
        <text x="228" y="92" fontSize="10" fill="#f472b6" fontFamily="JetBrains Mono, monospace">bench 0.87</text>
      </g>
      <g className="build-in" style={{ "--i": 5 }}>
        <rect x="172" y="98" width="30" height="30" rx="3" fill="none" stroke="#5eead4" strokeWidth="1.8" />
        <text x="164" y="92" fontSize="10" fill="#5eead4" fontFamily="JetBrains Mono, monospace">person 0.94</text>
      </g>

      <circle cx="60" cy="226" r="6" fill="#f472b6" />
      {[0, 1, 2].map((k) => (
        <circle
          key={k}
          cx="60"
          cy="226"
          r="8"
          fill="none"
          stroke="#f472b6"
          strokeWidth="1.4"
          className="node-pulse"
          style={{ "--l": k * 0.7 }}
        />
      ))}
      <text x="84" y="230" fontSize="10.5" fill="#cbd5e1" fontFamily="JetBrains Mono, monospace">
        audio cue: obstacle ahead, left
      </text>
    </svg>
  );
}

/* ---------------- NAL: live strain signal ---------------- */
export function NALScene() {
  return (
    <div className="w-full h-full flex items-center">
      <StrainSignal className="w-full" height={190} />
    </div>
  );
}
