/**
 * Kirauni Strategies — Client Wins Page
 * Design: Crown Authority — honest case studies, no fake metrics
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);
  return (
    <div ref={setRef} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms` }}>
      {children}
    </div>
  );
}

function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="gold-eyebrow">{children}</div>;
}

const wins = [
  {
    category: "Visibility + Systems Fix",
    client: "Local Treat Business",
    challenge: "A local treat business was struggling with a disorganized order process that created confusion for both the owner and customers. The lack of a clear intake system was creating friction and limiting growth.",
    result: "Clearer order process, improved customer experience, and streamlined operations that reduced back-and-forth communication.",
    delivered: "Built branded intake form and streamlined order workflow",
    tags: ["Systems", "Visibility", "Operations"],
    color: "#6B3FA0",
  },
  {
    category: "Visibility Upgrade",
    client: "Personal Brand",
    challenge: "A professional building their personal brand lacked a strong, polished visual first impression. Their existing imagery did not reflect the authority and credibility they had built in their field.",
    result: "Stronger first impression across digital platforms, with imagery that aligned with their professional positioning.",
    delivered: "Enhanced and professionally edited headshot",
    tags: ["Personal Brand", "Visibility"],
    color: "#1A1A1A",
  },
  {
    category: "Clarity + Strategy",
    client: "New Business Launch",
    challenge: "A new business owner had a strong idea but lacked clarity on direction, positioning, and the specific steps needed to launch with confidence. The path forward felt overwhelming and undefined.",
    result: "Clear path forward, confident execution, and focused next steps that removed the paralysis of uncertainty.",
    delivered: "Defined business direction and identified key visibility gaps",
    tags: ["Strategy", "Clarity", "Launch"],
    color: "#6B3FA0",
  },
  {
    category: "Brand Foundation",
    client: "Therapy Practice",
    challenge: "A therapy practice needed a professional brand presence that conveyed trust, credibility, and approachability. The absence of a cohesive visual identity was limiting their ability to attract the right clients.",
    result: "Professional brand presence aligned with trust and credibility that supports client confidence and referrals.",
    delivered: "Designed custom logo and established visual identity",
    tags: ["Brand", "Identity", "Trust"],
    color: "#1A1A1A",
  },
  {
    category: "Strategy + Vision Mapping",
    client: "Early-Stage Brand",
    challenge: "An early-stage brand had a vision but lacked the structured thinking needed to translate that vision into a clear, actionable direction. Multiple ideas competed without a unifying strategy.",
    result: "Clear direction, aligned messaging, and actionable next steps that gave the brand a foundation to build from.",
    delivered: "Developed concept direction and structured brand vision",
    tags: ["Strategy", "Vision", "Brand"],
    color: "#6B3FA0",
  },
];

export default function ClientWins() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>Results</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Real businesses. Real clarity. Real momentum.
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans']">
                Every engagement is designed to create movement — stronger visibility, sharper positioning, cleaner systems, and more confident execution.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Wins */}
      <section className="section-gray">
        <div className="container">
          <div className="space-y-8">
            {wins.map((win, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="rounded-lg overflow-hidden bg-white" style={{ border: "1px solid #e8e8e8" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Color accent column */}
                    <div
                      className="lg:col-span-1 min-h-2 lg:min-h-0"
                      style={{ backgroundColor: win.color }}
                    />
                    {/* Content */}
                    <div className="lg:col-span-11 p-8 lg:p-10">
                      <div className="flex flex-wrap items-start gap-3 mb-5">
                        <span
                          className="inline-block text-xs font-['Montserrat'] font-600 tracking-wider uppercase px-3 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(107, 63, 160, 0.08)", color: "#6B3FA0" }}
                        >
                          {win.category}
                        </span>
                        {win.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block text-xs font-['Open_Sans'] px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#F5F5F5", color: "#6B7280" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-xl mb-5">{win.client}</h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-2" style={{ color: "#D4AF37" }}>The Challenge</p>
                          <p className="text-[#6B7280] text-sm leading-relaxed font-['Open_Sans']">{win.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-2" style={{ color: "#6B3FA0" }}>The Result</p>
                          <p className="text-[#6B7280] text-sm leading-relaxed font-['Open_Sans']">{win.result}</p>
                        </div>
                        <div>
                          <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-2" style={{ color: "#1A1A1A" }}>What Was Delivered</p>
                          <p className="text-[#1A1A1A] text-sm leading-relaxed font-['Open_Sans'] font-600">{win.delivered}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-purple">
        <div className="container text-center">
          <FadeSection>
            <GoldEyebrow>Your Turn</GoldEyebrow>
            <h2 className="font-['Montserrat'] font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Ready to create your own momentum?
            </h2>
            <p className="text-purple-200 mb-8 font-['Open_Sans'] text-lg max-w-xl mx-auto">
              Every client win started with a single conversation. Start yours with a free visibility scan.
            </p>
            <Link href="/contact" className="btn-white">
              Start Your Free Visibility Scan
              <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
