import { SectionHeading } from "@/components/shared/SectionHeading";
import { languages } from "./content";
import { IpadFrame } from "../home/IpadFrame";
import Image from "next/image";
import { GlobeCanvas } from "./GlobalReachCanvas";


export function GlobalReach() {
    return (
        <section role="region" aria-label="Global Reach" className="w-full bg-[#1A1A1A]">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div className="flex justify-center">
                        <div className="w-full flex items-center">
                            <IpadFrame
                                orientation="portrait"
                                className="h-80 p-4 sm:h-96 sm:p-5"
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
                                                GLOBAL REACH · IFC AR BIM
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 right-3 px-2 py-0.5 font-mono text-xs tracking-widest">
                                            <span className="text-orange-400" aria-live="polite">
                                                AHMEDABAD · INDIA — HQ
                                            </span>
                                        </div>
                                    </>
                                }
                            >
                                <GlobeCanvas />
                                {/* <ArsCanvas className="h-full w-full" active={active} hasClash={hasClash} /> */}
                            </IpadFrame>

                        </div>
                    </div>
                    {/* RIGHT */}
                    <div>
                        <SectionHeading
                            id="global-reach-h2"
                            eyebrow="Global Reach"
                            title={<>
                                Built in Bharat.
                                <br />
                                <span className="text-orange-400">Available everywhere.
                                </span><br />
                                <span className="text-xl font-bold text-white/70">Engineering Without Borders</span>
                            </>}
                            desc={
                                <>
                                    <p>Delta ARBIM is designed for every construction team, defence facility, and industrial plant on the planet. While we are rooted in India, our reach is global. Offering remote demos anywhere in the world and on-site visits upon request to ensure your digital construction goals are met.</p>
                                </>
                            }
                            descWrapClassName="mt-4 max-w-prose text-sm space-y-4 leading-relaxed text-white/60"
                        />
                        <div className="flex flex-col mt-8">
                            {languages.map((l) => (
                                <div key={l.code} className="w-full text-left border border-white/10 px-4 py-4 transition-colors hover:bg-white/5">
                                    <div className="flex gap-3 items-start">
                                        <span className="font-mono text-sm whitespace-nowrap uppercase">
                                            {l.code}
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-mono text-[12px] whitespace-nowrap uppercase">
                                                {l.title}
                                            </span>
                                            <span className="font-mono text-[11px] text-white/50">
                                                {l.desc}
                                            </span>
                                        </div>
                                        <div
                                            className={`hidden lg:block px-2 py-1 text-[10px] font-mono whitespace-nowrap self-start ${l.status.bg} ${l.status.text} border border-${l.status.text}`}
                                        >
                                            {l.status.label}
                                        </div>
                                    </div>
                                    <div
                                        className={`lg:hidden w-fit mt-2 flex px-2 py-1 text-[10px] font-mono whitespace-nowrap self-start ${l.status.bg} ${l.status.text} border border-${l.status.text}`}
                                    >
                                        {l.status.label}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}