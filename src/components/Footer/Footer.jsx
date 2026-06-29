import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top Footer */}

      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company */}

          <div>
            <img src="/images/logo/logo.png" alt="Logo" className="h-14" />

            <p className="mt-6 leading-8 text-gray-400">
              We build modern Websites, Web Applications, Enterprise Software,
              Mobile Apps and AI Solutions for startups and businesses
              worldwide.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>

            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-blue-400">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-blue-400">
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>

            <ul className="space-y-4">
              <li>Website Development</li>

              <li>Web Application</li>

              <li>Software Development</li>

              <li>Mobile App Development</li>

              <li>AI Solutions</li>

              <li>Cloud Deployment</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />

                <p>Mirzahadipura, Maunath Bhanjan, Mau, Uttar Pradesh, India</p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-blue-500 mt-1" />

                <p>+91-8299141477, 7570072575</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-blue-500 mt-1" />

                <p>info@yourcompany.com</p>
              </div>
            </div>

            {/* Newsletter */}

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 rounded-l-xl px-4 py-3 bg-slate-800 border border-slate-700 outline-none"
                />

                <button className="rounded-r-xl bg-blue-600 px-5 hover:bg-blue-700 duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-400">
              Terms & Conditions
            </Link>

            <Link to="/refund-policy" className="hover:text-blue-400">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
