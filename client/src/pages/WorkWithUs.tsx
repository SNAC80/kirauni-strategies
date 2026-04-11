/**
 * Kirauni Strategies — Work With Us Page
 * Design: Crown Authority — application form, three CTA paths
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

export default function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", businessName: "", website: "",
    industry: "", challenge: "", service: "", outcome: "", nextStep: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-white pt-16">
        <div className="container">
          <div className="max-w-3xl">
            <FadeSection>
              <GoldEyebrow>Get Started</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Ready for strategy with structure?
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans']">
                Kirauni is built for businesses that are ready to move with clarity, not chaos. If you are ready to strengthen your visibility, sharpen your positioning, and build systems that support growth, this is where we begin.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Three CTA paths */}
      <section className="section-gray">
        <div className="container">
          <FadeSection>
            <div className="text-center mb-10">
              <GoldEyebrow>Choose Your Path</GoldEyebrow>
              <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Simple ways to get started
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Free Visibility Scan",
                desc: "See what is missing — and exactly how to fix it. No commitment required.",
                bullets: ["3 quick wins identified", "Visibility gaps mapped", "Clear next steps outlined"],
                cta: "Start Your Free Visibility Scan",
                href: "/contact",
                featured: false,
              },
              {
                num: "02",
                title: "Strategy + Visibility Audit",
                desc: "A deeper look at what is limiting your growth. Comprehensive analysis with an action plan.",
                bullets: ["Deep dive analysis", "Messaging and positioning review", "Prioritized action plan"],
                cta: "Book Your Strategy Visibility Audit",
                href: "/contact",
                featured: true,
              },
              {
                num: "03",
                title: "Systems + Implementation",
                desc: "Build the structure behind the visibility. Full implementation support.",
                bullets: ["Workflow automation", "Lead capture and follow-up", "Scalable systems built"],
                cta: "Apply to Work Together",
                href: "#application",
                featured: false,
              },
            ].map((path, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div
                  className="rounded-lg p-8 h-full flex flex-col card-hover"
                  style={{
                    border: path.featured ? "2px solid #6B3FA0" : "1px solid #e8e8e8",
                    backgroundColor: path.featured ? "#6B3FA0" : "#FFFFFF",
                  }}
                >
                  <span className="font-['Montserrat'] font-700 text-3xl mb-4" style={{ color: path.featured ? "rgba(255,255,255,0.2)" : "rgba(107, 63, 160, 0.15)" }}>
                    {path.num}
                  </span>
                  <h3 className={`font-['Montserrat'] font-700 text-xl mb-3 ${path.featured ? "text-white" : "text-[#1A1A1A]"}`}>{path.title}</h3>
                  <p className={`text-sm mb-5 font-['Open_Sans'] leading-relaxed ${path.featured ? "text-purple-200" : "text-[#6B7280]"}`}>{path.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {path.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: path.featured ? "#D4AF37" : "#6B3FA0" }} />
                        <span className={`text-sm font-['Open_Sans'] ${path.featured ? "text-purple-100" : "text-[#1A1A1A]"}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={path.href} className={path.featured ? "btn-white" : "btn-secondary"}>
                    {path.cta}
                  </a>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="section-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <FadeSection>
              <div className="text-center mb-10">
                <GoldEyebrow>Application</GoldEyebrow>
                <h2 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                  Apply to Work Together
                </h2>
                <p className="text-[#6B7280] font-['Open_Sans']">
                  Complete the application below to determine if we are a strong fit for strategy and implementation.
                </p>
              </div>
            </FadeSection>

            {submitted ? (
              <FadeSection>
                <div className="rounded-lg p-10 text-center" style={{ backgroundColor: "#F5F5F5", border: "1px solid #e8e8e8" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(107, 63, 160, 0.1)" }}>
                    <CheckCircle2 size={28} style={{ color: "#6B3FA0" }} />
                  </div>
                  <h3 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-xl mb-3">Application Received</h3>
                  <p className="text-[#6B7280] font-['Open_Sans']">
                    Thank you. Your application has been received. A response will be sent to your inbox as soon as possible.
                  </p>
                </div>
              </FadeSection>
            ) : (
              <FadeSection delay={100}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required className="form-input" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(832) 000-0000" />
                    </div>
                    <div>
                      <label className="form-label">Business Name *</label>
                      <input name="businessName" value={form.businessName} onChange={handleChange} required className="form-input" placeholder="Your business name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Website</label>
                      <input name="website" value={form.website} onChange={handleChange} className="form-input" placeholder="https://yourbusiness.com" />
                    </div>
                    <div>
                      <label className="form-label">Industry</label>
                      <input name="industry" value={form.industry} onChange={handleChange} className="form-input" placeholder="e.g., Food & Beverage, Health, Retail" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Current Challenge *</label>
                    <textarea name="challenge" value={form.challenge} onChange={handleChange} required rows={3} className="form-input resize-none" placeholder="What is your biggest visibility or systems challenge right now?" />
                  </div>
                  <div>
                    <label className="form-label">Which service are you most interested in?</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input">
                      <option value="">Select a service</option>
                      <option value="free-scan">Free Visibility Scan</option>
                      <option value="audit">Strategy + Visibility Audit</option>
                      <option value="optimization">AI Visibility Optimization</option>
                      <option value="automation">AI Visibility + Automation System</option>
                      <option value="retainer">Ongoing Growth Support (Retainer)</option>
                      <option value="brand">Brand Foundation Sprint</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">What outcome are you trying to create?</label>
                    <textarea name="outcome" value={form.outcome} onChange={handleChange} rows={3} className="form-input resize-none" placeholder="Describe the result you are working toward" />
                  </div>
                  <div>
                    <label className="form-label">Preferred next step</label>
                    <select name="nextStep" value={form.nextStep} onChange={handleChange} className="form-input">
                      <option value="">Select your preference</option>
                      <option value="call">Schedule a discovery call</option>
                      <option value="email">Receive information by email</option>
                      <option value="scan">Start with a free visibility scan</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <span>Submit Application</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </FadeSection>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
