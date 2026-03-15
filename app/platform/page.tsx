import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { AppMockupFrame } from "@/components/AppMockupFrame";
import { ColoredBentoCard } from "@/components/ColoredBentoCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { SplitFeatureBlock } from "@/components/SplitFeatureBlock";
import { platformFeatureMap } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Platform",
  description: "Explore Knightingale's full care operating system for families, seniors, and professionals."
};

export default function PlatformPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Platform overview</p>
        <h1 className="hero-title mt-4 text-navy">The intelligent care platform built for real life.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
          Knightingale unifies care coordination, provider discovery, financial context, and emergency readiness
          in one modern care operating system.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <DemoVisualPanel variant="dashboard" />
          <DemoVisualPanel variant="careplan" />
        </div>
        <PhotoShowcase items={photoSets.platform} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {platformFeatureMap.map((item) => (
            <ColoredBentoCard key={item.title} {...item} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <SplitFeatureBlock
          eyebrow="Dashboard detail"
          title="A calm command center for care decisions"
          body="Priorities, care tasks, provider updates, and health alerts are surfaced in one glance so families can make faster, better decisions."
          points={[
            "Urgent vs. upcoming separation",
            "Care readiness and risk signals",
            "Cross-household activity timeline"
          ]}
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Smart dashboard"
                subtitle="Today"
                rows={[
                  { label: "Priority actions", value: "3" },
                  { label: "Medication reminders", value: "5" },
                  { label: "Provider updates", value: "2" }
                ]}
              />
              <DemoVisualPanel variant="dashboard" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Marketplace"
          title="Provider discovery with better fit intelligence"
          body="Search providers by care profile, continuity preferences, schedule, and budget with transparent match scoring."
          points={[
            "AI fit score per profile",
            "Availability and response SLAs",
            "Continuity-aware recommendations"
          ]}
          reverse
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Provider marketplace"
                subtitle="Recommended"
                rows={[
                  { label: "Top match", value: "93" },
                  { label: "In-network options", value: "5" },
                  { label: "Avg response", value: "< 2h" }
                ]}
              />
              <DemoVisualPanel variant="network" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Calendar + Tasks"
          title="Shared execution for day-to-day care"
          body="Appointments, medications, errands, and home responsibilities stay aligned with clear ownership across family and professional teams."
          points={[
            "Role-based assignments",
            "Conflict detection in schedules",
            "Reminder intelligence"
          ]}
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Care schedule"
                subtitle="This week"
                rows={[
                  { label: "Appointments", value: "6" },
                  { label: "Tasks done", value: "81%" },
                  { label: "Conflicts", value: "1" }
                ]}
              />
              <DemoVisualPanel variant="calendar" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Messaging + Vault"
          title="Secure communication and documents in one flow"
          body="Sensitive conversations and critical records stay structured, permission-aware, and easy to retrieve."
          points={[
            "Private care threads",
            "Document version awareness",
            "Critical file quick access"
          ]}
          reverse
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Secure records"
                subtitle="Vault"
                rows={[
                  { label: "Legal docs", value: "12" },
                  { label: "Coverage files", value: "9" },
                  { label: "Recent shares", value: "4" }
                ]}
              />
              <DemoVisualPanel variant="documents" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Financial + Eligibility + Health"
          title="Care economics and health signals without spreadsheet chaos"
          body="Track likely costs, benefits opportunities, and evolving health trends to reduce surprises and make proactive choices."
          points={[
            "Out-of-pocket forecasting",
            "Program eligibility flags",
            "Trend-based health summaries"
          ]}
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Planning intelligence"
                subtitle="30-day view"
                rows={[
                  { label: "Budget variance", value: "+4%" },
                  { label: "Eligible programs", value: "3" },
                  { label: "Health signal trend", value: "Watch" }
                ]}
              />
              <DemoVisualPanel variant="finance" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Emergency + Pet care"
          title="Prepared for urgent moments and household realities"
          body="Critical profile access and pet care management keep families resilient across unexpected events and daily routines."
          points={[
            "Emergency profile card",
            "Instant instructions and contacts",
            "Pet meds and appointment tracking"
          ]}
          reverse
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Emergency ready"
                subtitle="One-tap profile"
                rows={[
                  { label: "Critical data completeness", value: "96%" },
                  { label: "Emergency contacts", value: "4" },
                  { label: "Pet-care tasks", value: "7" }
                ]}
              />
              <DemoVisualPanel variant="emergency" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">AI engine that supports people, not replaces them.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
                The intelligence layer helps synthesize complexity and prioritize care actions while families and care
                professionals stay in control of decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist" />
                <GradientCTAButton href="/contact" label="Talk To Knightingale" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="onboarding" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
