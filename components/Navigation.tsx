"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThriveAbilityLogo } from "./ThriveAbilityLogo";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/why-us", label: "Who We Serve" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <ThriveAbilityLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-underline text-sm font-sans tracking-wide transition-colors pb-0.5 ${
                  pathname === link.href
                    ? "text-cyan active"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="btn-glow bg-cyan text-navy text-sm font-bold px-5 py-2.5 rounded-sm hover:bg-cyan-light transition-colors tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy-mid border-t border-white/10 px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-sans py-3 border-b border-white/10 transition-colors ${
                  pathname === link.href
                    ? "text-cyan font-medium"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="bg-cyan text-navy text-sm font-bold px-5 py-3 rounded-sm hover:bg-cyan-light transition-colors text-center mt-4 tracking-wide"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
