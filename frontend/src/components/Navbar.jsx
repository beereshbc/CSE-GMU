import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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
  Handshake,
  CakeSlice,
  PenSquareIcon,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // Track active mobile accordion
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
      {
        name: "Falcon Bakes",
        path: "/falcon-bakes",
        icon: <CakeSlice size={16} />,
      },
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
      {
        name: "Contributers",
        path: "/contributers",
        icon: <Handshake size={16} />,
      },
    ],
    Community: [
      {
        name: "Blog",
        path: "/blog",
        icon: <PenSquareIcon size={16} />,
      },
      {
        name: "Alumni",
        path: "/alumni",
        icon: <GraduationCap size={16} />,
      },
      {
        name: "Contact Us",
        path: "/contact-us",
        icon: <Mail size={16} />,
      },
    ],
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  }, [location]);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollHeight <= window.innerHeight) {
        controls.start({ opacity: 1, y: 0 });
        return;
      }
      if (window.scrollY > 50) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -30 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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

  const toggleMobileDropdown = (groupName) => {
    setActiveMobileDropdown(
      activeMobileDropdown === groupName ? null : groupName,
    );
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleDirectNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      animate={controls}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Navbar Container */}
      <div
        className="max-w-6xl mx-2 md:mx-auto flex items-center justify-between px-4 py-2 mt-2
        border border-blue-300/20 rounded-xl md:rounded-2xl
        bg-gradient-to-r from-blue-900/95 to-blue-800/95
        text-blue-50 backdrop-blur-xl shadow-lg shadow-blue-900/40"
      >
        {/* Logo */}
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

              {/* Desktop Dropdown Menu */}
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-100 focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Scrollable Accordion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mx-2 mt-2 bg-gradient-to-br from-blue-900/95 to-blue-800/95 
            backdrop-blur-xl rounded-xl border border-blue-300/20 shadow-xl shadow-blue-900/40 overflow-hidden z-40"
          >
            {/* Scrollable Container Area */}
            <div className="max-h-[75vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              <div className="space-y-1">
                {Object.entries(linkGroups).map(([groupName, links]) => (
                  <div
                    key={groupName}
                    className="border-b border-blue-700/30 last:border-b-0"
                  >
                    {/* Mobile Category Toggle Button */}
                    <button
                      onClick={() => toggleMobileDropdown(groupName)}
                      className="flex items-center justify-between w-full p-3 text-left text-blue-100 hover:bg-blue-700/20 rounded-lg transition-colors"
                    >
                      <span className="text-sm font-semibold tracking-wide">
                        {groupName}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-blue-300 transition-transform duration-300 ${
                          activeMobileDropdown === groupName ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Collapsible Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeMobileDropdown === groupName ? "auto" : 0,
                        opacity: activeMobileDropdown === groupName ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-2 space-y-1 bg-blue-950/30 rounded-lg mb-2 mx-2">
                        {links.map((link) => (
                          <button
                            key={link.name}
                            onClick={() => handleDirectNavigation(link.path)}
                            className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-md transition-colors text-sm ${
                              location.pathname === link.path
                                ? "bg-blue-600/40 text-blue-50 font-semibold"
                                : "text-blue-200 hover:text-white hover:bg-blue-700/40"
                            }`}
                          >
                            <span className="text-blue-400">{link.icon}</span>
                            {link.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
