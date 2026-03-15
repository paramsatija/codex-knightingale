import type { Metadata } from "next";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactFormCard } from "@/components/ContactFormCard";
import { DemoVisualPanel } from "@/components/DemoVisualPanel";
import { GradientCTAButton } from "@/components/GradientCTAButton";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { contactFields } from "@/lib/content";
import { photoSets } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with Knightingale about demos, partnerships, and onboarding support."
};

const contactCards = [
  { label: "Email", value: "hello@knightingale.ai", tint: "bg-tint-sapphire" },
  { label: "Headquarters", value: "Chicago, Illinois, USA", tint: "bg-tint-mint" },
  { label: "Response Time", value: "Typically within 1 business day", tint: "bg-tint-gold" }
];

export default function ContactPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Contact</p>
            <h1 className="hero-title mt-4 text-navy">Let’s design a better care experience together.</h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Reach out for product demos, provider partnerships, implementation planning, or early access support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="See Feature Demos" variant="secondary" />
            </div>

            <DemoVisualPanel variant="partnership" className="mt-6" />
            <PhotoShowcase items={photoSets.contact} compact className="mt-4" />

            <div className="mt-8 grid gap-3">
              {contactCards.map((card) => (
                <div key={card.label} className={`glass-card rounded-2xl p-4 text-sm text-navy ${card.tint}`}>
                  <p className="font-semibold">{card.label}</p>
                  <p className="mt-1 text-text-secondary">{card.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <DemoVisualPanel variant="network" compact />
            <ContactFormCard
              title="Book Demo Or Send Inquiry"
              subtitle="Share your context and goals. We’ll route you to the right next step quickly."
              ctaLabel="Send Inquiry"
              fields={contactFields}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
