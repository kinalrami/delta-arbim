import Link from "next/link";

import { aboutOpenToItems, aboutSkills, aboutStats } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";

function statCellClass(i: number) {
  const base = "p-6 sm:p-8";
  if (i === 0) return `${base} border-b border-r border-white/10`;
  if (i === 1) return `${base} border-b border-white/10`;
  if (i === 2) return `${base} border-r border-white/10`;
  return base;
}

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-h2"
      className="w-full bg-[#1A1A1A]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <SectionHeading
              id="about-h2"
              eyebrow="About DeltaARBIM"
              title={
                <>
                  <span className="block text-white">Engineered in Bharat.</span>
                  <em className="block not-italic text-orange-400">Built for the world.</em>
                </>
              }
              titleClassName="font-serif text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
              desc={
                <>
                  <p>
                    DeltaARBIM is built by an India-based technology team with deep engineering experience across AR,
                    mobile, and construction technology. We spent years watching the same site coordination problems
                    repeat — the IFC model existed, the site existed, and nothing connected them.
                  </p>
                  <p>So we built the connection.</p>
                </>
              }
              descWrapClassName="mt-4 space-y-4 text-sm leading-relaxed text-white/55"
            />

            <blockquote className="mt-5 border-l-4 border-orange-400 pl-5">
              <p className="font-serif text-base italic leading-relaxed text-orange-400 sm:text-lg">
                &ldquo;We built DeltaARBIM because we kept seeing the same problem on every construction project — the BIM
                model existed, the site existed, and nothing connected them. So we built the connection.&rdquo;
              </p>
              <cite className="mt-4 block font-mono text-xs font-bold uppercase text-orange-400 not-italic">
                — DeltaARBIM Engineering Team
              </cite>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutSkills.map((s) => (
                <span
                  key={s}
                  className="border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-2 border border-white/10">
              {aboutStats.map((s, i) => (
                <div key={s.label} className={statCellClass(i)}>
                  <div className="font-serif text-center text-xl md:text-3xl font-extrabold text-orange-400">{s.value}</div>
                  <div className="mt-2 font-mono text-center text-xs font-semibold uppercase text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-white/10 bg-black/20 p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-orange-400">Open To:</p>
              <ul className="mt-3 flex flex-col gap-2">
                {aboutOpenToItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/55">
                    <span className="shrink-0 text-orange-400" aria-hidden="true">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center border border-white/10 bg-transparent px-4 py-3 font-mono text-xs font-semibold uppercase text-white transition-colors hover:border-white/20 hover:text-white/80"
              >
                → Start a Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
