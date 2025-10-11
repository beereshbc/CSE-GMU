import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
  BarChart3,
  X,
  ChevronRight,
  Menu,
  ArrowLeft,
  UserCheck,
  Users2,
  BookMarked,
  Trophy,
  BriefcaseBusiness,
  School,
  Phone,
} from "lucide-react";

const AssistiveBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      name: "About",
      path: "/about",
      icon: School,
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Programs",
      path: "/programs",
      icon: GraduationCap,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Learning",
      path: "/learning-resources",
      icon: BookOpen,
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "Faculty",
      path: "/faculty",
      icon: Users,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "BoS",
      path: "/bos",
      icon: UserCheck,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Research",
      path: "/research-publications",
      icon: FileText,
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "Projects",
      path: "/student-projects",
      icon: Briefcase,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "IQAC",
      path: "/iqac",
      icon: BarChart3,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Faculty Achieve",
      path: "/faculty-achievements",
      icon: Trophy,
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "Internships",
      path: "/student-internships-placements",
      icon: BriefcaseBusiness,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Achievements",
      path: "/student-achievements",
      icon: Award,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Alumni",
      path: "/alumni",
      icon: Users2,
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "Admissions",
      path: "/admissions",
      icon: BookMarked,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Contact",
      path: "/contact-us",
      icon: Phone,
      color: "from-blue-500 to-blue-700",
    },
  ];

  const bubbleVariants = {
    closed: {
      scale: 1,
      borderRadius: "50%",
      width: 60,
      height: 60,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.3,
      },
    },
    open: {
      scale: 1,
      borderRadius: "20px",
      width: "auto",
      height: "auto",
      minWidth: 300,
      maxWidth: "90vw",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
    open: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
  };

  const handleQuickAction = (action) => {
    switch (action) {
      case "back":
        navigate(-1);
        break;
      case "home":
        navigate("/");
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Assistive Bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Expanded Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="expanded-menu"
              initial={{
                opacity: 0,
                scale: 0.8,
                borderRadius: "50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                borderRadius: "20px",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                borderRadius: "50%",
                transition: { duration: 0.2 },
              }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-200 p-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-blue-800">Quick Nav</h3>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <X size={16} className="text-blue-600" />
                </motion.button>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mb-3">
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuickAction("back")}
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-xs font-medium"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuickAction("home")}
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-xs font-medium"
                >
                  <Home size={14} />
                  <span>Home</span>
                </motion.button>
              </div>

              {/* Navigation Links - Simple Grid */}
              <motion.div
                variants={containerVariants}
                initial="closed"
                animate="open"
                className="grid grid-cols-2 gap-2"
              >
                {links.map((link, index) => {
                  const IconComponent = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          group flex items-center gap-2 p-2 rounded-lg transition-all duration-200
                          ${
                            isActive
                              ? `bg-gradient-to-r ${link.color} text-white shadow-md`
                              : "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:shadow-sm"
                          }
                        `}
                      >
                        <div
                          className={`
                          p-1.5 rounded-md transition-all duration-200
                          ${
                            isActive
                              ? "bg-white/20"
                              : `bg-gradient-to-r ${link.color} group-hover:scale-105`
                          }
                        `}
                        >
                          <IconComponent size={16} className="text-white" />
                        </div>
                        <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                          {link.name}
                        </span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Button */}
        <motion.button
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={bubbleVariants}
          className={`
          
          `}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: typeof window !== "undefined" ? window.innerWidth - 60 : 0,
            bottom: typeof window !== "undefined" ? window.innerHeight - 60 : 0,
          }}
          dragElastic={0.1}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu
                size={24}
                className=" border-2 border-blue-800 p-5 rounded-full text-blue-700"
              />
            )}
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AssistiveBubble;
