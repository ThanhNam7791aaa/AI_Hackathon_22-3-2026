import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Scan | Synthetic Auditor",
  description:
    "Real-time deep analysis of your SDLC pipeline. Detecting zero-days, logic flaws, and credential leaks.",
};

/* ─────────────────────── */
/* Sidebar                 */
/* ─────────────────────── */
const sideNavItems = [
  { icon: "dashboard", label: "Overview", active: false },
  { icon: "security", label: "Security Scan", active: true },
  { icon: "gavel", label: "Compliance", active: false },
  { icon: "terminal", label: "Code Quality", active: false },
  { icon: "analytics", label: "Reports", active: false },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed bg-[#131b2e] shadow-2xl z-50 border-r border-white/5">
      <div className="px-6 py-8">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center shadow-lg">
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
        </div>

        {/* Nav */}
        <nav className="space-y-1">
          {sideNavItems.map((item) =>
            item.active ? (
              <div
                key={item.label}
                className="text-indigo-400 font-bold border-l-4 border-indigo-500 bg-[#222a3d] pl-4 py-3 flex items-center gap-3 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
                <span className="font-headline text-sm font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            ) : (
              <div
                key={item.label}
                className="text-slate-400 pl-4 py-3 flex items-center gap-3 hover:bg-[#222a3d] hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
                <span className="font-headline text-sm font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            )
          )}
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-auto px-6 py-8 border-t border-white/5 space-y-4">
        <button className="w-full bg-[#4f46e5] hover:bg-[#4d44e3] text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 duration-150 text-xs tracking-widest uppercase">
          Trigger New Scan
        </button>
        <div className="space-y-1">
          {[
            { icon: "settings", label: "Settings" },
            { icon: "menu_book", label: "Documentation" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-slate-400 pl-4 py-2 flex items-center gap-3 hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              <span className="font-headline text-[11px] font-medium tracking-wide uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ─────────────────────── */
/* Top Header              */
/* ─────────────────────── */
function TopHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1326] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-6">
        <span className="font-headline font-bold text-xl text-[#4f46e5] tracking-tighter">
          Synthetic Auditor
        </span>
        {/* Search bar */}
        <div className="hidden lg:flex items-center bg-[#171f33] rounded-full px-4 py-2 w-80 border border-[#464555]/20 focus-within:border-[#4f46e5]/40 transition-colors">
          <span className="material-symbols-outlined text-slate-400 mr-2 text-sm">
            search
          </span>
          <input
            className="bg-transparent border-none text-sm text-[#dae2fd] focus:outline-none focus:ring-0 w-full placeholder:text-slate-500"
            placeholder="Search vulnerabilities..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-indigo-300 transition-colors active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-slate-400 hover:text-indigo-300 transition-colors active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center text-xs font-bold text-white border border-indigo-500/30">
          JD
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── */
/* Summary Bento Cards         */
/* ─────────────────────────── */
function SummaryBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Global Health Score — 2-col */}
      <div className="md:col-span-2 bg-[#131b2e] p-8 rounded-xl flex flex-col justify-between shadow-sm border-l-4 border-[#4edea3]">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#c7c4d8] font-bold">
            Global Health Score
          </span>
          <div className="flex items-baseline gap-4 mt-2">
            <span className="font-headline text-6xl font-bold text-[#dae2fd]">
              94
            </span>
            <span className="text-[#4edea3] font-bold flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">
                trending_up
              </span>
              +2.4%
            </span>
          </div>
        </div>
        <div className="mt-8">
          <div className="w-full bg-[#2d3449] h-2 rounded-full overflow-hidden">
            <div className="bg-[#4edea3] h-full w-[94%] rounded-full" />
          </div>
          <p className="text-xs text-[#c7c4d8] mt-3">
            Increased security posture across 12 connected repositories.
          </p>
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="bg-[#93000a] p-8 rounded-xl flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <span className="material-symbols-outlined text-[9rem] text-white">
            warning
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-[#ffdad6] font-bold relative z-10">
          Critical Alerts
        </span>
        <div className="relative z-10 mt-2">
          <span className="font-headline text-5xl font-bold text-[#ffdad6]">
            03
          </span>
        </div>
        <p className="text-xs text-[#ffdad6]/80 mt-8 relative z-10">
          High-priority fixes required in{" "}
          <span className="font-bold underline">Auth-Service</span>.
        </p>
      </div>

      {/* Active Scans */}
      <div className="bg-[#222a3d] p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-[#31394d] transition-colors">
        <span className="text-[10px] uppercase tracking-widest text-[#c7c4d8] font-bold">
          Active Scans
        </span>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-headline text-5xl font-bold text-[#c3c0ff]">
            08
          </span>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#c3c0ff]/20 border-2 border-[#222a3d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#c3c0ff] text-xs">
                sync
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#4edea3]/20 border-2 border-[#222a3d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#4edea3] text-xs">
                check_circle
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-[#c7c4d8] mt-8">
          Next scheduled: 04:00 PM EST
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────── */
/* Scan Pipeline Items             */
/* ─────────────────────────────── */
function ScanItemInProgress() {
  return (
    <div className="bg-[#131b2e] p-6 rounded-xl hover:bg-[#171f33] transition-all group border-l-4 border-indigo-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#2d3449] flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-indigo-400 animate-spin"
              style={{ animationDuration: "3s" }}
            >
              data_exploration
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-[#dae2fd]">synthetic-auditor-ui</h4>
              <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded uppercase tracking-wider">
                In Progress
              </span>
            </div>
            <p className="text-sm text-[#c7c4d8] mt-1">
              Deep AST scan for prototype pollution and XSS vectors.
            </p>
            <div className="flex gap-4 mt-2 flex-wrap">
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">
                  account_tree
                </span>{" "}
                main
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">
                  commit
                </span>{" "}
                8f2a1c0
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* Progress */}
          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
              Progress
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#dae2fd]">68%</span>
              <div className="w-32 bg-[#2d3449] h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[68%] rounded-full" />
              </div>
            </div>
          </div>
          {/* Stop button */}
          <button className="p-3 rounded-lg hover:bg-[#ffb4ab]/10 hover:text-[#ffb4ab] text-slate-500 transition-colors">
            <span className="material-symbols-outlined">stop_circle</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ScanItemScheduled() {
  return (
    <div className="bg-[#131b2e] p-6 rounded-xl hover:bg-[#171f33] transition-all group">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#2d3449] flex items-center justify-center text-slate-500 shrink-0">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-[#dae2fd]">gateway-api-service</h4>
              <span className="px-2 py-0.5 bg-[#2d3449] text-[#c7c4d8] text-[10px] font-bold rounded uppercase tracking-wider">
                Scheduled
              </span>
            </div>
            <p className="text-sm text-[#c7c4d8] mt-1">
              Vulnerability assessment scheduled for off-peak hours.
            </p>
            <div className="flex gap-4 mt-2 flex-wrap">
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">
                  calendar_today
                </span>{" "}
                Today, 11:30 PM
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">
                  refresh
                </span>{" "}
                Weekly
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#2d3449] hover:bg-[#31394d] text-xs font-bold rounded-lg transition-colors text-[#dae2fd]">
            Run Now
          </button>
          <button className="p-3 rounded-lg hover:bg-[#31394d] text-slate-500 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ScanItemIssues() {
  return (
    <div className="bg-[#131b2e] p-6 rounded-xl hover:bg-[#171f33] transition-all group border-l-4 border-[#ffb4ab]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/10 flex items-center justify-center text-[#ffb4ab] shrink-0">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              report
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-[#dae2fd]">auth-middleware-lib</h4>
              <span className="px-2 py-0.5 bg-[#ffb4ab]/10 text-[#ffb4ab] text-[10px] font-bold rounded uppercase tracking-wider">
                Issues Found
              </span>
            </div>
            <p className="text-sm text-[#c7c4d8] mt-1">
              Hardcoded secrets detected in configuration files.
            </p>
            <div className="flex gap-4 mt-2 flex-wrap">
              <span className="text-[11px] text-[#ffb4ab] flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-xs">
                  priority_high
                </span>{" "}
                2 Critical
              </span>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">
                  history
                </span>{" "}
                2 hours ago
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#ffb4ab] text-[#690005] text-xs font-black rounded-lg transition-colors hover:shadow-lg hover:shadow-[#ffb4ab]/20">
            Review Findings
          </button>
          <button className="p-3 rounded-lg hover:bg-[#31394d] text-slate-500 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── */
/* Footer CTA Banner       */
/* ─────────────────────── */
function AutomateBanner() {
  const logos = [
    { label: "GitHub", bg: "bg-slate-700" },
    { label: "GitLab", bg: "bg-orange-700" },
  ];
  return (
    <div className="bg-[#222a3d] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <h4 className="font-headline text-lg font-bold text-white mb-2">
          Automate your security posture
        </h4>
        <p className="text-slate-400 text-sm max-w-lg">
          Connect our GitHub Action or GitLab CI/CD plugin to run the Auditor on
          every pull request automatically. Ensure no vulnerability ever hits
          production.
        </p>
      </div>
      <div className="relative z-10 flex gap-6 shrink-0">
        {logos.map((logo) => (
          <div
            key={logo.label}
            className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-lg ${logo.bg} flex items-center justify-center`}
            >
              <span className="material-symbols-outlined text-white text-xl">
                {logo.label === "GitHub" ? "terminal" : "account_tree"}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── */
/* Mobile Bottom Nav       */
/* ─────────────────────── */
function MobileBottomNav() {
  const items = [
    { icon: "dashboard", label: "Overview", active: false },
    { icon: "security", label: "Scan", active: true, fill: true },
    { icon: "add", label: "", fab: true },
    { icon: "terminal", label: "Code", active: false },
    { icon: "analytics", label: "Reports", active: false },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b1326] z-50 flex items-center justify-around py-3 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {items.map((item, i) =>
        item.fab ? (
          <div
            key={i}
            className="bg-[#4f46e5] p-3 rounded-full -mt-10 shadow-xl border-4 border-[#0b1326] text-white"
          >
            <span className="material-symbols-outlined">add</span>
          </div>
        ) : (
          <div
            key={i}
            className={`flex flex-col items-center p-2 ${
              item.active
                ? "text-indigo-400 border-t-2 border-indigo-400"
                : "text-slate-400"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                item.fill && item.active
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="text-[9px] font-bold uppercase mt-1">
              {item.label}
            </span>
          </div>
        )
      )}
    </nav>
  );
}

/* ──────────── */
/* Main Page    */
/* ──────────── */
export default function SecurityScanPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen selection:bg-[#c3c0ff]/30 selection:text-[#c3c0ff]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Canvas */}
      <main className="md:ml-64 min-h-screen">
        {/* Top Header */}
        <TopHeader />

        <div className="px-8 py-10 max-w-7xl mx-auto space-y-12 pb-24 md:pb-10">
          {/* Page Title Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-[#dae2fd] mb-2">
                Security Scan
              </h2>
              <p className="text-[#c7c4d8] max-w-2xl">
                Real-time deep analysis of your SDLC pipeline. Detecting
                zero-days, logic flaws, and credential leaks using Synthetic
                Intelligence.
              </p>
            </div>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] rounded-xl text-white font-bold tracking-wide shadow-xl overflow-hidden hover:shadow-[#4f46e5]/30 transition-all active:scale-95 shrink-0">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
                Trigger New Scan
              </span>
            </button>
          </div>

          {/* Summary Bento */}
          <SummaryBento />

          {/* Active & Scheduled Pipeline */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold flex items-center gap-2 text-[#dae2fd]">
                <span className="material-symbols-outlined text-[#c3c0ff]">
                  list_alt
                </span>
                Active &amp; Scheduled Pipeline
              </h3>
              <div className="flex gap-2">
                <button className="bg-[#222a3d] hover:bg-[#31394d] p-2 rounded-lg text-[#dae2fd] transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>
                </button>
                <button className="bg-[#222a3d] hover:bg-[#31394d] px-4 py-2 rounded-lg text-xs font-bold transition-colors text-[#dae2fd]">
                  View History
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <ScanItemInProgress />
              <ScanItemScheduled />
              <ScanItemIssues />
            </div>
          </div>

          {/* Footer Banner */}
          <AutomateBanner />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />
    </div>
  );
}
