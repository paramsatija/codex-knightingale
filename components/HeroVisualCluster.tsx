"use client";

import { AppMockupFrame } from "@/components/AppMockupFrame";
import { StatCard } from "@/components/StatCard";

type HeroVisualClusterProps = {
  metrics: { label: string; value: string }[];
};

export function HeroVisualCluster({ metrics }: HeroVisualClusterProps) {
  return (
    <div className="relative min-h-[460px]">
      <div className="reveal-on-load absolute left-0 top-8 w-[84%]" style={{ ["--reveal-delay" as string]: "0.05s" }}>
        <AppMockupFrame
          title="Knightingale Command"
          subtitle="Monday overview"
          rows={[
            { label: "Critical alerts", value: "2" },
            { label: "Provider matches", value: "4" },
            { label: "Upcoming appointments", value: "6" }
          ]}
        />
      </div>

      <div
        className="reveal-on-load absolute right-0 top-40 w-[68%]"
        style={{ ["--reveal-delay" as string]: "0.14s" }}
      >
        <AppMockupFrame
          title="Emergency card"
          subtitle="Critical profile ready"
          rows={[
            { label: "Allergies", value: "Updated" },
            { label: "Insurance", value: "On file" },
            { label: "Medical POA", value: "Verified" }
          ]}
          className="bg-white/70"
        />
      </div>

      <div
        className="reveal-on-load absolute bottom-0 left-0 grid w-[92%] gap-3 sm:grid-cols-3"
        style={{ ["--reveal-delay" as string]: "0.28s" }}
      >
        {metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>
    </div>
  );
}
