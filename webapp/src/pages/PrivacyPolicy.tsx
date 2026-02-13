import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  // Update page title and meta tags
  useEffect(() => {
    document.title = "Privacy Policy | Jax Vending Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy policy for Jax Vending Solutions. Learn how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <article className="space-y-8">
          <div className="border-b border-border/50 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4">
              Privacy Policy
            </h1>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Effective Date:</strong> February 12, 2026</p>
              <p><strong>Last Updated:</strong> February 12, 2026</p>
            </div>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Jax Vending Solutions ("we," "our," "us," or "Company") respects your privacy and is committed to protecting it through this Privacy Policy. This Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>https://JaxVendingSolutions.com</strong> (the "Website") or interact with our vending machine placement and management services in Jacksonville, Florida and surrounding areas.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              By using our Website or submitting information to us, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Website or services.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              1. Information We Collect
            </h2>

            <div className="space-y-6 pl-4 border-l-4 border-primary/30">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  a. Information You Provide Directly
                </h3>
                <p className="text-base text-foreground mb-3 leading-relaxed">
                  When you contact us, request vending machine placement services, subscribe to communications, or conduct business with us, we may collect the following personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground ml-2">
                  <li>Full name and contact person</li>
                  <li>Business or organization name</li>
                  <li>Email address</li>
                  <li>Phone number(s)</li>
                  <li>Service location address</li>
                  <li>Property details and requirements</li>
                  <li>Billing and payment information</li>
                  <li>Communications and service inquiries</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
                <p className="text-base text-foreground mt-3 leading-relaxed">
                  This information is used to evaluate locations, place and maintain vending machines, process payments, communicate with customers, provide ongoing service support, and improve our offerings.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  b. Automatically Collected Information
                </h3>
                <p className="text-base text-foreground mb-3 leading-relaxed">
                  When you visit our Website, certain information is automatically collected without your direct action:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground ml-2">
                  <li>Internet Protocol (IP) address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring URLs and exit pages</li>
                  <li>Search queries</li>
                  <li>Approximate geographic location</li>
                  <li>Clickstream data</li>
                </ul>
                <p className="text-base text-foreground mt-3 leading-relaxed">
                  This data helps us understand how visitors interact with our Website, improve performance, optimize user experience, and detect security issues.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  c. Cookies & Tracking Technologies
                </h3>
                <p className="text-base text-foreground mb-3 leading-relaxed">
                  We use cookies and similar tracking technologies (including pixels, beacons, and local storage) to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground ml-2">
                  <li>Operate and maintain the Website functionality</li>
                  <li>Remember your preferences and login information</li>
                  <li>Analyze traffic patterns and usage statistics</li>
                  <li>Personalize content and recommendations</li>
                  <li>Support marketing analytics and retargeting</li>
                  <li>Detect fraud and improve security</li>
                </ul>
                <p className="text-base text-foreground mt-3 leading-relaxed">
                  You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect Website functionality and your user experience. For more information about cookies, visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">www.allaboutcookies.org</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-foreground pl-4">
              <li>Provide vending machine placement evaluation and service fulfillment</li>
              <li>Communicate with customers, prospective clients, and service partners</li>
              <li>Process transactions, billing, and payment requests</li>
              <li>Respond to inquiries, requests, and customer support needs</li>
              <li>Send service-related announcements and updates</li>
              <li>Send newsletters, promotional materials, and marketing communications</li>
              <li>Improve Website functionality, design, and overall user experience</li>
              <li>Conduct analytics and measure engagement</li>
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Comply with legal obligations and enforce agreements</li>
              <li>Establish and defend legal claims</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              3. Payment Processing & Security
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              All payments are processed through secure, PCI-DSS compliant third-party payment processors. We do not store full credit card, debit card, or banking information on our servers. Your payment data is encrypted and transmitted securely.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Payment processors handle your payment data in accordance with their own privacy policies and security standards. We recommend reviewing their privacy policies to understand how they protect your financial information.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              4. Website Hosting & Third-Party Services
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Our Website is hosted and managed by third-party service providers who may automatically collect technical information such as IP addresses, browser data, device information, and usage metrics to operate, secure, and maintain the Website.
            </p>
            <p className="text-base text-foreground leading-relaxed mb-4">
              We also use third-party services for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
              <li>Website analytics and performance monitoring</li>
              <li>Email communications and newsletter management</li>
              <li>Payment processing and transaction handling</li>
              <li>Customer relationship management (CRM)</li>
              <li>Cloud hosting and data storage</li>
              <li>Security and fraud detection</li>
            </ul>
            <p className="text-base text-foreground mt-4 leading-relaxed">
              These third-party service providers only receive information necessary to perform their services and are contractually obligated to protect your data and use it only for specified purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              5. Email Communications & Marketing
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              If you provide your email address, we may send you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4 mb-4">
              <li>Service-related communications and account updates</li>
              <li>Product announcements and service improvements</li>
              <li>Promotional offers and marketing materials</li>
              <li>Newsletter content and industry updates</li>
            </ul>
            <p className="text-base text-foreground leading-relaxed">
              You may unsubscribe from marketing communications at any time by clicking the "Unsubscribe" link provided at the bottom of each email, adjusting your communication preferences in your account, or by contacting us directly. Please note that unsubscribing from marketing emails does not affect service-related communications necessary for your account.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              6. Information Sharing & Disclosure
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              We take your privacy seriously and do not sell your personal information to third parties for their marketing purposes.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-foreground pl-4 mt-4">
              <li><strong>Service Providers:</strong> With trusted vendors and service providers who perform functions on our behalf (e.g., payment processing, hosting, analytics)</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, government request, or legal proceedings</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, safety, property, or the rights and safety of others</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, bankruptcy, asset sale, or other business transaction</li>
              <li><strong>Aggregate Data:</strong> We may share anonymized, aggregated data that cannot identify you</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              7. Data Security & Protection
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4 mb-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure password authentication</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and role-based permissions</li>
              <li>Secure backup and recovery procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-base text-foreground leading-relaxed text-red-600 font-semibold">
              However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security. You assume all risk associated with unauthorized access or use of our Website.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              8. Data Retention
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, and resolve disputes. When information is no longer needed, we securely delete or anonymize it. Some information may be retained longer if required by law or for legitimate business purposes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              9. Children's Privacy
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              Our Website and services are intended for individuals 18 years of age or older. We do not knowingly collect, use, or disclose personal information from children under 13. If we become aware that we have collected personal information from a minor, we will take steps to delete such information promptly. If you believe a child has provided information to us, please contact us immediately.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              10. Your Privacy Rights & Choices
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Depending on your jurisdiction and applicable laws, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-foreground pl-4">
              <li><strong>Right to Access:</strong> Request access to your personal information</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications and data sales</li>
              <li><strong>Right to Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Right to Restrict:</strong> Restrict processing of your information</li>
            </ul>
            <p className="text-base text-foreground mt-4 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided in the Contact Information section. We will respond to your request within 30 days or as required by law.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              11. Third-Party Links & External Sites
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              Our Website may contain links to third-party websites, social media platforms, and external services that are not operated by us. This Privacy Policy does not apply to external websites, and we are not responsible for their privacy practices, content, or security. We encourage you to review the privacy policies of any third-party sites before providing your personal information.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              12. California Privacy Rights (CCPA)
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              If you are a California resident, you have specific privacy rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4 mb-4">
              <li>Right to know what personal information is collected and how it is used</li>
              <li>Right to delete personal information collected from you</li>
              <li>Right to opt-out of the sale or sharing of your personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p className="text-base text-foreground leading-relaxed">
              We do not sell your personal information. To make a privacy request or for more information, please contact us using the details in the Contact Information section.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              13. International Data Transfers
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              If you access our Website from outside the United States, please be aware that your information may be transferred to, stored in, and processed in the United States or other countries. These countries may have data protection laws that differ from your country of residence. By using our Website, you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              14. Policy Updates & Changes
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              We may update, modify, or revise this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Any updates will be posted on this page with a revised "Last Updated" date. Continued use of our Website after changes constitute your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
              15. Contact Information
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Jax Vending Solutions</h3>
                <p className="text-base text-foreground">Jacksonville, Florida & Surrounding Communities</p>
              </div>
              <div>
                <p className="text-base text-foreground"><strong>Email:</strong> <a href="mailto:Sales@jaxvendingsolutions.com" className="text-primary hover:underline">Sales@jaxvendingsolutions.com</a></p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">We will respond to all privacy inquiries within 30 days.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="border-t border-border/50 pt-8 space-y-4">
            <p className="text-sm text-muted-foreground italic">
              Thank you for entrusting Jax Vending Solutions with your business and personal information. We remain committed to protecting your privacy and maintaining your trust.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
