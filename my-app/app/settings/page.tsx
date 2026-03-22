import type { Metadata } from "next";
import DashboardHeader from "../dashboard/components/DashboardHeader";

export const metadata: Metadata = {
  title: "Settings | AI SDLC Auditor",
  description:
    "Manage AI auditor configurations, provider credentials, and security parameters.",
};

/* ─────────────────────── */
/* Sidebar                 */
/* ─────────────────────── */
const sideNavItems = [
  { icon: "dashboard", label: "Overview" },
  { icon: "security", label: "Security Scan" },
  { icon: "gavel", label: "Compliance" },
  { icon: "terminal", label: "Code Quality" },
  { icon: "description", label: "Reports" },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 left-0 top-0 fixed bg-[#131b2e] border-r border-[#464555]/20 pt-24 font-headline font-medium shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-40">
      {/* System Status */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="material-symbols-outlined text-[#4f46e5]">
            robot_2
          </span>
          <span className="text-[#4f46e5] text-lg font-black">
            System Status
          </span>
        </div>
        <p className="text-[0.7rem] uppercase tracking-widest text-[#4edea3] opacity-80 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
          LLM Connected
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-2">
        {sideNavItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 text-slate-400 hover:text-slate-200 px-4 py-3 transition-all duration-300 hover:bg-[#222a3d] rounded-lg"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom links */}
      <div className="p-6 border-t border-[#464555]/20 space-y-4">
        {[
          { icon: "help", label: "Docs" },
          { icon: "contact_support", label: "Support" },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ──────────────────────────── */
/* Toggle Switch component      */
/* ──────────────────────────── */
function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
        on ? "bg-[#4f46e5]" : "bg-[#2d3449]"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
          on ? "right-1 bg-white" : "left-1 bg-[#918fa1]"
        }`}
      />
    </div>
  );
}

/* ─────────────────────────────── */
/* API Keys & LLM Providers Card   */
/* ─────────────────────────────── */
function APIKeysCard() {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8 transition-all hover:bg-[#171f33]">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-[#4f46e5]">key</span>
        <h2 className="font-headline text-xl font-bold">
          API Keys &amp; LLM Providers
        </h2>
      </div>

      <form className="space-y-6">
        {/* Provider Select */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#c7c4d8] font-bold mb-2">
            Primary AI Provider
          </label>
          <select className="w-full bg-[#2d3449] border-none rounded-lg text-[#dae2fd] p-4 focus:ring-2 focus:ring-[#4f46e5] transition-all outline-none cursor-pointer">
            <option>OpenAI GPT-4o (Default)</option>
            <option>Anthropic Claude 3.5 Sonnet</option>
            <option>Google Gemini 1.5 Pro</option>
            <option>Local Llama 3 (Ollama)</option>
          </select>
        </div>

        {/* API Secret Key */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#c7c4d8] font-bold mb-2">
            API Secret Key
          </label>
          <div className="flex gap-3">
            <input
              className="flex-1 bg-[#2d3449] border-none rounded-lg text-[#dae2fd] p-4 font-mono focus:ring-2 focus:ring-[#4f46e5] outline-none"
              type="password"
              defaultValue="sk-proj-••••••••••••••••••••••••"
            />
            <button
              className="bg-[#31394d] px-4 rounded-lg hover:bg-[#2d3449] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[#c7c4d8]">
                visibility
              </span>
            </button>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
          <p className="text-sm text-[#c7c4d8] italic">
            Keys are encrypted at rest using AES-256.
          </p>
          <button
            className="bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
            type="submit"
          >
            Update Credentials
          </button>
        </div>
      </form>
    </div>
  );
}

/* ────────────────────────── */
/* Preferences Card (toggles) */
/* ────────────────────────── */
const preferences = [
  {
    label: "Critical Vuln Alerts",
    desc: "Instant push notifications",
    on: true,
  },
  {
    label: "Weekly Audit Report",
    desc: "Email summary every Monday",
    on: false,
  },
  {
    label: "Webhooks",
    desc: "Trigger external CI/CD flows",
    on: true,
  },
];

function PreferencesCard() {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-[#4edea3]">
          notifications_active
        </span>
        <h2 className="font-headline text-xl font-bold">Preferences</h2>
      </div>
      <div className="space-y-6">
        {preferences.map((pref) => (
          <div key={pref.label} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#dae2fd]">{pref.label}</p>
              <p className="text-xs text-[#c7c4d8]">{pref.desc}</p>
            </div>
            <Toggle on={pref.on} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────── */
/* Security Card          */
/* ───────────────────── */
function SecurityCard() {
  return (
    <div className="bg-[#131b2e] rounded-xl p-8 border-l-4 border-[#93000a]">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-[#ffb4ab]">
          shield
        </span>
        <h2 className="font-headline text-xl font-bold">Security</h2>
      </div>
      <div className="space-y-6">
        {/* 2FA */}
        <div>
          <p className="font-medium mb-1 text-[#dae2fd]">
            Two-Factor Authentication
          </p>
          <p className="text-sm text-[#c7c4d8] mb-4">
            Protect your account with an extra layer of security via TOTP.
          </p>
          <button className="w-full border border-[#464555]/20 hover:bg-[#31394d] py-2 rounded-lg text-sm font-bold transition-colors text-[#dae2fd]">
            Enable 2FA
          </button>
        </div>
        {/* Sessions */}
        <div>
          <p className="font-medium mb-1 text-[#dae2fd]">Session Management</p>
          <p className="text-sm text-[#c7c4d8] mb-4">
            You have 2 active sessions from San Francisco, CA.
          </p>
          <button className="text-[#ffb4ab] text-xs font-bold uppercase tracking-wider hover:underline">
            Revoke all sessions
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────────── */
/* Profile Card     */
/* ──────────────── */
function ProfileCard() {
  return (
    <div className="bg-[#222a3d] rounded-xl overflow-hidden shadow-2xl">
      {/* Header gradient */}
      <div className="h-24 bg-gradient-to-br from-[#4f46e5]/40 to-[#0b1326]" />

      <div className="px-8 pb-8 -mt-12 text-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full mx-auto border-4 border-[#0b1326] shadow-xl mb-4 bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center">
          <span className="text-3xl font-black text-white font-headline">
            AC
          </span>
        </div>

        <h3 className="font-headline text-2xl font-bold text-white">
          Alex Chen
        </h3>
        <p className="text-[#4f46e5] font-mono text-sm mb-6">
          Principal Security Architect
        </p>

        {/* Details */}
        <div className="space-y-4 text-left border-t border-[#464555]/20 pt-6">
          {[
            { icon: "mail", text: "alex.chen@auditor.ai" },
            { icon: "corporate_fare", text: "Global Defense Systems" },
            { icon: "schedule", text: "UTC-08:00 (Pacific Time)" },
          ].map((info) => (
            <div key={info.text} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#c7c4d8] text-lg">
                {info.icon}
              </span>
              <span className="text-sm text-[#dae2fd]">{info.text}</span>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 bg-[#31394d] hover:bg-[#2d3449] py-3 rounded-lg font-bold transition-all text-sm text-[#dae2fd]">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────── */
/* Account Usage Card       */
/* ─────────────────────── */
function AccountUsageCard() {
  return (
    <div
      className="p-8 rounded-xl"
      style={{
        background: "rgba(45,52,73,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(70,69,85,0.2)",
      }}
    >
      <h4 className="font-headline text-sm font-black uppercase tracking-widest text-[#4f46e5] mb-4">
        Account Usage
      </h4>
      <div className="space-y-4">
        {/* LLM Tokens */}
        <div>
          <div className="flex justify-between text-xs mb-2 text-[#c7c4d8]">
            <span>LLM Tokens used</span>
            <span className="font-mono">82%</span>
          </div>
          <div className="h-1.5 w-full bg-[#0b1326] rounded-full overflow-hidden">
            <div className="h-full bg-[#4f46e5] w-[82%] rounded-full" />
          </div>
        </div>
        {/* Audit Records */}
        <div>
          <div className="flex justify-between text-xs mb-2 text-[#c7c4d8]">
            <span>Audit Records</span>
            <span className="font-mono">1,240 / 5,000</span>
          </div>
          <div className="h-1.5 w-full bg-[#0b1326] rounded-full overflow-hidden">
            <div className="h-full bg-[#4edea3] w-[24%] rounded-full" />
          </div>
        </div>
      </div>
      <button className="w-full mt-6 text-[#c3c0ff] hover:text-white text-xs font-bold transition-colors text-left">
        View Detailed Billing →
      </button>
    </div>
  );
}

/* ─────────────────────── */
/* Mobile Footer Nav       */
/* ─────────────────────── */
function MobileFooterNav() {
  const tabs = [
    { icon: "dashboard", label: "Overview", active: false },
    { icon: "security", label: "Scans", active: false },
    { icon: "settings", label: "Settings", active: true, fill: true },
    { icon: "account_circle", label: "Account", active: false },
  ];
  return (
    <footer className="md:hidden fixed bottom-0 left-0 w-full bg-[#131b2e] flex justify-around items-center py-4 border-t border-[#464555]/20 z-50">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className={`flex flex-col items-center ${
            tab.active ? "text-[#4f46e5]" : "text-slate-400"
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
          <span className="text-[10px]">{tab.label}</span>
        </div>
      ))}
    </footer>
  );
}

/* ──────────── */
/* Main Page    */
/* ──────────── */
export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-white">
      {/* Top nav — Settings active */}
      <DashboardHeader activeNav="Settings" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="md:ml-64 pt-6 px-8 pb-12 min-h-screen">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="font-headline text-4xl font-extrabold text-[#dae2fd] tracking-tight mb-2">
            Settings
          </h1>
          <p className="text-[#c7c4d8] max-w-2xl">
            Manage your AI auditor configurations, provider credentials, and
            security parameters from a centralized control center.
          </p>
        </header>

        {/* 12-col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ── Left 8-col ── */}
          <section className="lg:col-span-8 space-y-8">
            {/* API Keys Card */}
            <APIKeysCard />

            {/* Preferences + Security row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PreferencesCard />
              <SecurityCard />
            </div>
          </section>

          {/* ── Right 4-col ── */}
          <aside className="lg:col-span-4 space-y-8">
            <ProfileCard />
            <AccountUsageCard />
          </aside>
        </div>
      </main>

      {/* Mobile footer */}
      <MobileFooterNav />
    </div>
  );
}
