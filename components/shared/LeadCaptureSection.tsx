"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CtaPill } from "@/components/shared/CtaPill";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/components/views/home/content";

export type LeadCaptureBullet = {
  title: string;
  desc?: string;
};

export type LeadCaptureField =
  | {
      key: string;
      kind: "text" | "email" | "tel";
      label: string;
      placeholder?: string;
      required?: boolean;
      autoComplete?: string;
      colSpan?: 1 | 2;
    }
  | {
      key: string;
      kind: "select";
      label: string;
      placeholder: string;
      required?: boolean;
      options: readonly string[];
      colSpan?: 1 | 2;
    }
  | {
      key: string;
      kind: "textarea";
      label: string;
      placeholder?: string;
      required?: boolean;
      rows?: number;
      colSpan?: 1 | 2;
    };

export type LeadCaptureCopy = {
  eyebrow: string;
  titlePrefix: string;
  titleEmphasis: string;
  body: string;
  bullets: readonly LeadCaptureBullet[];
  quickLinks: readonly { href: string; label: string }[];
  footNote?: string;
  form: {
    title: string;
    subtitle: string;
    submit: string;
    notePrefix: string;
    privacy: string;
    fields: readonly LeadCaptureField[];
    successTitle: string;
    successBody: string;
    waPrefix: string;
    waCta: string;
    emailSubject: string;
    mailHeader: string;
    waText: string;
  };
};

function canSubmitFor(copy: LeadCaptureCopy, values: Record<string, string>) {
  for (const f of copy.form.fields) {
    if (f.required && !values[f.key]?.trim()) return false;
  }
  return true;
}

function buildMailBody(copy: LeadCaptureCopy, values: Record<string, string>) {
  const lines: string[] = [copy.form.mailHeader];
  for (const f of copy.form.fields) {
    const label = f.label;
    const v = values[f.key];
    lines.push(`${label}: ${v?.trim() ? v.trim() : "-"}`);
  }
  return lines.join("\n");
}

