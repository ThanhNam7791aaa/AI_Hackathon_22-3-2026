const checkIcon = (filled = true) => (
  <span
    className={`material-symbols-outlined text-[#4edea3] text-lg`}
    style={filled ? { fontVariationSettings: "'FILL' 0" } : {}}
  >
    check_circle
  </span>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-8 mb-40">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-extrabold mb-4">
          Scale with Confidence
        </h2>
        <p className="text-[#c7c4d8]">
          Transparent plans for teams of any size.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Free Tier */}
        <div className="bg-[#131b2e] p-12 rounded-xl border border-[#464555]/10 hover:border-[#464555]/30 transition-all flex flex-col">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#c7c4d8]">
              Individual
            </span>
            <h3 className="text-3xl font-headline font-bold mt-2">Free</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold font-headline">$0</span>
              <span className="text-[#c7c4d8] text-sm">/ forever</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>3 Monthly Scans</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>Basic Vulnerability Audit</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-[#c7c4d8]">
              <span className="material-symbols-outlined text-lg text-[#c7c4d8]">
                check_circle
              </span>
              <span>Community Support</span>
            </li>
          </ul>

          <button className="w-full py-4 bg-[#2d3449] text-[#dae2fd] rounded-lg font-bold border border-[#464555]/20 hover:bg-[#31394d] transition-all">
            Get Started
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="bg-[#222a3d] p-12 rounded-xl border-2 border-[#4f46e5]/40 relative flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          {/* Recommended Badge */}
          <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#4f46e5] text-[#dad7ff] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Recommended
          </div>

          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#c3c0ff]">
              Enterprise
            </span>
            <h3 className="text-3xl font-headline font-bold mt-2">Custom</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold font-headline">
                Contact Us
              </span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>Unlimited Repository Scanning</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>Custom LLM Model Fine-tuning</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>SOC2 &amp; ISO Compliance Reports</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              {checkIcon()}
              <span>24/7 Dedicated Support</span>
            </li>
          </ul>

          <button className="w-full py-4 bg-[#4f46e5] text-[#dad7ff] rounded-lg font-bold shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)] transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
