import type { ReactNode } from "react";
import {
  Diamond,
  Globe2,
  Hexagon,
  Square,
  Target,
  Zap,
} from "lucide-react";

const ICONS = {
  diamond: Diamond,
  hexagon: Hexagon,
  zap: Zap,
  globe: Globe2,
  square: Square,
  target: Target,
} as const;

export type FeatureGridIcon = keyof typeof ICONS;

/** Grid cell: Lucide `icon` + `tags` **or** custom `iconNode` + optional `tag` / `tags`. */
export type FeatureGridItem = {
  key: string;
  title: string;
  description: string;
  icon?: FeatureGridIcon;
  iconClassName?: string;
  iconNode?: ReactNode;
  tags?: readonly string[];
  tag?: ReactNode;
};

function FeatureIcon({
  name,
  className = "",
}: {
  name: FeatureGridIcon;
  className?: string;
}) {
  const Cmp = ICONS[name];
  return (
    <Cmp
      className={["size-7 shrink-0 stroke-[1.35]", className].filter(Boolean).join(" ")}
      aria-hidden
    />
  );
}

function renderIcon(item: FeatureGridItem) {
  if (item.iconNode != null) return item.iconNode;
  if (item.icon != null) {
    return (
      <FeatureIcon name={item.icon} className={item.iconClassName ?? "text-white/90"} />
    );
  }
  return null;
}

function renderFooter(item: FeatureGridItem) {
  if (item.tag != null) {
    return <div className="mt-4">{item.tag}</div>;
  }
  if (item.tags?.length) {
    return (
      <p className="mt-5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-orange-400/95">
        {item.tags.join(" · ")}
      </p>
    );
  }
  return null;
}

/** Bordered 3-column grid (e.g. About principles). */
export function FeatureGrid({
  items,
  layout = "tiles",
  wrapClassName,
  columnsClassName = "grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3",
  cardClassName = "",
}: {
  items: readonly FeatureGridItem[];
  layout?: "principles" | "tiles";
  wrapClassName?: string;
  columnsClassName?: string;
  cardClassName?: string;
}) {
  const isPrinciples = layout === "principles";

  const cellInner = (item: FeatureGridItem) => {
    const icon = renderIcon(item);
    return (
      <>
        {isPrinciples ? (
          icon
        ) : (
          <div className="mb-3 text-orange-400 [&_svg]:size-5">{icon}</div>
        )}
        <h3
          className={
            isPrinciples
              ? "mt-4 font-serif text-lg font-bold tracking-tight text-white sm:text-xl"
              : "font-serif text-lg font-bold tracking-tight text-white sm:text-xl"
          }
        >
          {item.title}
        </h3>
        <p
          className={
            isPrinciples
              ? "mt-3 text-sm leading-relaxed text-white/55"
              : "mt-2 text-sm leading-relaxed text-white/55"
          }
        >
          {item.description}
        </p>
        {renderFooter(item)}
      </>
    );
  };

  const grid = isPrinciples ? (
    <div className="mt-10 border border-white/[0.08]">
      <ul className="grid list-none grid-cols-1 p-0 md:grid-cols-3">
        {items.map((item, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          return (
            <li
              key={item.key}
              className={[
                "border-b border-white/[0.08] p-6 sm:p-8 last:border-b-0",
                "md:border-b-0",
                row === 0 ? "md:border-b md:border-white/[0.08]" : "",
                col !== 2 ? "md:border-r md:border-white/[0.08]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {cellInner(item)}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className={columnsClassName}>
      {items.map((item) => (
        <div key={item.key} className={cardClassName}>
          {cellInner(item)}
        </div>
      ))}
    </div>
  );

  if (wrapClassName && !isPrinciples) {
    return <div className={wrapClassName}>{grid}</div>;
  }
  return grid;
}
