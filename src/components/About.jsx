import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/mockData";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  const edu = profileData.education[0];

  return (
    <section id="about" className="py-20 px-6 bg-navy relative overflow-hidden">
      
      {/* glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-magenta/25 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          About Me<span className="text-magenta">.</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-[1.6fr,1.1fr] items-stretch">
          
          {/* LEFT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
          >
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              {profileData.about}
            </p>

            {/* PROFILE PHOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <img
              src="/myprofile.jpg"
              alt="Profile"
              className="
              w-56 h-56           /* Increase size (change to w-56 h-56 if you want even bigger) */
              rounded-full        /* Makes it a perfect circle */
              object-cover        /* Keeps your face centered */
              border border-white/20 
              shadow-xl shadow-magenta/30"/>
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            
            {/* EDUCATION */}
            <div className="bg-navy/70 border border-magenta/40 rounded-xl p-5 flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-magenta to-bright-purple flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Education</h3>
                <p className="text-white font-semibold">{edu.degree}</p>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <p className="text-gray-400 text-xs mt-1">{edu.dates} · {edu.grade}</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-navy/70 border border-white/15 rounded-xl p-5 flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Based in</h3>
                <p className="text-white font-semibold">{profileData.location}</p>
                <p className="text-gray-400 text-xs mt-1">Open to full time and hybrid roles.</p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-navy/70 border border-white/15 rounded-xl p-5 flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Contact</h3>
                <p className="text-gray-200 text-sm">{profileData.email}</p>
                <p className="text-gray-200 text-sm flex items-center gap-1">
                  <Phone className="w-3 h-3 text-gray-400" />
                  {profileData.phone}
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;






















