import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { boxData } from "../assets/assets";

const ImageCard = ({
  images,
  title,
  description,
  colorTheme,
  isHovered,
  onHover,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || !isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const popupImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      x: custom.x,
      transition: {
        delay: custom.delay,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      {/* Main Card */}
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 overflow-hidden group cursor-pointer h-64"
        onMouseEnter={onHover}
      >
        {/* Main Image Display */}
        <div className="relative h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={title}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Title & Description Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold mb-1 line-clamp-1"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-xs leading-relaxed line-clamp-2"
            >
              {description}
            </motion.p>
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <div className="absolute top-3 right-3 flex items-center gap-1">
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="bg-black/50 backdrop-blur-md text-white p-1 rounded-full border border-white/20"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              </motion.button>

              {/* Index Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-full text-xs border border-white/20"
              >
                {currentIndex + 1}/{images.length}
              </motion.div>
            </div>
          )}

          {/* Navigation Arrows */}
          {images.length > 1 && isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md text-white p-2 rounded-full border border-white/20"
              >
                <ChevronLeft size={16} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md text-white p-2 rounded-full border border-white/20"
              >
                <ChevronRight size={16} />
              </motion.button>
            </>
          )}

          {/* Progress Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToImage(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Color Theme Indicator */}
        <div
          className={`absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorTheme}`}
        />
      </motion.div>

      {/* Popup Images on Hover */}
      <AnimatePresence>
        {isHovered && images.length > 1 && (
          <>
            {/* Left Image */}
            <motion.div
              variants={popupImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={{ x: -80, delay: 0.1 }}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20"
            >
              <motion.img
                src={images[(currentIndex - 1 + images.length) % images.length]}
                alt="Previous"
                className="w-40 h-40 rounded-lg shadow-2xl border-2 border-white object-cover"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={popupImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={{ x: 80, delay: 0.2 }}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20"
            >
              <motion.img
                src={images[(currentIndex + 1) % images.length]}
                alt="Next"
                className="w-40 h-40 rounded-lg shadow-2xl border-2 border-white object-cover"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>

            {/* Top Image */}
            <motion.div
              variants={popupImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={{ x: 0, delay: 0.3 }}
              className="absolute top-0 left-36 transform -translate-x-1/2 -translate-y-full z-20"
            >
              <motion.img
                src={images[(currentIndex + 2) % images.length]}
                alt="Additional"
                className="w-40 h-40 rounded-lg shadow-2xl border-2 border-white object-cover"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hover Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        className={`absolute inset-0 bg-gradient-to-r ${colorTheme} rounded-2xl blur-xl -z-10`}
      />
    </motion.div>
  );
};

// Updated BoxMenu Component
const BoxMenu = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const colorThemes = [
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-green-500",
    "from-purple-500 to-indigo-500",
    "from-amber-500 to-orange-500",
    "from-rose-500 to-pink-500",
    "from-violet-500 to-purple-500",
    "from-cyan-500 to-blue-500",
    "from-lime-500 to-emerald-500",
    "from-indigo-500 to-blue-500",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Campus Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our dynamic learning environment through
            interactive galleries showcasing academic excellence and student
            life
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boxData.map((box, index) => (
            <motion.div
              key={box.id}
              variants={itemVariants}
              className="relative py-4"
            >
              <ImageCard
                images={box.images}
                title={box.title}
                description={box.description}
                colorTheme={colorThemes[index % colorThemes.length]}
                isHovered={hoveredBox === box.id}
                onHover={() => setHoveredBox(box.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-700 mb-3">
              Discover Our World
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm">
              Each gallery represents a unique aspect of our educational
              journey, showcasing the innovation, collaboration, and excellence
              that define our community
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default BoxMenu;
