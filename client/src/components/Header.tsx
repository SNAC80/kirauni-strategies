/**
 * Kirauni Strategies — Header Component
 * Design: Crown Authority — sticky white header, large logo, desktop nav, CTA right
 * Mobile: hamburger visible on all sizes < lg (below 1024px)
 * Smooth slide-down mobile menu with body scroll lock
 * Colors: White bg, Purple primary (#6B3FA0), Gold accents (#D4AF37)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539823047/JGBuqh7zosykm4EVvP5SRN/PrimaryLogo[FullLockup]-1_01882a6e.webp";

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

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-white/97 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={LOGO_URL}
                alt="Kirauni Strategies"
                className="h-14 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation — lg and above only */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm xl:text-base ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: desktop CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA — lg and above */}
              <Link
                href="/visibility-scan"
                className="btn-primary hidden lg:inline-flex text-sm py-2.5 px-5 whitespace-nowrap"
              >
                Book Free Visibility Scan
              </Link>

              {/* Hamburger button — below lg only */}
              <button
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 hover:text-[#6B3FA0] hover:bg-purple-50 transition-colors"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                {mobileOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay — below lg only */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 z-40 flex flex-col"
          style={{ top: "80px", backgroundColor: "#fff" }}
        >
          {/* Scrollable nav area */}
          <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-4 px-3 font-['Montserrat'] font-medium text-base border-b transition-colors ${
                  location === link.href
                    ? "text-[#6B3FA0] font-semibold border-purple-100"
                    : "text-[#1A1A1A] hover:text-[#6B3FA0] border-gray-100"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6">
              <Link
                href="/visibility-scan"
                className="btn-primary block w-full text-center py-4 text-base font-semibold"
              >
                Book Free Visibility Scan
              </Link>
            </div>

            {/* Contact info in mobile menu */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 font-['Open_Sans']">hello@kiraunistrategies.com</p>
              <p className="text-sm text-gray-500 font-['Open_Sans'] mt-1">832-608-3495</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
