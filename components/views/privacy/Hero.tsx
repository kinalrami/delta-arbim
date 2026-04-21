import { SectionHeading } from "@/components/shared/SectionHeading";
import { privacyHeroCopy } from "./content";
import { Lock, TriangleRight, Trash2 } from "lucide-react";

const iconMap = {
  lock: Lock,
  dpdpa: Lock,
  ifc: TriangleRight,
  delete: Trash2,
} as const;

export function Hero() {
  const c = privacyHeroCopy;

  return (
    <section role="banner" aria-label="Privacy Policy" className="w-full">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,153,51,0.14),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeading
                id="privacy-hero-h1"
                eyebrow={c.eyebrow}
                title={
                  <>
                    <span className="block font-serif text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                      {c.title}
                    </span>
                  </>
                }
                desc={<p>{c.desc}</p>}
                descWrapClassName="mt-2 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base"
              />

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                <span>{c.metaLeft}</span>
                <span className="text-white/20" aria-hidden>
                  ·
                </span>
                <span>{c.metaRight}</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/10 bg-white/[0.02]">
                {c.highlights.map((h, idx) => {
                  const Icon = iconMap[h.icon as keyof typeof iconMap] ?? Lock;
                  return (
                    <div
                      key={h.title}
                      className={[
                        "flex gap-4 p-5 sm:p-6",
                        idx !== 0 ? "border-t border-white/10" : "",
                      ].join(" ")}
                    >
                      <div className="mt-0.5 shrink-0 text-orange-400">
                        {h.icon === "dpdpa" ? (
                          <span
                            className="inline-flex size-4 items-center justify-center font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-orange-400"
                            aria-hidden
                          >
                            IN
                          </span>
                        ) : (
                          <Icon
                            className={["size-4", h.icon === "ifc" ? "rotate-90" : ""].join(" ")}
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[13px] font-semibold leading-snug text-white">
                          {h.title}{" "}
                          <span className="font-normal text-white/45">{h.body}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

