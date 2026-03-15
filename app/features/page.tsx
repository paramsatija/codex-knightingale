import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureShowcaseBoard } from "@/components/FeatureShowcaseBoard";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { featureShowcaseEntries } from "@/lib/content";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Knightingale features with interactive demos for each capability."
};

export default function FeaturesPage() {
  return (
    <div className="pb-20 pt-14">
      <AnimatedSection className="container-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/72 p-8 shadow-[0_24px_70px_rgba(38,78,156,0.14)] lg:p-10">
          <div className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-[#4E8BFF33] blur-3xl" />
          <div className="pointer-events-none absolute right-8 top-16 h-64 w-64 rounded-full bg-[#20D1B72E] blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFBD452E] blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Features</p>
            <h1 className="hero-title mt-4 text-navy">Interactive feature demos built to convert interest into action.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
              Tap any feature card to see how it works. Each flow maps onboarding signals into personalized
              outcomes and coordinated care execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/contact" label="Talk To Sales" variant="secondary" />
            </div>
          </div>
        </div>
        <PhotoShowcase items={photoSets.features} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[36px] border border-white/80 bg-white/75 p-6 shadow-[0_18px_60px_rgba(34,71,148,0.12)] lg:p-8">
          <FeatureShowcaseBoard entries={featureShowcaseEntries} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/85 bg-tint-sapphire p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-navy/65">AI journey</p>
            <p className="mt-2 text-base font-semibold text-navy">Onboarding to personalized care path in minutes.</p>
          </article>
          <article className="rounded-3xl border border-white/85 bg-tint-mint p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-navy/65">Operational clarity</p>
            <p className="mt-2 text-base font-semibold text-navy">Shared ownership reduces missed care handoffs.</p>
          </article>
          <article className="rounded-3xl border border-white/85 bg-tint-gold p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-navy/65">Conversion intent</p>
            <p className="mt-2 text-base font-semibold text-navy">Every feature demo routes to waitlist or demo booking.</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[32px] border border-white/85 bg-gradient-to-r from-[#4E8BFF26] via-[#20D1B726] to-[#FFBD4526] p-8 text-center">
          <h2 className="section-title text-navy">Ready to launch with Knightingale?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Join the waitlist to get priority access, guided onboarding, and an implementation path tailored to your care context.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
            <GradientCTAButton href="/contact" label="Request Enterprise Demo" variant="secondary" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
