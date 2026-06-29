import { useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import solutionTabs from "../../data/solutionTabs";
import { Link } from "react-router-dom";

export default function SmartSolutions() {
  const [active, setActive] = useState(solutionTabs[0]);
  console.log(active);
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            SMART SOLUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-bold">Choose The Right Solution</h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500">
            Explore our customized business solutions designed for startups,
            SMEs and enterprises.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          {/* Left Tabs */}

          <div className="lg:col-span-4">
            <div className="space-y-4">
              {solutionTabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`w-full rounded-2xl p-5 text-left transition duration-300

                  ${
                    active.id === item.id
                      ? "bg-blue-600 text-white shadow-xl"
                      : "bg-white hover:bg-blue-50 shadow"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{item.icon}</div>

                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>

                      <p className="text-sm opacity-80">Business Solution</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Details */}

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={active.image}
                alt={active.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">
                <h2 className="text-4xl font-bold">{active.title}</h2>

                <p className="mt-5 text-gray-500 leading-8">
                  {active.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {active.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-blue-600" />

                      {point}
                    </div>
                  ))}
                </div>

                <Link to={`/solutions/${active.slug}`}>
                  <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 duration-300">
                    Explore Solution
                    <FaArrowRight className="inline ml-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
