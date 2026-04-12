/**
 * Kirauni Strategies — Services Page
 * Design: Crown Authority — horizontal card grid, purple/gold palette
 * Consolidated with invest.kiraunistrategies.com content:
 *   - Free Visibility Scan (Complimentary)
 *   - AI Visibility Audit ($1,500) — Most Popular Starting Point
 *   - Brand Foundation Sprint ($2,500) — Tier 1
 *   - AI Visibility + Clarity Build ($7,500) — Tier 2 / Recommended
 *   - AI Visibility + Automation System ($22,000) — Tier 3
 *   - Ongoing Growth Support ($3,500/mo) — Monthly Retainer
 *   - AI Telephone Agent ($1,500 setup) — Add-On (highlighted)
 * Fix: Card headers use solid dark overlay for visibility over images
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Phone, Zap } from "lucide-react";

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

const startingPoints = [
  {
    badge: "Complimentary",
    badgeStyle: { backgroundColor: "#10B981", color: "#fff" },
    title: "Free Visibility Scan",
    tagline: "See what is missing — and exactly how to fix it.",
    price: "Free",
    priceNote: "30-minute session",
    includes: [
      "Review of your Google Business Profile and online presence",
      "Identification of 3 quick wins you can implement immediately",
      "Visibility gap analysis",
      "Clear next steps tailored to your business",
    ],
    cta: "Book Your Free Visibility Scan",
    href: VISIBILITY_SCAN_URL,
    image: WEB3_IMAGE,
    featured: false,
  },
  {
    badge: "Most Popular Starting Point",
    badgeStyle: { backgroundColor: "#D4AF37", color: "#1A1A1A" },
    title: "AI Visibility Audit",
    tagline: "A deep-dive audit of your current online presence, messaging, and AI readiness.",
    price: "$1,500",
    priceNote: "one-time",
    includes: [
      "Full digital presence review",
      "AI readiness assessment",
      "Prioritized action plan",
      "Quick wins identified",
    ],
    cta: "Book Your Strategy Audit",
    href: STRATEGY_AUDIT_URL,
    image: WEB2_IMAGE,
    featured: true,
  },
];

const tiers = [
  {
    tier: "Tier 1",
    title: "Brand Foundation Sprint",
    tagline: "Clarify your brand voice, messaging, and positioning.",
    price: "$2,500",
    priceNote: "starting at",
    desc: "Includes a brand identity system, messaging framework, and a 30-day visibility plan — so you show up with confidence.",
    includes: [
      "Brand identity system",
      "Messaging framework",
      "30-day visibility plan",
      "Digital presence setup",
    ],
    featured: false,
  },
  {
    tier: "Tier 2 — Recommended",
    title: "AI Visibility + Clarity Build",
    tagline: "AI-powered content strategy, brand clarity, and a custom visibility system.",
    price: "$7,500",
    priceNote: "starting at",
    desc: "Built for businesses ready to show up consistently so clients can find you, trust you, and hire you.",
    includes: [
      "AI content strategy + calendar",
      "AI workflow setup",
      "Lead capture system",
      "SEO & AEO visibility build",
    ],
    featured: true,
  },
  {
    tier: "Tier 3",
    title: "AI Visibility + Automation System",
    tagline: "Full-scale AI strategy and systems build for serious scale.",
    price: "$22,000",
    priceNote: "starting at",
    desc: "Everything in Tier 2 plus full automation, CRM integration, AI phone agent, and 90-day implementation support.",
    includes: [
      "Full automation setup",
      "CRM integration",
      "AI phone agent included",
      "90-day implementation support",
    ],
    featured: false,
  },
];

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout>
      {/* Page Hero */}
      <section className="section-white pt-8">
        <div className="container">
          <FadeSection>
            <GoldEyebrow>What We Offer</GoldEyebrow>
            <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.02em" }}>
              Services built for visibility,<br className="hidden md:block" /> clarity, and systems that scale.
            </h1>
            <p className="text-[#6B7280] text-lg font-['Open_Sans'] max-w-2xl mb-8">
              Every Kirauni service is designed to address a specific gap — visibility, clarity, or systems. Start where you are and build from there.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={VISIBILITY_SCAN_URL} className="btn-primary">
                <span>Book Free Visibility Scan</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/work-with-us" className="btn-secondary">
                Work With Us
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Starting Points — Free Scan + AI Visibility Audit */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="mb-10">
              <GoldEyebrow>Starting Points</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Choose Your Starting Point
              </h2>
              <p className="text-[#6B7280] font-['Open_Sans']">
                Every service is designed to move you forward from where you are right now.
              </p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {startingPoints.map((svc, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div
                  className="rounded-xl overflow-hidden h-full flex flex-col card-hover"
                  style={{ border: svc.featured ? "2px solid #D4AF37" : "1px solid #e8e8e8", backgroundColor: "#fff" }}
                >
                  {/* Image with solid dark header overlay for readability */}
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    {/* Solid dark gradient overlay — ensures text is always readable */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(10,5,20,0.88) 0%, rgba(10,5,20,0.65) 55%, rgba(10,5,20,0.15) 100%)" }}
                    />
                    <div className="absolute top-0 left-0 right-0 p-5">
                      <span
                        className="inline-block text-xs font-['Montserrat'] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3"
                        style={svc.badgeStyle}
                      >
                        {svc.badge}
                      </span>
                      <h3 className="font-['Montserrat'] font-bold text-white text-xl leading-tight drop-shadow">{svc.title}</h3>
                      <p className="text-white/85 text-sm mt-1.5 font-['Open_Sans'] drop-shadow">{svc.tagline}</p>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="font-['Montserrat'] font-bold text-2xl text-[#1A1A1A]">{svc.price}</span>
                      <span className="text-sm text-[#6B7280] font-['Open_Sans']">{svc.priceNote}</span>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                          <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={svc.href} className={svc.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                      {svc.cta}
                    </Link>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Tiers */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="mb-10">
              <GoldEyebrow>Implementation Packages</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Done-For-You Strategy &amp; Systems
              </h2>
              <p className="text-[#6B7280] font-['Open_Sans'] max-w-2xl">
                For businesses ready to invest in real infrastructure. Each tier builds on the last — start where your budget and readiness align.
              </p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((t, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-xl p-7 h-full flex flex-col card-hover"
                  style={{
                    border: t.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8",
                    backgroundColor: t.featured ? "#6B3FA0" : "#fff",
                  }}
                >
                  {t.featured && (
                    <span className="inline-block text-xs font-['Montserrat'] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4 self-start" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                      Recommended
                    </span>
                  )}
                  <div className={`text-xs font-['Montserrat'] font-semibold tracking-wider uppercase mb-2 ${t.featured ? "text-purple-300" : "text-[#6B3FA0]"}`}>{t.tier}</div>
                  <h3 className={`font-['Montserrat'] font-bold text-xl mb-2 leading-tight ${t.featured ? "text-white" : "text-[#1A1A1A]"}`}>{t.title}</h3>
                  <p className={`text-sm mb-4 font-['Open_Sans'] leading-relaxed ${t.featured ? "text-purple-200" : "text-[#6B7280]"}`}>{t.desc}</p>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className={`font-['Montserrat'] font-bold text-2xl ${t.featured ? "text-white" : "text-[#1A1A1A]"}`}>{t.price}</span>
                    <span className={`text-sm font-['Open_Sans'] ${t.featured ? "text-purple-300" : "text-[#6B7280]"}`}>{t.priceNote}</span>
                  </div>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {t.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: t.featured ? "#D4AF37" : "#6B3FA0" }} />
                        <span className={`text-sm font-['Open_Sans'] ${t.featured ? "text-purple-100" : "text-[#1A1A1A]"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/apply" className={t.featured ? "btn-white" : "btn-secondary"}>
                    Apply to Work Together
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Retainer */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="mb-8">
              <GoldEyebrow>Ongoing Support</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Monthly Retainer
              </h2>
            </div>
          </FadeSection>
          <FadeSection delay={80}>
            <div className="rounded-xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center" style={{ border: "2px solid #6B3FA0", backgroundColor: "#fff" }}>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-['Montserrat'] font-bold text-3xl text-[#1A1A1A]">$3,500</span>
                  <span className="text-[#6B7280] font-['Open_Sans']">per month</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#1A1A1A] mb-2">Ongoing Growth Support</h3>
                <p className="text-[#6B7280] font-['Open_Sans'] text-sm leading-relaxed max-w-xl">
                  Monthly strategic support for execution, accountability, strategy updates, and implementation oversight. Priority access to Shavonne and the full Kirauni team.
                </p>
              </div>
              <div className="flex-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {["Monthly strategy sessions", "Content + visibility support", "System optimization", "Priority team access"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                      <span className="text-sm font-['Open_Sans'] text-[#1A1A1A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Link href="/apply" className="btn-primary whitespace-nowrap">
                  Apply for Retainer
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* AI Phone Agent — Add-On (highlighted) */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="rounded-xl overflow-hidden" style={{ border: "2px solid #D4AF37" }}>
              <div className="p-2.5 text-center font-['Montserrat'] font-bold text-xs tracking-wider uppercase" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                ✦ Add-On Service — Available with Any Package ✦
              </div>
              <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center" style={{ backgroundColor: "#1A0A2E" }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#6B3FA0" }}>
                    <Phone size={28} color="#D4AF37" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-['Montserrat'] font-bold text-white text-2xl">AI Telephone Agent</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-['Montserrat'] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                      <Zap size={10} />
                      New
                    </span>
                  </div>
                  <p className="text-purple-200 font-['Open_Sans'] text-sm leading-relaxed mb-4 max-w-xl">
                    A custom AI phone agent that answers every call 24/7, books appointments, handles FAQs, and captures leads — all in your brand voice. Never miss a lead again.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["24/7 call answering", "Appointment booking via text", "Lead capture + follow-up SMS", "Trained on your business"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                        <span className="text-purple-200 text-sm font-['Open_Sans']">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 text-center lg:text-right">
                  <div className="font-['Montserrat'] font-bold text-white text-2xl mb-1">$1,500</div>
                  <div className="text-purple-300 text-sm font-['Open_Sans'] mb-5">setup fee</div>
                  <a href="https://pay.kiraunistrategies.com/b/5kQaEXdGa1Yp7gz1fbeME05" className="btn-gold whitespace-nowrap">
                    Add to My Package
                  </a>
                </div>
              </div>
            </div>
          </FadeSection>
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
              <Link href={VISIBILITY_SCAN_URL} className="btn-white">
                <span>Book Free Visibility Scan</span>
                <ArrowRight size={16} />
              </Link>
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
