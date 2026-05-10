import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-fira)", "monospace"],
        display: ["var(--font-clash)", "sans-serif"],
      },
      colors: {
        bg: "#050508",
        surface: "#0d0d14",
        border: "rgba(255,255,255,0.07)",
        accent: "#7c3aed",
        "accent-2": "#06b6d4",
        "accent-3": "#f59e0b",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatMedium: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        borderGlow: {
          "0%,100%": { borderColor: "rgba(124,58,237,0.3)" },
          "50%": { borderColor: "rgba(124,58,237,0.8)" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(124,58,237,0.3)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.3)",
        "glow-amber": "0 0 40px rgba(245,158,11,0.3)",
        "card-hover":
          "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
