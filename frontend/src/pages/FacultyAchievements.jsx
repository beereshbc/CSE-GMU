import React from "react";
import { motion } from "framer-motion";

const FacultyAchievements = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const badgeVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const achievementData = [
    {
      id: 1,
      badgeIcon: "fas fa-book",
      badgeText: "Research",
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Research Papers",
      title: "Research & Publications",
      description:
        "Our faculty have published numerous research papers in reputed journals, contributing to advancements in computer science and technology.",
    },
    {
      id: 2,
      badgeIcon: "fas fa-lightbulb",
      badgeText: "Innovation",
      imageSrc:
        "https://images.unsplash.com/photo-1516321310762-479e93c67b9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "AI/ML Projects",
      title: "Guiding Projects & Innovation",
      description:
        "Faculty guide students in cutting-edge projects in AI, ML, IoT, and Cybersecurity, fostering innovation and practical learning.",
    },
    {
      id: 3,
      badgeIcon: "fas fa-graduation-cap",
      badgeText: "Academic",
      imageSrc:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Curriculum Development",
      title: "Academic Quality Initiatives",
      description:
        "Our faculty contribute to curriculum development, NBA/OBE practices, and IQAC activities to ensure academic excellence.",
    },
    {
      id: 4,
      badgeIcon: "fas fa-handshake",
      badgeText: "Collaboration",
      imageSrc:
        "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Industry Collaboration",
      title: "Industry Collaboration & Grants",
      description:
        "Faculty secure research grants and collaborate with industries to bridge the gap between academia and practice.",
    },
  ];

  const handleReadMore = (title) => {
    console.log("Navigating to:", title);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Add CSS for grid animation */}
      <style>
        {`
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>

      {/* Header Section (Hero) */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 min-h-[400px] py-20 text-center text-white overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="none"/><g opacity="0.3"><line x1="0" y1="0" x2="80" y2="0" stroke="white" stroke-width="0.5"/><line x1="0" y1="10" x2="80" y2="10" stroke="white" stroke-width="0.5"/><line x1="0" y1="20" x2="80" y2="20" stroke="white" stroke-width="0.5"/><line x1="0" y1="30" x2="80" y2="30" stroke="white" stroke-width="0.5"/><line x1="0" y1="40" x2="80" y2="40" stroke="white" stroke-width="0.5"/><line x1="0" y1="50" x2="80" y2="50" stroke="white" stroke-width="0.5"/><line x1="0" y1="60" x2="80" y2="60" stroke="white" stroke-width="0.5"/><line x1="0" y1="70" x2="80" y2="70" stroke="white" stroke-width="0.5"/><line x1="0" y1="80" x2="80" y2="80" stroke="white" stroke-width="0.5"/><line x1="0" y1="0" x2="0" y2="80" stroke="white" stroke-width="0.5"/><line x1="10" y1="0" x2="10" y2="80" stroke="white" stroke-width="0.5"/><line x1="20" y1="0" x2="20" y2="80" stroke="white" stroke-width="0.5"/><line x1="30" y1="0" x2="30" y2="80" stroke="white" stroke-width="0.5"/><line x1="40" y1="0" x2="40" y2="80" stroke="white" stroke-width="0.5"/><line x1="50" y1="0" x2="50" y2="80" stroke="white" stroke-width="0.5"/><line x1="60" y1="0" x2="60" y2="80" stroke="white" stroke-width="0.5"/><line x1="70" y1="0" x2="70" y2="80" stroke="white" stroke-width="0.5"/><line x1="80" y1="0" x2="80" y2="80" stroke="white" stroke-width="0.5"/></g></svg>'
              )}")`,
              backgroundSize: "80px 80px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Faculty Achievements
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* About Faculty Achievements Section */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-4xl mx-auto px-4">
          <motion.p
            className="text-xl sm:text-2xl text-blue-800 text-center leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Faculty members of the Department of CSE have consistently
            contributed to research, innovation, and academic excellence. They
            have published research papers in reputed journals, guided student
            projects in cutting-edge areas like AI, ML, IoT, and Cybersecurity,
            and actively engaged in academic quality initiatives such as
            curriculum development, NBA/OBE practices, and IQAC activities.
          </motion.p>
        </div>
      </motion.section>

      {/* Faculty Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              Our Faculty's Contributions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Discover the remarkable achievements of our CSE faculty in
              research, innovation, and academic excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievementData.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden relative border border-blue-100"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg"
                    variants={badgeVariants}
                    animate="pulse"
                  >
                    <i className={`${achievement.badgeIcon} mr-2`}></i>
                    {achievement.badgeText}
                  </motion.div>

                  <div className="card-image relative overflow-hidden h-64">
                    <motion.img
                      src={achievement.imageSrc}
                      alt={achievement.imageAlt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="card-content p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-700 text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    <motion.button
                      onClick={() => handleReadMore(achievement.title)}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-all duration-300 group/btn"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <motion.i
                        className="fas fa-arrow-right"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 bg-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our Academic Excellence
          </motion.h3>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Be part of our innovative community where faculty achievements drive
            technological advancement and academic excellence.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More Achievements
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default FacultyAchievements;
