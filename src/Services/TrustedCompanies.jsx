import technologiesLogo from "../data/technologiesLogo";

const TrustedCompanies = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-blue-700 font-semibold">
            TECHNOLOGY STACK
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Technologies We Work With
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-lg">
            We use modern technologies to build secure, scalable and
            enterprise-grade software solutions.
          </p>
        </div>

        <marquee
          speed={45}
          gradient={true}
          gradientWidth={80}
          pauseOnHover={true}
        >
          <div className="flex items-center justify-center gap-8 py-8">
            {technologiesLogo.map((item) => (
              <div
                key={item.id}
                className="group mx-5 w-52 md:w-60 rounded-3xl bg-white border border-blue-100 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-500"
              >
                <div className="flex justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 duration-500">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-center text-lg font-bold text-slate-800">
                  {item.name}
                </h3>

                <p className="mt-2 text-center text-sm text-slate-500">
                  Enterprise Development
                </p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default TrustedCompanies;
