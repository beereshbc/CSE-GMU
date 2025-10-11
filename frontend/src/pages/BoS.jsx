const BoS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Board of Studies (BoS)
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driving academic excellence through curriculum innovation and
            industry collaboration
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-8">
            {/* Introduction Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                About Board of Studies
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The Board of Studies (BoS) of the Department of Computer
                  Science & Engineering is the primary academic body responsible
                  for designing, reviewing, and updating the curriculum. It
                  ensures that the courses offered are aligned with the vision
                  of GM University, the requirements of AICTE/UGC guidelines,
                  and the evolving needs of the IT industry, Professional Body's
                  vision of the industry and research community.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-gray-700">
                    The BoS also recommends new programs, proposes panels of
                    examiners, and identifies standard learning resources for
                    teaching and evaluation. Its recommendations are placed
                    before the Board of Faculty and Academic Council for
                    approval, as per the GMU Statutes (pp. 40–41).
                  </p>
                </div>

                <p className="text-lg">
                  The BoS of CSE includes the Head of the Department
                  (Chairperson), senior faculty members, external subject
                  experts, and industry representatives, bringing together
                  academic depth and professional relevance.
                </p>
              </div>
            </div>

            {/* Members Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                BoS Members Composition
              </h2>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl mb-6">
                <p className="text-center text-lg font-semibold">
                  *A detailed list of BoS members of the Department of CSE is
                  provided below.*
                </p>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-blue-800 to-indigo-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-blue-700">
                        Category / Position
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-blue-700">
                        Required Designation / Profile
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                        Preferred From
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        category: "Chairperson",
                        designation: "Head of the Department (HoD)",
                        preferred: "Concerned Department",
                      },
                      {
                        id: 2,
                        category: "Member Secretary",
                        designation:
                          "Program Coordinator / DUGC Member Secretary/ Senior Faculty",
                        preferred: "Concerned Department",
                      },
                      {
                        id: 3,
                        category: "Internal Members (4–6)",
                        designation:
                          "Professors / Associate Professors / Senior Faculty",
                        preferred: "Concerned Department",
                      },
                      {
                        id: 5,
                        category: "Academic Council Nominee – 1",
                        designation: "Senior Faculty (Professor/Assoc. Prof.)",
                        preferred: "State/Central/Private University",
                      },
                      {
                        id: 6,
                        category: "Academic Council Nominee – 2",
                        designation: "Senior Faculty (Professor/Assoc. Prof.)",
                        preferred:
                          "Autonomous Institution (preferably within State)",
                      },
                      {
                        id: 7,
                        category: "Academic Council Nominee – 3",
                        designation:
                          "Subject Expert / Associate Professor / Professor",
                        preferred:
                          "Reputed University/Institution (outside State/region)",
                      },
                      {
                        id: 8,
                        category: "Vice-Chancellor Nominee",
                        designation: "Senior Professor",
                        preferred:
                          "Any Recognized Institution (nominated by VC)",
                      },
                      {
                        id: 9,
                        category: "Industry Representative – Senior",
                        designation:
                          "Industry Expert / Senior Alumnus (10+ years experience)",
                        preferred:
                          "Reputed Industry / Alumni (earlier batches)",
                      },
                      {
                        id: 10,
                        category: "Industry Representative – Young",
                        designation:
                          "Recent Alumnus (within last 10–15 years) in Industry/R&D",
                        preferred:
                          "Industry/Research Organization (recent batches alumni)",
                      },
                    ].map((member, index) => (
                      <tr
                        key={member.id}
                        className={`transition-all duration-200 hover:bg-blue-50 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {member.designation}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {member.preferred}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoS;
