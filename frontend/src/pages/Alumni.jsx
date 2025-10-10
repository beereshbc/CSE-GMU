import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building,
  Award,
  Quote,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Mail,
  Globe,
  Star,
  Rocket,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";

// Custom 3D Card Component
const ThreeDCard = ({ member, onClick }) => {
  const cardRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !dimensions.width || !dimensions.height) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - dimensions.width / 2;
    const mouseY = e.clientY - rect.top - dimensions.height / 2;

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

  const mousePX = dimensions.width ? mouse.x / dimensions.width : 0;
  const mousePY = dimensions.height ? mouse.y / dimensions.height : 0;

  const cardRotateY = mousePX * 30;
  const cardRotateX = mousePY * -30;
  const bgTranslateX = mousePX * -40;
  const bgTranslateY = mousePY * -40;

  return (
    <motion.div
      ref={cardRef}
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="card"
        style={{
          transform: `rotateY(${cardRotateY}deg) rotateX(${cardRotateX}deg)`,
        }}
      >
        <div
          className="card-bg"
          style={{
            backgroundImage: `url(${member.image})`,
            transform: `translateX(${bgTranslateX}px) translateY(${bgTranslateY}px)`,
            opacity: isHovering ? 0.8 : 0.5,
          }}
        />
        <div className="card-info">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {member.name}
          </motion.h1>
          <motion.p
            className="role"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {member.role}
          </motion.p>
          <motion.p
            className="bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {member.bio}
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .card-wrap {
          margin: 10px;
          transform: perspective(800px);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .card-wrap:hover .card-info {
          transform: translateY(0);
        }

        .card-wrap:hover .card-info p {
          opacity: 1;
        }

        .card-wrap:hover .card-info,
        .card-wrap:hover .card-info p {
          transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-wrap:hover .card-info:after {
          transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 1;
          transform: translateY(0);
        }

        .card-wrap:hover .card-bg {
          transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-wrap:hover .card {
          transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: rgba(59, 130, 246, 0.3) 0 0 40px 5px,
            rgba(59, 130, 246, 1) 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0,
            inset #1e40af 0 0 0 5px, inset white 0 0 0 6px;
        }

        .card {
          position: relative;
          flex: 0 0 240px;
          width: 240px;
          height: 320px;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          overflow: hidden;
          border-radius: 16px;
          box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #1e40af 0 0 0 5px,
            inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
          transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        .card-bg {
          opacity: 0.5;
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          padding: 20px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
            opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          pointer-events: none;
        }

        .card-info {
          padding: 20px;
          position: absolute;
          bottom: 0;
          color: #fff;
          transform: translateY(40%);
          transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          width: 100%;
          box-sizing: border-box;
        }

        .card-info p {
          opacity: 0;
          text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
          transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          line-height: 1.5em;
          margin: 0;
        }

        .card-info .role {
          color: #bfdbfe;
          font-weight: 600;
          font-size: 1.1em;
          margin-bottom: 8px;
        }

        .card-info .bio {
          font-size: 0.9em;
          color: #e5e7eb;
        }

        .card-info h1 + p,
        .card-info p + p {
          margin-top: 10px;
        }

        .card-info * {
          position: relative;
          z-index: 1;
        }

        .card-info:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(30, 64, 175, 0.8) 100%
          );
          background-blend-mode: overlay;
          opacity: 0;
          transform: translateY(100%);
          transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        .card-info h1 {
          font-family: "TT Norms Pro", "Roboto", sans-serif;
          font-size: 24px;
          font-weight: 700;
          text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
          margin: 0 0 10px 0;
          color: #fff;
        }

        @media (max-width: 768px) {
          .card {
            width: 200px;
            height: 280px;
          }

          .card-info h1 {
            font-size: 20px;
          }

          .card-info {
            padding: 15px;
          }
        }
      `}</style>
    </motion.div>
  );
};

// Floating Elements Component for Background
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={20} className="text-blue-200 opacity-40" />
        </motion.div>
      ))}
    </div>
  );
};

const Alumni = () => {
  const companyInfo = {
    name: "Linkable Technologies",
    founded: "2022",
    location: "Davanagere, Karnataka",
    description:
      "We specialize in web application development, mobile app development, UI/UX design, and end-to-end digital solutions. We focus on custom applications and digital platforms that help businesses streamline operations and grow in the digital era.",
    approach:
      "Our team follows a modern development approach—covering requirement analysis, prototyping, agile development, deployment, and ongoing support—to deliver scalable and reliable software for diverse industries.",
  };

  const teamMembers = [
    {
      id: 1,
      name: "Mr. Sunad R Gundagatti",
      role: "Co-founder & CMD",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sunad",
      bio: "Leading the strategic vision and growth of Linkable Technologies.",
      social: {
        linkedin: "#",
        github: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Mr. M Jnananidhi",
      role: "Co-founder & CTO",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Jnananidhi",
      bio: "Driving technical innovation and product development.",
      social: {
        linkedin: "#",
        github: "#",
        email: "#",
      },
    },
    {
      id: 3,
      name: "Mr. Anushree P L",
      role: "Co-founder & CPM",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Anushree",
      bio: "Managing projects and ensuring successful delivery.",
      social: {
        linkedin: "#",
        github: "#",
        email: "#",
      },
    },
    {
      id: 4,
      name: "Mr. Keerthi Prasad G",
      role: "Co-founder & Technical Advisor",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Keerthi",
      bio: "Alumni success stories and alumni association activities.",
      social: {
        linkedin: "#",
        github: "#",
        email: "#",
      },
    },
  ];

  const alumniStories = [
    {
      id: 1,
      name: "Santosh Kumar",
      batch: "2018-2022",
      currentRole: "Software Engineer",
      company: "Tech Company",
      story:
        "GMIT provided me with the foundation to excel in my career. The alumni network has been incredibly supportive.",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Santosh",
    },
    {
      id: 2,
      name: "Priya Sharma",
      batch: "2017-2021",
      currentRole: "Product Manager",
      company: "Startup XYZ",
      story:
        "The connections I made at GMIT have been invaluable throughout my professional journey.",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "Senior Developer",
      text: "The GMIT alumni community has been instrumental in my career growth. Always ready to help and guide.",
      company: "Google",
    },
    {
      id: 2,
      name: "Sneha Patel",
      role: "UX Designer",
      text: "Amazing network of professionals who genuinely care about each other's success.",
      company: "Microsoft",
    },
  ];

  const stats = [
    { number: "500+", label: "Alumni Members", icon: Users },
    { number: "50+", label: "Companies", icon: Building },
    { number: "100+", label: "Success Stories", icon: Award },
    { number: "95%", label: "Satisfaction Rate", icon: Heart },
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleCardClick = (member) => {
    console.log("Clicked:", member.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/tt-norms-pro");

        body {
          margin: 0;
          font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
          font-size: 14px;
          font-weight: 500;
          background: linear-gradient(
            135deg,
            #eff6ff 0%,
            #ffffff 50%,
            #dbeafe 100%
          );
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <Rocket className="w-6 h-6" />
              <span className="font-semibold">Welcome to Our Community</span>
            </motion.div>

            <motion.h1
              className="text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                GMIT Alumni
              </span>{" "}
              Network
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Celebrating the achievements of our alumni and fostering lifelong
              connections that drive innovation and success across the globe.
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-white"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="text-white w-8 h-8" />
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section with 3D Cards */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">Leadership</span>
              </motion.div>
              <motion.h2
                className="text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Meet Our Founders
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                The visionaries behind Linkable Technologies
              </motion.p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <ThreeDCard
                    member={member}
                    onClick={() => handleCardClick(member)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 bg-white relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full shadow-lg mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg">
                  Success Stories
                </span>
              </motion.div>
              <motion.h2
                className="text-5xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Alumni Achievements
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {alumniStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center space-x-6 mb-6">
                    <motion.img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-2xl border-4 border-blue-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {story.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {story.batch}
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-blue-600 font-bold text-lg">
                      {story.currentRole}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold">
                      {story.company}
                    </p>
                  </div>
                  <motion.p
                    className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-blue-400 pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    "{story.story}"
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Quote className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg">
                  Testimonials
                </span>
              </motion.div>
              <motion.h2
                className="text-5xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                What Our Alumni Say
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <Quote className="w-12 h-12 text-blue-200 mb-6" />
                  <motion.p
                    className="text-gray-700 text-lg mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
