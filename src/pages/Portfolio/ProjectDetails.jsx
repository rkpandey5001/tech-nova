import { useParams, Link } from "react-router-dom";
import portfolioData from "./portfolioData";
import { FaStar } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  
  const project = portfolioData.find((item) => item.id === Number(id));
  console.log(project);
  if (!project) {
    return <div className="py-40 text-center">Project Not Found</div>;
  }

  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold">{project.title}</h1>

          <p className="mt-5 text-blue-100">{project.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <img src={project.banner} className="rounded-3xl shadow-xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold">Project Information</h2>

              <div className="mt-10 space-y-5">
                <div>
                  <span className="font-semibold">Client</span>

                  <p>{project.client}</p>
                </div>

                <div>
                  <span className="font-semibold">Category</span>

                  <p>{project.category}</p>
                </div>

                <div>
                  <span className="font-semibold">Duration</span>

                  <p>{project.duration}</p>
                </div>

                <div>
                  <span className="font-semibold">Team</span>

                  <p>{project.team}</p>
                </div>

                <div>
                  <span className="font-semibold">Status</span>

                  <p className="text-green-600">{project.status}</p>
                </div>
              </div>

              <div className="flex mt-8">
                {[...Array(project.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <a
                href={project.liveDemo}
                target="_blank"
                className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Project Features</h2>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-slate-100 rounded-xl p-5">
                ✅ {feature}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Technologies Used</h2>

          <div className="flex flex-wrap gap-4 mt-10">
            {project.technology.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link to="/portfolio">
            <button className="mt-14 bg-blue-600 text-white px-8 py-4 rounded-xl">
              Back To Portfolio
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
