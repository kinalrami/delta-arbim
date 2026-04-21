"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";

import { CtaPill } from "@/components/shared/CtaPill";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pricingFaq, type PricingFaqAnswer, type PricingFaqItem } from "./content";

function renderAnswer(a: PricingFaqAnswer): ReactNode {
  if (a.kind === "text") return a.body;
  return (
    <>
      {a.before}
      <Link href={a.href} className="text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline">
        {a.linkLabel}
      </Link>
      {a.after ?? null}
    </>
  );
}

export function Faq() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(pricingFaq.items[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section aria-label="FAQ" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 pt-16">
        <SectionHeading
          id={`${baseId}-h`}
          eyebrow={pricingFaq.eyebrow}
          title={
            <>
              <span className="block">{pricingFaq.titlePrefix}</span>
              <span className="block text-orange-400">{pricingFaq.titleEmphasis}</span>
            </>
          }
          desc={<p className="text-white/55">{pricingFaq.desc}</p>}
          descWrapClassName="mt-1 max-w-lg text-sm leading-relaxed"
        />

        <div className="mt-6 border border-white/10 bg-white/2">
          {pricingFaq.items.map((item: PricingFaqItem) => {
            const expanded = openId === item.id;
            const panelId = `${baseId}-panel-${item.id}`;
            const triggerId = `${baseId}-trigger-${item.id}`;
            return (
              <div key={item.id} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-6 p-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-sm font-semibold text-white sm:text-[14px]">
                    {item.question}
                  </span>
                  <span className="shrink-0 font-mono text-lg font-semibold text-orange-400" aria-hidden>
                    {expanded ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                  className="px-6 pb-6 text-sm leading-relaxed text-white/55"
                >
                  {renderAnswer(item.answer)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {pricingFaq.links.map((l) => (
            <CtaPill
              key={l.href}
              href={l.href}
              variant="gray"
              className="text-[9px] font-bold text-white/50 hover:text-orange-200"
            >
              {l.label}
            </CtaPill>
          ))}
        </div>
      </div>
    </section>
  );
}

