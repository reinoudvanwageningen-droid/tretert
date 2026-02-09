/* global tailwind */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        caps: {
          blue: "#0F3057",
          orange: "#F05F22",
          night: "#0A1F3A",
          steel: "#E6E9EE"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 48, 87, 0.12)",
        lift: "0 24px 60px rgba(15, 48, 87, 0.18)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
        fadeIn: "fadeIn 700ms ease-out both",
        floaty: "floaty 9s ease-in-out infinite",
        slideUp: "slideUp 800ms ease-out both"
      }
    }
  }
};
