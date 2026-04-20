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
                                </>
                            }
                            desc={
                                <>
                                    <p>The gap in construction technology has never been about capability — it's been about cost. Enterprise AR BIM platforms charge in dollars and euros, locking out the teams who build Bharat's hospitals, bridges, defence facilities, and homes.</p>
                                    <p>DeltaARBIM was built to break that barrier. IFC-based, offline-first, iOS & Android — priced in INR and available to every construction team on earth. Not because we had to. Because we believe the world deserves better infrastructure, and better infrastructure starts with better tools.</p>
                                    <blockquote className="mt-5 border-l-4 border-orange-400 pl-5">
                                        <p className="font-serif text-base italic leading-relaxed text-orange-400 sm:text-lg">
                                            &ldquo;We built DeltaARBIM because we kept seeing the same problem on every project — the IFC model existed, the site existed, and nothing connected them. So we built the connection.&rdquo;
                                        </p>
                                        <cite className="mt-4 block font-mono text-xs font-bold uppercase text-orange-400 not-italic">
                                            — DeltaARBIM Engineering Team, Ahmedabad
                                        </cite>
                                    </blockquote>
                                    <p>Our mission is not just to serve Bharat — it is to give the world world-class infrastructure AR technology at prices that make sense for every market. INR billing. GST-compliant invoicing. Global delivery.</p>
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