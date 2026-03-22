import type { Metadata } from "next";
import DashboardHeader from "../dashboard/components/DashboardHeader";
import DashboardSidebar from "../dashboard/components/DashboardSidebar";

export const metadata: Metadata = {
  title: "Audit Logs | AI SDLC Auditor",
  description:
    "Complete historical record of automated security scans, quality checks, and LLM-assisted code audits.",
};

/* ─────────────────── */
/* Stats Bento Cards   */
/* ─────────────────── */
const stats = [
  {
    label: "Total Audits",
    value: "1,284",
    valueClass: "text-[#dae2fd]",
    border: "border-[#c3c0ff]",
  },
  {
    label: "Critical Found",
    value: "42",
    valueClass: "text-[#ffb4ab]",
    border: "border-[#ffb4ab]",
  },
  {
    label: "Passed Checks",
    value: "96.4%",
    valueClass: "text-[#4edea3]",
    border: "border-[#4edea3]",
  },
  {
    label: "Avg. Scan Time",
    value: "4m 12s",
    valueClass: "text-[#dae2fd]",
    border: "border-[#bec6e0]",
  },
];

/* ─────────────────── */
/* Tag Chip            */
/* ─────────────────── */
function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded bg-[#2d3449] text-[#c7c4d8] border border-[#464555]/20 whitespace-nowrap">
      {label}
    </span>
  );
}

/* ─────────────────────────────── */
/* Issue Badges                   */
/* ─────────────────────────────── */
function CriticalBadge({ count }: { count: number }) {
  if (count === 0) {
    return (
      <span className="px-2 py-0.5 rounded-full bg-[#2d3449] text-[#c7c4d8] text-[10px] font-bold">
        0 CRITICAL
      </span>
    );
  }
  return (
    <span className="px-2 py-0.5 rounded-full bg-[#93000a] text-[#ffdad6] text-[10px] font-bold">
      {count} CRITICAL
    </span>
  );
}

function WarnBadge({ count }: { count: number }) {
  return (
    <span className="px-2 py-0.5 rounded-full bg-[#2d3449] text-[#c3c0ff] text-[10px] font-bold border border-[#c3c0ff]/20">
      {count} WARN
    </span>
  );
}

function CleanBadge() {
  return (
    <div className="flex items-center gap-1.5 bg-[#006e4b]/20 px-3 py-1 rounded-full">
      <span className="w-1.5 h-1.5 bg-[#4edea3] rounded-full" />
      <span className="text-[10px] font-bold text-[#4edea3]">SYSTEM CLEAN</span>
    </div>
  );
}

/* ───────────────────────── */
/* Table Row data            */
/* ───────────────────────── */
interface LogRow {
  date: string;
  time: string;
  repo: string;
  branch: string;
  critical: number | "clean";
  warnings?: number;
  tags: string[];
}

const logRows: LogRow[] = [
  {
    date: "Oct 24, 2023",
    time: "14:22:10 UTC",
    repo: "core-api-service",
    branch: "production",
    critical: 3,
    warnings: 8,
    tags: ["SQL-INJECTION", "AUTH-BYPASS"],
  },
  {
    date: "Oct 24, 2023",
    time: "11:05:45 UTC",
    repo: "auth-middleware",
    branch: "feature/oauth-v2",
    critical: 0,
    warnings: 2,
    tags: ["DEPS-AUDIT"],
  },
  {
    date: "Oct 23, 2023",
    time: "18:50:12 UTC",
    repo: "frontend-dashboard",
    branch: "main",
    critical: "clean",
    tags: ["UI-COMPONENT-SCAN", "A11Y-CHECK"],
  },
  {
    date: "Oct 23, 2023",
    time: "09:12:33 UTC",
    repo: "payment-gateway-adapter",
    branch: "staging",
    critical: 1,
    warnings: 14,
    tags: ["PCI-DSS-L3", "TOKEN-SAFETY"],
  },
];

