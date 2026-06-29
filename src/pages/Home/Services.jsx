import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaPaintBrush,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description:
      "Modern business websites with premium responsive UI and SEO optimization.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Web Application",
    description:
      "Powerful CRM, ERP and custom business applications for enterprises.",
    icon: <FaDatabase />,
  },
  {
    title: "Mobile Application",
    description: "Android & iOS applications using modern technologies.",
    icon: <FaMobileAlt />,
  },
  {
    title: "AI Solutions",
    description: "AI Chatbot, Automation and Smart Business Solutions.",
    icon: <FaRobot />,
  },
  {
    title: "UI / UX Design",
    description:
      "Creative and user friendly interfaces with premium experience.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Cloud Solutions",
    description: "Secure cloud deployment and scalable infrastructure.",
    icon: <FaCloud />,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Digital Solutions For Every Business
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            We build secure, scalable and high performance digital products that
            help businesses grow faster.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-4xl text-blue-600 transition-all duration-500 group-hover:bg-white group-hover:text-blue-600">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-all group-hover:text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-500 transition-all group-hover:text-blue-100">
                {service.description}
              </p>

              <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-blue-600">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
