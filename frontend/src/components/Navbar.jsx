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
      { name: "About", path: "/about", icon: <Home size={18} /> },
      { name: "Programs", path: "/programs", icon: <BookOpen size={18} /> },
      { name: "Admissions", path: "/admissions", icon: <User size={18} /> },
    ],
    Academics: [
      { name: "Faculty", path: "/faculty", icon: <Users size={18} /> },
      { name: "BoS", path: "/bos", icon: <Users size={18} /> },
      {
        name: "Learning Resources",
        path: "/learning-resources",
        icon: <BookOpen size={18} />,
      },
      { name: "IQAC", path: "/iqac", icon: <Award size={18} /> },
    ],
    "Research & Projects": [
      {
        name: "Research Publications",
        path: "/research-publications",
        icon: <FileText size={18} />,
      },
      {
        name: "Student Projects",
        path: "/student-projects",
        icon: <Award size={18} />,
      },
    ],
    Achievements: [
      {
        name: "Faculty Achievements",
        path: "/faculty-achievements",
        icon: <Award size={18} />,
      },
      {
        name: "Student Achievements",
        path: "/student-achievements",
        icon: <Award size={18} />,
      },
      {
        name: "Internships & Placements",
        path: "/student-internships-placements",
        icon: <Briefcase size={18} />,
      },
    ],
    Community: [
      { name: "Alumni", path: "/alumni", icon: <GraduationCap size={18} /> },
      { name: "Contact Us", path: "/contact-us", icon: <Mail size={18} /> },
    ],
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Scroll animation - exact same as reference
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollHeight <= window.innerHeight) {
        controls.start({ opacity: 1, y: 0 });
        return;
      }
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -50 });
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
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Navbar Container - Exact same styling as reference */}
      <div
        className="max-w-6xl mx-4 md:mx-auto flex items-center justify-between px-6 py-3 mt-4
        border border-blue-300/20 rounded-2xl
        bg-gradient-to-r from-blue-900/90 to-blue-800/90
        text-blue-50 backdrop-blur-xl shadow-lg shadow-blue-900/40"
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <GraduationCap className="text-blue-300 drop-shadow-lg" size={22} />
          <span className="italic font-extrabold text-xl md:text-2xl tracking-wide text-blue-100 drop-shadow">
            GMU-CSE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {Object.entries(linkGroups).map(([groupName, links]) => (
            <div
              key={groupName}
              className="relative"
              ref={(el) => (dropdownRefs.current[groupName] = el)}
            >
              <button
                onClick={() => toggleDropdown(groupName)}
                onMouseEnter={() => setActiveDropdown(groupName)}
                className="relative flex items-center gap-2 px-2 transition duration-300 group"
              >
                <span className="font-medium">{groupName}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeDropdown === groupName
                      ? "rotate-180 text-blue-300"
                      : "text-blue-200"
                  }`}
                />
                <span
                  className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-blue-
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-200/20 overflow-hidden transition-all duration-300 z-50 ${
                  activeDropdown === groupName
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-4">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    {groupName}
                  </h3>
                  <div className="space-y-2">
                    {links.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleDirectNavigation(link.path)}
                        className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
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
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-100 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Same styling as reference */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-br from-blue-900/95 to-blue-800/95 
          backdrop-blur-xl rounded-xl mx-4 mt-2 p-5 border border-blue-300/20 shadow-xl shadow-blue-900/40"
        >
          <div className="space-y-4">
            {Object.entries(linkGroups).map(([groupName, links]) => (
              <div
                key={groupName}
                className="border-b border-blue-700/30 last:border-b-0 pb-4 last:pb-0"
              >
                <h3 className="text-blue-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                  {groupName}
                </h3>
                <div className="space-y-2">
                  {links.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        handleDirectNavigation(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors ${
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
