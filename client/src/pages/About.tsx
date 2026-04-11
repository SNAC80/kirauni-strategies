/**
 * Kirauni Strategies — About Page
 * Design: Crown Authority — founder story, brand values, cultural grounding
 * Fix: First hero image replaced with new founder headshot, CTAs → Cal.com
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

// New founder headshot (Untitleddesign(8).png — uploaded)
const FOUNDER_HEADSHOT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/founder-headshot_a7977ccf.png";
// Original KSCell image used in the origin section
const KCELL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/KSCell(1)_aab683bb.png";
const VISIBILITY_SCAN_URL = "/visibility-scan";

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

const values = [
  { title: "Excellence", desc: "Every deliverable, every conversation, every strategy is held to the highest standard. Excellence is not a goal — it is the baseline." },
  { title: "Organization", desc: "Structure creates freedom. Organized systems create organized income. We build the infrastructure that lets businesses operate with consistency." },
  { title: "Visibility", desc: "If you are not seen, you cannot grow. Visibility is not vanity — it is a business imperative in an AI-shaped economy." },
  { title: "Empowerment", desc: "The goal is never dependency. Every engagement is designed to leave clients more capable, more confident, and more equipped to grow." },
  { title: "Premium Positioning", desc: "Kirauni clients are not competing on price. They are competing on clarity, authority, and the quality of their presence and systems." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero — new founder headshot */}
      <section className="section-white pt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeSection>
                <GoldEyebrow>About Kirauni Strategies</GoldEyebrow>
                <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.02em" }}>
                  Built for businesses ready to be seen, understood, and structured for growth.
                </h1>
                <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans'] mb-8">
                  Led by Shavonne Ambonisye-Clifton, Founder and Chief Strategist, Kirauni combines technical depth, cultural authority, and boutique strategic care to help Houston small businesses grow with intention.
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
            <div className="lg:col-span-5">
              <FadeSection delay={150}>
                <div className="relative">
                  <img
                    src={FOUNDER_HEADSHOT}
                    alt="Shavonne Ambonisye-Clifton — Founder, Kirauni Strategies"
                    className="w-full rounded-lg object-cover shadow-xl"
                    style={{ maxHeight: "500px", objectPosition: "center top" }}
                  />
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-lg pointer-events-none" style={{ border: "2px solid #D4AF37", opacity: 0.3 }} />
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeSection>
                <img
                  src={KCELL_IMAGE}
                  alt="Shavonne Ambonisye-Clifton — Founder"
                  className="w-full rounded-lg object-cover shadow-xl"
                  style={{ maxHeight: "560px", objectPosition: "center top" }}
                />
              </FadeSection>
            </div>
            <div className="lg:col-span-7">
              <FadeSection delay={100}>
                <GoldEyebrow>Our Origin</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                  20+ Years of Systems Thinking, Applied to Small Business
                </h2>
                <div className="space-y-4 text-[#6B7280] leading-relaxed font-['Open_Sans']">
                  <p>
                    Shavonne Ambonisye-Clifton spent over two decades transforming complex systems — from military operations to enterprise-level implementations. She understood how to build infrastructure that worked at scale, how to identify gaps that others missed, and how to execute with precision.
                  </p>
                  <p>
                    When she turned her attention to Houston's small business community, she saw the same pattern everywhere: talented, hardworking business owners who were invisible online, unclear in their messaging, and operating without the systems needed to grow consistently.
                  </p>
                  <p>
                    Kirauni Strategies was built to close that gap. To bring enterprise-level strategic thinking to boutique businesses. To apply the same rigor that builds military systems and corporate infrastructure to the businesses that need it most — and deserve it most.
                  </p>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* What Kirauni Means */}
      <section className="section-purple relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#D4AF37", filter: "blur(100px)" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeSection>
              <GoldEyebrow>The Name</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-white mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                What Kirauni Means
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-6 font-['Open_Sans']">
                Kirauni means <strong className="text-white">Crown</strong> in Swahili. It is a word rooted in strength, transformation, and elevated execution.
              </p>
              <p className="text-purple-200 leading-relaxed font-['Open_Sans']">
                The crown is not a decoration. It is a symbol of earned authority, disciplined excellence, and the kind of presence that commands attention without demanding it. Every business that works with Kirauni is working toward their own crown — their own version of visibility, clarity, and structured success.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-0.5" style={{ backgroundColor: "#D4AF37" }} />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="section-white">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>Why This Work Matters</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                Businesses are often invisible not because they lack quality — but because they lack visibility and systems.
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed font-['Open_Sans']">
                <p>
                  The AI-driven economy has changed the rules. Discoverability is no longer just about word of mouth or a website that exists. It is about showing up in AI search results, Google's local ecosystem, and the digital spaces where your customers are already looking.
                </p>
                <p>
                  Most small business owners are excellent at what they do. They are not excellent at visibility, positioning, or systems — because those are separate disciplines that require separate expertise. That is the gap Kirauni fills.
                </p>
                <p>
                  This work matters because small businesses are the backbone of communities. When they grow, communities grow. When they have the visibility, clarity, and systems they need, they can serve more people, create more opportunities, and build more lasting wealth.
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="mb-12">
              <GoldEyebrow>What We Stand For</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
                The Values Behind the Work
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="bg-white rounded-lg p-7 h-full card-hover" style={{ border: "1px solid #e8e8e8" }}>
                  <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#D4AF37" }} />
                  <h3 className="font-['Montserrat'] font-bold text-[#1A1A1A] text-lg mb-3">{v.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-['Open_Sans']">{v.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white">
        <div className="container">
          <FadeSection>
            <div className="rounded-lg p-10 lg:p-14 text-center" style={{ backgroundColor: "#F5F5F5", border: "1px solid #e8e8e8" }}>
              <GoldEyebrow>Work With Kirauni</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Ready to build a business that works?
              </h2>
              <p className="text-[#6B7280] mb-8 font-['Open_Sans'] max-w-xl mx-auto">
                Start with a free visibility scan and see exactly what is missing — and how to fix it.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={VISIBILITY_SCAN_URL} className="btn-primary">
                  <span>Book Free Visibility Scan</span>
                  <ArrowRight size={16} />
                </a>
                <Link href="/work-with-us" className="btn-secondary">
                  Work With Us
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
