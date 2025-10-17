import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ChevronLeft,
  ChevronRight,
  School,
  Users,
  BookOpen,
  Award,
  Sparkles,
  Code2,
  Database,
  Network,
} from "lucide-react";
import { assets, slides } from "../assets/assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full sm:h-screen  flex flex-col items-center justify-between py-4 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-2/3 left-1/2 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-20"
        ></motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Code2, Database, Network, Cpu].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <Icon className="w-6 h-6 text-blue-300/40" />
          </motion.div>
        ))}
      </div>

      {/* Top Section - Compact Department Info */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-6xl relative z-10"
      >
        {/* University Logo - Smaller */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-2 "
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className=" cursor-pointer flex items-center gap-3"
          >
            <motion.div>
              <img src={assets.gmu_logo} className="w-44" alt="" srcset="" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Department Info - Smaller Fonts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-1"
        >
          <motion.h1 className="text-2xl mt-[-50px] md:text-4xl lg:text-5xl font-black text-blue-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Department of </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/50 -rotate-1 -z-0 origin-left"
              ></motion.span>
            </span>
            <span className="relative inline-block mx-2">
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent relative z-10">
                Computer Science
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full -z-0 origin-left"
              ></motion.span>
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">and Engineering</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/40 rotate-1 -z-0 origin-left"
              ></motion.span>
            </span>
          </motion.h1>
          <div>
            <motion.p className="text-xl   font-semibold text-blue-700 relative inline-block">
              <span className="relative z-10 sm:text-5xl">
                School of Computer Science and Technology
              </span>
            </motion.p>
          </div>

          {/* Animated Separator - Compact */}

          {/* Faculty Info - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="relative"
          >
            <motion.p className="text-2xl md:text-3xl   font-semibold text-blue-700 relative inline-block">
              <span className="relative z-10">
                Faculty of Engineering and Technology
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Carousel Section - Optimized for Full Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full  relative flex-1 flex flex-col justify-center mb-8"
      >
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden  border border-blue-200/60">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-blue-300" />
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm md:text-base text-blue-100 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Stats Bar - Compact */}
          <div className="absolute top-4 left-4 right-4">
            <div className=" backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-200/60">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <Users className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">500+</p>
                  <p className="text-white text-xs">Students</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">50+</p>
                  <p className="text-white text-xs">Courses</p>
                </div>
                <div className="text-center">
                  <Award className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">25+</p>
                  <p className="text-white text-xs">Faculty</p>
                </div>
                <div className="text-center">
                  <Cpu className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">4+</p>
                  <p className="text-white text-xs">Labs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 w-6"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
