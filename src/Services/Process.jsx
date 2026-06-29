import {
  FaComments,
  FaPenNib,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    id: "01",
    icon: <FaComments />,
    title: "Requirement Discussion",
    description:
      "We understand your business, goals and project requirements in detail.",
  },
  {
    id: "02",
    icon: <FaPenNib />,
    title: "UI / UX Design",
    description:
      "We create modern and attractive UI/UX before development starts.",
  },
  {
    id: "03",
    icon: <FaCode />,
    title: "Development",
    description:
      "Frontend, Backend, Database and API development using latest technologies.",
  },
  {
    id: "04",
    icon: <FaBug />,
    title: "Testing & QA",
    description:
      "Complete testing for security, performance and bug fixing.",
  },
  {
    id: "05",
    icon: <FaRocket />,
    title: "Deployment",
    description:
      "Deploy your project on server with complete support and maintenance.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            OUR PROCESS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Our Development Process
          </h2>

          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">
            We follow a professional development process to deliver
            high-quality software solutions on time.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mt-20">

          {process.map((item) => (

            <div
              key={item.id}
              className="relative group bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <span className="absolute top-5 right-5 text-5xl font-bold text-blue-100">
                {item.id}
              </span>

              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-500 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}