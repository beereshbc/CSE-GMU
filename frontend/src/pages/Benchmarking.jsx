import React from "react";

const Benchmarking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benchmarking
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Department of Computer Science & Engineering, GMU
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The{" "}
              <strong>
                Department of Computer Science & Engineering (CSE)
              </strong>
              , benchmarks its academic, research, and professional practices
              with leading national and international institutions to ensure
              excellence and continuous improvement.
            </p>

            {/* Benchmarking Items */}
            <div className="space-y-8">
              {/* Curriculum Benchmarking */}
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  Curriculum Benchmarking
                </h3>
                <p className="text-gray-700">
                  The B.Tech. CSE syllabus is designed in line with the{" "}
                  <strong>
                    ACM/IEEE Computer Science Curriculum Guidelines, CS2023
                  </strong>
                  , ensuring global relevance and coverage of emerging areas
                  such as Artificial Intelligence, Data Science, Cybersecurity,
                  and Cloud Computing.
                </p>
              </div>

              {/* National Competitiveness */}
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-green-100 text-green-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                  National Competitiveness
                </h3>
                <p className="text-gray-700">
                  CSE graduates are well-prepared to appear for the{" "}
                  <strong>GATE (Computer Science) examination</strong>, as the
                  syllabus aligns with the most recent GATE committee framework.
                  This readiness enables students to secure{" "}
                  <strong>
                    M.Tech., MS program admissions in IITs, NITs, and other
                    premier Indian institutions
                  </strong>
                  .
                </p>
              </div>

              {/* Global Competitiveness */}
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-purple-100 text-purple-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Global Competitiveness
                </h3>
                <p className="text-gray-700">
                  The department nurtures strong analytical and scholarly
                  skills, making students competitive for
                  <strong> GRE, TOEFL, and IELTS</strong> examinations, thereby
                  enabling admission to top universities in the US, UK, Europe,
                  and Asia for higher studies under prestigious fellowships.
                </p>
              </div>

              {/* Research & Scholarly Growth */}
              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-orange-100 text-orange-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </span>
                  Research & Scholarly Growth
                </h3>
                <p className="text-gray-700">
                  Students are trained to pursue advanced research, equipping
                  them with the scholarly depth required for
                  <strong> direct Integrated Ph.D. admissions</strong> in
                  leading Indian and global institutions.
                </p>
              </div>

              {/* Industry Benchmarking */}
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-100 text-red-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  Industry Benchmarking
                </h3>
                <p className="text-gray-700">
                  Through exposure to{" "}
                  <strong>
                    industry-standard tools, practices, and technologies
                  </strong>
                  , students are capable of excelling in{" "}
                  <strong>
                    capstone projects at CMMI Level 5 companies, agile startups,
                    and innovation-driven enterprises
                  </strong>
                  . Their entrepreneurial skills are nurtured to align with{" "}
                  <strong>Modern India's initiatives</strong>, empowering them
                  to become <strong>job creators and technology leaders</strong>
                  .
                </p>
              </div>

              {/* Admission Excellence */}
              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-indigo-100 text-indigo-600 rounded-lg p-2 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  Admission Excellence
                </h3>
                <p className="text-gray-700">
                  Admission to the B.Tech. in Computer Science & Engineering
                  program at GM University is based on
                  <strong> merit and academic excellence</strong>. Students
                  admitted under both the self-financed and government quota
                  categories demonstrate consistently high performance in their
                  pre-university examinations and competitive entrance tests.
                  This ensures that the department attracts well-qualified and
                  motivated learners, maintaining a high academic standard and
                  fostering a culture of excellence from the very beginning.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                This multi-level benchmarking ensures that CSE graduates are not
                only <strong>industry-ready</strong>
                but also <strong>academically and globally competitive</strong>,
                capable of excelling in research, innovation, and
                entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benchmarking;
