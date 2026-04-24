import type { FeatureContent } from "@/components/views/home/content";
import { featuresContent } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";
import { FeatureGrid } from "../../shared/FeatureGrid";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="feat-h2" className="w-full border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="feat-h2"
          eyebrow="Capabilities"
          title={
            <>
              AR for Construction — Built for the <em className="not-italic text-orange-400">job site.</em>
            </>
          }
          desc="All functionalities have been designed for the field – dust, sun, lack of connections, and moving crews. In this chapter, we will examine high-end digital construction tools designed to meet the needs of field execution following office-based BIM software."
        />

        <FeatureGrid
          wrapClassName="mt-10 border border-white/10 bg-white/10"
          columnsClassName="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
          cardClassName="group flex h-full flex-col bg-[#0d0d0d] p-8 transition-colors hover:bg-white/[0.04]"
          items={featuresContent.map((f: FeatureContent) => {
            const Icon = f.icon;
            return {
              key: f.title,
              title: f.title,
              description: f.desc,
              iconNode: <Icon className="size-5" aria-hidden />,
              tag: (
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-orange-400">
                  {f.tag}
                </div>
              ),
            };
          })}
        />
      </div>
    </section>
  );
}

