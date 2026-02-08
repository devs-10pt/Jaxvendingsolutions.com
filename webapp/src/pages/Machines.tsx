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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-tight text-foreground mb-6"
          >
            Premium Smart{" "}
            <span className="text-primary">Vending Machines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            State-of-the-art technology meets elegant design. Our machines are
            built for reliability, convenience, and maximum customer satisfaction.
          </motion.p>
        </div>
      </section>

      {/* Machine Image Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 } as any}
            whileInView={{ opacity: 1, scale: 1 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-premium-lg"
          >
            <img
              src="/vending-machine-hero.png"
              alt="Premium Smart Vending Machine"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-4">
              Advanced Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every machine is equipped with cutting-edge technology designed for
              reliability and user satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 } as any}
                whileInView={{ opacity: 1, y: 0 } as any}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] } as any}
                viewport={{ once: true } as any}
              >
                <Card className="p-6 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-300 group">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powered by advanced AI technology with 99% product identification accuracy for completely cashier-free shopping experiences.
            </p>
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
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20 overflow-hidden">
                {/* Machine Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src="/machines/mini-360.jpg"
                    alt="HAHA VENDING-Mini 360"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      HAHA VENDING-Mini 360
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-4">$2,999</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Compact AI-powered vending solution perfect for smaller spaces. Features smart inventory tracking and cashless payments.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>AI Visual Recognition (99% accuracy)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>360 Product Capacity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span>Real-Time Inventory Management</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Pro 542 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20 overflow-hidden">
                {/* Machine Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src="/machines/pro-542.jpg"
                    alt="HAHA VENDING-Pro 542"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      HAHA VENDING-Pro 542
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-4">$4,999</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Professional-grade AI vending solution with expanded capacity. Ideal for offices, schools, and high-traffic areas.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>Advanced AI Product Recognition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>542 Product Capacity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>Contactless Payment System</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* DC-620Z Combo */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-8 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                    DC-620Z Smart Combo
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    High-capacity combo vending machine for fresh food, snacks, and cold beverages. Perfect for 24/7 convenience locations.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>528 Bottle Capacity (Refrigerated)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span>Multi-Category Product Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-primary" />
                    <span>APP Management System</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Large Smart Machine */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-8 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                    Large Smart Vending
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Enterprise solution for specialty operators, unmanned supermarkets, and factories. Maximum capacity with AI-powered efficiency.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>864 Bottle Capacity (Cooled)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span>Self-Serve AI Recognition System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <span>Grab and Go Shopping Experience</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 245-Capacity Model */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-8 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                    AI Smart 245
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Optimized for offices, schools, and gyms. Compact footprint with smart features and contactless payment technology.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <span>245 Product Capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    <span>Contactless Payment Options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span>Real-Time Inventory Tracking</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Smart Cooler */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-8 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group border-2 border-transparent hover:border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                    Smart Cooler Vending
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Refrigerated AI vending solution for beverages and cold products. Energy-efficient cooling with smart temperature control.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Advanced Refrigeration System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Energy Efficient Operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span>AI-Powered Computer Vision</span>
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
                What Makes Our AI Vending Machines Special?
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
