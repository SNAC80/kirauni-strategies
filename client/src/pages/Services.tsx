/**
 * Kirauni Strategies — Services Page
 * Design: Crown Authority — horizontal card grid, purple/gold palette
 * Fix: Free Visibility Scan → Cal.com, all cards horizontally aligned, page-top anchor,
 *      scroll to top on mount, retainer cards same height
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const VISIBILITY_SCAN_URL = "/visibility-scan";
const STRATEGY_AUDIT_URL = "/strategy-audit";
const WEB1_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web1_a62da9d9.png";
const WEB2_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web2_e398e1ad.png";
const WEB3_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web3_89638a18.png";

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

const services = [
  {
    title: "Free Visibility Scan",
    tagline: "See what is missing — and exactly how to fix it.",
    audience: "For businesses that want to understand their current visibility before investing.",
    includes: [
      "Review of your Google Business Profile and online presence",
      "Identification of 3 quick wins you can implement immediately",
      "Visibility gap analysis",
      "Clear next steps tailored to your business",
    ],
    price: "Complimentary",
    cta: "Book Your Free Visibility Scan",
    href: VISIBILITY_SCAN_URL,
    isExternal: true,
    image: WEB3_IMAGE,
    featured: false,
  },
  {
    title: "Strategy + Visibility Audit",
    tagline: "A comprehensive look at what is limiting your growth.",
    audience: "For businesses ready to understand the full picture and get a clear action plan.",
    includes: [
      "Deep dive analysis of your digital presence and positioning",
      "Google Business Profile and AI search optimization review",
      "Messaging and brand clarity assessment",
      "Prioritized action plan with implementation guidance",
    ],
    price: "Starting at $297",
    cta: "Book Your Strategy Audit",
    href: VISIBILITY_SCAN_URL,
    isExternal: true,
    image: WEB2_IMAGE,
    featured: true,
  },
  {
    title: "AI Visibility Optimization",
    tagline: "Get found in AI-powered search and local discovery.",
    audience: "For businesses that need to show up where customers are searching.",
    includes: [
      "Google Business Profile optimization and management",
      "AI search visibility improvements",
      "Local SEO and presence enhancement",
      "Monthly performance reporting",
    ],
    price: "Starting at $497/mo",
    cta: "Apply to Work Together",
    href: "/work-with-us",
    isExternal: false,
    image: WEB1_IMAGE,
    featured: false,
  },
  {
    title: "AI Visibility + Automation System",
    tagline: "Visibility and systems working together to convert.",
    audience: "For businesses ready to build infrastructure that captures and converts leads.",
    includes: [
      "Full AI visibility optimization package",
      "Lead capture and follow-up automation",
      "Workflow automation for client intake",
      "Systems documentation and training",
    ],
    price: "Starting at $997/mo",
    cta: "Apply to Work Together",
    href: "/work-with-us",
    isExternal: false,
    image: WEB3_IMAGE,
    featured: false,
  },
  {
    title: "Brand Foundation Sprint",
    tagline: "Build the brand infrastructure your business needs to grow.",
    audience: "For new or early-stage businesses establishing their brand identity.",
    includes: [
      "Brand messaging and positioning framework",
      "Visual identity direction and guidelines",
      "Offer clarity and audience definition",
      "Launch-ready brand assets",
    ],
    price: "Starting at $1,497",
    cta: "Apply to Work Together",
    href: "/work-with-us",
    isExternal: false,
    image: WEB2_IMAGE,
    featured: false,
  },
];

const retainers = [
  {
    name: "Visibility Essentials",
    price: "$497",
    period: "/month",
    desc: "For businesses that need consistent visibility management and monthly strategy support.",
    includes: ["Google Business Profile management", "Monthly visibility report", "1 strategy call per month", "Email support"],
    featured: false,
  },
  {
    name: "Growth Partner",
    price: "$997",
    period: "/month",
    desc: "For businesses ready to grow with ongoing visibility, systems, and strategic support.",
    includes: ["Everything in Visibility Essentials", "Automation and systems support", "Content strategy guidance", "2 strategy calls per month", "Priority support"],
    featured: true,
  },
  {
    name: "Strategic Operations",
    price: "$1,997",
    period: "/month",
    desc: "For businesses that need a full strategic operations partner for visibility and systems.",
    includes: ["Everything in Growth Partner", "Full systems implementation", "Brand and messaging management", "Weekly check-ins", "Dedicated strategy support"],
    featured: false,
  },
];

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-white pt-8">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>What We Offer</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Services built for visibility, clarity, and systems that scale.
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans'] mb-8">
                Every Kirauni service is designed to address a specific gap — visibility, clarity, or systems. Start where you are and build from there.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={VISIBILITY_SCAN_URL} className="btn-primary">
                  <span>Book Free Visibility Scan</span>
                  <ArrowRight size={16} />
                </a>
                <Link href="/work-with-us" className="btn-secondary">
                  Work With Us
                </Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Services — 3-column grid, all cards same height */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="mb-10">
              <GoldEyebrow>Our Services</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Choose Your Starting Point
              </h2>
              <p className="text-[#6B7280] font-['Open_Sans'] mt-2">Every service is designed to move you forward from where you are right now.</p>
            </div>
          </FadeSection>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
            {services.slice(0, 3).map((svc, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-lg overflow-hidden h-full flex flex-col card-hover"
                  style={{ border: svc.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8", backgroundColor: "#FFFFFF" }}
                >
                  {svc.featured && (
                    <div className="px-6 pt-4">
                      <span className="text-xs font-['Montserrat'] font-semibold tracking-wider uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                        Most Requested
                      </span>
                    </div>
                  )}
                  <div className="relative overflow-hidden" style={{ height: "150px" }}>
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: svc.featured ? "rgba(107, 63, 160, 0.55)" : "rgba(26, 26, 26, 0.4)" }} />
                    <div className="absolute bottom-3 left-5">
                      <p className="font-['Montserrat'] font-bold text-white text-base leading-tight">{svc.title}</p>
                      <p className="font-['Montserrat'] font-semibold text-xs mt-0.5" style={{ color: "#D4AF37" }}>{svc.price}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#6B7280] text-sm font-['Open_Sans'] leading-relaxed mb-3">{svc.tagline}</p>
                    <p className="text-xs font-['Montserrat'] font-semibold uppercase tracking-wider mb-2" style={{ color: "#D4AF37" }}>Includes</p>
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                          <span className="text-[#1A1A1A] text-xs font-['Open_Sans']">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {svc.isExternal ? (
                      <a href={svc.href} className="btn-primary text-sm py-2.5 w-full justify-center">
                        {svc.cta}
                      </a>
                    ) : (
                      <Link href={svc.href} className="btn-secondary text-sm py-2.5 w-full justify-center">
                        {svc.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {services.slice(3).map((svc, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-lg overflow-hidden h-full flex flex-col card-hover"
                  style={{ border: "1px solid #e8e8e8", backgroundColor: "#FFFFFF" }}
                >
                  <div className="relative overflow-hidden" style={{ height: "130px" }}>
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "rgba(26, 26, 26, 0.4)" }} />
                    <div className="absolute bottom-3 left-5">
                      <p className="font-['Montserrat'] font-bold text-white text-base leading-tight">{svc.title}</p>
                      <p className="font-['Montserrat'] font-semibold text-xs mt-0.5" style={{ color: "#D4AF37" }}>{svc.price}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#6B7280] text-sm font-['Open_Sans'] leading-relaxed mb-3">{svc.tagline}</p>
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                          <span className="text-[#1A1A1A] text-xs font-['Open_Sans']">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={svc.href} className="btn-secondary text-sm py-2.5 w-full justify-center">
                      {svc.cta}
                    </Link>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retainers — 3 cards same height */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="text-center mb-10">
              <GoldEyebrow>Ongoing Support</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Monthly Retainer Plans
              </h2>
              <p className="text-[#6B7280] font-['Open_Sans'] max-w-xl mx-auto">
                For businesses that need consistent, ongoing support to maintain and grow their visibility and systems.
              </p>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {retainers.map((r, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-lg p-8 h-full flex flex-col card-hover"
                  style={{
                    border: r.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8",
                    backgroundColor: r.featured ? "#6B3FA0" : "#FFFFFF",
                  }}
                >
                  {r.featured && (
                    <div className="mb-4">
                      <span className="text-xs font-['Montserrat'] font-semibold tracking-wider uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                        Best Value
                      </span>
                    </div>
                  )}
                  <h3 className={`font-['Montserrat'] font-bold text-xl mb-2 ${r.featured ? "text-white" : "text-[#1A1A1A]"}`}>{r.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`font-['Montserrat'] font-bold text-3xl ${r.featured ? "text-white" : "text-[#1A1A1A]"}`}>{r.price}</span>
                    <span className={`text-sm font-['Open_Sans'] ${r.featured ? "text-purple-200" : "text-[#6B7280]"}`}>{r.period}</span>
                  </div>
                  <p className={`text-sm mb-6 font-['Open_Sans'] leading-relaxed ${r.featured ? "text-purple-200" : "text-[#6B7280]"}`}>{r.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {r.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: r.featured ? "#D4AF37" : "#6B3FA0" }} />
                        <span className={`text-sm font-['Open_Sans'] ${r.featured ? "text-purple-100" : "text-[#1A1A1A]"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/work-with-us" className={r.featured ? "btn-white" : "btn-secondary"}>
                    Apply for This Plan
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-purple relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#D4AF37", filter: "blur(100px)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <FadeSection>
            <GoldEyebrow>Get Started</GoldEyebrow>
            <h2 className="font-['Montserrat'] font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Not sure which service is right for you?
            </h2>
            <p className="text-purple-200 mb-8 font-['Open_Sans'] text-lg max-w-xl mx-auto">
              Start with a free visibility scan. In 30 minutes, we will identify your biggest gaps and recommend the right path forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={VISIBILITY_SCAN_URL} className="btn-white">
                <span>Book Free Visibility Scan</span>
                <ArrowRight size={16} />
              </a>
              <Link href="/work-with-us" className="btn-gold">
                Work With Us
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
