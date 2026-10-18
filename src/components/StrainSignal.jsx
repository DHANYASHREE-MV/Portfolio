import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Illustrative strain-gauge stream: noisy raw signal, exponentially smoothed
 * signal, and peak markers that tick a cycle counter (rainflow-style).
 * Not real NAL data.
 */
export default function StrainSignal({ height = 170, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = 260;
    const raw = new Array(N).fill(0);
    const smooth = new Array(N).fill(0);
    let marks = [];
    let cycles = 0;
    let t = 0;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const sample = (k) =>
      Math.sin(k * 0.055) * 0.75 +
      Math.sin(k * 0.017 + 1.3) * 0.9 +
      Math.sin(k * 0.13) * 0.18 +
      (Math.random() - 0.5) * 0.55;

    const step = () => {
      t += 1;
      const r = sample(t);
      raw.push(r);
      raw.shift();
      const prev = smooth[N - 1];
      smooth.push(prev + 0.14 * (r - prev));
      smooth.shift();
      marks = marks.map((m) => m - 1).filter((m) => m > 0);
      const a = smooth[N - 3];
      const b = smooth[N - 2];
      const c = smooth[N - 1];
      if (b > a && b > c && b > 0.55) {
        marks.push(N - 2);
        cycles += 1;
      }
    };

    for (let k = 0; k < N; k += 1) step();
    cycles = 0;
    marks = [];

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width;
      h = height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const Y = (v) => h / 2 - v * (h * 0.27);
    const X = (i) => (i / (N - 1)) * w;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let gy = 1; gy < 5; gy += 1) {
        ctx.beginPath();
        ctx.moveTo(0, (h / 5) * gy);
        ctx.lineTo(w, (h / 5) * gy);
        ctx.stroke();
      }
      const off = (t * 2) % 40;
      for (let gx = -40; gx < w + 40; gx += 40) {
        ctx.beginPath();
        ctx.moveTo(gx - off, 0);
        ctx.lineTo(gx - off, h);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(148,163,184,0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      raw.forEach((v, i) => (i ? ctx.lineTo(X(i), Y(v)) : ctx.moveTo(X(i), Y(v))));
      ctx.stroke();

      ctx.save();
      ctx.shadowColor = "#ec4899";
      ctx.shadowBlur = 14;
      ctx.strokeStyle = "#f472b6";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      smooth.forEach((v, i) => (i ? ctx.lineTo(X(i), Y(v)) : ctx.moveTo(X(i), Y(v))));
      ctx.stroke();
      ctx.restore();

      marks.forEach((m) => {
        const x = X(m);
        const y = Y(smooth[m]);
        ctx.strokeStyle = "rgba(94,234,212,0.5)";
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, h - 6);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#5eead4";
        ctx.beginPath();
        ctx.arc(x, y, 3.6, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(148,163,184,0.9)";
      ctx.fillText("raw strain", 10, 16);
      ctx.fillStyle = "#f472b6";
      ctx.fillText("exp. smoothed", 10, 31);
      ctx.fillStyle = "#5eead4";
      ctx.textAlign = "right";
      ctx.fillText(`cycles counted: ${cycles}`, w - 10, 16);
      ctx.textAlign = "left";
    };

    let acc = 0;
    let last = performance.now();
    const loop = (now) => {
      acc += now - last;
      last = now;
      while (acc > 24) {
        step();
        acc -= 24;
      }
      draw();
      if (visible) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce) {
        last = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      }
    });

    resize();
    for (let k = 0; k < 30; k += 1) step();
    draw();
    if (!reduce) raf = requestAnimationFrame(loop);
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [height, reduce]);

  return (
    <div className={className}>
      <canvas ref={ref} className="block" role="img" aria-label="Animated illustration of a strain signal being smoothed and its fatigue cycles counted" />
      <p className="mt-1 text-[10px] text-gray-500 font-mono">Illustrative signal, not real NAL data</p>
    </div>
  );
}
