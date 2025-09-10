import React from "react";
import { motion } from "framer-motion";
import AdvaitImage from "../pictures/AdvaitK.jpg"; // ✅ Ensure path is correct

export default function AboutMe() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black 
                 text-gray-200 px-6 sm:px-10 py-20 mt-0 sm:mt-10 
                 rounded-3xl max-w-7xl mx-auto shadow-2xl border border-gray-800/40 
                 flex flex-col lg:flex-row items-center lg:items-start gap-12 overflow-hidden"
    >
      {/* 🌌 Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#ff8357]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 👤 Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center lg:text-left"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden 
                     ring-4 ring-[#ff8357]/70 shadow-2xl 
                     transition-transform duration-500 hover:scale-110 hover:ring-[#ff8357]"
        >
          <img
            src={AdvaitImage}
            alt="Advait Kasturi"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </motion.div>
        <div className="mt-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#ff8357] via-[#ff6b3c] to-[#ff8357] bg-clip-text text-transparent">
            Advait Kasturi
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 mt-1">
            Fullstack Developer
          </p>
        </div>
      </motion.div>

      {/* 📝 Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-gray-800/30 shadow-lg"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl font-extrabold mb-4 leading-snug text-white"
        >
          Hi, I'm <span className="text-[#ff8357]">Advait</span> 👋
        </motion.h1>

        {/* Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl font-medium text-gray-300 mb-6"
        >
          Fullstack Developer & Technology Explorer 🚀
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6"
        >
          I’m deeply curious about{" "}
          <span className="text-[#06b6d4] font-semibold">
            Artificial Intelligence
          </span>{" "}
          and{" "}
          <span className="text-[#06b6d4] font-semibold">
            Machine Learning
          </span>
          , striving to create practical solutions for real-world challenges.
          With a balance of smart algorithms and thoughtful design, I craft{" "}
          <span className="text-[#ff8357] font-semibold">
            intelligent, user-focused digital experiences
          </span>{" "}
          across web and mobile platforms.
        </motion.p>

        {/* Tech Stack */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-sm sm:text-lg mb-10"
        >
          Currently exploring{" "}
          <span className="text-[#8b5cf6] font-semibold">React</span>,{" "}
          <span className="text-[#8b5cf6] font-semibold">Flutter</span>,{" "}
          <span className="text-[#06b6d4] font-semibold">AI/ML</span> &{" "}
          <span className="text-[#f43f5e] font-semibold">AI Bots</span>.
        </motion.p>

        {/* 🎯 Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-5 mb-12"
        >
          {/* Download CV */}
          <a
            href="/Advait_Kasturi_CV.pdf"
            download="Advait_Kasturi_CV.pdf"
            className="bg-gradient-to-r from-[#ff8357] to-[#ff6b3c] text-white 
                       text-sm sm:text-base px-7 py-3 rounded-full font-semibold 
                       shadow-lg hover:shadow-[#ff8357]/50 hover:scale-110 
                       transition-transform duration-300"
          >
            ⬇️ Download CV
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="bg-white text-black text-sm sm:text-base px-7 py-3 rounded-full 
                       font-semibold shadow-md hover:bg-gray-200 hover:scale-110 
                       transition-transform duration-300"
          >
            💼 View Projects
          </a>
        </motion.div>

        {/* ✨ Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-2xl px-4 sm:px-6 mb-10"
        >
          <span className="absolute -left-2 top-0 text-5xl text-[#ff8357]/30 font-serif">
            “
          </span>
          <p className="italic text-gray-200 text-sm sm:text-lg leading-relaxed border-l-4 border-[#ff8357] pl-5">
            For me, every line of code is a step toward building something extraordinary.
          </p>
        </motion.blockquote>
      </motion.div>

      {/* ⌄ Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex w-full justify-center"
      >
        <div className="animate-bounce text-gray-400 text-3xl animate-pulse">⌄</div>
      </motion.div>
    </section>
  );
}
