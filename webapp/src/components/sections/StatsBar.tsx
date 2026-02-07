/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const StatCounter = ({ end, label, suffix = "", prefix = "", delay = 0 }: StatProps) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 } as any}
      animate={isInView ? { opacity: 1, y: 0 } as any : {}}
      transition={{ duration: 0.6, delay: delay / 1000 } as any}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export const StatsBar = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatCounter end={50} suffix="+" label="Active Locations" delay={0} />
          <StatCounter end={99.8} suffix="%" label="Uptime Guarantee" delay={100} />
          <StatCounter end={1000} suffix="+" label="Products Available" delay={200} />
          <StatCounter end={24} suffix="/7" label="Support Available" delay={300} />
        </div>
      </div>
    </section>
  );
};
