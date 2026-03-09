"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import type { JourneyStep } from "@/lib/types";
import { cn } from "@/lib/utils";

type PersonalizedCareJourneyTabsProps = {
  steps: JourneyStep[];
};

const tintClassMap = {
  sapphire: "from-sapphire/20 via-sapphire/8 to-transparent",
  mint: "from-mint/20 via-mint/8 to-transparent",
  lilac: "from-lilac/20 via-lilac/8 to-transparent",
  gold: "from-gold/20 via-gold/8 to-transparent"
};

const accentClassMap = {
  sapphire: "bg-sapphire/85",
  mint: "bg-mint/90",
  lilac: "bg-lilac/85",
  gold: "bg-gold/85"
};

export function PersonalizedCareJourneyTabs({ steps }: PersonalizedCareJourneyTabsProps) {
  const [activeId, setActiveId] = useState(steps[0]?.id ?? "");
  const reduceMotion = useReducedMotion();

  const activeStep = useMemo(() => steps.find((step) => step.id === activeId) ?? steps[0], [activeId, steps]);

  if (!activeStep) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
      <div role="tablist" aria-label="Personalized care journey" className="grid gap-3">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep.id;
          return (
            <button
              key={step.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`journey-panel-${step.id}`}
              id={`journey-tab-${step.id}`}
              onClick={() => setActiveId(step.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl border px-4 py-4 text-left transition-all duration-500 ease-premium",
                isActive
                  ? "border-white/80 bg-white/80 shadow-float"
                  : "border-white/60 bg-white/55 hover:border-white/80 hover:bg-white/70"
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55">Step {index + 1}</span>
              <p className="mt-1 text-base font-semibold text-navy">{step.label}</p>
              <p className="mt-2 text-sm text-text-secondary">{step.title}</p>
              {isActive ? <span className="mt-3 block h-1.5 w-16 rounded-full bg-sapphire" /> : null}
            </button>
          );
        })}
      </div>

      <div
        id={`journey-panel-${activeStep.id}`}
        role="tabpanel"
        aria-labelledby={`journey-tab-${activeStep.id}`}
        className="glass-card relative overflow-hidden rounded-premium p-6"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", tintClassMap[activeStep.tint])} aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.985 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/75 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                {activeStep.label}
              </span>
              <span className={cn("h-2.5 w-16 rounded-full", accentClassMap[activeStep.tint])} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-navy">{activeStep.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{activeStep.description}</p>

            <div className="mt-6 grid gap-3">
              {activeStep.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-4 py-3"
                >
                  <span className="text-sm text-navy">{highlight}</span>
                  <span className="h-2 w-2 rounded-full bg-sapphire" />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/80 bg-white/75 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-navy/60">Live preview</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/70 bg-tint-sapphire px-3 py-3 text-sm text-navy">
                  Intake
                  <p className="mt-1 text-xs text-text-secondary">Data normalized</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-tint-lilac px-3 py-3 text-sm text-navy">
                  Insight
                  <p className="mt-1 text-xs text-text-secondary">Priorities ranked</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-tint-mint px-3 py-3 text-sm text-navy">
                  Action
                  <p className="mt-1 text-xs text-text-secondary">Care coordinated</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
