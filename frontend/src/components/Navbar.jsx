import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Learning Resources", path: "/learning-resources" },
    { name: "Faculty", path: "/faculty" },
    { name: "BoS", path: "/bos" },
    { name: "Research Publications", path: "/research-publications" },
    { name: "Student Projects", path: "/student-projects" },
    { name: "IQAC", path: "/iqac" },
    { name: "Faculty Achievements", path: "/faculty-achievements" },
    {
      name: "Student Internships & Placements",
      path: "/student-internships-placements",
    },
    { name: "Student Achievements", path: "/student-achievements" },
    { name: "Alumni", path: "/alumni" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Navigation - Centered */}
      <section className="hidden lg:block w-full max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100/50 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              Department Navigation
            </h2>
            <p className="text-gray-600 text-lg">
              Explore GMU Computer Science & Engineering
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-center py-4 px-3 rounded-2xl font-medium transition-all duration-300
                  border-2 hover:scale-105 hover:shadow-lg
                  ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg scale-105"
                      : "bg-white text-blue-800 border-blue-100 hover:border-blue-300 shadow-sm"
                  }`
                }
              >
                <span className="text-sm leading-tight">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Tablet Navigation */}
      <section className="hidden md:block lg:hidden w-full max-w-4xl mx-auto px-6 py-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              GMU-CSE Navigation
            </h2>
            <p className="text-gray-600">Explore our department</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-center py-3 px-2 rounded-xl font-medium transition-all duration-200
                  border hover:shadow-md
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                  }`
                }
              >
                <span className="text-xs leading-tight">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full px-4 py-6">
        {/* Mobile Header Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-5 text-center mb-4">
          <h2 className="text-xl font-bold mb-1">GMU-CSE</h2>
          <p className="text-blue-100 text-sm">Department Navigation</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full bg-white border-2 border-blue-200 rounded-2xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-all duration-200"
        >
          <span className="font-medium text-blue-800">Navigation Menu</span>
          <span className="text-2xl text-blue-600">
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`bg-white rounded-2xl shadow-lg border border-blue-100 mt-3 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-blue-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Quick Access Links for Mobile */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {links.slice(0, 4).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-center py-3 px-2 rounded-xl font-medium text-sm transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
                }`
              }
            >
              <span className="text-xs leading-tight">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
