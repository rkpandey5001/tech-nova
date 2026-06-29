import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Amit Sharma",
    designation: "Founder & CEO",
    image: "/images/team/ceo.webp",
  },
  {
    id: 2,
    name: "Rahul Verma",
    designation: "Project Manager",
    image: "/images/team/manager.webp",
  },
  {
    id: 3,
    name: "Priya Singh",
    designation: "UI / UX Designer",
    image: "/images/team/uiux.webp",
  },
  {
    id: 4,
    name: "Ankit Kumar",
    designation: "Frontend Developer",
    image: "/images/team/frontend.webp",
  },
  {
    id: 5,
    name: "Sneha Patel",
    designation: "Backend Developer",
    image: "/images/team/backend.webp",
  },
  {
    id: 6,
    name: "Rohit Gupta",
    designation: "AI Engineer",
    image: "/images/team/ai.webp",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            OUR TEAM
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Meet Our Experts
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500">
            Our experienced team of designers, developers and AI engineers
            builds secure, scalable and innovative digital products.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

          {team.map((member) => (

            <div
              key={member.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2"
            >

              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  {member.designation}
                </p>

                <div className="flex justify-center gap-4 mt-8">

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 duration-300"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-black duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 duration-300"
                  >
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}