/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wifi, Package, Zap, ArrowRight, Cpu, ShoppingCart, Thermometer } from "lucide-react";

const Machines = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cashless Payments",
      description: "Apple Pay, Google Pay, and all major credit cards supported",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Cloud Connected",
      description: "Real-time monitoring and remote diagnostics",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Inventory",
      description: "Automatic stock tracking with predictive restocking",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "LED lighting and eco-friendly refrigeration systems",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* AI Vending Machines Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
              AI Vending Machine <span className="text-primary">Models</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Powered By The Newest Technology.</p>
          </motion.div>

          {/* Machine Models Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mini 360 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/mini-360-spec.png"
                      alt="Mini 360 Smart Vending Machine"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Mini 360
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Compact smart vending solution perfect for smaller spaces. 6 shelves with mixed capacity for bottles and cans.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 252 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>22.8" × 26" × 76" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>24H Smart Vending Technology</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Plus 440 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/plus-440.png"
                      alt="Plus 440 Smart Vending Machine"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Plus 440
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Mid-size AI vending with enhanced capacity. Perfect for offices and small retail locations.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 324 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>27.2" × 27" × 76.6" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span>Advanced Refrigeration System</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Pro 542 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/pro-542-spec.png"
                      alt="Pro 542 Smart Vending Machine"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Pro 542
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Professional-grade AI vending with expanded capacity. Ideal for high-traffic areas and campuses.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 378 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>29.5" × 25.6" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>AI Product Recognition</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Max 620 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/max-620.png"
                      alt="Max 620 Smart Vending Machine"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Max 620
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      High-capacity smart vending for demanding environments. Maximum storage with intelligent management.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 420 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>31.5" × 26.4" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-primary" />
                      <span>Cloud-Connected Operations</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Max 620S */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/max-620s.png"
                      alt="Max 620S Smart Vending Machine with Digital Screen"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Max 620S
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Premium model with integrated digital display screen for video marketing. Same capacity as Max 620 with enhanced advertising capabilities.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 420 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>31.5" × 26.4" × 85.8" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>Built-in Digital Display Screen</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Ultra 1200 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                {/* Machine Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/ultra-1200.png"
                      alt="Ultra 1200 Smart Vending Machine"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Ultra 1200
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Enterprise double-door solution for maximum capacity. Dual-zone cooling for unmanned stores and factories.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>≈ 756 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>53.9" × 28.0" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span>12 shelves, double-door design</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Technology Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="mt-20"
          >
            <Card className="p-10 lg:p-12 glass-light dark:glass shadow-premium">
              <h3 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6 text-center">
                Jax Vending Solutions Partners With The Best Machines In The Industry
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    99% AI Recognition Accuracy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced computer vision technology identifies products with 99% accuracy, enabling completely cashier-free shopping experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Package className="w-6 h-6 text-primary" />
                    Smart Inventory Management
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time stock tracking with predictive analytics ensures popular items never run out and reduces waste.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-primary" />
                    Seamless Cashless Payments
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Accept all major credit cards, Apple Pay, Google Pay, and contactless payments for maximum convenience.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Wifi className="w-6 h-6 text-primary" />
                    Cloud-Connected Operations
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Remote monitoring, diagnostics, and management through our intuitive mobile app and web dashboard.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
              Ready to upgrade your space?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Let's discuss which machine configuration is perfect for your location.
            </p>
            <Button
              size="lg"
              className="text-base px-10 py-6 shadow-premium-lg hover:scale-105 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Machines;
