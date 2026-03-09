import { cn } from "@/lib/utils";

type FloatingGradientOrbProps = {
  className?: string;
  color?: "sapphire" | "mint" | "lilac";
};

const orbPalette = {
  sapphire: "from-sapphire/30 via-sapphire/10 to-transparent",
  mint: "from-mint/35 via-mint/10 to-transparent",
  lilac: "from-lilac/35 via-lilac/10 to-transparent"
};

export function FloatingGradientOrb({ className, color = "sapphire" }: FloatingGradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-br blur-3xl",
        orbPalette[color],
        className
      )}
    />
  );
}
