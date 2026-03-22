import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import CodeEditor from "./components/CodeEditor";
import AuditFindings from "./components/AuditFindings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SDLC Auditor Dashboard | Synthetic Auditor",
  description:
    "Monitor your codebase security, quality, and compliance in real-time.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] selection:bg-[#4f46e5] selection:text-white">
      {/* Top Nav */}
      <DashboardHeader />

      <div className="flex">
        {/* Left Sidebar */}
        <DashboardSidebar />

        {/* Main Content — offset by sidebar width */}
        <main className="flex-1 lg:ml-64 p-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1600px] mx-auto">
            {/* Code Editor */}
            <CodeEditor />

            {/* Audit Findings */}
            <AuditFindings />
          </div>
        </main>
      </div>
    </div>
  );
}
