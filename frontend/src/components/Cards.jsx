import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Zap } from "lucide-react";
import { assets } from "../assets/assets";

const Cards = () => {
  const cardsData = [
    {
      icon: Eye,
      title: "Department Vision",
      description:
        "Department of Computer Science and Engineering (CSE) will have a transformative impact on society through continual innovation in Computer engineering education, research, skill development, creativity, and entrepreneurship",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      accentColor: "bg-blue-500",
      delay: 0.1,
      image: assets.gmu_logo,
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
      color: "from-cyan-500 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      accentColor: "bg-cyan-500",
      delay: 0.3,
      image: assets.gmu_logo,
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
      color: "from-indigo-500 to-indigo-700",
      bgColor: "from-indigo-50 to-indigo-100",
      accentColor: "bg-indigo-500",
      delay: 0.5,
      image: assets.gmu_logo,
    },
  ];

  const Card3D = ({ card, index }) => {
    const cardRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      setMouse({ x: mouseX, y: mouseY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMouse({ x: 0, y: 0 });
    };

    const mousePX = mouse.x / (cardRef.current?.offsetWidth || 1);
    const mousePY = mouse.y / (cardRef.current?.offsetHeight || 1);

    const rX = mousePX * 15;
    const rY = mousePY * -15;

    const tX = mousePX * -20;
    const tY = mousePY * -20;

    const cardStyle = {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg) scale(${
        isHovering ? 1.02 : 1
      })`,
    };

    const cardBgTransform = {
      transform: `translateX(${tX}px) translateY(${tY}px) scale(1.1)`,
      backgroundImage: `url(${card.image})`,
    };

    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 60,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
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
          delay: card.delay + 0.2,
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
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="group relative h-full"
      >
        {/* 3D Card Container */}
        <div
          ref={cardRef}
          className="perspective-1000 transform-style-3d cursor-pointer h-full"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Card with 3D transforms */}
          <motion.div
            className="card relative w-full bg-white overflow-hidden rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm h-full"
            style={cardStyle}
            animate={{
              boxShadow: isHovering
                ? `
                    0 20px 40px -8px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 0.1)
                  `
                : `
                    0 15px 30px -6px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image with Parallax */}
            <div
              className="card-bg absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
              style={cardBgTransform}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                card.bgColor
              } opacity-90 transition-all duration-300 ${
                isHovering ? "opacity-80" : "opacity-90"
              }`}
            />

            {/* Accent Border Top */}
            <div
              className={`absolute top-0 left-0 w-full h-1 ${
                card.accentColor
              } transition-all duration-300 ${isHovering ? "h-1.5" : "h-1"}`}
            />

            {/* Content */}
            <div className="relative flex flex-col p-6 h-full">
              {/* Icon Header */}
              <div className="flex flex-col items-center text-left mb-6">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${card.color} shadow-md mb-4`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-800 mb-2"
                >
                  {card.title}
                </motion.h3>
                <div
                  className={`w-12 h-1 rounded-full ${card.accentColor} opacity-80`}
                />
              </div>

              {/* Content Body */}
              <div className="flex-1 flex flex-col justify-center">
                {card.description ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: card.delay + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed text-sm text-left"
                  >
                    {card.description}
                  </motion.p>
                ) : (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: card.delay + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {card.points?.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: card.delay + 0.5 + pointIndex * 0.08,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-2 h-2 rounded-full ${card.accentColor} mt-1.5 flex-shrink-0 transition-all duration-200`}
                        />
                        <span className="flex-1 text-xs sm:text-sm">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Element */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white backdrop-blur-sm rounded-full border border-white/30 shadow-md flex items-center justify-center z-10"
        >
          <Zap className="w-3 h-3 text-blue-500" />
        </motion.div>

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-lg -z-10 ${card.color
            .replace("from-", "bg-")
            .replace("to-", "")}`}
        />
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Know Us Know World!
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Guiding principles that shape our department's vision, mission, and
            objectives for excellence in computer science education and
            innovation.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Cards Grid with Equal Sizing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          style={{
            gridAutoRows: "1fr",
            alignItems: "stretch",
          }}
        >
          {cardsData.map((card, index) => (
            <Card3D key={index} card={card} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Add custom CSS for the 3D effect and grid */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .card {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-bg {
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </section>
  );
};

export default Cards;
