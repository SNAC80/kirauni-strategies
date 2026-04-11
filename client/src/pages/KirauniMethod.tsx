/**
 * Kirauni Strategies — The Kirauni Method Page
 * Design: Crown Authority — numbered timeline, editorial layout
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

const steps = [
  {
    num: "01",
    title: "Discovery",
    subtitle: "Understand what is actually going on",
    body: "Before any strategy can be built, we need to understand the full picture. Discovery is a deep-dive into your current visibility, messaging, systems, and competitive landscape. We ask the questions most businesses never stop to answer — and the answers shape everything that follows.",
    details: ["Current visibility audit", "Messaging and positioning review", "Systems and workflow assessment", "Competitive landscape overview"],
  },
  {
    num: "02",
    title: "Strategy",
    subtitle: "Define what needs to change",
    body: "With a clear picture of where you are, we build a precise strategy for where you need to go. This is not a generic plan. It is a structured roadmap built around your specific visibility gaps, clarity challenges, and systems needs — prioritized for maximum impact.",
    details: ["Visibility gap prioritization", "Messaging and offer clarity", "Systems architecture planning", "Phased implementation roadmap"],
  },
  {
    num: "03",
    title: "Implementation",
    subtitle: "Build what works",
    body: "Strategy without execution is just planning. Implementation is where the work gets done — profiles optimized, systems built, messaging refined, and workflows activated. Every deliverable is designed to create immediate improvement and long-term infrastructure.",
    details: ["Google Business Profile optimization", "Brand and messaging updates", "Lead capture and follow-up systems", "Workflow and automation setup"],
  },
  {
    num: "04",
    title: "Measurement",
    subtitle: "Track what matters",
    body: "You cannot improve what you do not measure. Measurement establishes the right indicators for your business — not vanity metrics, but the signals that tell you whether visibility is improving, systems are converting, and growth is real and sustainable.",
    details: ["Visibility and discoverability tracking", "Conversion and lead flow monitoring", "System performance review", "Clear reporting and insight summaries"],
  },
  {
    num: "05",
    title: "Optimization",
    subtitle: "Improve and scale",
    body: "The final stage is never truly final — it is the beginning of an ongoing cycle. Optimization uses measurement data to refine what is working, fix what is not, and identify the next layer of growth. This is how businesses move from consistent to scalable.",
    details: ["Performance-based refinements", "Visibility and content updates", "Systems scaling and automation expansion", "Strategic evolution as the business grows"],
  },
];

export default function KirauniMethod() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>Our Framework</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Think. Plan. Execute.
              </h1>
              <p className="font-['Montserrat'] font-500 text-[#6B3FA0] text-xl mb-6">The Kirauni Method</p>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans']">
                The Kirauni Method is a five-step strategic framework designed to move businesses from confusion and inconsistency to clarity, execution, and measurable momentum.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-gray">
        <div className="container">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid #e8e8e8", backgroundColor: "#FFFFFF" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Number column */}
                    <div
                      className="lg:col-span-2 p-8 flex items-start justify-center"
                      style={{ backgroundColor: i % 2 === 0 ? "#6B3FA0" : "#1A1A1A" }}
                    >
                      <div className="text-center">
                        <span className="font-['Montserrat'] font-800 text-5xl" style={{ color: "rgba(255,255,255,0.2)" }}>{step.num}</span>
                        <div className="w-8 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#D4AF37" }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10 p-8 lg:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h2 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-2xl mb-2">{step.title}</h2>
                          <p className="font-['Montserrat'] font-500 text-sm mb-4" style={{ color: "#6B3FA0" }}>{step.subtitle}</p>
                          <p className="text-[#6B7280] leading-relaxed font-['Open_Sans'] text-sm">{step.body}</p>
                        </div>
                        <div>
                          <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-3" style={{ color: "#D4AF37" }}>What This Includes</p>
                          <ul className="space-y-2">
                            {step.details.map((d) => (
                              <li key={d} className="flex items-start gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#6B3FA0" }} />
                                <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{d}</span>
                              </li>
                            ))}
                          </ul>
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
            <GoldEyebrow>Ready to Begin?</GoldEyebrow>
            <h2 className="font-['Montserrat'] font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Let's Build Your Strategy
            </h2>
            <p className="text-purple-200 mb-8 font-['Open_Sans'] text-lg max-w-xl mx-auto">
              The Kirauni Method is not just a framework — it is a commitment to your business's clarity, visibility, and growth.
            </p>
            <Link href="/work-with-us" className="btn-white">
              Work With Kirauni
              <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
