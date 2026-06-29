import {
  FaRobot,
  FaHospital,
  FaUserTie,
  FaSchool,
  FaShoppingCart,
  FaWarehouse,
} from "react-icons/fa";

const solutionTabs = [
  {
    id: 1,
    slug: "ai-solutions",
    icon: <FaRobot />,
    title: "AI Solutions",
    image: "/images/solutions/ai.webp",
    description:
      "AI-powered applications with ChatGPT integration, automation, analytics and machine learning.",

    points: [
      "ChatGPT Integration",
      "AI Chatbot",
      "Business Automation",
      "Voice Assistant",
      "Recommendation Engine",
      "AI Analytics",
    ],
  },

  {
    id: 2,
    slug: "hospital-management",
    icon: <FaHospital />,
    title: "Hospital ERP",
    image: "/images/solutions/hospital.webp",
    description:
      "Complete Hospital Management System for clinics, hospitals and healthcare organizations.",

    points: [
      "Patient Management",
      "Doctor Panel",
      "OPD & IPD",
      "Laboratory",
      "Pharmacy",
      "Billing",
    ],
  },

  {
    id: 3,
    slug: "hrms",
    icon: <FaUserTie />,
    title: "HRMS",
    image: "/images/solutions/hrms.webp",
    description:
      "Human Resource Management System with payroll, attendance and employee management.",

    points: [
      "Employee Management",
      "Attendance",
      "Payroll",
      "Leave Management",
      "Recruitment",
      "Performance Tracking",
    ],
  },

  {
    id: 4,
    slug: "school-erp",
    icon: <FaSchool />,
    title: "School ERP",
    image: "/images/solutions/school.webp",
    description:
      "Complete School ERP Software for schools, colleges and educational institutes.",

    points: [
      "Student Management",
      "Attendance",
      "Fees",
      "Examination",
      "Transport",
      "Library",
    ],
  },

  {
    id: 5,
    slug: "ecommerce",
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    image: "/images/solutions/ecommerce.webp",
    description:
      "Professional eCommerce website with payment gateway and order management.",

    points: [
      "Product Management",
      "Payment Gateway",
      "Shopping Cart",
      "Order Tracking",
      "Coupons",
      "Inventory",
    ],
  },

  {
    id: 6,
    slug: "inventory-management",
    icon: <FaWarehouse />,
    title: "Inventory Management",
    image: "/images/solutions/inventory.webp",
    description:
      "Inventory & Warehouse Management Software for manufacturers and retailers.",

    points: [
      "Stock Management",
      "Barcode Scanner",
      "Purchase",
      "Sales",
      "Suppliers",
      "Reports",
    ],
  },
];

export default solutionTabs;
