import Link from "next/link";

const navItems = [
  { icon: "dashboard", label: "Overview", href: "/dashboard" },
  { icon: "security", label: "Security Scan", href: "/security-scan" },
  { icon: "gavel", label: "Compliance", href: "/compliance" },
  { icon: "terminal", label: "Code Quality", href: "/dashboard" },
  { icon: "description", label: "Reports", href: "/reports" },
];

const bottomItems = [
  { icon: "help", label: "Docs", href: "#" },
  { icon: "contact_support", label: "Support", href: "#" },
];

interface DashboardSidebarProps {
  activeSideNav?: string;
}

export default function DashboardSidebar({
  activeSideNav = "Overview",
}: DashboardSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-[#131b2e] border-r border-[#464555]/20 pt-20 pb-8 z-40">
      {/* System Status Card */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#060e20] border border-[#464555]/10">
          <div className="p-2 rounded-lg bg-[#4f46e5]/10">
            <span className="material-symbols-outlined text-[#c3c0ff]">
              analytics
            </span>
          </div>
          <div>
            <div className="text-xs text-[#c7c4d8] uppercase tracking-tighter">
              System Status
            </div>
            <div className="text-sm font-bold text-white">Active Node</div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-4 space-y-1 font-headline font-medium">
        {navItems.map((item) => {
          const isActive = item.label === activeSideNav;
          return isActive ? (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 bg-[#2d3449] text-white border-l-4 border-[#4f46e5] rounded-r-lg px-4 py-3 transition-all duration-300"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-slate-400 hover:text-slate-200 px-4 py-3 hover:bg-[#222a3d] transition-all duration-300 rounded-lg group"
            >
              <span className="material-symbols-outlined group-hover:text-[#c3c0ff] transition-colors">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom — Docs / Support / CTA */}
      <div className="px-4 mt-auto pt-8 border-t border-[#464555]/10">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 text-slate-400 hover:text-slate-200 px-4 py-2 hover:bg-[#222a3d] transition-all duration-300 rounded-lg mb-1"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}

        <Link
          href="/security-scan"
          className="w-full mt-4 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-white font-bold py-3 rounded-xl shadow-lg shadow-[#4f46e5]/20 active:scale-95 transition-transform hover:shadow-[#4f46e5]/40 hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Run New Audit
        </Link>
      </div>
    </aside>
  );
}
