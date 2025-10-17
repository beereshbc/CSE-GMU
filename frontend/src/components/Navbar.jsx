import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  Menu,
  X,
  GraduationCap,
  Home,
  BookOpen,
  Users,
  FileText,
  Award,
  Briefcase,
  Mail,
  User,
  ChevronDown,
  BarChart3,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRefs = useRef({});
  const controls = useAnimation();

  // Group links by category for better organization
  const linkGroups = {
    "About & Programs": [
      { name: "About", path: "/about", icon: <Home size={16} /> },
      { name: "Programs", path: "/programs", icon: <BookOpen size={16} /> },
      { name: "Admissions", path: "/admissions", icon: <User size={16} /> },
    ],
    Academics: [
      { name: "Faculty", path: "/faculty", icon: <Users size={16} /> },
      { name: "BoS", path: "/bos", icon: <Users size={16} /> },
      {
        name: "Learning Resources",
        path: "/learning-resources",
        icon: <BookOpen size={16} />,
      },
      { name: "IQAC", path: "/iqac", icon: <Award size={16} /> },
      {
        name: "Benchmark",
        path: "/benchmarks",
        icon: <BarChart3 size={16} />,
      },
    ],
    "Research & Projects": [
      {
        name: "Research Publications",
        path: "/research-publications",
        icon: <FileText size={16} />,
      },
      // {
      //   name: "Student Projects",
      //   path: "/student-projects",
      //   icon: <Award size={16} />,
      // },
    ],
    Achievements: [
      {
        name: "Faculty Achievements",
        path: "/faculty-achievements",
        icon: <Award size={16} />,
      },
      {
        name: "Student Achievements",
        path: "/student-achievements",
        icon: <Award size={16} />,
      },
      {
        name: "Internships & Placements",
        path: "/student-internships-placements",
        icon: <Briefcase size={16} />,
      },
    ],
    Community: [
      { name: "Alumni", path: "/alumni", icon: <GraduationCap size={16} /> },
      { name: "Contact Us", path: "/contact-us", icon: <Mail size={16} /> },
    ],
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Scroll animation - optimized for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollHeight <= window.innerHeight) {
        controls.start({ opacity: 1, y: 0 });
        return;
      }
      if (window.scrollY > 50) {
        // Reduced from 100 to 50 for mobile
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -30 }); // Reduced from -50 to -30
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target)) {
          setActiveDropdown(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (groupName) => {
    setActiveDropdown(activeDropdown === groupName ? null : groupName);
  };

  // Handle logo click - navigate to home using React Router
  const handleLogoClick = () => {
    navigate("/");
  };

  // Handle direct navigation for desktop menu items
  const handleDirectNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      animate={controls}
      initial={{ opacity: 0, y: -30 }} // Reduced from -50 to -30
      transition={{ duration: 0.4, ease: "easeOut" }} // Slightly faster transition
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Navbar Container - Optimized for mobile */}
      <div
        className="max-w-6xl mx-2 md:mx-auto flex items-center justify-between px-4 py-2 mt-2
        border border-blue-300/20 rounded-xl md:rounded-2xl
        bg-gradient-to-r from-blue-900/95 to-blue-800/95
        text-blue-50 backdrop-blur-xl shadow-lg shadow-blue-900/40"
      >
        {/* Logo - Smaller on mobile */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleLogoClick}
        >
          <GraduationCap className="text-blue-300 drop-shadow-lg" size={18} />
          <span className="italic font-extrabold text-lg md:text-2xl tracking-wide text-blue-100 drop-shadow">
            GMU-CSE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {Object.entries(linkGroups).map(([groupName, links]) => (
            <div
              key={groupName}
              className="relative"
              ref={(el) => (dropdownRefs.current[groupName] = el)}
            >
              <button
                onClick={() => toggleDropdown(groupName)}
                onMouseEnter={() => setActiveDropdown(groupName)}
                className="relative flex items-center gap-1 px-2 transition duration-300 group"
              >
                <span className="font-medium text-sm">{groupName}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeDropdown === groupName
                      ? "rotate-180 text-blue-300"
                      : "text-blue-200"
                  }`}
                />
                <span
                  className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-blue-300
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-blue-200/20 overflow-hidden transition-all duration-300 z-50 ${
                  activeDropdown === groupName
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-3">
                  <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    {groupName}
                  </h3>
                  <div className="space-y-1">
                    {links.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleDirectNavigation(link.path)}
                        className={`flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md transition-all duration-200 text-xs ${
                          location.pathname === link.path
                            ? "bg-blue-500 text-white font-medium shadow-md"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {link.icon}
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button - Smaller */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-100 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - More compact */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-gradient-to-br from-blue-900/95 to-blue-800/95 
          backdrop-blur-xl rounded-lg mx-2 mt-1 p-3 border border-blue-300/20 shadow-xl shadow-blue-900/40"
        >
          <div className="space-y-2">
            {Object.entries(linkGroups).map(([groupName, links]) => (
              <div
                key={groupName}
                className="border-b border-blue-700/30 last:border-b-0 pb-2 last:pb-0"
              >
                <h3 className="text-blue-300 text-xs font-semibold mb-2 uppercase tracking-wide">
                  {groupName}
                </h3>
                <div className="space-y-1">
                  {links.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        handleDirectNavigation(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md transition-colors text-sm ${
                        location.pathname === link.path
                          ? "bg-blue-600/30 text-blue-200 font-semibold"
                          : "text-blue-100 hover:text-blue-200 hover:bg-blue-700/20"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
