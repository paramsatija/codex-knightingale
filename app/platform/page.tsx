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
  description: "Deep overview of Knightingale’s complete caregiving operating system."
};

export default function PlatformPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Platform overview</p>
            <h1 className="hero-title mt-4 text-navy">A full care operating system for modern families.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
              Knightingale unifies registration, onboarding, planning, provider booking, communication, records, finance,
              health signals, emergency readiness, and settings in one coordinated experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="Open Feature Demos" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="dashboard" />
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

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Registration + Onboarding"
          title="Role-based registration and three-step personalization"
          body="Users select caregiver or senior role, then complete health needs, caregiver profile, and AI care plan generation in a guided flow."
          points={[
            "Condition and mobility capture",
            "Stress and support network insights",
            "AI-generated priorities and recommendations"
          ]}
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Onboarding flow"
                subtitle="3 steps"
                rows={[
                  { label: "Care conditions selected", value: "4" },
                  { label: "Stress profile", value: "High" },
                  { label: "Generated plan actions", value: "9" }
                ]}
              />
              <DemoVisualPanel variant="onboarding" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Daily command center"
          title="Dashboard, alerts, quick actions, tasks, and events"
          body="The dashboard surfaces what matters now and connects users directly to provider search, support groups, transport scheduling, and active tasks."
          points={[
            "Severity-ranked alerts",
            "Upcoming events timeline",
            "Recent messages and active tasks"
          ]}
          reverse
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Personalized dashboard"
                subtitle="Live status"
                rows={[
                  { label: "Critical alerts", value: "2" },
                  { label: "Today events", value: "5" },
                  { label: "Incomplete tasks", value: "7" }
                ]}
              />
              <DemoVisualPanel variant="dashboard" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Operations layer"
          title="Marketplace, calendar, Kanban, messaging, and vault"
          body="Core care logistics are connected so families can find providers, book support, manage schedules, move tasks, communicate, and share records without tool switching."
          points={[
            "Search + shortlist + book providers",
            "Month calendar with medical/personal/transport coding",
            "Real-time chat and secure document previews"
          ]}
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Care operations"
                subtitle="Connected modules"
                rows={[
                  { label: "Provider matches", value: "5" },
                  { label: "Calendar events", value: "12" },
                  { label: "Vault files", value: "21" }
                ]}
              />
              <DemoVisualPanel variant="documents" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SplitFeatureBlock
          eyebrow="Intelligence layer"
          title="Eligibility, finance projection, health monitoring, emergency, pet care, settings"
          body="AI supports decisions across benefits, budgeting, health risks, and emergency response while keeping profiles, notifications, and security controls manageable."
          points={[
            "Eligibility confidence scoring",
            "Monthly care cost and gap forecasting",
            "Emergency one-tap profile and settings governance"
          ]}
          reverse
          visual={
            <div className="grid gap-3">
              <AppMockupFrame
                title="Intelligence engine"
                subtitle="Care risk + finance"
                rows={[
                  { label: "Program matches", value: "6" },
                  { label: "Monthly cost gap", value: "$420" },
                  { label: "Risk score", value: "Moderate" }
                ]}
              />
              <DemoVisualPanel variant="finance" compact />
            </div>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Want this full platform configured for your care scenario?</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Join waitlist onboarding and we’ll tailor the first rollout to your conditions, household dynamics, and care goals.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
                <GradientCTAButton href="/contact" label="Book Platform Demo" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="careplan" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
