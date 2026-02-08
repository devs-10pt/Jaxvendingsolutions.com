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

      <div className="max-w-5xl mx-auto relative">
        <div
          ref={ref}
          className="flex flex-col gap-12 lg:gap-16 items-center"
        >
          {/* First Machine - Florida Crest (smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            animate={isInView ? { opacity: 1, y: 0 } as any : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            className="relative group w-full max-w-md"
          >
            {/* Glow effect */}
            <div className="absolute inset-0">
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
              <img
                src="/vending-machine-1.png"
                alt="Premium vending machine with Florida crest"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Second Machine - Full size */}
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            animate={isInView ? { opacity: 1, y: 0 } as any : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
            className="relative group w-full"
          >
            {/* Glow effect */}
            <div className="absolute inset-0">
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
              <img
                src="/vending-machine-2.png"
                alt="Modern vending solution"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
