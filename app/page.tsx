import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ColoredBentoCard } from "@/components/ColoredBentoCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { FloatingGradientOrb } from "@/components/FloatingGradientOrb";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { HeroVisualCluster } from "@/components/HeroVisualCluster";
import { PersonalizedCareJourneyTabs } from "@/components/PersonalizedCareJourneyTabs";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  aiHighlights,
  audienceSegments,
  heroMetrics,
  homeFeatureCards,
  journeySteps,
  problemCards,
  testimonials,
  trustCards,
  walkthroughBlocks
} from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Caregiving, finally in one place.",
  description:
    "Knightingale helps caregivers and seniors manage health, schedules, finances, providers, documents, and emergencies in one calm platform."
};

const spanClass: Record<string, string> = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  default: ""
};

const audienceVisuals = ["calendar", "community", "network"] as const;
const walkthroughVisuals = ["onboarding", "dashboard", "network", "calendar", "documents", "emergency"] as const;

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
              <GradientCTAButton href="/early-access" label="Book a Demo" />
              <GradientCTAButton href="/how-it-works" label="See How It Works" variant="secondary" />
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
          Today’s caregiving experience is fragmented. Appointments live in one place. Legal documents in
          another. Finances in spreadsheets. Medication notes in text messages. Benefits on government
          websites. And emergencies? They happen when no one is ready. Knightingale brings all of it together.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <DemoVisualPanel variant="timeline" />
          <DemoVisualPanel variant="finance" />
          <DemoVisualPanel variant="emergency" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <ColoredBentoCard key={card.title} {...card} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="max-w-3xl">
          <h2 className="section-title text-navy">Everything care needs. Under one roof.</h2>
          <p className="mt-3 text-lg text-text-secondary">A unified platform for coordination, clarity, and peace of mind.</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <DemoVisualPanel variant="dashboard" />
          <DemoVisualPanel variant="network" />
        </div>

        <div className="mt-4 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeFeatureCards.map((card) => (
            <ColoredBentoCard
              key={card.title}
              {...card}
              className={spanClass[card.span ?? "default"]}
              eyebrow={card.eyebrow}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Built for the people carrying the most.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {audienceSegments.map((segment, index) => (
            <article
              key={segment.title}
              className="bloom-on-hover rounded-premium border border-white/80 bg-white/70 p-6 shadow-glass"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/55">Audience</p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">{segment.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{segment.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-navy/85">
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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title text-navy">AI woven into care, not bolted on top.</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Knightingale’s intelligence works quietly in the background, analyzing needs, surfacing
              priorities, recommending providers, identifying financial support, and helping families make
              better care decisions with less stress.
            </p>
            <div className="mt-6 grid gap-3">
              {aiHighlights.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-4">
                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <DemoVisualPanel variant="careplan" />
            <DemoVisualPanel variant="alerts" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="mb-6 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sapphire">
            <Sparkles className="h-3.5 w-3.5" />
            Personalized AI journey
          </p>
          <h2 className="section-title text-navy">From onboarding to personalized care in minutes.</h2>
          <p className="mt-3 text-base text-text-secondary">
            Explore how Knightingale transforms intake data into immediate personalized results and adaptive care coordination.
          </p>
        </div>
        <PersonalizedCareJourneyTabs steps={journeySteps} />
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">A care platform designed around real life.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {walkthroughBlocks.map((block, index) => (
            <article key={block.title} className="glass-card bloom-on-hover rounded-premium p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sapphire">{block.label}</p>
              <h3 className="mt-2 text-xl font-semibold text-navy">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{block.body}</p>
              <DemoVisualPanel variant={walkthroughVisuals[index] ?? "dashboard"} compact className="mt-4" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Private by design. Trusted when it matters most.</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
          Caregiving data is deeply personal. Knightingale is designed to help families organize sensitive
          information with clarity, control, and confidence.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <DemoVisualPanel variant="documents" />
          <DemoVisualPanel variant="emergency" />
          <DemoVisualPanel variant="alerts" />
        </div>
        <PhotoShowcase items={photoSets.homeTrust} className="mt-4" />
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {trustCards.map((card) => (
            <article key={card.title} className="glass-card rounded-3xl p-4">
              <div className="mb-3 inline-flex rounded-xl bg-tint-navy p-2 text-navy">
                <Shield className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{card.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <div className="glass-card rounded-premium p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Designed in Chicago for modern American caregiving realities.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
                Knightingale was imagined for the complexity of caregiving in the United States, where families
                manage health systems, care providers, finances, government programs, and emotional strain all at
                once. Built with a Chicago mindset: practical, resilient, and deeply human.
              </p>
            </div>
            <DemoVisualPanel variant="city" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-tint-sapphire p-4 text-sm text-navy">Founder vision: dignity + clarity</div>
            <div className="rounded-2xl bg-tint-mint p-4 text-sm text-navy">Why now: rising care complexity</div>
            <div className="rounded-2xl bg-tint-lilac p-4 text-sm text-navy">Market relevance: family-first coordination</div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell mt-24">
        <h2 className="section-title text-navy">Social proof built around real caregiver realities.</h2>
        <p className="mt-3 text-sm text-text-secondary">Sample pilot framing below uses example personas.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <DemoVisualPanel variant="community" />
          <DemoVisualPanel variant="network" />
        </div>
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
            See how Knightingale helps families manage care with more clarity, less stress, and greater confidence.
          </p>
          <div className="mx-auto mt-6 max-w-xl">
            <DemoVisualPanel variant="careplan" compact />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GradientCTAButton href="/early-access" label="Book a Demo" />
            <GradientCTAButton href="/early-access" label="Request Early Access" variant="secondary" />
          </div>
          <p className="mt-5 text-sm text-navy/70">
            <Link href="/platform" className="font-semibold text-sapphire">
              Explore the platform
            </Link>
            {" · "}
            <Link href="/contact" className="font-semibold text-sapphire">
              Talk with our team
            </Link>
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
