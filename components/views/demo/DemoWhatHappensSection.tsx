import { SectionHeading } from "@/components/shared/SectionHeading";
import { demoWhatHappensCopy } from "@/components/views/demo/content";

export function DemoWhatHappensSection() {
  const { eyebrow, title, desc, columns } = demoWhatHappensCopy;

  return (
    <section
      aria-labelledby="demo-what-happens-h2"
      className="w-full bg-black"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="">
          <SectionHeading
            id="demo-what-happens-h2"
            eyebrow={eyebrow}
            title={
              <>
                {title.before}{" "}
                <span className="text-orange-400">{title.emphasis}</span>{" "}
                {title.after}
              </>
            }
            desc={<p>{desc}</p>}
            eyebrowClassName="mb-3 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400"
            titleClassName="max-w-4xl font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            descWrapClassName="mt-2 max-w-2xl text-base leading-relaxed text-white/55"
          />
        </div>

        <div className="mt-8 overflow-hidden border border-white/10 bg-[#1A1A1A]">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {columns.map((col) => (
              <div
                key={col.stepLabel}
                className="flex h-full flex-col gap-4 p-8 md:min-h-[280px]"
              >
                <div className="font-mono text-[10px] font-bold uppercase text-orange-400">
                  {col.stepLabel}
                </div>
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                  {col.heading}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/55">
                  {col.body}
                </p>
                <div className="mt-auto pt-2 font-mono text-[9px] font-bold uppercase text-orange-400">
                  {col.footerTag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
