import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

export default function Projects() {
  const [index, setIndex] = useState(0);

  // ❌ Remove "Clones" projects
  const baseProjects = projectsData.filter(
    (p) =>
      !(
        (p.name || "").toLowerCase().includes("clone") ||
        (p.category || "").toLowerCase().includes("clone")
      )
  );

  // ✅ Update IEEE Website live + github link
  const updatedProjects = baseProjects.map((p) => {
    const name = (p.name || "").toLowerCase();

    if (name.includes("ieee")) {
      return {
        ...p,
        liveLink: "https://ieeegnitc.org/",
        repoLink: "https://github.com/Advaitkasturi",
      };
    }

    return p;
  });

  // ✅ Add CampusHub + Learn Matrix as custom projects
  const finalProjects = [
    ...updatedProjects,
    {
      name: "CampusHub",
      description:
        "An all-in-one campus platform for Events Discovery + Registration and Lost & Found. Built to reduce scattered info and make campus life easier with clean UI, tracking, and smart reminders.",
      tags: ["Flutter", "Firebase", "Cloud Storage", "Notifications", "QR"],
      liveLink: "",
      repoLink: "https://github.com/Advaitkasturi",
    },
    {
      name: "Learn Matrix",
      description:
        "This is a prototype of an AI-powered learning website that features a dedicated chatbot developed by us. The website contains all the essential resources to learn AI, including projects based on it to help users improve their skills.",
      tags: ["React", "AI Chatbot", "Learning Platform", "Resources"],
      liveLink: "",
      repoLink:
        "https://github.com/Advaitkasturi/LearnMatrix-vyoma-national-level-hackthon-",
    },
  ];

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % finalProjects.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + finalProjects.length) % finalProjects.length);

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* ✨ Soft White Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[520px] h-[520px] bg-white/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[650px] h-[650px] bg-white/10 rounded-full blur-[170px]" />
        <div className="absolute top-[35%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-16 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          Featured Projects
        </span>
        <span className="block mt-4 w-28 sm:w-40 h-[3px] mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full" />
      </motion.h2>

      {/* ===================== MOBILE CAROUSEL ===================== */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={finalProjects[index].name}
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden cursor-grab select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) handleNext();
              else if (info.offset.x > 100) handlePrev();
            }}
          >
            {/* Top Shine */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Card Header */}
            <div className="p-6 pb-4">
              <p className="text-[11px] text-gray-400 tracking-wide mb-2">
                Swipe to explore →
              </p>

              <h3 className="text-2xl font-bold leading-snug">
                {finalProjects[index].name}
              </h3>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {finalProjects[index].description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {finalProjects[index].tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full 
                             bg-white/10 border border-white/10 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="px-6 pb-6 flex gap-3">
              {finalProjects[index].liveLink ? (
                <a
                  href={finalProjects[index].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             bg-white text-black font-semibold py-2.5 rounded-xl 
                             hover:bg-gray-200 transition"
                >
                  Live <FiExternalLink />
                </a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center gap-2 
                                bg-white/5 border border-white/10 text-gray-400 font-semibold py-2.5 rounded-xl">
                  No Live
                </div>
              )}

              {finalProjects[index].repoLink ? (
                <a
                  href={finalProjects[index].repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             bg-white/10 border border-white/15 text-white font-semibold py-2.5 rounded-xl 
                             hover:bg-white/15 transition"
                >
                  Code <FiGithub />
                </a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center gap-2 
                                bg-white/5 border border-white/10 text-gray-400 font-semibold py-2.5 rounded-xl">
                  No Repo
                </div>
              )}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between px-6 mt-5">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
            aria-label="Previous"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
            aria-label="Next"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {finalProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-10 bg-white" : "w-2.5 bg-white/30"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ===================== DESKTOP GRID ===================== */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {finalProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                       shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col"
          >
            {/* Top Shine */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Header */}
            <div className="p-7">
              <h3 className="text-2xl font-bold leading-snug text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="px-7 pb-4 flex flex-wrap gap-2 mt-auto">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full 
                             bg-white/10 border border-white/10 text-gray-200 
                             group-hover:bg-white/15 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="px-7 pb-7 flex gap-3">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             bg-white text-black font-semibold py-2.5 rounded-xl 
                             hover:bg-gray-200 transition"
                >
                  Live <FiExternalLink />
                </a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center gap-2 
                                bg-white/5 border border-white/10 text-gray-400 font-semibold py-2.5 rounded-xl">
                  No Live
                </div>
              )}

              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 
                             bg-white/10 border border-white/15 text-white font-semibold py-2.5 rounded-xl 
                             hover:bg-white/15 transition"
                >
                  Code <FiGithub />
                </a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center gap-2 
                                bg-white/5 border border-white/10 text-gray-400 font-semibold py-2.5 rounded-xl">
                  No Repo
                </div>
              )}
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-white/10 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
