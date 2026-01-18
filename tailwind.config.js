/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ================= CORE PALETTE ================= */
        walnut: "#4A2C2A",
        sandstone: "#E6D3B1",
        snow: "#FAFAFA",
        charcoal: "#1F2937",

        /* ================= LIGHT MODE ================= */
        light: {
          bg: "#FAFAFA",            // main background
          surface: "#FFFFFF",       // cards
          section: "#E6D3B1",        // soft sections
          text: "#1F2937",           // primary text
          textMuted: "#6B7280",
          border: "#E5E7EB",
          accent: "#4A2C2A",         // CTAs
        },

        /* ================= DARK MODE ================= */
        dark: {
          bg: "#111827",             // softer than pure black
          surface: "#1F2937",        // cards
          section: "#2A1E1D",         // walnut-tinted dark
          text: "#FAFAFA",
          textMuted: "#CBD5E1",
          border: "#374151",
          accent: "#E6D3B1",          // sandstone glow
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        fade: "fadeIn 0.6s ease-out forwards",
        glow: "glow 3.5s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(230,211,177,0.15)" },
          "50%": { boxShadow: "0 0 22px rgba(230,211,177,0.35)" },
        },
      },
    },
  },
  plugins: [],
};
