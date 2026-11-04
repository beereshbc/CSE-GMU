// frontend/src/pages/FalconBakes.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { falconBakesProjects } from "../assets/assets";

/* ─── Premium Icons ─────────────────────────────────────────────────────────── */
const Icon = {
  Search: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Close: ({ className = "w-5 h-5" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Filter: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  Github: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  ),
  Phone: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
};

/* ─── Dynamic Tag Colors ────────────────────────────────────────────────────── */
const tagColor = (tag = "") => {
  const map = {
    Web3: "bg-violet-500/10 text-violet-700 border-violet-200",
    React: "bg-cyan-500/10 text-cyan-700 border-cyan-200",
    AI: "bg-rose-500/10 text-rose-700 border-rose-200",
    Blockchain: "bg-amber-500/10 text-amber-700 border-amber-200",
    MERN: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    Node: "bg-green-500/10 text-green-700 border-green-200",
    Education: "bg-blue-500/10 text-blue-700 border-blue-200",
    Automation: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
    Management: "bg-orange-500/10 text-orange-700 border-orange-200",
  };
  return map[tag] || "bg-slate-500/10 text-slate-700 border-slate-200";
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ─── Main Component ────────────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */
const FalconBakes = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Controls the Inspect Box Modal
  const searchRef = useRef(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const allTags = useMemo(() => {
    const tagsSet = new Set();
    falconBakesProjects.forEach((p) =>
      p.tags?.forEach((tag) => tagsSet.add(tag)),
    );
    return ["All", ...Array.from(tagsSet)];
  }, []);

  const filteredProjects = falconBakesProjects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.creatorName?.toLowerCase().includes(q);
    const matchTag = activeTag === "All" || p.tags?.includes(activeTag);
    return matchSearch && matchTag;
  });

  const clearFilters = () => {
    setSearch("");
    setActiveTag("All");
  };

  return (
    <div
      className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Hero Section (Blog-Style Glassmorphism) ──────────────────────── */}
      <header className="relative bg-[#0a1128] overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-white/10">
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-50">
              Project Directory
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Falcon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Bakes
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-2xl leading-relaxed mb-10 font-medium">
            Explore the cutting-edge tools, web applications, and technical
            innovations engineered by the Department of CSE.
          </p>

          <div className="w-full max-w-2xl group">
            <div className="flex items-center bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 gap-4 backdrop-blur-xl shadow-2xl focus-within:border-cyan-400/50 focus-within:bg-white/15 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all duration-300">
              <Icon.Search className="w-5 h-5 text-cyan-200 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or faculty members..."
                className="flex-1 bg-transparent text-white placeholder-slate-400 text-base md:text-lg outline-none font-medium min-w-0"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                >
                  <Icon.Close className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-8 relative z-20">
        {/* Advanced Toolbar Box */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 sm:p-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-1.5 flex-wrap flex-1 px-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 
                  ${activeTag === tag ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105" : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex lg:hidden w-full sm:w-auto">
            <button
              onClick={() => setShowFilterDrawer(true)}
              className="flex-1 flex justify-center items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-4 py-3 rounded-xl active:bg-slate-100"
            >
              <Icon.Filter className="w-4 h-4" /> Filter Stack
              {activeTag !== "All" && (
                <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                  {activeTag}
                </span>
              )}
            </button>
          </div>

          <div className="w-px h-8 bg-slate-200 hidden sm:block mx-2" />

          <div className="flex items-center justify-between w-full sm:w-auto px-2">
            <div className="text-sm font-bold text-slate-400">
              <span className="text-slate-900">{filteredProjects.length}</span>{" "}
              results found
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 border border-slate-100">
              <Icon.Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              No projects found
            </h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              We couldn't find any projects matching "{search}" in the{" "}
              {activeTag} category.
            </p>
            <button
              onClick={clearFilters}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full text-sm transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* ── ROW LINE VIEW (Clickable Rows) ── */}
        <div className="flex flex-col gap-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/5 rounded-2xl transition-all duration-300 gap-4 overflow-hidden animate-[fadeUp_0.4s_ease-out_both]"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Left Side: Title & Description Snippet */}
              <div className="flex-1 min-w-0 flex flex-col pr-4">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 truncate">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 truncate w-full max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Right Side: Tags, Creator, and Arrow */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-6 shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                <div className="hidden md:flex items-center gap-2">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${tagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600 truncate max-w-[120px] sm:max-w-[180px]">
                    {project.creatorName}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Icon.ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Detailed Inspect Box (Modal) ──────────────────────────────────── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedProject(null)} // Click outside to close
        >
          <div
            className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-[scaleUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            {/* Header Image Area */}
            <div className="relative h-48 sm:h-64 shrink-0 bg-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x400/1e293b/ffffff?text=Project";
                }}
              />

              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-all"
              >
                <Icon.Close className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Content Body Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column: Description & Contacts */}
                <div className="flex-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Project Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  {selectedProject.supportContacts?.length > 0 && (
                    <>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                        <Icon.Phone className="w-4 h-4" /> Support Desk
                      </h4>
                      <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        {selectedProject.supportContacts.map((contact, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="font-semibold text-slate-700">
                              {contact.name}
                            </span>
                            <span className="text-slate-500 font-mono bg-white px-2 py-1 rounded border border-slate-200">
                              {contact.phone}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Right Column: Meta Info & Links */}
                <div className="w-full md:w-64 shrink-0 flex flex-col gap-6">
                  {/* Creator Info */}
                  <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                      Led By
                    </span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {selectedProject.creatorName}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedProject.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${selectedProject.liveLink ? "bg-slate-900 hover:bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
                      onClick={(e) =>
                        !selectedProject.liveLink && e.preventDefault()
                      }
                    >
                      <Icon.ExternalLink className="w-4 h-4" />
                      {selectedProject.liveLink
                        ? "Open Live App"
                        : "App Not Available"}
                    </a>

                    <a
                      href={selectedProject.sourceCode || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border transition-all ${selectedProject.sourceCode ? "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm" : "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"}`}
                      onClick={(e) =>
                        !selectedProject.sourceCode && e.preventDefault()
                      }
                    >
                      <Icon.Github className="w-4 h-4" />
                      {selectedProject.sourceCode
                        ? "View Source Code"
                        : "Source Private"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Filter Drawer ──────────────────────────────────────────── */}
      {showFilterDrawer && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-slate-900/40 backdrop-blur-sm transition-all"
          onClick={() => setShowFilterDrawer(false)}
        >
          <div
            className="w-full bg-white rounded-t-3xl p-6 pb-12 shadow-2xl animate-[slideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-slate-900">
                Filter by Technology
              </h3>
              <button
                onClick={() => setShowFilterDrawer(false)}
                className="p-2 bg-slate-50 text-slate-500 rounded-full hover:bg-slate-100"
              >
                <Icon.Close className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setActiveTag(tag);
                    setShowFilterDrawer(false);
                  }}
                  className={`px-4 py-3.5 rounded-xl text-sm font-bold border transition-all text-left flex justify-between items-center ${activeTag === tag ? "bg-slate-900 text-white border-slate-900 shadow-md" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
                >
                  {tag}
                  {activeTag === tag && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Global Styles & Animations ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FalconBakes;
