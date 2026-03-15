import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "About",
  description: "Why Knightingale exists and how we are redesigning caregiving with compassion and intelligence."
};

const principles = [
  {
    title: "Compassion first",
    text: "Caregiving is emotional and human. Technology must reduce burden, not increase it.",
    tint: "bg-tint-mint"
  },
  {
    title: "Clarity over noise",
    text: "Families need decisions, not dashboards full of clutter. We prioritize signal over volume.",
    tint: "bg-tint-sapphire"
  },
  {
    title: "Dignity for seniors",
    text: "Seniors should remain active participants in care planning and communication.",
    tint: "bg-tint-gold"
  },
  {
    title: "Trust by design",
    text: "Sensitive care data demands careful access, secure structure, and responsible defaults.",
    tint: "bg-tint-lilac"
  }
];

const timeline = [
  "Caregiving complexity grew beyond disconnected tools.",
  "Families and providers needed one shared operating layer.",
  "Knightingale was designed in Chicago for real U.S. care realities.",
  "AI was integrated to guide action, not replace human judgment."
];

export default function AboutPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">About Knightingale</p>
            <h1 className="hero-title mt-4 text-navy">Technology should reduce care burden, not add to it.</h1>
            <p className="mt-6 max-w-3xl text-lg text-text-secondary">
              Knightingale combines vigilance and compassion to help caregivers and seniors coordinate care with
              more confidence, dignity, and calm.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="Explore Features" variant="secondary" />
            </div>
          </div>
          <DemoVisualPanel variant="city" />
        </div>
        <PhotoShowcase items={photoSets.about} className="mt-4" />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className={`glass-card rounded-premium p-6 ${item.tint}`}>
              <h2 className="text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="glass-card rounded-premium p-8">
          <h2 className="section-title text-navy">Why Knightingale exists now</h2>
          <div className="mt-6 grid gap-3">
            {timeline.map((point, index) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/75 px-4 py-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sapphire/12 text-xs font-semibold text-sapphire">
                  {index + 1}
                </span>
                <p className="text-sm text-navy/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <div className="glass-card rounded-premium p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="section-title text-navy">Based in Chicago. Built for modern American caregiving realities.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
                From provider coordination to benefits navigation, Knightingale is designed around what families and
                seniors actually face every day across health systems, finances, and emergency moments.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <GradientCTAButton href="/early-access" label="Join Waitlist Now" />
                <GradientCTAButton href="/contact" label="Talk To Our Team" variant="secondary" />
              </div>
            </div>
            <DemoVisualPanel variant="partnership" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
