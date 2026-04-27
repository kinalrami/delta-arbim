"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { SectionHeading } from "@/components/shared/SectionHeading";

type IfcSchema = "" | "IFC2x3" | "IFC4" | "IFC4.1" | "IFC4.3" | "unknown";
type IfcTool =
  | ""
  | "Revit"
  | "ArchiCAD"
  | "Tekla"
  | "Vectorworks"
  | "Allplan"
  | "other";
type IfcDisciplines =
  | ""
  | "arch-only"
  | "struct-only"
  | "mep-only"
  | "all"
  | "infra";

type CheckStatus = "idle" | "loading" | "result";
type Verdict = "compatible" | "needs-optimization" | "not-sure";

type CheckResult = {
  verdict: Verdict;
  title: string;
  bullets: string[];
};

export type IfcCheckerCopy = {
  sectionId: string;
  sectionAriaId: string;
  sectionClassName?: string;
  eyebrow: string;
  titleBefore: string;
  titleEmphasis: string;
  desc: string;
  leftChecklist: readonly string[];
  privacyNote: string;
  leftCtas?: readonly {
    href: string;
    label: string;
    variant: "orange" | "outline";
  }[];
  rightTitle: string;
  rightSubtitle: string;
  dropTitle: string;
  dropSubtitle: string;
  orLabel: string;
  placeholders: {
    fullName: string;
    email: string;
    contactNumber: string;
    companyName: string;
    schema: string;
    tool: string;
    disciplines: string;
    elements: string;
    notes: string;
  };
  schemaOptions: readonly { value: IfcSchema; label: string }[];
  toolOptions: readonly { value: IfcTool; label: string }[];
  disciplineOptions: readonly { value: IfcDisciplines; label: string }[];
  primaryButton: string;
  footerNote: string;
  loadingLabel: string;
  resultCta: { href: string; label: string };
  rerunLabel: string;
};

