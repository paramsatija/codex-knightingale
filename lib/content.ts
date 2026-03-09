import type {
  AudienceSegment,
  BentoCard,
  FeatureCard,
  FormFieldConfig,
  JourneyStep,
  NavItem,
  TestimonialEntry
} from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const heroMetrics = [
  { label: "Family tasks aligned", value: "24/7" },
  { label: "Care moments surfaced", value: "Real-time" },
  { label: "Emergency readiness", value: "One tap" }
];

export const problemCards: FeatureCard[] = [
  {
    title: "Information overload",
    description: "Medical notes, benefits, schedules, and documents are spread across disconnected places.",
    tint: "sapphire",
    icon: "FileSearch"
  },
  {
    title: "Decision fatigue",
    description: "Families make urgent care decisions without a clear, shared view of what matters most.",
    tint: "lilac",
    icon: "AlarmClock"
  },
  {
    title: "Financial strain",
    description: "Costs, coverage, and long-term planning are difficult to track while care needs keep changing.",
    tint: "gold",
    icon: "Landmark"
  },
  {
    title: "Emergency unpreparedness",
    description: "Critical data is often unavailable when a hospital, provider, or crisis response needs it fast.",
    tint: "mint",
    icon: "ShieldAlert"
  }
];

export const homeFeatureCards: BentoCard[] = [
  {
    title: "AI Care Plans",
    description: "Turn scattered details into a clear care plan with priorities and next best actions.",
    tint: "sapphire",
    icon: "ClipboardList",
    span: "wide"
  },
  {
    title: "Dashboard & Alerts",
    description: "A calm center for what changed today and what needs attention next.",
    tint: "navy",
    icon: "BellRing"
  },
  {
    title: "Care Provider Marketplace",
    description: "Compare and book caregivers with fit scores, ratings, and availability.",
    tint: "mint",
    icon: "Stethoscope",
    span: "tall"
  },
  {
    title: "Shared Calendar",
    description: "Keep appointments, refill deadlines, and home care visits synchronized.",
    tint: "sapphire",
    icon: "CalendarDays"
  },
  {
    title: "Task Board",
    description: "Assign and complete care tasks across family and professional teams.",
    tint: "lilac",
    icon: "ClipboardList"
  },
  {
    title: "Messaging",
    description: "Private care threads for updates, instructions, and check-ins.",
    tint: "mint",
    icon: "MessageSquareHeart"
  },
  {
    title: "Document Vault",
    description: "Store legal, insurance, and medical documents with controlled sharing.",
    tint: "navy",
    icon: "FileLock2",
    span: "wide"
  },
  {
    title: "Knowledge Library",
    description: "Practical caregiving guidance tailored to conditions and care stage.",
    tint: "gold",
    icon: "BookOpenText"
  },
  {
    title: "Community Forums",
    description: "Learn from peers and caregivers navigating similar realities.",
    tint: "lilac",
    icon: "Users"
  },
  {
    title: "Benefits Checker",
    description: "Surface support options and likely eligibility for key programs.",
    tint: "mint",
    icon: "FileSearch"
  },
  {
    title: "Financial Planning",
    description: "Track care spend and forecast likely coverage and out-of-pocket gaps.",
    tint: "gold",
    icon: "CreditCard"
  },
  {
    title: "Health Monitoring",
    description: "Watch signals and trends to identify meaningful changes early.",
    tint: "sapphire",
    icon: "HeartPulse"
  },
  {
    title: "Emergency Access",
    description: "Instantly surface critical profile details and instructions.",
    tint: "navy",
    icon: "ShieldCheck"
  },
  {
    title: "Pet Care Management",
    description: "Coordinate feeding, meds, appointments, and backup pet support.",
    tint: "mint",
    icon: "PawPrint"
  }
];

