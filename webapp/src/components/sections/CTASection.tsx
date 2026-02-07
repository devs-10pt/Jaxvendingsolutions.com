/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
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
          initial={{ opacity: 0, y: 30 } as any}
          animate={isInView ? { opacity: 1, y: 0 } as any : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Ready to elevate your space?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Let's discuss how Jax Vending Solutions can bring premium, hassle-free vending to your Jacksonville property.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={isInView ? { opacity: 1, y: 0 } as any : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
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
                <span>(555) 123-4567</span>
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
