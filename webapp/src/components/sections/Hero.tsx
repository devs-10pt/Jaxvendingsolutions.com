/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24 sm:py-32 lg:py-0">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 } as any}
          animate={{ opacity: 1, y: 0 } as any}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.15] sm:leading-[1.1] text-foreground">
              You provide the space.{" "}
              <span className="text-primary">We provide everything else.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >Jax Vending Solutions provides Free Machines for Jacksonville's finest communities.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 min-h-[48px] shadow-premium hover:shadow-premium-lg transition-all duration-300 w-full sm:w-auto"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 min-h-[48px] shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Machine visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 } as any}
          animate={{ opacity: 1, scale: 1 } as any}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
          whileHover={{ scale: 1.02, y: -5 } as any}
          className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-lg group cursor-pointer"
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/5" />

          {/* Vending machine image */}
          <img
            src="/vending-machine-hero.png"
            alt="Premium Smart Vending Machine"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Green glow effect on hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />
          <div className="absolute inset-0 shadow-[0_0_60px_rgba(0,0,0,0)] group-hover:shadow-[0_0_60px_rgba(45,106,79,0.5)] transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
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
