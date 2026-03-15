import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactFormCard } from "@/components/ContactFormCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { earlyAccessFields } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Join Waitlist",
  description: "Request priority access to Knightingale with guided onboarding and personalized setup."
};

const benefits = [
  {
    title: "Priority onboarding",
    text: "Get a guided setup path tailored to your caregiving context.",
    tint: "bg-tint-sapphire"
  },
  {
    title: "Personalized rollout",
    text: "Receive recommended modules and first-week action plan immediately.",
    tint: "bg-tint-mint"
  },
  {
    title: "Early feature access",
    text: "Preview new AI capabilities and marketplace enhancements before broad release.",
    tint: "bg-tint-gold"
  }
];

export default function EarlyAccessPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Waitlist</p>
            <h1 className="hero-title mt-4 text-navy">Join Knightingale early and launch with confidence.</h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Join the first wave of caregivers, seniors, and care organizations shaping the future of coordinated care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/features" label="Review Features First" variant="secondary" />
            </div>

            <DemoVisualPanel variant="onboarding" className="mt-6" />
            <PhotoShowcase items={photoSets.howItWorks} compact className="mt-4" />

            <div className="mt-8 grid gap-3">
              {benefits.map((item) => (
                <article key={item.title} className={`glass-card rounded-2xl p-4 ${item.tint}`}>
                  <h2 className="text-base font-semibold text-navy">{item.title}</h2>
                  <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <DemoVisualPanel variant="careplan" compact />
            <ContactFormCard
              title="Join Waitlist Now"
              subtitle="Tell us who you support and what your top care goals are so we can tailor your onboarding."
              ctaLabel="Join Waitlist"
              fields={earlyAccessFields}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
