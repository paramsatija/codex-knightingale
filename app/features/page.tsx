import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureShowcaseBoard } from "@/components/FeatureShowcaseBoard";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { featureShowcaseEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Knightingale features with interactive demos for each capability."
};

export default function FeaturesPage() {
  return (
    <div className="pb-20 pt-14">
      <AnimatedSection className="container-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-white/18 bg-[#090F1F] p-8 shadow-[0_24px_70px_rgba(7,10,24,0.58)] lg:p-10">
          <div className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-[#5B8CFF33] blur-3xl" />
          <div className="pointer-events-none absolute right-8 top-16 h-64 w-64 rounded-full bg-[#57D6B526] blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B8A2FF2E] blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9AB5FF]">Features</p>
            <h1 className="hero-title mt-4 text-white">Interactive feature demos built to convert interest into action.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#B7C3DD]">
              Tap any feature card to see how it works. Each flow maps onboarding signals into personalized
              outcomes and coordinated care execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/contact" label="Talk To Sales" variant="secondary" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[36px] border border-white/12 bg-[#090F1F] p-6 shadow-[0_18px_60px_rgba(7,10,24,0.48)] lg:p-8">
          <FeatureShowcaseBoard entries={featureShowcaseEntries} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/16 bg-[#101A30] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#9AB5FF]">AI journey</p>
            <p className="mt-2 text-base font-semibold text-white">Onboarding to personalized care path in minutes.</p>
          </article>
          <article className="rounded-3xl border border-white/16 bg-[#101A30] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#84E6CC]">Operational clarity</p>
            <p className="mt-2 text-base font-semibold text-white">Shared ownership reduces missed care handoffs.</p>
          </article>
          <article className="rounded-3xl border border-white/16 bg-[#101A30] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#D0C1FF]">Conversion intent</p>
            <p className="mt-2 text-base font-semibold text-white">Every feature demo routes to waitlist or demo booking.</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-10">
        <div className="rounded-[32px] border border-white/18 bg-gradient-to-r from-[#5B8CFF26] via-[#B8A2FF26] to-[#57D6B526] p-8 text-center">
          <h2 className="section-title text-white">Ready to launch with Knightingale?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#D9E5FF]">
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
