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
  sapphire: "from-[#5B8CFF33] via-[#5B8CFF1A] to-transparent border-[#5B8CFF66]",
  mint: "from-[#57D6B533] via-[#57D6B51A] to-transparent border-[#57D6B566]",
  lilac: "from-[#B8A2FF33] via-[#B8A2FF1A] to-transparent border-[#B8A2FF66]",
  gold: "from-[#F2CC6B33] via-[#F2CC6B1A] to-transparent border-[#F2CC6B66]",
  navy: "from-[#8CB3FF2E] via-[#8CB3FF14] to-transparent border-[#8CB3FF5C]"
};

const accentClasses: Record<FeatureShowcaseEntry["tint"], string> = {
  sapphire: "bg-[#5B8CFF]",
  mint: "bg-[#57D6B5]",
  lilac: "bg-[#B8A2FF]",
  gold: "bg-[#F2CC6B]",
  navy: "bg-[#8CB3FF]"
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
                "bg-[#111C33]/85 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(8,12,25,0.42)]",
                isActive ? "border-white/45 ring-1 ring-white/25" : "border-white/15 hover:border-white/35"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", tintClasses[entry.tint])} aria-hidden />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85">
                    {entry.category}
                  </span>
                  <span
                    className={cn("h-2.5 w-10 rounded-full transition-all duration-500", accentClasses[entry.tint], isActive ? "opacity-100" : "opacity-50")}
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B7C3DD]">{entry.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                  {isActive ? "Selected for live demo" : "Tap to view demo"}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="sticky top-28 h-fit rounded-[30px] border border-white/20 bg-[#0F1930]/92 p-5 shadow-[0_22px_60px_rgba(5,9,21,0.55)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A9B6D3]">Live feature demo</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#B7C3DD]">{active.summary}</p>

            <div className="mt-5 grid gap-2">
              {active.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/16 bg-white/[0.06] px-3 py-2 text-sm text-[#E4ECFF]">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <DemoVisualPanel variant={active.demoVariant} />
            </div>

            <div className="mt-5 rounded-2xl border border-white/20 bg-white/[0.06] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9B6D3]">Business outcome</p>
              <p className="mt-2 text-sm font-semibold text-white">{active.outcome}</p>
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
