import {
  FaBug,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const challenges = [
  {
    icon: <FaBug />,
    title: "Outdated Software",
    desc: "Legacy systems slow down your business operations and increase maintenance costs.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "High Operational Cost",
    desc: "Manual work and disconnected systems increase business expenses.",
  },
  {
    icon: <FaClock />,
    title: "Time Consuming Process",
    desc: "Teams waste hours managing repetitive tasks manually.",
  },
  {
    icon: <FaUsers />,
    title: "Poor Customer Experience",
    desc: "Slow response times reduce customer satisfaction and loyalty.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            BUSINESS CHALLENGES
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Problems We Solve
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
            Every growing business faces operational challenges.
            Our software solutions eliminate these problems with automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {challenges.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border bg-white p-8 shadow-lg hover:bg-blue-700 hover:text-white duration-500"
            >

              <div className="flex items-center gap-5">

                <div className="h-16 w-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-3xl group-hover:bg-white group-hover:text-blue-700">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-3 opacity-80">

                    {item.desc}

                  </p>

                </div>

              </div>

              <button className="mt-8 flex items-center gap-3 font-semibold">

                Learn Solution

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}