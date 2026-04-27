import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogsHeroCopy } from "./content";

export function Hero() {
  return (
    <section aria-labelledby="blogs-h2" className="w-full bg-[#0d0d0d]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,153,51,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-4xl text-center mx-auto">
            <SectionHeading
              id="blogs-h2"
              eyebrow={blogsHeroCopy.eyebrow}
              eyebrowClassName="inline-flex uppercase font-mono text-xs font-semibold tracking-widest text-orange-400"
              title={
                <>
                  {blogsHeroCopy.titleBefore}
                  <br />
                  <span className="text-white">
                    the{" "}
                    <em className="not-italic text-orange-400">
                      {blogsHeroCopy.titleEmphasis}
                    </em>
                    .
                  </span>
                </>
              }
              titleClassName="mt-4 font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              desc={<p>{blogsHeroCopy.desc}</p>}
              descWrapClassName="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

