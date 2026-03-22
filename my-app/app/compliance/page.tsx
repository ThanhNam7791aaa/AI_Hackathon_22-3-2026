import type { Metadata } from "next";
import Link from "next/link";
import SharedSidebar from "../components/SharedSidebar";

export const metadata: Metadata = {
  title: "Compliance Dashboard | Synthetic Auditor",
  description:
    "Real-time mapping of your codebase against global security frameworks.",
};



/* ─────────────────────── */
/* Top Header              */
/* ─────────────────────── */
function TopHeader() {
  return (
    <header className="bg-[#0b1326] sticky top-0 z-50 w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-[#4f46e5] tracking-tighter font-headline">
            Synthetic Auditor
          </span>
          <div className="hidden lg:flex items-center bg-[#131b2e] px-4 py-2 rounded-full border border-[#464555]/10 focus-within:border-[#4f46e5]/40 transition-colors w-72">
            <span className="material-symbols-outlined text-slate-400 mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none text-sm text-[#dae2fd] focus:outline-none focus:ring-0 w-full placeholder:text-slate-500"
              placeholder="Search compliance controls..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-indigo-300 transition-colors active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-slate-400 hover:text-indigo-300 transition-colors active:scale-95">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-8 w-px bg-[#464555]/20 mx-2" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center text-xs font-bold text-white border-2 border-[#c3c0ff]/20">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── */
/* Framework Cards             */
/* ─────────────────────────── */
const frameworks = [
  {
    tag: "Framework",
    tagColor: "text-[#4edea3]",
    badgeBg: "bg-[#4edea3]/10",
    badgeColor: "text-[#4edea3]",
    badgeDot: "bg-[#4edea3]",
    badgeLabel: "Passing",
    title: "SOC2 Type II",
    desc: "Trust Services Criteria for Security, Availability, and Confidentiality.",
    percent: 98,
    controls: "42/43 Controls",
    barColor: "bg-[#4edea3]",
    glow: true,
  },
  {
    tag: "Framework",
    tagColor: "text-[#c3c0ff]",
    badgeBg: "bg-[#c3c0ff]/10",
    badgeColor: "text-[#c3c0ff]",
    badgeDot: "bg-[#c3c0ff]",
    badgeLabel: "Pending Review",
    title: "ISO 27001",
    desc: "International standard for Information Security Management Systems (ISMS).",
    percent: 82,
    controls: "94/114 Controls",
    barColor: "bg-[#c3c0ff]",
    glow: false,
  },
  {
    tag: "Framework",
    tagColor: "text-[#ffb4ab]",
    badgeBg: "bg-[#ffb4ab]/10",
    badgeColor: "text-[#ffb4ab]",
    badgeDot: "bg-[#ffb4ab] animate-pulse",
    badgeLabel: "Critical Gaps",
    title: "PCI-DSS v4.0",
    desc: "Payment Card Industry Data Security Standard compliance for codebases.",
    percent: 64,
    controls: "28/44 Controls",
    barColor: "bg-[#ffb4ab]",
    glow: false,
  },
];

function FrameworkCards() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {frameworks.map((fw) => (
        <div
          key={fw.title}
          className="p-8 rounded-[2rem] bg-[#131b2e] shadow-xl border border-white/[0.02] flex flex-col justify-between relative overflow-hidden group"
        >
          {fw.glow && (
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#c3c0ff]/5 rounded-full blur-3xl group-hover:bg-[#c3c0ff]/10 transition-colors pointer-events-none" />
          )}
          <div>
            {/* Header row */}
            <div className="flex justify-between items-start mb-6">
              <span
                className={`text-xs font-bold tracking-[0.2em] ${fw.tagColor} uppercase`}
              >
                {fw.tag}
              </span>
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${fw.badgeBg} ${fw.badgeColor}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${fw.badgeDot}`} />
                <span className="text-[10px] font-bold uppercase">
                  {fw.badgeLabel}
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-headline font-bold text-white mb-2">
              {fw.title}
            </h3>
            <p className="text-sm text-[#c7c4d8] leading-relaxed mb-8">
              {fw.desc}
            </p>
          </div>
          {/* Score */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-4xl font-headline font-black text-white">
                {fw.percent}%
              </span>
              <span className="text-sm text-slate-500 font-mono">
                {fw.controls}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#2d3449] rounded-full overflow-hidden">
              <div
                className={`h-full ${fw.barColor} rounded-full transition-all`}
                style={{ width: `${fw.percent}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─────────────────────────────── */
/* Compliance Controls Table       */
/* ─────────────────────────────── */
interface ControlRow {
  icon: string;
  iconColor: string;
  title: string;
  desc: string;
  standard: string;
  finding: string;
  findingColor: string;
  findingIsCode?: boolean;
  findingCodeWord?: string;
  statusLabel: string;
  statusBg: string;
  statusText: string;
}

const controlRows: ControlRow[] = [
  {
    icon: "encrypted",
    iconColor: "text-[#c3c0ff]",
    title: "CC7.1: Encryption at Rest",
    desc: "Verify AES-256 for all RDS instances",
    standard: "SOC2-004",
    finding: "Active in all production DBs",
    findingColor: "text-[#4edea3]",
    statusLabel: "Compliant",
    statusBg: "bg-[#4edea3]/10",
    statusText: "text-[#4edea3]",
  },
  {
    icon: "key",
    iconColor: "text-[#ffb4ab]",
    title: "Requirement 3.5: Key Mgmt",
    desc: "Protect stored cardholder data",
    standard: "PCI-DSS-4.0",
    finding: "Hardcoded secret detected in ",
    findingColor: "text-[#ffb4ab]/80",
    findingIsCode: true,
    findingCodeWord: "auth_v2.ts",
    statusLabel: "Non-Compliant",
    statusBg: "bg-[#ffb4ab]/10",
    statusText: "text-[#ffb4ab]",
  },
  {
    icon: "group",
    iconColor: "text-[#c3c0ff]",
    title: "A.9.2.1: Access Control",
    desc: "User registration & de-registration",
    standard: "ISO-27001",
    finding: "MFA enforced for all IAM roles",
    findingColor: "text-[#c7c4d8]",
    statusLabel: "Compliant",
    statusBg: "bg-[#4edea3]/10",
    statusText: "text-[#4edea3]",
  },
  {
    icon: "history",
    iconColor: "text-[#e2dfff]",
    title: "CC6.1: Audit Logging",
    desc: "System usage and error tracking",
    standard: "SOC2-CC6",
    finding: "CloudWatch logs missing retention policy",
    findingColor: "text-[#c3c0ff]",
    statusLabel: "Warning",
    statusBg: "bg-[#c3c0ff]/10",
    statusText: "text-[#c3c0ff]",
  },
];

function ControlsTable() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-headline font-bold text-white">
          Critical Compliance Controls
        </h3>
        <div className="flex gap-2">
          <button className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2d3449] text-[#c3c0ff]">
            All Controls
          </button>
          <button className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
            Failing Only
          </button>
        </div>
      </div>

      <div className="bg-[#131b2e] rounded-[1.5rem] overflow-hidden border border-white/[0.03]">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-white/5">
          <div className="col-span-5">Control Description</div>
          <div className="col-span-2">Standard</div>
          <div className="col-span-3">AI Finding</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {/* Rows */}
        {controlRows.map((row) => (
          <div
            key={row.title}
            className="grid grid-cols-12 px-8 py-6 items-center hover:bg-[#222a3d] transition-colors border-t border-white/5"
          >
            {/* Control Description */}
            <div className="col-span-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#2d3449] flex items-center justify-center shrink-0">
                <span
                  className={`material-symbols-outlined text-xl ${row.iconColor}`}
                >
                  {row.icon}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {row.title}
                </h4>
                <p className="text-xs text-[#c7c4d8]">{row.desc}</p>
              </div>
            </div>

            {/* Standard */}
            <div className="col-span-2">
              <span className="text-xs font-mono py-1 px-2 rounded bg-[#2d3449] text-[#adb4ce]">
                {row.standard}
              </span>
            </div>

            {/* AI Finding */}
            <div className={`col-span-3 text-sm ${row.findingColor} leading-snug`}>
              {row.findingIsCode ? (
                <>
                  {row.finding}
                  <code className="bg-[#93000a]/20 px-1 rounded font-mono text-xs">
                    {row.findingCodeWord}
                  </code>
                </>
              ) : (
                row.finding
              )}
            </div>

            {/* Status */}
            <div className="col-span-2 text-right">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${row.statusBg} ${row.statusText}`}
              >
                {row.statusLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── */
/* AI Insight + Remediation    */
/* ─────────────────────────── */
function AIInsightSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Code Sanctum — AI Analysis */}
      <div className="bg-[#060e20] rounded-[2rem] p-10 flex flex-col justify-between border border-[#c3c0ff]/5">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#4f46e5]/20 text-[#c3c0ff]">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <span className="text-sm font-bold tracking-widest text-[#c3c0ff] uppercase">
              Auditor AI Analysis
            </span>
          </div>
          <h4 className="text-2xl font-headline font-bold text-white mb-4">
            Detected Vulnerability Pattern
          </h4>
          <p className="text-[#c7c4d8] text-sm mb-8 leading-relaxed">
            The auditor identified a recurring pattern of{" "}
            <span className="text-[#ffb4ab]">unvalidated input</span> in your
            payment processing service that violates{" "}
            <span className="font-mono text-xs">PCI-DSS Requirement 6.5.1</span>
            .
          </p>
        </div>

        {/* Code Snippet */}
        <div className="bg-[#060e20] border border-[#464555]/20 p-6 rounded-xl font-mono text-[13px] leading-loose text-slate-300 relative overflow-hidden group">
          <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-100 transition-opacity cursor-pointer">
            <span className="material-symbols-outlined text-[#c3c0ff]">
              content_copy
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-5">12</span>
            <span>const processPayment = (payload) =&gt; {"{"}</span>
          </div>
          <div className="flex gap-4 bg-[#93000a]/10 border-l-2 border-[#ffb4ab]">
            <span className="text-slate-600 select-none w-5 pl-0">13</span>
            <span className="text-[#ffb4ab]/80 text-xs">
              {"  "}db.query(`SELECT * FROM tx WHERE id = ${"{payload.id}"}`);
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-5">14</span>
            <span className="text-[#464555]">
              {"  "}// Potential SQL Injection Detected
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none w-5">15</span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>

      {/* Remediation Plan */}
      <div
        className="rounded-[2rem] p-10 border border-white/5 flex flex-col"
        style={{
          background: "rgba(34,42,61,0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#4edea3] uppercase">
            Auto-Remediation
          </span>
          <h4 className="text-2xl font-headline font-bold text-white mt-4">
            Security Hardening Plan
          </h4>
          <p className="text-[#c7c4d8] text-sm mt-2">
            Recommended actions to reach 100% compliance.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 flex-grow">
          {[
            {
              done: true,
              title: "Enable KMS Key Rotation",
              desc: "Resolves 3 ISO-27001 warnings in prod.",
            },
            {
              done: false,
              title: "Implement Prepared Statements",
              desc: "Fixes PCI-DSS critical SQLi finding.",
            },
            {
              done: false,
              title: "Update Dependabot Policy",
              desc: "Ensures SOC2 lifecycle management compliance.",
            },
          ].map((step) => (
            <div key={step.title} className="flex items-start gap-4">
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center mt-1 shrink-0 ${
                  step.done
                    ? "border-[#4edea3]/40"
                    : "border-white/10"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    step.done ? "bg-[#4edea3]" : "bg-white/10"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-xs text-[#c7c4d8]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-10 py-4 bg-[#4edea3] text-[#003824] font-bold rounded-xl active:scale-95 transition-all hover:brightness-110">
          Apply Security Patches
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────── */
/* Mobile Bottom Nav       */
/* ─────────────────────── */
function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#171f33] border-t border-white/5 px-6 py-3 flex justify-around items-center z-50">
      <Link href="/dashboard" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">dashboard</span>
        <span className="text-[10px] font-bold uppercase">Home</span>
      </Link>
      <Link href="/security-scan" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">security</span>
        <span className="text-[10px] font-bold uppercase">Scan</span>
      </Link>
      <Link href="/compliance" className="flex flex-col items-center gap-1 text-[#c3c0ff]">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
        <span className="text-[10px] font-bold uppercase">Compliance</span>
      </Link>
      <Link href="/reports" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">analytics</span>
        <span className="text-[10px] font-bold uppercase">Reports</span>
      </Link>
    </nav>
  );
}

/* ──────────── */
/* Main Page    */
/* ──────────── */
export default function CompliancePage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen selection:bg-[#4f46e5] selection:text-[#dad7ff]">
      {/* Sidebar */}
      <SharedSidebar activeLabel="Compliance" />

      {/* Main */}
      <main className="md:ml-64 min-h-screen">
        {/* Header */}
        <TopHeader />

        {/* Content */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 pb-24 md:pb-10">
          {/* ── Page Title ── */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-[#dae2fd] tracking-tight mb-2">
                Compliance Dashboard
              </h2>
              <p className="text-[#c7c4d8] max-w-2xl">
                Real-time mapping of your codebase against global security
                frameworks. Auditor AI detected{" "}
                <span className="text-[#c3c0ff] font-semibold">
                  12 minor non-conformities
                </span>{" "}
                across 3 active standards.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="px-5 py-2.5 rounded-xl bg-[#2d3449] border border-[#464555]/20 text-[#dae2fd] font-medium hover:bg-[#31394d] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Export Report
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-[#4f46e5] text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-[#4f46e5]/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  autorenew
                </span>
                Refresh Audit
              </button>
            </div>
          </section>

          {/* ── Framework Cards ── */}
          <FrameworkCards />

          {/* ── Controls Table ── */}
          <ControlsTable />

          {/* ── AI Insight + Remediation ── */}
          <AIInsightSection />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />
    </div>
  );
}
