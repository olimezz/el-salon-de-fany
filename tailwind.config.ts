import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F4",
        sand: "#F3ECE4",
        charcoal: "#1E1B18",
        terracotta: "#A66A46",
        terracottaDark: "#8B5535",
        champagne: "#C89D7C",
        warmGray: "#5A524A",
        borderWarm: "#E6DDD3",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.25rem, 4.5vw + 1rem, 4.25rem)",
        "fluid-h2": "clamp(1.75rem, 3vw + 0.85rem, 3rem)",
        "fluid-h3": "clamp(1.25rem, 1.5vw + 0.75rem, 1.75rem)",
        "fluid-lead": "clamp(1.05rem, 0.75vw + 0.85rem, 1.25rem)",
        "fluid-body": "clamp(0.95rem, 0.35vw + 0.85rem, 1.0625rem)",
      },
      boxShadow: {
        editorial: "0 12px 32px -12px rgba(30, 27, 24, 0.08)",
        "editorial-hover": "0 20px 42px -14px rgba(166, 106, 70, 0.16)",
        glass: "0 8px 32px rgba(30, 27, 24, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
