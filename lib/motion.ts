import { Variants } from "framer-motion";

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const motionDurations = {
  fast: 0.35,
  base: 0.45,
  slow: 0.55
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.base,
      ease: premiumEase
    }
  }
};

export const staggerContainer = (delay = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.06
    }
  }
});

export const hoverLift = {
  y: -6,
  scale: 1.01,
  transition: {
    duration: motionDurations.fast,
    ease: premiumEase
  }
};

export const shimmerSweep: Variants = {
  initial: { x: "-120%", opacity: 0 },
  hover: {
    x: "120%",
    opacity: [0, 0.45, 0],
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};
