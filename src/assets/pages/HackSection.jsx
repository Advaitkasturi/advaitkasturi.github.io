import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function HackSection({ title, description, images, githubLink }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center relative overflow-hidden">
      {/* 🌌 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold 
                   bg-gradient-to-r from-pink-500 via-violet-500 to-orange-400 
                   text-transparent bg-clip-text mb-4 
                   text-left md:text-center w-full"
      >
        {title}
      </motion.h2>

      {/* Description (always left-aligned) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gray-300 text-sm sm:text-base md:text-lg 
                   max-w-3xl mb-8 leading-relaxed tracking-wide
                   text-left w-full"
      >
        {description}
      </motion.p>

      {/* === Carousel (Shared Style) === */}
      <div
        {...handlers}
        className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-xl mb-6 shadow-xl border border-pink-500/20 bg-black/30 backdrop-blur-lg group flex items-center justify-center"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
            draggable={false}
          />
        </AnimatePresence>

        {/* Progress Indicators (Bar Style) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div
            className="h-1 bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-500"
            style={{ width: `${((index + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-between w-full max-w-3xl mb-6 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-gradient-to-tr from-pink-500 to-orange-500 hover:brightness-110 
                     text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-gradient-to-tr from-orange-500 to-pink-500 hover:brightness-110 
                     text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          ❯
        </button>
      </div>

      {/* GitHub Button */}
      {githubLink && (
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r 
                     from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 
                     text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold 
                     shadow-md hover:shadow-pink-500/40 transition-all hover:scale-110"
        >
          <Github size={20} />
          View on GitHub
        </motion.a>
      )}
    </section>
  );
}
