import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "480px",
        "small": "576px",
        "medium": "768px",
        "large": "1024px",
        "xlarge": "1200px",
        "2xlarge": "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
