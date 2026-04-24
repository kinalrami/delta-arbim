import { SectionHeading } from "@/components/shared/SectionHeading";
import Link from "next/link";
import { pills, statsData } from "./content";
import { GlobeCanvas } from "./GlobalReachCanvas";
import { IpadFrame } from "../home/IpadFrame";
import Image from "next/image";
import ShivlamLogo from "./ShivlamCanvas";
import { CtaPill } from "@/components/shared/CtaPill";

export default function Team() {
    return (
        <section aria-labelledby="team-h2" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT */}
                <div>
                    <SectionHeading
                        id="team-h2"
                        eyebrow="The Team Behind Delta ARBIM"
                        title={<>
                            Shivlam - <br />
                            <span className="text-orange-400">Ahmedabad's Tech Backbone.</span>
                        </>}
                        desc={
                            <>
                                <p>Delta ARBIM is the flagship construction product of Shivlam — an Ahmedabad, Gujarat-based IT firm with over 10 years of corporate engineering experience across AR, mobile, web, and enterprise product development.</p>
                                <p>Shivlam has delivered 50+ projects across AR/BIM technology, mobile & web platforms, eCommerce, digital identity, and DevOps infrastructure. Delta ARBIM is the product that brings all of that together — built by engineers who kept watching the same site coordination failures repeat, and decided to fix them with technology.</p>
                            </>
                        }
                        descWrapClassName="mt-4 max-w-prose text-sm space-y-4 leading-relaxed text-white/60"
                    />
                    <Link
                        href="https://shivlam.com"
                        target="_blank"
                        className="mt-6 inline-flex items-center justify-center font-bold bg-orange-400 px-7 py-3.5 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90"
                    >
                        Visit shivlam.com →
                    </Link>
                    <div className="mt-6 border border-white/10 rounded p-4 flex gap-2 w-auto">
                        <span className="h-5 w-5 inline-block">📍</span>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[12px] text-orange-400 uppercase font-bold">Headquarters</h4>
                            <p className="text-sm text-gray-400">Ahmedabad, Gujarat, India</p>
                            <Link className="text-sm text-orange-400" href="mailto:build@Delta ARBIM.tech">build@Delta ARBIM.tech</Link>
                            <Link className="text-sm text-orange-400" href="tel:+918460473271">+91 8460 47 3271</Link>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {pills.map((p) => (
                            <CtaPill
                                key={p}
                                variant="gray"
                                className="border-white/10 bg-white/5 px-3 py-2 text-white font-semibold hover:border-white/15 hover:bg-white/5"
                            >
                                {p}
                            </CtaPill>
                        ))}

                    </div>
                </div>
                {/* RIGHT */}
                <div>
                    <div className="text-center text-xl md:text-2xl font-bold mb-6">Shivlam — <span className="text-orange-400">the tech behind Delta ARBIM.</span></div>

                    <IpadFrame
                        orientation="portrait"
                        className="h-80 p-4 sm:h-96 sm:p-5 mb-6"
                        overlay={
                            <>
                                {/* corners */}
                                {[
                                    "absolute top-3 left-3 h-5 w-5",
                                    "absolute top-3 right-3 h-5 w-5 -scale-x-100",
                                    "absolute bottom-3 left-3 h-5 w-5 -scale-y-100",
                                    "absolute bottom-3 right-3 h-5 w-5 -scale-x-100 -scale-y-100",
                                ].map((cn) => (
                                    <div key={cn} className={cn}>
                                        <Image
                                            src="/hud-corner.svg"
                                            alt=""
                                            aria-hidden
                                            width={20}
                                            height={20}
                                            unoptimized
                                            className="h-5 w-5"
                                            draggable={false}
                                        />
                                    </div>
                                ))}

                                {/* HUD overlays */}
                                <div className="absolute top-3 left-3">
                                    <div className="flex items-center gap-2 px-2 py-0.5 font-mono text-xs tracking-widest text-orange-400">
                                        <span className="size-2 rounded-full bg-orange-400" />
                                        SHIVLAM
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 px-2 py-0.5 font-mono text-xs tracking-widest">
                                    <span className="text-orange-400" aria-live="polite">
                                        AHMEDABAD · GJ
                                    </span>
                                </div>
                            </>
                        }
                    >
                        <ShivlamLogo />
                        {/* <Image src="/shivlam.png" alt="Shivlam Canvas" width={1000} height={1000} /> */}
                    </IpadFrame>

                    {statsData.map((stat) => (
                        <div key={stat.label} className="border border-white/10 p-4">
                            <div className="flex items-start gap-4">
                                <div className="font-mono text-base font-bold text-orange-400">{stat.value}</div>
                                <div className="font-mono text-[11px] text-white/50">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}