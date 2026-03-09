import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)"
        },
        border: "var(--color-hairline)",
        navy: "var(--color-navy)",
        sapphire: "var(--color-sapphire)",
        mint: "var(--color-mint)",
        lilac: "var(--color-lilac)",
        coral: "var(--color-coral)",
        gold: "var(--color-gold)",
        tint: {
          sapphire: "var(--tint-sapphire)",
          mint: "var(--tint-mint)",
          lilac: "var(--tint-lilac)",
          gold: "var(--tint-gold)",
          navy: "var(--tint-navy)"
        }
      },
      fontFamily: {
        heading: ["Avenir Next", "Segoe UI", "ui-sans-serif", "sans-serif"],
        body: ["Avenir Next", "Segoe UI", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        glass: "0 8px 24px rgba(17, 18, 20, 0.08), 0 2px 8px rgba(17, 18, 20, 0.06)",
        float: "0 12px 40px rgba(44, 66, 117, 0.14), 0 4px 16px rgba(44, 66, 117, 0.08)"
      },
      borderRadius: {
        premium: "28px"
      },
      backdropBlur: {
        premium: "20px"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
