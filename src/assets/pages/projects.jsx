import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % projectsData.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* 🌌 Animated Gradient Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-20 w-[30rem] h-[30rem] bg-violet-500/20 rounded-full blur-[200px]"
        />
      </div>

      {/* 🔮 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-20 
                   bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent 
                   animate-text-shimmer bg-[length:300%_auto] relative"
      >
        Featured Projects
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-pink-400 to-violet-500 rounded-full blur-sm" />
      </motion.h2>

      {/* 📱 Mobile Carousel */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={projectsData[index].name}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.4 }}
            className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden group cursor-grab"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) handleNext();
              else if (info.offset.x > 100) handlePrev();
            }}
          >
            {/* Thumbnail */}
            <div className="h-40 relative overflow-hidden">
              {projectsData[index].image ? (
                <img
                  src={projectsData[index].image}
                  alt={projectsData[index].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Preview
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {projectsData[index].name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {projectsData[index].description}
              </p>

              {/* Tech Stack (now visible in mobile) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projectsData[index].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500/30 to-violet-500/30 text-pink-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={projectsData[index].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition"
                >
                  🚀 Live
                </a>
                <a
                  href={projectsData[index].repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between px-6 mt-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shadow-md hover:scale-110 transition"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shadow-md hover:scale-110 transition"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* 💻 Desktop Grid Showcase */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group shadow-xl flex flex-col"
          >
            {/* Thumbnail */}
            <div className="h-44 relative overflow-hidden rounded-t-3xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Preview
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-gray-300 text-sm flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500/30 to-violet-500/30 text-pink-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-pink-400 to-violet-500 text-black font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition"
                >
                  🚀 Live
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
