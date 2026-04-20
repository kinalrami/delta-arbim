import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutWhatWeStandForCopy } from "@/components/views/about/content";

export function AboutWhatWeStandForSection() {
  const c = aboutWhatWeStandForCopy;

  return (
    <section aria-labelledby="about-what-we-stand-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="about-what-we-stand-h2"
          eyebrow={c.eyebrow}
          title={
            <>
              {c.titleLine}{" "}
              <em className="text-white/[0.92]">{c.titleItalic}</em>
            </>
          }
          titleClassName="max-w-4xl font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl"
        />

        <FeatureGrid
          wrapClassName="mt-8 border border-white/10 bg-white/10"
          columnsClassName="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
          cardClassName="group flex h-full flex-col bg-[#1A1A1A] p-7 transition-colors hover:bg-white/[0.04]"
          items={c.items}
        />
      </div>
    </section>
  );
}
