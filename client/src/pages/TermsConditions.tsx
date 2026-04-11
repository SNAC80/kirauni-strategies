/**
 * Kirauni Strategies — Terms & Conditions Page
 */
import { useEffect } from "react";
import Layout from "@/components/Layout";

function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="gold-eyebrow">{children}</div>;
}

export default function TermsConditions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <Layout>
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <GoldEyebrow>Legal</GoldEyebrow>
            <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
              Terms & Conditions
            </h1>
            <p className="text-[#6B7280] text-sm font-['Open_Sans'] mb-10">Last updated: January 2026</p>

            <div className="prose-kirauni">
              <h2>Agreement to Terms</h2>
              <p>By accessing or using the Kirauni Strategies LLC website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

              <h2>Services</h2>
              <p>Kirauni Strategies LLC provides boutique business strategy, AI visibility, brand development, and systems implementation services for small to mid-sized businesses. Specific deliverables, timelines, and scope are defined in individual service agreements or proposals.</p>
              <p>We reserve the right to decline service to any prospective client at our sole discretion.</p>

              <h2>No Guarantees</h2>
              <p>Kirauni Strategies provides strategic guidance, implementation support, and visibility optimization. We do not guarantee specific business outcomes, revenue results, search rankings, or lead generation numbers. Results depend on many factors outside our control, including client implementation, market conditions, and platform algorithm changes.</p>
              <p>All case studies and client outcomes shared are honest representations of actual results and are not guarantees of similar outcomes.</p>

              <h2>Payments</h2>
              <p>Payment terms are outlined in individual service agreements. Unless otherwise specified:</p>
              <ul>
                <li>Project-based services require a deposit before work begins</li>
                <li>Retainer services are billed monthly in advance</li>
                <li>Invoices are due within 7 days of issuance unless otherwise agreed</li>
                <li>Late payments may result in service suspension</li>
              </ul>

              <h2>Refunds and Cancellations</h2>
              <p>Please refer to our Refund Policy for complete details on cancellations, refunds, and rescheduling. In general, deposits and completed work are non-refundable once services have commenced.</p>

              <h2>Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate and complete information required for service delivery</li>
                <li>Timely responses to requests for feedback, approvals, or materials</li>
                <li>Implementation of recommendations and strategies provided</li>
                <li>Maintaining access to platforms and tools required for service delivery</li>
              </ul>
              <p>Delays caused by client non-responsiveness may affect timelines and do not entitle the client to refunds.</p>

              <h2>Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership of deliverables created specifically for them (e.g., logos, brand assets, written content). Kirauni Strategies retains ownership of proprietary frameworks, methodologies, templates, and processes used in service delivery.</p>
              <p>Clients may not reproduce, distribute, or resell Kirauni's proprietary frameworks or training materials without written permission.</p>

              <h2>Limitation of Liability</h2>
              <p>Kirauni Strategies LLC's total liability for any claim arising from our services shall not exceed the amount paid by the client for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.</p>

              <h2>Modifications</h2>
              <p>We reserve the right to modify these Terms at any time. Updated terms will be posted on this page. Continued use of our services after changes constitutes acceptance.</p>

              <h2>Contact</h2>
              <p>For questions about these Terms, contact us at:</p>
              <p><strong>Kirauni Strategies LLC</strong><br />hello@kiraunistrategies.com<br />832-608-3495</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
