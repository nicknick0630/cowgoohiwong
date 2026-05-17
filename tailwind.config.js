/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./privacy/**/*.html",
    "./terms/**/*.html",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          cyan: "#0EA5E9",
          mint: "#10B981",
          ink: "#334155",
          dark: "#0F172A"
        }
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '-apple-system', 'BlinkMacSystemFont', '"PingFang TC"', '"Microsoft JhengHei"', 'sans-serif']
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(37,99,235,0.45)",
        "glow-cyan": "0 0 50px -8px rgba(14,165,233,0.55)",
        card: "0 8px 24px -8px rgba(15,23,42,0.08)",
        "card-hover": "0 16px 40px -12px rgba(37,99,235,0.25)"
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: [],
};
