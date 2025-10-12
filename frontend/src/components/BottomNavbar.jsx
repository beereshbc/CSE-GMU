import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  BookOpen,
  Users,
  FileText,
  Award,
  Briefcase,
  Mail,
  User,
} from "lucide-react";

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  // All navigation items - no dropdown, all visible
  const allNavItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Programs", path: "/programs", icon: <BookOpen size={18} /> },
    {
      name: "Resources",
      path: "/learning-resources",
      icon: <BookOpen size={18} />,
    },
    { name: "BOS", path: "/bos", icon: <Users size={18} /> },
    { name: "Faculty", path: "/faculty", icon: <Users size={18} /> },
    { name: "IQAC", path: "/iqac", icon: <Award size={18} /> },
    {
      name: "Benchmark",
      path: "/benchmarks",
      icon: <BookOpen size={18} />,
    },
    {
      name: "Research",
      path: "/research-publications",
      icon: <FileText size={18} />,
    },
    {
      name: "Achievements",
      path: "/faculty-achievements",
      icon: <Award size={18} />,
    },
    { name: "Alumni", path: "/alumni", icon: <GraduationCap size={18} /> },
    {
      name: "Student Achievements",
      path: "/student-achievements",
      icon: <Award size={18} />,
    },
    {
      name: "Placements",
      path: "/student-internships-placements",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Admissions",
      path: "/admissions",
      icon: <GraduationCap size={18} />,
    },
    { name: "Contact", path: "/contact-us", icon: <Mail size={18} /> },
  ];

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  // Handle logo click
  const handleLogoClick = () => {
    navigate("/");
    setActiveTab("/");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto my-8" // Added margin for spacing between components
    >
      {/* Main Navbar Container - Inline Style */}
      <div
        className="flex flex-col items-center px-8 py-6
        border border-blue-300/30 rounded-2xl
        bg-gradient-to-r from-blue-900/95 to-blue-800/95
        text-blue-50 backdrop-blur-xl shadow-2xl shadow-blue-900/50"
      >
        {/* Navigation Items - Two rows to fit all items */}
        <div className="w-full">
          {/* First row of navigation items */}
          <div className="flex justify-center gap-2 mb-2 flex-wrap">
            {allNavItems.slice(0, 6).map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`relative flex flex-col items-center gap-1 p-3 transition-all duration-300 group min-w-20 ${
                  activeTab === item.path
                    ? "text-blue-300"
                    : "text-blue-200 hover:text-blue-300"
                }`}
              >
                {item.icon}
                <span className="text-xs font-medium whitespace-nowrap">
                  {item.name}
                </span>

                {/* Active indicator dot */}
                <div
                  className={`absolute -top-1 w-2 h-2 bg-blue-400 rounded-full transition-all duration-300 ${
                    activeTab === item.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                ></div>

                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeTab === item.path
                      ? "bg-blue-600/30 border border-blue-400/30"
                      : "group-hover:bg-blue-700/20 group-hover:border group-hover:border-blue-400/10"
                  }`}
                ></div>
              </button>
            ))}
          </div>

          {/* Second row of navigation items */}
          <div className="flex justify-center gap-2 flex-wrap">
            {allNavItems.slice(6).map((item, index) => (
              <button
                key={index + 6}
                onClick={() => handleNavigation(item.path)}
                className={`relative flex flex-col items-center gap-1 p-3 transition-all duration-300 group min-w-20 ${
                  activeTab === item.path
                    ? "text-blue-300"
                    : "text-blue-200 hover:text-blue-300"
                }`}
              >
                {item.icon}
                <span className="text-xs font-medium whitespace-nowrap">
                  {item.name}
                </span>

                {/* Active indicator dot */}
                <div
                  className={`absolute -top-1 w-2 h-2 bg-blue-400 rounded-full transition-all duration-300 ${
                    activeTab === item.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                ></div>

                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeTab === item.path
                      ? "bg-blue-600/30 border border-blue-400/30"
                      : "group-hover:bg-blue-700/20 group-hover:border group-hover:border-blue-400/10"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;
