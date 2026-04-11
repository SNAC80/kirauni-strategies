/**
 * Kirauni Strategies — Footer Component
 * Design: Crown Authority — premium footer with all required links and business details
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
    <footer style={{ backgroundColor: "#1A1A1A" }} className="text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="Kirauni Strategies"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p style={{ color: "#D4AF37" }} className="font-['Montserrat'] text-xs tracking-widest uppercase mb-4">
              Where Strategy Meets Excellence
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-['Open_Sans']">
              AI Visibility, Strategic Clarity, and Systems that Scale for small to mid-sized businesses ready to grow with intention.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@kiraunistrategies.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} style={{ color: "#D4AF37" }} />
                hello@kiraunistrategies.com
              </a>
              <a
                href="tel:8326083495"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} style={{ color: "#D4AF37" }} />
                832-608-3495
              </a>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="TikTok"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Montserrat'] font-600 text-sm tracking-wider uppercase mb-5" style={{ color: "#D4AF37" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors font-['Open_Sans']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="font-['Montserrat'] font-600 text-sm tracking-wider uppercase mb-5" style={{ color: "#D4AF37" }}>
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors font-['Open_Sans']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary text-sm py-3 px-5">
              <span>Free Visibility Scan</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-['Open_Sans']">
            © 2026 Kirauni Strategies LLC. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-['Open_Sans']">
            Houston, TX · Black Woman-Led · AI-Powered Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
