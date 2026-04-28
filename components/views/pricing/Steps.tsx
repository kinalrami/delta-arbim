import { SectionHeading } from "@/components/shared/SectionHeading";
import { steps } from "./content";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Steps() {
    return (
        <section aria-label="pricing" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16">
                <SectionHeading
                    id="steps"
                    eyebrow={steps.eyebrow}
                    title={
                        <>
                            <span className="block">{steps.titlePrefix}</span>
                            <span className="block text-orange-400">{steps.titleEmphasis}</span>
                        </>

                    }
                    desc={<p className="text-white/55">{steps.desc}</p>}
                    eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
                    descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
                />
                <div className="grid md:grid-cols-3 mt-8 border border-white/10">
                    {steps.data.map((d) => (
                        <div key={d.id} className="flex flex-col gap-2 p-6 border-r border-white/10 bg-white/[0.02] hover:border-t-4 hover:border-t-orange-400 hover:bg-white/5">
                            {/* Step Number & Name */}
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-orange-400 uppercase text-sm">Step {d.id}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">{d.name}</h3>

                            {/* Main Content */}
                            <p className="text-sm leading-relaxed text-white/40">
                                {d.content}
                            </p>

                            <Link href={d.href} className="text-orange-400 uppercase text-xs flex gap-2 ">{d.buttonLabel} <MoveRight size={16} /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}