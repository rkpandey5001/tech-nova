import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="container relative mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block rounded-full bg-white/20 px-5 py-2 font-semibold text-white">
              START YOUR DIGITAL JOURNEY
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
              Ready To Build
              <br />
              Your Dream Project?
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Whether you need a business website,
              web application,
              ERP software,
              mobile app,
              AI chatbot,
              or enterprise solution,
              our experts are ready to help.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Free Consultation
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Genuine Pricing
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-white">
                <FaCheckCircle className="text-cyan-300" />
                NDA Protected
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Lifetime Support
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="text-3xl font-bold text-slate-900">
              Get Free Project Consultation
            </h3>

            <p className="mt-2 text-slate-500">
              Fill your details and our expert will contact you within 24 hours.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <select className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600">

                <option>Select Service</option>
                <option>Website Development</option>
                <option>Web Application</option>
                <option>Software Development</option>
                <option>Mobile App Development</option>
                <option>AI Solution</option>
                <option>E-Commerce Website</option>

              </select>

              <textarea
                rows="4"
                placeholder="Describe Your Project..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              ></textarea>

              <div className="grid gap-4 md:grid-cols-2">

                <Link to="/register">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Start Project
                    <FaArrowRight />
                  </button>
                </Link>

                <a href="tel:+919876543210">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaPhoneAlt />
                    Call Now
                  </button>
                </a>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}