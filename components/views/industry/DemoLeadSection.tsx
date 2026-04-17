"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CtaPill } from "@/components/shared/CtaPill";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/components/views/home/content";
import { industryLeadCopy } from "@/components/views/industry/content";

export function DemoLeadSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    phone: "",
  });

  const update = (k: keyof typeof form) => (v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.industry.trim();

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("DeltaARBIM — Industry Demo Request");
    const body = encodeURIComponent(
      [
        "Industry demo request",
        `First name: ${form.firstName || "-"}`,
        `Last name: ${form.lastName || "-"}`,
        `Work email: ${form.email || "-"}`,
        `Company: ${form.company || "-"}`,
        `Industry: ${form.industry || "-"}`,
        `Phone / WhatsApp: ${form.phone || "-"}`,
      ].join("\n"),
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const waHref = useMemo(() => {
    const tel = site.phoneTel.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      "Hi DeltaARBIM, I'd like a demo for my industry.",
    );
    return `https://wa.me/${tel}?text=${text}`;
  }, []);

  return (
    <section aria-labelledby="industry-lead-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden border border-white/10 bg-black/10 bg-white/10 lg:grid-cols-[1fr_1fr]">
          {/* LEFT */}
          <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
            <SectionHeading
              id="industry-lead-h2"
              eyebrow={industryLeadCopy.eyebrow}
              title={
                <>
                  {industryLeadCopy.titlePrefix}{" "}
                  <span className="text-orange-400">
                    {industryLeadCopy.titleEmphasis}
                  </span>
                </>
              }
              desc={
                <p className="text-white/55">{industryLeadCopy.body}</p>
              }
              eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
              titleClassName="max-w-xl font-serif text-4xl font-extrabold text-white"
              descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
            />

            <div className="mt-6 overflow-hidden border border-white/10">
              <div className="divide-y divide-white/10">
                {industryLeadCopy.checklist.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 bg-black/10 px-5 py-4 text-sm text-white/70"
                  >
                    <span className="text-orange-400" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {industryLeadCopy.quickLinks.map((l) => (
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
                  {industryLeadCopy.form.title}
                </div>
                <p className="mt-2 text-sm text-white/55">
                  {industryLeadCopy.form.subtitle}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label={industryLeadCopy.form.fields.firstName.label}
                    required={industryLeadCopy.form.fields.firstName.required}
                    value={form.firstName}
                    onChange={update("firstName")}
                    placeholder={industryLeadCopy.form.fields.firstName.placeholder}
                    autoComplete={industryLeadCopy.form.fields.firstName.autoComplete}
                  />
                  <Field
                    label={industryLeadCopy.form.fields.lastName.label}
                    required={industryLeadCopy.form.fields.lastName.required}
                    value={form.lastName}
                    onChange={update("lastName")}
                    placeholder={industryLeadCopy.form.fields.lastName.placeholder}
                    autoComplete={industryLeadCopy.form.fields.lastName.autoComplete}
                  />
                  <Field
                    label={industryLeadCopy.form.fields.email.label}
                    required={industryLeadCopy.form.fields.email.required}
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder={industryLeadCopy.form.fields.email.placeholder}
                    autoComplete={industryLeadCopy.form.fields.email.autoComplete}
                  />
                  <Field
                    label={industryLeadCopy.form.fields.company.label}
                    required={industryLeadCopy.form.fields.company.required}
                    value={form.company}
                    onChange={update("company")}
                    placeholder={industryLeadCopy.form.fields.company.placeholder}
                    autoComplete={industryLeadCopy.form.fields.company.autoComplete}
                  />
                  <SelectField
                    label={industryLeadCopy.form.fields.industry.label}
                    required={industryLeadCopy.form.fields.industry.required}
                    value={form.industry}
                    onChange={update("industry")}
                    placeholder="Select industry"
                    options={industryLeadCopy.form.industryOptions}
                  />
                  <Field
                    label={industryLeadCopy.form.fields.phone.label}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder={industryLeadCopy.form.fields.phone.placeholder}
                    autoComplete={industryLeadCopy.form.fields.phone.autoComplete}
                  />
                </div>

                <button
                  type="submit"
                  className={[
                    "mt-6 inline-flex w-full items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90",
                    canSubmit ? "" : "pointer-events-none opacity-40",
                  ].join(" ")}
                  aria-disabled={!canSubmit}
                >
                  {industryLeadCopy.form.submit} →
                </button>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/45">
                  <span>{industryLeadCopy.form.notePrefix}</span>
                  <span aria-hidden>·</span>
                  <Link
                    href="/privacy"
                    className="text-white/55 underline-offset-4 hover:text-orange-200 hover:underline"
                  >
                    {industryLeadCopy.form.privacy}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-5">
                  <p className="text-xs text-white/45">
                    {industryLeadCopy.form.waPrefix}
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-500 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-90"
                  >
                    {industryLeadCopy.form.waCta}
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
                  {industryLeadCopy.form.successTitle}
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                  {industryLeadCopy.form.successBody}
                </p>
                <div className="mt-6">
                  <CtaPill href="/contact" variant="outlineOrange" className="text-[10px] font-bold tracking-[0.12em]">
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

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
        {label} {required ? <span className="text-orange-400">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-orange-400/50"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  options: readonly string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
        {label} {required ? <span className="text-orange-400">*</span> : null}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full appearance-none border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/50"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