export const audienceSegments: AudienceSegment[] = [
  {
    title: "For family caregivers",
    summary:
      "Coordinate appointments, tasks, providers, finances, and health updates without juggling disconnected tools.",
    points: [
      "Single source of truth for the whole family",
      "Clear ownership on every task",
      "Less chaos during urgent situations"
    ],
    tint: "sapphire"
  },
  {
    title: "For seniors",
    summary:
      "Stay involved in your care, communicate clearly, and maintain independence with one easy experience.",
    points: [
      "Simple, readable daily view",
      "Easy check-ins with trusted people",
      "Documents and instructions ready when needed"
    ],
    tint: "mint"
  },
  {
    title: "For professional caregivers",
    summary:
      "Work more seamlessly with families, manage responsibilities, and stay aligned around care decisions.",
    points: [
      "Fewer communication gaps",
      "Faster handoffs and continuity",
      "Better visibility into family context"
    ],
    tint: "lilac"
  }
];

export const aiHighlights = [
  {
    title: "Care plan generation",
    detail: "Transforms onboarding inputs into a practical weekly care plan."
  },
  {
    title: "Provider match scoring",
    detail: "Ranks provider options by needs, budget, and continuity preference."
  },
  {
    title: "Eligibility intelligence",
    detail: "Flags potential support programs and likely qualification status."
  },
  {
    title: "Health signal monitoring",
    detail: "Surfaces trend changes and alert severity summaries."
  },
  {
    title: "Financial gap forecasting",
    detail: "Projects care costs and highlights planning risks early."
  }
];

export const walkthroughBlocks = [
  {
    label: "Step 01",
    title: "Personalized onboarding",
    body: "Capture household needs, medical context, responsibilities, and preferences in minutes."
  },
  {
    label: "Step 02",
    title: "Smart dashboard",
    body: "See priorities, urgent items, and upcoming milestones in one calm command center."
  },
  {
    label: "Step 03",
    title: "Provider marketplace",
    body: "Find the right provider with transparent fit signals and practical availability."
  },
  {
    label: "Step 04",
    title: "Calendar & task board",
    body: "Keep everyone coordinated with shared responsibilities and synchronized scheduling."
  },
  {
    label: "Step 05",
    title: "Secure docs & messaging",
    body: "Keep sensitive files and care communication organized, private, and easy to access."
  },
  {
    label: "Step 06",
    title: "Emergency-ready access",
    body: "Critical information remains one tap away when every second matters."
  }
];

export const journeySteps: JourneyStep[] = [
  {
    id: "onboarding",
    label: "AI Onboarding",
    title: "Structured intake built around real family complexity",
    description:
      "Knightingale collects medical context, care goals, household responsibilities, finances, and provider history through a guided, plain-language flow.",
    highlights: [
      "Condition and medication profile",
      "Family availability map",
      "Budget and support constraints"
    ],
    tint: "sapphire"
  },
  {
    id: "results",
    label: "Personalized Results",
    title: "Clear priorities surfaced instantly",
    description:
      "The platform summarizes risks, upcoming needs, possible eligibility support, and care bottlenecks into one prioritized view.",
    highlights: [
      "Top 3 urgent actions",
      "Eligibility opportunities",
      "Care risk and readiness score"
    ],
    tint: "lilac"
  },
  {
    id: "care-plan",
    label: "Personalized Care",
    title: "A coordinated plan your whole team can follow",
    description:
      "AI generates a tailored care plan and task rhythm that aligns family members, seniors, and professional caregivers.",
    highlights: [
      "Weekly care agenda",
      "Role-based task assignments",
      "Provider and appointment alignment"
    ],
    tint: "mint"
  },
  {
    id: "adaptive",
    label: "Adaptive Support",
    title: "Care evolves automatically as life changes",
    description:
      "Knightingale keeps updating recommendations, schedules, and alerts as health signals and availability shift.",
    highlights: [
      "Live dashboard updates",
      "Predictive notifications",
      "Emergency-ready profile sync"
    ],
    tint: "gold"
  }
];

export const trustCards = [
  {
    title: "Secure profiles",
    text: "Sensitive data is organized with role-aware visibility and thoughtful privacy controls."
  },
  {
    title: "Permission-aware access",
    text: "Family and professional teams see what they need, when they need it."
  },
  {
    title: "Protected document storage",
    text: "Key records stay accessible and controlled in one encrypted-ready workflow."
  },
  {
    title: "Emergency-ready information",
    text: "Critical details can be surfaced quickly during urgent events."
  },
  {
    title: "Reliable communication structure",
    text: "Care updates stay traceable, contextual, and less likely to be missed."
  }
];

