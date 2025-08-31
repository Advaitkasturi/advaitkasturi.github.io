import React from "react";
import AdvaitImage from "../pictures/AdvaitK.jpg"; // Make sure the path is correct

export default function AboutMe() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 
                 px-6 sm:px-8 py-16 mt-0 sm:mt-10 rounded-3xl 
                 max-w-5xl mx-auto shadow-2xl border border-gray-800/40 
                 flex flex-col items-center" // ✅ Center whole section in desktop
    >
      {/* ✅ Profile Section (Always Centered) */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden 
                        ring-4 ring-[#ff8357]/50 shadow-2xl 
                        transition-transform duration-300 hover:scale-105 hover:ring-[#ff8357]/70">
          <img
            src={AdvaitImage}
            alt="Advait Kasturi"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Advait Kasturi
          </h2>
          <p className="text-sm sm:text-base text-gray-400 italic">
            Developer
          </p>
        </div>
      </div>

      {/* ✅ Text Content Wrapper (Centered container, left-aligned text) */}
      <div className="w-full max-w-3xl text-left">
        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-white leading-snug">
          Hi, I'm <span className="text-[#ff8357]">Advait</span> 👋
        </h1>

        {/* Subheading */}
        <h3 className="text-lg sm:text-xl font-medium text-gray-300 mb-6">
          Fullstack Developer & Technology Explorer 🚀
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6">
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
        </p>

        {/* Tech Stack */}
        <p className="text-gray-400 text-sm sm:text-lg mb-10">
          Currently exploring{" "}
          <span className="text-[#8b5cf6] font-semibold">React</span>,{" "}
          <span className="text-[#8b5cf6] font-semibold">Flutter</span>,{" "}
          <span className="text-[#06b6d4] font-semibold">AI/ML</span> &{" "}
          <span className="text-[#f43f5e] font-semibold">AI Bots</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-5 mb-12">
          {/* ✅ Download CV */}
          <a
            href="/Advait_Kasturi_CV.pdf"
            download="Advait_Kasturi_CV.pdf"
            className="bg-gradient-to-r from-[#ff8357] to-[#ff6b3c] text-white 
                       text-sm sm:text-base px-7 py-3 rounded-full font-semibold 
                       shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            ⬇️ Download CV
          </a>

          {/* ✅ Projects */}
          <a
            href="#projects"
            className="bg-white text-black text-sm sm:text-base px-7 py-3 rounded-full 
                       font-semibold shadow-md hover:bg-gray-200 hover:scale-105 
                       transition-transform duration-300"
          >
            💼 View Projects
          </a>
        </div>

        {/* Quote */}
        <blockquote className="relative max-w-2xl px-4 sm:px-6 mb-10">
          <span className="absolute -left-2 top-0 text-5xl text-[#ff8357]/30 font-serif">
            “
          </span>
          <p className="italic text-gray-200 text-sm sm:text-lg leading-relaxed border-l-4 border-[#ff8357] pl-5">
            For me, every line of code is a step toward building something
            extraordinary.
          </p>
        </blockquote>
      </div>

      {/* Scroll Cue */}
      <div className="mt-8 flex">
        <div className="animate-bounce text-gray-400 text-2xl">⌄</div>
      </div>
    </section>
  );
}
