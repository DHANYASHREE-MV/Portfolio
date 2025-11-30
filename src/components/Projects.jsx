import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profileData } from "../data/mockData";

const Projects = () => {
  const { projects } = profileData;

  return (
    <section id="projects" className="py-20 px-6 bg-navy relative overflow-hidden">
      {/* soft glow */}
      <div className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-80 w-80 rounded-full bg-magenta/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects<span className="text-magenta">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              {/* IMAGE HEADER */}
              <div
                className="relative h-40 overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:from-navy/80 transition-colors" />

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-300">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-200 bg-white/10 px-2.5 py-1.5 rounded-full hover:bg-white/20"
                    >
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* BODY CONTENT */}
              <div className="p-5 flex flex-col h-full">
                <p className="text-sm text-gray-200 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-navy/70 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* bottom link for mobile / fallback */}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-xs text-magenta hover:text-bright-purple"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;






















