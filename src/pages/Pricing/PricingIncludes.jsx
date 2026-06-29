import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaHeadset,
  FaCloudUploadAlt,
  FaShieldAlt,
} from "react-icons/fa";

const includes = [
  {
    icon: <FaCode />,
    title: "Clean Source Code",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Responsive",
  },
  {
    icon: <FaServer />,
    title: "Hosting Support",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Setup",
  },
  {
    icon: <FaHeadset />,
    title: "Technical Support",
  },
];

export default function PricingIncludes() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

            INCLUDED

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Everything Included

          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {includes.map((item, index)=>(

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl duration-300"
            >

              <div className="h-20 w-20 rounded-2xl bg-blue-600 text-white text-4xl flex items-center justify-center">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-slate-500">

                Included with every software package at no extra cost.

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}