/**
 * Kirauni Strategies — Strategy + Visibility Audit Page
 * Design: Crown Authority — full-page Cal.com embed for the Strategy + Visibility Audit event
 * Cal.com URL: https://cal.com/kiraunistrategies/visibility-audit
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function StrategyAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-2 text-sm font-['Open_Sans'] mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            <ArrowLeft size={15} />
            Back to Work With Us
          </Link>

          <div className="max-w-3xl">
            <div className="gold-eyebrow mb-3">Starting at $297 · Most Requested</div>
            <h1
              className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Book Your{" "}
              <span style={{ color: "#6B3FA0" }}>Strategy + Visibility Audit</span>
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans'] max-w-2xl">
              A comprehensive, done-for-you analysis of your business's visibility — designed to uncover what's limiting your growth and map a clear path forward. After booking, a custom AI Visibility Audit + 30-day roadmap will be prepared specifically for your business ahead of your session.
            </p>

            {/* What you get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Deep dive analysis of your digital presence",
                "Google Business Profile & AI search review",
                "Messaging and brand clarity assessment",
                "Prioritized action plan with implementation guidance",
                "Custom 30-day roadmap prepared before your session",
                "1-hour strategy session with Shavonne",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <span className="text-sm font-['Open_Sans'] text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="bg-gray-50 py-10">
        <div className="container">
          <div
            className="bg-white rounded-xl shadow-sm overflow-hidden"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <iframe
              src="https://cal.com/kiraunistrategies/visibility-audit?embed=true&theme=light"
              width="100%"
              height="800"
              frameBorder="0"
              title="Book Strategy + Visibility Audit — Kirauni Strategies"
              style={{ display: "block" }}
              allow="camera; microphone; fullscreen"
            />
          </div>

          {/* Fallback link */}
          <p className="text-center text-sm text-[#9CA3AF] font-['Open_Sans'] mt-4">
            Having trouble with the calendar?{" "}
            <a
              href="https://cal.com/kiraunistrategies/visibility-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: "#6B3FA0" }}
            >
              Open directly on Cal.com
            </a>
          </p>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container text-center">
          <p className="text-[#6B7280] font-['Open_Sans'] mb-2 text-sm">
            Not sure which option is right for you?
          </p>
          <Link
            href="/visibility-scan"
            className="font-['Montserrat'] font-semibold text-sm underline hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            Start with the Free Visibility Scan instead →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
