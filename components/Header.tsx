"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/new-patient", label: "New Patients" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`nav${isHome ? " nav--home" : ""}${scrolled ? " scrolled" : ""}`}>
      <div className="container-erb nav__inner">
        <Link href="/" className="nav__logo">
          Erb Family <span>Wellness</span>
        </Link>
        <div className={`nav__links${mobileOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav__link"
              style={pathname === link.href ? { color: "var(--color-navy)", fontWeight: 700 } : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav__right">
          <a href="tel:9723936262" className="nav__phone">
            (972) 393-6262
          </a>
          <Link href="/schedule" className="nav__cta">
            Schedule Appointment
          </Link>
        </div>
        <button
          className="nav__mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
