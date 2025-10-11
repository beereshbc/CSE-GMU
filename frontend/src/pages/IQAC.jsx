import React from "react";
import {
  Mail,
  Phone,
  Users,
  BarChart3,
  FileText,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react";

const IQAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* ✅ Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Quality Assurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IQAC & Quality <span className="text-blue-200">Initiatives</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              The Department of Computer Science & Engineering (CSE) at GM
              University actively participates in the Internal Quality Assurance
              Cell (IQAC) framework to promote academic excellence, governance,
              and continuous improvement.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/18/07/53/analysis-3088958_960_720.jpg"
                alt="IQAC and Quality Initiatives"
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-xl font-bold shadow-lg">
              <Award className="w-5 h-5 inline mr-2" />
              Excellence
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Enhanced Coordinators Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            IQAC Coordinators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated coordinators committed to maintaining and
            enhancing academic quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Coordinator 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group transform hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  Dr. Chethan Chandra S. Basavaraddi
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a
                      href="mailto:chethanchandrasb.cse@gmu.ac.in"
                      className="hover:underline truncate"
                    >
                      chethanchandrasb.cse@gmu.ac.in
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>+91 98445 08359</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinator 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group transform hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  Mr. Santoshkumar M
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a
                      href="mailto:santoshkumarm@gmit.ac.in"
                      className="hover:underline truncate"
                    >
                      santoshkumarm@gmit.ac.in
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>+91 92421 63128</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Enhanced Quality Initiatives Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Key Quality Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to quality assurance ensures continuous
              improvement and academic excellence across all programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Initiative 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Mentorship Model
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Each faculty member mentors students in a 1:30 ratio, ensuring
                personalized guidance, academic monitoring, and career support
                with regular progress tracking.
              </p>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  ERP-Enabled Quality Assurance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Leveraging University ERP system for data visualization,
                performance tracking, and evidence-based decision-making with
                enhanced transparency and accountability.
              </p>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  OBE and Documentation
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive maintenance of syllabus records, outcome mappings,
                feedback reports, placement statistics, and curriculum review
                data for continuous assessment.
              </p>
            </div>

            {/* Initiative 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Continuous Improvement
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Regular benchmarking against peer institutions, stakeholder
                consultations, and academic audits ensuring alignment with
                AICTE/UGC regulations and industry requirements.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-blue-800 text-white p-8 rounded-2xl shadow-lg text-center">
            <p className="text-lg md:text-xl leading-relaxed">
              Through these initiatives, the CSE Department ensures that its
              quality practices are{" "}
              <span className="font-semibold text-blue-200">
                systematic, measurable, and forward-looking
              </span>
              , creating an environment that supports student success and
              institutional growth.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ New Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-700 mb-2">1:30</div>
              <div className="text-gray-600">Mentorship Ratio</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-600">ERP Integration</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-700 mb-2">A+</div>
              <div className="text-gray-600">Quality Rating</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Support System</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IQAC;
