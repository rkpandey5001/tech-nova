// import { Button } from "@mui/material";
// import { FaArrowRight } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

//       {/* Background Blur */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left */}

//           <div>

//             <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">

//               🚀 AI Powered Software Development Company

//             </span>

//             <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">

//               Build Your

//               <span className="text-blue-600">

//                 {" "}Digital Future

//               </span>

//               <br />

//               With Us

//             </h1>

//             <p className="mt-8 text-slate-600 text-lg leading-8">

//               We design modern Websites, Web Applications,
//               Enterprise Software, Mobile Apps and AI Powered
//               Business Solutions for startups and enterprises.

//             </p>

//             <div className="flex gap-5 mt-10">

//               <Button

//                 variant="contained"

//                 size="large"

//                 sx={{
//                   borderRadius: "50px",
//                   padding: "14px 28px",
//                 }}

//               >

//                 Get Started

//               </Button>

//               <Button

//                 variant="outlined"

//                 size="large"

//                 endIcon={<FaArrowRight />}

//                 sx={{
//                   borderRadius: "50px",
//                   padding: "14px 28px",
//                 }}

//               >

//                 View Portfolio

//               </Button>

//             </div>

//             {/* Stats */}

//             <div className="grid grid-cols-3 gap-6 mt-16">

//               <div>

//                 <h2 className="text-4xl font-bold text-blue-600">

//                   500+

//                 </h2>

//                 <p className="text-slate-500">

//                   Projects

//                 </p>

//               </div>

//               <div>

//                 <h2 className="text-4xl font-bold text-blue-600">

//                   150+

//                 </h2>

//                 <p className="text-slate-500">

//                   Clients

//                 </p>

//               </div>

//               <div>

//                 <h2 className="text-4xl font-bold text-blue-600">

//                   99%

//                 </h2>

//                 <p className="text-slate-500">

//                   Satisfaction

//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Right */}

//           <div className="relative">

//             <img

//               src="/images/hero/dashboard.jpg"

//               alt="Dashboard"

//               className="rounded-3xl shadow-2xl"

//             />

//             {/* Floating Card */}

//             <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 w-52">

//               <h3 className="font-semibold text-slate-800">

//                 Live Projects

//               </h3>

//               <p className="text-3xl font-bold text-blue-600">

//                 248

//               </p>

//             </div>

//             <div className="absolute bottom-5 -right-6 bg-white rounded-2xl shadow-xl p-5 w-52">

//               <h3 className="font-semibold">

//                 AI Integration

//               </h3>

//               <p className="text-blue-600 text-2xl font-bold">

//                 Enabled

//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




import { Button } from "@mui/material";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5FAFF] pt-32 pb-24">

      {/* Background Gradient */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow">

              <MdVerified className="text-blue-600 text-xl" />

              <span className="text-sm font-semibold text-blue-700">
                Trusted Software Development Company
              </span>

            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">

              Build Powerful

              <span className="text-blue-600">

                {" "}Websites,

              </span>

              <br />

              Mobile Apps &

              <br />

              AI Solutions

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

              We create high-performance Websites, Web Applications,
              Enterprise Software, Mobile Apps and AI Powered
              Business Solutions that help your business grow faster.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button

                variant="contained"

                size="large"

                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.7,
                  fontWeight: 600,
                }}

                endIcon={<FaArrowRight />}

              >

                Get Started

              </Button>

              <Button

                variant="outlined"

                size="large"

                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.7,
                }}

                startIcon={<FaPlay />}

              >

                Watch Demo

              </Button>

            </div>

            {/* Statistics */}

            <div className="mt-16 grid grid-cols-3 gap-5">

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  500+

                </h2>

                <p className="mt-2 text-slate-500">

                  Completed Projects

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  150+

                </h2>

                <p className="mt-2 text-slate-500">

                  Happy Clients

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  99%

                </h2>

                <p className="mt-2 text-slate-500">

                  Client Satisfaction

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <img

              src="/images/hero/dashboard.jpg"

              alt="Dashboard"

              className="rounded-[30px] shadow-2xl"

            />

            {/* Floating Card */}

            <div className="absolute -top-8 -left-8 w-60 rounded-3xl bg-white p-6 shadow-xl">

              <h4 className="text-lg font-semibold">

                Active Projects

              </h4>

              <h2 className="mt-3 text-4xl font-bold text-blue-600">

                248

              </h2>

              <p className="mt-2 text-slate-500">

                Running Successfully

              </p>

            </div>

            <div className="absolute -bottom-6 right-0 w-60 rounded-3xl bg-white p-6 shadow-xl">

              <h4 className="text-lg font-semibold">

                AI Integration

              </h4>

              <div className="mt-4 h-3 w-full rounded-full bg-slate-200">

                <div className="h-3 w-[90%] rounded-full bg-blue-600"></div>

              </div>

              <p className="mt-3 text-slate-500">

                Smart Automation Enabled

              </p>

            </div>

            {/* Experience Badge */}

            <div className="absolute top-1/2 -right-8 rounded-full bg-blue-600 px-6 py-5 text-center text-white shadow-xl">

              <h2 className="text-3xl font-bold">

                10+

              </h2>

              <p className="text-sm">

                Years Experience

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}