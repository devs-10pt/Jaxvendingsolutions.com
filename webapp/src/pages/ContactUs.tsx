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

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      detail: "Jacksonville, Florida",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "(555) 123-4567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "hello@jaxvending.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      detail: "24/7 Support Available",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-tight text-foreground mb-6"
          >
            Let's Start a{" "}
            <span className="text-primary">Conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 } as any}
            animate={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring premium vending to your Jacksonville property? We'd love
            to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 } as any}
                whileInView={{ opacity: 1, y: 0 } as any}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] } as any}
                viewport={{ once: true } as any}
              >
                <Card className="p-6 text-center glass-light dark:glass shadow-premium hover:shadow-premium-lg transition-all duration-300 group">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 } as any}
            whileInView={{ opacity: 1, y: 0 } as any}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any}
            viewport={{ once: true } as any}
          >
            <Card className="p-8 lg:p-12 glass-light dark:glass shadow-premium-lg">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-8 text-center">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Smith"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
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
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Property Type
                  </label>
                  <Input
                    placeholder="e.g., Hospital, School, Apartment Complex"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your space and needs..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base py-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
