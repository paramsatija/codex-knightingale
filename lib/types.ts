export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  tint: "sapphire" | "mint" | "lilac" | "gold" | "navy";
  icon: string;
};

export type BentoCard = FeatureCard & {
  eyebrow?: string;
  span?: "wide" | "tall" | "default";
};

export type JourneyStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  tint: "sapphire" | "mint" | "lilac" | "gold";
};

export type AudienceSegment = {
  title: string;
  summary: string;
  points: string[];
  tint: "sapphire" | "mint" | "lilac";
};

export type TestimonialEntry = {
  quote: string;
  persona: string;
  role: string;
};

export type FormFieldConfig = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type SeoMeta = {
  title: string;
  description: string;
};

export type FeatureShowcaseEntry = {
  id: string;
  title: string;
  category: string;
  summary: string;
  demoVariant:
    | "dashboard"
    | "timeline"
    | "finance"
    | "alerts"
    | "careplan"
    | "network"
    | "documents"
    | "calendar"
    | "onboarding"
    | "community"
    | "emergency"
    | "partnership"
    | "pricing"
    | "city";
  tint: "sapphire" | "mint" | "lilac" | "gold" | "navy";
  highlights: string[];
  outcome: string;
};
