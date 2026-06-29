import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-28">

      <div className="absolute inset-0 bg-[url('/images/pattern/grid.svg')] opacity-10"></div>

      <div className="container relative mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="rounded-full bg-white/20 px-5 py-2 text-white">
              ABOUT OUR COMPANY
            </span>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-white">
              Building Future Ready
              <br />
              Digital Solutions
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              We help startups, enterprises and businesses build
              scalable websites, web applications, enterprise software,
              mobile applications and AI-powered solutions.
            </p>

            <div className="mt-10 flex gap-5">

              <Link to="/contact">

                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100">

                  Contact Us

                </button>

              </Link>

              <Link to="/portfolio">

                <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 text-white">

                  View Portfolio

                  <FaArrowRight/>

                </button>

              </Link>

            </div>

          </div>

          <div>

            <img
              src="/images/about/about-hero.webp"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}