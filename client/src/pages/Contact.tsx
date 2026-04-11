/**
 * Kirauni Strategies — Contact Page
 * Design: Crown Authority — contact form, scheduling placeholder, contact details
 */
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, ArrowRight, CheckCircle2, Calendar } from "lucide-react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", businessName: "",
    website: "", support: "", challenge: "",
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
              <GoldEyebrow>Contact</GoldEyebrow>
              <h1 className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                Get in Touch
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans']">
                Whether you are not sure where to start or already know what needs attention, Kirauni can help you identify the next right move.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-4">
              <FadeSection>
                <div className="space-y-6">
                  <div>
                    <GoldEyebrow>Reach Us Directly</GoldEyebrow>
                    <div className="space-y-4 mt-4">
                      <a
                        href="mailto:hello@kiraunistrategies.com"
                        className="flex items-start gap-4 p-5 bg-white rounded-lg card-hover"
                        style={{ border: "1px solid #e8e8e8" }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(107, 63, 160, 0.08)" }}>
                          <Mail size={18} style={{ color: "#6B3FA0" }} />
                        </div>
                        <div>
                          <p className="font-['Montserrat'] font-600 text-sm text-[#1A1A1A] mb-0.5">Email</p>
                          <p className="text-[#6B7280] text-sm font-['Open_Sans']">hello@kiraunistrategies.com</p>
                        </div>
                      </a>
                      <a
                        href="tel:8326083495"
                        className="flex items-start gap-4 p-5 bg-white rounded-lg card-hover"
                        style={{ border: "1px solid #e8e8e8" }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(107, 63, 160, 0.08)" }}>
                          <Phone size={18} style={{ color: "#6B3FA0" }} />
                        </div>
                        <div>
                          <p className="font-['Montserrat'] font-600 text-sm text-[#1A1A1A] mb-0.5">Phone</p>
                          <p className="text-[#6B7280] text-sm font-['Open_Sans']">832-608-3495</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Scheduling placeholder */}
                  <div className="p-6 rounded-lg" style={{ backgroundColor: "#6B3FA0" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar size={20} color="#D4AF37" />
                      <p className="font-['Montserrat'] font-600 text-white text-sm">Schedule a Call</p>
                    </div>
                    <p className="text-purple-200 text-sm font-['Open_Sans'] mb-4 leading-relaxed">
                      Prefer to talk? Book a discovery call directly on our calendar.
                    </p>
                    {/* Cal.com embed placeholder */}
                    <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px dashed rgba(255,255,255,0.3)" }}>
                      <p className="text-purple-200 text-xs font-['Open_Sans'] mb-3">Scheduling via Cal.com</p>
                      <a
                        href="mailto:hello@kiraunistrategies.com?subject=Discovery Call Request"
                        className="btn-white text-sm py-2.5 px-5"
                      >
                        Request a Call
                      </a>
                    </div>
                  </div>

                  {/* Free scan CTA */}
                  <div className="p-6 rounded-lg" style={{ backgroundColor: "#F5F5F5", border: "1px solid #e8e8e8" }}>
                    <p className="font-['Montserrat'] font-600 text-[#1A1A1A] text-sm mb-2">Start with a Free Visibility Scan</p>
                    <p className="text-[#6B7280] text-xs font-['Open_Sans'] mb-4">See exactly what is missing and how to fix it — no commitment required.</p>
                    <div className="space-y-1.5">
                      {["3 quick wins", "Visibility gaps identified", "Clear next steps"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={13} style={{ color: "#6B3FA0" }} />
                          <span className="text-[#6B7280] text-xs font-['Open_Sans']">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8">
              <FadeSection delay={100}>
                {submitted ? (
                  <div className="rounded-lg p-12 text-center bg-white" style={{ border: "1px solid #e8e8e8" }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(107, 63, 160, 0.1)" }}>
                      <CheckCircle2 size={28} style={{ color: "#6B3FA0" }} />
                    </div>
                    <h3 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-xl mb-3">Message Received</h3>
                    <p className="text-[#6B7280] font-['Open_Sans']">
                      Thank you. Your message has been received. A response will be sent to your inbox as soon as possible.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 lg:p-10" style={{ border: "1px solid #e8e8e8" }}>
                    <h2 className="font-['Montserrat'] font-700 text-[#1A1A1A] text-xl mb-6">Send an Inquiry</h2>
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
                          <label className="form-label">Business Name</label>
                          <input name="businessName" value={form.businessName} onChange={handleChange} className="form-input" placeholder="Your business name" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Website or Google Business Profile</label>
                        <input name="website" value={form.website} onChange={handleChange} className="form-input" placeholder="https://yourbusiness.com" />
                      </div>
                      <div>
                        <label className="form-label">What do you need support with?</label>
                        <select name="support" value={form.support} onChange={handleChange} className="form-input">
                          <option value="">Select an area</option>
                          <option value="visibility">AI Visibility & Search</option>
                          <option value="brand">Brand & Messaging</option>
                          <option value="systems">Systems & Automation</option>
                          <option value="strategy">Overall Strategy</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Biggest visibility or systems challenge</label>
                        <textarea name="challenge" value={form.challenge} onChange={handleChange} rows={4} className="form-input resize-none" placeholder="Describe what is not working or what you are trying to improve" />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center">
                        <span>Send Inquiry</span>
                        <ArrowRight size={16} />
                      </button>
                    </form>
                  </div>
                )}
              </FadeSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
