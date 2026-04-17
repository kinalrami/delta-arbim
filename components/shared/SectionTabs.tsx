"use client";

import { useMemo } from "react";
import type { ReactNode } from "react";

export type SectionTabItem<T extends string> = {
  id: T;
  label: ReactNode;
};

export function SectionTabs<T extends string>({
  items,
  value,
  onChange,
  ariaLabel,
  getTabId,
  getControlsId,
  className = "",
  tabsClassName = "",
}: {
  items: SectionTabItem<T>[];
  value: T;
  onChange: (next: T) => void;
  ariaLabel: string;
  getTabId: (id: T) => string;
  getControlsId: (id: T) => string;
  className?: string;
  tabsClassName?: string;
}) {
  const set = useMemo(() => new Set(items.map((i) => i.id)), [items]);
  const safeValue = set.has(value) ? value : items[0]?.id;

  if (!safeValue) return null;

  return (
    <div className={["overflow-hidden border border-white/10 bg-zinc-900/40", className].join(" ")}>
      <div role="tablist" aria-label={ariaLabel} className={["flex flex-wrap", tabsClassName].join(" ")}>
        {items.map((t) => {
          const selected = t.id === safeValue;
          return (
            <button
              key={t.id}
              type="button"
              id={getTabId(t.id)}
              role="tab"
              aria-selected={selected}
              aria-controls={getControlsId(t.id)}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(t.id)}
              className={[
                "flex-1 border-b border-white/10 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest transition-colors",
                "min-w-[10rem]",
                selected ? "bg-orange-400 text-black" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/75",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

