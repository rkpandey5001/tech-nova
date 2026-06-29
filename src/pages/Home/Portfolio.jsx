import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/images/portfolio/hospital.jpeg",
    title: "Hospital Management System",
    category: "Web Application",
    client: "ABC Hospital",
    technology: "React • Node • MongoDB",
  },
  {
    id: 2,
    image: "/images/portfolio/school.webp",
    title: "School ERP",
    category: "ERP Software",
    client: "Bright School",
    technology: "React • Laravel • MySQL",
  },
  {
    id: 3,
    image: "/images/portfolio/ecommerce.png",
    title: "E-Commerce Website",
    category: "Website",
    client: "Fashion Store",
    technology: "React • Firebase",
  },
  {
    id: 4,
    image: "/images/portfolio/resturant.jpg",
    title: "Restaurant Mobile App",
    category: "Mobile App",
    client: "Food Point",
    technology: "Flutter • Firebase",
  },
  {
    id: 5,
    image: "/images/portfolio/chatbot.png",
    title: "AI Customer Chatbot",
    category: "AI Solution",
    client: "Tech Solutions",
    technology: "Python • OpenAI",
  },
  {
    id: 6,
    image: "/images/portfolio/crm.webp",
    title: "CRM Software",
    category: "Enterprise Software",
    client: "XYZ Pvt Ltd",
    technology: "React • Node • PostgreSQL",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Recent Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500">
            We have successfully delivered websites, software, web applications,
            mobile apps and AI-powered solutions for startups and enterprises.
          </p>
        </div>

        {/* Projects */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  <strong>Client:</strong> {project.client}
                </p>

                <p className="mt-2 text-slate-500">{project.technology}</p>

                {/* Rating */}

                <div className="mt-5 flex gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>

                {/* Button */}

                <Link to={`/portfolio/${project.id}`}>
                  <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}

        <div className="mt-16 text-center">
          <Link to="/portfolio">
            <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
              View All Projects
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
