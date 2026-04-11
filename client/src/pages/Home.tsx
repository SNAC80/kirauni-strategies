/**
 * Kirauni Strategies — Home Page
 * Design: Crown Authority — editorial asymmetric layout, purple/gold/white palette
 * Sections: Hero, Problem, Three Pillars, AI Growth Bridge, Kirauni Method Preview,
 *           Client Wins Preview, Work With Kirauni, Behind the Crown, Contact Teaser, Newsletter
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowRight, CheckCircle2, Search, Lightbulb, Settings, TrendingUp, Eye } from "lucide-react";

const VISIBILITY_SCAN_URL = "/visibility-scan";
const STRATEGY_AUDIT_URL = "/strategy-audit";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Untitleddesign(10)_290db42d.png";
const KCELL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/KSCell(1)_aab683bb.png";
const WEB1_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web1_a62da9d9.png";
const WEB2_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web2_e398e1ad.png";
const WEB3_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/Web3_89638a18.png";

function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="gold-eyebrow">
      {children}
    </div>
  );
}

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease-out ${delay}ms, transform 0.55s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSubmitted(true);
  };

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Geometric background with crown-inspired angular shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Right panel soft gradient */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full"
            style={{ background: "linear-gradient(135deg, #f8f5ff 0%, #FFFFFF 60%)" }}
          />
          {/* Gold accent diagonal stripe */}
          <div
            className="absolute top-0 right-0 w-px h-full opacity-20"
            style={{ background: "linear-gradient(180deg, transparent 0%, #D4AF37 30%, #D4AF37 70%, transparent 100%)", left: "58.33%" }}
          />
          {/* Purple glow bottom left */}
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-6"
            style={{ background: "#6B3FA0", filter: "blur(100px)", transform: "translate(-30%, 30%)" }}
          />
          {/* Gold glow top right */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5"
            style={{ background: "#D4AF37", filter: "blur(80px)", transform: "translate(20%, -20%)" }}
          />
        </div>

        <div className="container relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text — 7 columns */}
            <div className="lg:col-span-7">
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease-out 0ms, transform 0.5s ease-out 0ms",
                }}
              >
                <GoldEyebrow>Where Strategy Meets Excellence</GoldEyebrow>
              </div>

              <h1
                className="font-['Montserrat'] font-bold text-[#1A1A1A] leading-tight mb-6"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease-out 120ms, transform 0.5s ease-out 120ms",
                }}
              >
                Get Found. Get Clear.{" "}
                <span style={{ color: "#6B3FA0" }}>Build a Business That Runs Better.</span>
              </h1>

              <p
                className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-xl font-['Open_Sans']"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease-out 240ms, transform 0.5s ease-out 240ms",
                }}
              >
                Kirauni Strategies helps small to mid-sized businesses fix visibility gaps, sharpen their message, and build systems that scale in an AI-driven economy.
              </p>

              <div
                className="flex flex-wrap gap-4 mb-10"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease-out 360ms, transform 0.5s ease-out 360ms",
                }}
              >
                <Link href={VISIBILITY_SCAN_URL} className="btn-primary">
                  <span>Start Your Free Visibility Scan</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/work-with-us" className="btn-secondary">
                  Work With Us
                </Link>
              </div>

              <div
                className="flex items-center gap-2"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transition: "opacity 0.5s ease-out 480ms",
                }}
              >
                <div className="flex flex-nowrap items-center gap-x-5 gap-y-2 overflow-x-auto">
                  {[
                    "Houston-based",
                    "Black woman-led",
                    "AI-powered systems",
                    "20+ years experience"
                  ].map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs font-['Montserrat'] tracking-wide whitespace-nowrap flex-shrink-0" style={{ color: "#6B7280" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#D4AF37" }} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image — 5 columns */}
            <div
              className="lg:col-span-5 relative"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateX(0)" : "translateX(30px)",
                transition: "opacity 0.7s ease-out 200ms, transform 0.7s ease-out 200ms",
              }}
            >
              <div className="relative">
                {/* Purple accent block behind */}
                <div
                  className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-lg"
                  style={{ backgroundColor: "rgba(107, 63, 160, 0.06)" }}
                />
                {/* Gold accent border */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-lg"
                  style={{ border: "2px solid #D4AF37", opacity: 0.35 }}
                />
                <img
                  src={HERO_IMAGE}
                  alt="Kirauni Strategies — Strategy consultation"
                  className="relative z-10 w-full rounded-lg object-cover shadow-2xl"
                  style={{ maxHeight: "520px", objectPosition: "center top" }}
                />
                {/* Floating badge — AI Powered */}
                <div
                  className="absolute -bottom-5 -left-5 z-20 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3"
                  style={{ border: "1px solid #f0f0f0" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#6B3FA0" }}>
                    <TrendingUp size={18} color="white" />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-semibold text-sm text-[#1A1A1A]">AI-Powered</p>
                    <p className="font-['Open_Sans'] text-xs text-[#6B7280]">Visibility & Systems</p>
                  </div>
                </div>
                {/* Floating badge — Houston */}
                <div
                  className="absolute top-4 -right-4 z-20 bg-white rounded-lg shadow-lg px-3 py-2"
                  style={{ border: "1px solid #f0f0f0" }}
                >
                  <p className="font-['Montserrat'] font-semibold text-xs" style={{ color: "#D4AF37" }}>Houston, TX</p>
                  <p className="font-['Open_Sans'] text-xs text-[#6B7280]">Boutique Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="section-gray">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeSection>
              <GoldEyebrow>The Real Challenge</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                You do not have a business problem.<br />
                <span style={{ color: "#6B3FA0" }}>You have a visibility problem.</span>
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-12 font-['Open_Sans']">
                Most small businesses are not struggling because they are bad at what they do. They are struggling because they are not showing up, their message is unclear, and their systems are not built to convert. That is exactly what Kirauni fixes.
              </p>
            </FadeSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  icon: <Search size={24} />,
                  bullet: "Not showing up in search or AI tools",
                  title: "You are invisible online.",
                  desc: "Visibility is not optional. If you are not showing up in search or AI tools, you are losing business to competitors who are.",
                },
                {
                  icon: <Lightbulb size={24} />,
                  bullet: "Message is not clear",
                  title: "Your message is confusing.",
                  desc: "If people do not understand what you do in seconds, they will not buy it — no matter how good you are at what you do.",
                },
                {
                  icon: <Settings size={24} />,
                  bullet: "Systems are not built to convert",
                  title: "Your systems are not built to convert.",
                  desc: "Without systems, every lead is a missed opportunity. Structure creates consistent results and scalable growth.",
                },
              ].map((item, i) => (
                <FadeSection key={i} delay={i * 120} className="h-full">
                  <div className="bg-white rounded-lg p-6 text-left card-hover h-full flex flex-col" style={{ border: "1px solid #e8e8e8", minHeight: "220px" }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 flex-shrink-0" style={{ backgroundColor: "rgba(107, 63, 160, 0.08)" }}>
                      <span style={{ color: "#6B3FA0" }}>{item.icon}</span>
                    </div>
                    <p className="text-xs font-['Montserrat'] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#D4AF37" }}>{item.bullet}</p>
                    <h3 className="font-['Montserrat'] font-bold text-[#1A1A1A] text-base mb-2 leading-snug">{item.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed font-['Open_Sans'] flex-1">{item.desc}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="mb-12">
              <GoldEyebrow>Our Approach</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                Clarity. Visibility. Systems that convert.
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Pillar 1 — Visibility */}
            <FadeSection delay={0}>
              <div className="rounded-lg overflow-hidden card-hover" style={{ border: "1px solid #e8e8e8" }}>
                <div className="p-8" style={{ backgroundColor: "#6B3FA0" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat'] text-xs tracking-widest uppercase font-500" style={{ color: "#D4AF37" }}>01</span>
                    <Eye size={28} color="rgba(255,255,255,0.6)" />
                  </div>
                  <h3 className="font-['Montserrat'] font-700 text-white text-2xl mb-1">Visibility</h3>
                  <p className="font-['Montserrat'] font-500 text-sm" style={{ color: "#D4AF37" }}>Get Found</p>
                </div>
                <div className="p-8 bg-white">
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5 font-['Open_Sans']">
                    Show up where your customers are already searching.
                  </p>
                  <ul className="space-y-2.5">
                    {["Google Business Profile optimization", "AI and search visibility", "Local presence that ranks"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                        <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeSection>

            {/* Pillar 2 — Clarity (taller) */}
            <FadeSection delay={120}>
              <div className="rounded-lg overflow-hidden card-hover lg:mt-6" style={{ border: "2px solid #6B3FA0" }}>
                <div className="p-8" style={{ backgroundColor: "#F5F5F5" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat'] text-xs tracking-widest uppercase font-500" style={{ color: "#D4AF37" }}>02</span>
                    <Lightbulb size={28} style={{ color: "#6B3FA0" }} />
                  </div>
                  <h3 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-2xl mb-1">Clarity</h3>
                  <p className="font-['Montserrat'] font-500 text-sm" style={{ color: "#6B3FA0" }}>Be Understood</p>
                </div>
                <div className="p-8 bg-white">
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5 font-['Open_Sans']">
                    If people do not understand it, they will not buy it.
                  </p>
                  <ul className="space-y-2.5">
                    {["Messaging and positioning", "Brand clarity", "Offer refinement"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                        <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-[#6B7280] font-['Open_Sans'] italic">
                      "Most businesses do not have a quality problem. They have a visibility and systems problem."
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>

            {/* Pillar 3 — Systems */}
            <FadeSection delay={240}>
              <div className="rounded-lg overflow-hidden card-hover" style={{ border: "1px solid #e8e8e8" }}>
                <div className="p-8" style={{ backgroundColor: "#1A1A1A" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat'] text-xs tracking-widest uppercase font-500" style={{ color: "#D4AF37" }}>03</span>
                    <Settings size={28} color="rgba(255,255,255,0.6)" />
                  </div>
                  <h3 className="font-['Montserrat'] font-700 text-white text-2xl mb-1">Systems</h3>
                  <p className="font-['Montserrat'] font-500 text-sm" style={{ color: "#D4AF37" }}>Make It Convert</p>
                </div>
                <div className="p-8 bg-white">
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5 font-['Open_Sans']">
                    Visibility without systems is lost money.
                  </p>
                  <ul className="space-y-2.5">
                    {["Lead capture and follow-up", "Automations that save time", "Simple systems that scale"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                        <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ===== AI GROWTH BRIDGE ===== */}
      <section className="section-purple relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#D4AF37", filter: "blur(100px)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "#D4AF37", filter: "blur(80px)" }} />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <FadeSection>
                <GoldEyebrow>AI-Powered Growth</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-white mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                  Unlock AI-Powered Growth
                </h2>
                <p className="text-purple-200 text-lg leading-relaxed mb-8 font-['Open_Sans']">
                  We fix what is not working and build what does. Kirauni brings visibility, clarity, and operational structure together so growth is not just possible — it is sustainable.
                </p>
                <Link href="/work-with-us" className="btn-white">
                  Let's Build Your Strategy
                  <ArrowRight size={16} />
                </Link>
              </FadeSection>
            </div>
            <div className="lg:col-span-6">
              <FadeSection delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  <img src={WEB3_IMAGE} alt="AI Systems" className="rounded-lg w-full object-cover shadow-lg" style={{ height: "180px" }} />
                  <img src={WEB1_IMAGE} alt="Business Strategy" className="rounded-lg w-full object-cover shadow-lg mt-8" style={{ height: "180px" }} />
                  <img src={WEB2_IMAGE} alt="Business Analysis" className="rounded-lg w-full object-cover shadow-lg -mt-4" style={{ height: "180px" }} />
                  <div className="rounded-lg flex items-center justify-center p-6" style={{ backgroundColor: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.3)", height: "180px", marginTop: "2rem" }}>
                    <div className="text-center">
                      <p className="font-['Montserrat'] font-700 text-white text-3xl mb-1">20+</p>
                      <p className="font-['Open_Sans'] text-purple-200 text-sm">Years of Systems Experience</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KIRAUNI METHOD PREVIEW ===== */}
      <section className="section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FadeSection>
                <GoldEyebrow>Our Framework</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                  The Kirauni Method
                </h2>
                <p className="font-['Montserrat'] font-500 text-[#6B3FA0] text-lg mb-4">Think. Plan. Execute.</p>
                <p className="text-[#6B7280] leading-relaxed mb-8 font-['Open_Sans']">
                  A proven 5-step framework that turns confusion into clarity and plans into results.
                </p>
                <Link href="/kirauni-method" className="btn-primary">
                  <span>Explore The Kirauni Method</span>
                  <ArrowRight size={16} />
                </Link>
              </FadeSection>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  { num: "01", title: "Discovery", desc: "Understand what is actually going on" },
                  { num: "02", title: "Strategy", desc: "Define what needs to change" },
                  { num: "03", title: "Implementation", desc: "Build what works" },
                  { num: "04", title: "Measurement", desc: "Track what matters" },
                  { num: "05", title: "Optimization", desc: "Improve and scale" },
                ].map((step, i) => (
                  <FadeSection key={i} delay={i * 80}>
                    <div className="flex items-center gap-5 p-5 rounded-lg bg-white" style={{ border: "1px solid #e8e8e8" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(107, 63, 160, 0.08)" }}>
                        <span className="font-['Montserrat'] font-700 text-sm" style={{ color: "#6B3FA0" }}>{step.num}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Montserrat'] font-600 text-[#1A1A1A] text-base">{step.title}</h4>
                        <p className="text-[#6B7280] text-sm font-['Open_Sans']">{step.desc}</p>
                      </div>
                    </div>
                  </FadeSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT WINS PREVIEW ===== */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
              <div>
                <GoldEyebrow>Results</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                  Client Wins
                </h2>
                <p className="text-[#6B7280] mt-2 font-['Open_Sans']">Real businesses. Real clarity. Real momentum.</p>
              </div>
              <Link href="/client-wins" className="btn-secondary flex-shrink-0">
                View All Client Wins
              </Link>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                category: "Visibility + Systems Fix",
                client: "Local Treat Business",
                result: "Clearer order process, improved customer experience, and streamlined operations",
                delivered: "Built branded intake form and streamlined order workflow",
              },
              {
                category: "Visibility Upgrade",
                client: "Personal Brand",
                result: "Stronger first impression across digital platforms",
                delivered: "Enhanced and professionally edited headshot",
              },
              {
                category: "Clarity + Strategy",
                client: "New Business Launch",
                result: "Clear path forward, confident execution, and focused next steps",
                delivered: "Defined business direction and identified key visibility gaps",
              },
              {
                category: "Brand Foundation",
                client: "Therapy Practice",
                result: "Professional brand presence aligned with trust and credibility",
                delivered: "Designed custom logo and established visual identity",
              },
              {
                category: "Strategy + Vision Mapping",
                client: "Early-Stage Brand",
                result: "Clear direction, aligned messaging, and actionable next steps",
                delivered: "Developed concept direction and structured brand vision",
              },
            ].map((win, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="bg-white rounded-lg p-6 h-full card-hover" style={{ border: "1px solid #e8e8e8" }}>
                  <div className="mb-4">
                    <span
                      className="inline-block text-xs font-['Montserrat'] font-600 tracking-wider uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(107, 63, 160, 0.08)", color: "#6B3FA0" }}
                    >
                      {win.category}
                    </span>
                  </div>
                  <h4 className="font-['Montserrat'] font-600 text-[#1A1A1A] text-base mb-3">{win.client}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-1" style={{ color: "#D4AF37" }}>Result</p>
                      <p className="text-[#6B7280] text-sm font-['Open_Sans'] leading-relaxed">{win.result}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-1" style={{ color: "#6B3FA0" }}>Delivered</p>
                      <p className="text-[#6B7280] text-sm font-['Open_Sans'] leading-relaxed">{win.delivered}</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORK WITH KIRAUNI ===== */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="text-center mb-12">
              <GoldEyebrow>Get Started</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                Work With Kirauni Strategies
              </h2>
              <p className="text-[#6B7280] text-lg font-['Open_Sans']">Simple ways to get visible, clear, and scalable.</p>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
              {
                title: "Free Visibility Scan",
                micro: "See what is missing — and exactly how to fix it.",
                bullets: ["3 quick wins", "Visibility gaps", "Clear next steps"],
                cta: "Start Your Free Visibility Scan",
                href: VISIBILITY_SCAN_URL,
                isExternal: false,
                featured: false,
              },
              {
                title: "Strategy + Visibility Audit",
                micro: "A deeper look at what is limiting your growth.",
                bullets: ["Deep dive analysis", "Messaging and positioning", "Action plan"],
                cta: "Book Your Strategy Visibility Audit",
                href: STRATEGY_AUDIT_URL,
                isExternal: false,
                featured: true,
              },
              {
                title: "Systems + Implementation",
                micro: "Build the structure behind the visibility.",
                bullets: ["Workflow automation", "Lead capture and follow-up", "Scalable systems"],
                cta: "Apply to Work Together",
                href: "/work-with-us",
                isExternal: false,
                featured: false,
              },
            ].map((offer, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div
                  className={`rounded-lg p-8 h-full flex flex-col card-hover ${offer.featured ? "" : ""}`}
                  style={{
                    border: offer.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8",
                    backgroundColor: offer.featured ? "#6B3FA0" : "#FFFFFF",
                  }}
                >
                  {offer.featured && (
                    <div className="mb-4">
                      <span className="text-xs font-['Montserrat'] font-600 tracking-wider uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className={`font-['Montserrat'] font-700 text-xl mb-2 ${offer.featured ? "text-white" : "text-[#1A1A1A]"}`}>
                    {offer.title}
                  </h3>
                  <p className={`text-sm mb-5 font-['Open_Sans'] ${offer.featured ? "text-purple-200" : "text-[#6B7280]"}`}>
                    {offer.micro}
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {offer.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: offer.featured ? "#D4AF37" : "#6B3FA0" }} />
                        <span className={`text-sm font-['Open_Sans'] ${offer.featured ? "text-purple-100" : "text-[#1A1A1A]"}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={offer.href} className={offer.featured ? "btn-white" : "btn-secondary"}>
                    {offer.cta}
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection>
            <p className="text-center text-[#6B7280] text-sm font-['Open_Sans']">
              Need something more customized? <Link href="/contact" className="text-[#6B3FA0] font-600 hover:underline">Additional services are available.</Link>
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ===== BEHIND THE CROWN ===== */}
      <section className="section-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FadeSection>
                <div className="relative">
                  <img
                    src={KCELL_IMAGE}
                    alt="Shavonne Ambonisye-Clifton — Founder, Kirauni Strategies"
                    className="w-full rounded-lg object-cover shadow-xl"
                    style={{ maxHeight: "600px", objectPosition: "center top" }}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 w-full h-full rounded-lg pointer-events-none"
                    style={{ border: "2px solid #D4AF37", opacity: 0.25 }}
                  />
                </div>
              </FadeSection>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeSection>
                <GoldEyebrow>The Founder</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                  Behind the Crown
                </h2>
                <p className="font-['Montserrat'] font-500 text-[#6B3FA0] text-lg mb-6">
                  This is not about more marketing. It is about building a business that works.
                </p>
                <div className="space-y-4 text-[#6B7280] leading-relaxed font-['Open_Sans'] mb-8">
                  <p>
                    Through a focus on visibility, clarity, and systems, Kirauni helps businesses get found, get understood, and run with intention. Led by Shavonne Ambonisye-Clifton, a Black woman veteran and strategic operator, Kirauni Strategies was built on a simple truth: most businesses do not have a quality problem. They have a visibility and systems problem.
                  </p>
                  <p>
                    Behind every strong business is structure. Without visibility, you are not seen. Without clarity, you are not chosen. Without systems, you cannot scale. We solve all three so your business can operate with consistency, authority, and growth.
                  </p>
                </div>
                <blockquote className="border-l-4 pl-5 mb-8 italic" style={{ borderColor: "#D4AF37" }}>
                  <p className="text-[#1A1A1A] font-['Montserrat'] font-500 text-base">
                    "Organized systems create organized income — and organized income builds organized empires."
                  </p>
                </blockquote>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-primary">
                    <span>About the Founder</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/work-with-us" className="btn-secondary">
                    Work With Us
                  </Link>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT TEASER ===== */}
      <section className="section-purple relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: "#D4AF37", filter: "blur(100px)", transform: "translateX(-50%)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <FadeSection>
            <GoldEyebrow>Ready to Begin?</GoldEyebrow>
            <h2 className="font-['Montserrat'] font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.02em" }}>
              Schedule Your Free Visibility Scan<br />
              <span style={{ color: "#D4AF37" }}>and start building with clarity.</span>
            </h2>
            <p className="text-purple-200 mb-8 font-['Open_Sans'] text-lg">
              hello@kiraunistrategies.com &nbsp;·&nbsp; 832-608-3495
            </p>
            <Link href={VISIBILITY_SCAN_URL} className="btn-white">
              Start Your Free Visibility Scan
              <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <NewsletterSection />
    </Layout>
  );
}
