const BoS = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const bosMembers = [
    {
      id: 1,
      slNo: "1",
      name: "Dr. Shivanagowda G M",
      category: "Chairperson",
      designation:
        "Professor & Head, Department of Computer Science & Engineering, School of Computer Science & Technology (SoCST), GM University, Davanagere",
    },
    {
      id: 2,
      slNo: "2",
      name: "Ms. Ranjitha D S, Dr. Santosh Kumar M",
      category: "BoS Coordinators",
      designation:
        "Assistant Professor, Department of Computer Science & Engineering, SoCST, GM University, Davanagere",
    },
    {
      id: 3,
      slNo: "3",
      name: "Dr. Chethan Chandra S Basavaraddi",
      category: "BoS Member",
      designation:
        "Associate Professor, Department of Computer Science & Engineering, SoCST, GM University, Davanagere",
    },
    {
      id: 4,
      slNo: "4",
      name: "Mrs. Nayana K",
      category: "BoS Member",
      designation:
        "Assistant Professor, Department of Computer Science & Engineering, SoCST, GM University, Davanagere",
    },
    {
      id: 5,
      slNo: "5",
      name: "Dr. Madhu Mutyam",
      category: "External Expert Member",
      designation:
        "Professor, Department of Computer Science & Engineering, Indian Institute of Technology Hyderabad (IIT Hyderabad), Telangana",
    },
    {
      id: 6,
      slNo: "6*",
      name: "Dr. Satyanarayana Peri",
      category: "External Expert Member",
      designation:
        "Professor, Department of Computer Science & Engineering, Indian Institute of Technology Hyderabad (IIT Hyderabad), Telangana",
    },
    {
      id: 7,
      slNo: "7",
      name: "Dr. Pavana Kumar",
      category: "External Expert Member",
      designation:
        "Assistant Professor, Department of Computer Science & Engineering, Indian Institute of Information Technology Dharwad (IIIT Dharwad), Karnataka",
    },
    {
      id: 8,
      slNo: "8",
      name: "Mr. Manjunath Reddy B H",
      category: "Industry Expert Member",
      designation:
        "Senior Technology Leader, Thomson Reuters, Bengaluru (Formerly Wipro Technologies)",
    },
    {
      id: 9,
      slNo: "9",
      name: "Mr. Girish Aithal",
      category: "Industry Expert Member",
      designation:
        "Co-Founder, 4Edge IT Solutions, Bengaluru; Former Education & Assessment Leader, Infosys Ltd.",
    },
    {
      id: 10,
      slNo: "10",
      name: "HoDs",
      category: "Internal Expert",
      designation: "Departments from SoCST, GM University, Davanagere",
    },
  ];

  const categoryColors = {
    Chairperson: "bg-blue-100 text-blue-800",
    "BoS Coordinators": "bg-purple-100 text-purple-800",
    "BoS Member": "bg-green-100 text-green-800",
    "External Expert Member": "bg-orange-100 text-orange-800",
    "Industry Expert Member": "bg-rose-100 text-rose-800",
    "Internal Expert": "bg-gray-100 text-gray-700",
  };

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
                  Science &amp; Engineering is the primary academic body
                  responsible for designing, reviewing, and updating the
                  curriculum. It ensures that the courses offered are aligned
                  with the vision of GM University, the requirements of
                  AICTE/UGC guidelines, and the evolving needs of the IT
                  industry, Professional Body&apos;s vision of the industry and
                  research community.
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
                  A detailed list of BoS members of the Department of CSE is
                  provided below.
                </p>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-blue-800 to-indigo-900">
                    <tr>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-blue-700 w-16">
                        Sl. No.
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-blue-700">
                        Name of the BoS Member
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider border-r border-blue-700">
                        Members Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                        Designation &amp; Affiliation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bosMembers.map((member, index) => (
                      <tr
                        key={member.id}
                        className={`transition-all duration-200 hover:bg-blue-50 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                          {member.slNo}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              categoryColors[member.category] ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {member.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">
                          {member.designation}
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
