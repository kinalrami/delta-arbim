import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactHeroCopy } from "./content";

export function Hero() {
  return (
    <section aria-labelledby="contact-h2" className="w-full">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,153,51,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              id="contact-h2"
                eyebrow={contactHeroCopy.eyebrow}
              eyebrowClassName="mb-5 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400"
              title={
                <>
                    {contactHeroCopy.titlePrefix}{" "}
                    <span className="text-orange-400">{contactHeroCopy.titleEmphasis}</span>
                </>
              }
              titleClassName="font-serif text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl"
                desc={contactHeroCopy.desc}
              descWrapClassName="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

