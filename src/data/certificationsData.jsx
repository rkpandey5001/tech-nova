import {
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaMedal,
  FaStar,
} from "react-icons/fa";

const certifications = [
  {
    id: 1,
    icon: <FaCertificate />,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description:
      "Certified quality management system ensuring high development standards.",
  },

  {
    id: 2,
    icon: <FaAward />,
    title: "Startup India",
    subtitle: "Recognized Startup",
    description:
      "Government recognized startup delivering innovative software solutions.",
  },

  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "MSME Registered",
    subtitle: "Government Registered",
    description:
      "Registered MSME company providing secure and reliable IT services.",
  },

  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "500+ Projects",
    subtitle: "Successfully Delivered",
    description:
      "Completed enterprise software, websites and mobile applications.",
  },

  {
    id: 5,
    icon: <FaMedal />,
    title: "250+ Happy Clients",
    subtitle: "Worldwide",
    description:
      "Trusted by startups, enterprises and government organizations.",
  },

  {
    id: 6,
    icon: <FaStar />,
    title: "4.9 Client Rating",
    subtitle: "Excellent Reviews",
    description:
      "Highly rated software development company with long-term support.",
  },
];

export default certifications;
