import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
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
  Lightbulb,
  Bookmark,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";
import { assets } from "../assets/assets";
import {
  researchMeta,
  journalPublications,
  conferencePapersPresented,
  conferenceProceedings,
  bookChapters,
  patentsList,
  researchSupervisors,
  researchScholars,
  fdpAttended2024_25,
  fdpAttended2025_26,
  fdpAttended2026_27,
  consolidatedFdpList,
} from "../data/researchData";

const ResearchPublications = () => {
  // Main Category Tabs
  // 1: Journals, 2: Conferences, 3: FDPs, 4: Patents, 5: Book Chapters, 6: Supervisors & Scholars, 7: Google Scholar Live
  const [activeTab, setActiveTab] = useState("journals");

  // Sub-tabs
  const [fdpSubTab, setFdpSubTab] = useState("all"); // 'all' (consolidated), '2024-25', '2025-26', '2026-27'
  const [confSubTab, setConfSubTab] = useState("proceedings"); // 'proceedings', 'presented'
  const [scholarSubTab, setScholarSubTab] = useState("scholars"); // 'supervisors', 'scholars'

  // Search Filter
  const [searchTerm, setSearchTerm] = useState("");

  // Live Google Scholar Publications State
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterYear, setFilterYear] = useState("");
  const [sortBy, _setSortBy] = useState("year");
  const [sortOrder, _setSortOrder] = useState("desc");

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        "https://cse-gmu.onrender.com/api/all-publications",
        {
          timeout: 15000,
        }
      );

      let publicationsData = response.data;
      if (!publicationsData) {
        throw new Error("No data received from server");
      }

      if (!Array.isArray(publicationsData)) {
        if (publicationsData.articles && Array.isArray(publicationsData.articles)) {
          publicationsData = publicationsData.articles;
        } else if (publicationsData.data && Array.isArray(publicationsData.data)) {
          publicationsData = publicationsData.data;
        } else if (publicationsData.publications && Array.isArray(publicationsData.publications)) {
          publicationsData = publicationsData.publications;
        } else {
          publicationsData = [];
        }
      }

      setPublications(publicationsData || []);
    } catch (err) {
      console.warn("Notice: Live Google Scholar API unreachable, local records available.", err.message);
      setError("Live Scholar feed currently offline; all departmental research records are active below.");
      setPublications([]);
    } finally {
      setLoading(false);
    }
  };

  // Google Scholar Filter logic
  const filteredScholarPubs = Array.isArray(publications)
    ? publications.filter((pub) => {
        const q = searchTerm.toLowerCase();
        const matchesSearch =
          !searchTerm ||
          pub?.title?.toLowerCase().includes(q) ||
          pub?.authors?.toLowerCase().includes(q) ||
          pub?.facultyName?.toLowerCase().includes(q) ||
          pub?.publication?.toLowerCase().includes(q);

        const matchesYear = !filterYear || String(pub?.year) === String(filterYear);
        return matchesSearch && matchesYear;
      })
    : [];

  const sortedScholarPubs = [...filteredScholarPubs].sort((a, b) => {
    let aVal = a?.year || 0;
    let bVal = b?.year || 0;
    if (sortBy === "citations") {
      aVal = a?.cited_by?.value || 0;
      bVal = b?.cited_by?.value || 0;
    } else if (sortBy === "title") {
      aVal = a?.title?.toLowerCase() || "";
      bVal = b?.title?.toLowerCase() || "";
    }
    return sortOrder === "asc" ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
  });

  const uniqueYears = Array.isArray(publications)
    ? [...new Set(publications.map((pub) => pub?.year).filter(Boolean))]
        .sort((a, b) => b - a)
        .map((year) => String(year))
    : [];

  const getGoogleScholarUrl = (facultyName) => {
    if (!facultyName) return "#";
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(facultyName)}`;
  };

  // Generic Search Filter for Array of Objects
  const filterList = (list, fields = []) => {
    if (!searchTerm.trim()) return list;
    const term = searchTerm.toLowerCase();
    return list.filter((item) =>
      fields.some((f) => {
        const val = item[f];
        return val && String(val).toLowerCase().includes(term);
      })
    );
  };

  // Filtered records for each section
  const filteredJournals = filterList(journalPublications, [
    "authors",
    "title",
    "journal",
    "index",
    "monthYear",
  ]);

  const filteredConfPresented = filterList(conferencePapersPresented, [
    "authors",
    "title",
    "conference",
    "location",
  ]);

  const filteredConfProceedings = filterList(conferenceProceedings, [
    "authors",
    "title",
    "conference",
    "publisher",
    "doi",
  ]);

  const filteredPatents = filterList(patentsList, [
    "facultyName",
    "title",
    "applicationNumber",
    "status",
  ]);

  const filteredBookChapters = filterList(bookChapters, [
    "authors",
    "title",
    "publisher",
    "isbn",
  ]);

  const getFdpList = () => {
    switch (fdpSubTab) {
      case "2024-25":
        return fdpAttended2024_25;
      case "2025-26":
        return fdpAttended2025_26;
      case "2026-27":
        return fdpAttended2026_27;
      case "all":
      default:
        return consolidatedFdpList;
    }
  };

  const filteredFdps = filterList(getFdpList(), [
    "facultyName",
    "title",
    "agency",
    "location",
  ]);

  const filteredSupervisors = filterList(researchSupervisors, [
    "facultyName",
    "university",
  ]);

  const filteredScholars = filterList(researchScholars, [
    "scholarName",
    "supervisor",
    "usn",
    "status",
  ]);

  // Overall Departmental Stats
  const statsOverview = [
    {
      title: "Scopus & Peer Journals",
      count: journalPublications.length,
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Patents (Filed / Granted)",
      count: patentsList.length,
      icon: Lightbulb,
      color: "from-amber-500 to-yellow-600",
    },
    {
      title: "Conferences",
      count: conferenceProceedings.length + conferencePapersPresented.length,
      icon: FileText,
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "FDPs Attended",
      count: consolidatedFdpList.length,
      icon: Award,
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-black/15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:32px_32px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>{researchMeta.department}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                Research &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-yellow-200">
                  Innovation
                </span>
              </h1>

              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mb-8 leading-relaxed">
                Showcasing patents, high-impact Scopus indexed journal publications,
                international conference proceedings, book chapters, faculty development programs,
                and doctoral research under GMU Research Centre.
              </p>

              {/* Coordinator & HOD Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <img
                    src={assets.Dr_CHETHAN_CHANDRA_S_BASAVARADDI}
                    alt={researchMeta.coordinator}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/40 shadow"
                  />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-cyan-200 font-medium">
                      {researchMeta.coordinatorRole}
                    </p>
                    <p className="text-sm font-bold text-white line-clamp-1">
                      {researchMeta.coordinator}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <img
                    src={assets.hod_img}
                    alt={researchMeta.hod}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/40 shadow"
                  />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-cyan-200 font-medium">
                      {researchMeta.hodRole}
                    </p>
                    <p className="text-sm font-bold text-white line-clamp-1">
                      {researchMeta.hod}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Stat Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {statsOverview.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-lg hover:bg-white/15 transition-all"
                >
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-r ${item.color} mb-2 shadow`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {item.count}
                  </h3>
                  <p className="text-xs text-blue-100 font-medium mt-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-2 mb-8 sticky top-20 z-20 backdrop-blur-md bg-white/95">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {[
              { id: "journals", label: "Journal Publications", count: journalPublications.length, icon: BookOpen },
              { id: "conferences", label: "Conferences", count: conferenceProceedings.length + conferencePapersPresented.length, icon: FileText },
              { id: "fdps", label: "Faculty FDPs", count: consolidatedFdpList.length, icon: Award },
              { id: "patents", label: "Patents", count: patentsList.length, icon: Lightbulb },
              { id: "bookChapters", label: "Book Chapters", count: bookChapters.length, icon: Bookmark },
              { id: "scholars", label: "Supervisors & Scholars", count: researchScholars.length, icon: GraduationCap },
              { id: "liveScholar", label: "Google Scholar Live", count: publications.length, icon: Globe },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm("");
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 mb-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder={`Search in ${activeTab}... (by faculty, title, date)`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-4">
            <span className="font-semibold text-blue-900">
              Department of Computer Science and Engineering
            </span>
            <span className="hidden sm:inline-block bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">
              Academic Year 2024–2026
            </span>
          </div>
        </div>

        {/* ================= TAB 1: JOURNAL PUBLICATIONS ================= */}
        {activeTab === "journals" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    List of Journal Publications for the Academic Year 2024–26
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Scopus Indexed, Peer-Reviewed & Refereed Journals • Report Date: {researchMeta.reportDate}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1.5 rounded-lg">
                    Showing {filteredJournals.length} of {journalPublications.length} Journals
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                      <th className="py-3.5 px-6">Authors</th>
                      <th className="py-3.5 px-6">Title</th>
                      <th className="py-3.5 px-6">Journal Name</th>
                      <th className="py-3.5 px-4 text-center">Month / Year</th>
                      <th className="py-3.5 px-4 text-center">Vol & Issue</th>
                      <th className="py-3.5 px-4 text-center">Index / Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredJournals.map((pub) => (
                      <tr key={pub.slNo} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-500">{pub.slNo}</td>
                        <td className="py-3.5 px-6 font-semibold text-blue-900 max-w-xs">{pub.authors}</td>
                        <td className="py-3.5 px-6 text-slate-800 font-medium max-w-md">
                          {pub.link && pub.link !== "#" ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                            >
                              <span>{pub.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-blue-500 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                            </a>
                          ) : (
                            pub.title
                          )}
                        </td>
                        <td className="py-3.5 px-6 text-slate-600 text-xs">
                          <p className="font-semibold text-slate-700">{pub.journal}</p>
                          {pub.impactFactor && (
                            <span className="inline-block mt-1 bg-green-50 text-green-700 border border-green-200 text-[11px] px-1.5 py-0.5 rounded">
                              Impact Factor: {pub.impactFactor}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-600 whitespace-nowrap">
                          {pub.monthYear}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-600 whitespace-nowrap">
                          {pub.vol} {pub.issue ? `• ${pub.issue}` : ""}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                            {pub.index || "Scopus"}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filteredJournals.length === 0 && (
                      <tr>
                        <td colSpan="7" className="py-10 text-center text-slate-500">
                          No journal publications found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 2: CONFERENCES ================= */}
        {activeTab === "conferences" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Sub-tabs switch */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setConfSubTab("proceedings")}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  confSubTab === "proceedings"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Conference Proceedings ({conferenceProceedings.length})
              </button>
              <button
                onClick={() => setConfSubTab("presented")}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  confSubTab === "presented"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Conference Papers Presented ({conferencePapersPresented.length})
              </button>
            </div>

            {confSubTab === "proceedings" ? (
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100">
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    List of Conference Proceedings Publications for the Academic Year 2024–26
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    IEEE, Springer, National & International Proceedings • Report Date: {researchMeta.reportDate}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                        <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                        <th className="py-3.5 px-6">Authors</th>
                        <th className="py-3.5 px-6">Title</th>
                        <th className="py-3.5 px-6">Conference</th>
                        <th className="py-3.5 px-4 text-center">Month / Year</th>
                        <th className="py-3.5 px-4 text-center">Publisher</th>
                        <th className="py-3.5 px-4 text-center">DOI / Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredConfProceedings.map((conf) => (
                        <tr key={conf.slNo} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-slate-500">{conf.slNo}</td>
                          <td className="py-3.5 px-6 font-semibold text-blue-900 max-w-xs">{conf.authors}</td>
                          <td className="py-3.5 px-6 text-slate-800 font-medium max-w-md">{conf.title}</td>
                          <td className="py-3.5 px-6 text-slate-600 text-xs">{conf.conference}</td>
                          <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-600 whitespace-nowrap">
                            {conf.month}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-700">
                            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                              {conf.publisher || "IEEE"}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {conf.link ? (
                              <a
                                href={conf.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <span>View DOI</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-xs text-slate-400">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100">
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    List of Conference Papers Presented for the Academic Year 2025–26
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">Report Date: {researchMeta.reportDate}</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                        <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                        <th className="py-3.5 px-6">Authors</th>
                        <th className="py-3.5 px-6">Title</th>
                        <th className="py-3.5 px-6">Conference</th>
                        <th className="py-3.5 px-4 text-center">Location</th>
                        <th className="py-3.5 px-4 text-center">Month</th>
                        <th className="py-3.5 px-4 text-center">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredConfPresented.map((conf) => (
                        <tr key={conf.slNo} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-slate-500">{conf.slNo}</td>
                          <td className="py-3.5 px-6 font-semibold text-blue-900">{conf.authors}</td>
                          <td className="py-3.5 px-6 text-slate-800 font-medium">{conf.title}</td>
                          <td className="py-3.5 px-6 text-slate-600 text-xs">{conf.conference}</td>
                          <td className="py-3.5 px-4 text-center text-xs text-slate-600">{conf.location}</td>
                          <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-600">{conf.month}</td>
                          <td className="py-3.5 px-4 text-center">
                            {conf.link && (
                              <a
                                href={conf.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                              >
                                View Proceeding <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* ================= TAB 3: FACULTY FDPS ================= */}
        {activeTab === "fdps" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Sub-tabs for FDP Year selection */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                { id: "all", label: "Consolidated (2024–26)", count: consolidatedFdpList.length },
                { id: "2024-25", label: "Academic Year 2024–25", count: fdpAttended2024_25.length },
                { id: "2025-26", label: "Academic Year 2025–26", count: fdpAttended2025_26.length },
                { id: "2026-27", label: "Academic Year 2026–27", count: fdpAttended2026_27.length },
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setFdpSubTab(sub.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    fdpSubTab === sub.id
                      ? "bg-blue-600 text-white shadow"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>{sub.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      fdpSubTab === sub.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {sub.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    List of Faculty Development Programmes (FDP) Attended
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    {fdpSubTab === "all" ? "Consolidated 2024-26" : `Academic Year ${fdpSubTab}`} • FDP Report Date: {researchMeta.fdpReportDate}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1.5 rounded-lg">
                    Showing {filteredFdps.length} Programmes
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                      <th className="py-3.5 px-6">Faculty Name</th>
                      <th className="py-3.5 px-6">Title of Programme</th>
                      <th className="py-3.5 px-6">Agency / Organizing Body</th>
                      <th className="py-3.5 px-4 text-center">Location</th>
                      <th className="py-3.5 px-4 text-center">Duration</th>
                      <th className="py-3.5 px-4 text-center">Date / Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredFdps.map((fdp) => (
                      <tr key={fdp.slNo} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-500">{fdp.slNo}</td>
                        <td className="py-3.5 px-6 font-semibold text-blue-950 max-w-xs">{fdp.facultyName}</td>
                        <td className="py-3.5 px-6 text-slate-800 font-medium max-w-md">{fdp.title}</td>
                        <td className="py-3.5 px-6 text-slate-600 text-xs max-w-xs">{fdp.agency}</td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-600">{fdp.location}</td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2 py-0.5 rounded-full font-semibold">
                            {fdp.noOfDays} {fdp.noOfDays === 1 ? "Day" : "Days"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-700 whitespace-nowrap font-medium">
                          {fdp.dateOfFdp || fdp.month}
                        </td>
                      </tr>
                    ))}
                    {filteredFdps.length === 0 && (
                      <tr>
                        <td colSpan="7" className="py-10 text-center text-slate-500">
                          No FDP records found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 4: PATENTS ================= */}
        {activeTab === "patents" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    List of Patents for the Academic Year 2024–26
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Granted, Published & Filed Patents • Report Date: {researchMeta.reportDate}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1.5 rounded-lg">
                    Total: {patentsList.length} Patents
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                      <th className="py-3.5 px-6">Faculty Name</th>
                      <th className="py-3.5 px-6">Patent Title</th>
                      <th className="py-3.5 px-6">Application Number</th>
                      <th className="py-3.5 px-4 text-center">Status</th>
                      <th className="py-3.5 px-4 text-center">Filing Date</th>
                      <th className="py-3.5 px-4 text-center">Publication Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredPatents.map((pat) => (
                      <tr key={pat.slNo} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-500">{pat.slNo}</td>
                        <td className="py-3.5 px-6 font-semibold text-blue-950 whitespace-nowrap">{pat.facultyName}</td>
                        <td className="py-3.5 px-6 font-medium text-slate-800 max-w-md">{pat.title}</td>
                        <td className="py-3.5 px-6 font-mono text-xs text-slate-700 whitespace-nowrap">
                          {pat.applicationNumber}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                              pat.status.toLowerCase().includes("granted")
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : pat.status.toLowerCase().includes("published")
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            {pat.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-600 whitespace-nowrap">
                          {pat.filingDate}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-700 whitespace-nowrap">
                          {pat.publicationDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 5: BOOK CHAPTERS ================= */}
        {activeTab === "bookChapters" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100">
                <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-indigo-600" />
                  List of Book Chapters for the Academic Year 2024–26
                </h2>
                <p className="text-xs text-slate-600 mt-1">Report Date: {researchMeta.reportDate}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                      <th className="py-3.5 px-6">Authors</th>
                      <th className="py-3.5 px-6">Title</th>
                      <th className="py-3.5 px-6">Publisher</th>
                      <th className="py-3.5 px-4 text-center">ISBN / DOI</th>
                      <th className="py-3.5 px-4 text-center">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredBookChapters.map((bk) => (
                      <tr key={bk.slNo} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-500">{bk.slNo}</td>
                        <td className="py-3.5 px-6 font-semibold text-blue-950 whitespace-nowrap">{bk.authors}</td>
                        <td className="py-3.5 px-6 font-medium text-slate-800">{bk.title}</td>
                        <td className="py-3.5 px-6 text-slate-600 text-xs font-semibold">{bk.publisher}</td>
                        <td className="py-3.5 px-4 text-center font-mono text-xs text-slate-700">{bk.isbn}</td>
                        <td className="py-3.5 px-4 text-center font-semibold text-slate-600">{bk.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= TAB 6: SUPERVISORS & SCHOLARS ================= */}
        {activeTab === "scholars" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setScholarSubTab("scholars")}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  scholarSubTab === "scholars"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Research Scholars under GMU Centre ({researchScholars.length})
              </button>
              <button
                onClick={() => setScholarSubTab("supervisors")}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  scholarSubTab === "supervisors"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Research Supervisors ({researchSupervisors.length})
              </button>
            </div>

            {scholarSubTab === "scholars" ? (
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100">
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Details of Research Scholars Under GMU Research Centre
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">Date: {researchMeta.reportDate}</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                        <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                        <th className="py-3.5 px-6">Research Supervisor</th>
                        <th className="py-3.5 px-6">Scholar Name</th>
                        <th className="py-3.5 px-6">USN / Reg. Number</th>
                        <th className="py-3.5 px-4 text-center">Mode</th>
                        <th className="py-3.5 px-4 text-center">Admission Year</th>
                        <th className="py-3.5 px-6">Research Title / Progress</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredScholars.map((sch) => (
                        <tr key={sch.slNo} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-slate-500">{sch.slNo}</td>
                          <td className="py-3.5 px-6 font-semibold text-blue-950 whitespace-nowrap">{sch.supervisor}</td>
                          <td className="py-3.5 px-6 font-bold text-slate-800">{sch.scholarName}</td>
                          <td className="py-3.5 px-6 font-mono text-xs text-slate-600">{sch.usn}</td>
                          <td className="py-3.5 px-4 text-center text-xs text-slate-600">{sch.mode}</td>
                          <td className="py-3.5 px-4 text-center text-xs font-semibold text-slate-700">{sch.admissionYear}</td>
                          <td className="py-3.5 px-6 text-xs text-slate-600">{sch.researchTitle}</td>
                          <td className="py-3.5 px-4 text-center">
                            <span
                              className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                                sch.status.toLowerCase().includes("course")
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {sch.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100">
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Details of Research Supervisors
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">Date: {researchMeta.reportDate}</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                        <th className="py-3.5 px-4 w-12 text-center">Sl</th>
                        <th className="py-3.5 px-6">Faculty Name</th>
                        <th className="py-3.5 px-4 text-center">University</th>
                        <th className="py-3.5 px-4 text-center">Total Registered</th>
                        <th className="py-3.5 px-4 text-center">Total Awarded</th>
                        <th className="py-3.5 px-4 text-center">Total Ongoing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredSupervisors.map((sup) => (
                        <tr key={sup.slNo} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 text-center font-bold text-slate-500">{sup.slNo}</td>
                          <td className="py-3.5 px-6 font-bold text-blue-950">{sup.facultyName}</td>
                          <td className="py-3.5 px-4 text-center font-semibold text-slate-700">{sup.university}</td>
                          <td className="py-3.5 px-4 text-center font-semibold text-blue-700">{sup.registeredScholars}</td>
                          <td className="py-3.5 px-4 text-center font-semibold text-emerald-700">{sup.totalAwarded}</td>
                          <td className="py-3.5 px-4 text-center font-semibold text-slate-800">{sup.totalOngoing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* ================= TAB 7: GOOGLE SCHOLAR LIVE FEED ================= */}
        {activeTab === "liveScholar" && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Google Scholar Live Publication Feed
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Live citations and research profile data indexed on Google Scholar
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="text-xs px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="">All Years</option>
                    {uniqueYears.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={fetchPublications}
                    className="p-2 hover:bg-white rounded-lg text-blue-600 border border-slate-200 transition-colors"
                    title="Refresh Live Data"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="py-16 text-center text-slate-500">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm font-medium">Fetching Google Scholar records...</p>
                </div>
              ) : error && sortedScholarPubs.length === 0 ? (
                <div className="py-12 text-center text-slate-500 p-6">
                  <Globe className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">{error}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    All departmental research records (Scopus, Patents, FDPs) are available in the tabs above.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                        <th className="py-3.5 px-6">Title</th>
                        <th className="py-3.5 px-6">Authors</th>
                        <th className="py-3.5 px-6">Faculty</th>
                        <th className="py-3.5 px-4 text-center">Year</th>
                        <th className="py-3.5 px-4 text-center">Citations</th>
                        <th className="py-3.5 px-6">Publication</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {sortedScholarPubs.map((pub, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-6 max-w-xs">
                            <a
                              href={pub.link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 inline-flex items-center gap-1 group"
                            >
                              <span>{pub.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-blue-500 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                            </a>
                          </td>
                          <td className="py-3.5 px-6 text-slate-600 text-xs line-clamp-2">{pub.authors}</td>
                          <td className="py-3.5 px-6 whitespace-nowrap">
                            <a
                              href={getGoogleScholarUrl(pub.facultyName)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-blue-600 hover:underline text-xs flex items-center gap-1"
                            >
                              <User className="w-3 h-3" />
                              {pub.facultyName}
                            </a>
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs font-semibold">{pub.year || "N/A"}</td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="font-bold text-emerald-600 text-xs">
                              {pub.cited_by?.value || 0}
                            </span>
                          </td>
                          <td className="py-3.5 px-6 text-slate-500 text-xs line-clamp-2">{pub.publication}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Institutional Sign-off Footer */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Institutional Documentation
            </p>
            <h4 className="text-base font-bold text-blue-950 mt-0.5">
              Department of Computer Science and Engineering
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              GM University, Post Box No-4, P B Road, Davanagere-577006, Karnataka, India
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700">
            <div className="text-center md:text-right border-l-2 border-blue-400 pl-4">
              <p className="font-bold text-blue-900">{researchMeta.coordinator}</p>
              <p className="text-slate-500">{researchMeta.coordinatorRole}</p>
            </div>
            <div className="text-center md:text-right border-l-2 border-indigo-400 pl-4">
              <p className="font-bold text-blue-900">{researchMeta.hod}</p>
              <p className="text-slate-500">{researchMeta.hodRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
