"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b border-[#464555]/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-slate-100 font-headline">
          Synthetic Auditor
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-semibold tracking-tight">
          <a
            href="#features"
            className="text-indigo-400 border-b-2 border-indigo-500 pb-1"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            Docs
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-slate-400 hover:text-slate-100 transition-colors font-semibold text-sm"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="bg-indigo-500 text-[#dad7ff] px-5 py-2 rounded-lg font-semibold text-sm active:scale-95 duration-200 hover:bg-indigo-600 transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-100 transition-colors ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-[#464555]/20 px-8 py-6 flex flex-col gap-4">
          <a
            href="#features"
            className="text-indigo-400 font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-slate-400 hover:text-slate-100 font-semibold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-100 font-semibold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Docs
          </a>
        </div>
      )}
    </nav>
  );
}
