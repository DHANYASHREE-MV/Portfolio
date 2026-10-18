import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { profileData } from "../data/mockData";

const TiltCard = ({ children, index }) => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });
  const glare = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(236,72,153,0.22), transparent 55%)`
  );

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-magenta/40 transition-colors duration-300 shadow-lg hover:shadow-magenta/10"
    >
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      {children}
    </motion.article>
  );
};

const Projects = () => {
  const { projects } = profileData;

  return (
    <section id="projects" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* soft glow */}
      <div className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-80 w-80 rounded-full bg-bright-purple/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured Projects<span className="text-magenta">.</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          End-to-end builds — from research and modeling to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.title} index={index}>
              {/* IMAGE HEADER */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-magenta font-semibold">
                      {project.subtitle}
                    </p>
                    <a
  href={project.link}
  target="_blank"
  rel="noreferrer"
>
  <h3 className="text-lg md:text-xl font-bold text-white hover:text-pink-400 transition duration-300 cursor-pointer">
    {project.title}
  </h3>
</a>
                  </div>
                </div>
              </div>

              {/* BODY CONTENT */}
              <div className="p-6 flex flex-col h-full">
                <p className="text-sm text-gray-300 mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-magenta/30 bg-magenta/10 text-magenta font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  )}
                 {project.link && project.link !== "#" && (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 text-sm text-magenta hover:text-bright-purple transition-colors px-4 py-2 rounded-lg border border-magenta/30 hover:border-bright-purple/50 bg-magenta/5 hover:bg-bright-purple/10"
  >
    <ExternalLink size={15} /> Live Demo
  </a>
)}
</div>
</div>

</TiltCard>


         
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
          >
            <Github size={18} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;











