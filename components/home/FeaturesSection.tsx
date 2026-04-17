import type { FeatureContent } from "@/components/home/content";
import { featuresContent } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";

function FeatureCard({ f }: { f: FeatureContent }) {
  const Icon = f.icon;
  return (
    <article className="group flex h-full flex-col bg-[#1A1A1A] p-6 transition-colors hover:bg-white/[0.04]">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex size-5 items-center justify-center">
          <Icon className="size-5 text-orange-400" aria-hidden />
        </span>
      </div>

      <h3 className="font-serif text-base font-bold text-white">{f.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{f.desc}</p>

      <div className="mt-5 font-mono text-xs text-orange-400">
        {f.tag}
      </div>
    </article>
  );
}

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

        {/* Single-line dividers: gap-px + grid bg — avoids double borders from card + cell borders */}
        <div className="mt-8 border border-white/10 bg-white/10">
          <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
            {featuresContent.map((f) => (
              <FeatureCard key={f.title} f={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

