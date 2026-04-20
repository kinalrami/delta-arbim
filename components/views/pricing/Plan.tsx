import { SectionHeading } from "@/components/shared/SectionHeading";
import { Diamond, Zap, Target, Hexagon, Square, Globe, FileText } from 'lucide-react';
import { plans } from "./content";
import { CtaPill } from "@/components/shared/CtaPill";

const iconMap = {
    model: Diamond,
    light: Zap,
    clash: Target,
    hexa: Hexagon,
    square: Square,
    globe: Globe,
};

export function Plan() {
    return (
        <section aria-label="pricing" className="w-full bg-[#1A1A1A]">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16">
                <SectionHeading
                    id="steps"
                    eyebrow={plans.eyebrow}
                    title={
                        <>
                            <span className="block">{plans.titlePrefix}</span>
                            <span className="block text-orange-400">{plans.titleEmphasis}</span>
                        </>

                    }
                    desc={<p className="text-white/55">{plans.desc}</p>}
                    eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
                    descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
                />
                <div className="grid md:grid-cols-2 mt-8 border border-white/10">
                    {plans.data.map((d) => {
                        const Icon = iconMap[d.icon as keyof typeof iconMap]
                        return (
                            <div key={d.title} className="flex flex-col gap-2 p-6 border-r border-b border-white/10 bg-white/[0.02] hover:bg-white/5">
                                <div className="flex items-start gap-4">
                                    <Icon size={40} className="text-white" />

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                                        <p className="text-sm leading-relaxed text-white/40">
                                            {d.desc}
                                        </p>
                                        <p className="text-orange-400 uppercase text-xs flex gap-2 ">{d.hud}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center gap-2 text-[14px] p-4 border border-orange-400/40 mt-6 bg-orange-400/5 text-white/50">
                    <FileText size={18} /><p>Need the complete feature list before your demo? <a href="/#features" className="text-orange-400">See all features on our home page</a> — or <a href="/contact" className="text-orange-400">ask us directly</a> and we'll send a detailed spec sheet.</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {plans.links.map((l) => (
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