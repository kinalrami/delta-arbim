import { CtaPill } from "@/components/shared/CtaPill";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutSkills, visions } from "@/components/views/about/content";

export function OurVision() {
    return (
        <section role="region" aria-label="Our Vision" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <SectionHeading
                            id="our-vision-h2"
                            eyebrow="Our Vision"
                            title={
                                <>
                                    World-class infrastructure technology.
                                    <br />
                                    <span className="text-orange-400">Accessible to every nation.</span>
                                    <br />
                                    <span className="text-xl font-bold text-white/70"> The Mission: Breaking the Cost Barrier</span>
                                </>

                            }
                            desc={
                                <>
                                    <p>The gap in digital construction technology has never been about capability—it's been about cost. Enterprise AR BIM platforms often lock teams into expensive dollar-based subscriptions, creating a barrier for the teams building Bharat's hospitals, bridges, and homes.</p>
                                    <p>Delta ARBIM was built in Ahmedabad to break that barrier. We provide an IFC-based, offline-first solution for iOS and Android, priced in INR to ensure world-class tools are available to every construction team on earth.</p>
                                    <blockquote className="mt-5 border-l-4 border-orange-400 pl-5">
                                        <p className="font-serif text-base italic leading-relaxed text-orange-400 sm:text-lg">
                                            “We built Delta ARBIM because we kept seeing the same problem on every project—the IFC model existed, the site existed, and nothing connected them. So we built the connection.”
                                        </p>
                                        <cite className="mt-4 block font-mono text-xs font-bold uppercase text-orange-400 not-italic">
                                            — Delta ARBIM Engineering Team, Ahmedabad
                                        </cite>
                                    </blockquote>
                                </>
                            }
                            descWrapClassName="mt-4 max-w-prose text-sm space-y-4 leading-relaxed text-white/60"
                        />
                        <div className="mt-8 flex flex-wrap gap-2">
                            {aboutSkills.map((s) => (
                                <CtaPill
                                    key={s.href}
                                    href={s.href}
                                    variant="gray"
                                    className="border-white/10 bg-white/5 px-3 py-2 text-white font-semibold hover:border-white/15 hover:bg-white/5"
                                >
                                    {s.label}
                                </CtaPill>
                            ))}
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="flex flex-col">
                        {visions.map((v) => (
                            <div key={v.title} className="w-full text-left border border-white/10 px-4 py-3 transition-colors hover:border-l-2 hover:bg-white/5 hover:border-l-orange-400">
                                <div className="flex justify-center flex-col gap-1">
                                    <span className="font-mono text-[10px] whitespace-nowrap text-orange-400 uppercase">
                                        {v.subtitle}
                                    </span>
                                    <div className="font-serif text-base font-bold text-white">
                                        {v.title}
                                    </div>
                                    <div className="overflow-hidden text-sm leading-relaxed text-white/50 transition-all">
                                        {v.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}