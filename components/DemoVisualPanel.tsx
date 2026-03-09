"use client";

import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type DemoVisualVariant =
  | "dashboard"
  | "timeline"
  | "finance"
  | "alerts"
  | "careplan"
  | "network"
  | "documents"
  | "calendar"
  | "onboarding"
  | "community"
  | "emergency"
  | "partnership"
  | "pricing"
  | "city";

type DemoVisualPanelProps = {
  variant: DemoVisualVariant;
  className?: string;
  compact?: boolean;
};

type VariantConfig = {
  label: string;
  metricA: string;
  metricB: string;
  tags: string[];
  bars: number[];
  ring: number;
  shellGradient: string;
  ringGradient: string;
  barGradient: string;
  dotColor: string;
};

const configs: Record<DemoVisualVariant, VariantConfig> = {
  dashboard: {
    label: "Live dashboard",
    metricA: "8 tasks synced",
    metricB: "2 critical alerts",
    tags: ["Tasks", "Providers", "Family"],
    bars: [38, 54, 72, 49, 68, 82],
    ring: 86,
    shellGradient: "from-sapphire/22 via-lilac/16 to-mint/24",
    ringGradient: "from-sapphire via-lilac to-mint",
    barGradient: "from-sapphire/80 to-lilac/80",
    dotColor: "bg-sapphire"
  },
  timeline: {
    label: "Care timeline",
    metricA: "6 milestones",
    metricB: "0 missed handoffs",
    tags: ["Intake", "Plan", "Support"],
    bars: [26, 34, 58, 72, 68, 54],
    ring: 79,
    shellGradient: "from-lilac/26 via-sapphire/14 to-mint/16",
    ringGradient: "from-lilac via-sapphire to-mint",
    barGradient: "from-lilac/80 to-sapphire/80",
    dotColor: "bg-lilac"
  },
  finance: {
    label: "Care economics",
    metricA: "Gap forecast: +4%",
    metricB: "3 aid options found",
    tags: ["Budget", "Coverage", "Aid"],
    bars: [52, 66, 61, 47, 39, 44],
    ring: 74,
    shellGradient: "from-gold/28 via-lilac/12 to-sapphire/16",
    ringGradient: "from-gold via-lilac to-sapphire",
    barGradient: "from-gold/80 to-lilac/80",
    dotColor: "bg-gold"
  },
  alerts: {
    label: "Signal watch",
    metricA: "2 medium alerts",
    metricB: "Readiness 92%",
    tags: ["Vitals", "Medication", "Urgency"],
    bars: [20, 40, 67, 76, 48, 32],
    ring: 92,
    shellGradient: "from-coral/24 via-lilac/14 to-sapphire/16",
    ringGradient: "from-coral via-lilac to-sapphire",
    barGradient: "from-coral/80 to-lilac/80",
    dotColor: "bg-coral"
  },
  careplan: {
    label: "Personalized plan",
    metricA: "5 actions generated",
    metricB: "3 roles aligned",
    tags: ["Priorities", "Owners", "Next 7 days"],
    bars: [34, 52, 71, 74, 66, 58],
    ring: 88,
    shellGradient: "from-mint/24 via-sapphire/14 to-lilac/20",
    ringGradient: "from-mint via-sapphire to-lilac",
    barGradient: "from-mint/80 to-sapphire/80",
    dotColor: "bg-mint"
  },
  network: {
    label: "Care network",
    metricA: "9 providers mapped",
    metricB: "4 active threads",
    tags: ["Family", "Providers", "Team"],
    bars: [28, 49, 45, 70, 61, 79],
    ring: 83,
    shellGradient: "from-sapphire/22 via-mint/14 to-lilac/18",
    ringGradient: "from-sapphire via-mint to-lilac",
    barGradient: "from-sapphire/80 to-mint/80",
    dotColor: "bg-sapphire"
  },
  documents: {
    label: "Vault status",
    metricA: "21 files indexed",
    metricB: "Permissions in sync",
    tags: ["Legal", "Insurance", "Medical"],
    bars: [42, 58, 76, 72, 57, 46],
    ring: 90,
    shellGradient: "from-navy/20 via-sapphire/12 to-lilac/16",
    ringGradient: "from-navy via-sapphire to-lilac",
    barGradient: "from-navy/80 to-sapphire/80",
    dotColor: "bg-navy"
  },
  calendar: {
    label: "Care schedule",
    metricA: "6 visits this week",
    metricB: "81% tasks complete",
    tags: ["Visits", "Meds", "Follow-up"],
    bars: [35, 62, 53, 79, 66, 55],
    ring: 81,
    shellGradient: "from-sapphire/20 via-mint/20 to-gold/16",
    ringGradient: "from-sapphire via-mint to-gold",
    barGradient: "from-sapphire/80 to-mint/80",
    dotColor: "bg-mint"
  },
  onboarding: {
    label: "Onboarding map",
    metricA: "3 guided steps",
    metricB: "Completion in 7 mins",
    tags: ["Profile", "Needs", "Constraints"],
    bars: [22, 45, 67, 84, 73, 56],
    ring: 84,
    shellGradient: "from-sapphire/22 via-lilac/18 to-gold/14",
    ringGradient: "from-sapphire via-lilac to-gold",
    barGradient: "from-sapphire/80 to-lilac/80",
    dotColor: "bg-sapphire"
  },
  community: {
    label: "Support pulse",
    metricA: "12 insights shared",
    metricB: "4 peer replies",
    tags: ["Community", "Resources", "Updates"],
    bars: [31, 47, 55, 69, 73, 63],
    ring: 76,
    shellGradient: "from-lilac/24 via-mint/14 to-sapphire/14",
    ringGradient: "from-lilac via-mint to-sapphire",
    barGradient: "from-lilac/80 to-mint/80",
    dotColor: "bg-lilac"
  },
  emergency: {
    label: "Emergency ready",
    metricA: "Critical profile complete",
    metricB: "Response path verified",
    tags: ["Contacts", "Allergies", "POA"],
    bars: [57, 69, 77, 73, 59, 52],
    ring: 96,
    shellGradient: "from-coral/24 via-sapphire/16 to-mint/14",
    ringGradient: "from-coral via-sapphire to-mint",
    barGradient: "from-coral/80 to-sapphire/80",
    dotColor: "bg-coral"
  },
  partnership: {
    label: "Partner model",
    metricA: "Org workflows aligned",
    metricB: "Cross-team signal flow",
    tags: ["Provider", "Ops", "Family"],
    bars: [38, 58, 64, 71, 62, 68],
    ring: 82,
    shellGradient: "from-navy/24 via-lilac/12 to-mint/16",
    ringGradient: "from-navy via-lilac to-mint",
    barGradient: "from-navy/80 to-lilac/80",
    dotColor: "bg-navy"
  },
  pricing: {
    label: "Access model",
    metricA: "3 plan tracks",
    metricB: "Tailored onboarding",
    tags: ["Family", "Concierge", "Partner"],
    bars: [29, 46, 62, 75, 67, 57],
    ring: 80,
    shellGradient: "from-gold/24 via-sapphire/14 to-lilac/16",
    ringGradient: "from-gold via-sapphire to-lilac",
    barGradient: "from-gold/80 to-sapphire/80",
    dotColor: "bg-gold"
  },
  city: {
    label: "Chicago context",
    metricA: "Urban care complexity",
    metricB: "Built for U.S. systems",
    tags: ["Systems", "Families", "Coordination"],
    bars: [42, 61, 56, 73, 69, 60],
    ring: 85,
    shellGradient: "from-sapphire/20 via-navy/20 to-mint/15",
    ringGradient: "from-sapphire via-navy to-mint",
    barGradient: "from-sapphire/80 to-navy/80",
    dotColor: "bg-sapphire"
  }
};

