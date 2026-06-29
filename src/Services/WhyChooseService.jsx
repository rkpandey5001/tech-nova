import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCode />,
    title: "Latest Technologies",
    desc: "React, Node, Laravel, Flutter, Python & AI.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Development",
    desc: "Enterprise level security with best coding practices.",
  },
  {
    icon: <FaRocket />,
    title: "Scalable Applications",
    desc: "Applications built for future business growth.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Project delivered within committed timeline.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    desc: "Dedicated technical support after project delivery.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Affordable Pricing",
    desc: "Best quality software at genuine cost.",
  },
];

export default function WhyChooseService() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Why Businesses Choose Us
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-500 leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}