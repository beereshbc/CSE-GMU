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
} from "lucide-react";

const AssistiveBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", path: "/", icon: Home, color: "from-blue-500 to-blue-600" },
    {
      name: "Faculty",
      path: "/faculty",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Programs",
      path: "/programs",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Learning",
      path: "/learning-resources",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Projects",
      path: "/student-projects",
      icon: Briefcase,
      color: "from-red-500 to-red-600",
    },
    {
      name: "Achievements",
      path: "/student-achievements",
      icon: Award,
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Research",
      path: "/research-publications",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "IQAC",
      path: "/iqac",
      icon: BarChart3,
      color: "from-teal-500 to-teal-600",
    },
  ];

  const bubbleVariants = {
    closed: {
      scale: 1,
      borderRadius: "50%",
      width: 60,
      height: 60,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    open: {
      scale: 1,
      borderRadius: "30px",
      width: "auto",
      height: "auto",
      minWidth: 280,
      minHeight: 400,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={bubbleVariants}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">
                  Quick Navigation
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X size={18} className="text-gray-600" />
                </motion.button>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mb-4">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickAction("back")}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span className="text-sm font-medium">Back</span>
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuickAction("home")}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                >
                  <Home size={16} />
                  <span className="text-sm font-medium">Home</span>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-2"
              >
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      custom={index}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          group flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                          ${
                            isActive
                              ? `bg-gradient-to-r ${link.color} text-white shadow-lg`
                              : "bg-gray-50/80 hover:bg-white text-gray-700 hover:text-gray-900 hover:shadow-md"
                          }
                        `}
                      >
                        <div
                          className={`
                          p-2 rounded-lg transition-all duration-200
                          ${
                            isActive
                              ? "bg-white/20"
                              : `bg-gradient-to-r ${link.color} group-hover:scale-110`
                          }
                        `}
                        >
                          <IconComponent
                            size={18}
                            className={isActive ? "text-white" : "text-white"}
                          />
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap">
                          {link.name}
                        </span>
                        <ChevronRight
                          size={16}
                          className={`ml-auto transition-transform duration-200 ${
                            isActive
                              ? "text-white/80"
                              : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5"
                          }`}
                        />
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
          variants={bubbleVariants}
          className={`
            flex items-center justify-center 
            bg-gradient-to-br from-blue-600 to-purple-600 
            shadow-2xl hover:shadow-3xl
            cursor-grab active:cursor-grabbing
            backdrop-blur-sm
            border border-white/20
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: typeof window !== "undefined" ? window.innerWidth - 80 : 0,
            bottom: typeof window !== "undefined" ? window.innerHeight - 80 : 0,
          }}
          dragElastic={0.1}
        >
          <motion.div variants={iconVariants}>
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
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