export function DemoVisualPanel({ variant, className, compact = false }: DemoVisualPanelProps) {
  const config = configs[variant];

  return (
    <div
      className={cn(
        "reveal-on-load relative overflow-hidden rounded-3xl border border-white/85 bg-white/72 p-4 shadow-glass backdrop-blur-premium",
        compact ? "p-3" : "p-4",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", config.shellGradient)} aria-hidden />
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/45 blur-3xl" aria-hidden />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/65">{config.label}</p>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/70 px-2 py-1 text-[11px] text-navy/70">
            <span className={cn("h-1.5 w-1.5 rounded-full", config.dotColor)} />
            live
          </span>
        </div>

        <div className={cn("mt-3 grid gap-2", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}> 
          <div className="rounded-2xl border border-white/80 bg-white/75 px-3 py-2 text-xs text-navy">{config.metricA}</div>
          <div className="rounded-2xl border border-white/80 bg-white/75 px-3 py-2 text-xs text-navy">{config.metricB}</div>
        </div>

        <div className="mt-3 grid grid-cols-[1fr,72px] gap-3">
          <div className="rounded-2xl border border-white/75 bg-white/70 p-3">
            <div className="flex h-14 items-end gap-1.5">
              {config.bars.map((height, index) => (
                <div
                  key={`${variant}-bar-${index}`}
                  className={cn("w-full rounded-t-md bg-gradient-to-t", config.barGradient)}
                  style={{ height: `${height}%`, animationDelay: `${index * 0.04}s` } as CSSProperties}
                />
              ))}
            </div>
          </div>
          <div className="grid place-items-center rounded-2xl border border-white/80 bg-white/75 p-2">
            <div
              className={cn(
                "grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br text-xs font-semibold text-white",
                config.ringGradient
              )}
            >
              {config.ring}%
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {config.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/80 bg-white/75 px-2.5 py-1 text-[11px] text-navy/75">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
