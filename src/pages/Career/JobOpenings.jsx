import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "React.js Developer",
    experience: "1 - 3 Years",
    location: "Indore / Remote",
    salary: "₹3.5 - ₹6 LPA",
    type: "Full Time",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Node.js Developer",
    experience: "2 - 4 Years",
    location: "Indore",
    salary: "₹4 - ₹7 LPA",
    type: "Full Time",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Flutter Developer",
    experience: "1 - 3 Years",
    location: "Remote",
    salary: "₹3 - ₹6 LPA",
    type: "Full Time",
    skills: ["Flutter", "Firebase", "REST API"],
  },
  {
    id: 4,
    title: "Laravel Developer",
    experience: "2+ Years",
    location: "Indore",
    salary: "₹4 - ₹8 LPA",
    type: "Full Time",
    skills: ["Laravel", "PHP", "MySQL"],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    experience: "1 - 2 Years",
    location: "Hybrid",
    salary: "₹3 - ₹5 LPA",
    type: "Full Time",
    skills: ["Figma", "Adobe XD", "UI Design"],
  },
  {
    id: 6,
    title: "Digital Marketing Executive",
    experience: "1 - 3 Years",
    location: "Indore",
    salary: "₹2.5 - ₹5 LPA",
    type: "Full Time",
    skills: ["SEO", "Google Ads", "Social Media"],
  },
];

export default function JobOpenings() {
  return (
    <section id="jobs" className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            CURRENT OPENINGS
          </span>

          <h2 className="mt-6 text-5xl font-bold">Available Jobs</h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-500">
            Explore exciting opportunities and become a part of our growing
            team.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{job.title}</h3>

                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-medium">
                  {job.type}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-slate-600">
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-blue-600" />
                  {job.experience}
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-500" />
                  {job.location}
                </div>

                <div className="flex items-center gap-3">
                  <FaMoneyBillWave className="text-green-600" />
                  {job.salary}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link to="#apply">
                <button className="mt-8 flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                  Apply Now
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
