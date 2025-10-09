import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  GraduationCap,
  Users,
  Lightbulb,
  Globe,
  Zap,
} from "lucide-react";

const Cards = () => {
  const cardsData = [
    {
      icon: Eye,
      title: "Department Vision",
      description:
        "Department of Computer Science and Engineering (CSE) we have a transformative impact on society through continual innovation in Computer engineering education, research, skill development, creativity, and entrepreneurship",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      delay: 0.1,
    },
    {
      icon: Target,
      title: "Department Mission",
      points: [
        "To disseminate knowledge and conduct research in Computer Science and Engineering with learner centric approach",
        "To teach skills such as critical thinking, creativity and innovation, collaboration, communication, technical and digital, flexibility and adaptability, cultural values, and leadership and responsibility",
        "To develop global citizens by educating students on emotional, physical, social, economic, environmental, spiritual dimensions of human growth in addition to intellectual pursuits",
        "To address real-world challenges and to establish the groundwork for entrepreneurship and lifelong learning",
      ],
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      delay: 0.3,
    },
    {
      icon: Rocket,
      title: "Department Objectives",
      points: [
        "Deliver high-quality education in core and emerging areas of computer Science and Engineering to produce competent, industry ready graduates.",
        "Promote cutting-edge research and innovation to address societal, industrial, and environmental challenges.",
        "Foster interdisciplinary learning and collaboration to develop advanced products, sustainable systems, and start-up ventures.",
        "Develop professional, ethical, and leadership skills among students to excel in diverse global work environments.",
        "Engage with industry and community through consultancy, skill development, and technology transfer for regional and national development.",
      ],
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div
                className={`relative bg-gradient-to-br ${card.bgColor} rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 backdrop-blur-sm h-full flex flex-col overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>

                {/* Icon Header */}
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={`p-3 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg`}
                  >
                    <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: card.delay + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                  >
                    {card.title}
                  </motion.h3>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  {card.description ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: card.delay + 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-gray-700 leading-relaxed text-sm sm:text-base"
                    >
                      {card.description}
                    </motion.p>
                  ) : (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: card.delay + 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-3 sm:space-y-4"
                    >
                      {card.points?.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: card.delay + 0.6 + pointIndex * 0.1,
                            duration: 0.4,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} mt-2 flex-shrink-0`}
                          ></motion.div>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </div>

                {/* Decorative Bottom Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: card.delay + 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${card.color} rounded-full mt-6 origin-left`}
                ></motion.div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full border border-white shadow-lg flex items-center justify-center"
              >
                <Zap className="w-3 h-3 text-blue-600" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {[
            {
              icon: GraduationCap,
              label: "Industry Ready Graduates",
              value: "500+",
            },
            { icon: Users, label: "Expert Faculty", value: "25+" },
            { icon: Lightbulb, label: "Research Projects", value: "50+" },
            { icon: Globe, label: "Global Partnerships", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-blue-200/50"
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-blue-800">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
