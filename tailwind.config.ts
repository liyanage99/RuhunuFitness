import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#22e55c", dark: "#14b844" }, ink: "#000", paper: "#fff", charcoal: "#161616" },
      fontFamily: { display: ["var(--font-display)", "Impact", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
