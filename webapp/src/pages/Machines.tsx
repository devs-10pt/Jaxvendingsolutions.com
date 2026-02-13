/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wifi, Package, Zap, ArrowRight, Cpu, ShoppingCart, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Machines = () => {
  const navigate = useNavigate();
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
    <>
      <SEO
        title="AI Vending Machine Models - Smart Vending Solutions"
        description="Explore our premium AI-powered vending machines for Jacksonville businesses. From compact Mini 360 to enterprise Ultra 1200 models. Smart inventory, cashless payments, and 24/7 cloud monitoring for hospitals, schools, and offices."
        keywords={[
          "AI vending machines Jacksonville",
          "smart vending machines Florida",
          "vending machine models",
          "cashless vending solutions",
          "cloud connected vending machines",
          "hospital vending equipment",
          "school vending machines",
          "office break room vending",
          "vending machines Duval County",
          "commercial vending machines",
          "touchless payment vending",
        ]}
        canonical="/machines"
      />
      <div className="min-h-screen">
      <Navigation />

      {/* AI Vending Machines Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section - Mobile & Tablet Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 } as any}
            animate={{ opacity: 1, scale: 1 } as any}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
            className="flex justify-center mb-8 sm:mb-12 lg:hidden pt-4"
          >
            <img
              src="/fulllogo-transparent.png"
              alt="Jax Vending Solutions Logo"
              className="h-[170px] w-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 sm:mb-6 px-2">
              AI Vending Machine <span className="text-primary">Models</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">Powered By The Newest Technology.</p>
          </motion.div>

          {/* Traffic Features Section */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
              className="flex flex-col items-center"
            >
              <div className="relative w-full group rounded-2xl overflow-hidden mb-4">
                <img
                  src="/traffic-image-1.png"
                  alt="High Traffic Vending Solution"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] transition-all duration-500"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">Premium Vending Experience</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">Together we can provide the right machine for your space and needs.</p>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
              className="flex flex-col items-center"
            >
              <div className="relative w-full group rounded-2xl overflow-hidden mb-4">
                <img
                  src="/traffic-image-2.png"
                  alt="Smart Inventory Management"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] transition-all duration-500"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">Intelligent Operations</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">Jax Vending Solution's provide seamless payment processing for high traffic locations.</p>
            </motion.div>
          </div>

          {/* HAHA Vending Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 } as any}
            whileInView={{ opacity: 1, scale: 1 } as any}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="flex justify-center mb-12 sm:mb-16 lg:mb-20"
          >
            <a
              href="https://hahavending.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <img
                src="/haha-vending-logo.png"
                alt="HAHA Vending"
                className="h-17 sm:h-20 md:h-24 w-auto hover:scale-110 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
              />
            </a>
          </motion.div>

          {/* Machine Models Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Mini 360 */}
            <motion.div
              initial={{ opacity: 0, y: 40 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <Card className="p-0 h-full glass-light dark:glass shadow-premium hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-500 group overflow-hidden border-2 border-transparent hover:border-primary/30">
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/mini-360-spec.png"
                      alt="Mini 360 Smart Vending Machine"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Mini 360
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      Compact smart vending solution perfect for smaller spaces. 6 shelves with mixed capacity for bottles and cans.
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 252 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>22.8" × 26" × 76" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/plus-440.png"
                      alt="Plus 440 Smart Vending Machine"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Plus 440
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Mid size AI vending with enhanced capacity. Perfect for offices and small retail locations.</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 324 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>27.2" × 27" × 76.6" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/pro-542-spec.png"
                      alt="Pro 542 Smart Vending Machine"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Pro 542
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Professional grade AI vending with expanded capacity. Ideal for high traffic areas and campuses.</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 378 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>29.5" × 25.6" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/max-620.png"
                      alt="Max 620 Smart Vending Machine"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Max 620
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">High capacity smart vending for demanding environments. Maximum storage with intelligent management.</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 420 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>31.5" × 26.4" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/max-620s.png"
                      alt="Max 620S Smart Vending Machine with Digital Screen"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Max 620S
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      Premium model with integrated digital display screen for video marketing. Same capacity as Max 620 with enhanced advertising capabilities.
                    </p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 420 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>31.5" × 26.4" × 85.8" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6">
                  <div className="relative h-full rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <img
                      src="/machines/ultra-1200.png"
                      alt="Ultra 1200 Smart Vending Machine"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 text-foreground">
                      Ultra 1200
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Enterprise double door solution for maximum capacity. Dual zone cooling for unmanned stores and factories.</p>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>≈ 756 bottles of beverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>53.9" × 28.0" × 79.5" (W×D×H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>12 shelves, double-door design</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* More Partners Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 sm:mb-6 px-2">
              More Jax Vending Solution <span className="text-primary">Partners</span>
            </h2>
          </motion.div>

          {/* Micro Mart Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 } as any}
            whileInView={{ opacity: 1, scale: 1 } as any}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="flex justify-center mb-12 sm:mb-16 lg:mb-20"
          >
            <a
              href="https://www.micromart.com/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <img
                src="/micro-mart-logo.png"
                alt="Micro Mart"
                className="h-40 sm:h-48 md:h-56 w-auto hover:scale-110 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
              />
            </a>
          </motion.div>

          {/* Additional Partner Logos */}
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {/* Partner Logo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 } as any}
              whileInView={{ opacity: 1, scale: 1 } as any}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <a
                href="https://amsvendors.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <img
                  src="/partner-logo-1.png"
                  alt="Partner Logo 1"
                  className="h-24 sm:h-28 md:h-32 w-auto hover:scale-110 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                />
              </a>
            </motion.div>

            {/* Partner Logo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 } as any}
              whileInView={{ opacity: 1, scale: 1 } as any}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
              viewport={{ once: true } as any}
            >
              <a
                href="https://www.craneconvenience.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <img
                  src="/partner-logo-2.png"
                  alt="Partner Logo 2"
                  className="h-24 sm:h-28 md:h-32 w-auto hover:scale-110 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                />
              </a>
            </motion.div>
          </div>

          {/* Technology Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="mt-12 sm:mt-16 lg:mt-20"
          >
            <Card className="p-6 sm:p-8 lg:p-12 glass-light dark:glass shadow-premium">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-4 sm:mb-6 text-center px-2">
                Jax Vending Solutions Partners With The Best Machines In The Industry
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-10">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span>99% AI Recognition Accuracy</span>
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Advanced computer vision technology identifies products with 99% accuracy, enabling completely cashier-free shopping experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span>Smart Inventory Management</span>
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Real-time stock tracking with predictive analytics ensures popular items never run out and reduces waste.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span>Seamless Cashless Payments</span>
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Accept all major credit cards, Apple Pay, Google Pay, and contactless payments for maximum convenience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                    <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span>Cloud-Connected Operations</span>
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Remote monitoring, diagnostics, and management through our intuitive mobile app and web dashboard.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-4 sm:mb-6 px-2">
              Ready to upgrade your space?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
              Let's discuss which machine configuration is perfect for your location.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 min-h-[48px] shadow-premium-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Machines;
