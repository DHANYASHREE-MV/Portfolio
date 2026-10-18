import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Living neural network: drifting nodes, edges that brighten near the cursor,
 * and signal pulses that travel along connections like activations.
 */
export default function NeuralNetwork() {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let nodes = [];
    let pulses = [];
    let raf = 0;
    let visible = true;
    const LINK = 150;

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(95, Math.floor((w * h) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.8,
      }));
      pulses = [];
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const spawnPulse = () => {
      if (pulses.length > 14 || nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      let best = -1;
      let bestD = LINK;
      for (let k = 0; k < nodes.length; k += 1) {
        if (k === a) continue;
        const d = Math.hypot(nodes[a].x - nodes[k].x, nodes[a].y - nodes[k].y);
        if (d < bestD && Math.random() > 0.4) {
          best = k;
          bestD = d;
        }
      }
      if (best >= 0) pulses.push({ a, b: best, t: 0, hops: 0 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 120 && d > 0) {
            n.x += (dx / d) * 0.9;
            n.y += (dy / d) * 0.9;
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < LINK) {
            const mx = (nodes[i].x + nodes[j].x) / 2 - mouse.x;
            const my = (nodes[i].y + nodes[j].y) / 2 - mouse.y;
            const near = Math.max(0, 1 - Math.hypot(mx, my) / 220);
            const alpha = (1 - d / LINK) * (0.18 + near * 0.6);
            ctx.strokeStyle = `rgba(${near > 0.2 ? "236,72,153" : "145,10,103"},${alpha})`;
            ctx.lineWidth = 0.6 + near * 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = "rgba(244,114,182,0.75)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) {
        if (Math.random() < 0.08) spawnPulse();
        pulses = pulses.filter((p) => {
          p.t += 0.03;
          const A = nodes[p.a];
          const B = nodes[p.b];
          if (!A || !B) return false;
          const x = A.x + (B.x - A.x) * p.t;
          const y = A.y + (B.y - A.y) * p.t;
          const g = ctx.createRadialGradient(x, y, 0, x, y, 12);
          g.addColorStop(0, "rgba(94,234,212,0.95)");
          g.addColorStop(1, "rgba(94,234,212,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fill();
          if (p.t >= 1) {
            if (p.hops < 3) {
              let next = -1;
              let nd = LINK;
              for (let k = 0; k < nodes.length; k += 1) {
                if (k === p.b || k === p.a) continue;
                const d = Math.hypot(B.x - nodes[k].x, B.y - nodes[k].y);
                if (d < nd && Math.random() > 0.3) {
                  next = k;
                  nd = d;
                }
              }
              if (next >= 0) {
                pulses.push({ a: p.b, b: next, t: 0, hops: p.hops + 1 });
              }
            }
            return false;
          }
          return true;
        });
      }

      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  );
}
