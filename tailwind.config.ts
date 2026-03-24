import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        chili: {
          black:        "#0a0a0a",
          matte:        "#111111",
          gray:         "#1a1a1a",
          "gray-mid":   "#2a2a2a",
          "gray-light": "#3a3a3a",
          yellow:       "#FFD600",
          "yellow-dim": "#C9A800",
          "yellow-faint":"rgba(255,214,0,0.08)",
          "text-primary":   "#f0ece4",
          "text-secondary": "#8a8075",
          red:          "#C0392B",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-space)", "monospace"],
      },
      fontSize: {
        "display-xl":  ["clamp(3.5rem,10vw,9rem)",   { lineHeight: "0.9",  letterSpacing: "-0.04em" }],
        "display-lg":  ["clamp(2.5rem,6vw,6rem)",    { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md":  ["clamp(1.75rem,4vw,3.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "chapter-num": ["clamp(6rem,15vw,14rem)",    { lineHeight: "1",    letterSpacing: "-0.05em" }],
        "body-lg":     ["1.125rem", { lineHeight: "1.75" }],
        "body-sm":     ["0.875rem", { lineHeight: "1.6"  }],
        label:         ["0.75rem",  { lineHeight: "1.4",  letterSpacing: "0.12em" }],
        caption:       ["0.8125rem",{ lineHeight: "1.5",  letterSpacing: "0.04em" }],
      },
      maxWidth: {
        editorial: "72rem",
        narrow:    "42rem",
        wide:      "90rem",
      },
      aspectRatio: {
        portrait:  "3 / 4",
        landscape: "4 / 3",
        cinema:    "21 / 9",
        story:     "9 / 16",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":    "fadeIn 0.6s ease-out forwards",
        "stamp-drop": "stampDrop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
        grain:        "grain 0.8s steps(1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        stampDrop: {
          "0%":   { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-4deg)" },
        },
        grain: {
          "0%,100%": { backgroundPosition: "0 0" },
          "10%":     { backgroundPosition: "-5% -10%" },
          "30%":     { backgroundPosition: "-15% 5%" },
          "50%":     { backgroundPosition: "7% -25%" },
          "70%":     { backgroundPosition: "0% 15%" },
          "90%":     { backgroundPosition: "-5% 5%" },
        },
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16,1,0.3,1)",
        snap:      "cubic-bezier(0.34,1.56,0.64,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
