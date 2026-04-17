import type { ReactNode } from "react";

export type FeatureGridItem = {
  key: string;
  title: ReactNode;
  desc?: ReactNode;
  tag?: ReactNode;
  icon?: ReactNode;
};

export function FeatureGrid({
  items,
  columnsClassName = "grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3",
  wrapClassName = "mt-8 border border-white/10 bg-white/10",
  cardClassName = "group flex h-full flex-col bg-[#1A1A1A] p-6 transition-colors hover:bg-white/[0.04]",
}: {
  items: FeatureGridItem[];
  columnsClassName?: string;
  wrapClassName?: string;
  cardClassName?: string;
}) {
  return (
    <div className={wrapClassName}>
      <div className={columnsClassName}>
        {items.map((f) => (
          <article key={f.key} className={cardClassName}>
            {f.icon ? (
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex size-5 items-center justify-center">
                  <span className="text-orange-400" aria-hidden>
                    {f.icon}
                  </span>
                </span>
              </div>
            ) : null}

            <h3 className="font-serif text-base font-bold text-white">{f.title}</h3>
            {f.desc ? <p className="mt-3 text-sm leading-relaxed text-white/55">{f.desc}</p> : null}
            {f.tag ? <div className="mt-5 font-mono text-xs text-orange-400">{f.tag}</div> : null}
          </article>
        ))}
      </div>
    </div>
  );
}

