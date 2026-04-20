import { SectionHeading } from "@/components/shared/SectionHeading";
import { tiers } from "./content";
import { CtaPill } from "@/components/shared/CtaPill";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Tiers() {
    return (
        <section aria-label="pricing" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:py-16">
                <SectionHeading
                    id="tiers"
                    eyebrow={tiers.eyebrow}
                    title={
                        <>
                            <span className="block">{tiers.titlePrefix}</span>
                            <span className="block text-orange-400">{tiers.titleEmphasis}</span>
                        </>

                    }
                    desc={<p className="text-white/55">{tiers.desc}</p>}
                    eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
                    descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
                />

                <div className="mt-8 border border-white/10">
                    {tiers.data.map((d) => (
                        <div key={d.title} className="flex flex-col gap-2 p-8 border-b border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-l-4 group hover:border-l-orange-400">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-5">
                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                                    <p className="text-orange-400 uppercase text-[11px] flex gap-2">{d.hud}</p>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6">
                                    <p className="text-sm leading-relaxed text-white/40">
                                        {d.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {d.features.map((feature, idx) => {
                                            const isActive = idx < d.activeFeatures;
                                            return (
                                                <span key={feature} className={`px-3 py-1 text-[9px] font-bold border ${isActive
                                                    ? "border-orange-400/30 text-orange-400 bg-orange-400/20"
                                                    : "border-white/5 text-white/40 bg-white/5"
                                                    }`}>{feature}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex lg:justify-end items-center h-full whitespace-nowrap">
                                    <Link
                                        href={d.href}
                                        className="inline-flex gap-1.5 w-fit items-center justify-center border border-white/25 px-6 py-3.5 font-mono text-xs text-white transition-colors group-hover:bg-orange-400 group-hover:text-black"
                                    >
                                        {d.cta}
                                        <MoveRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-center text-[13px] text-white/50">
                    <p>All plans are <strong className="text-white">annual subscriptions</strong> invoiced in <strong className="text-white">INR (₹) with GST</strong> for Indian teams · Custom currency for international · <a href="/contact" className="text-orange-400">Ask about month-to-month</a></p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    {tiers.links.map((l) => (
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
    )
}