import { GlassCard } from "@/components/GlassCard";
import type { TestimonialEntry } from "@/lib/types";

type TestimonialCardProps = {
  entry: TestimonialEntry;
};

export function TestimonialCard({ entry }: TestimonialCardProps) {
  return (
    <GlassCard className="bloom-on-hover h-full rounded-premium p-6">
      <blockquote className="text-lg leading-relaxed text-navy">
        &ldquo;{entry.quote}&rdquo;
      </blockquote>
      <div className="mt-6 text-sm text-text-secondary">
        <p className="font-semibold text-text-primary">{entry.persona}</p>
        <p>{entry.role}</p>
      </div>
    </GlassCard>
  );
}
