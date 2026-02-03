import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import AdvaitImage from "../pictures/AdvaitK.jpg";

export default function AboutMe() {
  return (
    <section
      id="home"
      className="relative bg-black text-white px-6 sm:px-10 py-20 mt-0 sm:mt-10 
                 rounded-3xl max-w-7xl mx-auto shadow-2xl border border-white/10 
                 flex flex-col lg:flex-row items-center lg:items-start gap-12 overflow-hidden"
    >
      {/* ✨ Premium White Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[520px] h-[520px] bg-white/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[650px] h-[650px] bg-white/10 rounded-full blur-[170px]" />
        <div className="absolute top-[35%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      {/* 👤 Profile Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col items-center text-center lg:text-left"
      >
        {/* Image + Glow Ring */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full blur-2xl bg-white/15" />
          <div
            className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden 
                       ring-4 ring-white/10 shadow-2xl border border-white/10"
          >
            <img
              src={AdvaitImage}
              alt="Advait Kasturi"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Name + Role */}
        <div className="mt-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Advait Kasturi
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-400 mt-2">
            Fullstack Developer • Tech Explorer
          </p>

          {/* Social Links */}
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 
                         transition duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl text-white" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 
                         transition duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-white" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 
                         transition duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl text-white" />
            </a>

            <a
              href="mailto:advait@example.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 
                         transition duration-300 hover:scale-110"
              aria-label="Mail"
            >
              <HiOutlineMail className="text-xl text-white" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 📝 Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="flex-1 relative"
      >
        <div className="relative rounded-3xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.65)]">
          {/* Top Shine */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-2xl sm:text-4xl font-extrabold mb-4 leading-snug text-white"
          >
            Hi, I'm <span className="text-gray-200">Advait</span> 👋
          </motion.h1>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl font-medium text-gray-300 mb-6"
          >
            I build modern web & app experiences with clean UI ⚡
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-7"
          >
           
          </motion.p>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {["React", "Flutter", "Python" ,"Java", "Firebase", "Cloudinary"].map(
              (tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 
                             text-gray-200 hover:bg-white/10 transition duration-300"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          {/* 🎯 Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-5 mb-12"
          >
            {/* Download CV */}
            <a
              href="/Advait_Kasturi_CV.pdf"
              download="Advait_Kasturi_CV.pdf"
              className="bg-white text-black text-sm sm:text-base px-7 py-3 rounded-full font-semibold 
                         shadow-lg hover:bg-gray-200 hover:scale-110 transition-transform duration-300"
            >
              ⬇️ Download CV
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="bg-white/10 text-white text-sm sm:text-base px-7 py-3 rounded-full 
                         font-semibold border border-white/15 hover:bg-white/15 hover:scale-110 
                         transition-transform duration-300"
            >
              💼 View Projects
            </a>

               {/* Certificates */}
            <a
              href="https://drive.google.com/drive/folders/1WgBSo4wDvXjQKr7Ni-e4XGKKIRyJhzMU?usp=sharing"
              className="bg-white/10 text-white text-sm sm:text-base px-7 py-3 rounded-full 
                         font-semibold border border-white/15 hover:bg-white/15 hover:scale-110 
                         transition-transform duration-300"
            >
              📜 View Certificates
            </a>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="relative max-w-2xl px-4 sm:px-6"
          >
            <span className="absolute -left-2 top-0 text-5xl text-white/20 font-serif">
              “
            </span>
            <p className="italic text-gray-200 text-sm sm:text-lg leading-relaxed border-l-4 border-white/20 pl-5">
              For me, every line of code is a step toward building something
              extraordinary.
            </p>
          </motion.blockquote>
        </div>
      </motion.div>

      {/* ⌄ Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 flex w-full justify-center"
      >
        <div className="animate-bounce text-gray-400 text-3xl">⌄</div>
      </motion.div>
    </section>
  );
}
