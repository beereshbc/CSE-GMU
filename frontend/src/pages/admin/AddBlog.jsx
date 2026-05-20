import React, { useState, useEffect, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { useAppContext } from "../../context/AppContext";

const AddBlog = () => {
  // Extract axios from AppContext
  const { axios } = useAppContext();

  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    category: "Technology",
    isPublished: true,
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showListModal, setShowListModal] = useState(false);

  const editor = useRef(null);

  // Memoize Jodit configuration to prevent re-renders and fix copy-paste issues
  const editorConfig = useMemo(
    () => ({
      height: 400,
      theme: "default",
      placeholder: "Start writing your amazing blog...",
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: "insert_as_html",
      // These ensure the editor accepts pasted formatting properly
      disablePlugins: "cleanHTML",
    }),
    [],
  );

  // Fetch blogs on load
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/main/getAllBlogs");
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [axios]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for Jodit Editor (Using onChange for better paste capture)
  const handleEditorChange = (newContent) => {
    setFormData((prev) => ({ ...prev, description: newContent }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    setLoading(true);
    try {
      const submitData = new FormData();
      submitData.append("image", image);
      submitData.append(
        "blog",
        JSON.stringify({
          title: formData.title,
          subTitle: formData.subTitle,
          description: formData.description,
          category: formData.category,
          isPublished: formData.isPublished,
        }),
      );

      const { data } = await axios.post("/api/main/addBlog", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        alert("Blog Added Successfully!");
        setFormData({
          title: "",
          subTitle: "",
          description: "",
          category: "Technology",
          isPublished: true,
        });
        setImage(null);
        setImagePreview(null);
        fetchBlogs();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const { data } = await axios.post("/api/main/deleteBlogById", { id });
      if (data.success) {
        fetchBlogs();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Top Header & Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Blog Studio
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Create and manage your articles
            </p>
          </div>
          <button
            onClick={() => setShowListModal(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2.5 px-5 rounded-xl transition duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-sm md:text-base">Manage Blogs</span>
          </button>
        </div>

        {/* Main Full-Page Form */}
        <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">
            Create a New Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm md:text-base text-slate-700 font-semibold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-slate-50 hover:bg-white focus:bg-white"
                    placeholder="Enter an engaging title"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-slate-700 font-semibold mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subTitle"
                    value={formData.subTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-slate-50 hover:bg-white focus:bg-white"
                    placeholder="A catchy brief summary"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-slate-700 font-semibold mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-slate-50 hover:bg-white focus:bg-white cursor-pointer"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Web3">Web3</option>
                    <option value="AI">AI</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </select>
                </div>
              </div>

              {/* Cover Image & Preview */}
              <div className="flex flex-col h-full min-h-[200px] lg:min-h-0">
                <label className="block text-sm md:text-base text-slate-700 font-semibold mb-2">
                  Cover Image
                </label>
                <div className="flex-1 border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-xl flex flex-col items-center justify-center p-4 bg-slate-50 relative overflow-hidden group transition-colors">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  ) : (
                    <div className="text-center z-10 text-slate-400 mb-2">
                      <svg
                        className="mx-auto h-10 w-10 md:h-12 md:w-12 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        />
                      </svg>
                      <p className="text-sm font-medium">
                        Click or drag image to upload
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!image}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />

                  {/* Overlay for changing image */}
                  {imagePreview && (
                    <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <span className="text-white text-sm md:text-base font-semibold px-4 py-2 bg-blue-600 rounded-lg shadow-lg">
                        Change Image
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Rich Text Editor */}
            <div>
              <label className="block text-sm md:text-base text-slate-700 font-semibold mb-2">
                Content Editor
              </label>
              <div className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden">
                <JoditEditor
                  ref={editor}
                  value={formData.description}
                  config={editorConfig}
                  onBlur={handleEditorChange} // Save on blur
                  onChange={(newContent) => handleEditorChange(newContent)} // Also save on change to catch pastes
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg py-3.5 md:py-4 px-4 rounded-xl transition duration-300 shadow-md disabled:bg-blue-300 disabled:cursor-not-allowed transform active:scale-[0.99]"
            >
              {loading ? "Publishing Post..." : "Publish Blog Post"}
            </button>
          </form>
        </div>
      </div>

      {/* Blog List Modal Overlay */}
      {showListModal && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm transition-opacity">
          {/* Dismiss area for mobile */}
          <div
            className="absolute inset-0 z-0"
            onClick={() => setShowListModal(false)}
          ></div>

          <div className="bg-white w-full sm:w-[400px] md:w-[450px] h-full shadow-2xl flex flex-col z-10 animate-slideInRight">
            {/* Modal Header */}
            <div className="p-5 md:p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                Manage Posts
              </h2>
              <button
                onClick={() => setShowListModal(false)}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition"
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal List Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 sm:space-y-4">
              {blogs.length === 0 ? (
                <div className="text-center text-slate-400 mt-20 flex flex-col items-center">
                  <svg
                    className="w-16 h-16 mb-4 opacity-30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.586-4.586A2 2 0 0015.414 3H15m4 17h-4"
                    />
                  </svg>
                  <p className="text-base text-slate-500">
                    No blogs published yet.
                  </p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center bg-white border border-slate-200 p-3 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={blog.image}
                      alt="cover"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-slate-100 mr-3 sm:mr-4 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-800 text-sm md:text-base truncate">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-blue-600 font-semibold mt-0.5 uppercase tracking-wide">
                        {blog.category}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="ml-2 sm:ml-3 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white p-2 sm:p-2.5 rounded-lg transition duration-200 shrink-0"
                      title="Delete Post"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `,
        }}
      />
    </div>
  );
};

export default AddBlog;
