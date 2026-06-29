import { Link } from "react-router-dom";
import services from "../data/servicesData";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">

            WHAT WE OFFER

          </span>

          <h2 className="text-5xl font-bold mt-5">

            Our Premium Services

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 group"
            >

              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="p-8">

                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {service.title}

                </h3>

                <p className="text-slate-500 mt-4 leading-7">

                  {service.description}

                </p>

                <ul className="mt-6 space-y-2">

                  {service.features.map((feature, index) => (
                    <li key={index} className="text-slate-600">
                      ✅ {feature}
                    </li>
                  ))}

                </ul>

                <Link to={`/services/${service.id}`}>

                  <button className="mt-8 flex items-center gap-3 text-blue-600 font-semibold">

                    Explore More

                    <FaArrowRight />

                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}