import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Knightingale exists and how we are redesigning care coordination with dignity."
};

const missionVisuals = ["onboarding", "alerts", "careplan", "community"] as const;

export default function AboutPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">About Knightingale</p>
            <h1 className="hero-title mt-4 text-navy">Technology should reduce care burden, not add to it.</h1>
            <p className="mt-6 max-w-3xl text-lg text-text-secondary">
              Knightingale exists to restore clarity and dignity for families and care teams navigating complex daily realities.
            </p>
          </div>
          <DemoVisualPanel variant="city" />
        </div>
        <PhotoShowcase items={photoSets.about} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass-card rounded-premium p-6">
            <h2 className="text-2xl font-semibold text-navy">Why Knightingale exists</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Caregiving has become a full operational burden for households, yet tools remain fragmented. We are
              building one coordinated operating layer for modern care.
            </p>
            <DemoVisualPanel variant={missionVisuals[0]} compact className="mt-4" />
          </article>
          <article className="glass-card rounded-premium p-6">
            <h2 className="text-2xl font-semibold text-navy">The caregiving crisis</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Families are balancing medical systems, legal requirements, financial pressure, and emotional strain
              with limited support. The status quo is unsustainable.
            </p>
            <DemoVisualPanel variant={missionVisuals[1]} compact className="mt-4" />
          </article>
          <article className="glass-card rounded-premium p-6">
            <h2 className="text-2xl font-semibold text-navy">Our philosophy</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Calm interface design, responsible intelligence, and practical workflows that work for real households,
              not idealized scenarios.
            </p>
            <DemoVisualPanel variant={missionVisuals[2]} compact className="mt-4" />
          </article>
          <article className="glass-card rounded-premium p-6">
            <h2 className="text-2xl font-semibold text-navy">Designed for dignity</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Seniors remain central in decision-making, family caregivers gain confidence, and professionals work with
              better context and continuity.
            </p>
            <DemoVisualPanel variant={missionVisuals[3]} compact className="mt-4" />
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Based in Chicago. Built for American caregiving realities.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
                From provider coordination to benefits navigation, Knightingale is designed around the complexity families
                face every day across the U.S.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Request Early Access" />
                <GradientCTAButton href="/contact" label="Contact Knightingale" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="partnership" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
