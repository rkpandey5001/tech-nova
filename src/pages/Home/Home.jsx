import Hero from "./Hero";
import TrustedCompanies from "./TrustedCompanies";
// import Features from "./Features";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Technologies from "./Technologies";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import ProjectCTA from "./ProjectCTA";
// import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustedCompanies />
      <WhyChooseUs />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <ProjectCTA />
      
    </>
  );
}
