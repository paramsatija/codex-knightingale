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
  description: "See the complete end-to-end Knightingale journey from registration to emergency readiness."
};

const stepVisuals = [
  "onboarding",
  "onboarding",
  "careplan",
  "careplan",
  "dashboard",
  "network",
  "calendar",
  "documents",
  "community",
  "finance",
  "alerts",
  "emergency"
] as const;

export default function HowItWorksPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">How it works</p>
            <h1 className="hero-title mt-4 text-navy">From registration to daily confidence in one guided flow.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale transforms fragmented caregiving into a coordinated step-by-step operating model.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="Explore Features" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="timeline" />
        </div>
        <PhotoShowcase items={photoSets.howItWorks} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Interactive AI journey preview</h2>
          <p className="mt-3 text-base text-text-secondary">
            This sequence shows how onboarding inputs turn into personalized results and adaptive care recommendations.
          </p>
        </div>
        <div className="mt-6">
          <PersonalizedCareJourneyTabs steps={journeySteps} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Complete 12-step workflow</h2>
          <p className="mt-3 text-base text-text-secondary">
            The full product journey spans onboarding, operations, communication, support, finance, and emergency readiness.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <article key={step.number} className="glass-card bloom-on-hover rounded-premium p-6">
              <div className="inline-flex rounded-full bg-sapphire/12 px-3 py-1 text-xs font-semibold text-sapphire">
                Step {step.number}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
              <DemoVisualPanel variant={stepVisuals[index] ?? "dashboard"} compact className="mt-4" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Want this workflow mapped to your exact care context?</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                We’ll customize onboarding and module setup around your conditions, budget, support network, and care priorities.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
                <GradientCTAButton href="/contact" label="Book Guided Demo" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="careplan" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
