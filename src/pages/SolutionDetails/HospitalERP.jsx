import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUserMd,
  FaFileMedical,
  FaPills,
  FaFlask,
  FaCheckCircle,
} from "react-icons/fa";

export default function HospitalERP() {
  return (
    <div>

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#041C45] via-[#0B5ED7] to-[#36C2FF] py-24">

        {/* Background Blur */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-white font-semibold backdrop-blur">

                🏥 Smart Hospital ERP

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">

                Complete

                <span className="block text-cyan-300">

                  Hospital Management System

                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100">

                Digitize your hospital with an all-in-one ERP solution
                including OPD, IPD, Billing, Pharmacy, Laboratory,
                HR, Inventory and Patient Management.

              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Patient Management
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Online Appointment
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Pharmacy Module
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Lab Reports
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link to="/contact">

                  <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100 transition">

                    Book Free Demo

                  </button>

                </Link>

                <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-700 transition">

                  Live Preview

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <img
                src="/images/solutions/hospital-hero.webp"
                alt="Hospital ERP"
                className="rounded-[35px] shadow-2xl"
              />

              <div className="absolute -left-6 top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  200+

                </h3>

                <p className="text-slate-500">

                  Hospitals Using ERP

                </p>

              </div>

              <div className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">

                  24×7

                </h3>

                <p className="text-slate-500">

                  Technical Support

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
                src="/images/solutions/hospital-about.webp"
                alt="Hospital ERP Dashboard"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

                ABOUT HOSPITAL ERP

              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">

                Smart Digital Healthcare Platform

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Our Hospital ERP helps healthcare organizations automate
                patient registration, appointments, billing,
                diagnostics, pharmacy, inventory, HR and finance
                from one centralized dashboard.

              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">

                  <FaHospital className="text-3xl text-blue-600"/>

                  Multi Hospital Management

                </div>

                <div className="flex items-center gap-4">

                  <FaUserMd className="text-3xl text-blue-600"/>

                  Doctor & Staff Management

                </div>

                <div className="flex items-center gap-4">

                  <FaFileMedical className="text-3xl text-blue-600"/>

                  Electronic Medical Records

                </div>

                <div className="flex items-center gap-4">

                  <FaPills className="text-3xl text-blue-600"/>

                  Pharmacy Management

                </div>

                <div className="flex items-center gap-4">

                  <FaFlask className="text-3xl text-blue-600"/>

                  Laboratory Management

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}