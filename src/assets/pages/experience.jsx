import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "TECH LEAD @ IEEE STUDENT BRANCH - GNI",
description: [
  <>
    Designed IEEE - GNI WEBSITE (2025) –{" "}
    <a
      href="https://ieeegnitc.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white underline decoration-white/40 hover:decoration-white hover:text-gray-200 transition"
    >
      ieee.gnitc.org
    </a>
  </>,
 
  <>
    Formed and onboarded the{" "}
    <span className="font-medium">
      technical team
    </span>
    .
  </>,

   <>
    Designed{" "}
    <span className="font-medium">
      UI/UX assets
    </span>{" "}
    and implemented{" "}
    <span className="font-medium">
      responsive layouts
    </span>
    .
  </>
],

    button: {
      text: "Visit Website",
      link: "https://ieeegnitc.org/",
    },
    routeButton: {
      text: "IEEE",
      route: "/ieee",
    },
  },
  {
    title: "WEB DEV LEAD @ GOOGLE DEVELOPER GROUPS ON CAMPUS - GNI",
    description: [
      "Organized and led the Web Development Bootcamp (April 2025).",
      " Provided technical support during the GEN-AI Bootcamp (February 2025).",
  
    ],
    routeButton: {
      text: "GDG",
      route: "/gdg",
    },
  },
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % experiences.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section
      id="experience"
      className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* ✨ Soft White Glow */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-140px] right-[-140px] w-[520px] h-[520px] bg-white/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[55%] w-[360px] h-[360px] bg-white/5 rounded-full blur-[110px]" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-14 tracking-tight"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Experience
        </span>
        <span className="block mt-3 w-20 h-[3px] mx-auto bg-white/40 rounded-full" />
      </motion.h2>

      <div className="w-full flex flex-col items-center">
        {/* ===================== MOBILE VIEW ===================== */}
        <div className="sm:hidden w-full max-w-sm relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={experiences[index].title}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_45px_rgba(0,0,0,0.55)] select-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                if (info.offset.x < -80) handleNext();
                else if (info.offset.x > 80) handlePrev();
              }}
            >
              {/* Top Highlight Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <p className="text-[11px] text-gray-400 mb-2 tracking-wide">
                Swipe to explore →
              </p>

              <h3 className="text-base font-semibold mb-3 text-white">
                {experiences[index].title}
              </h3>

              <div className="text-gray-300 text-xs leading-relaxed space-y-2">
                {experiences[index].description.map((line, i) => (
                  <p key={i} className="text-gray-300">
                    {line}
                  </p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-5">
                {experiences[index].button && (
                  <a
                    href={experiences[index].button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-2.5 rounded-xl hover:bg-gray-200 transition"
                  >
                    {experiences[index].button.text} <FiArrowRight />
                  </a>
                )}

                {experiences[index].routeButton && (
                  <Link
                    to={experiences[index].routeButton.route}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-sm py-2.5 rounded-xl border border-white/15 hover:bg-white/15 transition"
                  >
                    {experiences[index].routeButton.text} <FiArrowRight />
                  </Link>
                )}
              </div>

              {/* Small Footer */}
              <div className="mt-4 text-center text-[11px] text-gray-500 italic">
                Tap card to move next • Drag left/right
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between max-w-sm mx-auto mt-5 px-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
              aria-label="Previous"
            >
              <FiChevronLeft className="text-white" size={20} />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
              aria-label="Next"
            >
              <FiChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to experience ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ===================== DESKTOP VIEW ===================== */}
        <div className="hidden sm:flex relative w-full max-w-md md:max-w-2xl lg:max-w-5xl h-[520px] items-center justify-center">
          {/* Side Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-10 z-40 p-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
            aria-label="Previous"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-10 z-40 p-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
            aria-label="Next"
          >
            <FiChevronRight size={22} />
          </button>

          <AnimatePresence>
            {experiences.map((exp, i) => {
              const isActive = i === index;

              const offset =
                (i - index + experiences.length) % experiences.length;

              const x = offset * 22;
              const y = Math.abs(offset) * -18;
              const rotate = offset * 3.5;
              const zIndex = isActive ? 50 : 40 - Math.abs(offset);

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, scale: 0.92, y: 70 }}
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    scale: isActive ? 1 : 0.92,
                    x,
                    y,
                    rotate,
                    zIndex,
                    filter: isActive ? "blur(0px)" : "blur(0.4px)",
                  }}
                  exit={{ opacity: 0, scale: 0.92, y: 70 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute w-[92%] md:w-[95%] h-[86%] rounded-3xl p-7 md:p-10 cursor-pointer
                             border border-white/10 bg-white/5 backdrop-blur-2xl
                             shadow-[0_0_60px_rgba(0,0,0,0.55)]"
                  onClick={handleNext}
                >
                  {/* Top Shine */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {exp.title}
                    </h3>

                    {isActive && (
                      <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-200">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="text-gray-200 text-sm md:text-base leading-relaxed space-y-3 mb-8">
                    {exp.description.map((line, idx) => (
                      <p key={idx} className="text-gray-300">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    {exp.button && (
                      <a
                        href={exp.button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold
                                   px-5 py-2.5 rounded-xl hover:bg-gray-200 transition"
                      >
                        {exp.button.text} <FiArrowRight />
                      </a>
                    )}

                    {exp.routeButton && (
                      <Link
                        to={exp.routeButton.route}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold
                                   px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/15 transition"
                      >
                        {exp.routeButton.text} <FiArrowRight />
                      </Link>
                    )}

                    <span className="ml-auto text-sm text-gray-500 hidden md:block">
                      Click card to go next →
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {experiences.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          dotIndex === index
                            ? "w-10 bg-white"
                            : "w-2.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ===================== EXTRA UI BLOCK (Different Type) ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 w-full max-w-5xl"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_70px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Glow Line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Different UI Layout */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
                 I actively explore new tech,
                  contribute to projects, and build products that improve real
                  student experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-gray-200 hover:bg-white/15 transition">
                  Hackathons
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-gray-200 hover:bg-white/15 transition">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-gray-200 hover:bg-white/15 transition">
                  AI Bots
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-gray-200 hover:bg-white/15 transition">
                  Full Stack Apps
                </span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <p className="text-gray-500 text-sm italic">
                “Keep building. Keep learning.”
              </p>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
              >
                Explore My Projects <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
