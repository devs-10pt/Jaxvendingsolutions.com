/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wifi, Package, Zap, ArrowRight } from "lucide-react";

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
