import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050507",
        surface: "#0A0A0B",
        accent: "#22D3EE",
        violet: "#A78BFA",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Syne", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
