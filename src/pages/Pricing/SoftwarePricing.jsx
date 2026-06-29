import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const softwares = [
  {
    title: "Hospital ERP",
    oldPrice: "₹1,49,999",
    price: "₹99,999",
    save: "Save ₹50,000",
    badge: "Best Seller",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "School ERP",
    oldPrice: "₹1,29,999",
    price: "₹89,999",
    save: "Save ₹40,000",
    badge: "25% OFF",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "HRMS",
    oldPrice: "₹79,999",
    price: "₹59,999",
    save: "Save ₹20,000",
    badge: "Popular",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Inventory Management",
    oldPrice: "₹69,999",
    price: "₹49,999",
    save: "Save ₹20,000",
    badge: "Hot Deal",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "E-Commerce Website",
    oldPrice: "₹89,999",
    price: "₹69,999",
    save: "Save ₹20,000",
    badge: "Trending",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "AI Chatbot",
    oldPrice: "₹59,999",
    price: "₹39,999",
    save: "Save ₹20,000",
    badge: "New",
    color: "from-violet-600 to-indigo-600",
  },
];

export default function SoftwarePricing() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

            SOFTWARE SOLUTIONS

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Ready Software Packages

          </h2>

          <p className="mt-5 text-slate-500 max-w-3xl mx-auto">

            Affordable pricing with premium quality, free consultation,
            deployment assistance and post-launch support.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {softwares.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500 overflow-hidden"
            >

              <div className={`bg-gradient-to-r ${item.color} p-6`}>

                <span className="rounded-full bg-white/20 px-4 py-1 text-sm text-white">

                  {item.badge}

                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">

                  {item.title}

                </h3>

              </div>

              <div className="p-8">

                <p className="text-gray-400 line-through text-xl">

                  {item.oldPrice}

                </p>

                <h2 className="mt-2 text-5xl font-bold text-blue-700">

                  {item.price}

                </h2>

                <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">

                  {item.save}

                </span>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500"/>
                    Lifetime Source Code
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500"/>
                    Responsive Design
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500"/>
                    Admin Dashboard
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500"/>
                    Free Installation
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500"/>
                    3 Months Support
                  </div>

                </div>

                <Link to="/contact">

                  <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 duration-300 flex items-center justify-center gap-3">

                    Get Quote

                    <FaArrowRight/>

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