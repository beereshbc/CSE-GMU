import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About", path: "/about", icon: "🏛️" },
    { name: "Programs", path: "/programs", icon: "🎓" },
    { name: "Learning Resources", path: "/learning-resources", icon: "📚" },
    { name: "Faculty", path: "/faculty", icon: "👨‍🏫" },
    { name: "BoS", path: "/bos", icon: "⚙️" },
    {
      name: "Research Publications",
      path: "/research-publications",
      icon: "🔬",
    },
    { name: "Student Projects", path: "/student-projects", icon: "💻" },
    { name: "IQAC", path: "/iqac", icon: "⭐" },
    { name: "Faculty Achievements", path: "/faculty-achievements", icon: "🏆" },
    {
      name: "Student Internships & Placements",
      path: "/student-internships-placements",
      icon: "💼",
    },
    { name: "Student Achievements", path: "/student-achievements", icon: "🎯" },
    { name: "Alumni", path: "/alumni", icon: "👥" },
    { name: "Admissions", path: "/admissions", icon: "🎫" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <section
        className={`hidden lg:block w-full bg-gradient-to-br from-blue-50 via-white to-indigo-100/60 py-8 rounded-3xl shadow-2xl transition-all duration-300 ${
          scrolled ? "mt-4" : "mt-10"
        } border border-white/50 backdrop-blur-sm`}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
            Department Navigation
          </h2>
          <p className="text-gray-600 mt-3 text-lg font-medium">
            Explore Various Sections of{" "}
            <span className="text-blue-600 font-semibold">GMU-CSE</span>
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-center text-center p-4 rounded-2xl font-semibold transition-all duration-300 ease-out
                border-2 border-blue-100/50 hover:border-blue-300 hover:shadow-xl hover:scale-105
                overflow-hidden
                ${
                  isActive
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white/80 text-blue-800 shadow-md hover:bg-white"
                }`
              }
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Link Content */}
              <div className="relative z-10 flex flex-col items-center space-y-2">
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm leading-tight">{link.name}</span>
              </div>

              {/* Active Indicator */}
              <div
                className={({ isActive }) =>
                  `absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`
                }
              />
            </NavLink>
          ))}
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div
          className={`sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-2xl transition-all duration-300 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h2 className="text-lg font-bold">GMU-CSE</h2>
                <p className="text-blue-100 text-xs">Department Navigation</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-blue-50 to-indigo-50 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Navigation Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <p className="text-blue-100">
              Explore GMU Computer Science Department
            </p>
          </div>

          {/* Mobile Links */}
          <div className="h-[calc(100vh-140px)] overflow-y-auto p-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-4 rounded-2xl font-medium transition-all duration-200
                  border-2 ${
                    isActive
                      ? "border-blue-500 bg-blue-500 text-white shadow-lg"
                      : "border-blue-100 bg-white text-blue-800"
                  }
                  hover:shadow-md hover:scale-105 active:scale-95`
                }
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="flex-1 text-left">{link.name}</span>
                {({ isActive }) =>
                  isActive && <span className="text-lg animate-pulse">➔</span>
                }
              </NavLink>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 border-t border-blue-200 p-4 text-center">
            <p className="text-gray-600 text-sm">
              GMU Computer Science & Engineering
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access Bar for Tablets */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mt-6 border border-blue-200">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            {links.slice(0, 6).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex-shrink-0 flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`
                }
              >
                <span>{link.icon}</span>
                <span className="text-sm">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
