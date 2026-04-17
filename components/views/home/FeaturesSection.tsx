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
          desc="Every feature engineered for real field conditions — dust, bright sun, low connectivity, and fast-moving teams."
        />

        <FeatureGrid
          items={featuresContent.map((f: FeatureContent) => {
            const Icon = f.icon;
            return {
              key: f.title,
              title: f.title,
              desc: f.desc,
              tag: f.tag,
              icon: <Icon className="size-5" aria-hidden />,
            };
          })}
        />
      </div>
    </section>
  );
}

