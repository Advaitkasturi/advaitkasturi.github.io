// ieee.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import img1 from "@/assets/ieee/img1.jpg";
import img2 from "@/assets/ieee/img2.jpg";
import img3 from "@/assets/ieee/ieee1.jpg";
import img4 from "@/assets/ieee/ieee2.jpg";
import img5 from "@/assets/ieee/ieee3.jpg";
import img6 from "@/assets/ieee/ieee4.jpg";
import img7 from "@/assets/ieee/ieee5.jpg";

const images = [img3, img4, img1, img2, img5, img6, img7];

export default function IEEE() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-14 overflow-hidden relative">
      {/* ✨ Premium White Glow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-28 -left-28 w-[520px] h-[520px] bg-white/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[650px] h-[650px] bg-white/10 rounded-full blur-[170px]" />
        <div className="absolute top-[35%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      {/* Main Carousel Card */}
      <div className="w-full max-w-5xl">
        <div
          className="relative w-full overflow-hidden rounded-3xl border border-white/10 
                     bg-white/5 backdrop-blur-2xl shadow-[0_0_70px_rgba(0,0,0,0.65)]"
        >
          {/* Top Shine */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />

          {/* Image Area */}
          <div className="relative w-full h-[260px] sm:h-[420px] md:h-[520px]">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`IEEE Slide ${index + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 
                         p-3 rounded-full bg-white/10 border border-white/15 
                         hover:bg-white/15 transition"
              aria-label="Previous"
            >
              <FiChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 
                         p-3 rounded-full bg-white/10 border border-white/15 
                         hover:bg-white/15 transition"
              aria-label="Next"
            >
              <FiChevronRight size={22} />
            </button>

            {/* Bottom Progress */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-10 bg-white" : "w-2.5 bg-white/35"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Small Footer Hint (neat, minimal) */}
        <div className="mt-5 flex justify-center">
          <p className="text-xs text-gray-500">
       
          </p>
        </div>
      </div>
    </div>
  );
}
