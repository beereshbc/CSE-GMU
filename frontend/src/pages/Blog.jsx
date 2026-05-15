import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const { axios } = useAppContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/api/main/getAllBlogs");
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [axios]);

  const closeInspector = () => setSelectedBlog(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedBlog]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-4 border border-blue-400/30 px-4 py-1 rounded-full bg-blue-800/50 backdrop-blur-sm">
            Knowledge Base
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Exploring Ideas Beyond the Classroom{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Voices of CSE GM Gems
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            Discover student projects, technical articles, campus updates, and
            innovation stories from the CSE community.
          </p>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(134%+1.3px)] h-[50px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,126.38,201.27,118.17,242.89,113.39,283.54,82.73,321.39,56.44Z"
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-8 md:-mt-12">
        {loading ? (
          // Loading Skeleton Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 animate-pulse"
              >
                <div className="w-full h-48 bg-slate-200 rounded-xl mb-4"></div>
                <div className="w-24 h-6 bg-slate-200 rounded-full mb-3"></div>
                <div className="w-full h-6 bg-slate-200 rounded mb-2"></div>
                <div className="w-2/3 h-6 bg-slate-200 rounded mb-4"></div>
                <div className="w-full h-4 bg-slate-200 rounded mb-2"></div>
                <div className="w-4/5 h-4 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          // Empty State
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100 mt-10">
            <svg
              className="mx-auto h-24 w-24 text-slate-300 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.586-4.586A2 2 0 0015.414 3H15m4 17h-4"
              />
            </svg>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">
              No Insights Yet
            </h3>
            <p className="text-slate-500">
              We are brewing some amazing content. Check back soon!
            </p>
          </div>
        ) : (
          // Blog Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-10">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                onClick={() => setSelectedBlog(blog)}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden cursor-pointer h-full"
              >
                {/* Card Image Container */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-slate-500 line-clamp-3 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {blog.subTitle}
                  </p>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read Article
                      <svg
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inspected Pop-up Modal (Reading View) */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/70 opacity-100 transition-opacity">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col animate-[fadeInUp_0.3s_ease-out]">
            {/* Floating Close Button */}
            <button
              onClick={closeInspector}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/40 hover:bg-red-500 text-white p-2.5 rounded-full backdrop-blur-md transition-colors z-20 shadow-lg"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Hero Image */}
            <div className="w-full h-64 sm:h-80 md:h-[400px] relative shrink-0">
              <img
                src={selectedBlog.image}
                alt="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
                  {selectedBlog.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  {selectedBlog.title}
                </h1>
                <p className="text-slate-300 mt-4 font-medium text-sm sm:text-base flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Published on{" "}
                  {new Date(selectedBlog.createdAt).toLocaleDateString(
                    "en-US",
                    { month: "long", day: "numeric", year: "numeric" },
                  )}
                </p>
              </div>
            </div>

            {/* Modal Body / Article Content */}
            <div className="p-6 sm:p-10 md:px-16 md:py-12 bg-white">
              {selectedBlog.subTitle && (
                <div className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                  <h3 className="text-xl sm:text-2xl text-blue-900 font-medium italic leading-relaxed">
                    "{selectedBlog.subTitle}"
                  </h3>
                </div>
              )}

              {/* Render Rich Text from Jodit */}
              {/* Note: Ensure @tailwindcss/typography plugin is installed to use 'prose' classes effectively */}
              <div
                className="prose prose-lg sm:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:text-blue-800 prose-img:rounded-2xl prose-img:shadow-md prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 sm:px-10 border-t border-slate-100 bg-slate-50 flex justify-between items-center rounded-b-3xl">
              <span className="text-slate-500 text-sm font-medium">
                End of article
              </span>
              <button
                onClick={closeInspector}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center"
              >
                Back to Blogs{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Styles for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `,
        }}
      />
    </div>
  );
};

export default Blog;
