/**
 * Kirauni Strategies — Refund Policy Page
 */
import { useEffect } from "react";
import Layout from "@/components/Layout";

function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="gold-eyebrow">{children}</div>;
}

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <Layout>
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <GoldEyebrow>Legal</GoldEyebrow>
            <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
              Refund Policy
            </h1>
            <p className="text-[#6B7280] text-sm font-['Open_Sans'] mb-10">Last updated: January 2026</p>

            <div className="prose-kirauni">
              <h2>Our Commitment</h2>
              <p>Kirauni Strategies LLC is committed to delivering high-quality strategic services. We take every engagement seriously and invest significant time and expertise in each client relationship. This Refund Policy outlines the terms under which refunds, cancellations, and rescheduling are handled.</p>

              <h2>Strategy + Visibility Audit — Cancellation Rules</h2>
              <p>For the Strategy + Visibility Audit service:</p>
              <ul>
                <li><strong>Cancellation 48+ hours before scheduled session:</strong> Full refund of the session fee, minus any processing fees.</li>
                <li><strong>Cancellation within 24–48 hours:</strong> 50% refund of the session fee.</li>
                <li><strong>Cancellation within 24 hours or no-show:</strong> No refund. The session fee is forfeited.</li>
              </ul>

              <h2>Non-Refundable Nature of Work Once Begun</h2>
              <p>Once strategic work has commenced — including but not limited to discovery sessions, strategy development, brand work, system builds, or any deliverable creation — the associated fees are non-refundable. This applies to:</p>
              <ul>
                <li>All project deposits</li>
                <li>Completed strategy sessions</li>
                <li>Deliverables in progress or completed</li>
                <li>Monthly retainer fees for the current billing period</li>
              </ul>
              <p>Work "commenced" means any time, research, planning, or deliverable creation has been invested by Kirauni Strategies on behalf of the client.</p>

              <h2>Rescheduling Rules</h2>
              <p>Rescheduling requests are accommodated as follows:</p>
              <ul>
                <li><strong>48+ hours notice:</strong> Rescheduling is available at no charge, subject to availability.</li>
                <li><strong>Less than 48 hours notice:</strong> One complimentary reschedule may be offered at Kirauni's discretion. Subsequent rescheduling within 48 hours may incur a rescheduling fee.</li>
                <li><strong>No-shows:</strong> No rescheduling credit is provided for missed appointments without prior notice.</li>
              </ul>

              <h2>Digital Deliverables Are Final and Non-Refundable</h2>
              <p>All digital deliverables — including but not limited to logos, brand assets, written strategy documents, audit reports, workflow documentation, and system builds — are final and non-refundable once delivered. By accepting delivery of a digital deliverable, the client acknowledges satisfaction with the work product.</p>
              <p>Revision requests are handled according to the scope defined in the individual service agreement.</p>

              <h2>Retainer Cancellations</h2>
              <p>Monthly retainer agreements may be cancelled with 30 days written notice. The final billing period is non-refundable. Retainers cancelled mid-month are not prorated.</p>

              <h2>Exceptions at Kirauni's Discretion</h2>
              <p>Kirauni Strategies may, at its sole discretion, offer partial credits, service extensions, or accommodations in exceptional circumstances. These exceptions are evaluated on a case-by-case basis and do not establish precedent for future requests.</p>
              <p>To request a review of exceptional circumstances, contact us in writing at hello@kiraunistrategies.com within 7 days of the relevant service date.</p>

              <h2>Contact</h2>
              <p>For refund or cancellation requests, contact us at:</p>
              <p><strong>Kirauni Strategies LLC</strong><br />hello@kiraunistrategies.com<br />832-608-3495</p>
              <p>All refund requests must be submitted in writing. Verbal requests are not accepted.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
