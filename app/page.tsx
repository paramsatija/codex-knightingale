import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ColoredBentoCard } from "@/components/ColoredBentoCard";
import { DemoVisualPanel, type DemoVisualVariant } from "@/components/DemoVisualPanel";
import { FloatingGradientOrb } from "@/components/FloatingGradientOrb";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { HeroVisualCluster } from "@/components/HeroVisualCluster";
import { PersonalizedCareJourneyTabs } from "@/components/PersonalizedCareJourneyTabs";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  audienceSegments,
  heroMetrics,
  homeFeatureCards,
  journeySteps,
  problemCards,
  testimonials
} from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Caregiving, finally in one place.",
  description:
    "Knightingale helps caregivers and seniors manage health, schedules, finances, providers, documents, and emergencies through one unified platform."
};

const pageCards: {
  title: string;
  href: string;
  description: string;
  visual: DemoVisualVariant;
}[] = [
  {
    title: "Features",
    href: "/features",
    description: "Explore every core module with colorful interactive bento demos.",
    visual: "dashboard"
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    description: "Follow the complete journey from registration to emergency readiness.",
    visual: "onboarding"
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "See family, concierge, and partner access models.",
    visual: "pricing"
  },
  {
    title: "About",
    href: "/about",
    description: "Understand the mission, philosophy, and Chicago roots behind Knightingale.",
    visual: "city"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Talk with the team for demos, partnerships, and implementation plans.",
    visual: "network"
  },
  {
    title: "Join Waitlist",
    href: "/early-access",
    description: "Get priority onboarding and an early guided rollout path.",
    visual: "careplan"
  }
];

const audienceVisuals = ["community", "calendar", "network"] as const;

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <FloatingGradientOrb color="sapphire" className="-left-24 top-6" />
        <FloatingGradientOrb color="mint" className="right-4 top-32" />
        <FloatingGradientOrb color="lilac" className="left-[40%] top-[520px] h-96 w-96" />
      </div>

      <AnimatedSection className="container-shell pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.02fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sapphire">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Care Operating System
            </p>
            <h1 className="hero-title text-navy">Caregiving, finally in one place.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Knightingale unifies health monitoring, finances, providers, tasks, schedules, messaging,
              documents, and emergency access for families and seniors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="Explore Features" variant="secondary" />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Built for caregivers (40-60), seniors (65-75), and modern care teams navigating real complexity.
            </p>
          </div>
          <HeroVisualCluster metrics={heroMetrics} />
        </div>
        <PhotoShowcase items={photoSets.homeHero} className="mt-8" />
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Why families choose Knightingale now.</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Caregiving is fragmented across spreadsheets, portals, text messages, and scattered records.
            Knightingale brings everything into one calm system that actually works in real life.
          </p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <ColoredBentoCard key={card.title} {...card} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <h2 className="section-title text-navy">AI onboarding to personalized care plan in minutes.</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Registration and the 3-step personalization flow transform conditions, stress signals, mobility, and
              support network details into practical actions and clear priorities.
            </p>
          </div>
          <DemoVisualPanel variant="onboarding" />
        </div>
        <div className="mt-6">
          <PersonalizedCareJourneyTabs steps={journeySteps} />
        </div>
        <div className="mt-6">
          <GradientCTAButton href="/how-it-works" label="See Full Care Journey" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Everything your care operation needs.</h2>
          <p className="mt-3 text-base text-text-secondary">
            Core capabilities from marketplace booking to emergency access, all connected through one profile.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeFeatureCards.slice(0, 8).map((card) => (
            <ColoredBentoCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-6">
          <GradientCTAButton href="/features" label="Open Interactive Features" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Built for the people carrying the most.</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {audienceSegments.map((segment, index) => (
            <article key={segment.title} className="glass-card bloom-on-hover rounded-premium p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sapphire">Audience</p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">{segment.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{segment.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-navy/90">
                {segment.points.map((point) => (
                  <li key={point} className="rounded-xl bg-white/70 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <DemoVisualPanel variant={audienceVisuals[index] ?? "dashboard"} compact className="mt-4" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Explore every page.</h2>
          <p className="mt-3 text-base text-text-secondary">
            Start where you need clarity now: features, workflow, pricing, trust, or direct support.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pageCards.map((card) => (
            <Link key={card.title} href={card.href} className="glass-card bloom-on-hover rounded-premium p-5">
              <h3 className="text-2xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>
              <DemoVisualPanel variant={card.visual} compact className="mt-4" />
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sapphire">
                Open page
                <ArrowUpRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Social proof built around real caregiver pain points.</h2>
        <p className="mt-3 text-sm text-text-secondary">Sample pilot framing with example personas.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((entry) => (
            <TestimonialCard key={entry.quote} entry={entry} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mb-20 mt-24">
        <div className="glass-card rounded-premium p-8 text-center lg:p-12">
          <h2 className="section-title text-navy">Care is hard enough. The system should help.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            Join Knightingale’s waitlist for priority access, guided onboarding, and a rollout plan tailored to your care context.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
            <GradientCTAButton href="/contact" label="Book A Team Call" variant="secondary" />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
