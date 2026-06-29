import {
  FaTimesCircle,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const before = [
  "Manual Work",
  "Excel Sheets",
  "Slow Process",
  "Paper Documentation",
  "Human Errors",
  "No Live Reports",
];

const after = [
  "Business Automation",
  "Centralized Dashboard",
  "Fast Workflow",
  "Cloud Storage",
  "Accurate Data",
  "Real-time Analytics",
];

export default function BeforeAfter() {
  return (
    <section className="bg-white py-24">

      <div className="container mx-auto px-4">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-600">
            BUSINESS TRANSFORMATION
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Before vs After Our Software
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-500">
            Replace outdated systems with modern digital solutions that
            improve productivity, customer satisfaction and business growth.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Before */}

          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-red-600">
              Before
            </h3>

            <div className="mt-8 space-y-5">

              {before.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow"
                >

                  <FaTimesCircle className="text-red-500 text-2xl"/>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* After */}

          <div className="rounded-3xl border border-green-200 bg-green-50 p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-green-600">
              After
            </h3>

            <div className="mt-8 space-y-5">

              {after.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow"
                >

                  <FaCheckCircle className="text-green-600 text-2xl"/>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-10 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready To Transform Your Business?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-blue-100">
            Let's replace outdated systems with a secure, scalable and
            AI-powered software solution tailored to your business.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-100">
            Start Your Project
            <FaArrowRight className="inline ml-3" />
          </button>

        </div>

      </div>

    </section>
  );
}