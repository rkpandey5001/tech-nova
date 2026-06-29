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

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full font-semibold">

              LET'S START YOUR PROJECT

            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-white">

              Ready To Transform
              <br />
              Your Business?

            </h2>

            <p className="mt-8 text-lg leading-8 text-blue-100">

              We build high-quality Websites,
              Web Applications,
              Enterprise Software,
              Mobile Apps,
              and AI Powered Solutions
              that help businesses grow faster.

            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300" />

                Free Consultation

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300" />

                Affordable Pricing

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300" />

                NDA Protection

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300" />

                24×7 Support

              </div>

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link to="/register">

                <button className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-50 duration-300">

                  Start Your Project

                  <FaArrowRight/>

                </button>

              </Link>

              <a href="tel:+919876543210">

                <button className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-700 duration-300">

                  <FaPhoneAlt/>

                  Call Now

                </button>

              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <img
              src="/images/about/cta.webp"
              alt="CTA"
              className="rounded-[40px] shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-xl p-6">

              <h3 className="text-3xl font-bold text-blue-700">

                500+

              </h3>

              <p className="text-slate-500">

                Successful Projects

              </p>

            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-3xl shadow-xl p-6">

              <h3 className="text-3xl font-bold text-blue-700">

                250+

              </h3>

              <p className="text-slate-500">

                Happy Clients

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}