import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/CTASection";
import { useEffect } from "react";

const TermsAndConditions = () => {
  // Update page title and meta tags
  useEffect(() => {
    document.title = "Terms and Conditions | Jax Vending Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and conditions for vending machine placement services by Jax Vending Solutions in Jacksonville, Florida.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <article className="space-y-8">
          {/* Header */}
          <div className="border-b border-border/50 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4">
              Terms and Conditions
            </h1>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Effective Date:</strong> February 12, 2026</p>
              <p><strong>Company Name:</strong> Jax Vending Solutions, LLC</p>
              <p><strong>Location:</strong> Jacksonville, Florida</p>
            </div>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              These Terms and Conditions ("Agreement") govern the placement, operation, servicing, and compliance of vending machines and/or micro-market systems by <strong>Jax Vending Solutions, LLC</strong> ("Company") at Host Locations within Jacksonville, Florida and surrounding areas.
            </p>
          </section>

          {/* GENERAL OPERATING TERMS */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              GENERAL OPERATING TERMS
            </h2>

            {/* Section 1 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                1. Equipment Ownership
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                All vending machines, kiosks, micro-market systems, coolers, telemetry systems, payment devices, and accessories remain the sole property of Jax Vending Solutions, LLC unless otherwise agreed in writing.
              </p>
              <p className="text-base text-foreground leading-relaxed font-semibold">
                Host Location acquires no ownership interest.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                2. Installation & Placement
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Host Location agrees to provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Adequate floor space</li>
                <li>Dedicated 110V electrical outlets</li>
                <li>Continuous power supply</li>
                <li>Secure placement</li>
                <li>Reasonable access for servicing</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Equipment may not be moved, modified, or serviced by third parties without written consent.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                3. Term of Agreement
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li><strong>Initial Term:</strong> Five (5) years</li>
                <li><strong>Automatic Renewal:</strong> One (1) year successive terms unless terminated with 60 days written notice</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                4. Minimum Sales Requirement
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Each machine must generate a minimum threshold per month in gross revenue.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                If below this threshold for three consecutive months, Company may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Remove equipment</li>
                <li>Adjust commission</li>
                <li>Modify product selection</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                5. Revenue Sharing (If Applicable)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li><strong>Commission:</strong> Percentage of gross sales (excluding tax) as agreed</li>
                <li><strong>Payment:</strong> Monthly, within 15 days of month-end</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                If not specified, machines are placed as a complimentary amenity.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                6. Maintenance & Repairs
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Restock regularly</li>
                <li>Maintain safe working order</li>
                <li>Respond to service calls within 24–72 business hours</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Company is not responsible for damage caused by vandalism, theft, misuse, power surges, flooding, or negligence of Host Location.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                7. Micro-Market Theft & Shrinkage
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                If shrinkage exceeds 10% of gross sales within any 30-day period, Company may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Install surveillance</li>
                <li>Convert to traditional vending</li>
                <li>Terminate Agreement</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Host Location may be financially responsible if excessive theft results from lack of reasonable security.
              </p>
            </div>
          </section>

          {/* CASHLESS PAYMENT & DATA COMPLIANCE */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              CASHLESS PAYMENT & DATA COMPLIANCE
            </h2>

            {/* Section 8 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                8. Cashless Payment Systems
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Machines may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>EMV chip readers</li>
                <li>NFC/contactless payment</li>
                <li>Mobile wallets</li>
                <li>QR-based payment</li>
                <li>Remote telemetry systems</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                9. PCI Compliance
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>All payment processing is conducted via PCI-DSS compliant third-party processors</li>
                <li>Company does not store full card numbers or CVV data</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                10. Operational Data Collection
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Machines may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Transaction totals</li>
                <li>Product selection</li>
                <li>Inventory data</li>
                <li>Machine diagnostics</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Data is used solely for operational optimization.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                11. Limitation of Liability (Payments)
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company is not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Network outages</li>
                <li>Banking system failures</li>
                <li>Processor downtime</li>
                <li>Cyberattacks beyond commercially reasonable safeguards</li>
              </ul>
            </div>
          </section>

          {/* GOVERNMENT, SCHOOL & HOSPITAL PROVISIONS */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              GOVERNMENT, SCHOOL & HOSPITAL PROVISIONS
            </h2>

            {/* Section 12 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                12. Regulatory Compliance
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company complies with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Florida procurement regulations</li>
                <li>Federal and state food safety laws</li>
                <li>Institutional policies applicable to schools and hospitals</li>
              </ul>
            </div>

            {/* Section 13 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                13. Background & Security Requirements
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Company personnel will comply with required institutional screening and security policies when applicable.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                14. Nutrition & Institutional Restrictions
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Product selection may be modified to comply with institutional nutrition or wellness policies.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                15. Budget Appropriation (Public Entities)
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Continuation of this Agreement may be subject to annual budget approval where required by law.
              </p>
            </div>

            {/* Section 16 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                16. Public Records Compliance (Florida)
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                If contracting with a public agency, certain records may be subject to disclosure under Chapter 119, Florida Statutes.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Proprietary trade secrets may be protected to the extent permitted by law.
              </p>
            </div>

            {/* Section 17 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                17. Procurement Documentation
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company may provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>W-9</li>
                <li>Certificate of Insurance</li>
                <li>E-Verify compliance</li>
                <li>Non-collusion affidavit</li>
                <li>Drug-Free Workplace certification</li>
              </ul>
            </div>
          </section>

          {/* PROPERTY MANAGEMENT & APARTMENT COMPLEX PROVISIONS */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              PROPERTY MANAGEMENT & APARTMENT COMPLEX PROVISIONS
            </h2>

            {/* Section 18 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                18. Common Area Compliance
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Machines must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Not obstruct emergency exits</li>
                <li>Comply with fire code</li>
                <li>Remain accessible to tenants</li>
              </ul>
            </div>

            {/* Section 19 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                19. Tenant Liability
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Company is not liable for misuse or intentional damage caused by tenants or guests.
              </p>
            </div>

            {/* Section 20 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                20. Relocation Within Property
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Relocation may occur with 14 days written notice, provided accessibility and electrical requirements remain satisfied.
              </p>
            </div>

            {/* Section 21 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                21. Exclusivity
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Host Location agrees not to allow competing vending operators during the term.
              </p>
            </div>
          </section>

          {/* FLORIDA SCHOOL NUTRITION COMPLIANCE */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              FLORIDA SCHOOL NUTRITION COMPLIANCE
            </h2>

            {/* Section 22 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                22. Smart Snacks Compliance
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                For K-12 schools participating in federal programs, all products sold during the defined school day shall comply with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>USDA Smart Snacks in School Standards</li>
                <li>National School Lunch Program regulations</li>
                <li>Florida Department of Agriculture & Consumer Services guidelines</li>
              </ul>
            </div>

            {/* Section 23 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                23. Definition of School Day
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Midnight before to 30 minutes after the official end of the school day.
              </p>
            </div>

            {/* Section 24 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                24. Nutritional Standards
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Products must meet federal limits for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Calories</li>
                <li>Sodium</li>
                <li>Fat</li>
                <li>Sugar</li>
                <li>Whole grain criteria</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Beverage restrictions apply by grade level.
              </p>
            </div>

            {/* Section 25 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                25. Documentation
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Company may provide Smart Snack compliance documentation upon request.
              </p>
            </div>

            {/* Section 26 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                26. Wellness Policy Alignment
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Product offerings may be adjusted to comply with district-specific wellness policies.
              </p>
            </div>
          </section>

          {/* ADA & ACCESSIBILITY COMPLIANCE */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              ADA & ACCESSIBILITY COMPLIANCE
            </h2>

            {/* Section 27 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                27. ADA Compliance
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company will make commercially reasonable efforts to comply with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Americans with Disabilities Act (ADA)</li>
                <li>2010 ADA Standards for Accessible Design</li>
                <li>Applicable Florida accessibility laws</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Placement must allow accessible routes.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Company is not liable for structural barriers imposed by Host Location.
              </p>
            </div>
          </section>

          {/* FOOD SAFETY & HEALTH REGULATIONS */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              FOOD SAFETY & HEALTH REGULATIONS
            </h2>

            {/* Section 28 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                28. HACCP Food Safety Program
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company implements HACCP-based protocols including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Temperature monitoring</li>
                <li>FIFO inventory rotation</li>
                <li>Expiration tracking</li>
                <li>Sanitation procedures</li>
              </ul>
            </div>

            {/* Section 29 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                29. Florida Department of Health Compliance
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Company complies with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Florida Department of Health regulations</li>
                <li>Required food permits</li>
                <li>County inspection requirements</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Host Location must maintain power and sanitary placement conditions.
              </p>
            </div>
          </section>

          {/* ADDITIONAL LEGAL PROTECTIONS */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-primary border-b-2 border-primary/30 pb-3">
              ADDITIONAL LEGAL PROTECTIONS
            </h2>

            {/* Section 30 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                30. Personal Guarantee (If Applicable)
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Privately held Host Locations may require a personal guarantee of performance.
              </p>
            </div>

            {/* Section 31 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                31. Liquidated Damages
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                If Host breaches exclusivity or removes equipment prematurely without cause:
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Host agrees to pay the greater of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>$2,500 per machine</li>
                <li>Average monthly gross sales × remaining contract months</li>
              </ul>
            </div>

            {/* Section 32 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                32. Non-Solicitation / Non-Circumvention
              </h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                Host Location agrees not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-foreground pl-4">
                <li>Solicit Company vendors</li>
                <li>Replicate machine configurations</li>
                <li>Hire Company personnel</li>
              </ul>
              <p className="text-base text-foreground leading-relaxed mt-3">
                For 24 months after termination.
              </p>
            </div>

            {/* Section 33 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                33. Insurance
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Company maintains Commercial General Liability insurance. Certificates available upon request.
              </p>
            </div>

            {/* Section 34 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                34. Attorney's Fees
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                Prevailing party in any dispute shall be entitled to reasonable attorney's fees and costs.
              </p>
            </div>

            {/* Section 35 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                35. Governing Law
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                This Agreement shall be governed by the laws of the State of Florida. Venue shall lie exclusively in Duval County, Florida.
              </p>
            </div>

            {/* Section 36 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                36. Entire Agreement
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                This document constitutes the entire agreement between the parties and supersedes prior negotiations.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="border-t border-border/50 pt-8">
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-foreground text-lg">Contact Information</h3>
              <p className="text-base text-foreground">
                <strong>Jax Vending Solutions, LLC</strong>
              </p>
              <p className="text-base text-foreground">
                Jacksonville, Florida & Surrounding Communities
              </p>
              <p className="text-base text-foreground">
                <strong>Email:</strong> <a href="mailto:Sales@jaxvendingsolutions.com" className="text-primary hover:underline">Sales@jaxvendingsolutions.com</a>
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
