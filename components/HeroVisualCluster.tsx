"use client";

import { motion } from "framer-motion";

import { AppMockupFrame } from "@/components/AppMockupFrame";
import { StatCard } from "@/components/StatCard";

type HeroVisualClusterProps = {
  metrics: { label: string; value: string }[];
};

export function HeroVisualCluster({ metrics }: HeroVisualClusterProps) {
  return (
    <div className="relative min-h-[460px]">
      <motion.div
        className="absolute left-0 top-8 w-[84%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <AppMockupFrame
          title="Knightingale Command"
          subtitle="Monday overview"
          rows={[
            { label: "Critical alerts", value: "2" },
            { label: "Provider matches", value: "4" },
            { label: "Upcoming appointments", value: "6" }
          ]}
        />
      </motion.div>

      <motion.div
        className="absolute right-0 top-40 w-[68%]"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
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
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 grid w-[92%] gap-3 sm:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </motion.div>
    </div>
  );
}
