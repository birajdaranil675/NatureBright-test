import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./sanity/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: {
    brand: { purple: "#39248C", green: "#176B45", fresh: "#36A84C", orange: "#E79422", pale: "#EFF7F0" }
  }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } },
  plugins: []
};
export default config;