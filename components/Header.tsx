"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const coppellServices = [
  { name: "Spinal Correction", href: "/coppell/spinal-correction" },
  { name: "HBOT", href: "/coppell/hbot" },
  { name: "SoftWave Therapy", href: "/coppell/softwave" },
  { name: "Spinal Decompression", href: "/coppell/spinal-decompression" },
  { name: "Thermography", href: "/coppell/thermography" },
  { name: "Neuropathy", href: "/coppell/neuropathy" },
  { name: "Pediatric", href: "/coppell/pediatric" },
  { name: "Prenatal", href: "/coppell/prenatal" },
];

const southlakeServices = [
  { name: "Spinal Correction", href: "/southlake/spinal-correction" },
  { name: "HBOT", href: "/southlake/hbot" },
  { name: "SoftWave Therapy", href: "/southlake/softwave" },
  { name: "Spinal Decompression", href: "/southlake/spinal-decompression" },
  { name: "Thermography", href: "/southlake/thermography" },
  { name: "Neuropathy", href: "/southlake/neuropathy" },
  { name: "Pediatric", href: "/southlake/pediatric" },
  { name: "Prenatal", href: "/southlake/prenatal" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
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
      if (locDropdownRef.current && !locDropdownRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Determine which phone to show based on current path
  const isSouthlake = pathname.startsWith("/southlake");
  const phoneDisplay = isSouthlake ? "(817) 895-0075" : "(972) 393-6262";
  const phoneTel = isSouthlake ? "8178950075" : "9723936262";

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
            <button
              type="button"
              className="nav__link nav__link--dropdown"
              style={pathname.startsWith("/coppell") || pathname.startsWith("/southlake") ? { color: "var(--color-navy)", fontWeight: 700 } : undefined}
              onClick={(e) => {
                e.preventDefault();
                if (mobileOpen) {
                  setServicesOpen(!servicesOpen);
                }
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                setServicesOpen(!servicesOpen);
              }}
            >
              Services <span style={{ fontSize: 10, marginLeft: 4 }}>{servicesOpen ? "\u25B2" : "\u25BC"}</span>
            </button>
            {servicesOpen && (
              <div className="nav__dropdown-menu nav__dropdown-menu--wide">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  <div>
                    <div className="nav__dropdown-heading">Coppell</div>
                    {coppellServices.map((s) => (
                      <Link key={s.href} href={s.href} className="nav__dropdown-item" onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="nav__dropdown-heading">Southlake</div>
                    {southlakeServices.map((s) => (
                      <Link key={s.href} href={s.href} className="nav__dropdown-item" onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="nav__dropdown" ref={locDropdownRef} onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
            <button
              type="button"
              className="nav__link nav__link--dropdown"
              onClick={(e) => {
                e.preventDefault();
                if (mobileOpen) {
                  setLocationsOpen(!locationsOpen);
                }
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                setLocationsOpen(!locationsOpen);
              }}
            >
              Locations <span style={{ fontSize: 10, marginLeft: 4 }}>{locationsOpen ? "\u25B2" : "\u25BC"}</span>
            </button>
            {locationsOpen && (
              <div className="nav__dropdown-menu">
                <Link href="/coppell" className="nav__dropdown-item" onClick={() => { setLocationsOpen(false); setMobileOpen(false); }}>
                  Coppell
                </Link>
                <Link href="/southlake" className="nav__dropdown-item" onClick={() => { setLocationsOpen(false); setMobileOpen(false); }}>
                  Southlake
                </Link>
              </div>
            )}
          </div>
          <div className="nav__dropdown" ref={aboutDropdownRef} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <Link href="/about" className="nav__link nav__link--dropdown" style={pathname === "/about" || pathname === "/team" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined}>
              About <span style={{ fontSize: 10, marginLeft: 4 }}>{aboutOpen ? "\u25B2" : "\u25BC"}</span>
            </Link>
            {aboutOpen && (
              <div className="nav__dropdown-menu">
                <Link href="/about" className="nav__dropdown-item" onClick={() => { setAboutOpen(false); setMobileOpen(false); }}>Our Story</Link>
                <Link href="/team" className="nav__dropdown-item" onClick={() => { setAboutOpen(false); setMobileOpen(false); }}>Meet the Team</Link>
                <a href="http://erbfamilyevents.com" className="nav__dropdown-item" target="_blank" rel="noopener noreferrer" onClick={() => { setAboutOpen(false); setMobileOpen(false); }}>Patient Resources</a>
              </div>
            )}
          </div>
          <Link href="/testimonials" className="nav__link" style={pathname === "/testimonials" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/new-patient" className="nav__link" style={pathname === "/new-patient" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>New Patients</Link>
          <Link href="/contact" className="nav__link" style={pathname === "/contact" ? { color: "var(--color-navy)", fontWeight: 700 } : undefined} onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
        <div className="nav__right">
          <a href={`tel:${phoneTel}`} className="nav__phone">
            {phoneDisplay}
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
