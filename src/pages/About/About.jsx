import Hero from "./Hero";
import Company from "./Company";
import MissionVision from "./MissionVision";
import WhyChooseUs from "../Home/WhyChooseUs";
import Technologies from "../Home/Technologies";
import Testimonials from "../Home/Testimonials";
import CoreValues from "./CoreValues";
import Team from "./Team";
import Certifications from "./Certifications";
import CTA from "./CTA";

export default function About() {
  return (
    <>
      <Hero />
      <Company />
      <MissionVision />
      <WhyChooseUs />
      <CoreValues />
      <Technologies />
      <Team />
      <Certifications />
      <Testimonials />
      <CTA />
    </>
  );
}
