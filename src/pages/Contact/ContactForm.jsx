// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaBuilding,
//   FaPaperPlane,
// } from "react-icons/fa";

// export default function ContactForm() {
//   return (
//     <section
//       id="contact-form"
//       className="bg-slate-50 py-24"
//     >
//       <div className="container mx-auto px-5">

//         <div className="grid gap-12 lg:grid-cols-2">

//           {/* ================= Form ================= */}

//           <div className="rounded-3xl bg-white p-8 shadow-xl">

//             <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
//               SEND MESSAGE
//             </span>

//             <h2 className="mt-6 text-4xl font-bold text-slate-900">
//               Let's Discuss Your Project
//             </h2>

//             <p className="mt-4 text-slate-500 leading-7">
//               Fill out the form and our experts will contact you within
//               24 hours.
//             </p>

//             <form className="mt-10 space-y-6">

//               <div className="relative">

//                 <FaUser className="absolute left-5 top-5 text-slate-400" />

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full rounded-xl border border-slate-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
//                 />

//               </div>

//               <div className="relative">

//                 <FaEnvelope className="absolute left-5 top-5 text-slate-400" />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full rounded-xl border border-slate-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
//                 />

//               </div>

//               <div className="relative">

//                 <FaPhoneAlt className="absolute left-5 top-5 text-slate-400" />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full rounded-xl border border-slate-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
//                 />

//               </div>

//               <div className="relative">

//                 <FaBuilding className="absolute left-5 top-5 text-slate-400" />

//                 <input
//                   type="text"
//                   placeholder="Company Name"
//                   className="w-full rounded-xl border border-slate-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
//                 />

//               </div>

//               <select className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600">

//                 <option>Select Service</option>

//                 <option>Website Development</option>

//                 <option>Mobile App Development</option>

//                 <option>Hospital ERP</option>

//                 <option>School ERP</option>

//                 <option>HRMS Software</option>

//                 <option>Inventory Management</option>

//                 <option>E-Commerce Website</option>

//                 <option>AI Chatbot</option>

//                 <option>Digital Marketing</option>

//               </select>

//               <select className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600">

//                 <option>Estimated Budget</option>

//                 <option>Below ₹25,000</option>

//                 <option>₹25,000 - ₹50,000</option>

//                 <option>₹50,000 - ₹1,00,000</option>

//                 <option>₹1,00,000 - ₹5,00,000</option>

//                 <option>Above ₹5,00,000</option>

//               </select>

//               <textarea
//                 rows="5"
//                 placeholder="Tell us about your project..."
//                 className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
//               ></textarea>

//               <input
//                 type="file"
//                 className="w-full rounded-xl border border-dashed border-blue-300 p-4"
//               />

//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
//               >
//                 <FaPaperPlane />

//                 Send Message
//               </button>

//             </form>

//           </div>

//           {/* ================= Google Map ================= */}

//           <div>

//             <div className="rounded-3xl overflow-hidden shadow-xl">

//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps?q=Indore,Madhya%20Pradesh&output=embed"
//                 width="100%"
//                 height="650"
//                 loading="lazy"
//                 className="border-0"
//               ></iframe>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section id="contact-form" className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* ================= Left Form ================= */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
              SEND MESSAGE
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Let's Discuss Your Project
            </h2>

            <p className="mt-4 text-slate-500 leading-7">
              Fill out the form below and our team will contact you within 24
              hours.
            </p>

            <form className="mt-10 space-y-6">
              {/* Name */}

              <div className="relative">
                <FaUser className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
                />
              </div>

              {/* Email */}

              <div className="relative">
                <FaEnvelope className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
                />
              </div>

              {/* Phone */}

              <div className="relative">
                <FaPhoneAlt className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
                />
              </div>

              {/* Company */}

              <div className="relative">
                <FaBuilding className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-blue-600"
                />
              </div>

              {/* Service */}

              <select className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-blue-600">
                <option>Select Service</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>Hospital ERP</option>
                <option>School ERP</option>
                <option>HRMS Software</option>
                <option>Inventory Management</option>
                <option>E-Commerce Website</option>
                <option>AI Chatbot</option>
                <option>Digital Marketing</option>
              </select>

              {/* Budget */}

              <select className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-blue-600">
                <option>Project Budget</option>
                <option>Below ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>
                <option>₹50,000 - ₹1,00,000</option>
                <option>₹1,00,000 - ₹5,00,000</option>
                <option>Above ₹5,00,000</option>
              </select>

              {/* Message */}

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-blue-600"
              ></textarea>

              {/* File Upload */}

              <div className="rounded-xl border-2 border-dashed border-blue-300 p-6 text-center">
                <p className="text-gray-600">Upload Requirement / Document</p>

                <input type="file" className="mt-4" />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>


          <div className="space-y-8">
            {/* Office Card */}

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-10 text-white shadow-xl">
              <h2 className="text-4xl font-bold">Visit Our Office</h2>

              <p className="mt-6 leading-8 text-blue-100">
                We'd love to hear about your project. Visit us or connect online
                for a free consultation.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-bold">Address</h4>

                    <p className="text-blue-100">
                      Near Mirzahadipura Chowk, Mirzahadipura, Mau, Uttar
                      Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-bold">Phone</h4>

                    <p className="text-blue-100">+91 8299141477, 7570072575</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-bold">Email</h4>

                    <p className="text-blue-100">info@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-bold">Working Hours</h4>

                    <p className="text-blue-100">
                      Monday - Saturday
                      <br />
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}

              <div className="mt-10 flex gap-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-blue-700"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-pink-600"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-blue-700"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-green-600"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Google Map */}

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Indore,Madhya%20Pradesh&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
