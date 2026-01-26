import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Web Development",
    tagline: "Building fast, responsive and modern web apps.",
    items: [
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
  
      {
        name: "TailwindCSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    category: "App Development",
    tagline: "Cross-platform apps with smooth UI & performance.",
    items: [
      {
        name: "Flutter",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "React Native",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    
      {
        name: "Java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Design",
    tagline: "Designing clean UI/UX and visuals that feel premium.",
    items: [
      {
        name: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      },
      // ✅ Canva fixed icon (old SVG sometimes doesn't load)
      {
        name: "Canva",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      },
      {
        name: "Photoshop",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
      },
      {
        name: "Illustrator",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* ✨ Soft White Glow Background (still BLACK base) */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[520px] h-[520px] bg-white/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[620px] h-[620px] bg-white/10 rounded-full blur-[160px]" />
        <div className="absolute top-[35%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      {/* Title */}
      <motion.h2
        className="relative text-center text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          &lt;Skills /&gt; My TechStack
        </span>
      </motion.h2>

      <motion.p
        className="relative text-center text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
      >
 
      </motion.p>

      {/* Skill Cards */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((section, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_55px_rgba(0,0,0,0.6)] overflow-hidden"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Top Shine Line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Category */}
            <h3 className="text-xl font-bold mb-2 text-center text-white">
              &lt;{section.category} /&gt;
            </h3>

            <p className="text-sm text-gray-400 text-center mb-6">
              {section.tagline}
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-4 mt-auto">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl 
                             border border-white/10 bg-white/5 hover:bg-white/10 
                             shadow-[0_0_25px_rgba(0,0,0,0.45)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-[11px] text-gray-300 group-hover:text-white transition text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
