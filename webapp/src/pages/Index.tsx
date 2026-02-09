import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { SmartTechnology } from "@/components/sections/SmartTechnology";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { CTASection, Footer } from "@/components/sections/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Premium Vending Machine Services in Jacksonville, FL"
        description="Professional vending machine solutions for hospitals, schools, apartments, and offices in Jacksonville, Duval County, St. Johns County, and Nassau County. Smart machines with cashless payments, 24/7 support, and zero hassle setup."
        keywords={[
          "vending machine services Jacksonville FL",
          "Jacksonville vending solutions",
          "smart vending machines Duval County",
          "vending machines St. Johns County",
          "vending machines Nassau County",
          "hospital vending machines Jacksonville",
          "school vending services Jacksonville",
          "apartment vending machines Florida",
          "office vending solutions",
          "cashless vending machines",
          "AI vending machines Jacksonville",
          "premium vending services 32210",
          "vending machine installation Jacksonville",
        ]}
        canonical="/"
      />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Process />
        <WhoWeServe />
        <SmartTechnology />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
