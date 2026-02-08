/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Wrench, TrendingUp } from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, icon, title, description, index }: ProcessStepProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 } as any}
      animate={isInView ? { opacity: 1, y: 0 } as any : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] } as any}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number badge */}
      <div className="mb-4 sm:mb-6 relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-display font-bold text-primary">{number}</span>
        </div>
        {/* Icon overlay */}
        <div className="absolute -bottom-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-2 sm:mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm px-2">
        {description}
      </p>

      {/* Connecting line (hidden on mobile, shown on desktop for non-last items) */}
      {index < 2 ? (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
      ) : null}
    </motion.div>
  );
};

export const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12 sm:py-16 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 } as any}
          animate={isInView ? { opacity: 1, y: 0 } as any : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 sm:mb-6 px-2">
            Simple, Seamless,{" "}
            <span className="text-primary">Stress-Free</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            From initial contact to ongoing service, we handle everything so you don't have to.
          </p>
        </motion.div>

        {/* Process steps grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 relative">
          <ProcessStep
            number={1}
            icon={<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="Contact Us"
            description="Tell us about your space and needs. We'll provide a custom solution tailored to your community."
            index={0}
          />
          <ProcessStep
            number={2}
            icon={<Wrench className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="We Install"
            description="Professional setup with zero hassle. Fully Stocked and operating machine in no time."
            index={1}
          />
          <ProcessStep
            number={3}
            icon={<TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="You Profit"
            description="We manage maintenance, restocking, and customer support 24/7. Your location receives a Free and Modern Machine."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};
