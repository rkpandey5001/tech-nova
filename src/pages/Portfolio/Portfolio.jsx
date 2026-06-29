import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolioData";

const categories = [
  "All",
  "Website",
  "Web App",
  "Software",
  "Mobile App",
  "AI",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);

  const filteredProjects = portfolioData.filter((project) => {
    const matchCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-24 text-white">

        <div className="container mx-auto px-6 py-8">

          <h1 className="text-5xl font-bold">

            Our Portfolio

          </h1>

          <p className="mt-5 max-w-3xl text-blue-100 text-lg">

            Explore our latest websites, software,
            web applications, mobile apps and AI projects.

          </p>

        </div>

      </section>

      {/* Portfolio */}

      <section className="py-20 bg-slate-50">

        <div className="container mx-auto px-6">

          {/* Search */}

          <div className="flex flex-col lg:flex-row justify-between gap-6">

            <div className="relative w-full lg:w-96">

              <FaSearch className="absolute top-5 left-5 text-gray-400"/>

              <input
                type="text"
                placeholder="Search Project..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-blue-500"
              />

            </div>

            {/* Category */}

            <div className="flex flex-wrap gap-3">

              {categories.map((category)=>(
                <button

                  key={category}

                  onClick={()=>setActiveCategory(category)}

                  className={`px-6 py-3 rounded-full transition

                  ${
                    activeCategory===category
                    ?
                    "bg-blue-600 text-white"
                    :
                    "bg-white border"
                  }

                  `}
                >

                  {category}

                </button>
              ))}

            </div>

          </div>

          {/* Count */}

          <div className="mt-10">

            <h3 className="text-xl font-semibold">

              {filteredProjects.length} Projects Found

            </h3>

          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">

            {

              filteredProjects
              .slice(0,visible)
              .map((project)=>(

                <PortfolioCard

                key={project.id}

                project={project}

                />

              ))

            }

          </div>

          {/* Load More */}

          {

            visible < filteredProjects.length && (

              <div className="text-center mt-16">

                <button

                onClick={()=>setVisible(visible+3)}

                className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700"

                >

                  Load More

                </button>

              </div>

            )

          }

        </div>

      </section>

    </>
  );
}