export const testimonials: TestimonialEntry[] = [
  {
    quote: "Built around real caregiver pain points from day one, not abstract feature lists.",
    persona: "Pilot Persona",
    role: "Adult daughter caregiver"
  },
  {
    quote: "Designed to reduce burnout and restore control when family logistics are overwhelming.",
    persona: "Example Persona",
    role: "Primary family coordinator"
  },
  {
    quote: "Created for the daily reality of elder care, not an idealized version of it.",
    persona: "Pilot Persona",
    role: "Professional in-home caregiver"
  }
];

export const platformFeatureMap: FeatureCard[] = [
  {
    title: "Command dashboard",
    description: "Unified care visibility with alerts, trend summaries, and next actions.",
    tint: "sapphire",
    icon: "BellRing"
  },
  {
    title: "Marketplace",
    description: "Provider discovery and matching with transparent fit and availability.",
    tint: "mint",
    icon: "Stethoscope"
  },
  {
    title: "Calendar + tasks",
    description: "Scheduling and accountability across family and professional teams.",
    tint: "lilac",
    icon: "CalendarDays"
  },
  {
    title: "Messaging + vault",
    description: "Private communication and secure document coordination in one flow.",
    tint: "navy",
    icon: "FileLock2"
  },
  {
    title: "Financial + benefits",
    description: "Forecast costs, track payments, and discover likely support programs.",
    tint: "gold",
    icon: "CreditCard"
  },
  {
    title: "Health + emergency",
    description: "Signal tracking and rapid critical-information access for urgent moments.",
    tint: "sapphire",
    icon: "ShieldAlert"
  }
];

export const solutionTiles = [
  {
    title: "Family caregivers",
    desc: "Less coordination chaos, clearer ownership, and confidence during emergencies."
  },
  {
    title: "Seniors",
    desc: "Maintain dignity and independence while staying connected to trusted support."
  },
  {
    title: "Professional caregivers",
    desc: "Coordinate with households with less friction and better continuity."
  },
  {
    title: "Provider organizations",
    desc: "Improve communication quality and reduce administrative back-and-forth."
  },
  {
    title: "Healthcare partners",
    desc: "Bridge home realities with system-level care workflows and collaboration."
  }
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Create account",
    desc: "Set up family profile and baseline care context."
  },
  {
    number: "02",
    title: "Complete 3-step onboarding",
    desc: "Share goals, constraints, and household details in plain language."
  },
  {
    number: "03",
    title: "Receive AI care plan",
    desc: "Get personalized priorities and a practical week-one roadmap."
  },
  {
    number: "04",
    title: "Coordinate daily care",
    desc: "Run calendar, tasks, documents, and messaging from one platform."
  },
  {
    number: "05",
    title: "Book providers + manage tasks",
    desc: "Find the right support and keep everyone aligned on execution."
  },
  {
    number: "06",
    title: "Stay emergency-ready",
    desc: "Keep critical information accessible and current for urgent events."
  }
];

export const contactFields: FormFieldConfig[] = [
  { id: "fullName", label: "Full name", type: "text", required: true, placeholder: "Alex Morgan" },
  {
    id: "company",
    label: "Company / organization",
    type: "text",
    placeholder: "Optional"
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "name@email.com"
  },
  { id: "phone", label: "Phone", type: "tel", placeholder: "+1 (312) 555-0188" },
  {
    id: "role",
    label: "Role",
    type: "select",
    required: true,
    options: ["Caregiver", "Provider", "Partner", "Investor", "Other"]
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell us how Knightingale can support your care goals."
  }
];

export const earlyAccessFields: FormFieldConfig[] = [
  { id: "name", label: "Full name", type: "text", required: true, placeholder: "Jordan Lee" },
  { id: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  {
    id: "interest",
    label: "I am joining as",
    type: "select",
    required: true,
    options: ["Family caregiver", "Senior", "Professional caregiver", "Provider organization", "Partner"]
  },
  {
    id: "goals",
    label: "Care goals",
    type: "textarea",
    placeholder: "Share your top priorities so we can tailor your demo and onboarding."
  }
];
