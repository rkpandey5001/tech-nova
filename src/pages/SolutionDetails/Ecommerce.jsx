import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaCreditCard,
  FaTruck,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Ecommerce() {
  return (
    <div>

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071739] via-[#0A4FAF] to-[#1D9BF0] py-24">

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        </div>

        <div className="container relative mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-white/20 px-5 py-2 text-white font-semibold backdrop-blur">

                🛒 E-Commerce Development

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white">

                Modern

                <span className="block text-cyan-300">

                  E-Commerce Solutions

                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100">

                Build high-performance online stores with secure payments,
                inventory management, order tracking and modern user experience.

              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Responsive Design
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Payment Gateway
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Admin Dashboard
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  SEO Friendly
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link to="/contact">

                  <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100">

                    Start Project

                  </button>

                </Link>

                <button className="rounded-xl border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-700 duration-300">

                  Live Demo

                </button>

              </div>

            </div>

            <div>

              <img
                src="/images/solutions/ecommerce-hero.webp"
                alt="E-Commerce"
                className="rounded-[35px] shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="py-24 bg-white">

        <div className="container mx-auto px-5">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div>

              <img
                src="/images/solutions/ecommerce-about.webp"
                alt=""
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">

                ABOUT SOLUTION

              </span>

              <h2 className="mt-6 text-5xl font-bold">

                Grow Your Business Online

              </h2>

              <p className="mt-6 text-gray-600 leading-8">

                We create scalable e-commerce platforms with secure payment
                gateways, inventory management, customer dashboards,
                analytics and marketing tools.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <FaShoppingCart className="text-blue-600 text-2xl"/>

                  Unlimited Products

                </div>

                <div className="flex items-center gap-4">

                  <FaCreditCard className="text-blue-600 text-2xl"/>

                  Multiple Payment Gateways

                </div>

                <div className="flex items-center gap-4">

                  <FaTruck className="text-blue-600 text-2xl"/>

                  Shipping Integration

                </div>

                <div className="flex items-center gap-4">

                  <FaMobileAlt className="text-blue-600 text-2xl"/>

                  Mobile Friendly Store

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}