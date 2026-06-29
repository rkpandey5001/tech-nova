//

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
//   FaWhatsapp,
//   FaGlobe,
// } from "react-icons/fa";

// const contactInfo = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Call Us",
//     value: "+91 98765 43210",
//     desc: "Mon - Sat (9:00 AM - 7:00 PM)",
//     color: "from-blue-600 to-cyan-500",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email Us",
//     value: "info@yourcompany.com",
//     desc: "Response within 24 Hours",
//     color: "from-indigo-600 to-blue-500",
//   },
//   {
//     icon: <FaWhatsapp />,
//     title: "WhatsApp",
//     value: "+91 98765 43210",
//     desc: "Quick Support Available",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Office Address",
//     value: "Indore, Madhya Pradesh",
//     desc: "India",
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     icon: <FaClock />,
//     title: "Business Hours",
//     value: "Mon - Sat",
//     desc: "09:00 AM - 07:00 PM",
//     color: "from-violet-500 to-indigo-600",
//   },
//   {
//     icon: <FaGlobe />,
//     title: "Website",
//     value: "www.yourcompany.com",
//     desc: "Visit Our Website",
//     color: "from-sky-500 to-blue-500",
//   },
// ];

// const ContactInfo = () => {
//   return (
//     <section className="bg-white py-24">
//       <div className="container mx-auto px-5">
//         <div className="text-center">
//           <span className="inline-block rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
//             CONTACT INFORMATION
//           </span>

//           <h2 className="mt-6 text-5xl font-bold text-slate-900">
//             Multiple Ways To Reach Us
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-slate-500">
//             Choose your preferred way to connect with our experts. We're always
//             happy to help you.
//           </p>
//         </div>

//         <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {contactInfo.map((item, index) => (
//             <div
//               key={index}
//               className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
//             >
//               <div
//                 className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-4xl text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
//               >
//                 {item.icon}
//               </div>

//               <h3 className="mt-8 text-2xl font-bold text-slate-800">
//                 {item.title}
//               </h3>

//               <p className="mt-4 text-lg font-semibold text-blue-700">
//                 {item.value}
//               </p>

//               <p className="mt-2 text-slate-500">{item.desc}</p>

//               <button className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
//                 Contact →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-5">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* Left */}

          <div>
            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
              CONTACT DETAILS
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Let's Start a Conversation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you have a project idea, need technical consultation, or
              want to discuss your business requirements, our team is always
              ready to help.
            </p>

            {/* Contact List */}

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Phone Number</h4>
                  <p className="mt-1 text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FaWhatsapp size={24} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">WhatsApp</h4>
                  <p className="mt-1 text-slate-600">
                    +91 8299141477,7570072575
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Email Address</h4>
                  <p className="mt-1 text-slate-600">info@yourcompany.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Office Address</h4>
                  <p className="mt-1 text-slate-600">
                    Near Mirzahadipura Chowk, Mirzahadipura, Mau,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <FaClock size={22} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Working Hours</h4>
                  <p className="mt-1 text-slate-600">
                    Monday - Saturday
                    <br />
                    09:00 AM - 07:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <FaGlobe size={22} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Website</h4>
                  <p className="mt-1 text-slate-600">www.yourcompany.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div>
            <img
              src="/images/contact/contact-info.webp"
              alt="Contact"
              className="w-full rounded-[30px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
