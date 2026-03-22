const codeLines = [
  { type: "comment", content: "// Critical Security Audit Required" },
  {
    type: "mixed",
    content: [
      { type: "keyword", text: "import" },
      { type: "normal", text: " { Request, Response } " },
      { type: "keyword", text: "from" },
      { type: "string", text: " 'express'" },
      { type: "normal", text: ";" },
    ],
  },
  {
    type: "mixed",
    content: [
      { type: "keyword", text: "import" },
      { type: "normal", text: " * " },
      { type: "keyword", text: "as" },
      { type: "normal", text: " jwt " },
      { type: "keyword", text: "from" },
      { type: "string", text: " 'jsonwebtoken'" },
      { type: "normal", text: ";" },
    ],
  },
  { type: "empty" },
  {
    type: "mixed",
    content: [
      { type: "keyword", text: "export const " },
      { type: "function", text: "validateUser" },
      { type: "normal", text: " = (req: Request, res: Response) => {" },
    ],
  },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "keyword", text: "const" },
      { type: "normal", text: " token = req.headers[" },
      { type: "string", text: "'authorization'" },
      { type: "normal", text: "];" },
    ],
  },
  { type: "empty" },
  {
    type: "comment",
    indent: 2,
    content: "// Vulnerability: Weak validation logic",
  },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "keyword", text: "if" },
      { type: "normal", text: " (!token) {" },
    ],
  },
  {
    type: "mixed",
    indent: 4,
    content: [
      { type: "keyword", text: "return" },
      { type: "normal", text: " res.status(" },
      { type: "constant", text: "401" },
      { type: "normal", text: ").json({ error: " },
      { type: "string", text: "'Unauthorized'" },
      { type: "normal", text: " });" },
    ],
  },
  { type: "normal-text", indent: 2, content: "}" },
  { type: "empty" },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "keyword", text: "const" },
      { type: "normal", text: " decoded = jwt.verify(token, " },
      { type: "string", text: "'SECRET_KEY_EXPOSED_HERE'" },
      { type: "normal", text: ");" },
    ],
  },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "keyword", text: "const" },
      { type: "normal", text: " userId = decoded.sub;" },
    ],
  },
  { type: "empty" },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "keyword", text: "if" },
      { type: "normal", text: " (userId === " },
      { type: "string", text: "'admin'" },
      { type: "normal", text: ") {" },
    ],
  },
  {
    type: "mixed",
    indent: 4,
    content: [
      { type: "keyword", text: "return" },
      { type: "normal", text: " res.status(" },
      { type: "constant", text: "200" },
      { type: "normal", text: ").json({ access: " },
      { type: "string", text: "'granted'" },
      { type: "normal", text: " });" },
    ],
  },
  { type: "normal-text", indent: 2, content: "}" },
  { type: "empty" },
  {
    type: "mixed",
    indent: 2,
    content: [
      { type: "function", text: "fetchUserData" },
      { type: "normal", text: "(userId);" },
    ],
  },
  { type: "normal-text", content: "}" },
];

type Token = { type: string; text: string };
type CodeLine =
  | { type: "comment"; content: string; indent?: number }
  | { type: "mixed"; content: Token[]; indent?: number }
  | { type: "normal-text"; content: string; indent?: number }
  | { type: "empty" };

function renderLine(line: CodeLine, idx: number) {
  const indent =
    "indent" in line && line.indent ? " ".repeat(line.indent) : "";

  if (line.type === "empty") {
    return <div key={idx} className="h-5" />;
  }
  if (line.type === "comment") {
    return (
      <div key={idx} className="text-[#464555] italic">
        {indent}
        {line.content}
      </div>
    );
  }
  if (line.type === "normal-text") {
    return (
      <div key={idx} className="text-[#c7c4d8]">
        {indent}
        {line.content}
      </div>
    );
  }
  if (line.type === "mixed") {
    return (
      <div key={idx}>
        <span>{indent}</span>
        {(line.content as Token[]).map((token, ti) => {
          if (token.type === "keyword")
            return (
              <span key={ti} className="text-[#c3c0ff]">
                {token.text}
              </span>
            );
          if (token.type === "string")
            return (
              <span key={ti} className="text-[#4edea3]">
                {token.text}
              </span>
            );
          if (token.type === "function")
            return (
              <span key={ti} className="text-[#4f46e5]">
                {token.text}
              </span>
            );
          if (token.type === "constant")
            return (
              <span key={ti} className="text-[#ffb74d]">
                {token.text}
              </span>
            );
          return (
            <span key={ti} className="text-[#c7c4d8]">
              {token.text}
            </span>
          );
        })}
      </div>
    );
  }
}

export default function CodeEditor() {
  return (
    <section className="xl:col-span-7 flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-headline font-extrabold text-white tracking-tight">
            Source Sanctum
          </h2>
          <p className="text-[#c7c4d8] text-sm mt-1">
            Inspecting{" "}
            <span className="text-[#c3c0ff] font-mono">
              auth-controller.tsx
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 rounded bg-[#222a3d] text-[10px] font-mono text-[#918fa1] uppercase tracking-widest border border-[#464555]/20">
            Typescript
          </span>
          <span className="px-2 py-1 rounded bg-[#222a3d] text-[10px] font-mono text-[#918fa1] uppercase tracking-widest border border-[#464555]/20">
            Read-Only
          </span>
        </div>
      </div>

      {/* Code Window */}
      <div className="flex-1 bg-[#060e20] rounded-2xl overflow-hidden shadow-2xl relative group border border-[#464555]/10">
        {/* Window Chrome */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#0b1326] border-b border-[#464555]/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ffb4ab]/30 hover:bg-[#ffb4ab]/60 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#4edea3]/30 hover:bg-[#4edea3]/60 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#c3c0ff]/30 hover:bg-[#c3c0ff]/60 transition-colors" />
          </div>
          <span className="ml-4 text-xs font-mono text-[#918fa1]">
            src/api/v1/auth/middleware.ts
          </span>
        </div>

        {/* Code Area */}
        <div className="flex h-[600px] overflow-auto bg-[#060e20]">
          {/* Line Numbers */}
          <div className="flex flex-col items-end px-4 pt-8 pb-8 select-none min-w-[3rem] text-[#464555] text-xs font-mono leading-relaxed border-r border-[#464555]/10">
            {codeLines.map((_, i) => (
              <span key={i} className="block leading-relaxed">
                {i + 1}
              </span>
            ))}
          </div>

          {/* Code Content */}
          <pre className="flex-1 p-8 font-mono text-sm leading-relaxed overflow-x-auto">
            <code className="block">
              {codeLines.map((line, i) => renderLine(line as CodeLine, i))}
            </code>
          </pre>
        </div>

        {/* Run Audit Button */}
        <div className="absolute bottom-6 right-6">
          <button className="group flex items-center gap-3 bg-gradient-to-r from-[#4f46e5] to-[#4d44e3] px-8 py-4 rounded-xl font-headline font-bold text-white shadow-2xl shadow-[#4f46e5]/40 hover:scale-105 active:scale-95 transition-all duration-300">
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">
              sync
            </span>
            Run Audit
          </button>
        </div>
      </div>
    </section>
  );
}
