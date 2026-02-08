/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServeCardProps {
  title: string;
  headline: string;
  description: string;
  imagePosition: "left" | "right";
  index: number;
  imageUrl?: string;
}

const ServeCard = ({ title, headline, description, imagePosition, index, imageUrl }: ServeCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 } as any}
      animate={isInView ? { opacity: 1, x: 0 } as any : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
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
      initial={{ opacity: 0, scale: 0.95 } as any}
      animate={isInView ? { opacity: 1, scale: 1 } as any : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
      className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-premium-lg"
    >
      {imageUrl ? (
        <>
          {/* Actual image */}
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </>
      ) : (
        <>
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
        </>
      )}
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
          initial={{ opacity: 0, y: 30 } as any}
          animate={isInView ? { opacity: 1, y: 0 } as any : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Serving Jacksonville's{" "}
            <span className="text-primary">Finest Communities</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Modern Vending Machines for Modern Times.</p>
        </motion.div>

        {/* Service cards */}
        <ServeCard
          title="Hospitals & Healthcare"
          headline="Fuel the heroes who never stop"
          description="24/7 access to nutritious snacks, fresh meals, and essentials for staff, patients, and visitors. Our smart machines ensure healthy options are always available when it matters most."
          imagePosition="left"
          imageUrl="/healthcare-hero.png"
          index={0}
        />

        <ServeCard
          title="Schools & Universities"
          headline="Healthy options for growing minds"
          description="From grab-and-go breakfasts to after-school snacks, we stock products that fuel learning and athletics. Cashless payments make it easy and safe for students of all ages."
          imagePosition="right"
          imageUrl="/schools-universities.png"
          index={1}
        />

        <ServeCard
          title="Apartments & Communities"
          headline="Premium amenities that residents love"
          description="Elevate your property with modern vending that feels like a luxury convenience store. Late-night snacks, morning coffee, forgotten essentials all at their fingertips."
          imagePosition="left"
          imageUrl="/apartments-communities.png"
          index={2}
        />

        <ServeCard
          title="Businesses & Office Spaces"
          headline="Keep your team energized and productive"
          description="Boost workplace satisfaction with convenient access to snacks, beverages, and healthy options. Our smart vending solutions reduce downtime and keep your employees focused throughout the day."
          imagePosition="right"
          imageUrl="/business-office.png"
          index={3}
        />

        <ServeCard
          title="Gyms & Fitness Centers"
          headline="Fuel your fitness journey"
          description="Protein bars, sports drinks, and healthy snacks available 24/7. Our machines stock the nutrition your members need before, during, and after their workouts."
          imagePosition="left"
          index={4}
        />
      </div>
    </section>
  );
};
