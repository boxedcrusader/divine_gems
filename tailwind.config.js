// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
