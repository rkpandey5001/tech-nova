import { Link } from "react-router-dom";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaMoneyCheckAlt,
  FaBus,
  FaCheckCircle,
} from "react-icons/fa";

const SchoolERP = () => {
  return (
    <div>

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#1565C0] to-[#29B6F6] py-24">

        <div className="absolute inset-0">

          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        </div>

        <div className="container relative mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-white font-semibold backdrop-blur">

                🎓 Smart School ERP

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">

                Complete

                <span className="block text-cyan-300">

                  School ERP Software

                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100">

                Digitize your entire school with admissions,
                attendance, fees, exams, transport,
                library, parent portal and staff management.

              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Student Management
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Online Admission
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Fee Management
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Parent Portal
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link to="/contact">

                  <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100 transition">

                    Request Demo

                  </button>

                </Link>

                <button className="rounded-xl border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-700 transition">

                  Watch Demo

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <img
                src="/images/solutions/school-hero.webp"
                alt="School ERP"
                className="rounded-[35px] shadow-2xl"
              />

              <div className="absolute -left-6 top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  250+

                </h3>

                <p className="text-slate-500">

                  Schools Using ERP

                </p>

              </div>

              <div className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  50K+

                </h3>

                <p className="text-slate-500">

                  Students Managed

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="bg-white py-24">

        <div className="container mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <img
                src="/images/solutions/school-about.webp"
                alt="School ERP Dashboard"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

                ABOUT SCHOOL ERP

              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">

                Smart Digital School Management

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Our School ERP automates daily academic and administrative
                operations including admissions, attendance, fee collection,
                exams, transport, library, hostel, HR and communication.

              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">

                  <FaSchool className="text-3xl text-blue-600"/>

                  Multi Campus Management

                </div>

                <div className="flex items-center gap-4">

                  <FaUserGraduate className="text-3xl text-blue-600"/>

                  Student Information System

                </div>

                <div className="flex items-center gap-4">

                  <FaChalkboardTeacher className="text-3xl text-blue-600"/>

                  Teacher & Staff Management

                </div>

                <div className="flex items-center gap-4">

                  <FaBook className="text-3xl text-blue-600"/>

                  Library & Examination

                </div>

                <div className="flex items-center gap-4">

                  <FaMoneyCheckAlt className="text-3xl text-blue-600"/>

                  Fee Collection & Accounting

                </div>

                <div className="flex items-center gap-4">

                  <FaBus className="text-3xl text-blue-600"/>

                  Transport Management

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SchoolERP;