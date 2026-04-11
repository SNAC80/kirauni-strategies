/**
 * Kirauni Strategies — Header Component
 * Design: Crown Authority — sticky light header, larger logo, nav center/right, CTA far right
 * Colors: White bg, Purple primary, Gold accents
 * Fix: Larger logo (h-12 lg:h-16), CTA → Cal.com visibility audit, header height increased
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/PrimaryLogo[FullLockup]-1_01882a6e.webp";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/kirauni-method", label: "The Kirauni Method" },
  { href: "/client-wins", label: "Client Wins" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/97 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo — larger */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src={LOGO_URL}
              alt="Kirauni Strategies"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${location === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/visibility-scan"
              className="btn-primary hidden lg:inline-flex text-sm py-2.5 px-5"
            >
              <span>Book Free Visibility Scan</span>
            </Link>
            <button
              className="xl:hidden p-2 rounded-md text-gray-700 hover:text-[#6B3FA0] hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 font-['Montserrat'] font-medium text-sm border-b border-gray-50 transition-colors ${
                  location === link.href
                    ? "text-[#6B3FA0] font-semibold"
                    : "text-[#1A1A1A] hover:text-[#6B3FA0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/visibility-scan"
              className="btn-primary mt-4 text-center"
            >
              <span>Book Free Visibility Scan</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
