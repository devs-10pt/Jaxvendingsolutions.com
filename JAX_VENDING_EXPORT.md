# Jax Vending Solutions - Complete Website Export

## Overview

Premium vending machine company website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features elegant typography, smooth scroll animations, and a refined luxury minimalism aesthetic.

---

## Design System

### Typography
- **Display/Headlines**: Cormorant Garamond (elegant serif)
- **Body**: Instrument Sans (refined sans-serif)

### Colors
- **Primary**: Deep forest green (HSL: 160 45% 25%)
- **Background**: Warm cream (HSL: 40 25% 97%)
- **Accent**: Sage green
- **Full dark mode support**

### Visual Style
- Glass morphism effects
- Premium shadows
- Generous spacing
- Scroll-triggered animations with Framer Motion
- Smooth easing curves

---

## Project Structure

```
webapp/
├── src/
│   ├── pages/
│   │   └── Index.tsx          # Main landing page
│   ├── components/
│   │   └── sections/
│   │       ├── Hero.tsx       # Hero section with machine visual
│   │       ├── StatsBar.tsx   # Animated stats counters
│   │       ├── SmartTechnology.tsx  # Feature cards
│   │       ├── WhoWeServe.tsx # Service sectors
│   │       ├── Process.tsx    # 3-step process
│   │       └── CTASection.tsx # CTA and footer
│   ├── index.css              # Design system variables
│   └── main.tsx               # App entry point
├── tailwind.config.ts         # Tailwind theme config
└── index.html                 # HTML shell
```

---

## Complete Source Files

### 1. index.css (Design System)

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Premium Vending Machine Design System
   Refined luxury minimalism for Jax Vending Solutions
   All colors MUST be HSL.
*/

@layer base {
  :root {
    /* Light Mode - Warm, Premium Palette */
    --background: 40 25% 97%;
    --foreground: 20 15% 15%;

    --card: 0 0% 100%;
    --card-foreground: 20 15% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 20 15% 15%;

    --primary: 160 45% 25%;
    --primary-foreground: 40 25% 97%;

    --secondary: 35 30% 88%;
    --secondary-foreground: 20 15% 15%;

    --muted: 35 20% 92%;
    --muted-foreground: 20 10% 45%;

    --accent: 160 45% 25%;
    --accent-foreground: 40 25% 97%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 40 25% 97%;

    --border: 35 20% 88%;
    --input: 35 20% 88%;
    --ring: 160 45% 25%;

    --radius: 0.75rem;

    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 20 15% 15%;
    --sidebar-primary: 160 45% 25%;
    --sidebar-primary-foreground: 40 25% 97%;
    --sidebar-accent: 35 30% 88%;
    --sidebar-accent-foreground: 20 15% 15%;
    --sidebar-border: 35 20% 88%;
    --sidebar-ring: 160 45% 25%;
  }

  .dark {
    /* Dark Mode - Inverted, Sophisticated */
    --background: 20 15% 10%;
    --foreground: 40 25% 95%;

    --card: 20 15% 12%;
    --card-foreground: 40 25% 95%;

    --popover: 20 15% 12%;
    --popover-foreground: 40 25% 95%;

    --primary: 160 50% 65%;
    --primary-foreground: 20 15% 10%;

    --secondary: 20 15% 18%;
    --secondary-foreground: 40 25% 95%;

    --muted: 20 15% 18%;
    --muted-foreground: 40 10% 60%;

    --accent: 160 50% 65%;
    --accent-foreground: 20 15% 10%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 40 25% 95%;

    --border: 20 15% 22%;
    --input: 20 15% 22%;
    --ring: 160 50% 65%;

    --sidebar-background: 20 15% 12%;
    --sidebar-foreground: 40 25% 95%;
    --sidebar-primary: 160 50% 65%;
    --sidebar-primary-foreground: 20 15% 10%;
    --sidebar-accent: 20 15% 18%;
    --sidebar-accent-foreground: 40 25% 95%;
    --sidebar-border: 20 15% 22%;
    --sidebar-ring: 160 50% 65%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }

  /* Premium typography defaults */
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }

  p, a, button, span, div {
    @apply font-sans;
  }
}

