/**
 * Kirauni Strategies — Work With Us Page
 * Design: Crown Authority — three clear paths, each navigates to its own dedicated page
 * Path 1: Free Visibility Scan → /visibility-scan (Cal.com embed)
 * Path 2: Strategy + Visibility Audit → /strategy-audit (Cal.com embed)
 * Path 3: Systems + Implementation → /apply (Application form page)
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Zap, BarChart2, Settings } from "lucide-react";

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

const paths = [
  {
    number: "01",
    badge: "Complimentary",
    badgeColor: "#059669",
    icon: <Zap size={24} />,
    title: "Free Visibility Scan",
    subtitle: "See what is missing — and exactly how to fix it.",
    description: "A quick but powerful look at your current visibility. No commitment required. In 30 minutes, you will walk away with 3 quick wins and a clear picture of your biggest gaps.",
    includes: ["3 quick wins identified", "Visibility gaps mapped", "Clear next steps outlined", "No pitch, no pressure"],
    cta: "Book Free Visibility Scan",
    href: "/visibility-scan",
    highlight: false,
  },
  {
    number: "02",
    badge: "Most Popular",
    badgeColor: "#D4AF37",
    icon: <BarChart2 size={24} />,
    title: "Strategy + Visibility Audit",
    subtitle: "A deeper look at what is limiting your growth.",
    description: "Comprehensive analysis with a prioritized action plan you can execute immediately. A custom 30-day roadmap is prepared before your session.",
    includes: ["Deep dive analysis", "Messaging and positioning review", "Prioritized action plan", "Custom 30-day roadmap"],
    cta: "Book Your Strategy Audit",
    href: "/strategy-audit",
    highlight: true,
  },
  {
    number: "03",
    badge: "Full Implementation",
    badgeColor: "#6B3FA0",
    icon: <Settings size={24} />,
    title: "Systems + Implementation",
    subtitle: "Build the structure behind the visibility.",
    description: "Full implementation support — we build and install the systems for you. This is for businesses ready to invest in long-term, scalable infrastructure.",
    includes: ["Workflow automation built", "Lead capture and follow-up", "Scalable systems installed", "Ongoing support available"],
    cta: "Apply to Work Together",
    href: "/apply",
    highlight: false,
  },
];

export default function WorkWithUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container">
          <div className="gold-eyebrow mb-4">Get Started</div>
          <h1
            className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Ready for strategy{" "}
            <span style={{ color: "#6B3FA0" }}>with structure?</span>
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed max-w-2xl font-['Open_Sans']">
            Kirauni is built for businesses that are ready to move with clarity, not chaos. Choose the path that matches where you are right now — each one leads somewhere specific.
          </p>
        </div>
      </section>

      {/* ===== THREE PATHS ===== */}
      <section className="section-gray">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-eyebrow mb-3">Choose Your Path</div>
            <h2
              className="font-['Montserrat'] font-bold text-[#1A1A1A]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
            >
              Three ways to work with Kirauni
            </h2>
            <p className="text-[#6B7280] mt-3 font-['Open_Sans'] max-w-xl mx-auto">
              Click the button on the card that matches where you are right now. Each path opens its own dedicated page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path, i) => (
              <FadeSection key={path.number} delay={i * 100}>
                <div
                  className="bg-white rounded-xl flex flex-col overflow-hidden h-full"
                  style={{
                    border: path.highlight ? "2px solid #6B3FA0" : "1px solid #e5e7eb",
                    boxShadow: path.highlight ? "0 8px 32px rgba(107,63,160,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Card top */}
                  <div className="px-6 pt-6 pb-5" style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: path.highlight ? "#6B3FA0" : "#f3f0f8", color: path.highlight ? "white" : "#6B3FA0" }}
                      >
                        {path.icon}
                      </div>
                      <span
                        className="text-xs font-['Montserrat'] font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${path.badgeColor}18`,
                          color: path.badgeColor,
                          border: `1px solid ${path.badgeColor}40`,
                        }}
                      >
                        {path.badge}
                      </span>
                    </div>
                    <p className="font-['Montserrat'] font-bold text-xs tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>
                      {path.number}
                    </p>
                    <h3 className="font-['Montserrat'] font-bold text-[#1A1A1A] text-xl mb-1">{path.title}</h3>
                    <p className="text-sm font-['Open_Sans'] font-semibold mb-3" style={{ color: "#6B3FA0" }}>{path.subtitle}</p>
                    <p className="text-sm text-[#6B7280] font-['Open_Sans'] leading-relaxed">{path.description}</p>
                  </div>

                  {/* Includes */}
                  <div className="px-6 py-5 flex-1">
                    <p className="text-xs font-['Montserrat'] font-semibold tracking-wider uppercase text-[#9CA3AF] mb-3">What's included</p>
                    <ul className="space-y-2">
                      {path.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                          <span className="text-sm font-['Open_Sans'] text-[#374151]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <Link
                      href={path.href}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-['Montserrat'] font-semibold text-sm transition-all duration-200 hover:opacity-90"
                      style={
                        path.highlight
                          ? { backgroundColor: "#6B3FA0", color: "white" }
                          : { backgroundColor: "#f3f0f8", color: "#6B3FA0", border: "1px solid #6B3FA0" }
                      }
                    >
                      {path.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOT SURE STRIP ===== */}
      <section className="py-14" style={{ backgroundColor: "#1E0A35" }}>
        <div className="container text-center">
          <p className="font-['Open_Sans'] text-purple-300 mb-2">Not sure where to start?</p>
          <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-5">
            The Free Visibility Scan is the best first step — and it costs nothing.
          </h3>
          <Link href="/visibility-scan" className="inline-flex items-center gap-2 btn-gold">
            Book Free Visibility Scan
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
