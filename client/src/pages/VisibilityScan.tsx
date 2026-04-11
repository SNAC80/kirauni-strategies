/**
 * Kirauni Strategies — Free Visibility Scan Page
 * Design: Crown Authority — full-page Cal.com embed for the Free Visibility Scan event
 * Cal.com URL: https://cal.com/kiraunistrategies/visibility-scan
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function VisibilityScan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-['Open_Sans'] mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="gold-eyebrow mb-3">Complimentary · No Commitment Required</div>
            <h1
              className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Book Your Free{" "}
              <span style={{ color: "#6B3FA0" }}>Visibility Scan</span>
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans'] max-w-2xl">
              In 30 minutes, Shavonne will review your current online presence, identify your biggest visibility gaps, and give you 3 quick wins you can implement immediately — at no cost.
            </p>

            {/* What you get */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {[
                "3 quick wins identified",
                "Visibility gaps mapped",
                "Clear next steps outlined",
                "No pitch, no pressure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "#D4AF37" }} />
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
              src="https://cal.com/kiraunistrategies/visibility-scan?embed=true&theme=light"
              width="100%"
              height="800"
              frameBorder="0"
              title="Book Your Free Visibility Scan — Kirauni Strategies"
              style={{ display: "block" }}
              allow="camera; microphone; fullscreen"
            />
          </div>

          {/* Fallback link */}
          <p className="text-center text-sm text-[#9CA3AF] font-['Open_Sans'] mt-4">
            Having trouble with the calendar?{" "}
            <a
              href="https://cal.com/kiraunistrategies/visibility-scan"
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
            Ready for a deeper dive?
          </p>
          <Link
            href="/strategy-audit"
            className="font-['Montserrat'] font-semibold text-sm underline hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            Explore the Strategy + Visibility Audit →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
