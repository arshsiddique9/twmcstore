import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "twmc-dark": "#0a0a0f",
        "twmc-gray": "#2a2a35",
        "twmc-ash": "#8a8a9a",
        "twmc-gold": "#fbbf24",
        "twmc-orange": "#fb923c",
        "twmc-purple": "#a855f7",
        "twmc-yellow": "#facc15",
        "twmc-red": "#ef4444",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
