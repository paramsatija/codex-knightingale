import { GlassCard } from "@/components/GlassCard";

type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <GlassCard className="rounded-3xl px-4 py-3">
      <div className="text-lg font-semibold text-navy">{value}</div>
      <div className="text-xs text-text-secondary">{label}</div>
    </GlassCard>
  );
}
