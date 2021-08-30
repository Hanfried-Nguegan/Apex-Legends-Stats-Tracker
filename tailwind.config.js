module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gunpowder: "#414252",
        sharptuna: "#1d1d1d",
        blackshark: "#25262E",
        sweetmayhem: "#cbb765",
        madtrouble: "#665c33",
      },
      backgroundImage: (theme) => ({
        "worlds-edge": "url('/images/worlds_edge.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
