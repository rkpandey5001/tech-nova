import { Link } from "react-router-dom";
import {
  FaUsers,
  FaUserClock,
  FaMoneyCheckAlt,
  FaClipboardList,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const HRMS = () => {
  return (
    <div>

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#1565C0] to-[#29B6F6] py-24">

        {/* Background Blur */}

        <div className="absolute inset-0">

          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        </div>

        <div className="container relative mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-white font-semibold backdrop-blur">

                👨‍💼 Smart HR Management

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">

                Complete

                <span className="block text-cyan-300">

                  HRMS Software

                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100">

                Manage employees, attendance, payroll, leave,
                recruitment, performance and reports from a single
                cloud-based HRMS platform.

              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Employee Management
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Attendance Tracking
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Payroll Automation
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300"/>
                  Leave Management
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link to="/contact">

                  <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100 transition">

                    Request Demo

                  </button>

                </Link>

                <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-700 transition">

                  Watch Demo

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <img
                src="/images/solutions/hrms-hero.webp"
                alt="HRMS"
                className="rounded-[35px] shadow-2xl"
              />

              <div className="absolute -left-6 top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  10K+

                </h3>

                <p className="text-slate-500">

                  Employees Managed

                </p>

              </div>

              <div className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  99%

                </h3>

                <p className="text-slate-500">

                  Payroll Accuracy

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About Section */}

      <section className="py-24 bg-white">

        <div className="container mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <img
                src="/images/solutions/hrms-about.webp"
                alt="HRMS Dashboard"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

                ABOUT HRMS

              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">

                Simplify Human Resource Management

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Our HRMS software automates HR operations from hiring
                to retirement. It helps organizations improve employee
                productivity while reducing paperwork and manual tasks.

              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">

                  <FaUsers className="text-3xl text-blue-600"/>

                  Employee Database

                </div>

                <div className="flex items-center gap-4">

                  <FaUserClock className="text-3xl text-blue-600"/>

                  Attendance & Shift Management

                </div>

                <div className="flex items-center gap-4">

                  <FaMoneyCheckAlt className="text-3xl text-blue-600"/>

                  Payroll Processing

                </div>

                <div className="flex items-center gap-4">

                  <FaClipboardList className="text-3xl text-blue-600"/>

                  Leave & Holiday Management

                </div>

                <div className="flex items-center gap-4">

                  <FaChartLine className="text-3xl text-blue-600"/>

                  HR Reports & Analytics

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HRMS;