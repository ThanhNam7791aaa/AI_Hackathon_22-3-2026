export default function FeaturesSection() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

        {/* Security Scanning — Large Card (7 cols) */}
        <div className="md:col-span-7 bg-[#131b2e] rounded-xl p-10 flex flex-col justify-between overflow-hidden relative group border border-[#464555]/5 hover:border-[#464555]/20 transition-all">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-[#c3c0ff] text-4xl mb-6 block">
              shield_with_heart
            </span>
            <h3 className="text-3xl font-headline font-bold mb-4">
              Autonomous Security Scanning
            </h3>
            <p className="text-[#c7c4d8] max-w-md leading-relaxed">
              Continuous vulnerability detection that adapts to your unique logic
              flows. No false positives, just hardened code.
            </p>
          </div>

          {/* Code Terminal Card */}
          <div className="mt-8 bg-[#060e20] p-6 rounded-lg font-mono text-sm border border-[#464555]/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb4ab]" />
              <span className="text-[#93000a] text-[10px] uppercase font-bold">
                CRITICAL
              </span>
            </div>
            <code className="text-[#c7c4d8]">
              Detecting SQL Injection risk in{" "}
              <span className="text-[#c3c0ff]">user_auth.py:42</span>
            </code>
          </div>

          {/* Decorative glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#c3c0ff]/5 rounded-full blur-3xl group-hover:bg-[#c3c0ff]/10 transition-all" />
        </div>

        {/* Code Quality — Tall Card (5 cols) */}
        <div className="md:col-span-5 bg-[#222a3d] rounded-xl p-10 flex flex-col items-start justify-center text-left border border-[#464555]/5 hover:border-[#464555]/20 transition-all">
          <span className="material-symbols-outlined text-[#4edea3] text-4xl mb-6 block">
            analytics
          </span>
          <h3 className="text-3xl font-headline font-bold mb-4">
            Quality Assurance
          </h3>
          <p className="text-[#c7c4d8] mb-8 leading-relaxed">
            Predictive maintenance for technical debt. We identify bottlenecks
            before they impact your performance.
          </p>

          {/* Bar Chart Visual */}
          <div className="w-full flex items-end gap-2 h-20">
            <div className="w-full bg-[#4edea3]/20 h-1/2 rounded-sm" />
            <div className="w-full bg-[#4edea3]/40 h-3/4 rounded-sm" />
            <div className="w-full bg-[#4edea3] h-full rounded-sm" />
            <div className="w-full bg-[#4edea3]/60 h-2/3 rounded-sm" />
          </div>
        </div>

        {/* LLM Insights — Full-width Card (12 cols) */}
        <div className="md:col-span-12 bg-gradient-to-br from-[#222a3d] to-[#131b2e] rounded-xl p-10 flex flex-col md:flex-row items-center gap-12 border border-[#464555]/5 hover:border-[#464555]/20 transition-all">
          <div className="flex-1">
            <span className="material-symbols-outlined text-[#c3c0ff] text-4xl mb-6 block">
              psychology
            </span>
            <h3 className="text-3xl font-headline font-bold mb-4">
              LLM-Powered Context Logic
            </h3>
            <p className="text-[#c7c4d8] leading-relaxed">
              Our auditor doesn&apos;t just read code; it understands intent.
              Leveraging high-fidelity LLMs to provide reasoning behind every
              suggestion.
            </p>
          </div>

          {/* AI Chat Card */}
          <div className="flex-1 w-full bg-[#060e20] p-8 rounded-lg border border-[#464555]/10 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-xs text-[#dad7ff] material-symbols-filled"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <span className="text-sm font-bold">Auditor Intelligence</span>
            </div>
            <p className="font-mono text-xs text-[#c7c4d8] leading-loose italic">
              &quot;Refactoring this loop will reduce Big-O complexity from O(n²)
              to O(n log n) by implementing a hash-map strategy...&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
