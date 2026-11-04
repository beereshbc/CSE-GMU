import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  X,
  Maximize2,
  Grid,
  Image as ImageIcon,
} from "lucide-react";
import { boxData } from "../assets/assets";

/* ─────────────────────────────────────────────
   LIGHTBOX – full-screen gallery overlay
───────────────────────────────────────────── */
const Lightbox = ({ images, title, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIdx((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-0.5">
            Gallery
          </p>
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/50">
            {idx + 1} / {images.length}
          </span>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </motion.button>
        </div>
      </div>

      {/* Main Image */}
      <div
        className="flex-1 flex items-center justify-center px-4 sm:px-16 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt={`${title} ${idx + 1}`}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
        </AnimatePresence>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setIdx((p) => (p - 1 + images.length) % images.length)
              }
              className="absolute left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIdx((p) => (p + 1) % images.length)}
              className="absolute right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div
        className="px-4 py-4 flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 overflow-x-auto max-w-full pb-1 px-1 scrollbar-hide">
          {images.map((img, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIdx(i)}
              className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === idx
                  ? "border-white ring-2 ring-white/40"
                  : "border-white/20 opacity-60 hover:opacity-90"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   IMAGE CARD
───────────────────────────────────────────── */
const ImageCard = ({
  images,
  title,
  description,
  colorTheme,
  accentColor,
  index,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showThumbs, setShowThumbs] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  /* Auto-slide */
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  /* Touch swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && dy < 60) {
      if (dx < 0) setCurrentIndex((p) => (p + 1) % images.length);
      else setCurrentIndex((p) => (p - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    enter: (dir) => ({ opacity: 0, x: dir * 30, scale: 1.05 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir * -30, scale: 0.95 }),
  };

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={images}
            title={title}
            startIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative group"
        onMouseEnter={() => {
          setIsHovered(true);
          setShowThumbs(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowThumbs(false);
        }}
      >
        {/* Card Shell */}
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
            boxShadow: isHovered
              ? `0 32px 64px -12px ${accentColor}40, 0 0 0 1px ${accentColor}30`
              : "0 4px 24px -4px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white relative"
          style={{ willChange: "transform" }}
        >
          {/* ── Image Area ── */}
          <div
            className="relative overflow-hidden"
            style={{ height: "clamp(200px, 30vw, 280px)" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={1}>
              <motion.img
                key={currentIndex}
                custom={1}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                src={images[currentIndex]}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ willChange: "transform, opacity" }}
              />
            </AnimatePresence>

            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

            {/* Color accent bar */}
            <motion.div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorTheme}`}
              animate={{ scaleX: isHovered ? 1 : 0.4, originX: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Controls Top-Right */}
            {images.length > 1 && (
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying((p) => !p);
                  }}
                  className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={11} /> : <Play size={11} />}
                </motion.button>
                <motion.div
                  initial={false}
                  className="bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[10px] font-medium px-2 py-1 rounded-full tabular-nums"
                >
                  {currentIndex + 1}/{images.length}
                </motion.div>
              </div>
            )}

            {/* Expand / gallery button */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white"
              aria-label="Open gallery"
            >
              <Maximize2 size={11} />
            </motion.button>

            {/* Nav Arrows — desktop only */}
            <AnimatePresence>
              {isHovered && images.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(
                        (p) => (p - 1 + images.length) % images.length,
                      );
                    }}
                    className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/25 items-center justify-center text-white"
                  >
                    <ChevronLeft size={16} />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((p) => (p + 1) % images.length);
                    }}
                    className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/25 items-center justify-center text-white"
                  >
                    <ChevronRight size={16} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    animate={{
                      width: i === currentIndex ? 20 : 6,
                      backgroundColor:
                        i === currentIndex
                          ? "#ffffff"
                          : "rgba(255,255,255,0.45)",
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                    className="h-1.5 rounded-full"
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Title / desc over image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* ── Thumbnail Strip — slides in on hover / always visible on touch ── */}
          <motion.div
            initial={false}
            animate={{
              height: showThumbs && images.length > 1 ? "auto" : 0,
              opacity: showThumbs && images.length > 1 ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden bg-slate-50"
          >
            <div className="px-3 py-2.5 flex gap-2 overflow-x-auto scrollbar-hide">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setCurrentIndex(i)}
                  className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === currentIndex
                      ? "border-transparent ring-2"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  style={
                    i === currentIndex
                      ? { boxShadow: `0 0 0 2px ${accentColor}` }
                      : {}
                  }
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {i === currentIndex && (
                    <motion.div
                      layoutId={`active-${title}`}
                      className="absolute inset-0 ring-2 ring-inset rounded-lg"
                      style={{ boxShadow: `inset 0 0 0 2px ${accentColor}` }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Open gallery button */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setLightboxOpen(true)}
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-200 hover:bg-slate-300 flex flex-col items-center justify-center gap-0.5 text-slate-500 transition-colors"
              >
                <Grid size={14} />
                <span className="text-[9px] font-medium">All</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Ambient glow behind card */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.18 : 0,
            scale: isHovered ? 1 : 0.85,
          }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${colorTheme} rounded-3xl blur-2xl -z-10`}
          style={{ willChange: "opacity, transform" }}
        />
      </motion.div>
    </>
  );
};

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
const SectionHeader = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center mb-12 sm:mb-16 px-4"
    >
      {/* Pill label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
      >
        <ImageIcon size={12} />
        Visual Showcase
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.65 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0891b2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "'Playfair Display', Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        Campus Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Explore our vibrant campus through curated galleries — hover to browse,
        swipe on mobile, or open the full gallery.
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        className="mx-auto mt-6 h-0.5 w-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
        style={{ originX: 0.5 }}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const colorThemes = [
  { gradient: "from-blue-500 to-cyan-500", accent: "#3b82f6" },
  { gradient: "from-emerald-500 to-teal-500", accent: "#10b981" },
  { gradient: "from-violet-500 to-purple-500", accent: "#8b5cf6" },
  { gradient: "from-amber-500 to-orange-500", accent: "#f59e0b" },
  { gradient: "from-rose-500 to-pink-500", accent: "#f43f5e" },
  { gradient: "from-indigo-500 to-blue-600", accent: "#6366f1" },
  { gradient: "from-cyan-500 to-sky-500", accent: "#06b6d4" },
  { gradient: "from-lime-500 to-green-500", accent: "#84cc16" },
  { gradient: "from-fuchsia-500 to-pink-500", accent: "#d946ef" },
];

const BoxMenu = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* ── Background ── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30" />
        {/* Mesh blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-200/25 blur-[80px] animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[80px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-200/15 blur-[100px] animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <SectionHeader />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {boxData.map((box, index) => {
            const theme = colorThemes[index % colorThemes.length];
            return (
              <ImageCard
                key={box.id}
                images={box.images}
                title={box.title}
                description={box.description}
                colorTheme={theme.gradient}
                accentColor={theme.accent}
                index={index}
              />
            );
          })}
        </div>

        {/* Bottom fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center text-xs text-slate-400 tracking-widest uppercase"
        >
          Hover cards to browse · Tap to open gallery · Swipe on mobile
        </motion.div>
      </div>

      {/* Scrollbar hide utility injected as style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default BoxMenu;
