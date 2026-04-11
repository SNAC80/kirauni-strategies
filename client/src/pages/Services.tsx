/**
 * Kirauni Strategies — Services Page
 * Design: Crown Authority — editorial layout, service cards with varied visual weight
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    num: "01",
    title: "Brand Foundation Sprint",
    tagline: "Get Clear. Get Visible.",
    forWho: "Businesses with messy, unclear, or underdeveloped brands",
    includes: [
      "Clear positioning: what you do and who you serve",
      "Simple, clean brand identity",
      "Starter online presence",
      "Messaging that makes sense and connects",
    ],
    price: null,
    cta: "Ask About Brand Foundation",
    href: "/contact",
    image: WEB1_IMAGE,
    featured: false,
  },
  {
    num: "02",
    title: "AI Visibility Audit",
    tagline: "See What Is Not Working.",
    forWho: "Businesses that exist but are not being found",
    includes: [
      "Website and online presence review",
      "AI and search visibility scan",
      "Missed opportunities and friction points",
      "Clear next steps",
    ],
    price: "Starting at $297",
    cta: "Book Your Audit",
    href: "/work-with-us",
    image: WEB2_IMAGE,
    featured: true,
  },
  {
    num: "03",
    title: "AI Visibility Optimization",
    tagline: "Fix What Is Broken.",
    forWho: "Businesses ready to improve discoverability and authority",
    includes: [
      "Messaging and positioning improvements",
      "Website and content optimization",
      "Visibility and authority signals",
      "Strategic updates that increase discoverability",
    ],
    price: null,
    cta: "Improve My Visibility",
    href: "/work-with-us",
    image: WEB3_IMAGE,
    featured: false,
  },
  {
    num: "04",
    title: "AI Visibility + Automation System",
    tagline: "Scale What Works.",
    forWho: "Businesses ready to scale with better structure",
    includes: [
      "Lead capture and follow-up systems",
      "AI-supported workflows",
      "Content and visibility systems",
      "Scalable growth strategy",
    ],
    price: null,
    cta: "Build My System",
    href: "/work-with-us",
    image: WEB1_IMAGE,
    featured: false,
  },
  {
    num: "05",
    title: "Ongoing Growth Support",
    tagline: "Stay Visible. Stay Competitive.",
    forWho: "Businesses wanting ongoing optimization and strategic support",
    includes: [
      "Continuous optimization",
      "Strategy adjustments",
      "Support as the business evolves",
    ],
    price: null,
    cta: "Explore Retainers",
    href: "/work-with-us",
    image: WEB2_IMAGE,
    featured: false,
  },
];

const retainers = [
  { name: "Starter Retainer", price: "$400/mo", desc: "Essential visibility and strategy support for growing businesses." },
  { name: "Growth Retainer", price: "$750/mo", desc: "Deeper engagement with ongoing optimization and implementation." },
  { name: "Crown Retainer", price: "$1,500/mo", desc: "Full strategic partnership with priority access and comprehensive support." },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>What We Offer</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Services built for visibility, clarity, and systems that scale.
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans']">
                Kirauni Strategies offers boutique strategic services for businesses ready to be found, understood, and supported by smarter infrastructure. Every engagement is designed to remove friction, strengthen discoverability, and create a stronger foundation for growth.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-gray">
        <div className="container">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: service.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8", backgroundColor: "#FFFFFF" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Content */}
                    <div className="lg:col-span-8 p-8 lg:p-10">
                      <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-['Montserrat'] font-700 text-2xl" style={{ color: "rgba(107, 63, 160, 0.2)" }}>{service.num}</span>
                            {service.featured && (
                              <span className="text-xs font-['Montserrat'] font-600 tracking-wider uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                                Most Requested
                              </span>
                            )}
                          </div>
                          <h2 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-2xl mb-1">{service.title}</h2>
                          <p className="font-['Montserrat'] font-500 text-sm" style={{ color: "#6B3FA0" }}>{service.tagline}</p>
                        </div>
                        {service.price && (
                          <div className="text-right">
                            <p className="font-['Montserrat'] font-700 text-xl" style={{ color: "#6B3FA0" }}>{service.price}</p>
                          </div>
                        )}
                      </div>

                      <div className="mb-5">
                        <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-2" style={{ color: "#D4AF37" }}>For</p>
                        <p className="text-[#6B7280] text-sm font-['Open_Sans']">{service.forWho}</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs font-['Montserrat'] font-600 uppercase tracking-wider mb-3" style={{ color: "#6B3FA0" }}>Includes</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#6B3FA0" }} />
                              <span className="text-[#1A1A1A] text-sm font-['Open_Sans']">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={service.href} className={service.featured ? "btn-primary" : "btn-secondary"}>
                        <span>{service.cta}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-4 hidden lg:block">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ minHeight: "260px" }}
                      />
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="text-center mb-12">
              <GoldEyebrow>Ongoing Support</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                Monthly Retainer Options
              </h2>
              <p className="text-[#6B7280] font-['Open_Sans']">Stay visible. Stay competitive. Stay supported.</p>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainers.map((r, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div
                  className="rounded-lg p-8 text-center card-hover"
                  style={{ border: i === 2 ? "2px solid #6B3FA0" : "1px solid #e8e8e8", backgroundColor: i === 2 ? "#6B3FA0" : "#FFFFFF" }}
                >
                  {i === 2 && (
                    <div className="mb-3">
                      <span className="text-xs font-['Montserrat'] font-600 tracking-wider uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "#D4AF37", color: "#1A1A1A" }}>
                        Crown Level
                      </span>
                    </div>
                  )}
                  <h3 className={`font-['Montserrat'] font-700 text-xl mb-2 ${i === 2 ? "text-white" : "text-[#1A1A1A]"}`}>{r.name}</h3>
                  <p className="font-['Montserrat'] font-700 text-3xl mb-4" style={{ color: i === 2 ? "#D4AF37" : "#6B3FA0" }}>{r.price}</p>
                  <p className={`text-sm font-['Open_Sans'] leading-relaxed mb-6 ${i === 2 ? "text-purple-200" : "text-[#6B7280]"}`}>{r.desc}</p>
                  <Link href="/work-with-us" className={i === 2 ? "btn-white" : "btn-secondary"}>
                    Get Started
                  </Link>
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
            <GoldEyebrow>Next Step</GoldEyebrow>
            <h2 className="font-['Montserrat'] font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Not sure which service is right for you?
            </h2>
            <p className="text-purple-200 mb-8 font-['Open_Sans'] text-lg">Start with a free visibility scan and we will point you in the right direction.</p>
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
