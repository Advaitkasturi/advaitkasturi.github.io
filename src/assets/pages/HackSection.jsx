import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function HackSection({
  title,
  description,
  images = [],
  githubLink,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const safeImages = useMemo(
    () => (Array.isArray(images) ? images : []),
    [images]
  );

  const nextSlide = () => {
    if (!safeImages.length) return;
    setIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevSlide = () => {
    if (!safeImages.length) return;
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 flex flex-col items-center overflow-hidden">
      {/* 🖤 Premium Black & White Glow */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-white/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[650px] h-[650px] bg-white/10 rounded-full blur-[180px]" />
        <div className="absolute top-[40%] left-[55%] w-[420px] h-[420px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* Wrapper Card */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl 
                   shadow-[0_0_70px_rgba(0,0,0,0.65)] overflow-hidden"
      >
        {/* Top Shine */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="p-6 sm:p-10">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-left w-full"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-left w-full max-w-4xl"
          >
            {description}
          </motion.p>

          {/* === Carousel === */}
          <div className="mt-8">
            <div
              {...handlers}
              className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl 
                         border border-white/10 bg-black/40 backdrop-blur-xl 
                         shadow-[0_0_55px_rgba(0,0,0,0.7)] group select-none"
            >
              {/* Soft Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-white/10 blur-[120px] opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>

              {/* Image */}
              <AnimatePresence initial={false} mode="wait">
                {safeImages.length ? (
                  <motion.img
                    key={safeImages[index]}
                    src={safeImages[index]}
                    alt={`Slide ${index + 1}`}
                    initial={{ opacity: 0, x: 90, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -90, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="w-full h-full object-contain p-2 sm:p-3"
                    draggable={false}
                  />
                ) : (
                  <motion.div
                    key="no-images"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex items-center justify-center text-gray-400"
                  >
                    No preview available
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Top-right Counter */}
              {safeImages.length > 0 && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold 
                                bg-white/10 border border-white/10 text-gray-200">
                  {index + 1} / {safeImages.length}
                </div>
              )}

              {/* Bottom Progress Bar */}
              {safeImages.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
                  <div
                    className="h-[2px] bg-white transition-all duration-500"
                    style={{
                      width: `${((index + 1) / safeImages.length) * 100}%`,
                    }}
                  />
                </div>
              )}

              {/* Arrows */}
              {safeImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 
                               w-11 h-11 rounded-full border border-white/15 bg-white/10 
                               text-white flex items-center justify-center 
                               hover:bg-white/15 transition active:scale-95"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 
                               w-11 h-11 rounded-full border border-white/15 bg-white/10 
                               text-white flex items-center justify-center 
                               hover:bg-white/15 transition active:scale-95"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {/* Dots */}
            {safeImages.length > 1 && (
              <div className="mt-5 flex justify-center gap-2">
                {safeImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-10 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* GitHub Button (ONLY when available) */}
          {githubLink && (
            <div className="mt-8 flex justify-start">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl 
                           bg-white text-black font-semibold 
                           shadow-lg hover:bg-gray-200 transition active:scale-[0.98]"
              >
                <Github size={18} />
                View on GitHub
              </motion.a>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
