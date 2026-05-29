/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3b82f6",
          soft: "#60a5fa",
          dim: "#1d4ed8",
        },
        ink: {
          900: "#0a0a0a",
          800: "#0f0f10",
          700: "#141416",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 8vw, 6rem)",
          { lineHeight: "1.05", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3.5vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(59, 130, 246, 0.45)",
        ring: "0 0 0 1px rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
