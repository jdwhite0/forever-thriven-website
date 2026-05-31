import Link from "next/link";
import { ThriveAbilityLogo } from "./ThriveAbilityLogo";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <ThriveAbilityLogo className="mb-5" />
            <p className="text-sm leading-relaxed text-white/50 font-sans">
              A licensed adult day program for behavioral health — providing structured support, skill building, and community integration for adults in Tampa, Florida.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan animate-pulse-slow" />
              <span className="text-xs font-sans text-cyan">Accepting New Participants</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/30 font-sans mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Programs" },
                { href: "/why-us", label: "Who We Serve" },
                { href: "/get-started", label: "Get Started" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans text-white/50 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/30 font-sans mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-sm font-sans text-white/50">
                <span className="block text-white/30 text-xs uppercase tracking-wider mb-0.5">Address</span>
                3601 27th Ave S<br />
                Tampa, FL 33711
              </li>
              <li className="text-sm font-sans">
                <span className="block text-white/30 text-xs uppercase tracking-wider mb-0.5">Email</span>
                <a
                  href="mailto:whitedarlene294@gmail.com"
                  className="text-white/50 hover:text-cyan transition-colors"
                >
                  whitedarlene294@gmail.com
                </a>
              </li>
              <li className="text-sm font-sans text-white/50">
                <span className="block text-white/30 text-xs uppercase tracking-wider mb-0.5">Region</span>
                Tampa Bay — Hillsborough County, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs font-sans text-white/25">
            © {new Date().getFullYear()} Thrive Ability, LLC. All rights reserved.
          </p>
          <p className="text-xs font-sans text-white/25">
            Florida Agency for Persons with Disabilities (APD) · Hillsborough County
          </p>
        </div>
      </div>
    </footer>
  );
}
