/**
 * Kirauni Strategies — Footer Component
 * Design: Crown Authority — deep royal purple bg, larger logo, no TikTok, all links fixed
 * Colors: Deep purple #2A0E4A (almost black), Gold accents, white text
 */
import { Link } from "wouter";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/PrimaryLogo[FullLockup]-1_01882a6e.webp";


const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/kirauni-method", label: "The Kirauni Method" },
  { href: "/client-wins", label: "Client Wins" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E0A35" }} className="text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="Kirauni Strategies"
              className="h-20 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p style={{ color: "#D4AF37" }} className="font-['Montserrat'] text-xs tracking-widest uppercase mb-4">
              Where Strategy Meets Excellence
            </p>
            <p className="text-purple-300 text-sm leading-relaxed max-w-xs font-['Open_Sans']">
              AI Visibility, Strategic Clarity, and Systems that Scale for small to mid-sized businesses ready to grow with intention.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@kiraunistrategies.com"
                className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm font-['Open_Sans']"
              >
                <Mail size={14} style={{ color: "#D4AF37" }} />
                hello@kiraunistrategies.com
              </a>
              <a
                href="tel:8326083495"
                className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm font-['Open_Sans']"
              >
                <Phone size={14} style={{ color: "#D4AF37" }} />
                832-608-3495
              </a>
            </div>
            {/* Social — Facebook, Instagram, LinkedIn only */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/kiraunistrategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-purple-300 hover:text-[#D4AF37] transition-colors"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/kiraunistrategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-purple-300 hover:text-[#D4AF37] transition-colors"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/kiraunistrategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-purple-300 hover:text-[#D4AF37] transition-colors"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Montserrat'] font-semibold text-sm tracking-wider uppercase mb-5" style={{ color: "#D4AF37" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-300 hover:text-white text-sm transition-colors font-['Open_Sans']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="font-['Montserrat'] font-semibold text-sm tracking-wider uppercase mb-5" style={{ color: "#D4AF37" }}>
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-300 hover:text-white text-sm transition-colors font-['Open_Sans']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/visibility-scan" className="btn-gold text-sm py-3 px-5">
              <span>Book Free Visibility Scan</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-purple-400 text-xs font-['Open_Sans']">
            © 2026 Kirauni Strategies LLC. All rights reserved.
          </p>
          <p className="text-purple-400 text-xs font-['Open_Sans']">
            Houston, TX · Black Woman-Led · AI-Powered Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
