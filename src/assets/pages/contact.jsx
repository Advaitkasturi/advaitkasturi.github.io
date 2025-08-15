import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6"; // Make sure to install react-icons v6 for FaXTwitter
// If you're using react-icons v4/v5, use `FaTwitter` from `react-icons/fa`

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#e8e0f4] to-[#fce3e1] text-gray-800 py-12 px-6 mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1e2746]">
          Let's Connect 🤝
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <a
            href="mailto:advaitkasturi20@gmail.com"
            className="bg-[#ff8357] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#ff6b3c] transition duration-300"
          >
            📬 Email Me
          </a>
          <a
            href="https://github.com/Advaitkasturi"
            className="bg-[#1e2746] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#2f3d6c] transition duration-300"
          >
            💼 View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-8 flex-wrap">
          <a
            href="https://www.linkedin.com/in/advait-kasturi-5b1368286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Advaitkasturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:advaitkasturi20@gmail.com"
            className="text-[#d44638] hover:scale-110 transition-transform duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/advait.kasturi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e4405f] hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100095260361703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877f2] hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/AdvaitKasturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] hover:scale-110 transition-transform duration-200"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Advait.
        </p>
      </div>
    </footer>
  );
}
