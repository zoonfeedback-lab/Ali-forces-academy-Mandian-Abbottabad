"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Programs",   href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "ISSB",       href: "#issb" },
  { label: "Branches",   href: "#branches" },
  { label: "About",      href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-2xl border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" aria-label="Pasban-E-Wattan Forces Academy home" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="Pasban-E-Wattan Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.72rem] font-extrabold tracking-[0.13em] text-white uppercase">
              Pasban-E-Wattan
            </span>
            <span className="text-[0.6rem] font-medium tracking-[0.18em] text-gold uppercase">
              Forces Academy
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              id={`nav-${l.label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative px-3.5 py-2 text-[0.78rem] font-semibold tracking-widest uppercase
                         text-white/80 rounded transition-colors duration-300 hover:text-gold
                         after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5 after:h-px
                         after:bg-gold after:scale-x-0 after:transition-transform after:duration-300
                         hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Phone */}
          <a
            href="tel:+923410542425"
            className="hidden lg:flex items-center gap-1.5 text-[0.72rem] font-semibold
                       text-white/65 hover:text-gold transition-colors duration-300"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            0341-0542425
          </a>

          {/* CTA */}
          <a
            href="#admissions"
            id="nav-enroll-btn"
            className="hidden lg:inline-flex btn-primary text-[0.72rem] px-5 py-2.5"
          >
            Enroll Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col gap-[5px] p-1"
          >
            <span className={`block w-[22px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden overflow-hidden transition-all duration-400 border-t border-gold/20
                    bg-primary/98 backdrop-blur-xl
                    ${menuOpen ? "max-h-96 py-5" : "max-h-0"}`}
      >
        <div className="container-custom flex flex-col items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold tracking-widest
                         uppercase text-white/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-3 text-xs"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  );
}
