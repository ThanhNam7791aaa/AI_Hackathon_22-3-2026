const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security Audit", href: "#" },
  { label: "Changelog", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/20 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="text-lg font-black text-slate-200 font-headline uppercase">
            Synthetic Auditor AI
          </div>
          <p className="text-sm text-slate-500">
            © 2024 Synthetic Auditor AI. Precision Minimalism for Modern SDLC.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 flex-wrap justify-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-500 hover:text-indigo-400 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
