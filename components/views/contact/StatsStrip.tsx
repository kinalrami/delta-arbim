import { contactStats } from "./content";

export function StatsStrip() {
  return (
    <section aria-label="Contact stats" className="w-full bg-[#1A1A1A] border-y border-white/10">
      <div className="grid grid-cols-2 overflow-hidden divide-x divide-y divide-white/10 md:divide-y-0 md:grid-cols-4">
        {contactStats.map((s, idx) => (
          <div
            key={s.label}
            className={[
              "p-6 text-center",
              "border-white/10",
              idx % 2 === 0 ? "border-r" : "",
              idx < 2 ? "border-b md:border-b-0" : "",
              idx === 1 ? "md:border-r" : "",
            ].join(" ")}
          >
            <div className="font-serif text-2xl font-extrabold leading-none text-orange-400 sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

