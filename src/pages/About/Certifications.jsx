import certifications from "../../data/certificationsData.jsx";

export default function Certifications() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold">

            TRUST & ACHIEVEMENTS

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Awards & Certifications

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500">

            We follow international development standards and have
            successfully delivered hundreds of software solutions
            across multiple industries.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl bg-white p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-4xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-2 text-blue-600 font-semibold">

                {item.subtitle}

              </p>

              <p className="mt-5 text-slate-500 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center text-white">

          <h3 className="text-4xl font-bold">

            Trusted By Businesses Across India

          </h3>

          <p className="mt-5 text-blue-100 max-w-3xl mx-auto">

            We maintain quality, security and transparency in every project.
            Our commitment to innovation helps clients build scalable digital products.

          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-slate-100 duration-300">

            View Company Profile

          </button>

        </div>

      </div>

    </section>
  );
}