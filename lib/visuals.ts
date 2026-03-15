export type VisualPhoto = {
  src: string;
  alt: string;
  label: string;
  source: "Unsplash" | "Pexels";
};

export const photoSets = {
  homeHero: [
    {
      src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80",
      alt: "Caregiver reviewing notes with a senior in a bright living room",
      label: "Family caregiving",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7088484/pexels-photo-7088484.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Senior smiling during an at-home support visit",
      label: "Dignified independence",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80",
      alt: "Nurse and caregiver discussing care plan on a tablet",
      label: "Professional coordination",
      source: "Unsplash"
    }
  ],
  homeTrust: [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
      alt: "Closeup of medical records and secure tablet setup",
      label: "Protected records",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Emergency responder reviewing patient information",
      label: "Emergency readiness",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
      alt: "Doctor and family member discussing treatment options",
      label: "Clear communication",
      source: "Unsplash"
    }
  ],
  features: [
    {
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
      alt: "Caregiver and senior smiling together during a supportive conversation",
      label: "Human-centered care",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7089408/pexels-photo-7089408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Professional caregiver reviewing a care schedule on a tablet",
      label: "Coordinated workflows",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
      alt: "Healthcare professional speaking with a family in a bright setting",
      label: "Trusted decisions",
      source: "Unsplash"
    }
  ],
  platform: [
    {
      src: "https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Care team in discussion with digital dashboards in the background",
      label: "Command center",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80",
      alt: "Caregiver helping senior organize medication and appointments",
      label: "Daily flow",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Professional caregiver coordinating schedules with a family member",
      label: "Team alignment",
      source: "Pexels"
    }
  ],
  solutions: [
    {
      src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
      alt: "Adult daughter supporting her mother at home",
      label: "For families",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Senior in a bright apartment smiling while using a digital device",
      label: "For seniors",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80",
      alt: "Professional caregiver at bedside documenting care steps",
      label: "For professionals",
      source: "Unsplash"
    }
  ],
  howItWorks: [
    {
      src: "https://images.pexels.com/photos/7088494/pexels-photo-7088494.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Hands using a tablet during onboarding workflow",
      label: "Guided onboarding",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
      alt: "Caregiver and senior reviewing personalized recommendations",
      label: "Personalized results",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Care provider coordinating calendar and task updates",
      label: "Daily execution",
      source: "Pexels"
    }
  ],
  about: [
    {
      src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
      alt: "Team discussing mission and roadmap in a studio",
      label: "Mission",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Founders collaborating around a product strategy wall",
      label: "Why now",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
      alt: "Provider and family aligned around one care conversation",
      label: "Care dignity",
      source: "Unsplash"
    }
  ],
  contact: [
    {
      src: "https://images.pexels.com/photos/7551619/pexels-photo-7551619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Care specialist on a support call in a modern workspace",
      label: "Talk with us",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
      alt: "Collaborative planning meeting with laptops and notes",
      label: "Partnerships",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/7088491/pexels-photo-7088491.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Support team member reviewing incoming inquiries",
      label: "Fast follow-up",
      source: "Pexels"
    }
  ],
  pricing: [
    {
      src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
      alt: "Planning budget and care decisions at a desk",
      label: "Plan clarity",
      source: "Unsplash"
    },
    {
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Team discussing package options on a screen",
      label: "Right fit",
      source: "Pexels"
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80",
      alt: "Consultation meeting for long-term care planning",
      label: "Strategic support",
      source: "Unsplash"
    }
  ]
} satisfies Record<string, VisualPhoto[]>;
