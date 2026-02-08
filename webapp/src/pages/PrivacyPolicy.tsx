import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <div className="text-muted-foreground space-y-6">
            {/* Content will be added by user */}
            <p className="text-base sm:text-lg">
              Privacy policy content coming soon...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
