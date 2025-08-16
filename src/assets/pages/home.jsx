import React from "react";
import AdvaitImage from "../pictures/AdvaitK.jpg"; // Make sure the path is correct

export default function AboutMe() {
  return (
    <section
      id="home"
      className="bg-black text-gray-200 px-4 sm:px-6 py-16 mt-0 sm:mt-10 rounded-3xl max-w-4xl mx-auto shadow-lg"
    >
      {/* Profile Image */}
      <div className="relative w-full flex justify-center mb-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-[#ff8357]/40 shadow-xl transition-transform duration-300 hover:scale-105 hover:ring-[#ff8357]/60">
            <img
              src={AdvaitImage}
              alt="Advait Kasturi"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Advait Kasturi
            </h2>
            <p className="text-sm sm:text-base text-gray-400 italic"></p>
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-3 text-white leading-tight">
        Hi, I'm <span className="text-[#ff8357]">Advait</span> 👋
      </h1>

      {/* Subheading */}
      <h3 className="text-lg sm:text-2xl text-center font-medium text-gray-300 mb-5 italic">
        Fullstack Developer & Tech Explorer 🚀
      </h3>

      {/* Description */}
      <p className="text-center text-gray-300 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto mb-5 px-1 sm:px-0">
        Exploring the potential of{" "}
        <span className="text-[#06b6d4] font-semibold">
          Artificial Intelligence
        </span>{" "}
        and{" "}
        <span className="text-[#06b6d4] font-semibold">Machine Learning</span>{" "}
        to solve real-world problems. I blend smart algorithms with intuitive
        design to build intelligent, user-focused web and mobile experiences.
      </p>

      {/* Tech Stack */}
      <p className="text-center text-gray-400 text-sm sm:text-lg mb-8 px-2">
        Currently exploring{" "}
        <span className="text-[#8b5cf6] font-semibold">React</span>,{" "}
        <span className="text-[#8b5cf6] font-semibold">Flutter</span>,{" "}
        <span className="text-[#06b6d4] font-semibold">AI/ML</span> &{" "}
        <span className="text-[#f43f5e] font-semibold">AI bots</span>.
      </p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {/* ✅ Download CV */}
        <a
          href="/Advait_Kasturi_CV.pdf"
          download="Advait_Kasturi_CV.pdf"
          className="bg-[#ff8357] text-white text-sm sm:text-base px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-[#ff6b3c] transition-all duration-300"
        >
          ⬇️ Download CV
        </a>

        {/* ✅ Projects */}
        <a
          href="#projects"
          className="bg-white text-black text-sm sm:text-base px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-gray-200 transition-all duration-300"
        >
          💼 My Projects
        </a>
      </div>

      {/* Quote */}
      <blockquote className="italic text-center text-gray-200 max-w-sm sm:max-w-lg mx-auto px-3 sm:px-4 border-l-4 border-[#ff8357] pl-3 sm:pl-5 text-sm sm:text-lg">
        "For me, every line of code is a step toward building something
        extraordinary."
      </blockquote>

      {/* Scroll Cue */}
      <div className="mt-10 flex justify-center">
        <div className="animate-bounce text-gray-400 text-2xl">⌄</div>
      </div>
    </section>
  );
}
