"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { howItWorksSteps } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";

import { HowItWorksCanvas, type HowStepId } from "./HowItWorksCanvas";
import { IpadFrame } from "./IpadFrame";

type Step = {
  id: HowStepId;
  tag: string;
  title: string;
  desc: string;
  hudLabel: string;
};

function StepItem({
  step,
  active,
  onClick,
}: {
  step: Step;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full text-left border-b border-white/10 px-4 py-4 transition-colors",
        active ? "bg-orange-400/10 border-l-2 border-l-orange-400" : "hover:bg-white/5 border-l-2 border-l-transparent",
      ].join(" ")}
      aria-pressed={active}
    >
      <div className="flex justify-center gap-3">
        <div className="flex flex-col items-center gap-1 pt-1">
          <span className={["font-mono text-[10px] whitespace-nowrap", active ? "text-orange-300" : "text-orange-300/60"].join(" ")}>
            {step.tag}
          </span>
        </div>
        <div>
          <div className={["font-serif text-base font-bold", active ? "text-white" : "text-white/60"].join(" ")}>
            {step.title}
          </div>
          <div
            className={[
              "overflow-hidden text-sm leading-relaxed text-white/50 transition-all",
              active ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0",
            ].join(" ")}
          >
            {step.desc}
          </div>
        </div>
      </div>
    </button>
  );
}

export function HowItWorksSection() {
  const steps = useMemo<Step[]>(() => howItWorksSteps as Step[], []);

  const [activeStep, setActiveStep] = useState<HowStepId>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStep((s) => (((s + 1) % steps.length) as HowStepId));
    }, 4500);
    return () => window.clearInterval(id);
  }, [steps.length]);

  const hudLabel = steps[activeStep]?.hudLabel ?? "UPLOADING IFC";
  const badge = `${String(activeStep + 1).padStart(2, "0")}/05`;
  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <section id="how" aria-labelledby="how-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="how-h2"
          eyebrow="HOW IT WORKS"
          title={
            <>
              From <span className="text-orange-400">IFC file</span> to live AR overlay in under 60 seconds.
            </>
          }
          titleClassName="max-w-4xl font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          desc={undefined}
        />

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT: steps */}
          <div className=" overflow-hidden">
            <div className="flex flex-col">
              {steps.map((s) => (
                <StepItem
                  key={s.id}
                  step={s}
                  active={s.id === activeStep}
                  onClick={() => setActiveStep(s.id)}
                />
              ))}
            </div>

            <div className="py-4">
              <div className="h-0.5 w-full rounded bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded bg-gradient-to-r from-orange-400 to-amber-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="mailto:hi@shivlam.com"
                  className="inline-flex items-center bg-orange-400 px-4 py-2 font-mono text-xs font-bold text-black transition-colors hover:border-orange-400/50"
                >
                  → SEE IT LIVE IN A DEMO
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center border border-white/15 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:text-orange-200"
                >
                  → FULL FEATURE LIST
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: iPad landscape */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-xl">
              <IpadFrame
                orientation="landscape"
                overlay={
                  <>
                    {/* HUD */}
                    <div className="absolute top-2 left-3 flex items-center gap-2 font-mono text-[10px] text-orange-300">
                      <span className="size-1.5 rounded-full bg-orange-300 shadow-sm shadow-orange-300/60" />
                      <span>{hudLabel}</span>
                    </div>
                    <div className="absolute top-3 right-3 rounded bg-orange-400 px-2 py-1 font-mono text-[10px] font-semibold tracking-widest text-black">
                      {badge}
                    </div>
                    <div className="absolute bottom-2 left-3 font-mono text-[10px] text-white/35">
                      DELTAARBIM
                    </div>

                    {/* corner brackets */}
                    {[
                      "absolute top-2 left-2 h-4 w-4",
                      "absolute top-2 right-2 h-4 w-4 -scale-x-100",
                      "absolute bottom-2 left-2 h-4 w-4 -scale-y-100",
                      "absolute bottom-2 right-2 h-4 w-4 -scale-x-100 -scale-y-100",
                    ].map((cn) => (
                      <div key={cn} className={cn}>
                        <Image
                          src="/hud-corner.svg"
                          alt=""
                          aria-hidden
                          width={16}
                          height={16}
                          unoptimized
                          className="h-4 w-4 opacity-70"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </>
                }
              >
                <HowItWorksCanvas className="h-full w-full" activeStep={activeStep} />
              </IpadFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

