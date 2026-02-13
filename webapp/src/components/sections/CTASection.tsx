/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section className="relative py-12 sm:py-16 lg:py-32 px-4 sm:px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 } as any}
          animate={isInView ? { opacity: 1, y: 0 } as any : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 sm:mb-6 px-2">
            Ready to elevate your space?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">Let's discuss how Jax Vending Solutions can bring premium, <span className="text-primary font-semibold">FREE</span> vending to your Jacksonville property.</p>

          <motion.div
            initial={{ opacity: 0, y: 20 } as any}
            animate={isInView ? { opacity: 1, y: 0 } as any : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
          >
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 min-h-[48px] shadow-premium-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Company info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
              Jax Vending Solutions
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Jax Vending Solutions provides <span className="text-primary font-semibold">FREE MACHINES</span> for Jacksonville's finest communities.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Jacksonville, Florida</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="break-all">sales@jaxvendingsolutions.com</span>
              </div>
            </div>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Service Areas</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Hospitals & Healthcare Facilities</li>
              <li>Schools & Universities</li>
              <li>Apartment Communities</li>
              <li>Office Buildings</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Jax Vending Solutions. All rights reserved.
            {" • "}
            <Link to="/terms" className="hover:text-foreground transition-colors underline">
              Terms and Conditions
            </Link>
            {" • "}
            <Link to="/privacy" className="hover:text-foreground transition-colors underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
