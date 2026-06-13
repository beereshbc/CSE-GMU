import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAppContext } from "../context/AppContext";

/* ─── Utility ─────────────────────────────────────────────────────────────── */
const fmtDate = (d, opts = { month: "short", day: "numeric", year: "numeric" }) =>
  new Date(d).toLocaleDateString("en-US", opts);

const CATEGORIES = ["All", "Research", "Projects", "Campus", "Innovation", "Technical", "Events"];

/* ─── Share Helper ─────────────────────────────────────────────────────────── */
const sharePost = async (blog) => {
  const shareData = {
    title: blog.title,
    text: blog.subTitle || "",
    url: window.location.href,
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (_) {}
  } else {
    await navigator.clipboard.writeText(window.location.href);
  }
};

/* ─── Icons ────────────────────────────────────────────────────────────────── */
const Icon = {
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  Share: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25h6.375l4.252 5.623L18.244 2.25z"/>
    </svg>
  ),
  Bookmark: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Copy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
};

/* ─── Category Pill Colors ─────────────────────────────────────────────────── */
const catColor = (cat = "") => {
  const map = {
    Research: "bg-violet-100 text-violet-700 ring-violet-200",
    Projects: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    Campus: "bg-amber-100 text-amber-700 ring-amber-200",
    Innovation: "bg-cyan-100 text-cyan-700 ring-cyan-200",
    Technical: "bg-blue-100 text-blue-700 ring-blue-200",
    Events: "bg-rose-100 text-rose-700 ring-rose-200",
  };
  return map[cat] || "bg-slate-100 text-slate-600 ring-slate-200";
};

/* ─── Skeleton Card ────────────────────────────────────────────────────────── */
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
    <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-100" />
    <div className="p-6 space-y-3">
      <div className="h-5 w-20 bg-slate-200 rounded-full" />
      <div className="h-7 w-full bg-slate-200 rounded-lg" />
      <div className="h-5 w-4/5 bg-slate-200 rounded" />
      <div className="h-4 w-3/5 bg-slate-200 rounded" />
      <div className="flex justify-between pt-3">
        <div className="h-4 w-24 bg-slate-200 rounded" />
        <div className="h-4 w-20 bg-slate-200 rounded" />
      </div>
    </div>
  </div>
);

