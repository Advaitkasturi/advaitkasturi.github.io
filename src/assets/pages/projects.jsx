import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projectsData.length);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* 🌌 Animated Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Title with shine animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent 
                   animate-text-shimmer bg-[length:200%_auto]"
      >
         Projects
      </motion.h2>

      {/* Mobile View - Swipeable Card */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={projectsData[index].name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 mb-4 cursor-grab select-none overflow-hidden group"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.x < -80) handleNext();
              else if (info.offset.x > 80) handlePrev();
            }}
          >
            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

            <h3 className="text-xl font-semibold mb-3">{projectsData[index].name}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{projectsData[index].description}</p>

            <div className="flex gap-4">
              <a
                href={projectsData[index].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-md shadow-md hover:shadow-pink-500/40 transition transform hover:scale-105"
              >
                Live Demo
              </a>
              <a
                href={projectsData[index].repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-md shadow-md hover:shadow-gray-400/40 transition transform hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-between max-w-sm mx-auto px-4 mt-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="p-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 hover:brightness-110 shadow-md hover:scale-110 transition"
          >
            <FiChevronLeft className="text-white" size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:brightness-110 shadow-md hover:scale-110 transition"
          >
            <FiChevronRight className="text-white" size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {projectsData.map((_, i) => (
            <motion.span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-pink-500 scale-125" : "bg-gray-600"
              }`}
              onClick={() => setIndex(i)}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Desktop & Tablet View */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between overflow-hidden group"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

            <div>
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            </div>
            <div className="mt-6 flex gap-4 relative z-10">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-md shadow-md hover:shadow-pink-500/40 transition transform hover:scale-105"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-md shadow-md hover:shadow-gray-400/40 transition transform hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