function TableRow({ row }: { row: LogRow }) {
  return (
    <tr className="hover:bg-[#31394d]/30 transition-colors group border-t border-[#464555]/10">
      {/* Timestamp */}
      <td className="px-6 py-6">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#dae2fd]">
            {row.date}
          </span>
          <span className="text-[11px] text-[#c7c4d8] font-mono">{row.time}</span>
        </div>
      </td>

      {/* Repo + Branch */}
      <td className="px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#2d3449] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#c3c0ff] text-sm">
              source
            </span>
          </div>
          <div>
            <p className="text-sm font-bold text-[#dae2fd]">{row.repo}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="material-symbols-outlined text-[12px] text-[#c7c4d8]">
                account_tree
              </span>
              <span className="text-[11px] font-mono text-[#c7c4d8]">
                {row.branch}
              </span>
            </div>
          </div>
        </div>
      </td>

      {/* Issues */}
      <td className="px-6 py-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {row.critical === "clean" ? (
            <CleanBadge />
          ) : (
            <>
              <CriticalBadge count={row.critical as number} />
              {row.warnings !== undefined && (
                <WarnBadge count={row.warnings} />
              )}
            </>
          )}
        </div>
      </td>

      {/* Audit Scope tags */}
      <td className="px-6 py-6">
        <div className="flex flex-wrap gap-1">
          {row.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </td>

      {/* Action */}
      <td className="px-6 py-6 text-right">
        <button className="text-[#c3c0ff] hover:text-white text-sm font-bold flex items-center gap-1 justify-end ml-auto group-hover:translate-x-1 transition-transform">
          View Report
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </td>
    </tr>
  );
}

