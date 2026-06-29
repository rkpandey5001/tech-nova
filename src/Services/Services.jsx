import Hero from "./Hero";
import ServicesGrid from "./ServicesGrid";
import Process from "./Process";
import WhyChooseService from "./WhyChooseService";
// import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "../components/Footer/Footer";
import TrustedCompanies from "./TrustedCompanies";
// import TrustedCompanies from "./TrustedCompanies";

export default function Services() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <ServicesGrid />
      <Process />
      <WhyChooseService />

      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
