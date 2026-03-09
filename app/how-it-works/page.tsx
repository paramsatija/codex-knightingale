import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PersonalizedCareJourneyTabs } from "@/components/PersonalizedCareJourneyTabs";
import { howItWorksSteps, journeySteps } from "@/lib/content";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how Knightingale moves families from onboarding to daily personalized care coordination."
};

const stepVisuals = ["onboarding", "dashboard", "careplan", "calendar", "network", "emergency"] as const;

export default function HowItWorksPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">How it works</p>
            <h1 className="hero-title mt-4 text-navy">A visual path from setup to confidence.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale is designed to deliver practical value quickly without overwhelming families in high-stress moments.
            </p>
          </div>
          <DemoVisualPanel variant="timeline" />
        </div>
        <PhotoShowcase items={photoSets.howItWorks} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <article key={step.number} className="glass-card bloom-on-hover rounded-premium p-6">
              <div className="inline-flex rounded-full bg-sapphire/12 px-3 py-1 text-xs font-semibold text-sapphire">
                {step.number}
              </div>
              <h2 className="mt-3 text-xl font-semibold text-navy">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
              <DemoVisualPanel variant={stepVisuals[index] ?? "dashboard"} compact className="mt-4" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <div className="mb-6 max-w-3xl">
          <h2 className="section-title text-navy">From AI onboarding to personalized care delivery.</h2>
          <p className="mt-3 text-base text-text-secondary">
            This interactive sequence demonstrates how onboarding inputs become actionable outcomes for families.
          </p>
        </div>
        <PersonalizedCareJourneyTabs steps={journeySteps} />
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Ready to see your care journey mapped in real-time?</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Book a Demo" />
                <GradientCTAButton href="/contact" label="Speak to a Specialist" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="careplan" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
