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
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          lightest: "#e8f5e9",
          light: "#66bb6a",
          DEFAULT: "#2e7d32",
          dark: "#1b5e20",
          darkest: "#0d3311",
        },
        teal: {
          light: "#b9e4f3",
          DEFAULT: "#28add1",
          dark: "#297692",
        },
        coral: {
          light: "#ffd2cc",
          DEFAULT: "#f56a56",
          dark: "#ec4a34",
          darkest: "#ca2913",
        },
      },
      fontFamily: {
        sans: ["var(--font-opensans)", "system-ui", "sans-serif"],
        heading: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
