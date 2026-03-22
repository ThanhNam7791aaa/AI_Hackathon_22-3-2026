"use client";

import Link from "next/link";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Repositories", href: "/repositories" },
  { label: "Audit Logs", href: "/audit-logs" },
  { label: "Settings", href: "/settings" },
];

interface DashboardHeaderProps {
  activeNav?: string; // label of the active nav item
}

export default function DashboardHeader({ activeNav = "Dashboard" }: DashboardHeaderProps) {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-[#0b1326] sticky top-0 z-50 border-b border-[#464555]/10">
      <div className="flex items-center gap-8">
        {/* Brand */}
        <Link href="/">
          <h1 className="text-xl font-bold text-white tracking-tight font-headline cursor-pointer hover:text-[#c3c0ff] transition-colors">
            AI SDLC Auditor
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-headline text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = link.label === activeNav;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? "text-[#4f46e5] border-b-2 border-[#4f46e5] pb-1"
                    : "text-slate-400 hover:text-white transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right — Status + Icons + Avatar */}
      <div className="flex items-center gap-4">
        {/* LLM Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#222a3d] border border-[#464555]/20">
          <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#c7c4d8]">
            Connected to LLM
          </span>
        </div>

        <button className="p-2 text-slate-400 hover:bg-[#31394d] rounded-lg transition-all duration-200">
          <span className="material-symbols-outlined">account_tree</span>
        </button>
        <button className="p-2 text-slate-400 hover:bg-[#31394d] rounded-lg transition-all duration-200">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center text-xs font-bold text-white shadow-lg">
          JD
        </div>
      </div>
    </header>
  );
}
