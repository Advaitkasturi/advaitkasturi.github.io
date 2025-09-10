import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative bg-black text-gray-200 py-14 sm:py-16 px-6 mt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-violet-500/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Let’s Connect 
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center leading-relaxed">
          Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:advaitkasturi20@gmail.com"
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition duration-300 text-center min-w-[180px]"
          >
            📬 Email Me
          </a>
          <a
            href="https://github.com/Advaitkasturi"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 hover:scale-105 transition duration-300 text-center min-w-[180px]"
          >
            💼 View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8 text-3xl mb-12">
          <a
            href="https://www.linkedin.com/in/advait-kasturi-5b1368286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:scale-125 hover:text-[#0096d6] transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Advaitkasturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 hover:text-gray-300 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:advaitkasturi20@gmail.com"
            className="text-[#d44638] hover:scale-125 hover:text-[#ff6651] transition-all duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/advait.kasturi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e4405f] hover:scale-125 hover:text-[#ff5e7b] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100095260361703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877f2] hover:scale-125 hover:text-[#4b97f9] transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/AdvaitKasturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 hover:text-gray-400 transition-all duration-300"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Divider Line */}
        <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 select-none">
          © {new Date().getFullYear()} Advait. 
        </p>
      </div>
    </footer>
  );
}
