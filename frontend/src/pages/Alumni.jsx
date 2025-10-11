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
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// Enhanced 3D Card Component with better styling
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

  const cardRotateY = mousePX * 20;
  const cardRotateX = mousePY * -20;
  const bgTranslateX = mousePX * -30;
  const bgTranslateY = mousePY * -30;

  return (
    <motion.div
      ref={cardRef}
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
            opacity: isHovering ? 0.9 : 0.6,
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

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="social-btn">
              <Linkedin size={14} />
            </button>
            <button className="social-btn">
              <Mail size={14} />
            </button>
            <button className="social-btn">
              <Github size={14} />
            </button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .card-wrap {
          margin: 12px;
          transform: perspective(1000px);
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
          box-shadow: rgba(59, 130, 246, 0.25) 0 0 60px 8px,
            rgba(59, 130, 246, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 20px 40px 0,
            inset rgba(30, 64, 175, 0.1) 0 0 0 1px,
            inset rgba(255, 255, 255, 0.8) 0 0 0 2px;
        }

        .card {
          position: relative;
          flex: 0 0 260px;
          width: 260px;
          height: 340px;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          overflow: hidden;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.08) 0 20px 40px 0,
            inset rgba(30, 64, 175, 0.1) 0 0 0 1px,
            inset rgba(255, 255, 255, 0.6) 0 0 0 2px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        .card-bg {
          opacity: 0.6;
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
          filter: brightness(1.1);
        }

        .card-info {
          padding: 24px;
          position: absolute;
          bottom: 0;
          color: #fff;
          transform: translateY(30%);
          transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          width: 100%;
          box-sizing: border-box;
        }

        .card-info p {
          opacity: 0;
          text-shadow: rgba(0, 0, 0, 0.8) 0 2px 4px;
          transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          line-height: 1.5em;
          margin: 0;
        }

        .card-info .role {
          color: #bfdbfe;
          font-weight: 600;
          font-size: 1em;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .card-info .bio {
          font-size: 0.85em;
          color: #e5e7eb;
          line-height: 1.4em;
          margin-bottom: 16px;
        }

        .card-info h1 + p,
        .card-info p + p {
          margin-top: 8px;
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
            rgba(30, 64, 175, 0.9) 100%
          );
          background-blend-mode: overlay;
          opacity: 0;
          transform: translateY(100%);
          transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        .card-info h1 {
          font-family: "TT Norms Pro", "Inter", sans-serif;
          font-size: 22px;
          font-weight: 700;
          text-shadow: rgba(0, 0, 0, 0.6) 0 8px 16px;
          margin: 0 0 12px 0;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .social-links {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }

        .social-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .card {
            width: 220px;
            height: 300px;
          }

          .card-info h1 {
            font-size: 20px;
          }

          .card-info {
            padding: 20px;
          }
        }
      `}</style>
    </motion.div>
  );
};

// Enhanced Floating Elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={16} className="text-blue-300 opacity-30" />
        </motion.div>
      ))}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ icon: Icon, title, subtitle, color = "blue" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <motion.div
      className={`inline-flex items-center space-x-3 bg-${color}-50 px-6 py-3 rounded-2xl shadow-sm border border-${color}-100 mb-6`}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className={`w-5 h-5 text-${color}-600`} />
      <span className={`text-${color}-600 font-semibold text-sm tracking-wide`}>
        {title}
      </span>
    </motion.div>
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {subtitle}
    </motion.h2>
    <motion.div
      className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    />
  </motion.div>
);

const Alumni = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

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
        staggerChildren: 0.15,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Enhanced Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/tt-norms-pro");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        body {
          margin: 0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 15px;
          font-weight: 400;
          background: linear-gradient(
            135deg,
            #f8fafc 0%,
            #ffffff 50%,
            #f1f5f9 100%
          );
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
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
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-8"
            >
              <Rocket className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide">
                Welcome to Our Community
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                GMIT Alumni
              </span>{" "}
              Network
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Celebrating the achievements of our alumni and fostering lifelong
              connections that drive innovation and success across the globe.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Network <ArrowRight size={16} />
              </motion.button>
              <motion.button
                className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Stories
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20"
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

      {/* Enhanced Stats Section */}
      <section className="py-10 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <stat.icon className="text-white w-6 h-6" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py- bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-900/[0.01] bg-[size:60px_60px]" />
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Users}
            title="Leadership"
            subtitle="Meet Our Founders"
            color="blue"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
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
          </motion.div>
        </div>
      </section>

      {/* Enhanced Alumni Stories */}
      <section className="py-5 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.01] bg-[size:60px_60px]" />
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Award}
            title="Success Stories"
            subtitle="Alumni Achievements"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {alumniStories.map((story, index) => (
              <motion.div
                key={story.id}
                variants={itemVariants}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <motion.img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-2xl border-2 border-blue-200 shadow-md group-hover:border-blue-300 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {story.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm">
                        {story.batch}
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-blue-600 font-bold text-base">
                      {story.currentRole}
                    </p>
                    <p className="text-gray-600 text-sm font-medium">
                      {story.company}
                    </p>
                  </div>
                  <motion.p
                    className="text-gray-700 text-base leading-relaxed italic border-l-3 border-blue-400 pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{story.story}"
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-5 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-900/[0.01] bg-[size:60px_60px]" />
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Quote}
            title="Testimonials"
            subtitle="What Our Alumni Say"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <div className="p-8">
                  <Quote className="w-10 h-10 text-blue-200 mb-3" />
                  <motion.p
                    className="text-gray-700 text-base mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-xs">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 font-medium text-sm">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
