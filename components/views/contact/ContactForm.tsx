"use client";

import { useMemo, useState } from "react";

export function ContactForm({
  emailTo,
  defaultSubject = "DeltaARBIM — Contact request",
}: {
  emailTo: string;
  defaultSubject?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim();

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(defaultSubject);
    const body = encodeURIComponent(
      [
        `Name: ${form.name || "-"}`,
        `Email: ${form.email || "-"}`,
        `Company: ${form.company || "-"}`,
        "",
        form.message || "",
      ].join("\n"),
    );
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [defaultSubject, emailTo, form.company, form.email, form.message, form.name]);

  return (
    <div className="border border-white/10 bg-zinc-900/40">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-400">
            Send a message
          </div>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/60">
            This form opens your email client (no backend). If you prefer, use WhatsApp or call from the contact cards
            below.
          </p>

          <div className="mt-6 space-y-4">
            <Field label="Full name" value={form.name} onChange={update("name")} placeholder="Your name" />
            <Field
              label="Work email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
              type="email"
            />
            <Field label="Company (optional)" value={form.company} onChange={update("company")} placeholder="Company" />
            <Field
              label="Message"
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us what you’re building, and what you want to validate on site."
              textarea
            />
          </div>
        </div>

        <div className="p-8">
          <div className="border border-white/10 bg-black/20 p-6">
            <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-400">Preview</div>
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p>
                <span className="text-white/45">To:</span> {emailTo}
              </p>
              <p>
                <span className="text-white/45">Subject:</span> {defaultSubject}
              </p>
              <p className="pt-3 text-white/45">Body:</p>
              <pre className="whitespace-pre-wrap rounded border border-white/10 bg-black/20 p-4 text-xs leading-relaxed text-white/60">
{`Name: ${form.name || "-"}
Email: ${form.email || "-"}
Company: ${form.company || "-"}

${form.message || ""}`}
              </pre>
            </div>

            <a
              href={mailtoHref}
              className={[
                "mt-6 inline-flex w-full items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90",
                canSubmit ? "" : "pointer-events-none opacity-40",
              ].join(" ")}
              aria-disabled={!canSubmit}
            >
              Open Email Draft →
            </a>

            {!canSubmit ? (
              <p className="mt-3 text-xs text-white/45">Fill name, email, and message to enable the button.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-widest text-white/60">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-y border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:border-orange-400/40"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:border-orange-400/40"
        />
      )}
    </label>
  );
}

