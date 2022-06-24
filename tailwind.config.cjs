const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "luxury"
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