/* ─── Blog Card ────────────────────────────────────────────────────────────── */
const BlogCard = ({ blog, onClick, index }) => {
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    await sharePost(blog);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleCopy = async (e) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(window.location.href + "#" + blog._id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm
                 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden
                 cursor-pointer h-full"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 group-hover:from-black/10 transition-all duration-500" />
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={(e) => { e.target.src = "https://placehold.co/600x300/1e3a5f/ffffff?text=CSE+Blog"; }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ring-1 ${catColor(blog.category)}`}>
            {blog.category}
          </span>
        </div>
        {/* Action buttons */}
        <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleShare}
            title="Share"
            className="bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors"
          >
            {shared ? <span className="text-emerald-500 text-xs font-bold px-0.5">✓</span> : <Icon.Share />}
          </button>
          <button
            onClick={handleCopy}
            title="Copy link"
            className="bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors"
          >
            {copied ? <span className="text-emerald-500 text-xs font-bold px-0.5">✓</span> : <Icon.Copy />}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-extrabold text-slate-800 mb-2.5 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug tracking-tight">
          {blog.title}
        </h2>
        <p className="text-slate-500 line-clamp-3 text-sm leading-relaxed mb-5 flex-1">
          {blog.subTitle}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Icon.Calendar />
            {fmtDate(blog.createdAt)}
          </span>
          <span className="flex items-center gap-1.5 text-blue-600 text-sm font-bold group-hover:gap-2.5 transition-all">
            Read <Icon.ArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
};

/* ─── Featured Card (first blog, large) ───────────────────────────────────── */
const FeaturedCard = ({ blog, onClick }) => {
  const [shared, setShared] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    await sharePost(blog);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <article
      onClick={onClick}
      className="group relative col-span-1 md:col-span-2 lg:col-span-3 bg-slate-900 rounded-3xl
                 overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-500 h-[480px] md:h-[520px]"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
        onError={(e) => { e.target.src = "https://placehold.co/1200x520/1e3a5f/ffffff?text=Featured+Post"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

      {/* Top bar */}
      <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ring-1 ${catColor(blog.category)}`}>
          {blog.category}
        </span>
        <div className="flex gap-2">
          <span className="bg-blue-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
            ✦ Featured
          </span>
          <button
            onClick={handleShare}
            className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            {shared ? <span className="text-emerald-300 text-xs font-bold px-0.5">✓</span> : <Icon.Share />}
          </button>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
        <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
          <Icon.Calendar />{fmtDate(blog.createdAt, { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight line-clamp-2 group-hover:text-blue-200 transition-colors">
          {blog.title}
        </h2>
        <p className="text-slate-300 text-sm md:text-base line-clamp-2 max-w-2xl mb-6">
          {blog.subTitle}
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-900 font-extrabold text-sm px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
          Read Full Article <Icon.ArrowRight />
        </button>
      </div>
    </article>
  );
};

/* ─── Reading Modal ────────────────────────────────────────────────────────── */
const ReadingModal = ({ blog, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [shared, setShared] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleShare = async () => {
    await sharePost(blog);
    setShared(true);
    setTimeout(() => setShared(false), 2500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6
                  transition-all duration-350 ${visible ? "bg-slate-950/80 backdrop-blur-md" : "bg-transparent"}`}
      onClick={close}
    >
      <div
        className={`relative bg-white w-full md:rounded-3xl md:max-w-4xl max-h-[96dvh]
                    overflow-y-auto shadow-2xl flex flex-col
                    transition-all duration-350 ease-out
                    ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
        ref={scrollRef}
      >
        {/* Hero */}
        <div className="relative h-60 sm:h-80 md:h-[400px] shrink-0">
          <img
            src={blog.image}
            alt="cover"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://placehold.co/800x400/1e3a5f/ffffff?text=Article"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-full backdrop-blur-sm text-xs font-semibold transition-all"
            >
              <Icon.Share />
              {shared ? "Shared!" : "Share"}
            </button>
            <button
              onClick={close}
              className="bg-black/40 hover:bg-red-600 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <Icon.Close />
            </button>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ring-1 mb-4 ${catColor(blog.category)}`}>
              {blog.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {blog.title}
            </h1>
            <p className="text-slate-300 mt-3 text-sm flex items-center gap-2">
              <Icon.Calendar />
              {fmtDate(blog.createdAt, { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-10 md:px-16 md:py-12 bg-white flex-1">
          {blog.subTitle && (
            <div className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
              <p className="text-lg md:text-xl text-blue-900 font-semibold italic leading-relaxed">
                "{blog.subTitle}"
              </p>
            </div>
          )}
          <div
            className="prose prose-lg sm:prose-xl prose-slate max-w-none
                       prose-headings:font-extrabold prose-headings:text-slate-900 prose-headings:tracking-tight
                       prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:text-blue-800
                       prose-img:rounded-2xl prose-img:shadow-lg
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500
                       prose-blockquote:bg-blue-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                       prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>

        {/* Footer */}
        <div className="p-6 md:px-16 border-t border-slate-100 bg-slate-50 rounded-b-3xl flex flex-wrap gap-4 items-center justify-between">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow"
          >
            <Icon.Share />
            {shared ? "Copied & Shared!" : "Share this Article"}
          </button>
          <button
            onClick={close}
            className="text-slate-500 hover:text-blue-700 font-semibold text-sm transition-colors flex items-center gap-1"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ─── Main Blog Component ──────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const { axios } = useAppContext();

  /* Scroll to top on mount */
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  /* Fetch */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/api/main/getAllBlogs");
        if (data.success) setBlogs(data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [axios]);

  /* Focus search input when opened */
  useEffect(() => {
    if (showSearch) setTimeout(() => searchRef.current?.focus(), 150);
  }, [showSearch]);

  /* Filter logic */
  const filtered = blogs.filter((b) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      b.title?.toLowerCase().includes(q) ||
      b.subTitle?.toLowerCase().includes(q) ||
      b.category?.toLowerCase().includes(q) ||
      b.description?.toLowerCase().includes(q);
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const clearFilters = () => { setSearch(""); setActiveCategory("All"); };

  return (
    <div className="min-h-screen font-sans" style={{ background: "#f8fafc" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="relative bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0e4d92] overflow-hidden">
        {/* Decorative blobs */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-blue-400/10 blur-[60px] rotate-12" />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotgrid)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-800/40 backdrop-blur-sm text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-inner">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Knowledge Base · CSE @ GM University
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mb-4">
            Exploring Ideas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200">
              Beyond the Classroom
            </span>
          </h1>

          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-10">
            Student projects, technical articles, campus updates, and innovation
            stories from the CSE community.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-xl relative">
            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 gap-3 shadow-lg focus-within:bg-white/20 focus-within:border-blue-400/60 transition-all">
              <Icon.Search />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, category, keyword…"
                className="flex-1 bg-transparent text-white placeholder-blue-300 text-sm outline-none font-medium"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-blue-300 hover:text-white transition-colors">
                  <Icon.Close />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 w-full leading-[0] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-10 md:h-16">
            <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#f8fafc"/>
          </svg>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-6">

        {/* Category Tabs + Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200
                  ${activeCategory === cat
                    ? "bg-blue-700 text-white border-blue-700 shadow"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-700"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          {!loading && (
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
              {(search || activeCategory !== "All") && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Loading ─────────────────────────────────────────────────────── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* ── No Results ──────────────────────────────────────────────────── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm mt-4">
            <div className="text-6xl mb-5">🔍</div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">No articles found</h3>
            <p className="text-slate-500 mb-6">
              {search ? `Nothing matches "${search}"` : "No posts in this category yet."}
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ── Blog Grid ───────────────────────────────────────────────────── */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured – spans full width */}
            {featured && (
              <FeaturedCard blog={featured} onClick={() => setSelectedBlog(featured)} />
            )}
            {/* Rest of cards */}
            {rest.map((blog, i) => (
              <BlogCard key={blog._id} blog={blog} onClick={() => setSelectedBlog(blog)} index={i} />
            ))}
          </div>
        )}

        {/* Active search tag */}
        {search && !loading && (
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <span>Showing results for</span>
            <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
              {search}
              <button onClick={() => setSearch("")} className="hover:text-blue-900">
                <Icon.Close />
              </button>
            </span>
          </div>
        )}
      </main>

      {/* ── Reading Modal ─────────────────────────────────────────────────── */}
      {selectedBlog && (
        <ReadingModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        * { -webkit-font-smoothing: antialiased; }
        .animate-pulse { animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>
    </div>
  );
};

export default Blog;
