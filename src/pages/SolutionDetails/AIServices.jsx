import {
  FaRobot,
  FaComments,
  FaMicrophone,
  FaImage,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaComments />,
    title: "AI Chatbot Development",
    desc: "Build ChatGPT powered chatbots for customer support and lead generation.",
  },
  {
    icon: <FaRobot />,
    title: "Business Automation",
    desc: "Automate repetitive business tasks using Artificial Intelligence.",
  },
  {
    icon: <FaMicrophone />,
    title: "Voice AI",
    desc: "Create voice assistants with speech recognition capabilities.",
  },
  {
    icon: <FaImage />,
    title: "Computer Vision",
    desc: "Image recognition, OCR and object detection solutions.",
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Analytics",
    desc: "Forecast business trends with Machine Learning models.",
  },
  {
    icon: <FaCode />,
    title: "Custom AI Software",
    desc: "Tailor-made AI applications for startups and enterprises.",
  },
];

export default function AIServices() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            AI SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            What We Build
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500">
            AI-powered software solutions designed to automate,
            optimize and grow your business.
          </p>

        </div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {services.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow hover:shadow-2xl hover:-translate-y-2 duration-500"
            >

              <div className="h-20 w-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-4xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-5 text-gray-500 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}