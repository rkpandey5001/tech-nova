import { Link } from "react-router-dom";
import {
  FaBoxes,
  FaWarehouse,
  FaBarcode,
  FaClipboardList,
  FaTruckLoading,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";

const Inventory = () => {
  return (
    <div>

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#051937] via-[#0A4FAF] to-[#1CB5E0] py-24">

        {/* Background Blur */}
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-white font-semibold backdrop-blur">
                📦 Smart Inventory Solution
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">
                Inventory
                <span className="block text-cyan-300">
                  Management Software
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-blue-100">
                Manage stock, warehouses, suppliers, purchases, sales,
                barcode scanning and real-time inventory reports from one
                powerful dashboard.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Live Stock Tracking
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Barcode Support
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Purchase Management
                </div>

                <div className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-300" />
                  Sales Reports
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link to="/contact">
                  <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-100">
                    Request Demo
                  </button>
                </Link>

                <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700">
                  View Dashboard
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <img
                src="/images/solutions/inventory-hero.webp"
                alt="Inventory Management"
                className="rounded-[35px] shadow-2xl"
              />

              <div className="absolute -left-6 top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">
                  50K+
                </h3>

                <p className="text-slate-500">
                  Products Managed
                </p>

              </div>

              <div className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">
                  99.9%
                </h3>

                <p className="text-slate-500">
                  Inventory Accuracy
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About Section */}

      <section className="bg-white py-24">

        <div className="container mx-auto px-5">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <img
                src="/images/solutions/inventory-about.webp"
                alt="Inventory Dashboard"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
                ABOUT INVENTORY
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                Smart Warehouse & Stock Management
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Track every product in real time, manage multiple warehouses,
                automate stock updates and generate detailed inventory reports
                with our cloud-based inventory management software.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <FaBoxes className="text-3xl text-blue-600" />
                  Product & Stock Management
                </div>

                <div className="flex items-center gap-4">
                  <FaWarehouse className="text-3xl text-blue-600" />
                  Multi-Warehouse Support
                </div>

                <div className="flex items-center gap-4">
                  <FaBarcode className="text-3xl text-blue-600" />
                  Barcode & QR Code Scanning
                </div>

                <div className="flex items-center gap-4">
                  <FaClipboardList className="text-3xl text-blue-600" />
                  Purchase & Sales Tracking
                </div>

                <div className="flex items-center gap-4">
                  <FaTruckLoading className="text-3xl text-blue-600" />
                  Supplier Management
                </div>

                <div className="flex items-center gap-4">
                  <FaChartBar className="text-3xl text-blue-600" />
                  Reports & Analytics
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Inventory;