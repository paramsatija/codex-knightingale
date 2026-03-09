"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  BellRing,
  BookOpenText,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileLock2,
  FileSearch,
  HeartPulse,
  Landmark,
  MessageSquareHeart,
  PawPrint,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Users
} from "lucide-react";

import { hoverLift, shimmerSweep } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ColoredBentoCardProps = {
  title: string;
  description: string;
  tint: "sapphire" | "mint" | "lilac" | "gold" | "navy";
  icon: string;
  className?: string;
  eyebrow?: string;
};

const tintMap = {
  sapphire: "bg-tint-sapphire",
  mint: "bg-tint-mint",
  lilac: "bg-tint-lilac",
  gold: "bg-tint-gold",
  navy: "bg-tint-navy"
};

const iconMap = {
  AlarmClock,
  BellRing,
  BookOpenText,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileLock2,
  FileSearch,
  HeartPulse,
  Landmark,
  MessageSquareHeart,
  PawPrint,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Users
};

export function ColoredBentoCard({
  title,
  description,
  tint,
  icon,
  className,
  eyebrow
}: ColoredBentoCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? ShieldCheck;

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-premium border border-white/70 p-6 shadow-glass backdrop-blur-md",
        tintMap[tint],
        className
      )}
      whileHover={hoverLift}
    >
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 -skew-x-12 bg-gradient-to-r from-white/10 via-white/70 to-transparent"
        variants={shimmerSweep}
        initial="initial"
        whileHover="hover"
      />
      <div className="relative z-10">
        <div className="mb-5 inline-flex rounded-2xl border border-white/75 bg-white/65 p-2 text-navy">
          <Icon className="h-5 w-5" />
        </div>
        {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy/65">{eyebrow}</p> : null}
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
      </div>
    </motion.article>
  );
}
