import React, { useState, useEffect } from "react";
import {
  facultyProfiles,
  fetchAuthorPublications,
  searchPublications,
  fetchAllFacultyPublicationsFromAPI,
} from "../config/serpapi";

const ResearchPublications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    q: "biology",
    hl: "en",
    start: 0,
    num: 10,
    as_sdt: "0",
    filter: "1",
    as_vis: "0",
    as_rr: "0",
    as_ylo: "",
    as_yhi: "",
  });
  const [searchResults, setSearchResults] = useState(null);
  const [activeTab, setActiveTab] = useState("faculty");
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState({
    current: 0,
    total: facultyProfiles.length,
  });

  // Fetch faculty publications on component mount
  useEffect(() => {
    fetchAllFacultyPublications();
  }, []);

  const fetchAllFacultyPublications = async () => {
    setLoading(true);
    setError(null);
    setProgress({ current: 0, total: facultyProfiles.length });

    try {
      // Use the new backend API
      const allPublications = await fetchAllFacultyPublicationsFromAPI();
      setPublications(allPublications);
      console.log(`Total publications loaded: ${allPublications.length}`);
    } catch (error) {
      console.error("Error fetching faculty publications:", error);
      setError("Failed to fetch publications. Please try again later.");
    } finally {
      setLoading(false);
      setProgress({ current: 0, total: facultyProfiles.length });
    }
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const paramsToSend = { ...searchParams };

      // Clean up empty parameters
      Object.keys(paramsToSend).forEach((key) => {
        if (paramsToSend[key] === "") {
          delete paramsToSend[key];
        }
      });

      // Convert year parameters to numbers if they exist
      if (paramsToSend.as_ylo)
        paramsToSend.as_ylo = parseInt(paramsToSend.as_ylo);
      if (paramsToSend.as_yhi)
        paramsToSend.as_yhi = parseInt(paramsToSend.as_yhi);
      if (paramsToSend.start) paramsToSend.start = parseInt(paramsToSend.start);
      if (paramsToSend.num) paramsToSend.num = parseInt(paramsToSend.num);

      const results = await searchPublications(paramsToSend.q, paramsToSend);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error);
      setError("Search failed. Please check your parameters and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleParamChange = (key, value) => {
    setSearchParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePagination = (start) => {
    setSearchParams((prev) => ({
      ...prev,
      start,
    }));
    setTimeout(() => handleSearch(), 100);
  };

  const formatCitationCount = (citedBy) => {
    if (!citedBy || !citedBy.total) return "0";
    return citedBy.total.toLocaleString();
  };

  const extractYearFromPublication = (pubInfo) => {
    if (!pubInfo || !pubInfo.summary) return "N/A";

    // Try to extract year from summary
    const yearMatch = pubInfo.summary.match(/\b(19|20)\d{2}\b/);
    return yearMatch ? yearMatch[0] : "N/A";
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const resetSearchParams = () => {
    setSearchParams({
      q: "biology",
      hl: "en",
      start: 0,
      num: 10,
      as_sdt: "0",
      filter: "1",
      as_vis: "0",
      as_rr: "0",
      as_ylo: "",
      as_yhi: "",
    });
  };

  const getScholarProfileUrl = (scholarId) => {
    return `https://scholar.google.com/citations?user=${scholarId}&hl=en`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Publications
          </h1>
          <p className="text-xl text-gray-600">
            Faculty Research Papers from Google Scholar
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-1 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("faculty")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "faculty"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Faculty Publications ({publications.length})
              </button>
              <button
                onClick={() => setActiveTab("search")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "search"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Advanced Search
              </button>
            </nav>
          </div>
        </div>

        {/* Faculty Publications Tab */}
        {activeTab === "faculty" && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Faculty Research Papers
              </h2>
              <div className="flex space-x-3 items-center">
                <span className="text-sm text-gray-500">
                  {facultyProfiles.length} faculty members
                </span>
                <button
                  onClick={fetchAllFacultyPublications}
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 flex items-center"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "Refresh Data"
                  )}
                </button>
              </div>
            </div>

            {loading && publications.length === 0 ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">
                  Loading faculty publications...
                </p>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Research Paper
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Faculty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Year
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Citations
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {publications.length > 0 ? (
                        publications.map((pub) => (
                          <tr key={pub.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="text-sm font-semibold text-gray-900">
                                {pub.title}
                              </div>
                              {pub.snippet && (
                                <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                                  {pub.snippet}
                                </div>
                              )}
                              {pub.publication_info?.summary && (
                                <div className="text-xs text-gray-400 mt-1">
                                  {pub.publication_info.summary}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900">
                                {pub.facultyName}
                              </div>
                              <div className="text-xs text-gray-400">
                                {pub.facultyEmail}
                              </div>
                              {pub.facultyScholarId && (
                                <a
                                  href={getScholarProfileUrl(
                                    pub.facultyScholarId
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:text-blue-800"
                                >
                                  View Scholar Profile
                                </a>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {extractYearFromPublication(pub.publication_info)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {pub.inline_links?.cited_by ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {formatCitationCount(
                                    pub.inline_links.cited_by
                                  )}{" "}
                                  citations
                                </span>
                              ) : (
                                <span className="text-sm text-gray-400">
                                  N/A
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex flex-col space-y-1">
                                {pub.link && (
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-900"
                                  >
                                    View Paper
                                  </a>
                                )}
                                {pub.inline_links?.cited_by?.link && (
                                  <a
                                    href={pub.inline_links.cited_by.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-900"
                                  >
                                    Cited By
                                  </a>
                                )}
                                {pub.inline_links?.versions?.link && (
                                  <a
                                    href={pub.inline_links.versions.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-900"
                                  >
                                    All Versions
                                  </a>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="px-6 py-8 text-center">
                            <div className="text-gray-500">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <h3 className="mt-2 text-sm font-medium text-gray-900">
                                No publications found
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Click "Refresh Data" to load faculty
                                publications from Google Scholar.
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Advanced Search Tab */}
        {activeTab === "search" && (
          <div>
            <div className="bg-white shadow sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Advanced Google Scholar Search
                </h3>

                <form onSubmit={handleSearch} className="space-y-6">
                  {/* Search Query */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Query (q) *
                    </label>
                    <input
                      type="text"
                      value={searchParams.q}
                      onChange={(e) => handleParamChange("q", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter search terms, author names, or keywords..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Localization */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language (hl)
                      </label>
                      <select
                        value={searchParams.hl}
                        onChange={(e) =>
                          handleParamChange("hl", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh-cn">Chinese</option>
                        <option value="ja">Japanese</option>
                      </select>
                    </div>

                    {/* Number of Results */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Results per page (num)
                      </label>
                      <select
                        value={searchParams.num}
                        onChange={(e) =>
                          handleParamChange("num", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Year Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Year (as_ylo)
                      </label>
                      <input
                        type="number"
                        value={searchParams.as_ylo}
                        onChange={(e) =>
                          handleParamChange("as_ylo", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`e.g., ${getCurrentYear() - 10}`}
                        min="1900"
                        max={getCurrentYear()}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Year (as_yhi)
                      </label>
                      <input
                        type="number"
                        value={searchParams.as_yhi}
                        onChange={(e) =>
                          handleParamChange("as_yhi", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`e.g., ${getCurrentYear()}`}
                        min="1900"
                        max={getCurrentYear()}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Search Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search Type (as_sdt)
                      </label>
                      <select
                        value={searchParams.as_sdt}
                        onChange={(e) =>
                          handleParamChange("as_sdt", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="0">Exclude patents</option>
                        <option value="7">Include patents</option>
                        <option value="4">Case law</option>
                      </select>
                    </div>

                    {/* Filters */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filter (filter)
                      </label>
                      <select
                        value={searchParams.filter}
                        onChange={(e) =>
                          handleParamChange("filter", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="1">Enable filters</option>
                        <option value="0">Disable filters</option>
                      </select>
                    </div>

                    {/* Include Citations */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Include Citations (as_vis)
                      </label>
                      <select
                        value={searchParams.as_vis}
                        onChange={(e) =>
                          handleParamChange("as_vis", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="0">Include citations</option>
                        <option value="1">Exclude citations</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={resetSearchParams}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      Reset to Default
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Searching...
                        </>
                      ) : (
                        "Search Publications"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Search Results */}
            {searchResults && (
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Search Results
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {searchResults.search_information?.total_results
                          ? `${searchResults.search_information.total_results.toLocaleString()} results found`
                          : "Results loaded"}
                      </p>
                    </div>
                    {searchResults.search_metadata?.google_scholar_url && (
                      <a
                        href={searchResults.search_metadata.google_scholar_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-500"
                      >
                        View on Google Scholar →
                      </a>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200">
                  {searchResults.organic_results?.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {searchResults.organic_results.map((result, index) => (
                        <div
                          key={result.result_id || index}
                          className="px-4 py-6 sm:px-6 hover:bg-gray-50"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                                <a
                                  href={result.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-blue-800 hover:underline"
                                >
                                  {result.title}
                                </a>
                              </h4>

                              {result.publication_info?.summary && (
                                <p className="text-sm text-gray-600 mb-2">
                                  {result.publication_info.summary}
                                </p>
                              )}

                              {result.snippet && (
                                <p className="text-sm text-gray-500 mb-3">
                                  {result.snippet}
                                </p>
                              )}

                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                {result.inline_links?.cited_by && (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {formatCitationCount(
                                      result.inline_links.cited_by
                                    )}{" "}
                                    citations
                                  </span>
                                )}

                                {result.resources &&
                                  result.resources.length > 0 && (
                                    <div className="flex space-x-2">
                                      {result.resources.map(
                                        (resource, resIndex) => (
                                          <a
                                            key={resIndex}
                                            href={resource.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 text-xs"
                                          >
                                            {resource.file_format}
                                          </a>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center text-gray-500">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No results found
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your search criteria or using different
                        keywords.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {searchResults.pagination &&
                  searchResults.organic_results &&
                  searchResults.organic_results.length > 0 && (
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">
                            Showing page{" "}
                            <span className="font-medium">
                              {searchParams.start / searchParams.num + 1}
                            </span>
                            {searchResults.search_information
                              ?.total_results && (
                              <span>
                                {" "}
                                of ~
                                {Math.ceil(
                                  searchResults.search_information
                                    .total_results / searchParams.num
                                )}
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() =>
                              handlePagination(
                                Math.max(
                                  0,
                                  searchParams.start - searchParams.num
                                )
                              )
                            }
                            disabled={searchParams.start === 0}
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              handlePagination(
                                searchParams.start + searchParams.num
                              )
                            }
                            disabled={
                              searchResults.organic_results.length <
                              searchParams.num
                            }
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        )}

        {/* Statistics Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Faculty
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {facultyProfiles.length}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Publications Loaded
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {publications.length}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Last Updated
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-900">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
