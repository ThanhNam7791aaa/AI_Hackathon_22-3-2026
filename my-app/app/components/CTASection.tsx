export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <div className="bg-[#060e20] p-16 rounded-3xl border border-[#464555]/10 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4f46e5]/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl font-headline font-extrabold mb-8">
            Ready to secure your codebase?
          </h2>

          <button className="group relative px-12 py-6 bg-transparent border border-[#c3c0ff]/20 rounded-full font-bold text-xl backdrop-blur-md overflow-hidden hover:bg-[#4f46e5] transition-all duration-300">
            <span className="relative z-10">Initialize Signature Scan</span>
            <div className="absolute inset-0 bg-[#c3c0ff]/10 group-hover:bg-transparent transition-all duration-300" />
          </button>

          <p className="mt-6 text-[#c7c4d8] font-mono text-xs uppercase tracking-widest">
            Connect with GitHub, GitLab, or Bitbucket
          </p>
        </div>
      </div>
    </section>
  );
}
