/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Package, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 } as any}
      animate={isInView ? { opacity: 1, y: 0 } as any : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] } as any}
    >
      <Card className="relative p-8 lg:p-10 h-full glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-500 group">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
      </Card>
    </motion.div>
  );
};

export const SmartTechnology = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 } as any}
          animate={isInView ? { opacity: 1, y: 0 } as any : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Intelligent Vending for{" "}
            <span className="text-primary">Modern Spaces</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technology meets white-glove service. Every machine is equipped with smart features that work seamlessly.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={<CreditCard className="w-8 h-8" />}
            title="Cashless Payments"
            description="Accept Apple Pay, Google Pay, and all major credit cards. Contactless convenience for every transaction."
            index={0}
          />
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="Real-Time Inventory"
            description="Smart sensors track stock levels automatically. We restock before you even notice, ensuring popular items never run out."
            index={1}
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8" />}
            title="Remote Monitoring"
            description="24/7 machine health monitoring with proactive maintenance. Issues are resolved before they impact your community."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};
