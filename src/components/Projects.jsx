import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { profileData } from "../data/mockData";

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
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-magenta/40 transition-all duration-300 shadow-lg hover:shadow-magenta/10"
            >
              {/* IMAGE HEADER */}
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-magenta font-semibold">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {project.title}
                    </h3>
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
            </motion.article>
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











