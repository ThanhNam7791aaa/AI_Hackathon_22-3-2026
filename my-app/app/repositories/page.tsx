import type { Metadata } from "next";
import DashboardHeader from "../dashboard/components/DashboardHeader";
import DashboardSidebar from "../dashboard/components/DashboardSidebar";

export const metadata: Metadata = {
  title: "Repositories | AI SDLC Auditor",
  description: "Monitor and audit all connected source code repositories.",
};

/* ────────────────────────────────────────────────────────── */
/* Repo Card 1 — Large Featured "Secure" card (xl:col-span-2) */
/* ────────────────────────────────────────────────────────── */
function RepoCardFeatured() {
  return (
    <div className="xl:col-span-2 bg-[#131b2e] rounded-xl p-8 transition-transform hover:-translate-y-1 duration-300 relative group">
      {/* Secure Badge */}
      <div className="absolute top-0 right-0 p-8">
        <span className="px-4 py-1.5 rounded-full bg-[#4edea3]/10 text-[#4edea3] text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#4edea3]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
          Secure
        </span>
      </div>

      {/* Repo Info */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-14 h-14 rounded-xl bg-[#2d3449] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-3xl text-[#c3c0ff]">
            hub
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-headline text-white mb-1">
            core-payment-gateway
          </h3>
          <p className="text-slate-400 font-mono text-sm">
            github.com/fintech-org/core-payments
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { label: "Health Score", value: "98.4", valueClass: "text-[#4edea3]" },
          { label: "Last Audit", value: "2 hours ago", valueClass: "text-slate-200" },
          { label: "Dependencies", value: "142 Checked", valueClass: "text-slate-200" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#2d3449]/50 p-4 rounded-xl">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">
              {stat.label}
            </p>
            <p className={`text-3xl font-headline font-bold ${stat.valueClass}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between pt-6 border-t border-[#464555]/10">
        {/* Contributor Avatars */}
        <div className="flex -space-x-3">
          {["bg-indigo-500", "bg-violet-500"].map((c, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full border-2 border-[#171f33] ${c} flex items-center justify-center text-[10px] font-bold text-white`}
            >
              {["JD", "AK"][i]}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-[#171f33] bg-[#2d3449] flex items-center justify-center text-[10px] font-bold text-slate-400">
            +5
          </div>
        </div>
        <button className="bg-[#c3c0ff] text-[#1d00a5] px-8 py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-95 transition-transform">
          Run Audit
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────── */
/* Repo Card 2 — Vulnerable */
/* ──────────────────────── */
function RepoCardVulnerable() {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8 border-l-4 border-[#ffb4ab] overflow-hidden relative group">
      {/* Badge */}
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full bg-[#93000a] text-[#ffdad6] text-[10px] font-black uppercase tracking-widest">
          Vulnerable
        </span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[#2d3449] flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-2xl text-[#ffb4ab]">
          warning
        </span>
      </div>

      <h3 className="text-xl font-bold font-headline text-white mb-1">
        user-auth-service
      </h3>
      <p className="text-slate-500 font-mono text-xs mb-6 truncate">
        gitlab.com/identity/auth-v2
      </p>

      {/* Stats */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-400">Critical Issues</span>
          <span className="text-[#ffb4ab] font-bold">03</span>
        </div>
        <div className="w-full bg-[#2d3449] h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#ffb4ab] h-full w-[45%] rounded-full" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-400">Health Score</span>
          <span className="text-[#ffb4ab] font-bold">42.8</span>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full py-4 rounded-xl border border-[#ffb4ab]/30 text-[#ffb4ab] font-bold hover:bg-[#93000a]/20 transition-all flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">troubleshoot</span>
        Fix Now
      </button>
    </div>
  );
}

/* ─────────────────────── */
/* Repo Card 3 — Scanning  */
/* ─────────────────────── */
function RepoCardScanning() {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#4F46E5_0%,transparent_70%)]" />

      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div className="w-12 h-12 rounded-lg bg-[#2d3449] flex items-center justify-center">
          <span
            className="material-symbols-outlined text-2xl text-[#c3c0ff] animate-spin"
            style={{ animationDuration: "3s" }}
          >
            sync
          </span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c3c0ff]">
          Scanning...
        </span>
      </div>

      <h3 className="text-xl font-bold font-headline text-white mb-1">
        analytics-engine-rust
      </h3>
      <p className="text-slate-500 font-mono text-xs mb-10">
        github.com/data/analytics-engine
      </p>

      {/* Progress */}
      <div>
        <div className="flex mb-2 items-center justify-between">
          <span className="text-xs font-semibold py-1 px-2 uppercase rounded-full text-[#c3c0ff] bg-[#c3c0ff]/10">
            Progress
          </span>
          <span className="text-xs font-semibold text-[#c3c0ff]">67%</span>
        </div>
        <div className="overflow-hidden h-2 mb-4 rounded-full bg-[#2d3449]">
          <div
            className="h-full bg-[#4f46e5] rounded-full transition-all"
            style={{ width: "67%" }}
          />
        </div>
        <p className="text-[10px] text-slate-500 italic">
          Analyzing memory safety patterns in /src/core/...
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────── */
/* Repo Card — small compact card */
/* ────────────────────────────── */
function RepoCardCompact({
  name,
  lastSeen,
  score,
  type,
  icon,
  iconColor,
}: {
  name: string;
  lastSeen: string;
  score: string;
  type: string;
  icon: string;
  iconColor: string;
}) {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8 transition-all hover:bg-[#222a3d] cursor-pointer">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#2d3449] flex items-center justify-center">
            <span className={`material-symbols-outlined text-xl ${iconColor}`}>
              {icon}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-white">{name}</h3>
            <p className="text-xs text-slate-500">{lastSeen}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
            Score
          </p>
          <p className="text-xl font-headline font-bold text-[#dae2fd]">
            {score}
          </p>
        </div>
        <div className="w-px h-8 bg-[#464555]/20" />
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
            Type
          </p>
          <p className="text-xl font-headline font-bold text-[#dae2fd]">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────── */
/* AI Insights  */
/* ──────────── */
function AIInsights() {
  return (
    <section className="mt-12 bg-[#060e20]/50 backdrop-blur-md rounded-2xl p-6 border border-[#4f46e5]/10 flex items-center gap-6">
      <div className="w-12 h-12 shrink-0 rounded-full bg-[#4f46e5]/20 flex items-center justify-center">
        <span className="material-symbols-outlined text-[#c3c0ff]">
          auto_awesome
        </span>
      </div>
      <div>
        <p className="text-[#dae2fd] font-medium">AI Insights Active</p>
        <p className="text-sm text-slate-500">
          I noticed that 3 repositories share the same outdated JWT library. I
          can create a consolidated PR to fix them all at once.{" "}
          <a href="#" className="text-[#c3c0ff] hover:underline ml-2">
            Review batch fix
          </a>
        </p>
      </div>
    </section>
  );
}

/* ────────── */
/* Main Page  */
/* ────────── */
export default function RepositoriesPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-white">
      {/* Top Nav — "Repositories" active */}
      <DashboardHeader activeNav="Repositories" />

      <div className="flex">
        {/* Sidebar — "Code Quality" active (matches HTML) */}
        <DashboardSidebar activeSideNav="Code Quality" />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-8 px-8 pb-12">
          {/* Page Header */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#c3c0ff] font-headline font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                Development Ecosystem
              </span>
              <h1 className="text-5xl font-extrabold font-headline tracking-tight text-[#dae2fd]">
                Repositories
              </h1>
              <p className="text-[#c7c4d8] mt-4 max-w-xl text-lg leading-relaxed">
                Continuously monitoring{" "}
                <span className="text-white font-semibold">12</span> source code
                repositories across GitLab and GitHub deployments.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button className="px-6 py-3 rounded-xl bg-[#222a3d] border border-[#464555]/20 text-[#dae2fd] font-medium hover:bg-[#31394d] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">
                  filter_list
                </span>
                Filter
              </button>
              <button className="px-6 py-3 rounded-xl bg-[#4f46e5] text-white font-bold hover:bg-[#4d44e3] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">link</span>
                Connect Repo
              </button>
            </div>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Card 1: Large featured */}
            <RepoCardFeatured />

            {/* Card 2: Vulnerable */}
            <RepoCardVulnerable />

            {/* Card 3: Scanning */}
            <RepoCardScanning />

            {/* Card 4: web-client-nextjs */}
            <RepoCardCompact
              name="web-client-nextjs"
              lastSeen="Last seen: Today, 10:15 AM"
              score="91.0"
              type="TypeScript"
              icon="check_circle"
              iconColor="text-[#4edea3]"
            />

            {/* Card 5: api-gateway-v1 */}
            <RepoCardCompact
              name="api-gateway-v1"
              lastSeen="Last seen: Yesterday"
              score="88.5"
              type="GoLang"
              icon="cloud_done"
              iconColor="text-[#c3c0ff]"
            />
          </div>

          {/* AI Insights Banner */}
          <AIInsights />
        </main>
      </div>
    </div>
  );
}