@layer utilities {
  /* Glass morphism effect */
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-light {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  /* Premium shadows */
  .shadow-premium {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .shadow-premium-lg {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06);
  }
}
```

### 2. tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Instrument Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "shimmer-sweep": {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "50%": {
            backgroundPosition: "200% center",
          },
          "100%": {
            backgroundPosition: "-200% center",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "0.8",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer-sweep": "shimmer-sweep 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
```

### 3. Index.tsx (Main Page)

```typescript
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { SmartTechnology } from "@/components/sections/SmartTechnology";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Process } from "@/components/sections/Process";
import { CTASection, Footer } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <SmartTechnology />
      <WhoWeServe />
      <Process />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
```

### 4. Hero.tsx

```typescript
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] text-foreground">
              You provide the space.{" "}
              <span className="text-primary">We provide everything else.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Premium vending solutions for Jacksonville's finest hospitals, schools,
            and apartment communities. Smart machines, seamless service, zero hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
```

### 5. StatsBar.tsx

```typescript
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
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
```

### 6. SmartTechnology.tsx

```typescript
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
```

### 7. WhoWeServe.tsx

```typescript
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServeCardProps {
  title: string;
  headline: string;
  description: string;
  imagePosition: "left" | "right";
  index: number;
}

const ServeCard = ({ title, headline, description, imagePosition, index }: ServeCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center space-y-6"
    >
      <div className="inline-block">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          {title}
        </span>
      </div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
        {headline}
      </h3>
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
        {description}
      </p>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-premium-lg"
    >
      {/* Gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/15 to-background" />

      {/* Glass overlay */}
      <div className="absolute inset-0 glass" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </motion.div>
  );

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {imagePosition === "left" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
};

export const WhoWeServe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Serving Jacksonville's{" "}
            <span className="text-primary">Finest Communities</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium vending solutions tailored to the unique needs of your space.
          </p>
        </motion.div>

        {/* Service cards */}
        <ServeCard
          title="Hospitals & Healthcare"
          headline="Fuel the heroes who never stop"
          description="24/7 access to nutritious snacks, fresh meals, and essentials for staff, patients, and visitors. Our smart machines ensure healthy options are always available when it matters most."
          imagePosition="left"
          index={0}
        />

        <ServeCard
          title="Schools & Universities"
          headline="Healthy options for growing minds"
          description="From grab-and-go breakfasts to after-school snacks, we stock products that fuel learning and athletics. Cashless payments make it easy and safe for students of all ages."
          imagePosition="right"
          index={1}
        />

        <ServeCard
          title="Apartments & Communities"
          headline="Premium amenities that residents love"
          description="Elevate your property with modern vending that feels like a luxury convenience store. Late-night snacks, morning coffee, forgotten essentials—all at their fingertips."
          imagePosition="left"
          index={2}
        />
      </div>
    </section>
  );
};
```

### 8. Process.tsx

```typescript
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number badge */}
      <div className="mb-6 relative">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-3xl font-display font-bold text-primary">{number}</span>
        </div>
        {/* Icon overlay */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm">
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
    <section className="relative py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Simple, Seamless,{" "}
            <span className="text-primary">Stress-Free</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial contact to ongoing service, we handle everything so you don't have to.
          </p>
        </motion.div>

        {/* Process steps grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          <ProcessStep
            number={1}
            icon={<MessageSquare className="w-5 h-5" />}
            title="Contact Us"
            description="Tell us about your space and needs. We'll provide a custom solution tailored to your community."
            index={0}
          />
          <ProcessStep
            number={2}
            icon={<Wrench className="w-5 h-5" />}
            title="We Install"
            description="Professional setup with zero hassle. We handle permits, installation, and stocking—all at no cost to you."
            index={1}
          />
          <ProcessStep
            number={3}
            icon={<TrendingUp className="w-5 h-5" />}
            title="You Profit"
            description="Earn revenue from day one. We manage maintenance, restocking, and customer support 24/7."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};
```

### 9. CTASection.tsx (CTA + Footer)

```typescript
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Ready to elevate your space?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Let's discuss how Jax Vending Solutions can bring premium, hassle-free vending to your Jacksonville property.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              className="text-base px-10 py-6 shadow-premium-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Jax Vending Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium white-glove vending services for Jacksonville's finest communities.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jacksonville, Florida</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (904)-334-8708</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@jaxvending.com</span>
              </div>
            </div>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Service Areas</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Hospitals & Healthcare Facilities</li>
              <li>Schools & Universities</li>
              <li>Apartment Communities</li>
              <li>Office Buildings</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jax Vending Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
```

---

## Key Features

1. **Scroll-Triggered Animations**: All sections fade in as you scroll using Framer Motion's `useInView`
2. **Animated Counters**: Stats count up from 0 when they enter viewport
3. **Glass Morphism**: Premium frosted glass effects on cards
4. **Responsive Design**: Mobile-first, perfect on all screen sizes
5. **Dark Mode Support**: Complete light/dark theme with semantic colors
6. **Premium Typography**: Elegant serif headlines with refined sans-serif body
7. **Image Placeholders**: Gradient backgrounds ready for product photography

---

## Technical Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

---

## Design Philosophy

**Refined Luxury Minimalism**
- Warm neutrals (cream/sand) with deep forest green accents
- Generous breathing room and spacious layouts
- Smooth, buttery animations with custom easing
- Premium shadows and glass effects
- Editorial typography scale
- Scroll-choreographed reveals

This design avoids generic AI aesthetics and creates a distinctive, memorable experience that feels like a luxury brand website.
