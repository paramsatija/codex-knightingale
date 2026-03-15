"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import type { FeatureShowcaseEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

type FeatureShowcaseBoardProps = {
  entries: FeatureShowcaseEntry[];
};

const tintClasses: Record<FeatureShowcaseEntry["tint"], string> = {
  sapphire: "from-[#FF6F7A40] via-[#FF6F7A20] to-transparent border-[#FF6F7A66]",
  mint: "from-[#20D1B740] via-[#20D1B720] to-transparent border-[#20D1B766]",
  lilac: "from-[#8FDB4F42] via-[#8FDB4F24] to-transparent border-[#8FDB4F66]",
  gold: "from-[#FFBD4542] via-[#FFBD4522] to-transparent border-[#FFBD4566]",
  navy: "from-[#58AAFF3A] via-[#58AAFF1E] to-transparent border-[#58AAFF66]"
};

const accentClasses: Record<FeatureShowcaseEntry["tint"], string> = {
  sapphire: "bg-[#FF5D6D]",
  mint: "bg-[#20D1B7]",
  lilac: "bg-[#8FDB4F]",
  gold: "bg-[#FFBD45]",
  navy: "bg-[#58AAFF]"
};

export function FeatureShowcaseBoard({ entries }: FeatureShowcaseBoardProps) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");

  const active = useMemo(() => entries.find((entry) => entry.id === activeId) ?? entries[0], [activeId, entries]);

  if (!active) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.02fr,0.98fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {entries.map((entry) => {
          const isActive = entry.id === active.id;
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => setActiveId(entry.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl border p-5 text-left transition-all duration-500 ease-premium",
                "bg-white/78 shadow-[0_16px_40px_rgba(51,89,168,0.14)] hover:-translate-y-1",
                isActive ? "border-sapphire/55 ring-1 ring-sapphire/35" : "border-white/80 hover:border-sapphire/50"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", tintClasses[entry.tint])} aria-hidden />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/85 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy/75">
                    {entry.category}
                  </span>
                  <span
                    className={cn("h-2.5 w-10 rounded-full transition-all duration-500", accentClasses[entry.tint], isActive ? "opacity-100" : "opacity-50")}
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-navy">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{entry.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy/65">
                  {isActive ? "Selected for live demo" : "Tap to view demo"}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="sticky top-28 h-fit rounded-[30px] border border-white/85 bg-white/82 p-5 shadow-[0_22px_60px_rgba(34,61,122,0.16)] backdrop-blur-xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sapphire">Live feature demo</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-navy">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{active.summary}</p>

            <div className="mt-5 grid gap-2">
              {active.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/75 px-3 py-2 text-sm text-navy">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <DemoVisualPanel variant={active.demoVariant} />
            </div>

            <div className="mt-5 rounded-2xl border border-white/85 bg-gradient-to-r from-tint-sapphire via-tint-mint to-tint-gold p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">Business outcome</p>
              <p className="mt-2 text-sm font-semibold text-navy">{active.outcome}</p>
            </div>

            <div className="mt-6">
              <GradientCTAButton href="/early-access" label="Join Waitlist For This Feature" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
