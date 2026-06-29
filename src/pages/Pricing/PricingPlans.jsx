import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Starter Website",
    oldPrice: "₹35,000",
    newPrice: "₹24,999",
    discount: "29% OFF",
    popular: false,
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "Free SSL",
      "1 Month Support",
    ],
  },

  {
    title: "Business Website",
    oldPrice: "₹65,000",
    newPrice: "₹49,999",
    discount: "23% OFF",
    popular: true,
    features: [
      "10+ Pages",
      "Admin Panel",
      "CMS",
      "SEO Optimization",
      "Google Analytics",
      "3 Months Support",
    ],
  },

  {
    title: "Enterprise Solution",
    oldPrice: "₹1,50,000",
    newPrice: "₹99,999",
    discount: "33% OFF",
    popular: false,
    features: [
      "Unlimited Modules",
      "Custom Dashboard",
      "API Integration",
      "Cloud Deployment",
      "Training",
      "12 Months Support",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">

            OUR PLANS

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Choose Your Package

          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl bg-white p-10 shadow-xl hover:-translate-y-3 duration-500 ${
                plan.popular ? "border-4 border-blue-600 scale-105" : ""
              }`}
            >

              {plan.popular && (

                <div className="absolute right-8 top-8 rounded-full bg-blue-600 px-4 py-1 text-sm text-white">

                  Most Popular

                </div>

              )}

              <h3 className="text-3xl font-bold">

                {plan.title}

              </h3>

              <div className="mt-8">

                <span className="text-gray-400 line-through text-2xl">

                  {plan.oldPrice}

                </span>

                <h2 className="text-5xl font-bold text-blue-700">

                  {plan.newPrice}

                </h2>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-4 py-2 text-green-700">

                  {plan.discount}

                </span>

              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((item) => (

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-500"/>

                    {item}

                  </div>

                ))}

              </div>

              <Link to="/contact">

                <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700">

                  Get Started

                </button>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}