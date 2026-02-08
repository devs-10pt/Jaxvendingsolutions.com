/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MachineShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* First Machine */}
          <motion.div
            initial={{ opacity: 0, x: -50 } as any}
            animate={isInView ? { opacity: 1, x: 0 } as any : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            className="relative group"
          >
            {/* Glow effect - desktop/tablet only */}
            <div className="absolute inset-0 hidden md:block">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] group-hover:blur-[100px] transition-all duration-700 animate-pulse-slow" />
              <div className="absolute inset-0 bg-accent/10 blur-[60px] group-hover:blur-[80px] transition-all duration-700 delay-150 animate-pulse-slow" />
            </div>

            {/* Image container with floating animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              } as any}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              } as any}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium-lg group-hover:shadow-2xl transition-shadow duration-500">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <img
                  src="/vending-machine-1.png"
                  alt="Premium vending machine"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Second Machine */}
          <motion.div
            initial={{ opacity: 0, x: 50 } as any}
            animate={isInView ? { opacity: 1, x: 0 } as any : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
            className="relative group"
          >
            {/* Glow effect - desktop/tablet only */}
            <div className="absolute inset-0 hidden md:block">
              <div className="absolute inset-0 bg-accent/20 blur-[80px] group-hover:blur-[100px] transition-all duration-700 animate-pulse-slow" />
              <div className="absolute inset-0 bg-primary/10 blur-[60px] group-hover:blur-[80px] transition-all duration-700 delay-150 animate-pulse-slow" />
            </div>

            {/* Image container with floating animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              } as any}
              transition={{
                duration: 6,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              } as any}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium-lg group-hover:shadow-2xl transition-shadow duration-500">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-primary/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <img
                  src="/vending-machine-2.png"
                  alt="Modern vending solution"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
