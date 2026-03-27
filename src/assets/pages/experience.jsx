import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: "01",
    title: "Tech Lead",
    org: "IEEE Student Branch — GNI",
    year: "2025",
    tags: ["Web Dev", "UI/UX", "Leadership"],
    color: "#e8e8e8",
    description: [
      <>
        Designed and Developed the official IEEE GNI website — end-to-end, from Ui to Deployment.
        <a
          href="https://ieeegnitc.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/30 hover:decoration-white transition-all"
        >
   
        </a>{" "}
        
      </>,
      <>Assembled and onboarded the full technical team from scratch.</>,
      <>Built responsive layouts and crafted all UI/UX design assets.</>,
    ],
    cta: { text: "Visit Site", href: "https://ieeegnitc.org/", external: true },
    route: { text: "See IEEE Work", to: "/ieee" },
  },
  {
    id: "02",
    title: "Web Dev Lead",
    org: "Google Developer Groups on Campus — GNI",
    year: "2025",
    tags: ["Bootcamp", "GenAI", "Mentorship"],
    color: "#c8c8c8",
    description: [
      <>Organized and led the Web Development Bootcamp — April 2025.</>,
      <>Delivered technical support during the GEN-AI Bootcamp — Feb 2025.</>,
    ],
    route: { text: "See GDG Work", to: "/gdg" },
  },
];

const tagColors = ["bg-white/10", "bg-white/8", "bg-white/6"];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ─── Single Experience Card (Desktop) ─── */
function ExpCard({ exp, index, isActive, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`
          relative rounded-2xl lg:rounded-3xl overflow-hidden
          border transition-all duration-500
          ${isActive
            ? "border-white/25 bg-white/8 shadow-[0_0_80px_rgba(255,255,255,0.06)]"
            : "border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5"
          }
        `}
      >
        {/* Top shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Active glow blob */}
        {isActive && (
          <motion.div
            layoutId="activeGlow"
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"
          />
        )}

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Big number */}
              <span
                className="text-5xl lg:text-7xl font-black tabular-nums select-none"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                  color: "transparent",
                }}
              >
                {exp.id}
              </span>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-0.5">
                  {exp.year}
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">{exp.org}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="hidden sm:flex flex-wrap gap-1.5 justify-end max-w-[160px]">
              {exp.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full ${tagColors[i % tagColors.length]} border border-white/10 text-gray-300`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-2.5 mb-8">
                  {exp.description.map((line, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      className="flex gap-3 text-gray-300 text-sm lg:text-base leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {line}
                    </motion.li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  {exp.cta && (
                    <a
                      href={exp.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition"
                    >
                      {exp.cta.text} <FiExternalLink size={14} />
                    </a>
                  )}
                  {exp.route && (
                    <Link
                      to={exp.route.to}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-white/8 text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/12 hover:bg-white/12 transition"
                    >
                      {exp.route.text} <FiArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed summary */}
          {!isActive && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-sm line-clamp-2"
            >
              Click to expand
            </motion.p>
          )}

          {/* Expand indicator */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-1.5">
              {exp.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="sm:hidden text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.span
              animate={{ rotate: isActive ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-lg select-none"
            >
              +
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile Swipeable Card ─── */
function MobileCards() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % experiences.length);
  const prev = () => setCurrent((p) => (p - 1 + experiences.length) % experiences.length);

  const exp = experiences[current];

  return (
    <div className="relative">
      <div className="relative h-auto">
        {/* Back card */}
        <div
          className="absolute inset-x-3 top-3 rounded-2xl border border-white/5 bg-white/3 h-full -z-10"
          style={{ transform: "scale(0.97) translateY(8px)" }}
        />

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            className="relative rounded-2xl border border-white/15 bg-white/6 backdrop-blur-xl overflow-hidden select-none touch-pan-y"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <div className="p-5">
              {/* ID + year row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-4xl font-black tabular-nums"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}
                >
                  {exp.id}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-mono">
                  {exp.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-0.5">{exp.title}</h3>
              <p className="text-xs text-gray-400 mb-4 leading-snug">{exp.org}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {exp.description.map((line, i) => (
                  <li key={i} className="flex gap-2.5 text-gray-300 text-xs leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                {exp.cta && (
                  <a
                    href={exp.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold py-2.5 rounded-xl"
                  >
                    {exp.cta.text} <FiExternalLink size={12} />
                  </a>
                )}
                {exp.route && (
                  <Link
                    to={exp.route.to}
                    className="flex items-center justify-center gap-2 bg-white/8 text-white text-xs font-semibold py-2.5 rounded-xl border border-white/12"
                  >
                    {exp.route.text} <FiArrowRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-1">
        <button
          onClick={prev}
          className="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white transition flex items-center gap-1"
        >
          ← prev
        </button>

        <div className="flex gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white transition flex items-center gap-1"
        >
          next →
        </button>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-black text-white py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-white/4 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white/3 blur-[120px]" />
        <div className="absolute top-1/3 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-2/3 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* ── Section Header ── */}
      <div className="mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-white/30" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-gray-500 font-mono">
            Career Journey
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none"
        >
          <span className="text-white">Experi</span>
          <span
            className="italic"
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.35)",
              color: "transparent",
            }}
          >
            ence
          </span>
        </motion.h2>
      </div>

      {/* ── MOBILE ── */}
      <div className="sm:hidden">
        <MobileCards />
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-start">
        {/* Left: accordion-style cards */}
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Right: sidebar */}
        <div className="hidden lg:block sticky top-8 space-y-5">
          {/* Skills tag cloud */}
          <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500 mb-3">
              Skills & Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Figma", "Leadership", "UI/UX", "Bootcamps", "Full Stack"].map((s) => (
                <span
                  key={s}
                  className="text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-white/10 bg-white/4 p-5 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-white text-black text-xs font-bold py-2.5 rounded-xl hover:bg-gray-200 transition w-full"
            >
              Explore My Projects <FiArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA strip (sm only) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:hidden mt-10 flex justify-end rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-6"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-200 transition"
        >
          Explore Projects <FiArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}