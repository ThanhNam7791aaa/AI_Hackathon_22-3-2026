"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-[#dad7ff]">

      {/* ── Left Column: Branding & Value Prop ── */}
      <section className="hidden md:flex flex-col justify-between w-1/3 p-12 bg-[#060e20] relative overflow-hidden">
        {/* Top: Logo + Copy */}
        <div className="z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-[#4f46e5] rounded-lg flex items-center justify-center shadow-lg shadow-[#4f46e5]/20">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
            </div>
            <span className="font-headline text-2xl font-bold tracking-tighter text-slate-100">
              Synthetic Auditor
            </span>
          </div>

          {/* Hero Text */}
          <div className="space-y-8">
            <h1 className="font-headline text-4xl lg:text-5xl font-extrabold leading-tight text-[#dae2fd]">
              Precision{" "}
              <span className="text-[#c3c0ff]">Minimalism</span>
              <br />
              for your SDLC.
            </h1>
            <p className="text-[#c7c4d8] text-lg leading-relaxed max-w-sm">
              Deploy with confidence. Our AI curator distills complex codebases
              into high-fidelity, actionable security insights.
            </p>
          </div>
        </div>

        {/* Bottom: Testimonial + Social Proof */}
        <div className="z-10 space-y-6">
          {/* Scan Result Card */}
          <div className="p-6 bg-[#222a3d] rounded-xl border-l-4 border-[#4f46e5]">
            <p className="font-mono text-sm text-[#4edea3] mb-2">SCAN_COMPLETE</p>
            <p className="text-sm text-[#dae2fd]">
              &quot;Zero critical vulnerabilities found in last 48 deployments.
              System healthy.&quot;
            </p>
          </div>

          {/* Avatar Stack + Trust Badge */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["bg-indigo-500", "bg-violet-500", "bg-teal-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-[#060e20] ${color} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["JD", "AK", "ML"][i]}
                  </div>
                )
              )}
            </div>
            <span className="text-xs font-mono text-[#918fa1] uppercase tracking-widest">
              Trusted by 2k+ Dev Teams
            </span>
          </div>
        </div>

        {/* Background Texture Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#4f46e5]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-[#006e4b]/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* ── Right Column: Sign Up Form ── */}
      <section className="flex-1 flex flex-col justify-center items-center p-6 md:p-24 bg-[#0b1326]">
        <div className="w-full max-w-md space-y-10">

          {/* Mobile Branding (only visible on small screens) */}
          <div className="md:hidden flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-[#4f46e5] rounded-lg flex items-center justify-center">
              <span
                className="material-symbols-outlined text-sm text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
            </div>
            <span className="font-headline text-xl font-bold tracking-tighter text-slate-100">
              Synthetic Auditor
            </span>
          </div>

          {/* Header */}
          <header>
            <h2 className="font-headline text-3xl font-bold text-[#dae2fd] mb-2">
              Create your account
            </h2>
            <p className="text-[#c7c4d8]">
              Choose your preferred repository provider to start auditing.
            </p>
          </header>

          <div className="space-y-8">
            {/* Provider Selection Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#222a3d] border-2 border-transparent hover:border-[#4f46e5] transition-all group active:scale-95 duration-200">
                <span className="material-symbols-outlined text-4xl mb-3 text-[#c7c4d8] group-hover:text-[#c3c0ff] transition-colors">
                  cloud_sync
                </span>
                <span className="text-sm font-semibold text-[#dae2fd]">GitHub</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#222a3d] border-2 border-transparent hover:border-[#4f46e5] transition-all group active:scale-95 duration-200">
                <span className="material-symbols-outlined text-4xl mb-3 text-[#c7c4d8] group-hover:text-[#c3c0ff] transition-colors">
                  account_tree
                </span>
                <span className="text-sm font-semibold text-[#dae2fd]">GitLab</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-[#464555]/20" />
              <span className="flex-shrink mx-4 text-xs font-mono text-[#918fa1] uppercase tracking-widest">
                Or continue with email
              </span>
              <div className="flex-grow border-t border-[#464555]/20" />
            </div>

            {/* Form Inputs */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-widest text-[#918fa1] ml-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#131b2e] border-0 rounded-xl py-4 px-5 text-[#dae2fd] placeholder:text-[#464555] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all"
                />
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-widest text-[#918fa1] ml-1"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-[#131b2e] border-0 rounded-xl py-4 px-5 text-[#dae2fd] placeholder:text-[#464555] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-widest text-[#918fa1] ml-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-[#131b2e] border-0 rounded-xl py-4 px-5 pr-14 text-[#dae2fd] placeholder:text-[#464555] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#464555] hover:text-[#c7c4d8] transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-white font-headline font-bold rounded-xl shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:shadow-[0_25px_60px_rgba(79,70,229,0.4)] active:scale-[0.98] transition-all"
                >
                  Create Auditor Account
                </button>
              </div>
            </form>
          </div>

          {/* Already have an account */}
          <footer className="pt-8 text-center">
            <p className="text-[#c7c4d8]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#c3c0ff] font-semibold hover:text-[#e2dfff] transition-colors ml-1"
              >
                Login
              </Link>
            </p>
          </footer>

          {/* Minimal Footer Links */}
          <div className="mt-24 flex gap-8 text-xs font-mono text-[#918fa1] uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-[#c3c0ff] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c3c0ff] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#c3c0ff] transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* ── Success Toast ── */}
      <div
        className={`fixed bottom-8 right-8 transition-all duration-500 ${
          showToast
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#2d3449] backdrop-blur-xl p-4 rounded-xl border-l-4 border-[#4edea3] flex items-center gap-4 shadow-2xl">
          <span
            className="material-symbols-outlined text-[#4edea3]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <div>
            <p className="text-sm font-bold text-[#dae2fd]">
              Verification email sent.
            </p>
            <p className="text-xs text-[#c7c4d8]">
              Please check your inbox to proceed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
