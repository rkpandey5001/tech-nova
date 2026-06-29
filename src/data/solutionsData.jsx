import {
  FaHospital,
  FaGraduationCap,
  FaBuilding,
  FaRobot,
  FaShoppingCart,
  FaUserTie,
  FaWarehouse,
  FaMobileAlt,
} from "react-icons/fa";

const solutions = [
  {
    id: 1,
    title: "Hospital Management",
    icon: <FaHospital />,
    image: "/images/solutions/hospital.webp",
    description:
      "Complete hospital ERP including OPD, IPD, Pharmacy, Laboratory and Billing.",
    features: [
      "Patient Management",
      "Doctor Panel",
      "Billing",
      "Laboratory",
      "Appointment",
      "Reports",
    ],
  },

  {
    id: 2,
    title: "School ERP",

    icon: <FaGraduationCap />,

    image: "/images/solutions/school.webp",

    description:
      "Complete School ERP with Student, Teacher and Parent Management.",

    features: [
      "Attendance",
      "Fees",
      "Result",
      "Transport",
      "Library",
      "Notice Board",
    ],
  },

  {
    id: 3,

    title: "CRM Software",

    icon: <FaBuilding />,

    image: "/images/solutions/crm.webp",

    description:
      "Lead Management and Customer Relationship System.",

    features: [
      "Lead",
      "Sales",
      "Follow Up",
      "Reports",
      "Dashboard",
      "Analytics",
    ],
  },

  {
    id: 4,

    title: "AI Chatbot",

    icon: <FaRobot />,

    image: "/images/solutions/chatbot.webp",

    description:
      "AI powered chatbot with ChatGPT integration.",

    features: [
      "OpenAI",
      "Automation",
      "Voice",
      "Analytics",
      "24x7",
      "Support",
    ],
  },

  {
    id: 5,

    title: "E-Commerce",

    icon: <FaShoppingCart />,

    image: "/images/solutions/ecommerce.webp",

    description:
      "Online shopping platform with payment gateway.",

    features: [
      "Products",
      "Orders",
      "Coupons",
      "Inventory",
      "Payment",
      "Reports",
    ],
  },

  {
    id: 6,

    title: "HRMS",

    icon: <FaUserTie />,

    image: "/images/solutions/hrms.webp",

    description:
      "Employee Attendance, Payroll and Leave Management.",

    features: [
      "Payroll",
      "Attendance",
      "Leave",
      "Employee",
      "Dashboard",
      "Reports",
    ],
  },

  {
    id: 7,

    title: "Inventory",

    icon: <FaWarehouse />,

    image: "/images/solutions/inventory.webp",

    description:
      "Inventory and Warehouse Management Software.",

    features: [
      "Stock",
      "Barcode",
      "Purchase",
      "Sales",
      "Reports",
      "Analytics",
    ],
  },

  {
    id: 8,

    title: "Mobile App",

    icon: <FaMobileAlt />,

    image: "/images/solutions/mobile.webp",

    description:
      "Android & IOS Mobile Applications.",

    features: [
      "Android",
      "IOS",
      "Flutter",
      "Notification",
      "API",
      "Firebase",
    ],
  },
];

export default solutions;