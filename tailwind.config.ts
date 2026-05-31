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
        navy: "#0A1628",
        "navy-mid": "#102240",
        "navy-light": "#1A3560",
        blue: "#1565C0",
        "blue-mid": "#0D47A1",
        cyan: "#00C8E8",
        "cyan-light": "#5DE8F8",
        "cyan-dark": "#0099BB",
        "off-white": "#F0F8FF",
        "light-gray": "#E8F0F8",
        "warm-blue": "#E8F2FF",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0A1628 0%, #102240 50%, #0D47A1 100%)",
        "gradient-cyan": "linear-gradient(135deg, #0099BB 0%, #00C8E8 100%)",
        "gradient-hero": "linear-gradient(135deg, #0A1628 0%, #102240 40%, #1565C0 100%)",
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(0, 200, 232, 0.15)",
        "glow-cyan": "0 0 30px rgba(0, 200, 232, 0.3)",
        "glow-blue": "0 0 40px rgba(21, 101, 192, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
