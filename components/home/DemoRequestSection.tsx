"use client";

import Link from "next/link";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { demoChecklist, siteWa } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  phone: string;
};

const initial: DemoForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  phone: "",
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
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] font-semibold tracking-widest text-white/55"
      >
        {label} {required ? <span className="text-orange-300">*</span> : null}
      </label>
      {children}
    </div>
  );
}

export function DemoRequestSection() {
  const [form, setForm] = useState<DemoForm>(initial);
  const [submitted, setSubmitted] = useState(false);

  const waHref = siteWa.demo;

  const update =
    (k: keyof DemoForm) => (v: string) => setForm((s) => ({ ...s, [k]: v }));

  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.company.trim();

  return (
    <section id="dr" aria-labelledby="demo-h2" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden border border-white/10 bg-zinc-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:border-white/10">
              <SectionHeading
                id="demo-h2"
                eyebrow="Book Your Demo"
                eyebrowClassName="mb-2 inline-flex font-mono text-xs font-semibold text-orange-400 uppercase"
                title={
                  <>
                    See DeltaARBIM on <em className="not-italic text-orange-400">your actual site.</em>
                  </>
                }
                titleClassName="font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
                desc={
                  <>
                    Bring your IFC model. We bring it to life in real-time AR — so you see exactly what DeltaARBIM does
                    for your specific project and team.
                  </>
                }
                descWrapClassName="mt-2 max-w-prose text-base leading-relaxed text-white/60"
              />

              <ul className="mt-6 divide-y divide-white/10 border border-white/10 bg-black/10">
                {demoChecklist.map((t) => (
                  <li key={t} className="flex items-start gap-3 px-5 py-4">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center text-orange-300">
                      <Check className="size-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-white/60">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                >
                  → View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                >
                  → Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                >
                  → Privacy Policy
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-8">
              {!submitted ? (
                <>
                  <h3 className="font-serif text-xl font-bold text-white">Request a Demo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    We&apos;ll be in touch within 24 hours to schedule your session.
                  </p>

                  <form
                    className="mt-6 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!canSubmit) return;
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="First Name" required htmlFor="f-fname">
                        <input
                          id="f-fname"
                          value={form.firstName}
                          onChange={(e) => update("firstName")(e.target.value)}
                          placeholder="Rahul"
                          autoComplete="given-name"
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                          required
                        />
                      </Field>
                      <Field label="Last Name" required htmlFor="f-lname">
                        <input
                          id="f-lname"
                          value={form.lastName}
                          onChange={(e) => update("lastName")(e.target.value)}
                          placeholder="Sharma"
                          autoComplete="family-name"
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                          required
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Work Email" required htmlFor="f-email">
                        <input
                          id="f-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email")(e.target.value)}
                          placeholder="rahul@company.com"
                          autoComplete="email"
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                          required
                        />
                      </Field>
                      <Field label="Company" required htmlFor="f-company">
                        <input
                          id="f-company"
                          value={form.company}
                          onChange={(e) => update("company")(e.target.value)}
                          placeholder="ABC Constructions"
                          autoComplete="organization"
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                          required
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Your Role" htmlFor="f-role">
                        <select
                          id="f-role"
                          value={form.role}
                          onChange={(e) => update("role")(e.target.value)}
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                        >
                          <option value="">Select role</option>
                          <option>General Contractor</option>
                          <option>MEP Contractor</option>
                          <option>Project Owner / Developer</option>
                          <option>Architect / BIM Manager</option>
                          <option>Construction Tech Buyer</option>
                        </select>
                      </Field>
                      <Field label="Phone / WhatsApp" htmlFor="f-phone">
                        <input
                          id="f-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone")(e.target.value)}
                          placeholder="+91 84604 73271"
                          autoComplete="tel"
                          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 outline-none focus:border-orange-400/40"
                        />
                      </Field>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-400 px-6 py-3 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
                      disabled={!canSubmit}
                    >
                      BOOK MY DEMO →
                    </button>

                    <p className="text-center font-mono text-xs tracking-widest text-white/40">
                      No commitments. No sales pressure. <span className="text-white/25">·</span>{" "}
                      <Link
                        href="/privacy"
                        className="text-white/55 hover:text-orange-200 underline-offset-4 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <p className="text-sm text-white/55">Prefer WhatsApp?</p>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 px-4 py-2 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90"
                      >
                        <MessageCircle className="size-4" aria-hidden />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                <div role="alert" className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5 grid size-12 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <ShieldCheck className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-extrabold text-white">Demo request received!</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                    We&apos;ll reach out within 24 hours.{" "}
                    <Link href="/#faq" className="text-orange-300 hover:text-orange-200 underline-offset-4 hover:underline">
                      Check our FAQ
                    </Link>{" "}
                    in the meantime.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Link
                      href="/demo"
                      className="inline-flex items-center bg-orange-400 px-5 py-3 font-mono text-xs font-bold tracking-widest text-black transition-opacity hover:opacity-90"
                    >
                      Book a live demo →
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initial);
                      }}
                      className="inline-flex items-center border border-white/15 bg-white/5 px-5 py-3 font-mono text-xs tracking-widest text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
                    >
                      Send another request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

