import { cn } from "@/lib/utils";

type FeaturePillProps = {
  label: string;
  className?: string;
};

export function FeaturePill({ label, className }: FeaturePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium tracking-wide text-navy backdrop-blur-md",
        className
      )}
    >
      {label}
    </span>
  );
}
