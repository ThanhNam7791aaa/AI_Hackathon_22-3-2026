import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports Hub | Synthetic Auditor",
  description:
    "High-fidelity SDLC audit findings, architectural debt analysis, and compliance snapshots.",
};

/* ─────────────────────── */
/* Sidebar                 */
/* ─────────────────────── */
const sideNavItems = [
  { icon: "dashboard", label: "Overview" },
  { icon: "security", label: "Security Scan" },
  { icon: "gavel", label: "Compliance" },
  { icon: "terminal", label: "Code Quality" },
  { icon: "analytics", label: "Reports", active: true, fill: true },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed bg-[#131b2e] shadow-2xl z-40 border-r border-white/5">
      <div className="px-6 py-8">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center shadow-lg">
            <span
              className="material-symbols-outlined text-[#dad7ff]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              analytics
            </span>
          </div>
          <div>
            <h2 className="text-lg font-black text-white leading-tight font-headline">
              System Health
            </h2>
            <p className="text-[10px] font-bold text-[#4edea3] tracking-widest uppercase opacity-80">
              AI Engine Active
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="space-y-1">
          {sideNavItems.map((item) =>
            item.active ? (
              <a
                key={item.label}
                href="#"
                className="text-indigo-400 font-bold border-l-4 border-indigo-500 bg-[#222a3d] pl-4 py-3 flex items-center gap-3 text-sm tracking-wide uppercase"
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={
                    item.fill
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ) : (
              <a
                key={item.label}
                href="#"
                className="text-slate-400 pl-4 py-3 flex items-center gap-3 font-medium text-sm tracking-wide uppercase hover:bg-[#222a3d] hover:text-white transition-all duration-200"
              >
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            )
          )}
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-auto px-6 py-8 border-t border-white/5 space-y-4">
        <button className="w-full py-3 px-4 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-[#dad7ff] font-bold rounded-xl shadow-lg active:scale-95 transition-transform text-sm tracking-tight uppercase">
          Trigger New Scan
        </button>
        <div className="space-y-1">
          {[
            { icon: "settings", label: "Settings" },
            { icon: "menu_book", label: "Documentation" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="text-slate-400 pl-4 py-2 flex items-center gap-3 text-xs tracking-wide uppercase hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
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
    <header className="bg-[#0b1326] flex justify-between items-center px-6 py-4 w-full z-30 sticky top-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      {/* Search */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            search
          </span>
          <input
            className="bg-[#171f33] w-full pl-10 pr-4 py-2 rounded-xl text-sm border border-transparent focus:border-[#c3c0ff]/30 focus:outline-none text-[#dae2fd] placeholder:text-slate-500 transition-colors"
            placeholder="Search audit logs..."
            type="text"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-indigo-300 transition-colors duration-200 active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-slate-400 hover:text-indigo-300 transition-colors duration-200 active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-px bg-white/10 mx-2" />
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center text-xs font-bold text-white border border-white/10">
            JD
          </div>
          <span className="font-headline font-bold text-sm tracking-tight text-[#c7c4d8] group-hover:text-[#c3c0ff] transition-colors">
            Synthetic Auditor
          </span>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────── */
/* Stats Bar               */
/* ─────────────────────── */
const stats = [
  { label: "Total Reports", value: "1,284", suffix: "+12%", suffixColor: "text-[#4edea3]" },
  { label: "Critical Findings", value: "42", suffix: "-4%", suffixColor: "text-[#ffb4ab]" },
  { label: "Compliance Score", value: "94.8%", suffix: null, suffixColor: "" },
  { label: "Storage Usage", value: "2.4 GB", suffix: null, suffixColor: "" },
];

function StatsBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {stats.map((s) => (
        <div key={s.label} className="bg-[#131b2e] p-6 rounded-2xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
            {s.label}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-headline">
              {s.value}
            </span>
            {s.suffix && (
              <span className={`text-xs font-bold font-mono ${s.suffixColor}`}>
                {s.suffix}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────── */
/* Audit Archive Table          */
/* ──────────────────────────── */
interface ReportRow {
  repo: string;
  branch: string;
  date: string;
  version: string;
  statusDot: string;
  statusGlow: string;
  statusLabel: string;
  statusText: string;
}

const reportRows: ReportRow[] = [
  {
    repo: "synthetic-auditor-ui",
    branch: "main / @83a1b42",
    date: "Oct 24, 2023 · 14:22",
    version: "v4.2.1-stable",
    statusDot: "bg-[#4edea3]",
    statusGlow: "shadow-[0_0_8px_rgba(78,222,163,0.5)]",
    statusLabel: "Healthy",
    statusText: "text-[#4edea3]",
  },
  {
    repo: "core-engine-rust",
    branch: "feature/auth-refactor / @f293d11",
    date: "Oct 24, 2023 · 09:15",
    version: "v4.2.1-stable",
    statusDot: "bg-[#ffb4ab]",
    statusGlow: "shadow-[0_0_8px_rgba(255,180,171,0.5)]",
    statusLabel: "Critical Risk",
    statusText: "text-[#ffb4ab]",
  },
  {
    repo: "legacy-payment-gw",
    branch: "hotfix/CVE-2023 / @ee9c22a",
    date: "Oct 23, 2023 · 18:04",
    version: "v4.2.0-stable",
    statusDot: "bg-[#c3c0ff]",
    statusGlow: "shadow-[0_0_8px_rgba(195,192,255,0.5)]",
    statusLabel: "Informational",
    statusText: "text-[#c3c0ff]",
  },
  {
    repo: "infrastructure-as-code",
    branch: "main / @d12b881",
    date: "Oct 23, 2023 · 12:00",
    version: "v4.2.0-stable",
    statusDot: "bg-[#4edea3]",
    statusGlow: "",
    statusLabel: "Healthy",
    statusText: "text-[#4edea3]",
  },
];

function ActionButtons() {
  return (
    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {[
        { icon: "picture_as_pdf", title: "Download PDF" },
        { icon: "data_object", title: "Download JSON" },
        { icon: "markdown", title: "Download Markdown" },
      ].map((btn) => (
        <button
          key={btn.icon}
          title={btn.title}
          className="p-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-xl">{btn.icon}</span>
        </button>
      ))}
    </div>
  );
}

function AuditArchive() {
  return (
    <section className="bg-[#131b2e] rounded-3xl overflow-hidden shadow-2xl">
      {/* Section Header */}
      <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-white font-headline tracking-tight">
          Audit Archive
        </h3>
        <div className="flex items-center gap-2">
          {[
            { label: "Recent", active: false },
            { label: "All Time", active: true },
            { label: "Failed Only", active: false },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                tab.active
                  ? "bg-[#4f46e5] text-white"
                  : "text-slate-400 bg-[#171f33] hover:bg-[#31394d]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#222a3d]/50">
            <tr>
              {[
                "Repository & Branch",
                "Generated Date",
                "Auditor Version",
                "Status",
              ].map((col) => (
                <th
                  key={col}
                  className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500"
                >
                  {col}
                </th>
              ))}
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reportRows.map((row) => (
              <tr
                key={row.repo}
                className="hover:bg-[#31394d] group transition-colors border-t border-white/[0.03]"
              >
                {/* Repo + branch */}
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-tight">
                      {row.repo}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">
                      {row.branch}
                    </span>
                  </div>
                </td>
                {/* Date */}
                <td className="px-8 py-6">
                  <span className="text-[#c7c4d8] text-sm">{row.date}</span>
                </td>
                {/* Version */}
                <td className="px-8 py-6">
                  <span className="px-2 py-1 bg-[#2d3449] text-[#bec6e0] text-[10px] font-bold rounded-md font-mono">
                    {row.version}
                  </span>
                </td>
                {/* Status */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${row.statusDot} ${row.statusGlow}`}
                    />
                    <span
                      className={`text-[10px] font-black uppercase tracking-tighter ${row.statusText}`}
                    >
                      {row.statusLabel}
                    </span>
                  </div>
                </td>
                {/* Actions */}
                <td className="px-8 py-6 text-right">
                  <ActionButtons />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-8 py-6 flex items-center justify-between bg-[#222a3d]/20">
        <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">
          Showing 4 of 1,284 entries
        </span>
        <div className="flex items-center gap-1">
          <button className="p-2 text-slate-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-colors ${
                page === 1
                  ? "bg-[#4f46e5] text-white"
                  : "text-slate-400 hover:bg-[#31394d]"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 text-slate-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── */
/* Bottom Bento Grid           */
/* ─────────────────────────── */
function BottomBento() {
  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Automation Pulse — 2 col */}
      <div className="lg:col-span-2 bg-gradient-to-br from-[#131b2e] to-[#171f33] rounded-3xl p-8 relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="text-2xl font-black text-white font-headline tracking-tighter mb-4">
            Automation Pulse
          </h4>
          <p className="text-[#c7c4d8] max-w-md mb-8 leading-relaxed">
            Configure periodic deep-scans for critical infrastructure. We'll
            deliver compliance dossiers directly to your Slack or Email.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Next Scan", value: "02:00 AM UTC" },
              { label: "Frequency", value: "Every 24h" },
            ].map((info) => (
              <div
                key={info.label}
                className="flex flex-col gap-1 p-4 bg-[#060e20]/50 rounded-2xl border border-white/5 min-w-[160px]"
              >
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {info.label}
                </span>
                <span className="text-white font-bold font-mono">
                  {info.value}
                </span>
              </div>
            ))}
            <button className="flex items-center justify-center aspect-square w-14 bg-[#31394d] rounded-2xl border border-white/10 hover:border-[#c3c0ff]/50 transition-all active:scale-95 group/btn">
              <span className="material-symbols-outlined text-[#c3c0ff] group-hover/btn:rotate-12 transition-transform">
                edit_calendar
              </span>
            </button>
          </div>
        </div>
        {/* Decorative glow */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#4f46e5]/10 blur-[80px] rounded-full pointer-events-none" />
      </div>

      {/* Export Queue */}
      <div className="bg-[#131b2e] rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-white font-headline tracking-tight mb-2">
            Export Queue
          </h4>
          <p className="text-xs text-[#c7c4d8] mb-6">
            3 files ready for archival
          </p>
          <div className="space-y-4">
            {[
              { icon: "description", iconColor: "text-[#c3c0ff]", name: "audit_log_q3.pdf", size: "12 MB" },
              { icon: "data_object", iconColor: "text-[#4edea3]", name: "schema_delta.json", size: "2.1 MB" },
            ].map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between p-3 bg-[#2d3449] rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${file.iconColor}`}>
                    {file.icon}
                  </span>
                  <span className="text-xs font-mono text-white">
                    {file.name}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">{file.size}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-8 w-full py-4 rounded-xl border-2 border-dashed border-[#464555]/30 text-slate-400 font-bold text-xs uppercase tracking-widest hover:border-[#c3c0ff]/50 hover:text-white transition-all">
          View Export History
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────── */
/* Mobile Bottom Nav       */
/* ─────────────────────── */
function MobileBottomNav() {
  const tabs = [
    { icon: "dashboard", label: "Home", active: false },
    { icon: "security", label: "Scan", active: false },
    { isFab: true },
    { icon: "analytics", label: "Reports", active: true, fill: true },
    { icon: "settings", label: "User", active: false },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#131b2e] flex justify-around items-center py-4 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      {tabs.map((tab, i) =>
        "isFab" in tab && tab.isFab ? (
          <div key={i} className="relative -top-6">
            <button className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] shadow-xl flex items-center justify-center text-white active:scale-90 transition-transform">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                add
              </span>
            </button>
          </div>
        ) : (
          <a
            key={i}
            href="#"
            className={`flex flex-col items-center gap-1 ${
              tab.active ? "text-indigo-400" : "text-slate-400"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                tab.fill && tab.active
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">
              {tab.label}
            </span>
          </a>
        )
      )}
    </nav>
  );
}

/* ──────────── */
/* Main Page    */
/* ──────────── */
export default function ReportsPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen selection:bg-[#c3c0ff]/30">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="md:ml-64 min-h-screen">
        {/* Top Header */}
        <TopHeader />

        {/* Content */}
        <div className="p-6 lg:p-12 bg-[#0b1326] min-h-[calc(100vh-72px)] pb-24 md:pb-12">
          <div className="max-w-7xl mx-auto">
            {/* ── Page Header ── */}
            <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#4edea3] text-[10px] font-black uppercase tracking-[0.2em]">
                    Data Warehouse
                  </span>
                </div>
                <h1 className="text-5xl font-extrabold text-white tracking-tighter leading-none">
                  Reports Hub
                </h1>
                <p className="text-[#c7c4d8] mt-4 max-w-xl text-lg font-medium leading-relaxed">
                  Access high-fidelity SDLC audit findings, architectural debt
                  analysis, and compliance snapshots generated by the AI engine.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <button className="flex items-center gap-3 px-6 py-4 bg-[#222a3d] hover:bg-[#31394d] text-white font-bold rounded-xl transition-all shadow-xl border border-white/5">
                  <span className="material-symbols-outlined text-[#c3c0ff]">
                    schedule_send
                  </span>
                  <span>Schedule Automated Report</span>
                </button>
              </div>
            </header>

            {/* ── Stats Bar ── */}
            <StatsBar />

            {/* ── Audit Archive Table ── */}
            <AuditArchive />

            {/* ── Bottom Bento ── */}
            <BottomBento />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />
    </div>
  );
}
