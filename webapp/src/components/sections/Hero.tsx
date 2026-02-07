/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 lg:py-0">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 } as any}
          animate={{ opacity: 1, y: 0 } as any}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] text-foreground">
              You provide the space.{" "}
              <span className="text-primary">We provide everything else.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Premium vending solutions for Jacksonville's finest hospitals, schools,
            and apartment communities. Smart machines, seamless service, zero hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="text-base px-8 py-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Machine visual placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 } as any}
          animate={{ opacity: 1, scale: 1 } as any}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
          className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-premium-lg"
        >
          {/* Premium gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/5" />

          {/* Glass effect overlay */}
          <div className="absolute inset-0 glass" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Center placeholder text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground text-sm font-medium">
              Premium Machine Visual
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 } as any}
        animate={{ opacity: 1 } as any}
        transition={{ duration: 1, delay: 1.2 } as any}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] } as any}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" } as any}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
