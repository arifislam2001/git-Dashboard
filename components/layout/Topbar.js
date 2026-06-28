"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "DASHBOARD" },
    { href: "/tables", label: "TABELS" },
    { href: "/billing", label: "Billing" },
    { href: "/profile", label: "PROFILE" },
    { href: "/signup", label: "SIGN UP" },
    { href: "/signin", label: "SIGN IN" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm font-bold tracking-wide">
          VISION UI <span className="text-vision-blue">FREE</span>
        </p>

        {/* Desktop menu - shudhu medium+ screen e dekhabe */}
        <div className="hidden md:flex items-center gap-6 text-xs text-vision-text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-xs px-4 py-2 rounded-full bg-vision-blue">
            Free Download
          </button>

          {/* Mobile hamburger button - shudhu mobile e dekhabe */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-vision-card border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-sm text-vision-text-muted hover:bg-white/5 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}