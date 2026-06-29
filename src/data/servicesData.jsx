import {
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaShoppingCart,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaGlobe />,
    title: "Website Development",
    image: "/images/services/web.webp",
    description:
      "Modern responsive business websites with SEO optimization.",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Fast Loading",
      "Admin Panel",
    ],
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Web Application",
    image: "/images/services/webapp.webp",
    description:
      "Custom web applications for startups and enterprises.",
    features: [
      "Dashboard",
      "Authentication",
      "Reports",
      "API Integration",
    ],
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    title: "Mobile App",
    image: "/images/services/mobile.webp",
    description:
      "Android & iOS applications using Flutter and React Native.",
    features: [
      "Android",
      "iOS",
      "Push Notification",
      "Play Store Deployment",
    ],
  },
  {
    id: 4,
    icon: <FaRobot />,
    title: "AI Solutions",
    image: "/images/services/ai.webp",
    description:
      "AI Chatbot, Automation and Machine Learning Solutions.",
    features: [
      "ChatGPT Integration",
      "Automation",
      "AI Chatbot",
      "Prediction",
    ],
  },
  {
    id: 5,
    icon: <FaCloud />,
    title: "Cloud Services",
    image: "/images/services/cloud.webp",
    description:
      "AWS, Azure and Google Cloud deployment.",
    features: [
      "AWS",
      "Docker",
      "CI/CD",
      "Monitoring",
    ],
  },
  {
    id: 6,
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    image: "/images/services/ecommerce.webp",
    description:
      "Complete online shopping platform with payment gateway.",
    features: [
      "Cart",
      "Payment Gateway",
      "Order Tracking",
      "Inventory",
    ],
  },
];

export default services;