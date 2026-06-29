import {
  FaUsers,
  FaHandshake,
  FaShieldAlt,
  FaRocket,
  FaClock,
  FaAward,
} from "react-icons/fa";

const values = [
  {
    icon: <FaUsers />,
    title: "Team Work",
    desc: "Collaboration and transparent communication.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    desc: "Honest pricing and long-term partnerships.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    desc: "Secure coding practices and NDA protection.",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    desc: "Modern technologies with AI-powered solutions.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Agile process to deliver projects on schedule.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "High-performance, scalable and maintainable software.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">

            CORE VALUES

          </span>

          <h2 className="text-5xl font-bold mt-5">

            What Makes Us Different

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {values.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border bg-white p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">

                {item.title}

              </h3>

              <p className="text-slate-500 mt-5 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}