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
        "Department of Computer Science and Engineering (CSE) we have a transformative impact on society through continual innovation in Computer engineering education, research, skill development, creativity, and entrepreneurship",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
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
      color: "from-cyan-400 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
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
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
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
      setTimeout(() => {
        setMouse({ x: 0, y: 0 });
      }, 1000);
    };

    const mousePX = mouse.x / (cardRef.current?.offsetWidth || 1);
    const mousePY = mouse.y / (cardRef.current?.offsetHeight || 1);

    const rX = mousePX * 30;
    const rY = mousePY * -30;

    const tX = mousePX * -40;
    const tY = mousePY * -40;

    const cardStyle = {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
    };

    const cardBgTransform = {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
      backgroundImage: `url(${card.image})`,
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
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="group relative"
      >
        {/* 3D Card Container */}
        <div
          ref={cardRef}
          className="card-wrap perspective-800 transform-style-3d cursor-pointer mx-4 my-4"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Card with 3D transforms */}
          <motion.div
            className="card relative w-80 h-96 bg-white overflow-hidden rounded-2xl shadow-xl border border-blue-100/50 backdrop-blur-sm"
            style={cardStyle}
            animate={{
              boxShadow: isHovering
                ? [
                    "rgba(59, 130, 246, 0.15) 0 0 40px 5px",
                    "rgba(255, 255, 255, 1) 0 0 0 1px",
                    "rgba(0, 0, 0, 0.1) 0 30px 60px 0",
                    "inset #ffffff 0 0 0 5px",
                    "inset rgba(59, 130, 246, 0.1) 0 0 0 6px",
                  ].join(", ")
                : [
                    "rgba(0, 0, 0, 0.08) 0 30px 60px 0",
                    "inset #ffffff 0 0 0 5px",
                    "inset rgba(59, 130, 246, 0.05) 0 0 0 6px",
                  ].join(", "),
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Image with Parallax */}
            <div
              className="card-bg absolute top-[-20px] left-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)] bg-cover bg-center bg-no-repeat opacity-20"
              style={cardBgTransform}
            />

            {/* Light Blue Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                card.bgColor
              } opacity-80 transition-all duration-500 ${
                isHovering ? "opacity-60" : "opacity-80"
              }`}
            />

            {/* Content */}
            <div
              className={`card-info absolute bottom-0 p-8 text-gray-800 transform transition-all duration-600 ease-in-out ${
                isHovering ? "translate-y-0" : "translate-y-2/4"
              }`}
            >
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
                  className="text-xl sm:text-2xl font-bold text-gray-800"
                >
                  {card.title}
                </motion.h3>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {card.description ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: card.delay + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`text-gray-700 leading-relaxed text-sm sm:text-base transition-opacity duration-600 ${
                      isHovering ? "opacity-100" : "opacity-0"
                    }`}
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
                        className={`flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed transition-opacity duration-600 ${
                          isHovering ? "opacity-100" : "opacity-0"
                        }`}
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
            </div>
          </motion.div>
        </div>

        {/* Floating Element */}
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
          className="absolute -top-2 -right-2 w-6 h-6 bg-white backdrop-blur-sm rounded-full border border-blue-200 shadow-lg flex items-center justify-center z-20"
        >
          <Zap className="w-3 h-3 text-blue-500" />
        </motion.div>
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
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-start"
        >
          {cardsData.map((card, index) => (
            <Card3D key={index} card={card} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Add custom CSS for the 3D effect */}
      <style jsx>{`
        .perspective-800 {
          perspective: 800px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .card {
          transition: transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
        .card-bg {
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-info {
          transition: transform 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      `}</style>
    </section>
  );
};

export default Cards;