function badgeForVerdict(v: Verdict) {
  if (v === "compatible")
    return {
      text: "COMPATIBLE",
      cls: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30",
    };
  if (v === "needs-optimization")
    return {
      text: "CHECK",
      cls: "bg-orange-400/15 text-orange-200 border-orange-400/30",
    };
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

  if (!input.schema)
    bullets.push("Select your IFC schema for the most accurate check.");
  else
    bullets.push(
      `IFC schema: ${input.schema === "unknown" ? "Not sure" : input.schema}.`,
    );

  if (input.tool)
    bullets.push(
      `Authoring tool: ${input.tool === "other" ? "Other" : input.tool}.`,
    );
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
    bullets.push(
      "Disciplines not specified — include Structural/MEP for the best clash checks.",
    );
  }

  if (input.file) {
    const mb = Math.max(0.1, input.file.sizeBytes / (1024 * 1024));
    bullets.push(`Local metadata: ${input.file.name} (~${mb.toFixed(1)} MB).`);
  } else {
    bullets.push(
      "No file uploaded — we only use your description (no data leaves your device).",
    );
  }

  let verdict: Verdict = "compatible";
  if (input.schema === "unknown" || !input.schema) verdict = "not-sure";

  if (typeof input.elements === "number") {
    if (input.elements >= 60000) verdict = "needs-optimization";
    else if (input.elements >= 25000 && verdict !== "not-sure")
      verdict = "needs-optimization";
    bullets.push(`Estimated element count: ${input.elements.toLocaleString()}.`);
  } else {
    bullets.push(
      "Element count missing — add an estimate for AR performance guidance.",
    );
    verdict = "not-sure";
  }

  if (input.notes.trim().length > 0) {
    bullets.push(
      "Notes included — we’ll tailor optimization suggestions around your concerns.",
    );
  }

  if (verdict === "compatible") {
    return {
      verdict,
      title: "AR-Ready",
      bullets: [
        "Your inputs look compatible with Delta ARBIM’s AR pipeline.",
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

export function IfcCheckerSectionShared({ copy }: { copy: IfcCheckerCopy }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [schema, setSchema] = useState<IfcSchema>("");
  const [tool, setTool] = useState<IfcTool>("");
  const [disciplines, setDisciplines] = useState<IfcDisciplines>("");
  const [elements, setElements] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [fileMeta, setFileMeta] = useState<{
    name: string;
    sizeBytes: number;
  } | null>(null);

  const [status, setStatus] = useState<CheckStatus>("idle");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [attempted, setAttempted] = useState(false);

  const safeElements = useMemo(() => {
    const n = Number(elements);
    if (!Number.isFinite(n) || n < 1) return null;
    return Math.floor(n);
  }, [elements]);

  const safeContactDigitsCount = useMemo(() => {
    const digits = contactNumber.replaceAll(/\D/g, "");
    return digits.length;
  }, [contactNumber]);

  const errors = useMemo(() => {
    const e: Partial<
      Record<
        | "fullName"
        | "email"
        | "contactNumber"
        | "companyName"
        | "schema"
        | "tool"
        | "disciplines"
        | "elements",
        string
      >
    > = {};
    if (fullName.trim().length < 2) e.fullName = "Enter your full name.";
    const emailTrimmed = email.trim();
    if (!emailTrimmed) e.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed))
      e.email = "Enter a valid email address.";

    if (!contactNumber.trim()) e.contactNumber = "Enter your contact number.";
    else if (safeContactDigitsCount < 7 || safeContactDigitsCount > 15)
      e.contactNumber = "Enter a valid contact number.";

    if (!companyName.trim()) e.companyName = "Enter your company name.";
    if (!schema) e.schema = "Select your IFC schema.";
    if (!tool) e.tool = "Select your authoring tool.";
    if (!disciplines) e.disciplines = "Select the disciplines included.";
    if (safeElements === null) e.elements = "Enter a valid element count (>= 1).";
    return e;
  }, [
    fullName,
    email,
    contactNumber,
    safeContactDigitsCount,
    companyName,
    schema,
    tool,
    disciplines,
    safeElements,
  ]);

  const canRun =
    status !== "loading" && Object.keys(errors).length === 0;

  const onPickFile = (f: File | null) => {
    if (!f) return;
    setFileMeta({ name: f.name, sizeBytes: f.size });
  };

  const runCheck = async () => {
    setAttempted(true);
    if (!canRun) return;
    setStatus("loading");
    setResult(null);
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
    <section
      id={copy.sectionId}
      aria-labelledby={copy.sectionAriaId}
      className={copy.sectionClassName ?? "w-full bg-[#1A1A1A]"}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              id={copy.sectionAriaId}
              eyebrow={copy.eyebrow}
              eyebrowClassName="inline-flex uppercase font-mono text-xs font-semibold tracking-widest text-orange-400"
              title={
                <>
                  {copy.titleBefore}{" "}
                  <em className="not-italic text-orange-400">
                    {copy.titleEmphasis}
                  </em>
                </>
              }
              titleClassName="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              desc={<>{copy.desc}</>}
              descWrapClassName="mt-4 max-w-prose text-base leading-relaxed text-white/60"
            />

            <div className="mt-6 overflow-hidden border border-white/10">
              <div className="divide-y divide-white/10">
                {copy.leftChecklist.map((t) => (
                  <div
                    key={t}
                    className="flex gap-3 bg-black/10 px-5 py-4 text-sm text-white/70"
                  >
                    <span className="text-orange-300" aria-hidden>
                      ◈
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/45">
              {copy.privacyNote}
            </p>

            {copy.leftCtas?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {copy.leftCtas.map((cta) => (
                  <Link
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "orange"
                        ? "inline-flex items-center uppercase bg-orange-400 px-4 py-2 font-mono text-xs font-bold text-black transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                        : "inline-flex uppercase items-center border border-white/15 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                    }
                  >
                    → {cta.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="font-serif text-xl font-bold text-white">
              {copy.rightTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {copy.rightSubtitle}
            </p>

            {status !== "result" ? (
              <div className="mt-6">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => inputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      inputRef.current?.click();
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
                    dragOver
                      ? "border-orange-400/60 bg-orange-400/10"
                      : "border-orange-400/40 bg-black/20 hover:border-orange-400/60",
                  ].join(" ")}
                >
                  <div className="text-2xl" aria-hidden>
                    📂
                  </div>
                  <div className="mt-2 font-mono text-xs tracking-widest text-white/70">
                    {copy.dropTitle}
                  </div>
                  <div className="mt-2 text-sm text-white/45">
                    {copy.dropSubtitle}
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
                    onChange={(e) =>
                      onPickFile(e.target.files?.[0] ?? null)
                    }
                  />
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-xs tracking-widest text-white/45">
                    {copy.orLabel}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder={copy.placeholders.fullName}
                    autoComplete="name"
                    aria-invalid={attempted && Boolean(errors.fullName)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40",
                      attempted && errors.fullName
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  />
                  {attempted && errors.fullName ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.fullName}
                    </div>
                  ) : null}

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder={copy.placeholders.email}
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={attempted && Boolean(errors.email)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40",
                      attempted && errors.email
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  />
                  {attempted && errors.email ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.email}
                    </div>
                  ) : null}

                  <input
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    type="tel"
                    placeholder={copy.placeholders.contactNumber}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={attempted && Boolean(errors.contactNumber)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40",
                      attempted && errors.contactNumber
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  />
                  {attempted && errors.contactNumber ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.contactNumber}
                    </div>
                  ) : null}

                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    placeholder={copy.placeholders.companyName}
                    autoComplete="organization"
                    aria-invalid={attempted && Boolean(errors.companyName)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40",
                      attempted && errors.companyName
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  />
                  {attempted && errors.companyName ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.companyName}
                    </div>
                  ) : null}

                  <select
                    value={schema}
                    onChange={(e) => setSchema(e.target.value as IfcSchema)}
                    aria-invalid={attempted && Boolean(errors.schema)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40",
                      attempted && errors.schema
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  >
                    <option value="">{copy.placeholders.schema}</option>
                    {copy.schemaOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {attempted && errors.schema ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.schema}
                    </div>
                  ) : null}

                  <select
                    value={tool}
                    onChange={(e) => setTool(e.target.value as IfcTool)}
                    aria-invalid={attempted && Boolean(errors.tool)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40",
                      attempted && errors.tool ? "border-orange-400/60" : "border-white/10",
                    ].join(" ")}
                  >
                    <option value="">{copy.placeholders.tool}</option>
                    {copy.toolOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {attempted && errors.tool ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.tool}
                    </div>
                  ) : null}

                  <select
                    value={disciplines}
                    onChange={(e) =>
                      setDisciplines(e.target.value as IfcDisciplines)
                    }
                    aria-invalid={attempted && Boolean(errors.disciplines)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40",
                      attempted && errors.disciplines
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  >
                    <option value="">{copy.placeholders.disciplines}</option>
                    {copy.disciplineOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {attempted && errors.disciplines ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.disciplines}
                    </div>
                  ) : null}

                  <input
                    value={elements}
                    onChange={(e) => setElements(e.target.value)}
                    type="number"
                    min={1}
                    placeholder={copy.placeholders.elements}
                    aria-invalid={attempted && Boolean(errors.elements)}
                    className={[
                      "w-full border bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40",
                      attempted && errors.elements
                        ? "border-orange-400/60"
                        : "border-white/10",
                    ].join(" ")}
                  />
                  {attempted && errors.elements ? (
                    <div className="-mt-1 text-xs text-orange-200">
                      {errors.elements}
                    </div>
                  ) : null}

                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder={copy.placeholders.notes}
                    className="w-full resize-none border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-orange-400/40"
                  />
                </div>

                <button
                  type="button"
                  onClick={runCheck}
                  disabled={!canRun}
                  className="mt-5 w-full border border-orange-400/40 bg-orange-400 px-4 py-3 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {copy.primaryButton} →
                </button>

                <p className="mt-3 text-center font-mono text-xs tracking-widest text-white/45">
                  {copy.footerNote}
                </p>

                {status === "loading" ? (
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5 text-center">
                    <div className="mx-auto flex w-fit items-center gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 opacity-70" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 opacity-50" />
                    </div>
                    <p className="mt-4 font-mono text-xs tracking-widest text-white/60">
                      {copy.loadingLabel}
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}

            {status === "result" && result ? (
              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  {(() => {
                    const b = badgeForVerdict(result.verdict);
                    return (
                      <span
                        className={[
                          "rounded border px-2.5 py-1 font-mono text-xs tracking-widest",
                          b.cls,
                        ].join(" ")}
                      >
                        {b.text}
                      </span>
                    );
                  })()}
                  <div className="font-serif text-lg font-extrabold text-white">
                    {result.title}
                  </div>
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
                    href={copy.resultCta.href}
                    className="inline-flex items-center rounded border border-orange-400/30 bg-orange-400/10 px-4 py-2 font-mono text-xs tracking-widest text-orange-200 transition-colors hover:border-orange-400/50 hover:bg-orange-400/15"
                  >
                    {copy.resultCta.label} →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center rounded border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs tracking-widest text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                  >
                    {copy.rerunLabel}
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

