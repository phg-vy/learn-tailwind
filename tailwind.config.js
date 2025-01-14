/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        encode: ["Encode Sans", "sans-serif"],
        lora: ["Lora", "sereif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive'],
    },
  },
  plugins: [

  ],
};
