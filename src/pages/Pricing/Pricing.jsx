import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";
import SoftwarePricing from "./SoftwarePricing";
import PricingIncludes from "./PricingIncludes";


export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <SoftwarePricing />
      <PricingIncludes />
    </>
  );
}