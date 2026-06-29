import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiOpenai,
  SiNextdotjs,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact />,
    title: "React JS",
    desc: "Modern Frontend Development",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: <FaNodeJs />,
    title: "Node JS",
    desc: "Scalable Backend APIs",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next JS",
    desc: "SEO Optimized Web Apps",
    color: "from-slate-800 to-black",
  },
  {
    icon: <SiFlutter />,
    title: "Flutter",
    desc: "Android & IOS Apps",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaLaravel />,
    title: "Laravel",
    desc: "Enterprise Applications",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <FaPython />,
    title: "Python AI",
    desc: "Automation & Machine Learning",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <SiOpenai />,
    title: "OpenAI",
    desc: "ChatGPT Integration",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "NoSQL Database",
    color: "from-green-500 to-lime-500",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    desc: "Relational Database",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <FaAws />,
    title: "AWS",
    desc: "Cloud Hosting",
    color: "from-orange-400 to-yellow-500",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Container Deployment",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <SiFirebase />,
    title: "Firebase",
    desc: "Realtime Backend",
    color: "from-yellow-500 to-orange-400",
  },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-2">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
            OUR TECHNOLOGIES
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Technologies We Work With
          </h2>

          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">
            We build enterprise-grade applications using the latest technologies
            trusted by startups and global businesses.
          </p>
        </div>

        <div className="grid gap-6 mt-20 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-4 shadow-lg border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-4xl`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
