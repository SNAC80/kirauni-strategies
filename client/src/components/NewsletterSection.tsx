/**
 * Kirauni Strategies — Newsletter Signup Section
 * Design: Crown Authority — deep purple background, gold accent, clean form
 * Reusable across Home, About, and any other page
 */
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate submission — in production, connect to Mailchimp / ConvertKit / GHL
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#2D1052" }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#D4AF37", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-8"
          style={{ background: "#6B3FA0", filter: "blur(120px)" }}
        />
        {/* Crown pattern dots */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "#D4AF37",
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 33}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.3)" }}
          >
            <Mail size={22} style={{ color: "#D4AF37" }} />
          </div>

          {/* Eyebrow */}
          <p
            className="text-xs font-['Montserrat'] font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#D4AF37" }}
          >
            Stay in the Know
          </p>

          <h2
            className="font-['Montserrat'] font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", letterSpacing: "-0.02em" }}
          >
            Visibility tips, strategy insights,<br className="hidden sm:block" /> and business growth — delivered.
          </h2>

          <p className="text-purple-200 font-['Open_Sans'] mb-8 leading-relaxed">
            Join business owners who are getting found, getting clear, and building systems that convert. No fluff — just actionable strategy from Shavonne's desk.
          </p>

          {submitted ? (
            <div
              className="flex flex-col items-center gap-3 py-8 px-6 rounded-xl"
              style={{ backgroundColor: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.25)" }}
            >
              <CheckCircle2 size={36} style={{ color: "#D4AF37" }} />
              <p className="font-['Montserrat'] font-bold text-white text-lg">You are in!</p>
              <p className="text-purple-200 font-['Open_Sans'] text-sm">
                Check your inbox for a confirmation. Strategy insights are on the way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex-shrink-0 sm:w-36 px-4 py-3 rounded-lg font-['Open_Sans'] text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg font-['Open_Sans'] text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-['Montserrat'] font-semibold text-sm transition-all duration-200 flex-shrink-0"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#1A1A1A",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <span>Joining...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-purple-300 text-xs font-['Open_Sans'] mt-4">
            No spam. Unsubscribe anytime. Your information is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
}
