import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twmc: {
          black: "#0a0a0a",
          ink: "#111111",
          panel: "#161616",
          stone: "#2a2a2a",
          crack: "#1a1a1a",
          red: "#ff0000",
          blood: "#8B0000",
          ember: "#ff3b3b",
          lava: "#ff6a00",
          ash: "#9a9a9a",
          gold: "#ffb000",
          orange: "#fb923c",
          purple: "#a855f7",
          yellow: "#facc15"
        },
        "twmc-dark": "#0a0a0f",
        "twmc-gray": "#2a2a35",
        "twmc-ash": "#8a8a9a",
        "twmc-gold": "#fbbf24",
        "twmc-orange": "#fb923c",
        "twmc-purple": "#a855f7",
        "twmc-yellow": "#facc15",
        "twmc-red": "#ef4444"
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,0,0,0.45), 0 0 60px rgba(139,0,0,0.35)",
        glowStrong: "0 0 35px rgba(255,0,0,0.7), 0 0 90px rgba(255,0,0,0.45)",
        glowGold: "0 0 20px rgba(255,176,0,0.55), 0 0 60px rgba(255,176,0,0.35)",
        glowOrange: "0 0 20px rgba(251,146,60,0.55), 0 0 60px rgba(251,146,60,0.35)",
        glowPurple: "0 0 20px rgba(168,85,247,0.55), 0 0 60px rgba(168,85,247,0.35)",
        glowYellow: "0 0 20px rgba(250,204,21,0.55), 0 0 60px rgba(250,204,21,0.35)",
        inset: "inset 0 0 30px rgba(255,0,0,0.25)"
      },
      animation: {
        flicker: "flicker 2.6s infinite",
        pulseRed: "pulseRed 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        scan: "scan 8s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        spin360: "spin360 12s linear infinite"
      },
      keyframes: {
        flicker: {
          "0%,18%,22%,25%,53%,57%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.55" }
        },
        pulseRed: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,0,0,0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(255,0,0,0)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 400px" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      backgroundImage: {
        crackedStone:
          "radial-gradient(circle at 20% 20%, #1f1f1f 0%, #0c0c0c 60%), repeating-linear-gradient(45deg, rgba(255,0,0,0.04) 0 2px, transparent 2px 8px)",
        lavaGlow:
          "radial-gradient(ellipse at bottom, rgba(255,60,0,0.35), transparent 60%)"
      }
    }
  },
  plugins: []
};
export default config;
