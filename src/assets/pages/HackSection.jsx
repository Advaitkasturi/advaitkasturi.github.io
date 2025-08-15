import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

export default function HackSection({ title, description, images, githubLink }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-violet-500 to-orange-400 text-transparent bg-clip-text mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center max-w-3xl mb-8 leading-relaxed tracking-wide">
        {description}
      </p>

      {/* Carousel Container */}
      <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-lg border border-orange-400/20 bg-black/30">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover sm:object-contain transition-all duration-500 ease-in-out"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-2.5 rounded-full transition z-10 backdrop-blur-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-2.5 rounded-full transition z-10 backdrop-blur-md"
        >
          ❯
        </button>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-orange-400 scale-110" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* GitHub Button */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-md text-sm sm:text-base font-medium shadow-md transition-all"
        >
          <Github size={18} />
          View on GitHub
        </a>
      )}

      {/* Mobile Swipe Hint (Optional) */}
      <p className="text-xs text-gray-400 mt-3 sm:hidden italic">
        Swipe left/right to view more
      </p>
    </section>
  );
}
