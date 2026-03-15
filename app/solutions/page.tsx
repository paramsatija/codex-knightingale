import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { solutionTiles } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Knightingale solutions for families, seniors, professionals, and partner organizations."
};

const visualByIndex = ["careplan", "community", "calendar", "partnership", "network"] as const;

export default function SolutionsPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Solutions</p>
            <h1 className="hero-title mt-4 text-navy">Purpose-built pathways for every care stakeholder.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale adapts to each role in the care ecosystem while keeping everyone aligned around the same
              source of truth.
            </p>
          </div>
          <DemoVisualPanel variant="partnership" />
        </div>
        <PhotoShowcase items={photoSets.solutions} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionTiles.map((tile, index) => (
            <article key={tile.title} className="glass-card bloom-on-hover rounded-premium p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-navy/50">Track {index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">{tile.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{tile.desc}</p>
              <DemoVisualPanel variant={visualByIndex[index] ?? "dashboard"} compact className="mt-5" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Strategic support from household care to ecosystem partnerships.</h2>
              <p className="mt-4 max-w-3xl text-base text-text-secondary">
                Whether you are coordinating one household or supporting thousands of families, Knightingale provides
                clarity, operational structure, and confidence across the care lifecycle.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist" />
                <GradientCTAButton href="/contact" label="Partnership Inquiry" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="network" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
