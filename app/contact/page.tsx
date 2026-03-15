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
  description: "Get in touch with Knightingale for demos, partnerships, and inquiries."
};

export default function ContactPage() {
  return (
    <div className="container-shell pb-20 pt-14">
      <AnimatedSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sapphire">Contact</p>
            <h1 className="hero-title mt-4 text-navy">Let’s design better care coordination together.</h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Reach out for demo requests, early access, partnership conversations, or strategic collaboration.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GradientCTAButton href="/early-access" label="Join Waitlist" />
              <GradientCTAButton href="/features" label="View Features" variant="secondary" />
            </div>

            <DemoVisualPanel variant="city" className="mt-6" />
            <PhotoShowcase items={photoSets.contact} compact className="mt-4" />

            <div className="mt-8 grid gap-3">
              <div className="glass-card rounded-2xl p-4 text-sm text-navy">
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-text-secondary">hello@knightingale.ai</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-sm text-navy">
                <p className="font-semibold">Presence</p>
                <p className="mt-1 text-text-secondary">Chicago, Illinois, USA</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-sm text-navy">
                <p className="font-semibold">Trust note</p>
                <p className="mt-1 text-text-secondary">
                  We treat all inquiry information with care and use it only for direct follow-up.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <DemoVisualPanel variant="partnership" compact />
            <ContactFormCard
              title="Send Inquiry"
              subtitle="Tell us your context and goals. We will follow up with the right next step."
              ctaLabel="Send Inquiry"
              fields={contactFields}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
