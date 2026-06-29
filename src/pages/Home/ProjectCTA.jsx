import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function ProjectCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">

      {/* Background Circles */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="container mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-[40px] border border-white/20 p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-white font-semibold">
                LET'S BUILD SOMETHING AMAZING
              </span>

              <h2 className="text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
                Have a Project
                <br />
                in Mind?
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-8">
                Whether you need a Website, Web Application,
                Mobile App, Enterprise Software or AI Powered Solution,
                our experienced team is ready to transform your idea into
                a scalable digital product.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-white/10 px-5 py-3 rounded-xl text-white">
                  ✔ Free Consultation
                </div>

                <div className="bg-white/10 px-5 py-3 rounded-xl text-white">
                  ✔ Affordable Pricing
                </div>

                <div className="bg-white/10 px-5 py-3 rounded-xl text-white">
                  ✔ NDA Protection
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h3 className="text-3xl font-bold text-slate-900">
                Get Free Quote
              </h3>

              <p className="text-gray-500 mt-2">
                Tell us about your project.
              </p>

              <form className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <select className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600">

                  <option>Select Service</option>

                  <option>Website Development</option>

                  <option>Web Application</option>

                  <option>Software Development</option>

                  <option>Mobile Application</option>

                  <option>AI Solution</option>

                </select>

                <textarea
                  rows="5"
                  placeholder="Describe your project requirement..."
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                ></textarea>

                <Link to="/register">

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                  >
                    Submit Requirement
                    <FaArrowRight />
                  </button>

                </Link>

              </form>

              <div className="mt-8 flex items-center justify-center gap-3 text-blue-700 font-semibold">

                <FaPhoneAlt />

                +91 98765 43210

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}