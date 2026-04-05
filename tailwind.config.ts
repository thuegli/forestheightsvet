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
        teal: {
          light: "#b9e4f3",
          medium: "#94d1e7",
          DEFAULT: "#28add1",
          dark: "#297692",
          darkest: "#143b49",
        },
        coral: {
          light: "#ffd2cc",
          medium: "#fca599",
          DEFAULT: "#f56a56",
          dark: "#ec4a34",
          darkest: "#ca2913",
        },
        brand: {
          green: "#8cd624",
          "green-dark": "#5d8f18",
          blue: "#2f89f7",
          "blue-dark": "#1f5ba5",
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
