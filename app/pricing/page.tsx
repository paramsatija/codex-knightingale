import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Premium access models for families, concierge workflows, and partner organizations."
};

const plans = [
  {
    name: "Family",
    note: "For active household caregiving",
    tint: "bg-tint-mint",
    highlights: [
      "AI onboarding and personalized care plan",
      "Dashboard, tasks, calendar, and messaging",
      "Provider marketplace and emergency access"
    ],
    cta: "Join Family Waitlist",
    visual: "careplan"
  },
  {
    name: "Concierge",
    note: "For complex, high-touch care coordination",
    tint: "bg-tint-sapphire",
    highlights: [
      "Priority onboarding and guided setup",
      "Advanced financial and eligibility planning",
      "Enhanced support and care-operation reviews"
    ],
    cta: "Join Concierge Waitlist",
    visual: "finance"
  },
  {
    name: "Partner / Enterprise",
    note: "For provider groups and healthcare ecosystems",
    tint: "bg-tint-gold",
    highlights: [
      "Organization workflow alignment",
      "Multi-user care operations setup",
      "Implementation and partnership planning"
    ],
    cta: "Talk To Partnerships",
    visual: "partnership"
  }
] as const;

const included = [
  "Role-based registration for caregivers and seniors",
  "3-step personalized onboarding flow",
  "Marketplace provider matching",
  "Calendar + Kanban task execution",
  "Document vault + real-time messaging",
  "Emergency-ready profile access"
];

export default function PricingPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Pricing & access</p>
            <h1 className="hero-title mt-4 text-navy">Choose the right level of support for your care journey.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale is currently delivered through curated onboarding so every family or organization starts
              with the right setup and outcomes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/contact" label="Book Pricing Call" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="pricing" />
        </div>
        <PhotoShowcase items={photoSets.pricing} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`glass-card bloom-on-hover rounded-premium p-6 ${plan.tint}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sapphire">{plan.note}</p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">{plan.name}</h2>
              <ul className="mt-5 grid gap-2 text-sm text-navy">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-xl bg-white/75 px-3 py-2">
                    {highlight}
                  </li>
                ))}
              </ul>
              <DemoVisualPanel variant={plan.visual} compact className="mt-5" />
              <div className="mt-5">
                <GradientCTAButton href="/early-access" label={plan.cta} />
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="glass-card rounded-premium p-8">
          <h2 className="section-title text-navy">Included across all plans</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {included.map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border border-white/80 px-4 py-3 text-sm text-navy ${
                  index % 3 === 0 ? "bg-tint-sapphire" : index % 3 === 1 ? "bg-tint-mint" : "bg-tint-gold"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="glass-card rounded-premium p-8 text-center">
          <h2 className="section-title text-navy">Need help selecting the best-fit plan?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            We’ll map your care context and recommend the best onboarding path for family, concierge, or partner needs.
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
