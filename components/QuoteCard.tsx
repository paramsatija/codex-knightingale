import { GlassCard } from "@/components/GlassCard";

type QuoteCardProps = {
  quote: string;
  attribution?: string;
};

export function QuoteCard({ quote, attribution }: QuoteCardProps) {
  return (
    <GlassCard className="rounded-premium p-6">
      <blockquote className="text-lg leading-relaxed text-navy">&ldquo;{quote}&rdquo;</blockquote>
      {attribution ? <p className="mt-4 text-sm text-text-secondary">{attribution}</p> : null}
    </GlassCard>
  );
}