/* ─────────────────── */
/* Pagination          */
/* ─────────────────── */
function Pagination() {
  return (
    <div className="px-6 py-4 bg-[#222a3d]/30 flex items-center justify-between">
      <p className="text-xs text-[#c7c4d8] font-medium">
        Showing{" "}
        <span className="text-[#dae2fd] font-bold">1&nbsp;–&nbsp;4</span> of
        1,284 results
      </p>
      <div className="flex gap-2">
        <button className="w-8 h-8 rounded border border-[#464555]/20 flex items-center justify-center text-[#c7c4d8] hover:bg-[#31394d] transition-colors">
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded text-xs font-bold transition-colors ${
              page === 1
                ? "bg-[#c3c0ff] text-[#1d00a5]"
                : "border border-[#464555]/20 text-[#c7c4d8] hover:bg-[#31394d]"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-8 h-8 rounded border border-[#464555]/20 flex items-center justify-center text-[#c7c4d8] hover:bg-[#31394d] transition-colors">
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

/* ────────────────────── */
/* AI Insights Footer     */
/* ────────────────────── */
function AIInsightsFooter() {
  return (
    <div className="mt-10 bg-gradient-to-br from-[#131b2e] to-[#222a3d] p-8 rounded-2xl border border-[#c3c0ff]/10 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#c3c0ff]/10 flex items-center justify-center border border-[#c3c0ff]/20 shrink-0">
          <span
            className="material-symbols-outlined text-3xl text-[#c3c0ff]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-[#dae2fd]">
            AI Auditor Insight
          </h4>
          <p className="text-[#c7c4d8] text-sm mt-1 leading-relaxed">
            Based on the last 50 audits, your{" "}
            <span className="text-[#c3c0ff] font-mono px-1">
              core-api-service
            </span>{" "}
            has shown a{" "}
            <span className="text-[#4edea3] font-semibold">15% reduction</span>{" "}
            in critical vulnerabilities since the implementation of automated
            OAuth checks. The average response time to critical issues has also
            improved by{" "}
            <span className="text-[#4edea3] font-semibold">3.2 hours</span>.
          </p>
        </div>

        {/* CTA */}
        <button className="px-6 py-2.5 rounded-lg border border-[#464555] text-sm font-bold hover:bg-[#31394d] transition-colors whitespace-nowrap text-[#dae2fd]">
          Download Trend Analysis
        </button>
      </div>

      {/* Decorative blur */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c3c0ff]/5 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}

/* ──────────────────────── */
/* Mobile Bottom Nav        */
/* ──────────────────────── */
function MobileBottomNav() {
  const items = [
    { icon: "dashboard", label: "Dashboard", active: false },
    { icon: "source", label: "Repos", active: false },
    { icon: "description", label: "Audit Logs", active: true, fill: true },
    { icon: "settings", label: "Settings", active: false },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#171f33] border-t border-[#464555]/10 px-6 py-3 flex justify-between items-center z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center gap-1 ${
            item.active ? "text-[#c3c0ff]" : "text-[#c7c4d8]"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={
              item.fill
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {item.icon}
          </span>
          <span className="text-[10px]">{item.label}</span>
        </a>
      ))}
    </div>
  );
}

/* ──────────── */
/* Main Page    */
/* ──────────── */
export default function AuditLogsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-white">
      {/* Top Nav — "Audit Logs" active */}
      <DashboardHeader activeNav="Audit Logs" />

      <div className="flex">
        {/* Sidebar — "Reports" active */}
        <DashboardSidebar activeSideNav="Reports" />

        {/* Main Canvas */}
        <main className="flex-1 lg:ml-64 p-8 pb-24 md:pb-12 min-h-screen">
          {/* ── Page Header ── */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c3c0ff] mb-2 block">
                Governance &amp; Traceability
              </span>
              <h1 className="text-4xl font-extrabold font-headline text-[#dae2fd] tracking-tight">
                Audit Logs
              </h1>
              <p className="text-[#c7c4d8] mt-2 max-w-xl leading-relaxed">
                Complete historical record of automated security scans, quality
                checks, and LLM-assisted code audits across your infrastructure.
              </p>
            </div>

            {/* Filter chips */}
            <div className="flex gap-3 shrink-0">
              <button className="flex items-center gap-2 bg-[#131b2e] px-4 py-2 rounded-xl border border-[#464555]/10 hover:border-[#464555]/30 transition-colors">
                <span className="material-symbols-outlined text-sm text-[#4edea3]">
                  filter_list
                </span>
                <span className="text-sm font-medium text-[#c7c4d8]">
                  Filter by Repo
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#131b2e] px-4 py-2 rounded-xl border border-[#464555]/10 hover:border-[#464555]/30 transition-colors">
                <span className="material-symbols-outlined text-sm text-[#4edea3]">
                  calendar_today
                </span>
                <span className="text-sm font-medium text-[#c7c4d8]">
                  Last 30 Days
                </span>
              </button>
            </div>
          </div>

          {/* ── Stats Bento ── */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`bg-[#131b2e] p-6 rounded-xl border-l-4 ${s.border} shadow-sm`}
              >
                <p className="text-xs font-bold text-[#c7c4d8] uppercase tracking-wider mb-1">
                  {s.label}
                </p>
                <p
                  className={`text-3xl font-black font-headline ${s.valueClass}`}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Audit Logs Table ── */}
          <div className="bg-[#131b2e] rounded-2xl overflow-hidden shadow-2xl border border-[#464555]/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#222a3d]/50">
                    {[
                      { label: "Timestamp", align: "" },
                      { label: "Repository & Branch", align: "" },
                      { label: "Issues", align: "text-center" },
                      { label: "Audit Scope", align: "" },
                      { label: "Action", align: "text-right" },
                    ].map((col) => (
                      <th
                        key={col.label}
                        className={`px-6 py-5 text-xs font-bold uppercase tracking-widest text-[#c7c4d8] ${col.align}`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {logRows.map((row, i) => (
                    <TableRow key={i} row={row} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <Pagination />
          </div>

          {/* ── AI Insights Footer ── */}
          <AIInsightsFooter />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />
    </div>
  );
}
