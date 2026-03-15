import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Role-specific Knightingale value for family caregivers, seniors, professionals, and partner organizations."
};

const solutionTracks = [
  {
    title: "Family Caregivers",
    desc: "Reduce overload with one system for appointments, tasks, providers, finances, records, and emergency data.",
    points: [
      "Daily dashboard clarity",
      "Provider matching and booking",
      "Financial and eligibility support"
    ],
    tint: "bg-tint-sapphire",
    visual: "careplan" as const
  },
  {
    title: "Seniors",
    desc: "Maintain dignity, visibility, and participation through clear communication and coordinated support.",
    points: [
      "Simple care overview",
      "Shared communication channels",
      "Emergency-ready profile access"
    ],
    tint: "bg-tint-mint",
    visual: "community" as const
  },
  {
    title: "Professional Caregivers",
    desc: "Improve continuity with better handoffs, structured communication, and role-aligned task workflows.",
    points: [
      "Unified household context",
      "Task and schedule alignment",
      "Record sharing without friction"
    ],
    tint: "bg-tint-gold",
    visual: "calendar" as const
  },
  {
    title: "Provider Organizations",
    desc: "Increase visibility and matching quality while streamlining collaboration with families.",
    points: [
      "Marketplace discovery",
      "Fit-score based matching",
      "Operational partnership pathways"
    ],
    tint: "bg-tint-lilac",
    visual: "partnership" as const
  },
  {
    title: "Healthcare & Ecosystem Partners",
    desc: "Bridge home-care realities with clinical systems and support-program coordination.",
    points: [
      "Care continuity insights",
      "Shared communication rails",
      "Benefits and service integration"
    ],
    tint: "bg-tint-sapphire",
    visual: "network" as const
  }
];

export default function SolutionsPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.06fr,0.94fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Solutions</p>
            <h1 className="hero-title mt-4 text-navy">Purpose-built pathways for every stakeholder in care.</h1>
            <p className="mt-5 max-w-3xl text-lg text-text-secondary">
              Knightingale adapts to each role while keeping everyone aligned around one source of truth.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/contact" label="Request Partner Demo" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="partnership" />
        </div>
        <PhotoShowcase items={photoSets.solutions} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionTracks.map((track) => (
            <article key={track.title} className={`glass-card bloom-on-hover rounded-premium p-6 ${track.tint}`}>
              <h2 className="text-2xl font-semibold text-navy">{track.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{track.desc}</p>
              <ul className="mt-4 grid gap-2 text-sm text-navy">
                {track.points.map((point) => (
                  <li key={point} className="rounded-xl bg-white/75 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <DemoVisualPanel variant={track.visual} compact className="mt-5" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Need a tailored solution path for your role?</h2>
              <p className="mt-4 max-w-3xl text-base text-text-secondary">
                We can map the right module stack for family caregiving, professional workflows, or partner deployment.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
                <GradientCTAButton href="/contact" label="Talk To Solutions Team" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="network" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
