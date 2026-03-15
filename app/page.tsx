import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ColoredBentoCard } from "@/components/ColoredBentoCard";
import { DemoVisualPanel, type DemoVisualVariant } from "@/components/DemoVisualPanel";
import { FloatingGradientOrb } from "@/components/FloatingGradientOrb";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { HeroVisualCluster } from "@/components/HeroVisualCluster";
import { PersonalizedCareJourneyTabs } from "@/components/PersonalizedCareJourneyTabs";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { TestimonialCard } from "@/components/TestimonialCard";
import { heroMetrics, journeySteps, problemCards, testimonials } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Caregiving, finally in one place.",
  description:
    "Knightingale helps caregivers and seniors manage health, schedules, finances, providers, documents, and emergencies in one calm platform."
};

const pageCards: {
  title: string;
  href: string;
  description: string;
  visual: DemoVisualVariant;
  tag: string;
}[] = [
  {
    title: "Features",
    href: "/features",
    description: "Dark interactive bento demos for every core capability, from AI onboarding to emergency readiness.",
    visual: "dashboard",
    tag: "Product demo"
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Premium access tracks designed for families, concierge workflows, and partner organizations.",
    visual: "pricing",
    tag: "Plans"
  },
  {
    title: "About",
    href: "/about",
    description: "Mission, trust philosophy, and Chicago roots behind the Knightingale product vision.",
    visual: "city",
    tag: "Trust"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Connect with our team for demos, partnerships, or implementation conversations.",
    visual: "network",
    tag: "Sales"
  },
  {
    title: "Join Waitlist",
    href: "/early-access",
    description: "Request priority onboarding and get early product access tailored to your care context.",
    visual: "careplan",
    tag: "Conversion"
  },
  {
    title: "Book Demo",
    href: "/early-access",
    description: "Get a guided walkthrough of how Knightingale fits your family or organization workflows.",
    visual: "timeline",
    tag: "Conversion"
  }
];

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <FloatingGradientOrb color="sapphire" className="-left-20 top-10" />
        <FloatingGradientOrb color="mint" className="right-8 top-40" />
        <FloatingGradientOrb color="lilac" className="left-1/2 top-[420px] h-80 w-80 -translate-x-1/2" />
      </div>

      <AnimatedSection className="container-shell pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-sapphire">
              AI-Powered Caregiving Platform
            </p>
            <h1 className="hero-title text-navy">Caregiving, finally in one place.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Knightingale helps caregivers and seniors manage health, schedules, finances, providers,
              documents, and emergencies through one calm, intelligent platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="Explore Features" variant="secondary" />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Built for caregivers, seniors, and care teams navigating real-life complexity.
            </p>
          </div>
          <HeroVisualCluster metrics={heroMetrics} />
        </div>

        <PhotoShowcase items={photoSets.homeHero} className="mt-8" />
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Care should not be scattered across ten different tools.</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-text-secondary">
          Appointments, documents, finances, and emergency details are often fragmented. Knightingale brings
          everything into one coordinated system.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <ColoredBentoCard key={card.title} {...card} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Explore Knightingale by page.</h2>
          <p className="mt-3 text-base text-text-secondary">
            Use these focused pages instead of one long scroll. Each section below has its own dedicated route.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pageCards.map((card) => (
            <Link key={card.title} href={card.href} className="glass-card bloom-on-hover rounded-premium p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sapphire">{card.tag}</p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>
              <DemoVisualPanel variant={card.visual} compact className="mt-4" />
              <p className="mt-4 text-sm font-semibold text-sapphire">Open page</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="mb-6 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sapphire">
            <Sparkles className="h-3.5 w-3.5" />
            Personalized AI journey
          </p>
          <h2 className="section-title text-navy">AI onboarding to personalized care.</h2>
          <p className="mt-3 text-base text-text-secondary">
            Intake becomes personalized results, then a coordinated care plan that adapts over time.
          </p>
        </div>
        <PersonalizedCareJourneyTabs steps={journeySteps} />
        <div className="mt-6">
          <GradientCTAButton href="/features" label="See Full Feature Demo" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Built around real caregiver realities.</h2>
        <p className="mt-3 text-sm text-text-secondary">Sample pilot framing below uses example personas.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((entry) => (
            <TestimonialCard key={entry.quote} entry={entry} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mb-20 mt-24">
        <div className="glass-card rounded-premium p-8 text-center lg:p-12">
          <h2 className="section-title text-navy">Need the right section quickly?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            Start with Features for interactive product walkthroughs, then move to Pricing and join the waitlist
            when you are ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/features" label="Features" />
            <GradientCTAButton href="/pricing" label="Pricing" variant="secondary" />
            <GradientCTAButton href="/early-access" label="Join Waitlist" variant="secondary" />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
