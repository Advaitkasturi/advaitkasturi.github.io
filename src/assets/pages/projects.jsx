import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiDownload,
} from "react-icons/fi";
import projectsData from "@/assets/data/projectsData";

export default function Projects() {
  const [index, setIndex] = useState(0);

  // ❌ Remove clone projects
  const baseProjects = projectsData.filter(
    (p) =>
      !(
        (p.name || "").toLowerCase().includes("clone") ||
        (p.category || "").toLowerCase().includes("clone")
      )
  );

  // ✅ IEEE website links
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

  // ✅ Priority projects
  const campusHub = {
    name: "Campus Hub",
    description:
      "An all-in-one campus platform for Events Discovery + Registration , Notices and Lost & Found Built to reduce scattered information and improve campus engagement with a clean, role-based experience.",
    tags: ["Flutter", "Firebase", "Cloudinary", "Notifications", ],
    apkLink:
      "https://drive.google.com/drive/folders/1C8S2E1nYzUHKZeK1JJE6R_9PEyjZkGZj?usp=sharing",
    repoLink: "https://github.com/Advaitkasturi",
  };

  const learnMatrix = {
    name: "Learn Matrix",
    description:
      "AI-powered learning platform prototype featuring a custom-built chatbot and curated resources to help learners master AI through projects and guided content.",
    tags: ["React", "AI Chatbot", "Learning Platform", "Resources"],
    repoLink:
      "https://github.com/Advaitkasturi/LearnMatrix-vyoma-national-level-hackthon-",
  };

  const ieeeProject = updatedProjects.find((p) =>
    (p.name || "").toLowerCase().includes("ieee")
  );

  const otherProjects = updatedProjects.filter((p) => p !== ieeeProject);

  const finalProjects = [
    campusHub,
    learnMatrix,
    ...(ieeeProject ? [ieeeProject] : []),
    ...otherProjects,
  ];

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % finalProjects.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + finalProjects.length) % finalProjects.length);

  const ActionButtons = ({ project }) => (
    <>
      {project.apkLink ? (
        <a
          href={project.apkLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 
                     bg-white text-black font-semibold py-2.5 rounded-xl 
                     hover:bg-gray-200 transition"
        >
          APK File <FiDownload />
        </a>
      ) : project.liveLink ? (
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
    </>
  );

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* 🔥 PROJECTS TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-14 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Projects
        </span>
        <span className="block mt-3 w-20 h-[3px] mx-auto bg-white/40 rounded-full" />
      </motion.h2>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden w-full max-w-sm relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={finalProjects[index].name}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {finalProjects[index].name}
              </h3>
              <p className="text-gray-300 text-sm mt-3">
                {finalProjects[index].description}
              </p>
            </div>

            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {finalProjects[index].tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="px-6 pb-6 flex gap-3">
              <ActionButtons project={finalProjects[index]} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between px-6 mt-5">
          <button onClick={handlePrev}>
            <FiChevronLeft size={22} />
          </button>
          <button onClick={handleNext}>
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {finalProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col"
          >
            <div className="p-7">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-300 text-sm mt-3">
                {project.description}
              </p>
            </div>

            <div className="px-7 pb-4 flex flex-wrap gap-2 mt-auto">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="px-7 pb-7 flex gap-3">
              <ActionButtons project={project} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
