import React from "react";
import { Mail, Phone } from "lucide-react";

const IQAC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold">
              IQAC & Quality Initiatives
            </h1>
            <p className="text-lg leading-relaxed">
              The Department of Computer Science & Engineering (CSE) at GM
              University actively participates in the Internal Quality Assurance
              Cell (IQAC) framework to promote academic excellence, governance,
              and continuous improvement.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/18/07/53/analysis-3088958_960_720.jpg"
              alt="IQAC and Quality Initiatives"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Coordinators Section */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          IQAC Coordinators
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Coordinator 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">
              Dr. Chethan Chandra S. Basavaraddi
            </h3>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:chethanchandrasb.cse@gmu.ac.in"
                className="hover:underline"
              >
                chethanchandrasb.cse@gmu.ac.in
              </a>
            </p>
            <p className="flex items-center gap-2 mt-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" /> +91 98445 08359
            </p>
          </div>

          {/* Coordinator 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Mr. Santoshkumar M</h3>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:santoshkumarm@gmit.ac.in"
                className="hover:underline"
              >
                santoshkumarm@gmit.ac.in
              </a>
            </p>
            <p className="flex items-center gap-2 mt-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" /> +91 92421 63128
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Quality Initiatives Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">
            Key Quality Initiatives
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong>Mentorship Model:</strong> Each faculty member mentors
              students in a 1:30 ratio, ensuring personalized guidance, academic
              monitoring, and career support.
            </p>

            <p>
              <strong>ERP-Enabled Quality Assurance:</strong> The department
              leverages the University ERP system for data visualization,
              performance tracking, and evidence-based decision-making. Insights
              generated from ERP data support decisions at the mentor,
              coordinator, and HoD levels, enhancing transparency and
              accountability.
            </p>

            <p>
              <strong>OBE and Documentation:</strong> The IQAC coordinators
              maintain syllabus records, course outcome and program outcome
              mappings, feedback reports, placement statistics, and curriculum
              review data.
            </p>

            <p>
              <strong>Continuous Improvement:</strong> Regular benchmarking
              against peer institutions, stakeholder consultations, and academic
              audits ensure alignment with AICTE/UGC regulations and industry
              requirements.
            </p>

            <p className="mt-6">
              Through these initiatives, the CSE Department ensures that its
              quality practices are systematic, measurable, and forward-looking,
              creating an environment that supports student success and
              institutional growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IQAC;
