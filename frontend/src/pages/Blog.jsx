import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

/* ─── Utility ─────────────────────────────────────────────────────────────── */
const fmtDate = (d, opts = { month: "short", day: "numeric", year: "numeric" }) =>
  new Date(d).toLocaleDateString("en-US", opts);

const CATEGORIES = ["All", "Research", "Projects", "Campus", "Innovation", "Technical", "Events"];

/* ─── Share Helper ─────────────────────────────────────────────────────────── */
const sharePost = async (blog) => {
  const shareData = { title: blog.title, text: blog.subTitle || "", url: window.location.href };
  if (navigator.share) { try { await navigator.share(shareData); } catch (_) {} }
  else { try { await navigator.clipboard.writeText(window.location.href); } catch (_) {} }
};

/* ─── Icons ─────────────────────────────────────────────────────────────────── */
const Icon = {
  Search: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  Share: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Calendar: ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Close: ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Copy: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  Filter: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  ),
  ChevronDown: ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
};

/* ─── Category Colors ───────────────────────────────────────────────────────── */
const catColor = (cat = "") => {
  const map = {
    Research:   "bg-violet-100 text-violet-700 ring-violet-200",
    Projects:   "bg-emerald-100 text-emerald-700 ring-emerald-200",
    Campus:     "bg-amber-100 text-amber-700 ring-amber-200",
    Innovation: "bg-cyan-100 text-cyan-700 ring-cyan-200",
    Technical:  "bg-blue-100 text-blue-700 ring-blue-200",
    Events:     "bg-rose-100 text-rose-700 ring-rose-200",
  };
  return map[cat] || "bg-slate-100 text-slate-600 ring-slate-200";
};

/* ─── Skeleton Card ──────────────────────────────────────────────────────────── */
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
    <div className="h-44 sm:h-52 bg-gradient-to-br from-slate-200 to-slate-100" />
    <div className="p-4 sm:p-6 space-y-3">
      <div className="h-5 w-20 bg-slate-200 rounded-full" />
      <div className="h-6 w-full bg-slate-200 rounded-lg" />
      <div className="h-4 w-4/5 bg-slate-200 rounded" />
      <div className="h-4 w-3/5 bg-slate-200 rounded" />
      <div className="flex justify-between pt-2">
        <div className="h-4 w-24 bg-slate-200 rounded" />
        <div className="h-4 w-16 bg-slate-200 rounded" />
      </div>
    </div>
  </div>
);

