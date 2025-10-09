import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visibleImages = images.slice(0, 5);

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 max-w-4xl mx-auto"
    >
      {/* Minimal Header */}
      <div className="flex items-center justify-between mb-2">
        <motion.h4
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-light text-gray-800"
        >
          {title}
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-gray-500 bg-white/50 px-3 py-1.5 rounded-full border border-gray-200"
        >
          {currentIndex + 1}/{images.length}
        </motion.div>
      </div>

      {/* Main Image Display */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden mb-8 h-96">
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
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            {description}
          </h3>
          <div className="w-12 h-0.5 bg-white/60 rounded-full" />
        </motion.div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full border border-white/30"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full border border-white/30"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </>
        )}

        {/* Progress Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-4">
        {visibleImages.map((image, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
              currentIndex === index
                ? "ring-2 ring-blue-500 ring-offset-2 shadow-lg"
                : "hover:ring-1 hover:ring-gray-300"
            }`}
          >
            <motion.img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
            />

            {/* Active Indicator */}
            {currentIndex === index && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full ring-2 ring-white"
              />
            )}

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="text-white text-sm font-medium bg-black/50 rounded-full w-6 h-6 flex items-center justify-center"
              >
                {index + 1}
              </motion.span>
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* View More Button */}
      {images.length > 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              View All {images.length}
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ImageGallery;
