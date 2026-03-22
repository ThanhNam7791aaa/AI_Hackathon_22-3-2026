"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-[#dad7ff] relative">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 text-[#c7c4d8] hover:text-[#dae2fd] transition-colors group bg-[#131b2e]/50 backdrop-blur-md py-2 px-4 rounded-full border border-white/5 shadow-lg shadow-black/20"
      >
        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span className="text-sm font-semibold tracking-wide">Home</span>
      </Link>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Asymmetric Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4f46e5]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#006e4b]/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        <div className="w-full max-w-[480px] z-10">
          {/* Brand Anchor */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#4d44e3] flex items-center justify-center shadow-lg shadow-[#4f46e5]/20">
                <span
                  className="material-symbols-outlined text-[#1d00a5] text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
              </div>
              <span className="font-headline font-bold text-2xl tracking-tighter text-[#dae2fd]">
                Synthetic Auditor
              </span>
            </div>
            <h1 className="font-headline text-3xl font-extrabold text-[#dae2fd] tracking-tight">
              Welcome Back
            </h1>
            <p className="text-[#c7c4d8] mt-2 text-sm">
              Precision analysis for your modern SDLC
            </p>
          </div>

          {/* Login Card — Glassmorphism */}
          <div className="bg-[#131b2e]/60 backdrop-blur-xl rounded-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#464555]/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#c7c4d8]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="dev@audit.ai"
                  className="w-full bg-[#060e20] border-none rounded-lg py-3 px-4 text-[#dae2fd] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all placeholder:text-[#464555] font-mono text-sm"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#c7c4d8]">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[11px] text-[#c3c0ff] hover:text-[#c3c0ff]/70 transition-colors font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-[#060e20] border-none rounded-lg py-3 px-4 pr-12 text-[#dae2fd] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all placeholder:text-[#464555] font-mono text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#464555] hover:text-[#c7c4d8] transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] text-[#dad7ff] font-headline font-bold rounded-lg shadow-lg shadow-[#4f46e5]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Authorize Access
                <span className="material-symbols-outlined text-lg">login</span>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#464555]/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-[#131b2e] text-[#c7c4d8] uppercase tracking-widest">
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons — Bento Style */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#2d3449] hover:bg-[#31394d] rounded-lg border border-[#464555]/10 transition-all group">
                <span className="material-symbols-outlined text-[#dae2fd] group-hover:text-[#c3c0ff] transition-colors">
                  terminal
                </span>
                <span className="text-sm font-semibold text-[#dae2fd]">
                  GitHub
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#2d3449] hover:bg-[#31394d] rounded-lg border border-[#464555]/10 transition-all group">
                <span className="material-symbols-outlined text-[#dae2fd] group-hover:text-[#4edea3] transition-colors">
                  code_blocks
                </span>
                <span className="text-sm font-semibold text-[#dae2fd]">
                  GitLab
                </span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center mt-8 text-sm text-[#c7c4d8]">
            New to the platform?{" "}
            <Link
              href="/signup"
              className="text-[#c3c0ff] font-bold hover:underline ml-1"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </main>

      {/* Audit Pulse — Decorative Bottom Left */}
      <div className="fixed bottom-12 left-12 flex flex-col gap-4 opacity-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c7c4d8]">
            System Latency: 12ms
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c7c4d8]">
            Model Version: v4.2.1-stable
          </span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
