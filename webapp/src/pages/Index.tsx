import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { SmartTechnology } from "@/components/sections/SmartTechnology";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Process } from "@/components/sections/Process";
import { CTASection, Footer } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <SmartTechnology />
      <WhoWeServe />
      <Process />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
