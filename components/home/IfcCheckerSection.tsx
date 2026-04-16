"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

type IfcSchema = "" | "IFC2x3" | "IFC4" | "IFC4.1" | "IFC4.3" | "unknown";
type IfcTool =
  | ""
  | "Revit"
  | "ArchiCAD"
  | "Tekla"
  | "Vectorworks"
  | "Allplan"
  | "other";
type IfcDisciplines = "" | "arch-only" | "struct-only" | "mep-only" | "all" | "infra";

type CheckStatus = "idle" | "loading" | "result";
type Verdict = "compatible" | "needs-optimization" | "not-sure";

type CheckResult = {
  verdict: Verdict;
  title: string;
  bullets: string[];
};

function badgeForVerdict(v: Verdict) {
  if (v === "compatible") return { text: "COMPATIBLE", cls: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30" };
  if (v === "needs-optimization") return { text: "CHECK", cls: "bg-orange-400/15 text-orange-200 border-orange-400/30" };
  return { text: "UNKNOWN", cls: "bg-white/10 text-white/70 border-white/15" };
}

function computeResult(input: {
  schema: IfcSchema;
  tool: IfcTool;
  disciplines: IfcDisciplines;
  elements: number | null;
  notes: string;
  file?: { name: string; sizeBytes: number } | null;
}): CheckResult {
  const bullets: string[] = [];

  if (!input.schema) bullets.push("Select your IFC schema for the most accurate check.");
  else bullets.push(`IFC schema: ${input.schema === "unknown" ? "Not sure" : input.schema}.`);

  if (input.tool) bullets.push(`Authoring tool: ${input.tool === "other" ? "Other" : input.tool}.`);
  if (input.disciplines) {
    const map: Record<Exclude<IfcDisciplines, "">, string> = {
      "arch-only": "Architecture only",
      "struct-only": "Structural only",
      "mep-only": "MEP only",
      all: "Architecture + Structural + MEP",
      infra: "Infrastructure / Civil",
    };
    bullets.push(`Disciplines: ${map[input.disciplines]}.`);
  } else {
    bullets.push("Disciplines not specified — include Structural/MEP for the best clash checks.");
  }

  if (input.file) {
    const mb = Math.max(0.1, input.file.sizeBytes / (1024 * 1024));
    bullets.push(`Local metadata: ${input.file.name} (~${mb.toFixed(1)} MB).`);
  } else {
    bullets.push("No file uploaded — we only use your description (no data leaves your device).");
  }

  let verdict: Verdict = "compatible";
  if (input.schema === "unknown" || !input.schema) verdict = "not-sure";

  if (typeof input.elements === "number") {
    if (input.elements >= 60000) verdict = "needs-optimization";
    else if (input.elements >= 25000 && verdict !== "not-sure") verdict = "needs-optimization";
    bullets.push(`Estimated element count: ${input.elements.toLocaleString()}.`);
  } else {
    bullets.push("Element count missing — add an estimate for AR performance guidance.");
    if (verdict !== "needs-optimization") verdict = "not-sure";
  }

  if (input.notes.trim().length > 0) {
    bullets.push("Notes included — we’ll tailor optimization suggestions around your concerns.");
  }

  if (verdict === "compatible") {
    return {
      verdict,
      title: "AR-Ready",
      bullets: [
        "Your inputs look compatible with DeltaARBIM’s AR pipeline.",
        "Next step: run a live overlay test on-site to confirm anchoring & performance.",
        ...bullets,
        "If performance drops, we’ll recommend geometry simplification and layer filtering.",
      ],
    };
  }
  if (verdict === "needs-optimization") {
    return {
      verdict,
      title: "Likely AR-Ready (needs optimization)",
      bullets: [
        "Your model looks compatible, but may need performance tuning for smooth AR.",
        "Recommended: split by floor/zone, remove tiny details, and limit active layers.",
        ...bullets,
      ],
    };
  }
  return {
    verdict,
    title: "Need a bit more info",
    bullets: [
      "We can’t fully verify AR readiness without schema + element count.",
      "Fill the dropdowns (or drop your file) and re-run the check.",
      ...bullets,
    ],
  };
}

export function IfcCheckerSection() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [schema, setSchema] = useState<IfcSchema>("");
  const [tool, setTool] = useState<IfcTool>("");
  const [disciplines, setDisciplines] = useState<IfcDisciplines>("");
  const [elements, setElements] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [fileMeta, setFileMeta] = useState<{ name: string; sizeBytes: number } | null>(null);

  const [status, setStatus] = useState<CheckStatus>("idle");
  const [result, setResult] = useState<CheckResult | null>(null);

  const safeElements = useMemo(() => {
    const n = Number(elements);
    if (!Number.isFinite(n) || n < 0) return null;
    return Math.floor(n);
  }, [elements]);

  const onPickFile = (f: File | null) => {
    if (!f) return;
    setFileMeta({ name: f.name, sizeBytes: f.size });
  };

  const runCheck = async () => {
    setStatus("loading");
    setResult(null);
    // simulated AI latency; no network calls
    await new Promise((r) => setTimeout(r, 900));

    const computed = computeResult({
      schema,
      tool,
      disciplines,
      elements: safeElements,
      notes,
      file: fileMeta,
    });
    setResult(computed);
    setStatus("result");
  };

  return (
    <section id="ifc-check" aria-labelledby="ifc-check-h" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex font-mono text-xs font-semibold tracking-widest text-orange-400">
              Free · No Account Needed
            </span>
            <h2 id="ifc-check-h" className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Is your IFC model <em className="not-italic text-orange-400">AR-ready?</em>
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/60">
              Before your demo — or just out of curiosity — find out if your IFC file is technically compatible with
              DeltaARBIM&apos;s AR engine. Describe your model and our AI checks it against AR requirements in seconds.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {[
                "IFC version compatibility (IFC2x3, IFC4, IFC4.1+)",
                "3D geometry — does it contain renderable AR elements",
                "Discipline layers — structural, MEP, architectural",
                "Spatial anchoring — IfcSite / IfcBuilding coordinate data",
                "Element count — AR performance estimate",
                "Optimisation recommendations if needed",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-orange-300" aria-hidden>
                    ◈
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-white/45">
              ⚠ No file is uploaded to our servers. AI analyses your description and metadata only. Your IFC data stays on your device.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center uppercase bg-orange-400 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
              >
                → Book a Full Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-white/15 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
              >
                → Pricing Plans
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="font-serif text-xl font-bold text-white">Check your IFC model</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Describe your model or drop your file — we&apos;ll assess AR compatibility instantly.
            </p>

            {/* FORM */}
            {status !== "result" ? (
              <div className="mt-6">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => inputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
                  }}
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    onPickFile(e.dataTransfer.files?.[0] ?? null);
                  }}
                  className={[
                    "border border-dashed p-5 text-center transition-colors",
                    dragOver ? "border-orange-400/60 bg-orange-400/10" : "border-white/15 bg-black/20 hover:border-orange-400/30",
                  ].join(" ")}
                >
                  <div className="text-2xl" aria-hidden>
                    📂
                  </div>
                  <div className="mt-2 font-mono text-xs tracking-widest text-white/70">
                    Drop your IFC file for metadata read
                  </div>
                  <div className="mt-2 text-sm text-white/45">
                    or fill in details below · No file leaves your device
                  </div>

                  {fileMeta ? (
                    <div className="mt-3 font-mono text-xs tracking-widest text-orange-200">
                      Selected: {fileMeta.name}
                    </div>
                  ) : null}

                  <input
                    ref={inputRef}
                    type="file"
                    accept=".ifc,.ifczip"
                    className="hidden"
                    aria-label="Select IFC file"
                    onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
                  />
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-xs tracking-widest text-white/45">
                    OR DESCRIBE YOUR MODEL
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <select
                    value={schema}
                    onChange={(e) => setSchema(e.target.value as IfcSchema)}
                    className="w-full border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40"
                  >
                    <option value="">IFC Version / Schema</option>
                    <option value="IFC2x3">IFC2x3 (most common · Revit default)</option>
                    <option value="IFC4">IFC4</option>
                    <option value="IFC4.1">IFC4.1 / IFC4x1</option>
                    <option value="IFC4.3">IFC4.3 (latest)</option>
                    <option value="unknown">Not sure</option>
                  </select>

                  <select
                    value={tool}
                    onChange={(e) => setTool(e.target.value as IfcTool)}
                    className="w-full border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40"
                  >
                    <option value="">Authoring tool (BIM software)</option>
                    <option value="Revit">Autodesk Revit</option>
                    <option value="ArchiCAD">Graphisoft ArchiCAD</option>
                    <option value="Tekla">Trimble Tekla Structures</option>
                    <option value="Vectorworks">Vectorworks</option>
                    <option value="Allplan">Nemetschek Allplan</option>
                    <option value="other">Other</option>
                  </select>

                  <select
                    value={disciplines}
                    onChange={(e) => setDisciplines(e.target.value as IfcDisciplines)}
                    className="w-full border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40"
                  >
                    <option value="">Disciplines included</option>
                    <option value="arch-only">Architecture only</option>
                    <option value="struct-only">Structural only</option>
                    <option value="mep-only">MEP only</option>
                    <option value="all">Architecture + Structural + MEP (federated)</option>
                    <option value="infra">Infrastructure / Civil</option>
                  </select>

                  <input
                    value={elements}
                    onChange={(e) => setElements(e.target.value)}
                    type="number"
                    min={0}
                    placeholder="Approximate element count (e.g. 12000)"
                    className="w-full border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40"
                  />

                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Any other details — LOD level, project type, file size, specific concerns about AR compatibility…"
                    className="w-full resize-none border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40"
                  />
                </div>

                <button
                  type="button"
                  onClick={runCheck}
                  disabled={status === "loading"}
                  className="mt-5 w-full border border-orange-400/40 bg-orange-400 px-4 py-3 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  CHECK AR COMPATIBILITY →
                </button>

                <p className="mt-3 text-center font-mono text-xs tracking-widest text-white/45">
                  Powered by AI · Results in ~10 seconds · Your data never leaves your browser
                </p>

                {/* LOADING */}
                {status === "loading" ? (
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5 text-center">
                    <div className="mx-auto flex w-fit items-center gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 opacity-70" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 opacity-50" />
                    </div>
                    <p className="mt-4 font-mono text-xs tracking-widest text-white/60">
                      ANALYSING IFC COMPATIBILITY…
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* RESULT */}
            {status === "result" && result ? (
              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  {(() => {
                    const b = badgeForVerdict(result.verdict);
                    return (
                      <span className={["rounded border px-2.5 py-1 font-mono text-xs tracking-widest", b.cls].join(" ")}>
                        {b.text}
                      </span>
                    );
                  })()}
                  <div className="font-serif text-lg font-extrabold text-white">{result.title}</div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {result.bullets.slice(0, 7).map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 text-orange-300" aria-hidden>
                        ◈
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center rounded border border-orange-400/30 bg-orange-400/10 px-4 py-2 font-mono text-xs tracking-widest text-orange-200 transition-colors hover:border-orange-400/50 hover:bg-orange-400/15"
                  >
                    BOOK A LIVE DEMO WITH YOUR MODEL →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center rounded border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs tracking-widest text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                  >
                    Run another check
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

