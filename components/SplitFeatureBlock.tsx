import type { ReactNode } from "react";

import { GlassCard } from "@/components/GlassCard";
import { FeaturePill } from "@/components/FeaturePill";

type SplitFeatureBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
};

export function SplitFeatureBlock({
  eyebrow,
  title,
  body,
  points,
  visual,
  reverse = false
}: SplitFeatureBlockProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <FeaturePill label={eyebrow} />
        <h2 className="section-title mt-4 text-navy">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">{body}</p>
        <ul className="mt-6 grid gap-3">
          {points.map((point) => (
            <li key={point} className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-navy shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <GlassCard className={`rounded-premium p-4 ${reverse ? "lg:order-1" : ""}`}>{visual}</GlassCard>
    </section>
  );
}
