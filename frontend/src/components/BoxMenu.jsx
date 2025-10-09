import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageGallery from "./ImageGallery";
import { boxData } from "../assets/assets";
import {
  BookOpen,
  Microscope,
  Settings,
  Users,
  Code,
  GraduationCap,
  Trophy,
  Presentation,
  HeartHandshake,
} from "lucide-react";

const BoxMenu = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);

  const iconComponents = {
    1: BookOpen,
    2: Microscope,
    3: Settings,
    4: Users,
    5: Code,
    6: GraduationCap,
    7: Trophy,
    8: Presentation,
    9: HeartHandshake,
  };

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

  const galleryVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4">
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

        {/* Boxes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {boxData.map((box, index) => {
            const IconComponent = iconComponents[box.id];
            const colorTheme = colorThemes[index % colorThemes.length];

            return (
              <motion.div
                key={box.id}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoveredBox(box.id)}
                onMouseLeave={() => setHoveredBox(null)}
              >
                {/* Main Box */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 cursor-pointer
                    border border-white/50 shadow-xl hover:shadow-2xl
                    transition-all duration-500 ease-out overflow-hidden
                    ${hoveredBox === box.id ? "ring-2 ring-white/80" : ""}
                  `}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colorTheme} opacity-5`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colorTheme} opacity-0 transition-opacity duration-500 ${
                      hoveredBox === box.id ? "opacity-100" : ""
                    }`}
                  >
                    <div className="absolute inset-[2px] rounded-3xl bg-white/80 backdrop-blur-sm" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorTheme} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {box.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {box.description}
                    </p>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredBox === box.id ? 1 : 0.7 }}
                      className="flex items-center text-sm text-slate-500"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Interactive Gallery
                      </span>
                    </motion.div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredBox === box.id ? 1 : 0,
                      scale: hoveredBox === box.id ? 1 : 0.8,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${colorTheme} opacity-10 rounded-3xl`}
                  />
                </motion.div>

                {/* Image Gallery Popup */}
                <AnimatePresence>
                  {hoveredBox === box.id && (
                    <motion.div
                      variants={galleryVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 right-0 z-30 mt-6"
                    >
                      <ImageGallery
                        images={box.images}
                        title={box.title}
                        description={box.description}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">
              Discover Our World
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
