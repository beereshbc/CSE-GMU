import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  BookOpen,
  TrendingUp,
  ExternalLink,
  ChevronDown,
  X,
  RefreshCw,
  Building,
  FileText,
  GraduationCap,
  Award,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Star,
  Target,
} from "lucide-react";

const ResearchPublications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [sortBy, setSortBy] = useState("year");
  const [sortOrder, setSortOrder] = useState("desc");
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        "https://cse-gmu-stlo.vercel.app/api/all-publications",
        {
          timeout: 10000,
        }
      );

      // ✅ FIX: Validate and ensure response data is an array
      let publicationsData = response.data;

      if (!publicationsData) {
        throw new Error("No data received from server");
      }

      // If it's not an array, try to extract array from response structure
      if (!Array.isArray(publicationsData)) {
        // Try common response structures
        if (
          publicationsData.articles &&
          Array.isArray(publicationsData.articles)
        ) {
          publicationsData = publicationsData.articles;
        } else if (
          publicationsData.data &&
          Array.isArray(publicationsData.data)
        ) {
          publicationsData = publicationsData.data;
        } else if (
          publicationsData.publications &&
          Array.isArray(publicationsData.publications)
        ) {
          publicationsData = publicationsData.publications;
        } else {
          // If we can't find an array, create empty array
          console.warn(
            "Response data is not an array, using empty array instead"
          );
          publicationsData = [];
        }
      }

      // ✅ Ensure we always set an array
      setPublications(publicationsData || []);
    } catch (err) {
      console.error("❌ Error fetching publications:", err);
      const message =
        err.response?.data?.error ||
        err.response?.statusText ||
        err.message ||
        "Network error while fetching publications.";
      setError(message);
      // ✅ Ensure publications is always an array even on error
      setPublications([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FIXED: Enhanced filter logic with proper year comparison
  const filteredPublications = Array.isArray(publications)
    ? publications.filter((pub) => {
        const matchesSearch =
          pub?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub?.authors?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub?.facultyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub?.publication?.toLowerCase().includes(searchTerm.toLowerCase());

        // ✅ FIX: Proper year comparison - handle both string and number types
        const matchesYear =
          !filterYear || String(pub?.year) === String(filterYear);

        return matchesSearch && matchesYear;
      })
    : []; // Return empty array if publications is not an array

  // ✅ FIX: Sorting logic with safe access
  const sortedPublications = [...filteredPublications].sort((a, b) => {
    let aValue, bValue;

    switch (sortBy) {
      case "citations":
        aValue = a?.cited_by?.value || 0;
        bValue = b?.cited_by?.value || 0;
        break;
      case "title":
        aValue = a?.title?.toLowerCase() || "";
        bValue = b?.title?.toLowerCase() || "";
        break;
      case "faculty":
        aValue = a?.facultyName?.toLowerCase() || "";
        bValue = b?.facultyName?.toLowerCase() || "";
        break;
      case "year":
      default:
        aValue = a?.year || 0;
        bValue = b?.year || 0;
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // ✅ FIX: Get unique years for filter with safe array access and proper formatting
  const uniqueYears = Array.isArray(publications)
    ? [...new Set(publications.map((pub) => pub?.year).filter(Boolean))]
        .sort((a, b) => b - a)
        .map((year) => String(year)) // Convert all years to string for consistent comparison
    : [];

  // Generate Google Scholar profile URL
  const getGoogleScholarUrl = (facultyName) => {
    if (!facultyName) return "#";
    const encodedName = encodeURIComponent(facultyName);
    return `https://scholar.google.com/scholar?q=${encodedName}`;
  };

  // ✅ FIX: Safe statistics calculation
  const stats = {
    totalPublications: Array.isArray(publications) ? publications.length : 0,
    totalCitations: Array.isArray(publications)
      ? publications.reduce((sum, pub) => sum + (pub?.cited_by?.value || 0), 0)
      : 0,
    uniqueFaculty: Array.isArray(publications)
      ? [
          ...new Set(
            publications.map((pub) => pub?.facultyName).filter(Boolean)
          ),
        ].length
      : 0,
    uniqueYears: uniqueYears.length,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full mx-auto mb-4"
            />
            <BookOpen className="w-8 h-8 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg font-medium mt-4"
          >
            Loading Research Publications...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 p-4"
      >
        <div className="text-center max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <X className="w-10 h-10 text-red-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Publications
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchPublications}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-sky-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-10 left-10"
        >
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-20 right-20"
        >
          <Star className="w-6 h-6 text-blue-200" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 right-10"
        >
          <Target className="w-8 h-8 text-green-300" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30"
              >
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Premier Research Hub
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Discover{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  Groundbreaking
                </span>{" "}
                Research
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                Explore cutting-edge publications and innovative research from
                our world-class faculty members. Join us in the pursuit of
                knowledge and discovery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("publications-table")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-2 group"
                >
                  Explore Publications
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#stats"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  View Impact
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              id="stats"
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: BookOpen,
                  value: stats.totalPublications,
                  label: "Publications",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: TrendingUp,
                  value: stats.totalCitations,
                  label: "Citations",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Users,
                  value: stats.uniqueFaculty,
                  label: "Faculty Members",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Globe,
                  value: stats.uniqueYears,
                  label: "Years of Research",
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.p
                    className="text-3xl font-bold mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {stat.value.toLocaleString()}
                  </motion.p>
                  <p className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </p>
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
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8" id="publications-table">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Search and Year Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-8 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search publications, authors, faculty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Year Filter */}
                <div className="w-full lg:w-64">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <select
                      value={filterYear}
                      onChange={(e) => setFilterYear(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white transition-colors duration-200"
                    >
                      <option value="">All Years</option>
                      {uniqueYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort Order Toggle */}
                <div className="w-full lg:w-auto">
                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="w-full lg:w-auto px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
                  </button>
                </div>
              </div>

              {/* Active Filters Info */}
              {(searchTerm || filterYear) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-600">
                      Active filters:
                    </span>

                    {searchTerm && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Search: "{searchTerm}"
                        <button
                          onClick={() => setSearchTerm("")}
                          className="hover:text-blue-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {filterYear && (
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Year: {filterYear}
                        <button
                          onClick={() => setFilterYear("")}
                          className="hover:text-green-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Enhanced Publications Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Title
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Authors
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        Faculty
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <Calendar className="w-4 h-4" />
                        Year
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <TrendingUp className="w-4 h-4" />
                        Citations
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Publication
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {sortedPublications.length > 0 ? (
                      sortedPublications.map((publication, index) => (
                        <motion.tr
                          key={`${
                            publication?.citation_id || publication?.id || index
                          }-${index}`}
                          variants={tableRowVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                          className="hover:bg-blue-50/50 transition-colors duration-150 group"
                        >
                          <td className="px-6 py-4 max-w-xs">
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              href={publication?.link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200 line-clamp-2 flex items-start gap-2"
                            >
                              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span>
                                {publication?.title || "No title available"}
                              </span>
                            </motion.a>
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {publication?.authors || "Unknown authors"}
                            </p>
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            <div className="flex flex-col">
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                href={getGoogleScholarUrl(
                                  publication?.facultyName
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200 flex items-center gap-1 group"
                              >
                                <User className="w-4 h-4" />
                                {publication?.facultyName || "Unknown faculty"}
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.a>
                              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-md self-start mt-1">
                                {publication?.facultyDepartment ||
                                  "Unknown department"}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="font-semibold text-gray-900 bg-blue-100 px-3 py-1 rounded-full text-sm">
                              {publication?.year || "N/A"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="font-semibold text-green-600">
                                {publication?.cited_by?.value || 0}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {publication?.publication ||
                                "No publication info"}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  setExpandedRow(
                                    expandedRow === publication?.citation_id
                                      ? null
                                      : publication?.citation_id
                                  )
                                }
                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-blue-500"
                                title="View details"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    expandedRow === publication?.citation_id
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </motion.button>
                              <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={publication?.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-blue-500"
                                title="Open publication"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <td colSpan="7" className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center text-gray-500">
                            <Search className="w-12 h-12 text-gray-300 mb-4" />
                            <p className="text-lg font-medium mb-2">
                              No publications found
                            </p>
                            <p className="text-sm">
                              Try adjusting your search criteria
                            </p>
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Summary Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-800">
                  {sortedPublications.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-800">
                  {publications.length}
                </span>{" "}
                publications
                {filterYear && (
                  <span className="text-sm text-gray-500 ml-2">
                    • Filtered by year: {filterYear}
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