/* ─── Blog Card ──────────────────────────────────────────────────────────────── */
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
    try { await navigator.clipboard.writeText(window.location.href + "#" + blog._id); } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm
                 hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-400
                 overflow-hidden cursor-pointer h-full select-none"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
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
          <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full ring-1 ${catColor(blog.category)}`}>
            {blog.category}
          </span>
        </div>
        {/* Action buttons — always visible on mobile, hover on desktop */}
        <div className="absolute top-3 right-3 z-20 flex gap-1.5 sm:gap-2
                        sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                        transition-all duration-300">
          <button
            onClick={handleShare}
            title="Share"
            className="bg-white/90 hover:bg-white active:bg-blue-50 text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors touch-manipulation"
          >
            {shared
              ? <span className="text-emerald-500 text-xs font-bold px-0.5">✓</span>
              : <Icon.Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
          <button
            onClick={handleCopy}
            title="Copy link"
            className="bg-white/90 hover:bg-white active:bg-blue-50 text-slate-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors touch-manipulation"
          >
            {copied
              ? <span className="text-emerald-500 text-xs font-bold px-0.5">✓</span>
              : <Icon.Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h2 className="text-base sm:text-xl font-extrabold text-slate-800 mb-2 line-clamp-2
                       group-hover:text-blue-700 transition-colors leading-snug tracking-tight">
          {blog.title}
        </h2>
        <p className="text-slate-500 line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
          {blog.subTitle}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 font-medium">
            <Icon.Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {fmtDate(blog.createdAt)}
          </span>
          <span className="flex items-center gap-1 text-blue-600 text-xs sm:text-sm font-bold group-hover:gap-2 transition-all">
            Read <Icon.ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
        </div>
      </div>
    </article>
  );
};

/* ─── Featured Card ──────────────────────────────────────────────────────────── */
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
      className="group relative col-span-1 sm:col-span-2 lg:col-span-3 bg-slate-900 rounded-2xl sm:rounded-3xl
                 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl active:scale-[0.99]
                 hover:-translate-y-1 transition-all duration-500
                 h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px]"
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
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex justify-between items-start z-10">
        <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full ring-1 ${catColor(blog.category)}`}>
          {blog.category}
        </span>
        <div className="flex gap-2 items-center">
          <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow">
            ✦ Featured
          </span>
          <button
            onClick={handleShare}
            className="bg-white/20 hover:bg-white/40 active:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors touch-manipulation"
          >
            {shared
              ? <span className="text-emerald-300 text-xs font-bold px-0.5">✓</span>
              : <Icon.Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 z-10">
        <p className="text-blue-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
          <Icon.Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          {fmtDate(blog.createdAt, { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-white leading-tight mb-2 sm:mb-4 tracking-tight line-clamp-2 group-hover:text-blue-200 transition-colors">
          {blog.title}
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm md:text-base line-clamp-2 max-w-2xl mb-4 sm:mb-6 hidden sm:block">
          {blog.subTitle}
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-900 font-extrabold
                           text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                           hover:bg-blue-600 hover:text-white active:scale-95
                           transition-all duration-200 shadow-lg touch-manipulation">
          Read Full Article <Icon.ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </article>
  );
};

/* ─── Mobile Filter Drawer ───────────────────────────────────────────────────── */
const FilterDrawer = ({ activeCategory, setActiveCategory, onClose }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setVisible(true)); }, []);

  const close = () => { setVisible(false); setTimeout(onClose, 280); };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end transition-all duration-280 ${visible ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"}`}
      onClick={close}
    >
      <div
        className={`w-full bg-white rounded-t-3xl shadow-2xl p-6 pb-10 transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-6" />
        <h3 className="text-base font-extrabold text-slate-800 mb-4">Filter by Category</h3>
        <div className="grid grid-cols-2 gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); close(); }}
              className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 touch-manipulation text-left
                ${activeCategory === cat
                  ? "bg-blue-700 text-white border-blue-700 shadow"
                  : "bg-slate-50 text-slate-700 border-slate-200 active:bg-blue-50"}`}
            >
              {cat}
              {activeCategory === cat && <span className="ml-2 text-blue-200">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Reading Modal ──────────────────────────────────────────────────────────── */
const ReadingModal = ({ blog, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [shared, setShared] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 60);
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  const close = () => { setVisible(false); setTimeout(onClose, 350); };

  const handleShare = async () => {
    await sharePost(blog);
    setShared(true);
    setTimeout(() => setShared(false), 2500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center
                  transition-all duration-350 ${visible ? "bg-slate-950/80 backdrop-blur-md" : "bg-transparent pointer-events-none"}`}
      onClick={close}
    >
      <div
        className={`relative bg-white w-full
                    rounded-t-3xl md:rounded-3xl
                    md:max-w-4xl
                    h-[94dvh] md:max-h-[92vh]
                    overflow-y-auto shadow-2xl flex flex-col
                    transition-all duration-350 ease-out
                    ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
        ref={scrollRef}
      >
        {/* Sticky mobile header that appears on scroll */}
        <div className={`sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100
                         flex items-center justify-between px-4 py-3 md:hidden
                         transition-all duration-300 ${scrolled ? "opacity-100 shadow-sm" : "opacity-0 pointer-events-none"}`}>
          <h3 className="text-sm font-extrabold text-slate-800 line-clamp-1 flex-1 mr-3">{blog.title}</h3>
          <button
            onClick={close}
            className="bg-slate-100 hover:bg-red-100 text-slate-600 p-2 rounded-full transition-colors touch-manipulation"
          >
            <Icon.Close className="w-4 h-4" />
          </button>
        </div>

        {/* Drag handle (mobile) */}
        <div className="md:hidden flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* Hero Image */}
        <div className="relative h-52 sm:h-72 md:h-[380px] shrink-0">
          <img
            src={blog.image}
            alt="cover"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://placehold.co/800x400/1e3a5f/ffffff?text=Article"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          {/* Controls */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/40 active:bg-white/50 text-white
                         px-3 py-2 rounded-full backdrop-blur-sm text-xs font-semibold transition-all touch-manipulation"
            >
              <Icon.Share className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{shared ? "Shared!" : "Share"}</span>
            </button>
            <button
              onClick={close}
              className="bg-black/40 hover:bg-red-600 active:bg-red-700 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors touch-manipulation"
              aria-label="Close"
            >
              <Icon.Close className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-10">
            <span className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full ring-1 mb-2 sm:mb-4 ${catColor(blog.category)}`}>
              {blog.category}
            </span>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight line-clamp-3">
              {blog.title}
            </h1>
            <p className="text-slate-300 mt-2 sm:mt-3 text-xs sm:text-sm flex items-center gap-2">
              <Icon.Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {fmtDate(blog.createdAt, { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-8 md:px-16 md:py-12 bg-white flex-1">
          {blog.subTitle && (
            <div className="mb-6 sm:mb-10 p-4 sm:p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl sm:rounded-r-2xl">
              <p className="text-base sm:text-xl text-blue-900 font-semibold italic leading-relaxed">
                "{blog.subTitle}"
              </p>
            </div>
          )}
          <div
            className="prose prose-sm sm:prose-lg md:prose-xl prose-slate max-w-none
                       prose-headings:font-extrabold prose-headings:text-slate-900 prose-headings:tracking-tight
                       prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:text-blue-800
                       prose-img:rounded-xl sm:prose-img:rounded-2xl prose-img:shadow-md
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500
                       prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-xl
                       prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 md:px-16 border-t border-slate-100 bg-slate-50
                        rounded-b-none md:rounded-b-3xl
                        flex flex-wrap gap-3 items-center justify-between">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white
                       font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow touch-manipulation"
          >
            <Icon.Share className="w-3.5 h-3.5" />
            {shared ? "Shared!" : "Share Article"}
          </button>
          <button
            onClick={close}
            className="text-slate-500 hover:text-blue-700 font-semibold text-sm transition-colors touch-manipulation"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ─── Main Blog Component ───────────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const searchRef = useRef(null);
  const { axios } = useAppContext();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

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

  /* Filter */
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
  const hasFilters = search || activeCategory !== "All";

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#f8fafc" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header className="relative bg-gradient-to-br from-[#0f2044] via-[#1a3a6e] to-[#0e4d92] overflow-hidden">
        {/* Decorative */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-blue-500/20 blur-[80px] sm:blur-[100px]" />
          <div className="absolute -bottom-16 -right-16 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full bg-cyan-500/15 blur-[60px] sm:blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotgrid)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-800/40 backdrop-blur-sm text-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
            Knowledge Base · CSE @ GM University
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mb-3 sm:mb-4">
            Exploring Ideas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200">
              Beyond the Classroom
            </span>
          </h1>

          <p className="text-blue-200 text-sm sm:text-lg max-w-xl sm:max-w-2xl leading-relaxed mb-8 sm:mb-10 px-2">
            Student projects, technical articles, campus updates, and innovation stories.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-xl px-0 sm:px-0">
            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 gap-2 sm:gap-3 shadow-lg focus-within:bg-white/20 focus-within:border-blue-400/60 transition-all">
              <Icon.Search className="w-4 h-4 text-blue-300 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles, topics, keywords…"
                className="flex-1 bg-transparent text-white placeholder-blue-300 text-sm outline-none font-medium min-w-0"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-blue-300 hover:text-white transition-colors shrink-0 touch-manipulation p-1">
                  <Icon.Close className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 w-full leading-[0] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-8 sm:h-12 md:h-16">
            <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#f8fafc"/>
          </svg>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pb-16 sm:pb-20 pt-4 sm:pt-6">

        {/* ── Toolbar: Category tabs (desktop) + Filter btn (mobile) ─── */}
        <div className="flex items-center justify-between gap-3 mb-5 sm:mb-8">
          {/* Desktop tabs */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 touch-manipulation
                  ${activeCategory === cat
                    ? "bg-blue-700 text-white border-blue-700 shadow"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-700"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile: active pill + filter button */}
          <div className="flex sm:hidden items-center gap-2 flex-1">
            <button
              onClick={() => setShowFilterDrawer(true)}
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-4 py-2 rounded-full shadow-sm touch-manipulation active:bg-slate-50"
            >
              <Icon.Filter className="w-3.5 h-3.5" />
              Filter
              {activeCategory !== "All" && (
                <span className="bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">1</span>
              )}
            </button>
            {activeCategory !== "All" && (
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ring-1 ${catColor(activeCategory)}`}>
                {activeCategory}
              </span>
            )}
          </div>

          {/* Article count + clear */}
          {!loading && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 shrink-0">
              <span className="font-semibold text-slate-700">{filtered.length}</span>
              <span className="hidden xs:inline">article{filtered.length !== 1 ? "s" : ""}</span>
              {hasFilters && (
                <button onClick={clearFilters} className="text-blue-600 font-semibold underline underline-offset-2 touch-manipulation">
                  Clear
                </button>
              )}
            </div>
          )}
        </div>

        {/* Active search tag (mobile friendly) */}
        {search && !loading && (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 flex-wrap">
            <span>Results for</span>
            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
              "{search}"
              <button onClick={() => setSearch("")} className="hover:text-blue-900 touch-manipulation ml-0.5">
                <Icon.Close className="w-3.5 h-3.5" />
              </button>
            </span>
          </div>
        )}

        {/* ── Loading ──────────────────────────────────────────────── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* ── Empty ────────────────────────────────────────────────── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 sm:py-24 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm mt-4 px-4">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">🔍</div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm sm:text-base mb-6">
              {search ? `Nothing matches "${search}"` : "No posts in this category yet."}
            </p>
            <button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow touch-manipulation">
              Clear Filters
            </button>
          </div>
        )}

        {/* ── Blog Grid ────────────────────────────────────────────── */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featured && (
              <FeaturedCard blog={featured} onClick={() => setSelectedBlog(featured)} />
            )}
            {rest.map((blog, i) => (
              <BlogCard key={blog._id} blog={blog} onClick={() => setSelectedBlog(blog)} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* ── Mobile Filter Drawer ──────────────────────────────────── */}
      {showFilterDrawer && (
        <FilterDrawer
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onClose={() => setShowFilterDrawer(false)}
        />
      )}

      {/* ── Reading Modal ─────────────────────────────────────────── */}
      {selectedBlog && (
        <ReadingModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }
        .animate-pulse { animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        input::placeholder { color: rgb(147 197 253); }
        /* Smooth momentum scroll on iOS */
        .overflow-y-auto { -webkit-overflow-scrolling: touch; }
        /* Prevent text-size adjust on mobile rotation */
        html { -webkit-text-size-adjust: 100%; }
        /* Safe area padding for notched phones */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .pb-10 { padding-bottom: calc(2.5rem + env(safe-area-inset-bottom)); }
        }
      `}</style>
    </div>
  );
};

export default Blog;
