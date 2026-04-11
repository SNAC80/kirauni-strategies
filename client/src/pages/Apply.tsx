/**
 * Kirauni Strategies — Apply to Work Together Page
 * Design: Crown Authority — application form for Systems + Implementation path
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", business: "", website: "",
    industry: "", challenge: "", service: "", outcome: "", preference: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application from ${formData.name} — ${formData.business}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.business}\nWebsite: ${formData.website}\nIndustry: ${formData.industry}\n\nChallenge:\n${formData.challenge}\n\nService Interested In: ${formData.service}\n\nDesired Outcome:\n${formData.outcome}\n\nPreferred Next Step: ${formData.preference}`
    );
    window.location.href = `mailto:hello@kiraunistrategies.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-2 text-sm font-['Open_Sans'] mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            <ArrowLeft size={15} />
            Back to Work With Us
          </Link>

          <div className="max-w-3xl">
            <div className="gold-eyebrow mb-3">Systems + Implementation</div>
            <h1
              className="font-['Montserrat'] font-bold text-[#1A1A1A] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Apply to{" "}
              <span style={{ color: "#6B3FA0" }}>Work Together</span>
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed font-['Open_Sans'] max-w-2xl">
              This path is for businesses ready to invest in long-term, scalable infrastructure. Tell us about your business and what you are working toward — Shavonne reviews every application personally.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {[
                "Workflow automation built for you",
                "Lead capture and follow-up systems",
                "Scalable infrastructure installed",
                "Ongoing support available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "#D4AF37" }} />
                  <span className="text-sm font-['Open_Sans'] text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div
                className="rounded-xl p-10 text-center bg-white"
                style={{ border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#6B3FA0" }}
                >
                  <CheckCircle2 size={28} color="white" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#1A1A1A] mb-2">Application Sent</h3>
                <p className="text-[#6B7280] font-['Open_Sans'] mb-6">
                  Your email client should have opened with your application pre-filled. Shavonne will review and respond within 1–2 business days.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-['Montserrat'] font-semibold text-sm px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#6B3FA0" }}
                >
                  Return Home
                  <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 space-y-6"
                style={{ border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="(832) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Business Name *</label>
                    <input
                      type="text"
                      name="business"
                      required
                      placeholder="Your business name"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Website or Google Business Profile</label>
                    <input
                      type="text"
                      name="website"
                      placeholder="https://yourbusiness.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      placeholder="e.g., Food & Beverage, Health, Retail"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">
                    What is your biggest visibility or systems challenge right now? *
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    placeholder="Describe what is not working or what you are trying to improve"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all resize-none"
                    style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                    onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Which service are you most interested in?</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all appearance-none"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                    >
                      <option value="">Select a service</option>
                      <option>AI Visibility Optimization</option>
                      <option>AI Visibility + Automation System</option>
                      <option>Ongoing Growth Support (Retainer)</option>
                      <option>Brand Foundation Sprint</option>
                      <option>Custom / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">Preferred next step</label>
                    <select
                      name="preference"
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all appearance-none"
                      style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                    >
                      <option value="">Select your preference</option>
                      <option>Schedule a discovery call</option>
                      <option>Receive information by email</option>
                      <option>Start with a free visibility scan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-['Montserrat'] font-semibold text-[#374151] mb-1.5">What outcome are you trying to create?</label>
                  <textarea
                    name="outcome"
                    rows={3}
                    placeholder="Describe the result you are working toward"
                    value={formData.outcome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm font-['Open_Sans'] text-[#1A1A1A] outline-none transition-all resize-none"
                    style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafafa" }}
                    onFocus={(e) => (e.target.style.borderColor = "#6B3FA0")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-['Montserrat'] font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#6B3FA0" }}
                >
                  Submit Application
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-xs text-[#9CA3AF] font-['Open_Sans']">
                  Shavonne reviews every application personally and responds within 1–2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container text-center">
          <p className="text-[#6B7280] font-['Open_Sans'] mb-2 text-sm">
            Not ready for full implementation yet?
          </p>
          <Link
            href="/visibility-scan"
            className="font-['Montserrat'] font-semibold text-sm underline hover:opacity-80 transition-opacity"
            style={{ color: "#6B3FA0" }}
          >
            Start with the Free Visibility Scan instead →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
