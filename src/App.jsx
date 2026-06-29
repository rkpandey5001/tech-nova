import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Portfolio/ProjectDetails";

import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import SolutionDetails from "./pages/SolutionDetails/SolutionDetails";
import AISolutions from "./pages/SolutionDetails/AISolutions";
import HospitalERP from "./pages/SolutionDetails/HospitalERP";
import HRMS from "./pages/SolutionDetails/HRMS";
import SchoolERP from "./pages/SolutionDetails/SchoolERP";
import Ecommerce from "./pages/SolutionDetails/Ecommerce";
import Inventory from "./pages/SolutionDetails/Inventory";
import Pricing from "./pages/Pricing/Pricing";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionDetails />} />
        <Route path="/portfolio/:id" element={<ProjectDetails />} />
        <Route path="/solutions/ai-solutions" element={<AISolutions />} />
        <Route
          path="/solutions/hospital-management"
          element={<HospitalERP />}
        />
        <Route path="/solutions/hrms" element={<HRMS />} />
        <Route path="/solutions/school-erp" element={<SchoolERP />} />
        <Route path="/solutions/ecommerce" element={<Ecommerce />} />
        <Route path="/solutions/inventory-management" element={<Inventory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
