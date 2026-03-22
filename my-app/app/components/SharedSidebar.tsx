/**
 * SharedSidebar — dùng cho các trang Security Scan, Compliance, Reports, Settings
 * Sidebar này có brand riêng ("System Health") và không dùng DashboardHeader.
 */
import Link from "next/link";

const navItems = [
  { icon: "dashboard", label: "Overview", href: "/dashboard" },
  { icon: "security", label: "Security Scan", href: "/security-scan" },
  { icon: "gavel", label: "Compliance", href: "/compliance" },
  { icon: "terminal", label: "Code Quality", href: "/dashboard" },
  { icon: "analytics", label: "Reports", href: "/reports" },
];

interface SharedSidebarProps {
  activeLabel: string; // e.g. "Security Scan"
}

export default function SharedSidebar({ activeLabel }: SharedSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed bg-[#131b2e] shadow-2xl z-40 border-r border-white/5">
      <div className="px-6 py-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 mb-10 group">
          <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#4d44e3] transition-colors">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              security
            </span>
          </div>
          <div>
            <h1 className="text-lg font-black text-white leading-tight">
              System Health
            </h1>
            <p className="text-[10px] text-[#4edea3] font-bold tracking-widest uppercase">
              AI Engine Active
            </p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="space-y-1">
          {navItems.map((item) =>
            item.label === activeLabel ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-indigo-400 font-bold border-l-4 border-indigo-500 bg-[#222a3d] pl-4 py-3 flex items-center gap-3"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-headline text-sm font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-400 pl-4 py-3 flex items-center gap-3 hover:bg-[#222a3d] hover:text-white transition-all duration-200"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-headline text-sm font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-auto px-6 py-8 border-t border-white/5 space-y-4">
        <Link
          href="/security-scan"
          className="block w-full bg-[#4f46e5] hover:bg-[#4d44e3] text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 duration-150 text-xs tracking-widest uppercase text-center"
        >
          Trigger New Scan
        </Link>
        <div className="space-y-1">
          <Link
            href="/settings"
            className="text-slate-400 pl-4 py-2 flex items-center gap-3 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-lg">settings</span>
            <span className="font-headline text-[11px] font-medium tracking-wide uppercase">
              Settings
            </span>
          </Link>
          <a
            href="#"
            className="text-slate-400 pl-4 py-2 flex items-center gap-3 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-lg">menu_book</span>
            <span className="font-headline text-[11px] font-medium tracking-wide uppercase">
              Documentation
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
