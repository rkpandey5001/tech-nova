import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#0F52BA] to-[#1E88E5]">

      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="/images/services/grid.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container relative mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-blue-100/20 border border-blue-300/20 px-5 py-2 text-blue-100">

              🚀 Trusted Software Development Company

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-white">

              Custom Software

              <br />

              Development

              <span className="text-cyan-300">

                {" "}Services

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">

              We build scalable Websites,
              Enterprise Software,
              Mobile Applications,
              AI Solutions and
              Cloud Applications
              for startups and enterprises.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300"/>

                Responsive Design

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300"/>

                AI Powered Solutions

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300"/>

                Enterprise Security

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaCheckCircle className="text-cyan-300"/>

                24×7 Support

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link to="/register">

                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-50 duration-300 flex items-center gap-3">

                  Start Your Project

                  <FaArrowRight/>

                </button>

              </Link>

              <button className="rounded-xl border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-700 duration-300 flex items-center gap-3">

                <FaPlay/>

                Watch Demo

              </button>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

              <div>

                <h2 className="text-3xl font-bold text-white">

                  500+

                </h2>

                <p className="text-blue-200">

                  Projects

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  250+

                </h2>

                <p className="text-blue-200">

                  Clients

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  7+

                </h2>

                <p className="text-blue-200">

                  Years

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  99%

                </h2>

                <p className="text-blue-200">

                  Success

                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src="/images/services/service-hero.webp"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute top-8 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">

              <h3 className="font-bold text-blue-700">

                AI Solutions

              </h3>

              <p className="text-sm text-gray-500">

                ChatGPT Integration

              </p>

            </div>

            <div className="absolute bottom-8 -right-6 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">

              <h3 className="font-bold text-blue-700">

                500+

              </h3>

              <p className="text-sm text-gray-500">

                Successful Projects

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}