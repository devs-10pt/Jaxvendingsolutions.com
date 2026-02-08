import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { SmartTechnology } from "@/components/sections/SmartTechnology";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { CTASection, Footer } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <WhoWeServe />
      <SmartTechnology />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
