import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GradientCTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function GradientCTAButton({ href, label, variant = "primary", className }: GradientCTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-500 ease-premium",
        variant === "primary"
          ? "bg-gradient-to-r from-sapphire/90 via-lilac/90 to-mint/90 text-white shadow-float hover:brightness-110"
          : "border border-navy/15 bg-white/70 text-navy backdrop-blur-md hover:bg-white",
        className
      )}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}
