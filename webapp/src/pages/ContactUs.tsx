/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

const ContactUs = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);

  const serviceOptions = ["Drink", "Snack", "Freezer", "Other"];
  const trafficOptions = ["1-10", "10-50", "100-500", "500+", "2000+", "More"];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleTraffic = (traffic: string) => {
    setSelectedMachines((prev) =>
      prev.includes(traffic)
        ? prev.filter((t) => t !== traffic)
        : [...prev, traffic]
    );
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      detail: "Jacksonville, Florida",
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      detail: "(555) 123-4567",
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      detail: "sales@jaxvendingsolutions.com",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Hours",
      detail: "24/7 Support Available",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get a Free Quote for Vending Services"
        description="Contact Jax Vending Solutions for premium vending machine services in Jacksonville, Duval, St. Johns, and Nassau County. Serving hospitals, schools, apartments, and offices across all ZIP codes. Call (555) 123-4567 or request a free quote today."
        keywords={[
          "contact vending services Jacksonville",
          "vending machine quote Florida",
          "Jacksonville vending company contact",
          "vending services Duval County",
          "St. Johns County vending contact",
          "Nassau County vending services",
          "vending machine installation quote",
          "Jacksonville vending phone number",
          "vending services near me",
        ]}
        canonical="/contact"
      />
      <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 py-32 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo Section - Mobile & Tablet Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 } as any}
            animate={{ opacity: 1, scale: 1 } as any}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
            className="flex justify-center mb-6 sm:mb-8 lg:hidden pt-4"
          >
            <img
              src="/fulllogo-transparent.png"
              alt="Jax Vending Solutions Logo"
              className="h-[170px] w-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-semibold leading-tight text-foreground mb-4 sm:mb-6 px-2"
          >
            Let's Start a{" "}
            <span className="text-primary">Conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            Ready to bring premium vending to your Jacksonville property? We'd love
            to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 } as any}
                whileInView={{ opacity: 1, y: 0 } as any}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] } as any}
                viewport={{ once: true } as any}
              >
                <Card className="p-5 sm:p-6 text-center glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-300 group h-full">
                  <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{info.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
          >
            <Card className="p-6 sm:p-8 lg:p-12 glass-light dark:glass shadow-premium-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6 sm:mb-8 text-center">
                Send Us a Message
              </h2>

              <form className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Smith"
                      className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Property Type
                  </label>
                  <Input
                    placeholder="e.g., Hospital, School, Apartment Complex"
                    className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Service you're looking for
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`py-3 px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 border-2 text-sm sm:text-base min-h-[48px] ${
                          selectedServices.includes(service)
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                            : "border-border bg-background/50 text-foreground hover:border-primary/50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Zip Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Zip Code
                  </label>
                  <Input
                    placeholder="32210"
                    className="bg-background/50 border-border focus:border-primary transition-colors h-11 sm:h-12 text-base"
                  />
                </div>

                {/* Daily Location Traffic */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Daily Location Traffic
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                    {trafficOptions.map((traffic) => (
                      <button
                        key={traffic}
                        type="button"
                        onClick={() => toggleTraffic(traffic)}
                        className={`py-3 px-2 sm:px-4 rounded-lg font-medium transition-all duration-300 border-2 text-xs sm:text-sm min-h-[48px] ${
                          selectedMachines.includes(traffic)
                            ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                            : "border-border bg-background/50 text-foreground hover:border-primary/50"
                        }`}
                      >
                        {traffic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your space and needs..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-sm sm:text-base py-5 sm:py-6 min-h-[52px] shadow-premium hover:shadow-premium-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground">
              Share Your Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Help other businesses discover quality vending solutions
            </p>

            <a
              href="https://www.trustpilot.com/review/jaxvendingsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg min-h-[52px] flex items-center gap-3">
                <span>★ Trustpilot</span>
                <span>Leave a Review</span>
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default ContactUs;
