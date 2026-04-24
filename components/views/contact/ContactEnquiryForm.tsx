"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactFormCopy, enquiryTabs, type EnquiryType } from "./content";

export function ContactEnquiryForm({ emailTo }: { emailTo: string }) {
  const [tab, setTab] = useState<EnquiryType>("general");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const canSubmit = form.firstName.trim() && form.email.trim() && form.message.trim();

  const enquiryDisplay = enquiryTabs.find((t) => t.id === tab)?.display ?? "GENERAL ENQUIRY";

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Delta ARBIM — ${enquiryDisplay}`);
    const body = encodeURIComponent(
      [
        `Enquiry: ${enquiryDisplay}`,
        `First name: ${form.firstName || "-"}`,
        `Last name: ${form.lastName || "-"}`,
        `Work email: ${form.email || "-"}`,
        `Company: ${form.company || "-"}`,
        `Country: ${form.country || "-"}`,
        `Phone / WhatsApp: ${form.phone || "-"}`,
        "",
        form.message || "",
      ].join("\n"),
    );
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [emailTo, enquiryDisplay, form]);

  return (
    <div className="p-6 md:p-8">
      <SectionHeading
        id="contact-form-h"
        eyebrow=" "
        eyebrowClassName="hidden"
        title={
          <>
            {contactFormCopy.titlePrefix}{" "}
            <span className="text-orange-400">{contactFormCopy.titleEmphasis}</span>
          </>
        }
        titleClassName="font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        desc={contactFormCopy.desc}
        descWrapClassName="mt-3 max-w-2xl text-sm leading-relaxed text-white/55"
      />

      <div className="mt-8 overflow-hidden border border-white/10">
        <div role="tablist" aria-label="Enquiry type" className="grid grid-cols-5 bg-black/20">
          {enquiryTabs.map((t) => {
            const selected = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setTab(t.id);
                  setSubmitted(false);
                }}
                className={[
                  "border-r border-white/10 px-3 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-colors last:border-r-0",
                  selected ? "bg-orange-400 text-black" : "text-white/45 hover:bg-white/5 hover:text-white/70",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {!submitted ? (
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (!canSubmit) return;
            setSubmitted(true);
            window.location.href = mailtoHref;
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field
              label={contactFormCopy.fields.firstName.label}
              required={contactFormCopy.fields.firstName.required}
              value={form.firstName}
              onChange={update("firstName")}
              placeholder={contactFormCopy.fields.firstName.placeholder}
              autoComplete={contactFormCopy.fields.firstName.autoComplete}
            />
            <Field
              label={contactFormCopy.fields.lastName.label}
              value={form.lastName}
              onChange={update("lastName")}
              placeholder={contactFormCopy.fields.lastName.placeholder}
              autoComplete={contactFormCopy.fields.lastName.autoComplete}
            />
            <Field
              label={contactFormCopy.fields.email.label}
              required={contactFormCopy.fields.email.required}
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder={contactFormCopy.fields.email.placeholder}
              autoComplete={contactFormCopy.fields.email.autoComplete}
            />
            <Field
              label={contactFormCopy.fields.company.label}
              value={form.company}
              onChange={update("company")}
              placeholder={contactFormCopy.fields.company.placeholder}
              autoComplete={contactFormCopy.fields.company.autoComplete}
            />
            <Field
              label={contactFormCopy.fields.country.label}
              value={form.country}
              onChange={update("country")}
              placeholder={contactFormCopy.fields.country.placeholder}
              autoComplete={contactFormCopy.fields.country.autoComplete}
            />
            <Field
              label={contactFormCopy.fields.phone.label}
              value={form.phone}
              onChange={update("phone")}
              placeholder={contactFormCopy.fields.phone.placeholder}
              autoComplete={contactFormCopy.fields.phone.autoComplete}
            />
            <div className="md:col-span-2">
              <Field
                label={contactFormCopy.fields.enquiryType.label}
                value={enquiryDisplay}
                onChange={() => { }}
                readOnly
                className="text-orange-300"
              />
            </div>
            <div className="md:col-span-2">
              <Field
                label={contactFormCopy.fields.message.label}
                required={contactFormCopy.fields.message.required}
                textarea
                value={form.message}
                onChange={update("message")}
                placeholder={contactFormCopy.fields.message.placeholder}
              />
            </div>
          </div>

          <button
            type="submit"
            className={[
              "mt-6 inline-flex w-full items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-90",
              canSubmit ? "" : "pointer-events-none opacity-40",
            ].join(" ")}
            aria-disabled={!canSubmit}
          >
            {contactFormCopy.submit}
          </button>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/45">
            <span>{contactFormCopy.notePrefix}</span>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="text-white/55 hover:text-orange-200 underline-offset-4 hover:underline">
              {contactFormCopy.privacy}
            </Link>
          </div>
        </form>
      ) : (
        <div className="mt-8 border border-white/10 bg-black/20 p-6" role="alert">
          <div className="font-serif text-xl font-extrabold text-white">{contactFormCopy.successTitle}</div>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {contactFormCopy.successBody}
          </p>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  textarea = false,
  autoComplete,
  readOnly = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
  readOnly?: boolean;
  className?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
        {label} {required ? <span className="text-orange-400">*</span> : null}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={[
            "w-full resize-y border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75 placeholder:text-white/25 outline-none focus:border-orange-400/40",
            className,
          ].join(" ")}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          required={required}
          autoComplete={autoComplete}
          readOnly={readOnly}
          className={[
            "w-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75 placeholder:text-white/25 outline-none focus:border-orange-400/40",
            readOnly ? "cursor-default opacity-90" : "",
            className,
          ].join(" ")}
        />
      )}
    </label>
  );
}

