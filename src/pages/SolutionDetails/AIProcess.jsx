const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understand your business goals and identify AI opportunities.",
  },
  {
    step: "02",
    title: "Data Collection",
    desc: "Collect and prepare quality data for AI models.",
  },
  {
    step: "03",
    title: "Model Development",
    desc: "Develop and train intelligent AI algorithms.",
  },
  {
    step: "04",
    title: "Integration",
    desc: "Integrate AI into your website, app or enterprise software.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Test performance, security and accuracy before launch.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    desc: "Deploy to cloud and provide continuous monitoring & updates.",
  },
];

export default function AIProcess() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-5">

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            DEVELOPMENT PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Our AI Development Journey
          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {process.map((item) => (

            <div
              key={item.step}
              className="relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl duration-500"
            >

              <div className="absolute -top-5 left-8 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                {item.step}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-gray-500">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}