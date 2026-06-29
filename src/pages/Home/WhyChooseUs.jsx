import { FaCheckCircle, FaCode, FaShieldAlt, FaRobot } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7fbff] py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}

          <div className="relative">
            <img
              src="/images/about/about.jpg"
              alt=""
              className="rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl shadow-xl p-6 w-60">
              <h3 className="font-bold text-3xl text-blue-600">10+</h3>

              <p className="text-slate-600 mt-2">Years Experience</p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-5xl font-bold mt-6">
              We Build Future Ready Digital Products
            </h2>

            <p className="text-slate-500 mt-6 leading-8">
              We develop scalable websites, enterprise software, mobile
              applications and AI powered business solutions that help startups
              and enterprises grow faster.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 text-2xl">
                  <FaCode />
                </div>

                <div>
                  <h4 className="font-bold text-xl">Clean Coding</h4>

                  <p className="text-slate-500">
                    Secure, scalable and maintainable source code.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 text-2xl">
                  <FaShieldAlt />
                </div>

                <div>
                  <h4 className="font-bold text-xl">Secure Software</h4>

                  <p className="text-slate-500">
                    Enterprise level security with best practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 text-2xl">
                  <FaRobot />
                </div>

                <div>
                  <h4 className="font-bold text-xl">AI Integration</h4>

                  <p className="text-slate-500">
                    AI Chatbot and automation for modern businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress */}

            <div className="mt-10">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Project Success</span>

                <span>98%</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full w-[98%]"></div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Client Satisfaction</span>

                <span>99%</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-cyan-500 h-3 rounded-full w-[99%]"></div>
              </div>
            </div>

            {/* Checklist */}

            <div className="grid grid-cols-2 gap-5 mt-12">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                Website Development
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                Software Development
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                Mobile App
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                AI Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
