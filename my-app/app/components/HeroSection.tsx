import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-40 text-center relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4f46e5]/10 blur-[120px] rounded-full -z-10" />

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222a3d] border border-[#464555]/20 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#c7c4d8]">
          System Status: Optimized
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 leading-tight">
        Precision{" "}
        <span className="bg-gradient-to-r from-[#4f46e5] to-[#4edea3] bg-clip-text text-transparent">
          Auditing
        </span>
        <br />
        for Modern SDLC
      </h1>

      {/* Subheadline */}
      <p className="max-w-2xl mx-auto text-lg text-[#c7c4d8] mb-10 leading-relaxed">
        Eliminate technical debt and security vulnerabilities before the first
        commit. Our AI-driven engine curators your entire codebase with surgical
        accuracy.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Link
          href="/signup"
          className="px-8 py-4 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-[#dad7ff] rounded-lg font-bold text-lg shadow-[0_20px_50px_rgba(79,70,229,0.3)] active:scale-95 transition-all hover:shadow-[0_20px_60px_rgba(79,70,229,0.5)]"
        >
          Start Free Audit
        </Link>
        <Link
          href="/dashboard"
          className="px-8 py-4 bg-[#222a3d] text-[#dae2fd] rounded-lg font-bold text-lg border border-[#464555]/20 hover:bg-[#31394d] transition-all"
        >
          View Live Demo
        </Link>
      </div>
    </section>
  );
}
