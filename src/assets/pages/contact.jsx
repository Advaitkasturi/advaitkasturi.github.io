import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative bg-black text-white py-16 sm:py-20 px-6 mt-24 overflow-hidden"
    >
      {/* ✨ Premium White Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[520px] h-[520px] bg-white/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[650px] h-[650px] bg-white/10 rounded-full blur-[170px]" />
        <div className="absolute top-[40%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold mb-6 text-left sm:text-center tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Let’s Connect
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto text-left sm:text-center leading-relaxed"
        >
          Whether you have a question, want to collaborate, or just say hi — my
          inbox is always open.
        </motion.p>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                     shadow-[0_0_70px_rgba(0,0,0,0.65)] overflow-hidden p-8 sm:p-10"
        >
          {/* Top Shine */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Let’s build something awesome ✨
              </h3>
              <p className="text-gray-400 mt-3 max-w-xl leading-relaxed">
                Open for collaborations, freelance work, internships, and cool
                tech ideas. If you have something in mind — let’s talk.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-start">
                <a
                  href="mailto:advaitkasturi20@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-2xl 
                             font-semibold shadow-lg hover:bg-gray-200 hover:scale-[1.03] transition duration-300 min-w-[190px]"
                >
                  📬 Email Me
                </a>

                <a
                  href="https://github.com/Advaitkasturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-2xl 
                             font-semibold border border-white/15 hover:bg-white/15 hover:scale-[1.03] transition duration-300 min-w-[190px]"
                >
                  💻 View GitHub
                </a>
              </div>
            </div>

            {/* Right Social Panel */}
            <div className="w-full lg:w-[380px]">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
                <p className="text-gray-300 font-semibold text-left sm:text-center mb-5">
                  Find me here 👇
                </p>

                <div className="grid grid-cols-3 gap-4 place-items-center">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/advait-kasturi-5b1368286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Advaitkasturi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:advaitkasturi20@gmail.com"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/advait.kasturi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100095260361703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>

                  {/* X */}
                  <a
                    href="https://x.com/AdvaitKasturi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 
                               flex items-center justify-center hover:bg-white/10 transition duration-300"
                    aria-label="X"
                  >
                    <FaXTwitter className="text-2xl text-white group-hover:scale-110 transition" />
                  </a>
                </div>

                <p className="text-[12px] text-gray-500 text-left sm:text-center mt-5">
                  {/* optional note */}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-14 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Footer Note */}
        <p className="text-center sm:text-center text-sm text-gray-500 mt-6 select-none">
          © {new Date().getFullYear()} Advait 
        </p>
      </div>
    </footer>
  );
}
