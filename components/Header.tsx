"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`nav${isHome ? " nav--home" : ""}${scrolled ? " scrolled" : ""}`}>
      <div className="container-erb nav__inner">
        <Link href="/" className="nav__logo">
          <Image
            src="/images/erb-logo.png"
            alt="Erb Family Wellness"
            width={180}
            height={48}
            style={{ height: "auto", maxHeight: 44, width: "auto" }}
            priority
          />
        </Link>
        <div className={`nav__links${mobileOpen ? " open" : ""}`}>
          <Link href="/about" className="nav__link" style={pathname === "/about" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>About</Link>
          <div className="nav__dropdown" ref={dropdownRef} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link href="/services" className="nav__link" style={pathname.startsWith("/services") ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>
              Services <span style={{ fontSize: 10, marginLeft: 4 }}>{servicesOpen ? "\u25B2" : "\u25BC"}</span>
            </Link>
            {servicesOpen && (
              <div className="nav__dropdown-menu">
                {siteConfig.services.map((s) => (
                  <Link key={s.slug} href={"href" in s ? s.href : `/services/${s.slug}`} className="nav__dropdown-item" onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/team" className="nav__link" style={pathname === "/team" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>Team</Link>
          <Link href="/testimonials" className="nav__link" style={pathname === "/testimonials" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/new-patient" className="nav__link" style={pathname === "/new-patient" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>New Patients</Link>
          <Link href="/contact" className="nav__link" style={pathname === "/contact" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>Contact</Link>
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
