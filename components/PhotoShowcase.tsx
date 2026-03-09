"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import type { VisualPhoto } from "@/lib/visuals";
import { cn } from "@/lib/utils";

type PhotoShowcaseProps = {
  items: VisualPhoto[];
  className?: string;
  compact?: boolean;
};

export function PhotoShowcase({ items, className, compact = false }: PhotoShowcaseProps) {
  const visible = compact ? items.slice(0, 2) : items.slice(0, 3);

  return (
    <div className={cn("grid gap-4", compact ? "sm:grid-cols-2" : "md:grid-cols-3", className)}>
      {visible.map((item, index) => (
        <figure
          key={`${item.src}-${index}`}
          className="reveal-on-load group relative overflow-hidden rounded-3xl border border-white/85 bg-white/55 shadow-glass transition duration-500 ease-premium hover:-translate-y-1"
          style={{ "--reveal-delay": `${index * 0.06}s` } as CSSProperties}
        >
          <div className={cn("relative", compact ? "aspect-[5/4]" : "aspect-[4/3]")}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition duration-700 ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-sapphire/30 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-lilac/35 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs text-white/80">{item.source}</p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
