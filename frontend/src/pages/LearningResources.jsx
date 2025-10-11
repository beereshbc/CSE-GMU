import React, { useState, useEffect } from "react";

const LearningResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "All Resources", count: 0 },
    { id: "programming", name: "Programming Basics", count: 8 },
    { id: "dsa", name: "Data Structures & Algorithms", count: 6 },
    { id: "web", name: "Web Development", count: 7 },
    { id: "databases", name: "Databases", count: 5 },
    { id: "os", name: "Operating Systems", count: 4 },
    { id: "math", name: "Mathematics", count: 4 },
    { id: "networking", name: "Networking", count: 3 },
    { id: "security", name: "Cyber Security", count: 3 },
  ];

  const difficulties = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const resourceTypes = [
    { id: "all", name: "All Types" },
    { id: "course", name: "Courses" },
    { id: "tutorial", name: "Tutorials" },
    { id: "book", name: "Books" },
    { id: "platform", name: "Platforms" },
    { id: "video", name: "Video Series" },
  ]; // Make sure this bracket is closed

  const resources = [
    // Programming Basics
    {
      id: 1,
      name: "Harvard's CS50x: Introduction to Computer Science",
      category: "programming",
      difficulty: "beginner",
      type: "course",
      link: "https://cs50.harvard.edu/x/",
      description:
        "Often called the best free CS course. Covers C, Python, SQL, web development, and algorithms.",
      duration: "11 weeks",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 2,
      name: "MIT OpenCourseWare - Introduction to CS and Programming",
      category: "programming",
      difficulty: "beginner",
      type: "course",
      link: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
      description:
        "MIT's introductory course focusing on computational thinking and Python programming.",
      duration: "15 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 3,
      name: "freeCodeCamp",
      category: "programming",
      difficulty: "beginner",
      type: "platform",
      link: "https://www.freecodecamp.org/",
      description:
        "Interactive learning platform with certifications in web development and programming.",
      duration: "Self-paced",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 4,
      name: "The Odin Project",
      category: "programming",
      difficulty: "beginner",
      type: "platform",
      link: "https://www.theodinproject.com/",
      description:
        "Full-stack web development curriculum with focus on real-world projects.",
      duration: "6 months",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 5,
      name: "Khan Academy - Computer Programming",
      category: "programming",
      difficulty: "beginner",
      type: "course",
      link: "https://www.khanacademy.org/computing/computer-programming",
      description:
        "Interactive programming lessons in JavaScript, HTML, CSS, and SQL.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 6,
      name: "Java Programming - University of Helsinki",
      category: "programming",
      difficulty: "intermediate",
      type: "course",
      link: "https://java-programming.mooc.fi/",
      description:
        "Comprehensive Java programming course with automated testing and feedback.",
      duration: "14 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 7,
      name: "Python for Everybody",
      category: "programming",
      difficulty: "beginner",
      type: "course",
      link: "https://www.py4e.com/",
      description:
        "Dr. Chuck's famous Python course covering basics to web services and databases.",
      duration: "10 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 8,
      name: "Google's Python Class",
      category: "programming",
      difficulty: "beginner",
      type: "course",
      link: "https://developers.google.com/edu/python",
      description:
        "Google's introductory Python course with video lectures and exercises.",
      duration: "2 days",
      rating: "4.6/5",
      free: true,
    },

    // Data Structures & Algorithms
    {
      id: 9,
      name: "Algorithms Specialization - Stanford (Coursera)",
      category: "dsa",
      difficulty: "intermediate",
      type: "course",
      link: "https://www.coursera.org/specializations/algorithms",
      description:
        "Comprehensive algorithms course covering divide-and-conquer, graph algorithms, and more.",
      duration: "16 weeks",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 10,
      name: "GeeksforGeeks - Data Structures and Algorithms",
      category: "dsa",
      difficulty: "intermediate",
      type: "platform",
      link: "https://www.geeksforgeeks.org/data-structures/",
      description:
        "Extensive collection of DSA articles, practice problems, and implementations.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 11,
      name: "LeetCode",
      category: "dsa",
      difficulty: "intermediate",
      type: "platform",
      link: "https://leetcode.com/",
      description:
        "Platform with thousands of coding problems for DSA practice and interview prep.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 12,
      name: "VisuAlgo",
      category: "dsa",
      difficulty: "beginner",
      type: "platform",
      link: "https://visualgo.net/",
      description:
        "Visualization tool for data structures and algorithms through animation.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 13,
      name: "Algorithm Design Manual - Steven Skiena",
      category: "dsa",
      difficulty: "advanced",
      type: "book",
      link: "http://www.algorist.com/",
      description:
        "Classic algorithms book with practical implementations and war stories.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 14,
      name: "HackerRank",
      category: "dsa",
      difficulty: "intermediate",
      type: "platform",
      link: "https://www.hackerrank.com/",
      description: "Coding challenges and competitions to improve DSA skills.",
      duration: "Self-paced",
      rating: "4.6/5",
      free: true,
    },

    // Web Development
    {
      id: 15,
      name: "MDN Web Docs",
      category: "web",
      difficulty: "beginner",
      type: "tutorial",
      link: "https://developer.mozilla.org/en-US/docs/Learn",
      description: "Comprehensive web development tutorials by Mozilla.",
      duration: "Self-paced",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 16,
      name: "Full Stack Open",
      category: "web",
      difficulty: "intermediate",
      type: "course",
      link: "https://fullstackopen.com/en/",
      description:
        "Modern JavaScript-based web development course focusing on React, Node.js, and more.",
      duration: "12 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 17,
      name: "JavaScript.info",
      category: "web",
      difficulty: "intermediate",
      type: "tutorial",
      link: "https://javascript.info/",
      description: "Modern JavaScript tutorial from basics to advanced topics.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 18,
      name: "React Official Tutorial",
      category: "web",
      difficulty: "intermediate",
      type: "tutorial",
      link: "https://reactjs.org/tutorial/tutorial.html",
      description:
        "Official React tutorial building an interactive tic-tac-toe game.",
      duration: "1 day",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 19,
      name: "Node.js Official Guides",
      category: "web",
      difficulty: "intermediate",
      type: "tutorial",
      link: "https://nodejs.org/en/docs/guides/",
      description: "Official Node.js documentation and getting started guides.",
      duration: "Self-paced",
      rating: "4.6/5",
      free: true,
    },
    {
      id: 20,
      name: "CSS-Tricks",
      category: "web",
      difficulty: "beginner",
      type: "tutorial",
      link: "https://css-tricks.com/",
      description: "Extensive CSS tutorials, guides, and reference materials.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 21,
      name: "Frontend Mentor",
      category: "web",
      difficulty: "intermediate",
      type: "platform",
      link: "https://www.frontendmentor.io/",
      description:
        "Real-world frontend challenges to improve HTML, CSS, and JavaScript skills.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },

    // Databases
    {
      id: 22,
      name: "Stanford Databases Courses",
      category: "databases",
      difficulty: "intermediate",
      type: "course",
      link: "https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about",
      description:
        "Comprehensive database courses covering SQL, design, and transactions.",
      duration: "16 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 23,
      name: "SQLZoo",
      category: "databases",
      difficulty: "beginner",
      type: "tutorial",
      link: "https://sqlzoo.net/",
      description:
        "Interactive SQL tutorial with immediate feedback and practice exercises.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 24,
      name: "MongoDB University",
      category: "databases",
      difficulty: "beginner",
      type: "course",
      link: "https://university.mongodb.com/",
      description:
        "Free courses on MongoDB and NoSQL databases with hands-on labs.",
      duration: "Self-paced",
      rating: "4.6/5",
      free: true,
    },
    {
      id: 25,
      name: "PostgreSQL Tutorial",
      category: "databases",
      difficulty: "intermediate",
      type: "tutorial",
      link: "https://www.postgresqltutorial.com/",
      description:
        "Comprehensive PostgreSQL tutorial with examples and best practices.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 26,
      name: "Database Design - Coursera",
      category: "databases",
      difficulty: "beginner",
      type: "course",
      link: "https://www.coursera.org/learn/database-design",
      description:
        "Learn to design and implement relational databases effectively.",
      duration: "4 weeks",
      rating: "4.6/5",
      free: true,
    },

    // Operating Systems
    {
      id: 27,
      name: "Operating Systems: Three Easy Pieces",
      category: "os",
      difficulty: "intermediate",
      type: "book",
      link: "http://pages.cs.wisc.edu/~remzi/OSTEP/",
      description:
        "Free online book covering OS concepts with practical examples.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 28,
      name: "CS 162 - UC Berkeley OS",
      category: "os",
      difficulty: "advanced",
      type: "course",
      link: "https://cs162.org/",
      description: "Comprehensive OS course including building OS components.",
      duration: "15 weeks",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 29,
      name: "Linux Journey",
      category: "os",
      difficulty: "beginner",
      type: "tutorial",
      link: "https://linuxjourney.com/",
      description:
        "Learn Linux command line, administration, and system concepts.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 30,
      name: "NAND to Tetris",
      category: "os",
      difficulty: "intermediate",
      type: "course",
      link: "https://www.nand2tetris.org/",
      description: "Build a complete computer system from first principles.",
      duration: "12 weeks",
      rating: "4.8/5",
      free: true,
    },

    // Mathematics
    {
      id: 31,
      name: "Mathematics for Computer Science - MIT",
      category: "math",
      difficulty: "intermediate",
      type: "course",
      link: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/",
      description:
        "Essential mathematical concepts for computer science theory.",
      duration: "15 weeks",
      rating: "4.8/5",
      free: true,
    },
    {
      id: 32,
      name: "Khan Academy - Discrete Mathematics",
      category: "math",
      difficulty: "beginner",
      type: "course",
      link: "https://www.khanacademy.org/math/discrete-math",
      description: "Discrete math topics crucial for computer science.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 33,
      name: "3Blue1Brown",
      category: "math",
      difficulty: "intermediate",
      type: "video",
      link: "https://www.3blue1brown.com/",
      description: "Animated math videos making complex concepts intuitive.",
      duration: "Self-paced",
      rating: "4.9/5",
      free: true,
    },
    {
      id: 34,
      name: "Brilliant - Computer Science",
      category: "math",
      difficulty: "beginner",
      type: "platform",
      link: "https://brilliant.org/courses/computer-science/",
      description: "Interactive computer science and math courses.",
      duration: "Self-paced",
      rating: "4.6/5",
      free: true,
    },

    // Networking
    {
      id: 35,
      name: "Computer Networking: A Top-Down Approach",
      category: "networking",
      difficulty: "intermediate",
      type: "book",
      link: "https://gaia.cs.umass.edu/kurose_ross/",
      description: "Classic networking textbook with online resources.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 36,
      name: "Wireshark University",
      category: "networking",
      difficulty: "intermediate",
      type: "tutorial",
      link: "https://www.wireshark.org/",
      description: "Learn network protocol analysis with Wireshark.",
      duration: "Self-paced",
      rating: "4.6/5",
      free: true,
    },
    {
      id: 37,
      name: "Cisco Networking Academy",
      category: "networking",
      difficulty: "beginner",
      type: "course",
      link: "https://www.netacad.com/",
      description: "Free networking courses from Cisco.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },

    // Cyber Security
    {
      id: 38,
      name: "Cybersecurity Fundamentals - edX",
      category: "security",
      difficulty: "beginner",
      type: "course",
      link: "https://www.edx.org/course/cybersecurity-fundamentals",
      description: "Introduction to cybersecurity concepts and practices.",
      duration: "6 weeks",
      rating: "4.6/5",
      free: true,
    },
    {
      id: 39,
      name: "OWASP Web Security",
      category: "security",
      difficulty: "intermediate",
      type: "platform",
      link: "https://owasp.org/",
      description:
        "Open web application security project with guides and tools.",
      duration: "Self-paced",
      rating: "4.7/5",
      free: true,
    },
    {
      id: 40,
      name: "TryHackMe",
      category: "security",
      difficulty: "beginner",
      type: "platform",
      link: "https://tryhackme.com/",
      description: "Hands-on cybersecurity learning through virtual rooms.",
      duration: "Self-paced",
      rating: "4.8/5",
      free: true,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      resource.difficulty === selectedDifficulty;
    const matchesType =
      selectedType === "all" || resource.type === selectedType;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  });

  const getCategoryCount = (categoryId) => {
    return resources.filter((resource) => resource.category === categoryId)
      .length;
  };

  // Update category counts
  categories.forEach((cat) => {
    if (cat.id !== "all") {
      cat.count = getCategoryCount(cat.id);
    } else {
      cat.count = resources.length;
    }
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedType("all");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CS Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the best free computer science resources. Master
            programming, algorithms, web development, and more with curated
            courses and tutorials.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.count})
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {difficulties.map((diff) => (
                <option key={diff.id} value={diff.id}>
                  {diff.name}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              Showing {filteredResources.length} of {resources.length} resources
            </span>
            <button
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Quick Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              <div className="font-semibold text-sm mb-1">{category.name}</div>
              <div
                className={`text-xs ${
                  selectedCategory === category.id
                    ? "text-blue-100"
                    : "text-gray-500"
                }`}
              >
                {category.count} resources
              </div>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        resource.difficulty === "beginner"
                          ? "bg-green-100 text-green-800"
                          : resource.difficulty === "intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {resource.difficulty}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {resource.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.duration}</span>
                    <span>⭐ {resource.rating}</span>
                  </div>

                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium group"
                  >
                    <span>Start Learning</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No resources found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>
            All resources are verified to be free. Continuously updated with the
            best learning materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;
