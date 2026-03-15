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
        "cta-heavy group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-500 ease-premium",
        variant === "primary"
          ? "bg-gradient-to-r from-sapphire via-lilac to-mint text-white shadow-[0_16px_42px_rgba(63,109,255,0.34)] hover:-translate-y-0.5 hover:brightness-110"
          : "border border-navy/20 bg-white/82 text-navy shadow-[0_10px_26px_rgba(16,42,77,0.14)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white",
        className
      )}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}
