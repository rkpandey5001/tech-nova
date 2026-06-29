import { Link } from "react-router-dom";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071739] via-[#0A4FAF] to-[#1D9BF0] py-24">

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      </div>

      <div className="container relative mx-auto px-5">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          <div>

            <span className="rounded-full bg-white/20 px-5 py-2 text-white font-semibold">

              🚀 We're Hiring

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white">

              Build Your Career

              <span className="block text-cyan-300">

                With Our Team

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">

              Join our talented team of developers, designers and
              digital innovators. Grow your career while building
              world-class software products.

            </p>

            <div className="mt-10 flex gap-4 flex-wrap">

              <Link to="#jobs">

                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700">

                  View Openings

                </button>

              </Link>

              <Link to="#apply">

                <button className="rounded-xl border border-white px-8 py-4 text-white">

                  Apply Now

                </button>

              </Link>

            </div>

          </div>

          <div>

            <img
              src="/images/career/career-hero.webp"
              alt=""
              className="rounded-[35px] shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}