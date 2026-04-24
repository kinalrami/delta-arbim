"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Factory,
  HardHat,
  Plane,
  LandPlot,
  Zap,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaPill } from "@/components/shared/CtaPill";
import { SectionTabs } from "@/components/shared/SectionTabs";
import { IpadFrame } from "@/components/views/home/IpadFrame";
import { IndustryIpadCanvas } from "@/components/views/industry/IndustryIpadCanvas";
import {
  deepDiveCopy,
  industryPanels,
  industryTabs,
  type IndustryKey,
} from "./content";

function iconFor(id: IndustryKey) {
  if (id === "construction") return <HardHat className="size-4" aria-hidden />;
  if (id === "defence") return <Plane className="size-4" aria-hidden />;
  if (id === "manufacturing") return <Factory className="size-4" aria-hidden />;
  if (id === "infrastructure") return <LandPlot className="size-4" aria-hidden />;
  return <Zap className="size-4" aria-hidden />;
}

export function DeepDiveSection() {
  const router = useRouter();
  const [active, setActive] = useState<IndustryKey>("construction");
  const panel = useMemo(() => industryPanels[active], [active]);
  const tabId = (id: IndustryKey) => `ind-tab-${id}`;
  const controlsId = (id: IndustryKey) => `ind-panel-${id}`;

  return (
    <section aria-labelledby="ind-deep-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="ind-deep-h2"
          eyebrow={deepDiveCopy.eyebrow}
          title={
            <>
              {deepDiveCopy.titleBefore} <em className="not-italic text-orange-400">{deepDiveCopy.titleEmphasis}</em>
            </>
          }
          desc={undefined}
          eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400"
          titleClassName="max-w-5xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        />

        {/* Tabs */}
        <SectionTabs
          ariaLabel="Industries"
          items={industryTabs.map((t) => ({
            id: t.id,
            label: (
              <span className="inline-flex items-center gap-2">
                {iconFor(t.id)}
                <span>{t.label}</span>
              </span>
            ),
          }))}
          value={active}
          onChange={setActive}
          getTabId={tabId}
          getControlsId={controlsId}
          className="mt-6 border-white/10 bg-white/10"
          tabsClassName="flex-nowrap overflow-x-auto"
        />

        {/* Panel */}
        <div
          id={controlsId(active)}
          role="tabpanel"
          aria-labelledby={tabId(active)}
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div className="bg-[#1A1A1A] p-6 md:p-10">
            <span className="inline-flex border border-orange-400/25 bg-orange-400/10 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300">
              {panel.badge}
            </span>
            <h3 className="mt-6 max-w-xl font-serif text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {panel.heading.before} <em className="not-italic text-orange-400">{panel.heading.emphasis}</em>
            </h3>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/55">{panel.body}</p>

            <div className="mt-8 overflow-hidden border border-white/10">
              <div className="divide-y divide-white/10">
                {panel.usecases.map((u, idx) => {
                  if (!u.title) return null;

                  return (
                    <div
                      key={`${u.title}-${idx}`}
                      className="bg-black/10 px-6 py-5 transition-colors hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-2 font-serif text-sm font-bold text-white">
                        <span className="font-mono text-xs text-orange-300" aria-hidden>
                          →
                        </span>
                        {u.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{u.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => router.push(panel.ctas[0].href)}
                className="inline-flex items-center bg-orange-400 px-6 py-3 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
              >
                {panel.ctas[0].label} →
              </button>
              <button
                type="button"
                onClick={() => router.push(panel.ctas[1].href)}
                className="inline-flex items-center border border-white/15 bg-transparent px-6 py-3 font-mono text-xs font-bold uppercase text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                {panel.ctas[1].label}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {panel.internalLinks.map((l) => (
                <CtaPill
                  key={l.href}
                  href={l.href}
                  variant="gray"
                  className="text-[10px] font-bold tracking-[0.12em] text-white/50 hover:text-orange-200"
                >
                  {l.label}
                </CtaPill>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-black flex items-center justify-center p-10">
            <div className="w-full max-w-sm">
              <IpadFrame orientation="landscape" className="mx-auto max-w-[380px]">
                <IndustryIpadCanvas industry={active} hud={panel.hud} />
              </IpadFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

