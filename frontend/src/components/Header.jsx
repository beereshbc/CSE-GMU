import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Award, BookOpen, Users, Sparkles } from "lucide-react";
import { assets } from "../assets/assets";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 min-h-[600px]"
      >
        {/* Left Section: HoD Data */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[70%] bg-gradient-to-br from-white via-blue-50 to-indigo-100/30 shadow-2xl rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col border border-blue-200/50 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-indigo-200/20 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>

          {/* HoD Info Box */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mb-4 relative z-10">
            {/* HoD Image */}
            <motion.div
              variants={imageVariants}
              className="flex-shrink-0 self-center lg:self-start"
            >
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
                  <img
                    src={assets.hod_img}
                    alt="Dr. Shivanagowda G M, HoD of CSE"
                    className="w-full h-full object-cover"
                  />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Verified Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Name & Designation */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center sm:text-left"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-1"
              >
                Dr. Shivanagowda G. M.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base text-indigo-600 font-medium mb-3 sm:mb-4 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
                Professor & Head, Department of Computer Science & Engineering
              </motion.p>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative bg-white/80 backdrop-blur-sm border-l-4 border-indigo-500 pl-3 sm:pl-4 py-2 sm:py-3 rounded-r-2xl shadow-lg mb-4 sm:mb-6"
              >
                <Quote className="absolute -top-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-500 bg-white rounded-full p-0.5 sm:p-1" />
                <p className=" lg:text-sm text-gray-700 italic leading-relaxed">
                  "At the heart of Computer Science lies the power of
                  aptitude—the intellectual agility to learn, adapt, and
                  innovate. In our rapidly changing world, this quality defines
                  success."
                </p>
              </motion.blockquote>
            </motion.div>
          </div>

          {/* Scrollable Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="relative flex-1 flex flex-col"
          >
            <hr className="h-1 bg-blue-500 items-center" />
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 mt-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg flex-1 flex flex-col">
              <div className="overflow-y-auto pr-3 sm:pr-4 flex-1 custom-scrollbar">
                <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Welcome to the Department of Computer Science & Engineering
                  (CSE) at GM University, Davanagere. Dr. Shivanagowda G. M.,
                  with nearly two decades of experience, leads our department in
                  fostering innovation, research, and industry-relevant
                  education.
                </p>
                <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Our department is dedicated to nurturing talent and preparing
                  students to excel in the rapidly evolving field of technology.
                  In today's digital era, Computer Science drives transformation
                  across every sector—from Artificial Intelligence, Data
                  Science, and Cloud Computing to Cybersecurity and the Internet
                  of Things (IoT). At GMU, we ensure our students gain strong
                  theoretical foundations complemented by hands-on experience
                  through modern laboratories, real-world projects, and industry
                  collaborations.
                </p>
                <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Our distinguished faculty are actively engaged in teaching,
                  research, and consultancy, offering mentorship that bridges
                  academia and industry. They instill deep learning, analytical
                  thinking, and adaptability—skills that empower our students to
                  excel in competitive examinations like GATE and GRE and make
                  impactful contributions to global academic and technology
                  communities.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Under Dr. Shivanagowda's leadership, the department has
                  established state-of-the-art laboratories, fostered
                  international collaborations, and created an ecosystem that
                  encourages innovation and entrepreneurship. Our alumni have
                  gone on to achieve remarkable success in top tech companies,
                  research organizations, and academic institutions worldwide.
                </p>
              </div>
              {/* Scrollbar gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none rounded-b-xl sm:rounded-b-2xl"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Video Section - Two Videos in Horizontal Layout */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-[30%] flex flex-col gap-4 md:gap-6 lg:gap-8 h-full"
        >
          {/* Top Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-3xl border border-blue-200/50 backdrop-blur-sm flex-1 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[4/3] w-full h-full">
              <video
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                controls
              >
                <source src={assets.Intro_v1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 ml-0.5" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-3xl border border-blue-200/50 backdrop-blur-sm flex-1 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[4/3] w-full h-full">
              {/* Auto-play Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/department-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 ml-0.5" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
        }
      `}</style>
    </section>
  );
};

export default Header;
