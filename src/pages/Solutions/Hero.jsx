import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaPlayCircle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071739] via-[#0A4FAF] to-[#1D9BF0]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-5 py-20 lg:py-28">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">

              🚀 AI Powered Digital Solutions

            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">

              Smart Business

              <span className="block text-cyan-300">

                Software Solutions

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">

              We develop modern business solutions including ERP, CRM,
              HRMS, Billing Software, Inventory Management,
              AI Chatbots and Enterprise Applications
              that help your business grow faster.

            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Scalable Architecture
              </div>

              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Cloud Ready
              </div>

              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-cyan-300" />
                AI Integration
              </div>

              <div className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-cyan-300" />
                Enterprise Security
              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link to="/contact">

                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-100">

                  Get Free Consultation

                </button>

              </Link>

              <button className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 text-white transition hover:bg-white hover:text-blue-700">

                <FaPlayCircle />

                Watch Demo

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src="/images/solutions/hero.webp"
              alt=""
              className="rounded-[35px] shadow-2xl"
            />

            <div className="absolute -left-6 top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

              <h3 className="text-3xl font-bold text-blue-700">

                500+

              </h3>

              <p className="text-slate-500">

                Projects Delivered

              </p>

            </div>

            <div className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

              <h3 className="text-3xl font-bold text-blue-700">

                99%

              </h3>

              <p className="text-slate-500">

                Client Satisfaction

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;