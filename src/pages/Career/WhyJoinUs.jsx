import {
  FaLaptopCode,
  FaGraduationCap,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: "Latest Technologies",
    desc: "Work with React, AI, Node.js, Flutter and Cloud."
  },
  {
    icon: <FaGraduationCap />,
    title: "Learning & Growth",
    desc: "Continuous learning and mentorship."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Competitive Salary",
    desc: "Performance-based salary and incentives."
  },
  {
    icon: <FaUsers />,
    title: "Friendly Team",
    desc: "Positive and collaborative work culture."
  }
];

export default function WhyJoinUs() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="bg-blue-100 px-5 py-2 rounded-full text-blue-700 font-semibold">

            WHY JOIN US

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Grow With Our Company

          </h2>

        </div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500"
            >

              <div className="mx-auto h-20 w-20 rounded-full bg-blue-600 text-white text-4xl flex items-center justify-center">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-slate-500">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}