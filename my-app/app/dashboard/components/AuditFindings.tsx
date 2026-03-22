type Severity = "critical" | "warning" | "info";

interface FindingCard {
  severity: Severity;
  title: string;
  code: string;
  description: string;
  badge: string;
}

const findings: FindingCard[] = [
  {
    severity: "critical",
    title: "Critical Security Flaw",
    code: "CWE-798: Use of Hardcoded Credentials",
    description:
      "A hardcoded secret key was detected in the JWT verification process. This allows attackers to forge tokens and bypass authentication entirely.",
    badge: "HIGH",
  },
  {
    severity: "warning",
    title: "Optimizable Logic",
    code: "PERF-02: Synchronous Fetch Pattern",
    description:
      "The authentication flow blocks while fetching user data. Consider using an asynchronous pattern to prevent thread blocking during high traffic.",
    badge: "MED",
  },
  {
    severity: "info",
    title: "Documentation Suggestion",
    code: "DOCS-01: Missing JSDoc block",
    description:
      "Exported function 'validateUser' lacks JSDoc documentation. Adding parameter types and return values will improve IDE intellisense.",
    badge: "LOW",
  },
];

const severityConfig: Record<
  Severity,
  {
    border: string;
    icon: string;
    iconColor: string;
    iconBg: string;
    titleColor: string;
    codeColor: string;
    badgeBg: string;
    badgeText: string;
    hoverBorder: string;
  }
> = {
  critical: {
    border: "border-[#ffb4ab]",
    icon: "shield",
    iconColor: "text-[#ffb4ab]",
    iconBg: "bg-[#93000a]/20",
    titleColor: "text-[#ffdad6]",
    codeColor: "text-[#ffb4ab]/60",
    badgeBg: "bg-[#93000a]",
    badgeText: "text-[#ffdad6]",
    hoverBorder: "hover:border-[#ffb4ab]/50",
  },
  warning: {
    border: "border-[#ffb74d]",
    icon: "warning",
    iconColor: "text-[#ffb74d]",
    iconBg: "bg-[#ffb74d]/10",
    titleColor: "text-[#ffb74d]",
    codeColor: "text-[#ffb74d]/60",
    badgeBg: "bg-[#ffb74d]/20",
    badgeText: "text-[#ffb74d]",
    hoverBorder: "hover:border-[#ffb74d]/50",
  },
  info: {
    border: "border-[#c3c0ff]",
    icon: "info",
    iconColor: "text-[#c3c0ff]",
    iconBg: "bg-[#c3c0ff]/10",
    titleColor: "text-[#c3c0ff]",
    codeColor: "text-[#c3c0ff]/60",
    badgeBg: "bg-[#c3c0ff]/20",
    badgeText: "text-[#c3c0ff]",
    hoverBorder: "hover:border-[#c3c0ff]/50",
  },
};

function FindingCardComponent({ finding }: { finding: FindingCard }) {
  const cfg = severityConfig[finding.severity];
  return (
    <div
      className={`group relative bg-[#222a3d] rounded-2xl border-l-4 ${cfg.border} overflow-hidden transition-all duration-300 hover:bg-[#31394d] shadow-lg`}
    >
      <div className="p-6">
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${cfg.iconBg}`}>
              <span
                className={`material-symbols-outlined ${cfg.iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {cfg.icon}
              </span>
            </div>
            <div>
              <h3 className={`font-bold ${cfg.titleColor}`}>{finding.title}</h3>
              <p className={`text-[10px] font-mono ${cfg.codeColor}`}>
                {finding.code}
              </p>
            </div>
          </div>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full ${cfg.badgeBg} ${cfg.badgeText} font-bold shrink-0`}
          >
            {finding.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#c7c4d8] leading-relaxed mb-6">
          {finding.description}
        </p>

        {/* Copy Button */}
        <button
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#060e20] border border-[#464555]/20 ${cfg.hoverBorder} text-xs font-bold text-[#dae2fd] transition-all`}
        >
          <span className="material-symbols-outlined text-sm">
            content_copy
          </span>
          Copy Fixed Code
        </button>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-[#131b2e] rounded-2xl p-6 border border-[#464555]/10 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#2d3449]" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/2 bg-[#2d3449] rounded" />
          <div className="h-3 w-1/4 bg-[#2d3449] rounded" />
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-[#2d3449] rounded" />
        <div className="h-3 w-5/6 bg-[#2d3449] rounded" />
      </div>
      <div className="h-10 w-full bg-[#2d3449] rounded-lg" />
    </div>
  );
}

export default function AuditFindings() {
  return (
    <section className="xl:col-span-5 flex flex-col gap-6">
      {/* Panel Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-headline font-extrabold text-white tracking-tight">
          Audit Findings
        </h2>
        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#918fa1]">
          <span className="flex items-center gap-1">
            <b className="text-[#ffb4ab]">1</b> Critical
          </span>
          <span className="flex items-center gap-1">
            <b className="text-[#c3c0ff]">1</b> Warning
          </span>
          <span className="flex items-center gap-1">
            <b className="text-[#4edea3]">1</b> Info
          </span>
        </div>
      </div>

      {/* Scrollable Findings List */}
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[700px] pr-2 scrollbar-thin">
        <FindingCardComponent finding={findings[0]} />
        <FindingCardComponent finding={findings[1]} />
        <LoadingSkeleton />
        <FindingCardComponent finding={findings[2]} />
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-auto pt-6 border-t border-[#464555]/10 flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-3 bg-[#2d3449] hover:bg-[#31394d] text-white py-4 rounded-xl font-bold transition-all border border-[#464555]/20">
          <span className="material-symbols-outlined text-[#918fa1]">
            description
          </span>
          Download Audit Report
        </button>
        <button className="px-5 flex items-center justify-center bg-[#2d3449] hover:bg-[#31394d] text-[#dae2fd] rounded-xl border border-[#464555]/20 transition-all">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </section>
  );
}
