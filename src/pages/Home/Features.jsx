import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Website Development",

    desc: "Modern responsive websites with premium UI.",

    icon: <FaLaptopCode />,
  },

  {
    title: "Mobile Apps",

    desc: "Android & iOS Applications using latest technologies.",

    icon: <FaMobileAlt />,
  },

  {
    title: "AI Integration",

    desc: "AI Chatbot, Automation & Smart Business Solutions.",

    icon: <FaBrain />,
  },

  {
    title: "Secure Software",

    desc: "Enterprise software with complete security.",

    icon: <FaShieldAlt />,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Why Choose Techverve
          </h2>

          <p className="mt-5 text-slate-500">
            Professional Software Development Company
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-5 text-slate-500 leading-7">{item.desc}</p>

              <button className="mt-8 text-blue-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
