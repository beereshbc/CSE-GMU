import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  BookOpen,
  Users,
  FileText,
  CakeSlice,
  Award,
  Briefcase,
  Mail,
  User,
  BarChart3,
  Handshake,
  PenSquareIcon,
} from "lucide-react";

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  // Comprehensive navigation items matching the main Navbar
  const allNavItems = [
    { name: "Home", path: "/", icon: <Home size={14} /> },
    { name: "About", path: "/about", icon: <User size={14} /> },
    { name: "Programs", path: "/programs", icon: <BookOpen size={14} /> },
    {
      name: "Admissions",
      path: "/admissions",
      icon: <GraduationCap size={14} />,
    },
    { name: "Faculty", path: "/faculty", icon: <Users size={14} /> },
    { name: "BoS", path: "/bos", icon: <Users size={14} /> },
    {
      name: "Resources",
      path: "/learning-resources",
      icon: <BookOpen size={14} />,
    },
    { name: "IQAC", path: "/iqac", icon: <Award size={14} /> },
    { name: "Benchmark", path: "/benchmarks", icon: <BarChart3 size={14} /> },
    {
      name: "Research",
      path: "/research-publications",
      icon: <FileText size={14} />,
    },
    {
      name: "Falcon Bakes",
      path: "/falcon-bakes",
      icon: <CakeSlice size={14} />,
    },
    {
      name: "Faculty Achv.",
      path: "/faculty-achievements",
      icon: <Award size={14} />,
    },
    {
      name: "Student Achv.",
      path: "/student-achievements",
      icon: <Award size={14} />,
    },
    {
      name: "Placements",
      path: "/student-internships-placements",
      icon: <Briefcase size={14} />,
    },
    {
      name: "Contributers",
      path: "/contributers",
      icon: <Handshake size={14} />,
    },
    { name: "Blog", path: "/blog", icon: <PenSquareIcon size={14} /> },
    { name: "Alumni", path: "/alumni", icon: <GraduationCap size={14} /> },
    { name: "Contact", path: "/contact-us", icon: <Mail size={14} /> },
  ];

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto my-6 px-4"
    >
      {/* Sleek, Thin Navbar Container with Horizontal Scroll */}
      <div
        className="flex items-center overflow-x-auto py-2 px-3 gap-1.5
        border border-blue-300/20 rounded-full
        bg-gradient-to-r from-blue-950/95 to-blue-900/95
        text-blue-50 backdrop-blur-xl shadow-lg shadow-blue-900/40
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {allNavItems.map((item, index) => {
          const isActive = activeTab === item.path;

          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group shrink-0 ${
                isActive
                  ? "bg-blue-600/40 text-white shadow-inner border border-blue-400/30"
                  : "hover:bg-blue-800/50 text-blue-200 hover:text-blue-100 border border-transparent"
              }`}
            >
              <span
                className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
              >
                {item.icon}
              </span>
              <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
                {item.name}
              </span>

              {/* Active Underline Glow */}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-300 rounded-t-full shadow-[0_-2px_8px_rgba(147,197,253,0.8)]" />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;
