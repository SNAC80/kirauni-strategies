/**
 * Kirauni Strategies — Privacy Policy Page
 */
import { useEffect } from "react";
import Layout from "@/components/Layout";

function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="gold-eyebrow">{children}</div>;
}

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <Layout>
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <GoldEyebrow>Legal</GoldEyebrow>
            <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
              Privacy Policy
            </h1>
            <p className="text-[#6B7280] text-sm font-['Open_Sans'] mb-10">Last updated: January 2026</p>

            <div className="prose-kirauni">
              <h2>Overview</h2>
              <p>Kirauni Strategies LLC ("Kirauni," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.</p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact information:</strong> Name, email address, phone number, and business name when you submit a form or inquiry.</li>
                <li><strong>Business information:</strong> Website URL, Google Business Profile, industry, and business challenges you share with us.</li>
                <li><strong>Usage data:</strong> Pages visited, time spent on site, and general browsing behavior through analytics tools.</li>
                <li><strong>Communication data:</strong> Messages, emails, and any correspondence you send to us.</li>
              </ul>

              <h2>How Information Is Collected</h2>
              <p>Information is collected through:</p>
              <ul>
                <li>Contact and inquiry forms on our website</li>
                <li>Scheduling tools, including Cal.com</li>
                <li>Survey and intake forms, including Typeform</li>
                <li>Email correspondence</li>
                <li>Website analytics (cookies and tracking technologies)</li>
              </ul>

              <h2>Use of Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Respond to inquiries and provide requested services</li>
                <li>Schedule consultations and strategy sessions</li>
                <li>Send relevant business insights and updates (with your consent)</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Cal.com and Typeform</h2>
              <p>We use Cal.com for scheduling and Typeform for intake forms. These third-party platforms have their own privacy policies and data handling practices. By using these tools through our website, you agree to their respective terms. We encourage you to review the privacy policies of Cal.com and Typeform directly.</p>

              <h2>Cookies and Analytics</h2>
              <p>Our website uses cookies and analytics tools to understand how visitors interact with our content. This data is aggregated and does not personally identify you. You may adjust your browser settings to decline cookies, though some site features may be affected.</p>

              <h2>Legal Basis and Your Rights</h2>
              <p>We process your personal data based on your consent, our legitimate business interests, and contractual necessity. You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Data Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>

              <h2>Data Retention</h2>
              <p>We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Client project data is retained for a minimum of three years for business record purposes.</p>

              <h2>Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>

              <h2>SMS Data Protection</h2>
              <p>If you provide your phone number and consent to SMS communication, your number will only be used to send relevant business communications. We do not sell or share phone numbers with third parties for marketing purposes. You may opt out of SMS communications at any time by replying STOP.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

              <h2>Contact</h2>
              <p>For privacy-related questions or requests, contact us at:</p>
              <p><strong>Kirauni Strategies LLC</strong><br />hello@kiraunistrategies.com<br />832-608-3495</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
