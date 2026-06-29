import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import solutions from "../../data/solutionsData";

const BusinessSolutions = () => {
  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-4">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-6 py-2 text-blue-700 font-semibold">

            BUSINESS SOLUTIONS

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">

            Smart Digital Solutions For Every Business

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-500">

            We provide customized enterprise software solutions
            that improve business productivity and automate operations.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {solutions.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-3xl text-white">

                  {item.icon}

                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-500 leading-7">

                  {item.description}

                </p>

                <div className="mt-6 space-y-3">

                  {item.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <FaCheckCircle className="text-blue-600"/>

                      <span className="text-slate-700">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-8 flex gap-3">

                  <Link
                    to={`/solutions/${item.id}`}
                    className="flex-1"
                  >

                    <button className="w-full rounded-xl border border-blue-600 py-3 font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white">

                      Explore

                    </button>

                  </Link>

                  <Link
                    to="/contact"
                    className="flex-1"
                  >

                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">

                      Quote

                      <FaArrowRight/>

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BusinessSolutions;