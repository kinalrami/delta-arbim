"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { SolutionRoleKey } from "@/components/views/home/content";
import { solutionRoles } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";
import { SectionTabs } from "../../shared/SectionTabs";

type Stat = { value: string; label: string };
type Card = { title: string; desc: string };

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div>
      <div className="font-serif text-3xl font-extrabold leading-none text-orange-300">
        {stat.value}
      </div>
      <div className="mt-1 font-mono text-xs tracking-widest text-white/45">
        {stat.label}
      </div>
    </div>
  );
}

function SecondaryCard({ card }: { card: Card }) {
  return (
    <div className="border border-white/10 bg-black/20 p-4">
      <h4 className="font-serif text-sm font-bold text-white">{card.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{card.desc}</p>
    </div>
  );
}

export function SolutionsSection() {
  const baseId = useId();

  const [active, setActive] = useState<SolutionRoleKey>("gc");
  const role = solutionRoles.find((r) => r.key === active) ?? solutionRoles[0];

  return (
    <section id="solutions" aria-labelledby="sol-h2" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="sol-h2"
          eyebrow="Built for Your Role"
          title={
            <>
              The right solution for <em className="not-italic text-orange-400">every team</em> on site.
            </>
          }
          titleClassName="max-w-5xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        />

        <div className="mt-8">
          <SectionTabs<SolutionRoleKey>
            ariaLabel="Solutions by role"
            items={solutionRoles.map((r) => ({ id: r.key, label: r.tabLabel }))}
            value={active}
            onChange={setActive}
            getTabId={(id) => `${baseId}-tab-${id}`}
            getControlsId={(id) => `${baseId}-panel-${id}`}
          />

          <div
            id={`${baseId}-panel-${role.key}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${role.key}`}
            className="grid grid-cols-1 gap-8 md:p-6 lg:grid-cols-2"
          >
            {/* LEFT */}
            <div className="border border-white/10 bg-black/20 p-6">
              <div className="flex gap-10">
                <StatBlock stat={role.stats[0]} />
                <StatBlock stat={role.stats[1]} />
              </div>

              <h3 className="mt-6 font-serif text-xl font-extrabold text-white">
                {role.heading.split(" ").slice(0, -2).join(" ")}{" "}
                <em className="not-italic text-orange-300">
                  {role.heading.split(" ").slice(-2).join(" ")}
                </em>
              </h3>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/60">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 text-orange-300" aria-hidden>
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={role.ctaHref}
                className="mt-7 inline-flex w-fit items-center bg-orange-400 px-5 py-3 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
              >
                {role.ctaLabel}
              </Link>
            </div>

            {/* RIGHT */}
            <div className="border border-white/10 bg-black/20 p-6">
              <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-2">
                {role.cards.map((c, idx) => (
                  <div
                    key={c.title}
                    className={[
                      idx % 2 === 0 ? "md:border-r" : "",
                      idx < 2 ? "border-b" : "",
                      "border-white/10",
                    ].join(" ")}
                  >
                    <SecondaryCard card={c} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}

