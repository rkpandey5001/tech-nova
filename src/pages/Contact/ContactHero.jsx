// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// export default function ContactHero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#071739] via-[#0A4FAF] to-[#1D9BF0] py-28">

//       <div className="absolute inset-0">

//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

//         <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

//       </div>

//       <div className="container relative mx-auto px-5 text-center">

//         <span className="rounded-full bg-white/20 px-6 py-2 text-white font-semibold backdrop-blur">
//           📞 Contact Our Team
//         </span>

//         <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
//           Let's Build Something
//           <span className="block text-cyan-300">
//             Amazing Together
//           </span>
//         </h1>

//         <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
//           Have a project idea, need a software solution, or want a free consultation?
//           Our experts are here to help you transform your business with modern technology.
//         </p>

//         <Link to="#contact-form">
//           <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-100">
//             Get Free Consultation
//             <FaArrowRight />
//           </button>
//         </Link>

//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaWhatsapp } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071739] via-[#0A4FAF] to-[#1D9BF0] py-24 lg:py-32">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div>
            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-white font-semibold backdrop-blur">
              📞 Contact Our Team
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              Let's Build Your
              <span className="block text-cyan-300">Next Big Project</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Have an idea? Need a website, mobile app, ERP, AI solution or
              digital marketing service? Our experts are ready to help your
              business grow.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link to="#contact-form">
                <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-blue-100 duration-300">
                  Get Free Consultation
                </button>
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-700 duration-300">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </a>
            </div>

            {/* Quick Contact */}

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FaPhoneAlt className="text-3xl text-cyan-300" />

                <div>
                  <p className="text-sm text-blue-100">Call Anytime</p>

                  <h3 className="font-bold text-white">+91 8299141477</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FaEnvelope className="text-3xl text-cyan-300" />

                <div>
                  <p className="text-sm text-blue-100">Email Us</p>

                  <h3 className="font-bold text-white">info@yourcompany.com</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="relative">
            {/* <img
              src="/images/contact/contact-hero.webp"
              alt="Contact"
              className="rounded-[35px] shadow-2xl"
            /> */}

            {/* Card 1 */}

            <div className="absolute -left-8 top-10 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <FaHeadset className="text-3xl text-blue-600" />

                <div>
                  <h3 className="font-bold">24/7 Support</h3>

                  <p className="text-sm text-slate-500">
                    We're Always Available
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="absolute -right-8 bottom-10 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">
              <h3 className="text-3xl font-bold text-blue-700">500+</h3>

              <p className="text-slate-500">Successful Projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <h2 className="text-4xl font-bold text-white">500+</h2>

            <p className="mt-2 text-blue-100">Projects Delivered</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <h2 className="text-4xl font-bold text-white">100+</h2>

            <p className="mt-2 text-blue-100">Happy Clients</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <h2 className="text-4xl font-bold text-white">24/7</h2>

            <p className="mt-2 text-blue-100">Customer Support</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <h2 className="text-4xl font-bold text-white">99%</h2>

            <p className="mt-2 text-blue-100">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
