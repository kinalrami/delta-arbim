import { SectionHeading } from "@/components/shared/SectionHeading";
import { partnership } from "./content";
import Link from "next/link";
import { Building2, FileText, Globe, IndianRupee, MoveRight } from "lucide-react";

const iconMap = {
    mou: FileText,
    visits: Globe,
    multi: Building2,
    india: IndianRupee,
} as const;

export function Partnership() {
    return (
        <section aria-label="pricing" className="w-full bg-[#1A1A1A]">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16">
                <SectionHeading
                    id="steps"
                    eyebrow={partnership.eyebrow}
                    title={
                        <>
                            <span className="block">{partnership.titlePrefix}</span>
                            <span className="block text-orange-400">{partnership.titleEmphasis}</span>
                        </>

                    }
                    desc={<p className="text-white/55">{partnership.desc}</p>}
                    eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase text-orange-400"
                    descWrapClassName="mt-2 max-w-lg text-sm leading-relaxed"
                />

                <div className="mt-8 border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {partnership.cards.map((c, idx) => {
                            const Icon = iconMap[c.icon as keyof typeof iconMap] ?? FileText;
                            const isRightCol = idx % 2 === 1;
                            const isTopRow = idx < 2;

                            return (
                                <div
                                    key={c.title}
                                    className={[
                                        "p-8 bg-white/[0.02]",
                                        isTopRow ? "border-b border-white/10" : "",
                                        isRightCol ? "" : "md:border-r md:border-white/10",
                                    ].join(" ")}
                                >
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2.5">
                                            <Icon className="size-5 shrink-0 text-white/80" aria-hidden />
                                            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-orange-400">
                                                {c.title}
                                            </h3>
                                        </div>

                                        <p className="mt-2 text-sm leading-relaxed text-white/45">
                                            {c.body}
                                        </p>

                                        <ul className="mt-2 space-y-1.5 text-[13px] text-white/45">
                                            {c.bullets.map((b) => (
                                                <li key={b} className="flex gap-3">
                                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-400/80" aria-hidden />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[13px] leading-relaxed sm:max-w-2xl text-white/55">
                            Ready to discuss a partnership? Email{" "}
                            <a
                                href="mailto:build@Delta ARBIM.tech"
                                className="text-orange-400 transition-colors hover:text-orange-300"
                            >
                                build@Delta ARBIM.tech
                            </a>{" "}
                            or use WhatsApp — our engineering team responds personally.
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#FF9933] px-4 py-2.5 font-mono text-[10px] font-bold uppercase text-black transition-opacity duration-[0.22s] hover:opacity-[0.9]"
                            >
                                Discuss partnership <MoveRight className="size-4" aria-hidden />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 border border-white/10 bg-[#1a1a1a] px-4 py-2.5 font-mono text-[10px] font-bold uppercase text-white transition-colors duration-[0.22s] hover:border-white/20 hover:bg-white/[0.04]"
                            >
                                About us <MoveRight className="size-4" aria-hidden />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}