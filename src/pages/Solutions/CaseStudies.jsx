import { FaArrowRight } from "react-icons/fa";
import caseStudies from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            CASE STUDIES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Success Stories
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-500">
            Explore some of our successful software solutions that helped
            businesses improve productivity and achieve measurable results.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {caseStudies.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.client}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {item.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4">

                  <h4 className="font-semibold text-green-700">
                    Result
                  </h4>

                  <p className="mt-2 text-green-600">
                    {item.result}
                  </p>

                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 hover:gap-4 duration-300">

                  View Case Study

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}