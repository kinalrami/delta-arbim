"use client";

import Link from "next/link";
import { useId, useMemo, useState, type ReactNode } from "react";

import type { FaqItemModel, FaqTabId } from "@/components/home/content";
import { faqItems, faqTabs } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionTabs } from "../shared/SectionTabs";

function renderFaqAnswer(item: FaqItemModel): ReactNode {
  const a = item.answer;
  if (a.kind === "text") return a.body;
  return (
    <>
      {a.beforeLink}
      <Link href="/#pricing" className="text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline">
        See the full pricing page →
      </Link>
    </>
  );
}

export function FaqSection() {
  const baseId = useId();
  const listRegionId = `${baseId}-faq-list`;
  const [activeTab, setActiveTab] = useState<FaqTabId>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const visibleItems = useMemo(() => {
    if (activeTab === "all") return faqItems;
    return faqItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleTabChange = (tab: FaqTabId) => {
    setActiveTab(tab);
    setOpenId(null);
  };

  return (
    <section id="faq" aria-labelledby="faq-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="faq-h2"
          eyebrow="FAQ"
          eyebrowClassName="mb-2 inline-flex font-mono text-xs font-semibold uppercase text-orange-400"
          title={
            <>
              Everything you need to know about <em className="not-italic text-orange-400">DeltaARBIM.</em>
            </>
          }
        />

        <div className="mt-8">
          <SectionTabs<FaqTabId>
            ariaLabel="FAQ categories"
            items={faqTabs}
            value={activeTab}
            onChange={handleTabChange}
            getTabId={(id) => `${baseId}-tab-${id}`}
            getControlsId={() => listRegionId}
          />
        </div>

        <div
          id={listRegionId}
          className="mt-8 border-t border-white/10"
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeTab}`}
        >
          {visibleItems.map((item) => {
            const expanded = openId === item.id;
            const panelId = `${baseId}-panel-${item.id}`;
            const triggerId = `${baseId}-trigger-${item.id}`;
            return (
              <div key={item.id} className="border-b border-white/10" data-category={item.category}>
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors"
                >
                  <span className="text-base font-medium leading-snug text-white">{item.question}</span>
                  <span className="shrink-0 font-mono text-lg font-semibold text-orange-400" aria-hidden="true">
                    {expanded ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                  className="pb-5 text-sm leading-relaxed text-white/60"
                >
                  {renderFaqAnswer(item)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <p className="mb-4 text-sm text-white/45">Can&apos;t find your answer?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
          >
            Ask Our Engineering Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
