"use client";

import { useRouter } from "next/navigation";
import { badges, HeroCopy, hud, internalLinks } from "./content";
import Link from "next/link";
import { CtaPill } from "@/components/shared/CtaPill";
import { IpadFrame } from "../home/IpadFrame";
import { PricingCanvas } from "./PricingCanvas";

export function Hero() {
    return (
        <section role="banner" aria-label="pricing" className="w-full">
            <div className="mx-auto w-full px-6 sm:px-10">
                <div className="grid grid-cols-1 overflow-hidden lg:border-y lg:border-white/10 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
                    {/* LEFT */}
                    <div className="relative z-10 flex flex-col justify-center py-10 lg:py-16 lg:border-r border-white/10">
                        <div className="mb-2 font-mono text-xs font-medium text-orange-400">
                            {HeroCopy.eyebrow}
                        </div>
                        <h1 className="mb-4 font-serif md:text-5xl text-2xl font-extrabold leading-tight tracking-tight">
                            AR BIM Pricing built
                            <br />
                            around <span className="text-orange-400">your project.</span>
                        </h1>
                        <p className="mb-6 max-w-md text-base leading-relaxed text-white/60">
                            {HeroCopy.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="#quote"
                                className="inline-flex items-center justify-center font-bold bg-orange-400 px-7 py-3.5 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90"
                            >
                                BOOK A FREE DEMO →
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center border border-white/25 px-6 py-3.5 font-mono text-xs text-white transition-colors hover:border-orange-400"
                            >
                                TALK TO US
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                            {badges.map((b) => (
                                <span
                                    key={b}
                                    className="inline-flex items-center border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45"
                                >
                                    {b}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {internalLinks.map((l) => (
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
                    <div className="lg:border-t-3 border-orange-400 flex items-center justify-center p-10">
                        <div className="w-full max-w-sm">
                            <IpadFrame orientation="landscape" className="mx-auto max-w-[380px]">
                                <PricingCanvas hud={hud} />
                                {/* <IndustryIpadCanvas industry={active} hud={panel.hud} /> */}
                            </IpadFrame>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

