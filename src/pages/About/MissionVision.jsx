import {
  FaBullseye,
  FaEye,
  FaLightbulb,
} from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            OUR PURPOSE
          </span>

          <h2 className="text-5xl font-bold mt-5">

            Mission & Vision

          </h2>

          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">

            We help startups and enterprises build secure,
            scalable and innovative software solutions that
            drive digital transformation.

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* Mission */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl duration-300">

            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl">

              <FaBullseye/>

            </div>

            <h3 className="text-3xl font-bold mt-8">

              Our Mission

            </h3>

            <p className="text-slate-500 mt-6 leading-8">

              Deliver innovative websites,
              enterprise software,
              mobile applications,
              AI solutions and cloud applications
              using modern technologies.

            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl duration-300">

            <div className="w-20 h-20 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-4xl">

              <FaEye/>

            </div>

            <h3 className="text-3xl font-bold mt-8">

              Our Vision

            </h3>

            <p className="text-slate-500 mt-6 leading-8">

              Become India's most trusted
              software development company
              delivering world-class digital products.

            </p>

          </div>

          {/* Goal */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl duration-300">

            <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-4xl">

              <FaLightbulb/>

            </div>

            <h3 className="text-3xl font-bold mt-8">

              Innovation

            </h3>

            <p className="text-slate-500 mt-6 leading-8">

              We continuously adopt
              modern technologies,
              AI automation,
              cloud computing
              and scalable architecture.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}