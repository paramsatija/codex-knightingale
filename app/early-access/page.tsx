import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactFormCard } from "@/components/ContactFormCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { earlyAccessFields } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Early Access",
  description: "Join Knightingale early access for personalized demo and priority onboarding."
};

export default function EarlyAccessPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Early Access</p>
            <h1 className="hero-title mt-4 text-navy">Get priority access to Knightingale.</h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Join the first wave of families and care teams shaping a modern care operating system.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/features" label="See Live Feature Demos" variant="secondary" />
            </div>

            <DemoVisualPanel variant="onboarding" className="mt-6" />
            <PhotoShowcase items={photoSets.howItWorks} compact className="mt-4" />

            <div className="mt-8 grid gap-3">
              <article className="glass-card rounded-2xl p-4">
                <h2 className="text-base font-semibold text-navy">What you get</h2>
                <p className="mt-2 text-sm text-text-secondary">Personalized setup review and guided care workflow activation.</p>
              </article>
              <article className="glass-card rounded-2xl p-4">
                <h2 className="text-base font-semibold text-navy">Who this is for</h2>
                <p className="mt-2 text-sm text-text-secondary">Family caregivers, seniors, professionals, and care organizations.</p>
              </article>
              <article className="glass-card rounded-2xl p-4">
                <h2 className="text-base font-semibold text-navy">Location context</h2>
                <p className="mt-2 text-sm text-text-secondary">Designed in Chicago for U.S. caregiving realities.</p>
              </article>
            </div>
          </div>

          <div className="grid gap-4">
            <DemoVisualPanel variant="careplan" compact />
            <ContactFormCard
              title="Join The Waitlist"
              subtitle="Share your care context and we’ll tailor your demo and onboarding path."
              ctaLabel="Join Waitlist"
              fields={earlyAccessFields}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
