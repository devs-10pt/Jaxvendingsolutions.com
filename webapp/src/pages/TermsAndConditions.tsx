import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <div className="text-muted-foreground space-y-6">
            {/* Content will be added by user */}
            <p className="text-base sm:text-lg">
              Terms and conditions content coming soon...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
