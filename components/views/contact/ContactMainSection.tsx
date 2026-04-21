"use client";

import { Facebook, Instagram, Linkedin, Mail, MessageCircle, PhoneCall } from "lucide-react";

import { site } from "@/components/views/home/content";
import { ContactEnquiryForm } from "@/components/views/contact/ContactEnquiryForm";
import { contactMainCopy, contactSocialLinks, contactWaDirectHref } from "./content";

export function ContactMainSection() {
  return (
    <section aria-labelledby="contact-form-h" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden border border-white/10 bg-black/10 lg:grid-cols-[420px_1fr]">
          {/* LEFT — CONTACT DETAILS */}
          <aside className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
              {contactMainCopy.reachHeading}
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center border border-orange-400/25 bg-orange-400/10 text-orange-300">
                  <Mail className="size-5" aria-hidden />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
                    {contactMainCopy.emailLabel}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    <a href={`mailto:${site.email}`} className="hover:text-orange-300">
                      {site.email}
                    </a>
                  </div>
                  <div className="mt-1 text-xs text-white/45">{contactMainCopy.emailSub}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center border border-orange-400/25 bg-orange-400/10 text-orange-300">
                  <PhoneCall className="size-5" aria-hidden />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
                    {contactMainCopy.phoneLabel}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    <a href={`tel:${site.phoneTel}`} className="hover:text-orange-300">
                      {site.phoneDisplay}
                    </a>
                  </div>
                  <div className="mt-1 text-xs text-white/45">{contactMainCopy.phoneSub}</div>
                </div>
              </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
              {contactMainCopy.preferWaHeading}
            </h3>
            <a
              href={contactWaDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-emerald-500 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden />
              {contactMainCopy.preferWaCta}
            </a>
            <p className="mt-3 text-xs text-white/40">{contactMainCopy.preferWaNote}</p>

            <div className="my-8 h-px bg-white/10" />

            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
              {contactMainCopy.followHeading}
            </h3>
            <div className="mt-4 flex gap-2">
              <a
                href={contactSocialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:border-orange-400/30 hover:text-orange-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden />
              </a>
              <a
                href={contactSocialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:border-orange-400/30 hover:text-orange-200"
                aria-label="Instagram"
              >
                <Instagram className="size-4" aria-hidden />
              </a>
              <a
                href={contactSocialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:border-orange-400/30 hover:text-orange-200"
                aria-label="Facebook"
              >
                <Facebook className="size-4" aria-hidden />
              </a>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <blockquote className="border-l-4 border-orange-400 pl-5">
              <p className="font-serif text-xs italic leading-relaxed text-orange-400">
                &ldquo;{contactMainCopy.promiseQuote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-6 border border-white/10 bg-black/20 p-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                {contactMainCopy.officeHeading}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {contactMainCopy.officeBodyLines[0]}
                <br />
                Built by{" "}
                <a
                  href="https://www.shivlam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-orange-200 hover:underline"
                >
                  Shivlam
                </a>{" "}
                — {contactMainCopy.officeBodyLines[1].replace(/^Built by Shivlam — /, "")}
                <br />
                <a href={`mailto:${site.email}`} className="text-orange-300 hover:text-orange-200 hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </aside>

          {/* RIGHT — CONTACT FORM */}
          <ContactEnquiryForm emailTo={site.email} />
        </div>
      </div>
    </section>
  );
}