export function LeadCaptureSection({
  copy,
  ariaId = "lead-capture-h2",
}: {
  copy: LeadCaptureCopy;
  ariaId?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const f of copy.form.fields) init[f.key] = "";
    return init;
  });

  const update = (k: string) => (v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  const canSubmit = canSubmitFor(copy, values);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(copy.form.emailSubject);
    const body = encodeURIComponent(buildMailBody(copy, values));
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [copy, values]);

  const waHref = useMemo(() => {
    const tel = site.phoneTel.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(copy.form.waText);
    return `https://wa.me/${tel}?text=${text}`;
  }, [copy.form.waText]);

  return (
    <section aria-labelledby={ariaId} className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden border border-white/10 bg-black/10 bg-white/10 lg:grid-cols-[1fr_1fr]">
          {/* LEFT */}
          <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
            <SectionHeading
              id={ariaId}
              eyebrow={copy.eyebrow}
              title={
                <>
                  {copy.titlePrefix}{" "}
                  <span className="text-orange-400">{copy.titleEmphasis}</span>
                </>
              }
              desc={<p className="text-white/55">{copy.body}</p>}
              eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
              titleClassName="max-w-xl font-serif text-4xl font-extrabold text-white"
              descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
            />

            <div className="mt-6 overflow-hidden border border-white/10">
              <div className="divide-y divide-white/10">
                {copy.bullets.map((b) => (
                  <div
                    key={b.title}
                    className="flex gap-3 bg-black/10 px-5 py-4 text-sm text-white/70"
                  >
                    <span className="text-orange-400" aria-hidden>
                      ✓
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-white/80">
                        {b.title}
                      </div>
                      {b.desc ? (
                        <div className="text-white/55">{b.desc}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {copy.quickLinks.length ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {copy.quickLinks.map((l) => (
                  <CtaPill
                    key={l.href}
                    href={l.href}
                    variant="gray"
                    className="text-[10px] font-bold tracking-[0.12em] text-white/55 hover:text-orange-200"
                  >
                    {l.label}
                  </CtaPill>
                ))}
              </div>
            ) : null}

            {copy.footNote ? (
              <div className="mt-8 border border-orange-400/25 bg-orange-400/10 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-orange-200/90">
                {copy.footNote}
              </div>
            ) : null}
          </div>

          {/* RIGHT */}
          <div className="p-10">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSubmit) return;
                  setSubmitted(true);
                  window.location.href = mailtoHref;
                }}
              >
                <div className="font-serif text-2xl font-extrabold text-white">
                  {copy.form.title}
                </div>
                <p className="mt-2 text-sm text-white/55">
                  {copy.form.subtitle}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {copy.form.fields.map((f) => {
                    const span = f.colSpan === 2 ? "sm:col-span-2" : "";
                    if (f.kind === "select") {
                      return (
                        <div
                          key={f.key}
                          className={`flex flex-col gap-2 ${span}`}
                        >
                          <label className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                            {f.label}{" "}
                            {f.required ? (
                              <span className="text-orange-400">*</span>
                            ) : null}
                          </label>
                          <select
                            value={values[f.key] ?? ""}
                            onChange={(e) => update(f.key)(e.target.value)}
                            required={f.required}
                            className="w-full appearance-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/50"
                          >
                            <option value="">{f.placeholder}</option>
                            {f.options.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }
                    if (f.kind === "textarea") {
                      return (
                        <div
                          key={f.key}
                          className={`flex flex-col gap-2 ${span}`}
                        >
                          <label className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                            {f.label}{" "}
                            {f.required ? (
                              <span className="text-orange-400">*</span>
                            ) : null}
                          </label>
                          <textarea
                            value={values[f.key] ?? ""}
                            onChange={(e) => update(f.key)(e.target.value)}
                            placeholder={f.placeholder}
                            required={f.required}
                            rows={f.rows ?? 4}
                            className="w-full resize-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-orange-400/50"
                          />
                        </div>
                      );
                    }
                    return (
                      <div
                        key={f.key}
                        className={`flex flex-col gap-2 ${span}`}
                      >
                        <label className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                          {f.label}{" "}
                          {f.required ? (
                            <span className="text-orange-400">*</span>
                          ) : null}
                        </label>
                        <input
                          type={f.kind}
                          value={values[f.key] ?? ""}
                          onChange={(e) => update(f.key)(e.target.value)}
                          placeholder={f.placeholder}
                          autoComplete={f.autoComplete}
                          required={f.required}
                          className="w-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-orange-400/50"
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className={[
                    "mt-6 inline-flex w-full items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90",
                    canSubmit ? "" : "pointer-events-none opacity-40",
                  ].join(" ")}
                  aria-disabled={!canSubmit}
                >
                  {copy.form.submit} →
                </button>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/45">
                  <span>{copy.form.notePrefix}</span>
                  <span aria-hidden>·</span>
                  <Link
                    href="/privacy"
                    className="text-white/55 underline-offset-4 hover:text-orange-200 hover:underline"
                  >
                    {copy.form.privacy}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-5">
                  <p className="text-xs text-white/45">{copy.form.waPrefix}</p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-500 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-90"
                  >
                    {copy.form.waCta}
                  </a>
                </div>
              </form>
            ) : (
              <div
                className="flex min-h-[320px] flex-col items-center justify-center border border-white/10 bg-black/20 p-10 text-center"
                role="alert"
              >
                <div className="text-3xl text-orange-400" aria-hidden>
                  ✓
                </div>
                <div className="mt-4 font-serif text-2xl font-extrabold text-white">
                  {copy.form.successTitle}
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                  {copy.form.successBody}
                </p>
                <div className="mt-6">
                  <CtaPill
                    href="/contact"
                    variant="outlineOrange"
                    className="text-[10px] font-bold tracking-[0.12em]"
                  >
                    Continue to Contact →
                  </CtaPill>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

