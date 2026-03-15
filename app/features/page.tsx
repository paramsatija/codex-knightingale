import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ColoredBentoCard } from "@/components/ColoredBentoCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { FeatureShowcaseBoard } from "@/components/FeatureShowcaseBoard";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { featureShowcaseEntries, homeFeatureCards } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See every Knightingale module in one place, from AI onboarding and provider matching to emergency access and financial planning."
};

const moduleClusters = [
  {
    title: "Care Core",
    body: "Registration, onboarding, dashboard, tasks, and calendar for daily care execution.",
    visual: "dashboard" as const,
    tint: "bg-tint-sapphire"
  },
  {
    title: "Care Network",
    body: "Provider marketplace, messaging, document vault, and collaboration across teams.",
    visual: "network" as const,
    tint: "bg-tint-mint"
  },
  {
    title: "Care Intelligence",
    body: "Eligibility checking, finance projections, health monitoring, and risk alerts.",
    visual: "finance" as const,
    tint: "bg-tint-gold"
  },
  {
    title: "Care Readiness",
    body: "Emergency access, pet care reminders, and secure settings controls.",
    visual: "emergency" as const,
    tint: "bg-tint-lilac"
  }
];

export default function FeaturesPage() {
  return (
    <div className="pb-20 pt-14">
      <AnimatedSection className="container-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/74 p-8 shadow-[0_24px_70px_rgba(38,78,156,0.14)] lg:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#4E8BFF2E] blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-12 h-64 w-64 rounded-full bg-[#20D1B72A] blur-3xl" />
          <div className="pointer-events-none absolute bottom-6 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFBD4528] blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Features</p>
              <h1 className="hero-title mt-4 text-navy">Every care module, mapped to real household workflows.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
                Knightingale combines onboarding, planning, provider matching, finance, health monitoring, and emergency readiness
                into one intelligent care system for caregivers and seniors.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist" />
                <GradientCTAButton href="/contact" label="Book Live Demo" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="careplan" />
          </div>
        </div>
        <PhotoShowcase items={photoSets.features} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moduleClusters.map((cluster) => (
            <article key={cluster.title} className={`glass-card rounded-premium p-5 ${cluster.tint}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-sapphire">Module Cluster</p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">{cluster.title}</h2>
              <p className="mt-3 text-sm text-text-secondary">{cluster.body}</p>
              <DemoVisualPanel variant={cluster.visual} compact className="mt-4" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[36px] border border-white/80 bg-white/74 p-6 shadow-[0_18px_60px_rgba(34,71,148,0.12)] lg:p-8">
          <FeatureShowcaseBoard entries={featureShowcaseEntries} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Feature map overview</h2>
          <p className="mt-3 text-base text-text-secondary">
            This map shows the modules families use most frequently as they move from onboarding into daily care operations.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeFeatureCards.map((card) => (
            <ColoredBentoCard key={card.title} {...card} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[32px] border border-white/85 bg-gradient-to-r from-[#4E8BFF26] via-[#20D1B726] to-[#FFBD4526] p-8 text-center">
          <h2 className="section-title text-navy">See these features personalized for your care scenario.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Join the waitlist to receive a guided demo path focused on your conditions, care goals, and household constraints.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
            <GradientCTAButton href="/contact" label="Talk To Team" variant="secondary" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
