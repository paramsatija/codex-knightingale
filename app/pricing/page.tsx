import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Premium access models for families, concierge care, and partner organizations."
};

const plans = [
  {
    name: "Family",
    note: "For households coordinating active care",
    highlights: ["Unified care dashboard", "Shared calendar and tasks", "Document vault and messaging"],
    visual: "pricing"
  },
  {
    name: "Concierge",
    note: "For high-touch complex care coordination",
    highlights: ["Priority onboarding support", "Advanced planning insights", "Enhanced emergency profile workflows"],
    visual: "careplan"
  },
  {
    name: "Enterprise / Partners",
    note: "For provider groups and care ecosystems",
    highlights: ["Organization-level collaboration", "Partner workflow alignment", "Custom implementation consultation"],
    visual: "partnership"
  }
] as const;

export default function PricingPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Pricing & access</p>
            <h1 className="hero-title mt-4 text-navy">Simple premium access, tailored by care context.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale pricing is currently structured through early-access conversations to ensure the right fit by
              household and organization needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/contact" label="Book Sales Call" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="pricing" />
        </div>
        <PhotoShowcase items={photoSets.pricing} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="glass-card bloom-on-hover rounded-premium p-6">
              <h2 className="text-2xl font-semibold text-navy">{plan.name}</h2>
              <p className="mt-2 text-sm text-text-secondary">{plan.note}</p>
              <ul className="mt-5 grid gap-2 text-sm text-navy">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-xl bg-white/70 px-3 py-2">
                    {highlight}
                  </li>
                ))}
              </ul>
              <DemoVisualPanel variant={plan.visual} compact className="mt-5" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <div className="glass-card rounded-premium p-8 text-center">
          <h2 className="section-title text-navy">Discuss your best-fit plan with the Knightingale team.</h2>
          <div className="mx-auto mt-6 max-w-xl">
            <DemoVisualPanel variant="partnership" compact />
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
            <GradientCTAButton href="/contact" label="Partnership Inquiry" variant="secondary" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
