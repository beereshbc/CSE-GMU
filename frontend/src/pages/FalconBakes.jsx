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
  Grid: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
  List: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
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
  Users: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
  UserTie: ({ className = "w-4 h-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
  };
  return map[tag] || "bg-blue-500/10 text-blue-700 border-blue-200";
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ─── Main Component ────────────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */
const FalconBakes = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // "grid" | "list"
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const searchRef = useRef(null);

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
      p.creatorName?.toLowerCase().includes(q) ||
      p.developedBy?.toLowerCase().includes(q) ||
      p.facultyTeamMember?.name.toLowerCase().includes(q);
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
        {/* Ambient Glowing Blobs */}
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
              Project Gallery
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
            innovations cooked up by our engineering community.
          </p>

          {/* Premium Glass Search Bar */}
          <div className="w-full max-w-2xl group">
            <div className="flex items-center bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 gap-4 backdrop-blur-xl shadow-2xl focus-within:border-cyan-400/50 focus-within:bg-white/15 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all duration-300">
              <Icon.Search className="w-5 h-5 text-cyan-200 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, technologies, or creators..."
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-8 relative z-20">
        {/* Advanced Toolbar Box */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 sm:p-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-1.5 flex-wrap flex-1 px-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 
                  ${
                    activeTag === tag
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                      : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Mobile Filter Button */}
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

          {/* Controls: Count & View Toggle */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4 px-2">
            <div className="text-sm font-bold text-slate-400">
              <span className="text-slate-900">{filteredProjects.length}</span>{" "}
              projects
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                title="List View"
              >
                <Icon.List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                title="Grid View"
              >
                <Icon.Grid className="w-4 h-4" />
              </button>
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

        {/* ── LIST VIEW (Premium Thin Rows) ── */}
        {viewMode === "list" && filteredProjects.length > 0 && (
          <div className="flex flex-col gap-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-5 lg:p-6 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all duration-300 gap-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden animate-[fadeUp_0.4s_ease-out_both]"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Hover Gradient Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Left Side: Info & Metadata */}
                <div className="flex-1 min-w-0 flex flex-col justify-center pl-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-extrabold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="hidden sm:flex items-center gap-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${tagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 truncate w-full lg:max-w-3xl mb-3">
                    {project.description}
                  </p>

                  {/* Schema Metadata: List View Structure */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
                    {project.developedBy && (
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Icon.Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          <strong className="text-slate-700 font-semibold">
                            Team:
                          </strong>{" "}
                          {project.developedBy}
                        </span>
                      </div>
                    )}
                    {project.facultyTeamMember && (
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Icon.UserTie className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          <strong className="text-slate-700 font-semibold">
                            Faculty:
                          </strong>{" "}
                          {project.facultyTeamMember.name}
                        </span>
                      </div>
                    )}
                    {project.supportContacts?.length > 0 && (
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Icon.Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          <strong className="text-slate-700 font-semibold">
                            Support:
                          </strong>{" "}
                          {project.supportContacts.length} Contacts
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Creator & Links */}
                <div className="flex items-center justify-between w-full md:w-auto gap-8 shrink-0 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                  <div className="flex items-center gap-3 w-40">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center text-sm font-black text-slate-700 shrink-0 shadow-inner">
                      {project.creatorName.charAt(0)}
                    </div>
                    <span className="text-sm font-bold text-slate-700 truncate">
                      {project.creatorName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 bg-slate-50 p-1.5 rounded-xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all shadow-sm hover:shadow"
                      title="View Source Code"
                    >
                      <Icon.Github className="w-5 h-5" />
                    </a>
                    <div className="w-px h-6 bg-slate-200" />
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-all shadow-sm hover:shadow"
                      title="Open Live App"
                    >
                      <Icon.ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── GRID VIEW (Blog-Style Rich Cards) ── */}
        {viewMode === "grid" && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden animate-[fadeUp_0.4s_ease-out_both]"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Image Header with Glass Overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/1e293b/ffffff?text=Project";
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow relative">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Schema Metadata: Grid View Structure */}
                  <div className="flex flex-col gap-2.5 mb-6 pb-5 border-b border-slate-100 flex-grow">
                    {project.developedBy && (
                      <div className="flex items-start gap-2">
                        <Icon.Users className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <p className="text-[11px] text-slate-500 leading-tight">
                          <span className="font-bold text-slate-700">
                            Developed By:
                          </span>{" "}
                          {project.developedBy}
                        </p>
                      </div>
                    )}
                    {project.facultyTeamMember && (
                      <div className="flex items-start gap-2">
                        <Icon.UserTie className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <p className="text-[11px] text-slate-500 leading-tight">
                          <span className="font-bold text-slate-700">
                            Faculty:
                          </span>{" "}
                          {project.facultyTeamMember.name},{" "}
                          {project.facultyTeamMember.designation}{" "}
                          <span className="block opacity-80 mt-0.5">
                            {project.facultyTeamMember.department}
                          </span>
                        </p>
                      </div>
                    )}
                    {project.supportContacts?.length > 0 && (
                      <div className="flex items-start gap-2 mt-2">
                        <Icon.Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <div className="flex flex-col w-full">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                            Support Desk
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.supportContacts.map((contact, i) => (
                              <div
                                key={i}
                                className="bg-slate-50 border border-slate-200 rounded text-[10px] px-1.5 py-0.5 text-slate-600 font-medium whitespace-nowrap"
                              >
                                {contact.name}:{" "}
                                <span className="text-slate-500 font-mono">
                                  {contact.phone}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer Section */}
                  <div className="flex flex-col gap-4 mt-auto">
                    {/* Creator Info */}
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {project.creatorName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                          {project.creatorName}
                        </p>
                        <span className="text-[11px] font-semibold text-slate-400">
                          Creator
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-md hover:shadow-lg"
                      >
                        <Icon.ExternalLink className="w-3.5 h-3.5" /> Live App
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                      >
                        <Icon.Github className="w-3.5 h-3.5" /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

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
                  className={`px-4 py-3.5 rounded-xl text-sm font-bold border transition-all text-left flex justify-between items-center
                    ${
                      activeTag === tag
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
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
        
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FalconBakes;
