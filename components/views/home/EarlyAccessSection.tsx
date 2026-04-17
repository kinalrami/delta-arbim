"use client";

import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

import {
  earlyAccessPerks,
  earlyAccessRoleOptions,
  earlyAccessTrustItems,
  siteWa,
} from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";

type EarlyForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  project: string;
};

const initial: EarlyForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  phone: "",
  project: "",
};

function Field({
  label,
  required,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-xs font-semibold tracking-widest text-white/55"
      >
        {label} {required ? <span className="text-orange-400">*</span> : null}
      </label>
      {children}
    </div>
  );
}

const inputClassName =
  "w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none transition-colors focus:border-orange-400/40";

export function EarlyAccessSection() {
  const [form, setForm] = useState<EarlyForm>(initial);
  const [submitted, setSubmitted] = useState(false);

  const waHref = siteWa.earlyAccess;

  const update = (k: keyof EarlyForm) => (v: string) => setForm((s) => ({ ...s, [k]: v }));

  const canSubmit =
    form.firstName.trim() && form.email.trim() && form.company.trim();

  return (
    <section
      id="early-access"
      aria-labelledby="early-h2"
      className="w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <SectionHeading
              id="early-h2"
              eyebrow="Get Early Access · Limited Spots"
              eyebrowClassName="mb-2 inline-flex font-mono text-xs font-semibold uppercase text-orange-400"
              title={
                <>
                  Start using DeltaARBIM on <em className="italic text-orange-400">your site today.</em>
                </>
              }
              titleClassName="font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
              desc="Early access partners get locked-in pricing, direct roadmap input, and dedicated onboarding. We onboard construction teams personally — not with a help doc."
              descWrapClassName="mt-4 text-sm leading-relaxed text-white/55 sm:text-base"
            />

            <ul className="mt-6 divide-y divide-white/10 border border-white/10 bg-black/10">
              {earlyAccessPerks.map((line) => (
                <li key={line} className="flex gap-3 px-5 py-4 text-sm leading-relaxed text-white/60">
                  <span className="shrink-0 text-orange-400" aria-hidden="true">
                    →
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3 border border-white/10 bg-black/10 p-5">
              {earlyAccessTrustItems.map((line) => (
                <div key={line} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-0.5 shrink-0 text-orange-400" aria-hidden="true">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {!submitted ? (
              <div className="border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-white">Request Early Access</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  We&apos;ll reach out within 24 hours — personally, not a bot.
                </p>

                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!canSubmit) return;
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="First Name" required htmlFor="ea-fname">
                      <input
                        id="ea-fname"
                        value={form.firstName}
                        onChange={(e) => update("firstName")(e.target.value)}
                        placeholder="Rahul"
                        autoComplete="given-name"
                        className={inputClassName}
                        required
                      />
                    </Field>
                    <Field label="Last Name" htmlFor="ea-lname">
                      <input
                        id="ea-lname"
                        value={form.lastName}
                        onChange={(e) => update("lastName")(e.target.value)}
                        placeholder="Sharma"
                        autoComplete="family-name"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Work Email" required htmlFor="ea-email">
                      <input
                        id="ea-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email")(e.target.value)}
                        placeholder="rahul@company.com"
                        autoComplete="email"
                        className={inputClassName}
                        required
                      />
                    </Field>
                    <Field label="Company" required htmlFor="ea-company">
                      <input
                        id="ea-company"
                        value={form.company}
                        onChange={(e) => update("company")(e.target.value)}
                        placeholder="ABC Constructions"
                        autoComplete="organization"
                        className={inputClassName}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Your Role" htmlFor="ea-role">
                      <select
                        id="ea-role"
                        value={form.role}
                        onChange={(e) => update("role")(e.target.value)}
                        className={`${inputClassName} appearance-none bg-black/30`}
                      >
                        <option value="">Select role</option>
                        {earlyAccessRoleOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Phone / WhatsApp" htmlFor="ea-phone">
                      <input
                        id="ea-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone")(e.target.value)}
                        placeholder="+91 84604 73271"
                        autoComplete="tel"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <Field label="Tell us about your project" htmlFor="ea-project">
                    <textarea
                      id="ea-project"
                      value={form.project}
                      onChange={(e) => update("project")(e.target.value)}
                      placeholder="Project type, team size, current pain points with BIM coordination…"
                      rows={3}
                      className={`${inputClassName} min-h-20 resize-y leading-relaxed`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    Get Early Access →
                  </button>

                  <p className="text-center font-mono text-xs text-white/40">
                    No commitments. No spam. <span className="text-white/25">·</span>{" "}
                    <Link
                      href="/privacy"
                      className="text-white/55 underline-offset-4 transition-colors hover:text-orange-200 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>

                  <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-white/55">Prefer WhatsApp?</p>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold uppercase text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle className="size-4" aria-hidden />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div
                role="alert"
                className="border border-white/10 bg-zinc-900/40 p-8 text-center sm:p-10"
              >
                <div className="mb-4 text-4xl text-orange-400" aria-hidden="true">
                  ✓
                </div>
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">You&apos;re in.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  We&apos;ll reach out within 24 hours to schedule your early access session — using your actual IFC
                  model. Check your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initial);
                  }}
                  className="mt-8 border border-white/15 bg-white/5 px-5 py-3 font-mono text-xs tracking-widest text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
