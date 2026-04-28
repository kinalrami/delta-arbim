"use client";

import { homeClients } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";

const marqueeClients = [...homeClients, ...homeClients, ...homeClients, ...homeClients];

export function ClientsSection() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-h2"
      className="relative w-full overflow-hidden bg-[#111111]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-6 lg:px-12">
        <SectionHeading
          id="clients-h2"
          eyebrow="Our Clients"
          eyebrowClassName="mb-2 inline-flex font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-orange-400"
          title={
            <>
              Trusted by Teams <span className="text-orange-400">on the Ground.</span>
            </>
          }
          titleClassName="mb-10 font-serif text-3xl font-semibold leading-tight text-white sm:text-[28px]"
        />

        <div className="group relative overflow-hidden border-y border-orange-400/15 py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#111111] to-transparent sm:w-30" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#111111] to-transparent sm:w-30" />

          <div className="client-track flex w-max gap-5 group-hover:[animation-play-state:paused]">
            {marqueeClients.map((client, index) => (
              <article
                key={`${client.key}-${index}`}
                className="group/card relative w-[260px] shrink-0 overflow-hidden border border-orange-400/15 bg-[#1A1A1A] p-7 pb-6 transition-colors duration-300 hover:border-orange-400/45 hover:bg-[#1E1E1E]"
              >
                <div className="mb-4 flex h-[52px] w-full items-center">
                  {client.logoSrc ? (
                    <img
                      src={client.logoSrc}
                      alt={client.logoAlt ?? client.name}
                      className="max-h-11 max-w-[140px] object-contain opacity-50 grayscale invert transition-opacity duration-300 group-hover/card:opacity-90"
                    />
                  ) : (
                    <span className="font-mono text-base font-medium tracking-[0.06em] text-white/45 uppercase transition-colors duration-300 group-hover/card:text-white/85">
                      {`Client ${(index % homeClients.length) + 1}`}
                    </span>
                  )}
                </div>

                <div className="mb-4 h-px bg-orange-400/15" />

                <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-white/70 uppercase">
                  {client.name}
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.14em] text-orange-300/60 uppercase">
                  {client.industry} · {client.country}
                </div>

                <span className="absolute right-0 bottom-0 left-0 h-[2px] origin-left scale-x-0 bg-orange-400 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover/card:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-track {
          animation: clients-scroll 18s linear infinite;
        }

        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
