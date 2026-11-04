import React from "react";
import { motion } from "framer-motion";
import { achievementData, assets } from "../assets/assets";

const FacultyAchievements = () => {
  const galleryImages = [
    {
      src: assets.FA1,

      title: "",
      description: "",
    },
    {
      src: assets.FA2,

      title: "",
      description: "",
    },
    {
      src: assets.FA3,

      title: "",
      description: "",
    },
    {
      src: assets.FA4,

      title: "",
      description: "",
    },
    {
      src: assets.SA5,

      title: "",
      description: "",
    },
    {
      src: assets.SA6,

      title: "",
      description: "",
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const badgeVariants = {
    pulse: {
      scale: [1, 1.08, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleReadMore = (title) => {
    console.log("Navigating to:", title);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-25 to-white"
      style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
    >
      {/* Enhanced CSS for grid animation */}
      <style>
        {`
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
          .bg-blue-25 {
            background-color: #f8fbff;
          }
        `}
      </style>

      {/* Enhanced Header Section */}
      <motion.div
        className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 min-h-[420px] py-24 text-center text-white overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Enhanced Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="none"/><g opacity="0.4"><line x1="0" y1="0" x2="80" y2="0" stroke="white" stroke-width="0.3"/><line x1="0" y1="10" x2="80" y2="10" stroke="white" stroke-width="0.3"/><line x1="0" y1="20" x2="80" y2="20" stroke="white" stroke-width="0.3"/><line x1="0" y1="30" x2="80" y2="30" stroke="white" stroke-width="0.3"/><line x1="0" y1="40" x2="80" y2="40" stroke="white" stroke-width="0.3"/><line x1="0" y1="50" x2="80" y2="50" stroke="white" stroke-width="0.3"/><line x1="0" y1="60" x2="80" y2="60" stroke="white" stroke-width="0.3"/><line x1="0" y1="70" x2="80" y2="70" stroke="white" stroke-width="0.3"/><line x1="0" y1="80" x2="80" y2="80" stroke="white" stroke-width="0.3"/><line x1="0" y1="0" x2="0" y2="80" stroke="white" stroke-width="0.3"/><line x1="10" y1="0" x2="10" y2="80" stroke="white" stroke-width="0.3"/><line x1="20" y1="0" x2="20" y2="80" stroke="white" stroke-width="0.3"/><line x1="30" y1="0" x2="30" y2="80" stroke="white" stroke-width="0.3"/><line x1="40" y1="0" x2="40" y2="80" stroke="white" stroke-width="0.3"/><line x1="50" y1="0" x2="50" y2="80" stroke="white" stroke-width="0.3"/><line x1="60" y1="0" x2="60" y2="80" stroke="white" stroke-width="0.3"/><line x1="70" y1="0" x2="70" y2="80" stroke="white" stroke-width="0.3"/><line x1="80" y1="0" x2="80" y2="80" stroke="white" stroke-width="0.3"/></g></svg>'
              )}")`,
              backgroundSize: "80px 80px",
              animation: "gridMove 25s linear infinite",
            }}
          />
        </div>

        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-white/15 rounded-full blur-sm"></div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Faculty Achievements
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Celebrating excellence in research, innovation and academic
            leadership
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-300 to-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>
      </motion.div>

      {/* Enhanced About Section */}
      <motion.section
        className="bg-white py-20 border-t border-b border-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-4 tracking-tight">
              Excellence in Computer Science Education
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-3"></div>
          </motion.div>
          <motion.p
            className="text-lg text-gray-700 text-center leading-relaxed tracking-wide font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our distinguished faculty members have achieved remarkable
            milestones in research, innovation, and academic excellence. From
            securing patents and international recognition to qualifying for
            prestigious certifications and winning awards, our faculty continues
            to inspire students and contribute to the advancement of computer
            science education.
          </motion.p>
        </div>
      </motion.section>

      {/* Enhanced Faculty Achievements Section with Actual Data */}
      <section className="py-20 bg-gradient-to-b from-blue-25 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Faculty's Remarkable Achievements
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
              Discover the outstanding accomplishments of our CSE faculty in
              research, patents, certifications, and academic excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievementData.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden relative border border-gray-100 hover:border-blue-100 transition-colors duration-300 h-full flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Enhanced Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium z-10 shadow-md border border-blue-400/20"
                    variants={badgeVariants}
                    animate="pulse"
                  >
                    <i className={`${achievement.badgeIcon} mr-1.5`}></i>
                    {achievement.badgeText}
                  </motion.div>

                  {/* Enhanced Image Container */}
                  <div className="card-image relative overflow-hidden h-80">
                    <motion.img
                      src={achievement.imageSrc}
                      alt={achievement.imageAlt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Enhanced Content Area */}
                  <div className="card-content p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light tracking-wide whitespace-pre-line flex-grow">
                      {achievement.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100">
                        {achievement.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Section */}
          <div className="py-16 bg-white mx-4 sm:mx-[6%]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
                  Achievement Moments
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2"></div>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Capturing the memorable moments of success and recognition
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((item, index) => (
                  <div
                    key={index}
                    className="gallery-item relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 h-64"
                    onClick={() => openLightbox(item.largeSrc)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="gallery-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                      <div className="gallery-title font-semibold text-lg mb-1">
                        {item.title}
                      </div>
                      <div className="gallery-description text-sm opacity-90">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyAchievements;
