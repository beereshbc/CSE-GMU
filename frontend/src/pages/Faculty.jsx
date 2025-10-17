import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  BookMarked,
  Briefcase,
  User,
  FileText,
  Building,
} from "lucide-react";
import { faculties } from "../assets/assets";

// Dedicated Faculty Card Component
const FacultyCard = ({ faculty, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-blue-100 overflow-hidden"
    onClick={onClick}
  >
    <div className="p-4">
      {/* Compact Layout with Image and Text Side by Side */}
      <div className="flex items-center space-x-4">
        {/* Profile Image - Smaller */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-0.5">
            <img
              src={faculty.img}
              alt={faculty.name}
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-blue-900 mb-1 line-clamp-1">
            {faculty.name}
          </h3>
          <p className="text-xs text-blue-600 mb-2 line-clamp-2 leading-tight">
            {faculty.position}
          </p>

          {/* Quick Social Links - Very Compact */}
          <div className="flex space-x-2">
            {faculty.social.linkedin && faculty.social.linkedin !== "#" && (
              <a
                href={faculty.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-500 hover:text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3 h-3" />
              </a>
            )}
            {faculty.social.Scholar && faculty.social.Scholar !== "#" && (
              <a
                href={faculty.social.Scholar}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-500 hover:text-blue-700 transition-colors"
                title="Google Scholar"
              >
                <GraduationCap className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Enhanced Detail View Component
const FacultyDetailView = ({ faculty, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Cover Image */}
        <div className="relative">
          <div className="h-48 border-b-2 border-blue-500 bg-blue-300 opacity-90">
            <img
              src={faculty.coverImg}
              alt="Cover"
              className="w-full h-full object-cover mix-blend-overlay z-20"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-blue-800 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Profile Image */}
          <div className="absolute -bottom-12 left-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-8 max-h-[calc(95vh-12rem)] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Info - 3 columns */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    {faculty.name}
                  </h2>
                  <p className="text-lg text-blue-600">{faculty.position}</p>
                </div>
                {/* Quick Stats */}
                <div className="flex space-x-4 mt-4 sm:mt-0">
                  {faculty.qualifications && (
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {faculty.qualifications.length}
                      </div>
                      <div className="text-xs text-blue-500">Degrees</div>
                    </div>
                  )}
                  {faculty.experience && (
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {
                          faculty.experience.filter(
                            (exp) => exp.title === "Teaching"
                          ).length
                        }
                      </div>
                      <div className="text-xs text-blue-500">Roles</div>
                    </div>
                  )}
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  About
                </h3>
                <p className="text-blue-700 leading-relaxed">{faculty.about}</p>
              </div>

              {/* Experience Section with Improved Layout */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Professional Experience
                </h3>
                <div className="space-y-4">
                  {faculty.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900">
                            {exp.title}
                          </h4>
                          <p className="text-sm text-blue-600 mb-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                          {exp.year || "Ongoing"}
                        </span>
                      </div>
                      <p className="text-blue-700 text-sm">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Sections - Conditionally Rendered */}
              {faculty.qualifications && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Qualifications
                  </h3>
                  <div className="space-y-3">
                    {faculty.qualifications.map((qual, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-blue-900">
                              {qual.degree}
                            </h4>
                            <p className="text-sm text-blue-600">
                              {qual.institution}
                            </p>
                            {qual.thesis && (
                              <p className="text-sm text-blue-700 mt-1">
                                <strong>Thesis:</strong> {qual.thesis}
                              </p>
                            )}
                          </div>
                          {qual.year && (
                            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {qual.year}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {faculty.researchInterests && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {faculty.researchInterests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {faculty.administrativeRoles && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Administrative Responsibilities
                  </h3>
                  <div className="space-y-2">
                    {faculty.administrativeRoles.map((role, index) => (
                      <div
                        key={index}
                        className="flex items-center text-blue-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-blue-700">
                    <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">{faculty.contact.address}</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Phone className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">{faculty.contact.phone}</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Mail className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">{faculty.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Connect with {faculty.name.split(" ")[0]}
                </h3>
                <div className="flex space-x-3">
                  {faculty.social.linkedin &&
                    faculty.social.linkedin !== "#" && (
                      <a
                        href={faculty.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  {faculty.social.Scholar && faculty.social.Scholar !== "#" && (
                    <a
                      href={faculty.social.Scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                      title="Google Scholar Profile"
                    >
                      <GraduationCap className="w-4 h-4" />
                    </a>
                  )}
                  {faculty.social.Vidwan && faculty.social.Vidwan !== "#" && (
                    <a
                      href={faculty.social.Vidwan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                      title="Vidwan Profile"
                    >
                      <BookOpen className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-blue-600 mt-3 text-center">
                  Click to visit professional profiles
                </p>
              </div>

              {/* Quick Facts */}
              {faculty.publications && (
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    Research Output
                  </h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    {faculty.publications.nationalConferencePapers && (
                      <div className="flex justify-between">
                        <span>National Conferences:</span>
                        <span className="font-semibold">
                          {faculty.publications.nationalConferencePapers}
                        </span>
                      </div>
                    )}
                    {faculty.publications.internationalConferencePapers && (
                      <div className="flex justify-between">
                        <span>International Conferences:</span>
                        <span className="font-semibold">
                          {faculty.publications.internationalConferencePapers}
                        </span>
                      </div>
                    )}
                    {faculty.publications.nationalJournalPapers && (
                      <div className="flex justify-between">
                        <span>National Journals:</span>
                        <span className="font-semibold">
                          {faculty.publications.nationalJournalPapers}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {faculty.professionalMemberships && (
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    Professional Memberships
                  </h3>
                  <div className="space-y-2">
                    {faculty.professionalMemberships.map(
                      (membership, index) => (
                        <div
                          key={index}
                          className="text-sm text-blue-700 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {membership}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const openDetailView = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const closeDetailView = () => {
    setSelectedFaculty(null);
  };

  // Stats for hero section
  const stats = [
    { number: faculties.length, label: "Faculty Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Publications", icon: BookMarked },
    { number: "10+", label: "Research Areas", icon: GraduationCap },
  ];

  // University social links for hero section
  const universitySocialLinks = {
    linkedin: "https://www.linkedin.com/school/gm-university",
    Scholar: "https://scholar.google.com/citations?user=university",
    Vidwan: "https://vidwan.inflibnet.ac.in/profile/university",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Distinguished
                </span>{" "}
                Faculty
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
              >
                World-class educators and researchers committed to excellence in
                computer science education and innovation.
              </motion.p>

              {/* Social Links - University Level */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
              >
                <span className="text-blue-200 font-semibold">
                  Connect with us:
                </span>
                <div className="flex space-x-4">
                  <a
                    href={universitySocialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={universitySocialLinks.Scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Google Scholar"
                  >
                    <GraduationCap className="w-5 h-5" />
                  </a>
                  <a
                    href={universitySocialLinks.F}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Vidwan"
                  >
                    <BookOpen className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 text-blue-50 fill-current"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Our Academic Team
            </h2>
            <p className="text-base text-blue-700 max-w-2xl mx-auto">
              Dedicated faculty members with extensive experience in teaching,
              research, and innovation.
            </p>
          </motion.div>

          {/* Compact Faculty Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {faculties.map((faculty, index) => (
              <FacultyCard
                key={faculty.name}
                faculty={faculty}
                onClick={() => openDetailView(faculty)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Detail View */}
      <AnimatePresence>
        {selectedFaculty && (
          <FacultyDetailView
            faculty={selectedFaculty}
            onClose={closeDetailView}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faculty;
