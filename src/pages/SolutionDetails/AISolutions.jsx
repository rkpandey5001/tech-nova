import {
  FaRobot,
  FaBrain,
  FaComments,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

// import AIServices from "./AIServices";
// import AIProcess from "./AIProcess";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Chatbot",
    desc: "24×7 intelligent chatbot for customer support and lead generation.",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    desc: "Predict customer behavior and automate business decisions.",
  },
  {
    icon: <FaComments />,
    title: "ChatGPT Integration",
    desc: "Integrate OpenAI GPT into your website or application.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Analytics",
    desc: "AI-powered dashboards with real-time insights.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud AI",
    desc: "Deploy scalable AI services on AWS or Azure.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    desc: "Secure APIs and encrypted AI data processing.",
  },
];

export default function AISolutions() {
  return (
    <div>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-white/20 px-5 py-2 rounded-full text-white font-semibold">
                AI Powered Business Solutions
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">
                Artificial Intelligence
                <span className="block text-cyan-300">Solutions</span>
              </h1>

              <p className="mt-8 text-blue-100 text-lg leading-8">
                We develop intelligent AI applications using ChatGPT, Machine
                Learning, NLP, Computer Vision and Automation to transform your
                business.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100">
                  Get Free Consultation
                </button>

                <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-700 duration-300">
                  View Demo
                </button>
              </div>
            </div>

            <div>
              <img
                src="/images/solutions/ai.webp"
                alt="AI Solution"
                className="rounded-[35px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/solutions/ai-about.webp"
                alt=""
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
                ABOUT AI
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                AI That Works For Your Business
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                We build custom AI solutions that automate repetitive tasks,
                improve customer engagement, generate insights and increase
                productivity across your organization.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="text-3xl font-bold text-blue-700">90%</h3>

                  <p className="mt-2 text-gray-600">Faster Response</p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="text-3xl font-bold text-blue-700">60%</h3>

                  <p className="mt-2 text-gray-600">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              FEATURES
            </span>

            <h2 className="mt-6 text-5xl font-bold">AI Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {features.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                <p className="mt-5 text-gray-500 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center">
            <h2 className="text-5xl font-bold text-white">
              Ready To Build AI Solution?
            </h2>

            <p className="mt-6 text-blue-100 text-lg">
              Let's create intelligent software that saves time, reduces cost
              and grows your business.
            </p>

            <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100">
              Start Your AI Project
              <FaArrowRight className="inline ml-3" />
            </button>
          </div>
        </div>
      </section>
    
    </div>
  );
}
